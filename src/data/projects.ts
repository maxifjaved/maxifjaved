/**
 * Portfolio Projects Data - Production Ready TypeScript Module
 * 
 * This module provides type-safe access to Muhammad Asif Javed's portfolio projects
 * with comprehensive type definitions, helper functions, and data validation.
 * 
 * @author Muhammad Asif Javed
 * @version 1.0.0
 */

// ================================
// CORE TYPE DEFINITIONS
// ================================

/**
 * Represents a project metric with label, value, and description
 */
export interface ProjectMetric {
  readonly label: string;
  readonly value: string;
  readonly description: string;
}

/**
 * Contains all project-related links (some may be null if not available)
 */
export interface ProjectLinks {
  readonly liveUrl: string | null;
  readonly companyUrl: string | null;
  readonly caseStudyUrl: string | null;
  readonly demoUrl: string | null;
}

/**
 * Project image assets for display purposes
 */
export interface ProjectImages {
  readonly featuredImage: string;
  readonly images: readonly string[];
  readonly thumbnail: string;
}

/**
 * SEO-related metadata for project pages
 */
export interface ProjectSEO {
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly keywords: readonly string[];
}

/**
 * Business context information for each project
 */
export interface BusinessContext {
  readonly client: string;
  readonly company: string;
  readonly industry: string;
  readonly userBase: string;
}

/**
 * Complete project definition with all metadata
 */
export interface Project {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly category: ProjectCategory;
  readonly featured: boolean;
  readonly status: ProjectStatus;
  readonly startDate: string;
  readonly endDate: string;
  readonly duration: string;
  readonly role: string;
  readonly teamSize: string;
  readonly technologies: readonly string[];
  readonly tags: readonly string[];
  readonly links: ProjectLinks;
  readonly images: ProjectImages;
  readonly seo: ProjectSEO;
  readonly businessContext: BusinessContext;
  readonly keyAchievements: readonly string[];
  readonly metrics: readonly ProjectMetric[];
}

/**
 * Project category definition
 */
export interface Category {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly projects: readonly string[];
}

/**
 * Technology stack organization
 */
export interface TechnologyStack {
  readonly frontend: readonly string[];
  readonly backend: readonly string[];
  readonly databases: readonly string[];
  readonly realtime: readonly string[];
  readonly mobile: readonly string[];
  readonly cloud: readonly string[];
  readonly tools: readonly string[];
}

/**
 * Portfolio statistics and metrics
 */
export interface PortfolioStats {
  readonly yearsExperience: number;
  readonly projectsCompleted: number;
  readonly technologiesUsed: number;
  readonly industriesServed: number;
}

/**
 * Main portfolio data structure
 */
export interface PortfolioData {
  readonly projects: readonly Project[];
  readonly categories: readonly Category[];
  readonly technologies: TechnologyStack;
  readonly stats: PortfolioStats;
}

// ================================
// TYPE UNIONS & CONSTANTS
// ================================

/**
 * Valid project categories
 */
export type ProjectCategory = 
  | 'edtech'
  | 'interactive-displays'
  | 'business-intelligence'
  | 'cybersecurity'
  | 'insurance-tech';

/**
 * Valid project statuses
 */
export type ProjectStatus = 
  | 'completed'
  | 'in-progress'
  | 'archived';

/**
 * Available project categories for type-safe filtering
 */
export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  'edtech',
  'interactive-displays',
  'business-intelligence',
  'cybersecurity',
  'insurance-tech'
] as const;

/**
 * Available project statuses
 */
export const PROJECT_STATUSES: readonly ProjectStatus[] = [
  'completed',
  'in-progress',
  'archived'
] as const;

// ================================
// TYPE GUARDS
// ================================

/**
 * Type guard to check if a string is a valid ProjectCategory
 */
export const isProjectCategory = (value: string): value is ProjectCategory => {
  return PROJECT_CATEGORIES.includes(value as ProjectCategory);
};

/**
 * Type guard to check if a string is a valid ProjectStatus
 */
export const isProjectStatus = (value: string): value is ProjectStatus => {
  return PROJECT_STATUSES.includes(value as ProjectStatus);
};

/**
 * Type guard to check if an object is a valid Project
 */
export const isProject = (obj: any): obj is Project => {
  return (
    obj &&
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    isProjectCategory(obj.category) &&
    typeof obj.featured === 'boolean' &&
    Array.isArray(obj.technologies)
  );
};

