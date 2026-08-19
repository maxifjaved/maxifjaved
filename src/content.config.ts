import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/blogs" }),
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
      avatar: z.url().optional(),
      expertise_areas: z.array(z.string()).optional(),
      social_links: z
        .object({
          twitter: z.string().optional(),
          linkedin: z.string().optional(),
          github: z.string().optional(),
        })
        .optional(),
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
    midArticleImage: z
      .object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
        width: z.number(),
        height: z.number(),
      })
      .optional(),

    // SEO
    keywords: z.array(z.string()).default([]),
    canonicalUrl: z.url().optional(),
    focusKeyword: z.string().optional(),

    // Enhanced content
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
    citations: z
      .array(
        z.object({
          id: z.number(),
          title: z.string(),
          url: z.url(),
          accessed: z.string(),
          type: z.enum(["official-docs", "reference", "article"]),
        }),
      )
      .optional(),
    relatedPosts: z
      .array(
        z.object({
          slug: z.string(),
          title: z.string(),
        }),
      )
      .default([]),

    // Geo/AI optimization
    quickAnswer: z.string().optional(),
    aiSummary: z.string().optional(),
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    // Core metadata
    title: z.string(),
    description: z.string(),

    // Classification
    category: z.enum([
      "edtech",
      "interactive-displays",
      "business-intelligence",
      "cybersecurity",
      "insurance-tech",
      "ai-marketing",
      "cloud-infrastructure",
      "mobile-apps",
      "3d-visualization",
    ]),
    featured: z.boolean().default(false),
    status: z
      .enum(["completed", "in-progress", "archived"])
      .default("completed"),

    // Timeline
    startDate: z.string(), // YYYY-MM format
    endDate: z.string(),
    duration: z.string(),

    // Team & Role
    role: z.string(),
    teamSize: z.string(),

    // Tech stack
    technologies: z.array(z.string()),
    tags: z.array(z.string()).default([]),

    // Links
    links: z.object({
      liveUrl: z.url().nullable(),
      companyUrl: z.url().nullable(),
      caseStudyUrl: z.url().nullable(),
      demoUrl: z.url().nullable(),
    }),

    // Images with optimization support
    images: z.object({
      featuredImage: z.object({
        src: z.string(),
        alt: z.string(),
        width: z.number().default(1200),
        height: z.number().default(630),
      }),
      thumbnail: z.object({
        src: z.string(),
        alt: z.string(),
        width: z.number().default(400),
        height: z.number().default(300),
      }),
      gallery: z
        .array(
          z.object({
            src: z.string(),
            alt: z.string(),
            width: z.number().default(800),
            height: z.number().default(600),
          }),
        )
        .default([]),
    }),

    // SEO
    seo: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()).default([]),
    }),

    // Business context
    businessContext: z.object({
      client: z.string(),
      company: z.string(),
      industry: z.string(),
      userBase: z.string(),
    }),

    // Achievements & Metrics
    keyAchievements: z.array(z.string()).default([]),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          description: z.string(),
        }),
      )
      .default([]),

    // Features (list in frontmatter, details in MDX)
    keyFeatures: z.array(z.string()).default([]),

    // Impact
    impactResults: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blogs: blogCollection,
  projects: projectCollection,
};
