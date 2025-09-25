#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOGS_DIR = path.join(__dirname, '..', 'src', 'data', 'blogs');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'blogItems.ts');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function generateBlogItemFromJson(jsonData, filename) {
  const fileBaseName = path.basename(filename, '.json');

  // Generate slug from title if available, otherwise use filename
  const slug = jsonData.seo?.slug || slugify(jsonData.title || fileBaseName);

  return {
    slug,
    title: jsonData.title || 'Untitled',
    subtitle: jsonData.summary_markdown?.replace(/\*\*|\n/g, '').substring(0, 200) || '',
    metaDescription: jsonData.seo?.meta_description || '',
    category: jsonData.category || 'General',
    date: `new Date("${jsonData.publication_date || new Date().toISOString().split('T')[0]}")`,
    author: {
      name: jsonData.author?.name || 'Muhammad Asif Javed',
      title: jsonData.author?.credentials || 'Full-Stack Developer',
      bio: jsonData.author?.bio || 'Experienced developer specializing in modern web technologies.',
      avatar: jsonData.author?.avatar || '/profile-image.jpg'
    },
    readTime: `${jsonData.seo?.estimated_reading_time || 5} min read`,
    featuredImage: jsonData.featured_image?.file ? `/img/blogs/${jsonData.featured_image.file}` : '/img/blog-default.jpg',
    content: `// Content will be loaded from ${filename}`,
    jsonFile: filename, // Reference to the original JSON file
    relatedPosts: [] // Will be populated later based on category/tags
  };
}

function generateTypeScriptContent(blogItems) {
  const imports = `// Auto-generated file. Do not edit manually.
// Run 'npm run generate:blogs' to regenerate.

export interface Author {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

export interface RelatedPost {
  slug: string;
  title: string;
  date: Date;
  category: string;
  thumbnail: string;
}

export interface BlogItem {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription?: string;
  category: string;
  date: Date;
  author: Author;
  readTime: string;
  featuredImage: string;
  content: string;
  jsonFile?: string; // Reference to source JSON file
  relatedPosts: RelatedPost[];
  jsonLd?: object;
}

`;

  const blogItemsArray = blogItems.map(item => {
    return `  {
    slug: "${item.slug}",
    title: "${item.title}",
    subtitle: "${item.subtitle}",
    metaDescription: "${item.metaDescription}",
    category: "${item.category}",
    date: ${item.date},
    author: {
      name: "${item.author.name}",
      title: "${item.author.title}",
      bio: "${item.author.bio}",
      avatar: "${item.author.avatar}",
    },
    readTime: "${item.readTime}",
    featuredImage: "${item.featuredImage}",
    content: \`${item.content}\`,
    jsonFile: "${item.jsonFile}",
    relatedPosts: [],
  }`;
  });

  return imports + `export const blogItems: BlogItem[] = [\n${blogItemsArray.join(',\n')}\n];\n`;
}

async function main() {
  try {
    console.log('🔍 Looking for JSON files in:', BLOGS_DIR);

    if (!fs.existsSync(BLOGS_DIR)) {
      throw new Error(`Blogs directory not found: ${BLOGS_DIR}`);
    }

    const files = fs.readdirSync(BLOGS_DIR)
      .filter(file => file.endsWith('.json'))
      .sort();

    console.log(`📄 Found ${files.length} JSON files:`, files);

    if (files.length === 0) {
      console.warn('⚠️  No JSON files found in blogs directory');
      return;
    }

    const blogItems = [];

    for (const file of files) {
      const filePath = path.join(BLOGS_DIR, file);
      console.log(`📖 Processing: ${file}`);

      try {
        const jsonContent = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(jsonContent);
        const blogItem = generateBlogItemFromJson(jsonData, file);
        blogItems.push(blogItem);
        console.log(`✅ Generated blog item: "${blogItem.title}"`);
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
        continue;
      }
    }

    if (blogItems.length === 0) {
      throw new Error('No valid blog items were generated');
    }

    console.log(`\n📝 Generating TypeScript file with ${blogItems.length} blog items...`);
    const tsContent = generateTypeScriptContent(blogItems);

    // Backup existing file if it exists
    if (fs.existsSync(OUTPUT_FILE)) {
      const backupFile = OUTPUT_FILE + '.backup';
      fs.copyFileSync(OUTPUT_FILE, backupFile);
      console.log(`💾 Backed up existing file to: ${path.basename(backupFile)}`);
    }

    fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf8');

    console.log(`✅ Successfully generated: ${path.relative(process.cwd(), OUTPUT_FILE)}`);
    console.log(`📊 Total blog items: ${blogItems.length}`);
    console.log('\n🎉 Blog items generation completed!');

  } catch (error) {
    console.error('❌ Error generating blog items:', error.message);
    process.exit(1);
  }
}

main();