// ================================
// PORTFOLIO DATA
// ================================

/**
 * Complete portfolio data with immutable structure
 */
export const portfolioData: PortfolioData = {
  projects: [
    {
      id: "contribute-cloud",
      slug: "contribute-cloud",
      title: "Contribute Cloud - Educational Collaboration Platform",
      description: "Developed a comprehensive cloud-based educational collaboration platform revolutionizing classroom interaction with real-time content sharing, screen casting, and interactive learning across any device.",
      category: "edtech",
      featured: true,
      status: "completed",
      startDate: "2020-01",
      endDate: "2021-06",
      duration: "18 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design)",
      technologies: ["Node.js", "React", "MongoDB", "Socket.io", "OpenVidu WebRTC", "Fabric.js", "AWS S3", "Digital Ocean"],
      tags: ["EdTech", "Real-time Collaboration", "WebRTC", "Interactive Learning", "Canvas", "Educational Games", "Cloud Platform"],
      links: {
        liveUrl: "https://contribute.cloud/",
        companyUrl: "https://touchittechnologies.com/contribute_cloud/",
        caseStudyUrl: "https://contribute.cloud/",
        demoUrl: null
      },
      images: {
        featuredImage: "/img/projects/contribute-hero.jpg",
        images: ["/img/projects/contribute-whiteboard.jpg", "/img/projects/contribute-games.jpg", "/img/projects/contribute-casting.jpg"],
        thumbnail: "/img/projects/contribute-thumb.jpg"
      },
      seo: {
        seoTitle: "Contribute Cloud: Educational Collaboration Platform | Muhammad Asif Javed",
        seoDescription: "Built cloud-based educational platform with real-time screen casting, interactive whiteboarding, 40+ learning games, and cross-platform compatibility for modern digital classrooms.",
        keywords: ["educational technology", "classroom collaboration", "real-time screen sharing", "interactive whiteboard", "WebRTC", "educational games", "cloud platform", "K-12 education"]
      },
      businessContext: {
        client: "TouchIT Technologies",
        company: "TouchIT Technologies",
        industry: "Educational Technology",
        userBase: "K-12 Schools, Higher Education, Corporate Training"
      },
      keyAchievements: [
        "Deployed across numerous schools as part of TouchIT LED display suite",
        "Built 40+ interactive learning games with multi-zone gamification",
        "Implemented real-time collaboration supporting 50+ concurrent users",
        "Created 1.5 million+ searchable image gallery",
        "Achieved ultra-low latency WebRTC video conferencing"
      ],
      metrics: [
        {label: "Concurrent Users", value: "50+ per session", description: "Ultra-low latency WebRTC implementation"},
        {label: "Interactive Games", value: "40+", description: "Multi-zone collaborative gamification"},
        {label: "Image Library", value: "1.5M+", description: "Searchable educational resources"},
        {label: "Development Approach", value: "100% Solo", description: "Complete solo development"}
      ]
    },
    {
      id: "contribute-signage",
      slug: "contribute-signage",
      title: "Contribute Signage - Digital Signage Management Platform",
      description: "Developed a comprehensive digital signage management platform with cloud-based content management, multi-format support, and cross-platform applications for TouchIT Interactive LED displays.",
      category: "edtech",
      featured: false,
      status: "completed",
      startDate: "2017-08",
      endDate: "2018-03",
      duration: "7 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design)",
      technologies: ["PHP", "CodeIgniter", "Node.js", "React", "Fabric.js", "MySQL", "Electron", "Ionic", "Digital Ocean"],
      tags: ["Digital Signage", "Content Management", "Multi-platform", "Cloud Storage", "Electron", "Ionic", "Educational Technology"],
      links: {
        liveUrl: null,
        companyUrl: "https://touchittechnologies.com/",
        caseStudyUrl: null,
        demoUrl: null
      },
      images: {
        featuredImage: "/img/projects/contribute-signage-hero.jpg",
        images: ["/img/projects/signage-dashboard.jpg", "/img/projects/signage-content.jpg", "/img/projects/signage-apps.jpg"],
        thumbnail: "/img/projects/signage-thumb.jpg"
      },
      seo: {
        seoTitle: "Contribute Signage: Digital Signage Platform | Muhammad Asif Javed",
        seoDescription: "Built comprehensive digital signage management platform with cloud-based content management, Electron desktop apps, and Ionic mobile applications for TouchIT displays.",
        keywords: ["digital signage", "content management", "Electron app", "Ionic development", "cloud storage", "educational signage", "TouchIT technology"]
      },
      businessContext: {
        client: "TouchIT Technologies",
        company: "TouchIT Technologies",
        industry: "Educational Technology / Digital Signage",
        userBase: "Educational Institutions, Corporate Communications"
      },
      keyAchievements: [
        "Built comprehensive cloud-based digital signage platform",
        "Developed cross-platform applications (Electron + Ionic)",
        "Implemented multi-format content management system",
        "Created automated content scheduling and deployment",
        "Achieved seamless integration with TouchIT LED ecosystem"
      ],
      metrics: [
        {label: "Platform Support", value: "Multi-platform", description: "Desktop and mobile applications"},
        {label: "Content Formats", value: "Universal", description: "Images, videos, documents, web content"},
        {label: "Development Stack", value: "Full-stack", description: "PHP backend, React frontend, mobile apps"}
      ]
    },
    {
      id: "touchit-app-store",
      slug: "touchit-app-store",
      title: "TouchIT App Store 3.0 - Custom Android APK Distribution Platform",
      description: "Developed a custom Android APK distribution platform serving as an alternative app store for TouchIT Interactive LED displays with automated content acquisition and curated educational applications.",
      category: "interactive-displays",
      featured: false,
      status: "completed",
      startDate: "2017-02",
      endDate: "2017-07",
      duration: "5 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design)",
      technologies: ["React", "Node.js", "Java", "React Native", "Android Development", "Digital Ocean", "Content Acquisition"],
      tags: ["Android Development", "App Distribution", "APK Management", "Content Acquisition", "Educational Apps", "Custom App Store"],
      links: {
        liveUrl: "https://www.touchitappstore.com/",
        companyUrl: "https://touchittechnologies.com/",
        caseStudyUrl: null,
        demoUrl: null
      },
      images: {
        featuredImage: "/img/projects/touchit-appstore-hero.jpg",
        images: ["/img/projects/appstore-interface.jpg", "/img/projects/appstore-catalog.jpg", "/img/projects/appstore-mobile.jpg"],
        thumbnail: "/img/projects/appstore-thumb.jpg"
      },
      seo: {
        seoTitle: "TouchIT App Store: Custom Android Distribution Platform | Muhammad Asif Javed",
        seoDescription: "Built custom Android APK distribution platform with automated content acquisition, curated educational applications, and seamless integration with TouchIT LED displays.",
        keywords: ["Android app store", "APK distribution", "educational apps", "content acquisition", "custom app store", "TouchIT technology", "Android development"]
      },
      businessContext: {
        client: "TouchIT Technologies",
        company: "TouchIT Technologies",
        industry: "Educational Technology / Interactive Displays",
        userBase: "Educational Institutions, TouchIT Device Users"
      },
      keyAchievements: [
        "Built custom Android APK distribution platform",
        "Implemented automated content acquisition scripts",
        "Created curated catalog of educational applications",
        "Developed both native Java and React Native versions",
        "Achieved seamless integration with TouchIT LED ecosystem"
      ],
      metrics: [
        {label: "Platform Type", value: "Custom App Store", description: "Alternative to Google Play Store"},
        {label: "Content Acquisition", value: "Automated", description: "Scripted app discovery and cataloging"},
        {label: "Development Versions", value: "Java + React Native", description: "Multiple technology implementations"}
      ]
    },
    {
      id: "managemyled",
      slug: "managemyled",
      title: "ManageMyLED - Central Remote Management Platform",
      description: "Developed a comprehensive remote management platform for TouchIT Interactive LED displays, enabling centralized control, real-time monitoring, and mass deployment capabilities across global installations.",
      category: "interactive-displays",
      featured: true,
      status: "completed",
      startDate: "2018-04",
      endDate: "2019-07",
      duration: "15 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design)",
      technologies: ["Node.js", "React", "MongoDB", "Digital Ocean", "Pusher", "Socket.io", "Fabric.js", "WebRTC", "Kotlin"],
      tags: ["Device Management", "Remote Control", "Real-time Monitoring", "Interactive Displays", "Mass Deployment", "Android Development"],
      links: {
        liveUrl: "https://managemyled.com/",
        companyUrl: "https://touchittechnologies.com/managemyled/",
        caseStudyUrl: null,
        demoUrl: null
      },
      images: {
        featuredImage: "/img/projects/managemyled-hero.jpg",
        images: ["/img/projects/managemyled-dashboard.jpg", "/img/projects/managemyled-monitoring.jpg", "/img/projects/managemyled-deployment.jpg"],
        thumbnail: "/img/projects/managemyled-thumb.jpg"
      },
      seo: {
        seoTitle: "ManageMyLED: Interactive Display Management Platform | Muhammad Asif Javed",
        seoDescription: "Built centralized remote management platform for TouchIT LED displays with real-time monitoring, mass deployment, and comprehensive device control capabilities.",
        keywords: ["device management", "remote control platform", "LED display management", "real-time monitoring", "mass deployment", "TouchIT technology", "interactive displays"]
      },
      businessContext: {
        client: "TouchIT Technologies",
        company: "TouchIT Technologies",
        industry: "Educational Technology / Interactive Displays",
        userBase: "IT Administrators, Educational Institutions, Corporate Clients"
      },
      keyAchievements: [
        "Built centralized management for thousands of global LED displays",
        "Implemented real-time device monitoring and health tracking",
        "Created mass deployment system for software updates",
        "Developed remote troubleshooting and diagnostic capabilities",
        "Achieved scalable architecture supporting global installations"
      ],
      metrics: [
        {label: "Device Management", value: "Global Scale", description: "Thousands of LED displays worldwide"},
        {label: "Real-time Monitoring", value: "24/7", description: "Continuous device health tracking"},
        {label: "Development Approach", value: "100% Solo", description: "Complete solo development"}
      ]
    },
    {
      id: "justcastit",
      slug: "justcastit",
      title: "JustCastIt - Browser-Based Wireless Screen Casting Platform",
      description: "Developed a revolutionary browser-based wireless screen casting platform eliminating software installation while enabling unlimited simultaneous screen sharing to TouchIT Interactive LED displays.",
      category: "interactive-displays",
      featured: true,
      status: "completed",
      startDate: "2019-08",
      endDate: "2020-12",
      duration: "16 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design)",
      technologies: ["React", "Node.js", "OpenVidu WebRTC", "Fabric.js", "PWA", "Digital Ocean"],
      tags: ["Screen Casting", "WebRTC", "Real-time Collaboration", "Browser-based", "Cross-platform", "Educational Technology"],
      links: {
        liveUrl: "https://justcastit.com/",
        companyUrl: "https://touchittechnologies.com/justcastit/",
        caseStudyUrl: null,
        demoUrl: null
      },
      images: {
        featuredImage: "/img/projects/justcastit-hero.jpg",
        images: ["/img/projects/justcastit-multicasting.jpg", "/img/projects/justcastit-interface.jpg", "/img/projects/justcastit-devices.jpg"],
        thumbnail: "/img/projects/justcastit-thumb.jpg"
      },
      seo: {
        seoTitle: "JustCastIt: Browser-Based Screen Casting Platform | Muhammad Asif Javed",
        seoDescription: "Built revolutionary wireless screen casting platform with unlimited simultaneous sharing, cross-platform compatibility, and zero software installation required.",
        keywords: ["screen casting", "wireless display", "browser-based casting", "WebRTC", "educational technology", "real-time collaboration", "TouchIT displays"]
      },
      businessContext: {
        client: "TouchIT Technologies",
        company: "TouchIT Technologies",
        industry: "Educational Technology / Interactive Displays",
        userBase: "Educational Institutions, Corporate Training"
      },
      keyAchievements: [
        "Eliminated software installation requirements for screen casting",
        "Built unlimited simultaneous screen sharing capabilities",
        "Achieved cross-platform compatibility (PC, Mac, Chromebook, Linux)",
        "Implemented revolutionary browser-based wireless casting solution",
        "Created real-time multi-user collaboration features"
      ],
      metrics: [
        {label: "Platform Compatibility", value: "Universal Browser-based", description: "Works on any device with web browser"},
        {label: "Simultaneous Casting", value: "Unlimited", description: "Multiple screens casting at once"},
        {label: "Installation Required", value: "Zero", description: "Completely browser-based solution"}
      ]
    },
    {
      id: "touchit-air",
      slug: "touchit-air",
      title: "TouchIT Air - iOS Screen Mirroring Receiver",
      description: "Developed an iOS screen mirroring receiver for TouchIT Interactive LED displays by implementing AirPlay protocol, enabling seamless wireless display from Apple devices.",
      category: "interactive-displays",
      featured: false,
      status: "completed",
      startDate: "2018-01",
      endDate: "2018-06",
      duration: "5 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design)",
      technologies: ["Java", "Android", "AirPlay Protocol", "AirplayServer", "iOS Integration"],
      tags: ["Screen Mirroring", "AirPlay", "iOS Integration", "Android Development", "Wireless Display", "Apple Ecosystem"],
      links: {
        liveUrl: null,
        companyUrl: "https://touchittechnologies.com/",
        caseStudyUrl: null,
        demoUrl: null
      },
      images: {
        featuredImage: "/img/projects/touchit-air-hero.jpg",
        images: ["/img/projects/touchit-air-mirroring.jpg", "/img/projects/touchit-air-interface.jpg"],
        thumbnail: "/img/projects/touchit-air-thumb.jpg"
      },
      seo: {
        seoTitle: "TouchIT Air: iOS Screen Mirroring Solution | Muhammad Asif Javed",
        seoDescription: "Built iOS screen mirroring receiver implementing AirPlay protocol for TouchIT LED displays, enabling seamless wireless display from Apple devices.",
        keywords: ["iOS screen mirroring", "AirPlay protocol", "wireless display", "Apple integration", "Android development", "TouchIT technology", "screen sharing"]
      },
      businessContext: {
        client: "TouchIT Technologies",
        company: "TouchIT Technologies",
        industry: "Educational Technology / Interactive Displays",
        userBase: "iOS Users, Educational Institutions"
      },
      keyAchievements: [
        "Successfully implemented AirPlay protocol on Android platform",
        "Enabled seamless iOS device integration with TouchIT displays",
        "Created wireless screen mirroring solution for Apple ecosystem",
        "Bridged iOS and Android platforms for educational technology",
        "Enhanced TouchIT display compatibility with Apple devices"
      ],
      metrics: [
        {label: "Protocol Implementation", value: "AirPlay", description: "Native Apple screen mirroring protocol"},
        {label: "Platform Bridge", value: "iOS to Android", description: "Cross-platform compatibility"},
        {label: "Development Time", value: "5 months", description: "Rapid protocol implementation"}
      ]
    },
    {
      id: "tipx-threat-intelligence",
      slug: "tipx-threat-intelligence",
      title: "TIPX - Custom Threat Intelligence Platform",
      description: "Developed a comprehensive white-labeled threat intelligence platform integrating MISP and OpenCTI with custom features, APIs, and innovative World Globe visualization for enterprise cybersecurity operations.",
      category: "cybersecurity",
      featured: true,
      status: "completed",
      startDate: "2021-09",
      endDate: "2022-11",
      duration: "14 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design provided via Figma)",
      technologies: ["MISP", "OpenCTI", "Custom APIs", "World Globe Visualization", "White-label UI/UX", "GraphQL", "RESTful APIs", "React", "Node.js"],
      tags: ["Cybersecurity", "Threat Intelligence", "MISP", "OpenCTI", "Data Visualization", "Enterprise Security", "Solo Development"],
      links: {
        liveUrl: null,
        companyUrl: "https://github.com/MISP/MISP",
        caseStudyUrl: "https://github.com/OpenCTI-Platform/opencti",
        demoUrl: null
      },
      images: {
        featuredImage: "/img/projects/tipx-hero.jpg",
        images: ["/img/projects/tipx-globe.jpg", "/img/projects/tipx-dashboard.jpg", "/img/projects/tipx-integration.jpg"],
        thumbnail: "/img/projects/tipx-thumb.jpg"
      },
      seo: {
        seoTitle: "TIPX: Custom Threat Intelligence Platform | Muhammad Asif Javed",
        seoDescription: "Built enterprise threat intelligence platform integrating MISP and OpenCTI with custom APIs, World Globe visualization, and white-label UI for cybersecurity operations.",
        keywords: ["threat intelligence", "cybersecurity platform", "MISP integration", "OpenCTI", "security visualization", "enterprise security", "custom APIs", "solo development"]
      },
      businessContext: {
        client: "Confidential Enterprise Organization",
        company: "Internal Enterprise Platform",
        industry: "Cybersecurity",
        userBase: "Enterprise Security Teams"
      },
      keyAchievements: [
        "Architected complete integration between MISP and OpenCTI platforms",
        "Built innovative World Globe visualization for geographical threat intelligence",
        "Implemented complete white-label solution with custom branding",
        "Created unified threat intelligence dashboard combining both platforms",
        "Developed real-time data synchronization engine"
      ],
      metrics: [
        {label: "Platform Integration", value: "MISP + OpenCTI", description: "Unified two major open source platforms"},
        {label: "Development Approach", value: "100% Solo", description: "Complete solo development except design"},
        {label: "Custom Features", value: "World Globe Viz", description: "Innovative threat geography visualization"}
      ]
    },
    {
      id: "lifemib-insurance-platform",
      slug: "lifemib-insurance-platform",
      title: "LifeMIB - Insurance Lead Management and CRM Platform",
      description: "Led full-stack development for an innovative insurance platform streamlining the insurance buying process by connecting agents and customers with automated workflows and CRM capabilities.",
      category: "insurance-tech",
      featured: true,
      status: "completed",
      startDate: "2022-06",
      endDate: "2023-02",
      duration: "8 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design)",
      technologies: ["Next.js", "MongoDB", "Vercel", "Vue.js", "Twilio", "Zapier API"],
      tags: ["Insurance Technology", "CRM", "Lead Management", "Automation", "Next.js", "Vue.js", "Team Development"],
      links: {
        liveUrl: null,
        companyUrl: null,
        caseStudyUrl: "https://lifemib.com/",
        demoUrl: null
      },
      images: {
        featuredImage: "/img/projects/lifemib-hero.jpg",
        images: ["/img/projects/lifemib-dashboard.jpg", "/img/projects/lifemib-crm.jpg", "/img/projects/lifemib-automation.jpg"],
        thumbnail: "/img/projects/lifemib-thumb.jpg"
      },
      seo: {
        seoTitle: "LifeMIB: Insurance CRM Platform | Muhammad Asif Javed",
        seoDescription: "Built comprehensive insurance lead management platform with automated workflows, CRM capabilities, and Zapier integration connecting 8000+ apps for streamlined insurance processes.",
        keywords: ["insurance technology", "CRM platform", "lead management", "automated workflows", "Next.js development", "insurance marketplace", "Zapier integration"]
      },
      businessContext: {
        client: "LifeMIB",
        company: "LifeMIB Insurance Platform",
        industry: "Insurance Technology",
        userBase: "Insurance Agents, Customers, Insurance Professionals"
      },
      keyAchievements: [
        "Reduced insurance buying process from hours to minutes",
        "Built comprehensive lead management and CRM solution",
        "Integrated Zapier connectivity with 8000+ applications",
        "Developed automated appointment scheduling system",
        "Created dual-platform architecture (Next.js + Vue.js dashboards)"
      ],
      metrics: [
        {label: "Process Time Reduction", value: "Hours to Minutes", description: "Streamlined insurance buying workflow"},
        {label: "App Integrations", value: "8000+", description: "Zapier connectivity options"},
        {label: "Platform Architecture", value: "Dual Dashboard", description: "Customer-facing + Internal admin systems"}
      ]
    },
    {
      id: "crystalball-pro",
      slug: "crystalball-pro",
      title: "CrystalBall.pro - AI-Powered Business Intelligence Platform",
      description: "Led frontend development and evolved into lead developer for an AI-powered business intelligence platform that automates marketing analytics through intelligent data annotations and insights.",
      category: "business-intelligence",
      featured: true,
      status: "completed",
      startDate: "2022-03",
      endDate: "2023-08",
      duration: "17 months",
      role: "Frontend Developer → Lead Developer",
      teamSize: "3 Developers + DevOps Engineer (later managed by developer)",
      technologies: ["React", "Laravel", "MySQL", "Google Cloud Platform", "Chrome Extension", "AI Integration", "Zapier API", "Google Analytics 4", "Google Ads APIs"],
      tags: ["AI", "Business Intelligence", "Marketing Analytics", "Chrome Extension", "React", "Laravel", "Leadership"],
      links: {
        liveUrl: "https://crystalball.pro/",
        companyUrl: "https://crystalball.pro/",
        caseStudyUrl: "https://appsumo.com/products/crystal-ball/",
        demoUrl: "https://app.crystalballinsight.com/"
      },
      images: {
        featuredImage: "/img/projects/crystalball-hero.jpg",
        images: ["/img/projects/crystalball-dashboard.jpg", "/img/projects/crystalball-extension.jpg", "/img/projects/crystalball-analytics.jpg"],
        thumbnail: "/img/projects/crystalball-thumb.jpg"
      },
      seo: {
        seoTitle: "CrystalBall.pro: AI-Powered Marketing Analytics Platform | Muhammad Asif Javed",
        seoDescription: "Led development of AI-powered business intelligence platform automating marketing analytics with intelligent annotations, Chrome extension, and 4000+ app integrations.",
        keywords: ["AI business intelligence", "marketing analytics", "Chrome extension development", "React development", "Laravel backend", "Google Analytics integration", "automated insights"]
      },
      businessContext: {
        client: "CrystalBall Technologies",
        company: "CrystalBall.pro",
        industry: "Marketing Technology",
        userBase: "Marketers and Agencies"
      },
      keyAchievements: [
        "Architected complete V2 frontend based on Figma designs",
        "Implemented AI insights feature for automated pattern recognition",
        "Developed Chrome extension for real-time analytics annotation",
        "Led cross-functional team managing backend, frontend, and DevOps",
        "Integrated 4000+ applications through Zapier API"
      ],
      metrics: [
        {label: "Time-to-Insight Reduction", value: "Hours to Minutes", description: "Automated analytics processing"},
        {label: "App Integrations", value: "4000+", description: "Via Zapier API connectivity"},
        {label: "Role Evolution", value: "Frontend → Lead", description: "Promoted to lead developer role"}
      ]
    }
  ] as const,
  categories: [
    {
      id: "edtech",
      name: "Educational Technology",
      description: "Platforms enabling remote learning and collaboration",
      projects: ["contribute-cloud", "contribute-signage"]
    },
    {
      id: "interactive-displays",
      name: "Interactive Displays",
      description: "Display management and screen technology solutions",
      projects: ["managemyled", "touchit-app-store", "justcastit", "touchit-air"]
    },
    {
      id: "business-intelligence",
      name: "Business Intelligence",
      description: "Analytics and data-driven platforms",
      projects: ["crystalball-pro"]
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      description: "Security and threat intelligence platforms",
      projects: ["tipx-threat-intelligence"]
    },
    {
      id: "insurance-tech",
      name: "Insurance Technology",
      description: "Insurance industry solutions",
      projects: ["lifemib-insurance-platform"]
    }
  ] as const,
  technologies: {
    frontend: ["React", "Vue.js", "Next.js", "Astro", "Tailwind CSS"],
    backend: ["Node.js", "Laravel", "PHP", "Express.js", "CodeIgniter"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    realtime: ["WebRTC", "Socket.io", "Pusher", "OpenVidu", "Agora"],
    mobile: ["React Native", "Java", "Kotlin", "Ionic", "PWA", "Electron"],
    cloud: ["Digital Ocean", "Google Cloud Platform", "AWS", "Vercel"],
    tools: ["Docker", "Kubernetes", "Git", "CI/CD", "Zapier", "Fabric.js"]
  },
  stats: {
    yearsExperience: 10,
    projectsCompleted: 9,
    technologiesUsed: 35,
    industriesServed: 5
  }
} as const;

// ================================
// VALIDATION FUNCTIONS
// ================================

/**
 * Validates that a project has all required fields and valid data
 */
export const validateProject = (project: Project): boolean => {
  try {
    return (
      !!project.id &&
      !!project.title &&
      !!project.description &&
      isProjectCategory(project.category) &&
      typeof project.featured === 'boolean' &&
      isProjectStatus(project.status) &&
      Array.isArray(project.technologies) &&
      project.technologies.length > 0 &&
      Array.isArray(project.keyAchievements) &&
      project.keyAchievements.length > 0
    );
  } catch {
    return false;
  }
};

/**
 * Validates the entire portfolio data structure
 */
export const validatePortfolioData = (): boolean => {
  try {
    return (
      portfolioData.projects.length === 9 &&
      portfolioData.categories.length === 5 &&
      portfolioData.projects.every(validateProject) &&
      portfolioData.stats.projectsCompleted === portfolioData.projects.length
    );
  } catch {
    return false;
  }
};

// ================================
// HELPER FUNCTIONS - TYPE SAFE & ROBUST
// ================================

/**
 * Safely retrieves a project by ID with null checking
 * @param id - The project ID to search for
 * @returns The project if found, undefined otherwise
 */
export const getProjectById = (id: string): Project | undefined => {
  if (!id || typeof id !== 'string') {
    console.warn('getProjectById: Invalid ID provided');
    return undefined;
  }
  return portfolioData.projects.find(project => project.id === id);
};

/**
 * Retrieves all projects in a specific category with validation
 * @param category - The category to filter by
 * @returns Array of projects in the category
 */
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  if (!isProjectCategory(category)) {
    console.warn(`getProjectsByCategory: Invalid category "${category}"`);
    return [];
  }
  return portfolioData.projects.filter(project => project.category === category);
};

