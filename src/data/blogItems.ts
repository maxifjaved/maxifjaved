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
  jsonFile?: string;
  relatedPosts: RelatedPost[];
}

export const blogItems: BlogItem[] = [
  {
    slug: "digital-signage-storage-architecture-cloudflare-r2-vs-aws-s3-vs-ec2",
    title:
      "Digital Signage Storage Architecture: Cloudflare R2 vs AWS S3 vs EC2",
    subtitle:
      "Key Points/Decision Snapshot- Use object storage + CDN by default. R2 minimizes surprise bills via zero egress; S3 integrates tightly with CloudFront and AWS tooling.- Cost drivers: storage $/GB-month",
    metaDescription:
      "A decision-focused comparison of Cloudflare R2, AWS S3, and EC2-origin storage architectures for digital signage—costs, scalability, durability, CDNs, and real-world scenarios.",
    category: "Architecture & Cost Optimization",
    date: new Date("2025-09-25"),
    author: {
      name: "Muhammad Asif Javed",
      title: "10+ years experience, WebRTC specialist, Full-Stack architect",
      bio: "Full-Stack Developer & WebRTC Expert with 10+ years experience specializing in real-time communication systems",
      avatar: "author-avatar.jpg",
    },
    readTime: "9 min read",
    featuredImage: "/img/blogs/digital-signage-origin-cdn.png",
    content: `// Content will be loaded from 01.json`,
    jsonFile: "01.json",
    relatedPosts: [],
  },
];
