import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string().optional(),
    category: z.string(),
    date: z.date(),
    author: z.object({
      name: z.string(),
      title: z.string(),
      bio: z.string(),
      avatar: z.string(),
    }),
    readTime: z.string(),
    featuredImage: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    relatedPosts: z.array(z.object({
      slug: z.string(),
      title: z.string(),
      date: z.date(),
      category: z.string(),
      thumbnail: z.string(),
    })).optional(),
    seo: z.object({
      metaDescription: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      ogImage: z.string().optional(),
      canonicalUrl: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};