/**
 * Retrieves all featured projects
 * @returns Array of featured projects
 */
export const getFeaturedProjects = (): Project[] => {
  return portfolioData.projects.filter(project => project.featured);
};

/**
 * Searches projects by technology with fuzzy matching
 * @param technology - Technology name to search for (case-insensitive)
 * @returns Array of projects using the technology
 */
export const getProjectsByTechnology = (technology: string): Project[] => {
  if (!technology || typeof technology !== 'string') {
    console.warn('getProjectsByTechnology: Invalid technology provided');
    return [];
  }
  
  const searchTerm = technology.toLowerCase().trim();
  return portfolioData.projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(searchTerm)
    )
  );
};

/**
 * Searches projects by tag with fuzzy matching
 * @param tag - Tag to search for (case-insensitive)
 * @returns Array of projects with matching tags
 */
export const getProjectsByTag = (tag: string): Project[] => {
  if (!tag || typeof tag !== 'string') {
    console.warn('getProjectsByTag: Invalid tag provided');
    return [];
  }
  
  const searchTerm = tag.toLowerCase().trim();
  return portfolioData.projects.filter(project => 
    project.tags.some(projectTag => 
      projectTag.toLowerCase().includes(searchTerm)
    )
  );
};

/**
 * Performs full-text search across project titles and descriptions
 * @param query - Search query string
 * @returns Array of projects matching the search
 */
