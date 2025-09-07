import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  // Sort posts by date (newest first)
  const sortedPosts = blog.sort((a, b) => 
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: 'Muhammad Asif Javed - Blog',
    description: 'Latest articles on WebRTC, real-time systems, and enterprise development',
    site: context.site ?? 'https://maxifjaved.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.subtitle,
      link: `/blogs/${post.slug}/`,
      author: post.data.author.name,
      categories: [post.data.category],
    })),
    customData: `<language>en-us</language>`,
  });
}