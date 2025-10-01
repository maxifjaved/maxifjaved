// Auto-generated file. Do not edit manually.
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

export const blogItems: BlogItem[] = [
  {
    slug: "digital-signage-storage-architecture-cloudflare-r2-vs-aws-s3-vs-ec2",
    title: "Digital Signage Storage Architecture: Cloudflare R2 vs AWS S3 vs EC2",
    subtitle: "Key Points/Decision Snapshot- Use object storage + CDN by default. R2 minimizes surprise bills via zero egress; S3 integrates tightly with CloudFront and AWS tooling.- Cost drivers: storage $/GB-month",
    metaDescription: "A decision-focused comparison of Cloudflare R2, AWS S3, and EC2-origin storage architectures for digital signage—costs, scalability, durability, CDNs, and real-world scenarios.",
    category: "Architecture & Cost Optimization",
    date: new Date("2025-09-04"),
    author: {
      name: "Muhammad Asif Javed",
      title: "10+ years experience, WebRTC specialist, Full-Stack architect",
      bio: "Full-Stack Developer & WebRTC Expert with 10+ years experience specializing in real-time communication systems",
      avatar: "author-avatar.jpg",
    },
    readTime: "9 min read",
    featuredImage: "/img/blogs/01-digital-signage-storage-architecture-cloudflare-r2-vs-aws-s3-vs-ec2-01.jpeg",
    content: `// Content will be loaded from 01.json`,
    jsonFile: "01.json",
    relatedPosts: [],
  },
  {
    slug: "digital-signage-comms-2025-firebase-vs-socket-io-vs-http-polling",
    title: "Digital Signage Comms 2025: Firebase vs Socket.IO vs HTTP Polling",
    subtitle: "Decision Snapshot- Socket.IO for low-latency push, full control, and best $/GB (cloud egress rates). Requires ops (sticky sessions, Redis, autoscale).- Firebase RTDB for managed fan-out and rapid deli",
    metaDescription: "Which backend should power real-time updates for digital signage in 2025—Firebase, Socket.IO, or HTTP polling? See latency, scale limits, costs, and a clear decision matrix.",
    category: "Realtime & Systems Architecture",
    date: new Date("2025-09-02"),
    author: {
      name: "Muhammad Asif Javed",
      title: "10+ years experience, WebRTC specialist, Full-Stack architect",
      bio: "Full-Stack Developer & WebRTC Expert with 10+ years experience specializing in real-time communication systems",
      avatar: "author-avatar.jpg",
    },
    readTime: "10 min read",
    featuredImage: "/img/blogs/02-digital-signage-comms-2025-firebase-vs-socket-io-vs-http-polling-01.webp",
    content: `// Content will be loaded from 02.json`,
    jsonFile: "02.json",
    relatedPosts: [],
  },
  {
    slug: "fail-fast-environment-validation-in-elysiajs",
    title: "Stop Silent Failures: A Type-Safe, Fail-Fast Environment Validator for Elysia.js",
    subtitle: "Key Points/Decision Snapshot- Problem: Bun auto-loads `.env` but doesn’t validate or type values—leading to delayed, production-only crashes.- Principle: Fail-fast validation halts startup on misconfi",
    metaDescription: "Stop silent production failures in Elysia.js. A complete, type-safe, fail-fast env validation guide using TypeBox on Bun—plus a production-ready plugin, @maxifjaved/elysia-env.",
    category: "Backend Development",
    date: new Date("2025-10-01"),
    author: {
      name: "Muhammad Asif Javed",
      title: "10+ years experience, WebRTC specialist, Full-Stack architect",
      bio: "Full-Stack Developer & WebRTC Expert with 10+ years experience specializing in real-time systems and backend reliability.",
      avatar: "https://maxifjaved.com/author-avatar.jpg",
    },
    readTime: "12 min read",
    featuredImage: "/img/blogs/03-fail-fast-environment-validation-in-elysiajs-01.webp",
    content: `// Content will be loaded from 3.json`,
    jsonFile: "3.json",
    relatedPosts: [],
  }
];
