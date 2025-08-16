import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['edtech', 'interactive-displays', 'business-intelligence', 'cybersecurity', 'insurance-tech', 'full-stack']),
    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),
    
    // Dates and duration
    startDate: z.string(),
    endDate: z.string().optional(),
    duration: z.string(),
    
    // Technical details
    role: z.string(),
    teamSize: z.string(),
    technologies: z.array(z.string()),
    tags: z.array(z.string()),
    
    // Links and resources
    liveUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    caseStudyUrl: z.string().optional(),
    companyUrl: z.string().optional(),
    
    // Visual assets - using string paths for now (images provided later)
    featuredImage: z.string(),
    images: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    
    // SEO and metadata
    seoTitle: z.string(),
    seoDescription: z.string(),
    keywords: z.array(z.string()),
    
    // Business context
    client: z.string().optional(),
    company: z.string().optional(),
    industry: z.string().optional(),
    userBase: z.string().optional(),
    
    // Results and impact
    keyAchievements: z.array(z.string()).optional(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      description: z.string().optional()
    })).optional(),
    
    // Content organization
    featured: z.boolean().default(false),
    priority: z.number().default(0),
    isPublic: z.boolean().default(true),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};