export const searchProjects = (query: string): Project[] => {
  if (!query || typeof query !== 'string') {
    return [];
  }
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  return portfolioData.projects.filter(project => {
    const searchableText = `${project.title} ${project.description} ${project.role}`.toLowerCase();
    return searchTerms.every(term => searchableText.includes(term));
  });
};

/**
 * Safely retrieves a category by ID
 * @param id - The category ID to search for
 * @returns The category if found, undefined otherwise
 */
export const getCategoryById = (id: string): Category | undefined => {
  if (!id || typeof id !== 'string') {
    console.warn('getCategoryById: Invalid ID provided');
    return undefined;
  }
  return portfolioData.categories.find(category => category.id === id);
};

/**
 * Gets projects sorted by date (newest first)
 * @returns Array of projects sorted by end date
 */
export const getProjectsByDate = (): Project[] => {
  return [...portfolioData.projects].sort((a, b) => {
    const dateA = new Date(a.endDate);
    const dateB = new Date(b.endDate);
    return dateB.getTime() - dateA.getTime();
  });
};

/**
 * Gets all unique technologies used across projects
 * @returns Array of unique technology names
 */
export const getAllTechnologies = (): string[] => {
  const technologies = new Set<string>();
  portfolioData.projects.forEach(project => {
    project.technologies.forEach(tech => technologies.add(tech));
  });
  return Array.from(technologies).sort();
};

/**
 * Gets project statistics and metrics
 * @returns Object with various portfolio statistics
 */
export const getPortfolioStatistics = () => {
  const projects = portfolioData.projects;
  const featuredCount = projects.filter(p => p.featured).length;
  const completedCount = projects.filter(p => p.status === 'completed').length;
  const soloProjects = projects.filter(p => p.teamSize.includes('Solo')).length;
  
  return {
    total: projects.length,
    featured: featuredCount,
    completed: completedCount,
    soloProjects,
    technologies: getAllTechnologies().length,
    categories: portfolioData.categories.length,
    ...portfolioData.stats
  };
};

// ================================
// CONVENIENCE EXPORTS
// ================================

/**
 * Destructured exports for convenience
 */
export const { projects, categories, technologies, stats } = portfolioData;

/**
 * Default export of the complete portfolio data
 */
export default portfolioData;