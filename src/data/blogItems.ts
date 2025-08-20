// src/data/blogItems.ts
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
  relatedPosts: RelatedPost[];
}

export const blogItems: BlogItem[] = [
  // {
  //   slug: "future-of-ai-2025",
  //   title: "The Future of AI: Trends to Watch in 2025",
  //   subtitle: "Discover the emerging AI technologies shaping industries",
  //   metaDescription:
  //     "Discover the top AI trends for 2025, including generative AI, ethical frameworks, automation, and edge AI, from Futura AI Solutions.",
  //   category: "Machine Learning",
  //   date: new Date("2025-03-15"),
  //   author: {
  //     name: "Dr. Anna Lee",
  //     title: "Chief AI Scientist",
  //     bio: "Dr. Lee is a leading expert in machine learning with over 15 years of experience, driving innovation at Futura AI.",
  //     avatar: "/img/female4.jpg",
  //   },
  //   readTime: "8 min read",
  //   featuredImage: "/img/blog1.jpg",
  //   content: `
  //     <p class="lead text-gray-200 mb-6">Artificial Intelligence (AI) is transforming industries at an unprecedented pace. As we approach 2025, key trends are set to redefine the AI landscape. Here’s what to expect.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">1. Generative AI Matures</h2>
  //     <p>Generative AI is evolving beyond content creation, powering applications in design, entertainment, and more, with enhanced precision and creativity.</p>
  //     <blockquote class="border-l-4 border-cyber-blue pl-4 italic my-6">"AI is no longer just a tool—it's a catalyst for human ingenuity." — Dr. Anna Lee</blockquote>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">2. Ethical AI Frameworks</h2>
  //     <p>With growing AI adoption, ethical guidelines are critical. Expect robust regulations to ensure fairness, transparency, and accountability in AI systems.</p>

  //     <img src="/img/blog6.jpg" alt="AI Trends" class="w-full object-cover rounded-xl my-6 border border-cyber-blue/20 glow">

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">3. Edge AI Expansion</h2>
  //     <p>Edge AI is enabling real-time processing on devices, from autonomous vehicles to smart homes, prioritizing speed and privacy.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">Conclusion</h2>
  //     <p>The AI revolution is accelerating, and Futura AI is leading the way with innovative, ethical solutions for a brighter future.</p>
  //   `,
  //   relatedPosts: [
  //     {
  //       slug: "nlp-in-business",
  //       title: "How NLP is Transforming Customer Service",
  //       date: new Date("2025-02-28"),
  //       category: "NLP",
  //       thumbnail: "/img/blog2.jpg",
  //     },
  //     {
  //       slug: "generative-ai-creative",
  //       title: "The Rise of Generative AI: Creative Automation",
  //       date: new Date("2025-01-25"),
  //       category: "Generative AI",
  //       thumbnail: "/img/blog4.jpg",
  //     },
  //   ],
  // },
  // {
  //   slug: "nlp-in-business",
  //   title: "How NLP is Transforming Customer Service",
  //   subtitle: "Leveraging natural language processing to enhance customer experiences",
  //   metaDescription:
  //     "Learn how NLP is revolutionizing customer service with AI-driven chatbots and sentiment analysis at Futura AI Solutions.",
  //   category: "NLP",
  //   date: new Date("2025-02-28"),
  //   author: {
  //     name: "Dr. John Carter",
  //     title: "Lead NLP Researcher",
  //     bio: "Dr. Carter specializes in natural language processing and has been instrumental in developing AI-driven customer service solutions.",
  //     avatar: "/img/male1.jpg",
  //   },
  //   readTime: "6 min read",
  //   featuredImage: "/img/blog2.jpg",
  //   content: `
  //     <p class="lead text-gray-200 mb-6">Natural Language Processing (NLP) is redefining customer service by enabling smarter, more responsive interactions.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">1. Advanced Chatbots</h2>
  //     <p>NLP-powered chatbots handle complex queries with human-like understanding, improving response times and customer satisfaction.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">2. Sentiment Analysis</h2>
  //     <p>By analyzing customer feedback, NLP identifies emotions and trends, allowing businesses to address issues proactively.</p>

  //     <img src="/img/blog5.jpg" alt="NLP Chatbot" class="w-full object-cover rounded-xl my-6 border border-cyber-blue/20 glow">

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">Conclusion</h2>
  //     <p>NLP is transforming customer experiences, and Futura AI’s solutions are setting new standards for efficiency and personalization.</p>
  //   `,
  //   relatedPosts: [
  //     {
  //       slug: "future-of-ai-2025",
  //       title: "The Future of AI: Trends to Watch in 2025",
  //       date: new Date("2025-03-15"),
  //       category: "Machine Learning",
  //       thumbnail: "/img/blog1.jpg",
  //     },
  //     {
  //       slug: "cloud-ai-scaling",
  //       title: "Scaling AI with Cloud Integration",
  //       date: new Date("2025-01-10"),
  //       category: "Cloud AI",
  //       thumbnail: "/img/blog5.jpg",
  //     },
  //   ],
  // },
  // {
  //   slug: "computer-vision-healthcare",
  //   title: "Computer Vision in Healthcare",
  //   subtitle: "Revolutionizing diagnostics and patient care with AI-driven image analysis",
  //   metaDescription:
  //     "Explore how computer vision is transforming healthcare through advanced image analysis for diagnostics, from Futura AI Solutions.",
  //   category: "Computer Vision",
  //   date: new Date("2025-02-10"),
  //   author: {
  //     name: "Dr. Emily Chen",
  //     title: "Computer Vision Specialist",
  //     bio: "Dr. Chen focuses on applying computer vision to healthcare, improving diagnostic accuracy at Futura AI.",
  //     avatar: "/img/female3.jpg",
  //   },
  //   readTime: "7 min read",
  //   featuredImage: "/img/blog3.jpg",
  //   content: `
  //     <p class="lead text-gray-200 mb-6">Computer vision is reshaping healthcare by enabling faster, more accurate diagnostics through AI-powered image analysis.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">1. Enhanced Diagnostics</h2>
  //     <p>AI models analyze medical images like X-rays and MRIs, detecting abnormalities with precision rivaling human experts.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">2. Personalized Treatment</h2>
  //     <p>Computer vision aids in tailoring treatments by analyzing patient data, improving outcomes in fields like oncology.</p>

  //     <img src="/img/blog4.jpg" alt="Medical Imaging" class="w-full object-cover rounded-xl my-6 border border-cyber-blue/20 glow">

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">Conclusion</h2>
  //     <p>Computer vision is a game-changer for healthcare, and Futura AI is driving innovation to save lives and improve care.</p>
  //   `,
  //   relatedPosts: [
  //     {
  //       slug: "future-of-ai-2025",
  //       title: "The Future of AI: Trends to Watch in 2025",
  //       date: new Date("2025-03-15"),
  //       category: "Machine Learning",
  //       thumbnail: "/img/blog1.jpg",
  //     },
  //     {
  //       slug: "data-analytics-insights",
  //       title: "Unlocking Insights with Data Analytics",
  //       date: new Date("2024-12-20"),
  //       category: "Data Analytics",
  //       thumbnail: "/img/blog6.jpg",
  //     },
  //   ],
  // },
  // {
  //   slug: "generative-ai-creative",
  //   title: "The Rise of Generative AI: Creative Automation",
  //   subtitle: "Uncovering the potential of generative AI in content creation",
  //   metaDescription:
  //     "Discover how generative AI is automating creative processes, from text to images, at Futura AI Solutions.",
  //   category: "Generative AI",
  //   date: new Date("2025-01-25"),
  //   author: {
  //     name: "Michael Torres",
  //     title: "AI Creative Lead",
  //     bio: "Michael Torres explores the intersection of AI and creativity, developing generative AI tools at Futura AI.",
  //     avatar: "/img/male2.jpg",
  //   },
  //   readTime: "6 min read",
  //   featuredImage: "/img/blog4.jpg",
  //   content: `
  //     <p class="lead text-gray-200 mb-6">Generative AI is unlocking new possibilities in creative automation, transforming how content is produced.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">1. Text Generation</h2>
  //     <p>AI models generate high-quality articles, scripts, and marketing copy, streamlining content creation for businesses.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">2. Visual Content</h2>
  //     <p>From digital art to product mockups, generative AI creates stunning visuals, reducing reliance on manual design.</p>

  //     <img src="/img/blog5.jpg" alt="Generative AI Art" class="w-full object-cover rounded-xl my-6 border border-cyber-blue/20 glow">

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">Conclusion</h2>
  //     <p>Generative AI is redefining creativity, and Futura AI is empowering businesses with cutting-edge tools.</p>
  //   `,
  //   relatedPosts: [
  //     {
  //       slug: "future-of-ai-2025",
  //       title: "The Future of AI: Trends to Watch in 2025",
  //       date: new Date("2025-03-15"),
  //       category: "Machine Learning",
  //       thumbnail: "/img/blog1.jpg",
  //     },
  //     {
  //       slug: "nlp-in-business",
  //       title: "How NLP is Transforming Customer Service",
  //       date: new Date("2025-02-28"),
  //       category: "NLP",
  //       thumbnail: "/img/blog2.jpg",
  //     },
  //   ],
  // },
  // {
  //   slug: "cloud-ai-scaling",
  //   title: "Scaling AI with Cloud Integration",
  //   subtitle: "How cloud platforms enable scalable and secure AI solutions",
  //   metaDescription:
  //     "Explore how cloud integration powers scalable AI solutions for businesses, from Futura AI Solutions.",
  //   category: "Cloud AI",
  //   date: new Date("2025-01-10"),
  //   author: {
  //     name: "Sarah Kim",
  //     title: "Cloud Architect",
  //     bio: "Sarah Kim designs scalable cloud infrastructures to support Futura AI’s cutting-edge AI solutions.",
  //     avatar: "/img/female2.jpg",
  //   },
  //   readTime: "7 min read",
  //   featuredImage: "/img/blog5.jpg",
  //   content: `
  //     <p class="lead text-gray-200 mb-6">Cloud integration is the backbone of scalable AI, enabling businesses to deploy robust solutions efficiently.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">1. Flexible Infrastructure</h2>
  //     <p>Cloud platforms like AWS and Azure provide the computational power needed for training and deploying AI models.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">2. Enhanced Security</h2>
  //     <p>Cloud providers offer advanced security features, ensuring AI solutions are protected against threats.</p>

  //     <img src="/img/blog3.jpg" alt="Cloud AI" class="w-full object-cover rounded-xl my-6 border border-cyber-blue/20 glow">

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">Conclusion</h2>
  //     <p>Cloud-powered AI is transforming industries, and Futura AI delivers scalable, secure solutions for the future.</p>
  //   `,
  //   relatedPosts: [
  //     {
  //       slug: "future-of-ai-2025",
  //       title: "The Future of AI: Trends to Watch in 2025",
  //       date: new Date("2025-03-15"),
  //       category: "Machine Learning",
  //       thumbnail: "/img/blog1.jpg",
  //     },
  //     {
  //       slug: "computer-vision-healthcare",
  //       title: "Computer Vision in Healthcare",
  //       date: new Date("2025-02-10"),
  //       category: "Computer Vision",
  //       thumbnail: "/img/blog3.jpg",
  //     },
  //   ],
  // },
  // {
  //   slug: "data-analytics-insights",
  //   title: "Unlocking Insights with Data Analytics",
  //   subtitle: "Transforming raw data into actionable strategies",
  //   metaDescription:
  //     "Discover how advanced data analytics drives business growth with actionable insights, from Futura AI Solutions.",
  //   category: "Data Analytics",
  //   date: new Date("2024-12-20"),
  //   author: {
  //     name: "Dr. Raj Patel",
  //     title: "Data Science Lead",
  //     bio: "Dr. Patel specializes in data analytics, helping businesses unlock insights at Futura AI.",
  //     avatar: "/img/male3.jpg",
  //   },
  //   readTime: "6 min read",
  //   featuredImage: "/img/blog6.jpg",
  //   content: `
  //     <p class="lead text-gray-200 mb-6">Data analytics is empowering businesses to turn raw data into strategies that drive growth and innovation.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">1. Predictive Analytics</h2>
  //     <p>AI-driven predictive models forecast trends, enabling businesses to make informed decisions and stay ahead.</p>

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">2. Real-Time Insights</h2>
  //     <p>Advanced analytics platforms process data in real-time, providing actionable insights for dynamic markets.</p>

  //     <img src="/img/blog3.jpg" alt="Data Analytics" class="w-full object-cover rounded-xl my-6 border border-cyber-blue/20 glow">

  //     <h2 class="text-2xl font-bold text-cyber-blue mt-8 mb-4">Conclusion</h2>
  //     <p>Data analytics is the key to unlocking business potential, and Futura AI delivers powerful tools for success.</p>
  //   `,
  //   relatedPosts: [
  //     {
  //       slug: "cloud-ai-scaling",
  //       title: "Scaling AI with Cloud Integration",
  //       date: new Date("2025-01-10"),
  //       category: "Cloud AI",
  //       thumbnail: "/img/blog5.jpg",
  //     },
  //     {
  //       slug: "computer-vision-healthcare",
  //       title: "Computer Vision in Healthcare",
  //       date: new Date("2025-02-10"),
  //       category: "Computer Vision",
  //       thumbnail: "/img/blog3.jpg",
  //     },
  //   ],
  // },
];