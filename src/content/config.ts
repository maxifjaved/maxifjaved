import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // MDX files
  schema: z.object({
    // Core metadata
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),

    // Taxonomy
    category: z.string(),
    tags: z.array(z.string()).default([]),

    // Publishing
    date: z.date(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().default(false),

    // Author
    author: z.object({
      name: z.string(),
      title: z.string(),
      bio: z.string(),
      avatar: z.string().url().optional(),
      expertise_areas: z.array(z.string()).optional(),
      social_links: z.object({
        twitter: z.string().optional(),
        linkedin: z.string().optional(),
        github: z.string().optional(),
      }).optional(),
    }),

    // Reading experience
    readTime: z.string(),

    // Images
    featuredImage: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      width: z.number(),
      height: z.number(),
    }),
    midArticleImage: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      width: z.number(),
      height: z.number(),
    }).optional(),

    // SEO
    keywords: z.array(z.string()).default([]),
    canonicalUrl: z.string().url().optional(),
    focusKeyword: z.string().optional(),

    // Enhanced content
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    citations: z.array(z.object({
      id: z.number(),
      title: z.string(),
      url: z.string().url(),
      accessed: z.string(),
      type: z.enum(['official-docs', 'reference', 'article']),
    })).optional(),
    relatedPosts: z.array(z.object({
      slug: z.string(),
      title: z.string(),
    })).default([]),

    // Geo/AI optimization
    quickAnswer: z.string().optional(),
    aiSummary: z.string().optional(),
  }),
});

export const collections = { blog: blogCollection };
