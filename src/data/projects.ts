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
  readonly keyFeatures: readonly string[];
  readonly technicalImplementation: string;
  readonly impactResults: readonly string[];
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
      description: "Developed a comprehensive cloud-based educational collaboration platform that revolutionizes classroom interaction by enabling real-time content sharing, screen casting, and interactive learning across any device with a browser. The platform serves K-12 education, higher education, and corporate training sectors as an integral component of TouchIT Technologies' LED display ecosystem, deployed across numerous schools worldwide.",
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
        { label: "Concurrent Users", value: "50+ per session", description: "Ultra-low latency WebRTC implementation" },
        { label: "Interactive Games", value: "40+", description: "Multi-zone collaborative gamification" },
        { label: "Image Library", value: "1.5M+", description: "Searchable educational resources" },
        { label: "Development Approach", value: "100% Solo", description: "Complete solo development" }
      ],
      keyFeatures: [
        "Real-time screen casting and multi-casting - Unlimited simultaneous screen sharing with scrollable view",
        "1.5 million+ searchable image gallery - Built-in Content Gallery with live search functionality",
        "Live collaborative whiteboarding - Multi-user interaction on shared canvas",
        "Student device management - Screen pause, control, and monitoring capabilities",
        "Cross-platform file sharing - Seamless transfer between all connected devices",
        "Interactive assessment tools - Live voting, polling with graphical results display",
        "Session recording and playback - Complete lesson capture for review",
        "Multi-zone gamification - Multiple students interacting on same screen simultaneously",
        "Chromebook optimization - Chrome browser optimized for education sector",
        "Import compatibility - Supports content from other interactive whiteboard platforms",
        "Class management system - Email invitations, class lists, and session organization",
        "No installation architecture - Pure browser-based access for all users",
        "Workbook management - Create, save, and export lessons as PDF documents",
        "Unlimited cloud storage - Fair use policy for storing all educational content",
        "Multi-language interface - Supporting global educational communities",
        "Educational game library - 40+ games organized by subject areas",
        "Annotation tools - Drawing, highlighting, and table creation features"
      ],
      technicalImplementation: "The platform leverages a sophisticated tech stack combining Node.js backend with React frontend, orchestrated through a microservices architecture on Digital Ocean infrastructure. Real-time communication is powered by OpenVidu's WebRTC implementation, enabling ultra-low latency video conferencing and screen sharing with support for 50+ concurrent users per room. Socket.io handles bidirectional real-time events for instant messaging, collaborative drawing, and live updates across all connected devices. The collaborative whiteboard features are built using Fabric.js canvas library, enabling smooth multi-user drawing experiences with real-time synchronization. MongoDB provides flexible document storage for user sessions, lesson content, and collaborative data, while AWS S3 handles secure file uploads and content delivery with optimized CDN distribution.",
      impactResults: [
        "Deployed across numerous schools as an integral part of TouchIT Technologies' LED display suite",
        "Eliminated installation barriers by providing a completely browser-based solution, reducing IT overhead for educational institutions",
        "Enabled BYOD initiatives allowing schools to utilize existing devices rather than investing in specific hardware",
        "Improved classroom engagement through 40+ interactive games and real-time collaboration features",
        "Reduced technical complexity for teachers by providing an intuitive, OS-agnostic platform",
        "Achieved ultra-low latency video conferencing supporting 50+ concurrent users per session using OpenVidu WebRTC",
        "Scaled horizontally to support multiple schools simultaneously on Digital Ocean infrastructure",
        "Provided cost-effective solution as a free platform bundled with TouchIT LED displays, making advanced collaboration accessible"
      ]
    },
    {
      id: "contribute-signage",
      slug: "contribute-signage",
      title: "Contribute Signage - Digital Signage Management Platform",
      description: "Developed a comprehensive web-based digital signage management system that enables users to create, distribute, and manage digital content across multiple displays through a cloud-based platform. The solution combines a PHP CodeIgniter web control panel with cross-platform playback applications built using Electron (desktop), Ionic (Android), and React (Chrome extension). Built entirely solo using a hybrid tech stack, the platform serves primarily the education market and corporate environments, offering an intuitive Fabric.js-powered drag-and-drop interface that eliminates the need for graphic design expertise.",
      category: "edtech",
      featured: false,
      status: "completed",
      startDate: "2017-08",
      endDate: "2018-03",
      duration: "7 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design)",
      technologies: ["PHP", "CodeIgniter", "Node.js", "React", "Fabric.js", "MySQL", "Electron", "Ionic", "Digital Ocean", "Digital Ocean Spaces", "Long Polling"],
      tags: ["Digital Signage", "Content Management", "Multi-platform", "Cloud Storage", "Electron", "Ionic", "Educational Technology"],
      links: {
        liveUrl: null,
        companyUrl: "https://touchittechnologies.com/introduction-contribute-signage/",
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
        "Built WYSIWYG drag-and-drop editor enabling non-technical users to create professional signage",
        "Developed multi-platform playback applications (Electron, Ionic, React Chrome Extension)",
        "Integrated 2 million+ searchable images in comprehensive media gallery",
        "Implemented real-time device management with GPS tracking and remote control",
        "Created emergency messaging system for crisis communication across all displays",
        "Achieved per-school licensing with unlimited screens and no monthly subscriptions"
      ],
      metrics: [
        { label: "Platform Support", value: "Multi-platform", description: "Desktop and mobile applications" },
        { label: "Content Formats", value: "Universal", description: "Images, videos, documents, web content" },
        { label: "Media Gallery", value: "2M+ Images", description: "Integrated searchable image library" },
        { label: "Development Stack", value: "Full-stack", description: "PHP backend, React frontend, mobile apps" }
      ],
      keyFeatures: [
        "WYSIWYG drag-and-drop editor - Browser-based layout creation with real-time preview",
        "Multi-platform playback apps - Electron (Windows/Mac/Linux), Ionic (Android), React (Chrome Extension)",
        "2 million+ media gallery - Integrated searchable image library",
        "Advanced scheduling system - Time-based content deployment and automation",
        "Device management dashboard - Real-time status, GPS tracking, and remote control",
        "Channel and group organization - Logical device grouping for targeted content distribution",
        "Emergency messaging system - Instant crisis communication across all displays",
        "Touch layout support - Interactive signage capabilities for kiosks and displays",
        "User access controls - Granular permissions with unlimited user accounts",
        "Widget integration - Weather, Twitter feeds, clocks, and custom widgets",
        "Cloud-based architecture - No software installation required for management",
        "Multiple content formats - Images, videos, and dynamic content support",
        "Per-school licensing - Unlimited screens with no monthly subscription model",
        "15-day free trial - No credit card required for full platform access"
      ],
      technicalImplementation: "The platform leverages a hybrid architecture with PHP CodeIgniter as the main web application backend, complemented by Node.js utilities for specific functions. The web control panel utilizes Fabric.js for canvas-based layout editing and React components for interactive UI elements. MySQL database handles all persistent data storage while Digital Ocean Spaces manages media file storage and delivery. Real-time communication between the web panel and playback devices is achieved through long polling, ensuring instant updates without WebSocket complexity. The multi-platform playback ecosystem consists of Electron-based desktop applications for Windows, Mac, and Linux, an Ionic-based Android application, and a React-powered Chrome extension, all communicating with the central PHP/MySQL backend.",
      impactResults: [
        "Democratized digital signage creation by eliminating graphic design skill requirements through intuitive drag-and-drop interface",
        "Enabled scalable deployment with per-school licensing allowing unlimited screens without per-device costs",
        "Reduced operational complexity through centralized web-based management accessible from any device",
        "Improved emergency communication capabilities in educational environments with instant crisis messaging",
        "Provided cost-effective solution with no monthly subscriptions and free 15-day unlimited trials",
        "Supported diverse hardware ecosystems through multi-platform playback applications",
        "Enhanced content flexibility with integrated media gallery and support for dynamic widgets",
        "Streamlined device management with automated status monitoring and GPS-based location tracking"
      ]
    },
    {
      id: "touchit-app-store",
      slug: "touchit-app-store",
      title: "TouchIT App Store 3.0 - Custom Android APK Distribution Platform",
      description: "Developed a custom Android app store platform to solve a critical infrastructure gap for TouchIT LED displays that lacked Google Play Services. Built entirely solo, this comprehensive solution enables educational institutions and corporate environments to discover, download, and install Android APKs directly on their TouchIT interactive displays. The platform serves as both a web-based app store and native Android application, providing access to over 1,000 free, education-focused applications curated specifically for classroom and business use.",
      category: "interactive-displays",
      featured: false,
      status: "completed",
      startDate: "2017-02",
      endDate: "2017-07",
      duration: "5 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design)",
      technologies: ["React", "Node.js", "Java", "React Native", "Android Development", "Digital Ocean", "Digital Ocean Spaces", "Content Acquisition Scripts"],
      tags: ["Android Development", "App Distribution", "APK Management", "Content Acquisition", "Educational Apps", "Custom App Store"],
      links: {
        liveUrl: "https://www.touchitappstore.com/",
        companyUrl: "https://touchittechnologies.com/touchit_appstore/",
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
        "Solved critical infrastructure gap by providing app distribution alternative to Google Play Services",
        "Curated 1,000+ free educational applications ensuring classroom appropriateness",
        "Built one-click installation process simplifying deployment for non-technical users",
        "Developed both Java (v1) and React Native (v2) versions for enhanced maintenance",
        "Established 24-hour app request response system for user-driven additions"
      ],
      metrics: [
        { label: "Platform Type", value: "Custom App Store", description: "Alternative to Google Play Store" },
        { label: "App Catalog", value: "1,000+ Apps", description: "Curated educational applications" },
        { label: "Content Acquisition", value: "Automated", description: "Scripted app discovery and cataloging" },
        { label: "Development Versions", value: "Java + React Native", description: "Multiple technology implementations" }
      ],
      keyFeatures: [
        "Web-based app store - Browser-accessible platform for app discovery and management",
        "Native Android app store applications - v1 (Java) and v2 (React Native) for TouchIT LED displays",
        "1,000+ curated applications - Free, education-focused app library",
        "Subject-based categorization - Organized app discovery by educational subjects",
        "One-click installation - Simplified APK deployment process",
        "App request system - User-driven app addition with 24-hour response time",
        "Content safety curation - Violence and gambling-free app verification",
        "User account management - Free registration with personalized collections",
        "Compatibility testing - Hardware-specific app validation for TouchIT LEDs",
        "Administrative dashboard - Store management and app approval workflows",
        "Automated content acquisition - Scalable processes for expanding the application catalog",
        "Digital Ocean Spaces storage - Secure CDN-distributed APK hosting and delivery",
        "Cross-platform evolution - Migration from Java (v1) to React Native (v2) for improved maintenance",
        "Educational standards compliance - Classroom-appropriate content verification",
        "Free app ecosystem - No licensing or subscription fees for any applications"
      ],
      technicalImplementation: "The platform addresses the fundamental challenge of TouchIT LED displays lacking Google Play Services by providing an alternative app distribution method specifically tailored for educational and corporate interactive displays. The solution leverages a React frontend with Node.js backend, deployed on Digital Ocean infrastructure with Digital Ocean Spaces handling APK file storage and distribution. The web platform built with React enables administrators and users to browse, search, and manage applications through intuitive category-based navigation. The native Android applications (v1 in Java, v2 migrated to React Native) run directly on TouchIT LED displays, providing local access to the curated app ecosystem through communication with the Node.js API endpoints.",
      impactResults: [
        "Solved critical infrastructure gap by providing app distribution alternative to Google Play Services for TouchIT LED displays",
        "Enabled educational technology adoption by making Android apps accessible in classroom environments without complex setup",
        "Curated 1,000+ educational applications ensuring content safety and classroom appropriateness",
        "Streamlined app installation through one-click deployment reducing technical barriers for educators",
        "Supported hardware ecosystem growth by making TouchIT LEDs more versatile and valuable for educational institutions",
        "Provided cost-effective solution offering entirely free app ecosystem with no licensing fees",
        "Enhanced classroom technology integration by ensuring all apps are tested and optimized for interactive displays",
        "Established rapid response system with 24-hour app addition process for user requests"
      ]
    },
    {
      id: "managemyled",
      slug: "managemyled",
      title: "ManageMyLED - Central Remote Management Platform",
      description: "Developed a comprehensive remote management solution for TouchIT Interactive Flat Panels (IFPDs) that combines a client-side Android application with a web-based control portal. Built entirely solo, this platform enables IT administrators to centrally manage, monitor, and control multiple interactive displays from anywhere with an internet connection. The system addresses the critical need for scalable device management in educational institutions and corporate environments where dozens or hundreds of interactive panels require coordinated administration and support.",
      category: "interactive-displays",
      featured: true,
      status: "completed",
      startDate: "2018-04",
      endDate: "2019-07",
      duration: "15 months",
      role: "Full-Stack Developer (Solo)",
      teamSize: "Solo Developer (except design)",
      technologies: ["Node.js", "React", "MongoDB", "Digital Ocean", "Pusher", "Socket.io", "Fabric.js", "OpenVidu", "Agora", "WebRTC", "Kotlin"],
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
        { label: "Device Management", value: "Global Scale", description: "Thousands of LED displays worldwide" },
        { label: "Real-time Monitoring", value: "24/7", description: "Continuous device health tracking" },
        { label: "Remote Control", value: "WebRTC", description: "Real-time screen streaming and interaction" },
        { label: "Development Approach", value: "100% Solo", description: "Complete solo development" }
      ],
      keyFeatures: [
        "Web-based management portal - Centralized dashboard for all device management operations",
        "Kotlin Android service application - Background utility for seamless device management and communication",
        "Unique device pairing - Secure ID-based connection system between devices and portal",
        "Real-time remote control - WebRTC screen streaming with Fabric.js canvas interaction forwarding",
        "Centralized app management - Remote installation/uninstallation across multiple devices",
        "Group policy management - Bulk configuration and standardization across device collections",
        "Team-based administration - Collaborative management with role-based access controls",
        "Notification system - Send messages and alarms to specific devices or groups",
        "Real-time device monitoring - Instant status updates via Pusher and Socket.io connections",
        "Bulk operations - Efficient management of large-scale device deployments",
        "Wallpaper management - Remote customization and branding control",
        "TouchIT App Store integration - Seamless app deployment across managed devices",
        "Remote shutdown capabilities - Energy management and maintenance controls",
        "Device inventory tracking - MongoDB-based serial numbers, locations, and configuration management",
        "Credit-based WebRTC optimization - Intelligent switching between OpenVidu and Agora for cost efficiency",
        "No subscription model - Complete management solution without recurring costs"
      ],
      technicalImplementation: "The platform leverages a sophisticated real-time architecture combining Node.js backend with React frontend, deployed on Digital Ocean infrastructure with MongoDB for persistent data storage. The system utilizes dual real-time communication channels: Pusher for instant notifications and Socket.io for bidirectional device communication and control signals. The Kotlin Android service application runs as a background utility on TouchIT LED displays, maintaining persistent connections to the management portal through secure pairing IDs. Remote control functionality represents a key technical innovation, utilizing WebRTC technology through OpenVidu or Agora (based on available credits) to stream LED display screens in real-time to the web portal.",
      impactResults: [
        "Revolutionized IT support efficiency by enabling remote troubleshooting and control without physical presence at device locations",
        "Reduced operational overhead through centralized management of multiple interactive displays from a single web interface",
        "Enhanced device standardization via group policy management ensuring consistent configurations across educational institutions",
        "Improved support response times by eliminating travel time for basic device maintenance and troubleshooting",
        "Enabled scalable deployments supporting management of hundreds of devices across multiple locations",
        "Eliminated subscription costs by providing comprehensive management capabilities without recurring fees",
        "Streamlined app deployment through integration with TouchIT App Store for automated software distribution",
        "Enhanced team collaboration with role-based access controls and shared device management capabilities"
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
        { label: "Platform Compatibility", value: "Universal Browser-based", description: "Works on any device with web browser" },
        { label: "Simultaneous Casting", value: "Unlimited", description: "Multiple screens casting at once" },
        { label: "Installation Required", value: "Zero", description: "Completely browser-based solution" }
      ],
      keyFeatures: [
        "Browser-based casting platform - Zero-installation screen sharing through web browsers",
        "Progressive Web Application (PWA) - LED display receiver app eliminating native installation requirements",
        "Cross-platform compatibility - Support for PC, Mac, Chromebook, and Linux devices",
        "Unlimited multi-casting - Infinite simultaneous participants in single casting session",
        "Chrome and Firefox support - Broad browser compatibility for maximum accessibility",
        "Remote casting capability - Internet-based screen sharing beyond local networks",
        "Real-time screen switching - Fabric.js canvas-based navigation with double-tap full-screen",
        "Application-specific casting - Option to share specific applications instead of full screen",
        "Casting ID pairing system - Simple and secure connection establishment",
        "Responsive web interface - Consistent experience across browsers and devices",
        "No hardware requirements - Pure software solution without additional equipment",
        "Free for TouchIT customers - No licensing fees or subscription costs",
        "OpenVidu WebRTC infrastructure - Enterprise-grade streaming with adaptive connection management",
        "Fabric.js canvas rendering - Efficient multi-stream display and interaction handling",
        "PWA deployment - App-like experience without native installation requirements",
        "Educational optimization - Designed specifically for classroom and training environments"
      ],
      technicalImplementation: "The platform leverages React frontend with Node.js backend deployed on Digital Ocean infrastructure, utilizing OpenVidu's WebRTC framework for robust peer-to-peer screen sharing capabilities. The web application provides universal compatibility across Chrome and Firefox browsers on multiple operating systems without requiring client-side software installation. The casting functionality utilizes OpenVidu's WebRTC implementation to establish direct connections between browser clients and the Progressive Web Application (PWA) running on TouchIT LED displays. This PWA approach eliminates the need for native Android app installation while providing full casting receiver capabilities through modern web standards. The PWA receiver handles multiple simultaneous incoming streams using Fabric.js canvas for efficient stream rendering and real-time switching capabilities. The platform supports both full-screen and application-specific casting modes, with Fabric.js providing smooth canvas-based display management and interaction handling. Remote casting capability extends beyond local network limitations through OpenVidu's signaling server infrastructure, enabling distributed collaboration scenarios such as remote learning and support. The system maintains consistent performance across various network conditions by leveraging OpenVidu's adaptive streaming and connection management. The multi-casting architecture supports unlimited simultaneous participants through OpenVidu's scalable WebRTC infrastructure, implementing efficient stream management and display organization to handle large-scale collaborative scenarios typical in educational institutions. The React frontend provides responsive interfaces for both casting clients and PWA receivers, while Node.js orchestrates session management and participant coordination.",
      impactResults: [
        "Eliminated installation barriers by providing browser-based casting without software downloads or configuration",
        "Enabled universal device support across PC, Mac, Chromebook, and Linux platforms through web browser standardization",
        "Supported unlimited collaboration with infinite simultaneous casting participants for large classroom environments",
        "Enhanced remote learning capabilities by enabling internet-based casting beyond local network restrictions",
        "Reduced IT overhead by eliminating software deployment and management requirements across diverse device ecosystems",
        "Improved classroom efficiency through seamless screen switching and real-time collaboration features",
        "Provided cost-effective solution as free software for TouchIT customers eliminating licensing fees",
        "Enabled flexible teaching methods with application-specific casting and multi-participant display capabilities",
        "Streamlined user experience through simple web interface requiring only browser access and casting ID"
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
        companyUrl: "https://touchittechnologies.com/touchitair/",
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
        "Successfully implemented AirPlay protocol on Android using AirplayServer open source",
        "Eliminated hardware dependencies by providing software-only screen mirroring solution",
        "Created secure connection management preventing signal interruption from other devices",
        "Developed uninterrupted presentation mode ensuring exclusive presenter control",
        "Enhanced classroom technology integration enabling iOS device connectivity"
      ],
      metrics: [
        { label: "Protocol Implementation", value: "AirPlay", description: "Native Apple screen mirroring protocol" },
        { label: "Platform Bridge", value: "iOS to Android", description: "Cross-platform compatibility" },
        { label: "Development Time", value: "5 months", description: "Rapid protocol implementation" }
      ],
      keyFeatures: [
        "Native Android AirPlay receiver - Built on AirplayServer open source with TouchIT customizations",
        "Java-based implementation - Native Android performance and integration",
        "Automatic device discovery - Seamless iOS device detection and connection",
        "Secure connection management - Prevention of signal interruption from other devices",
        "Uninterrupted presentation mode - Exclusive presenter control until voluntary disconnection",
        "Multi-resolution support - Automatic scaling for various iOS device types",
        "Low latency streaming - Optimized performance for interactive presentations",
        "Network resilience - Robust handling of WiFi changes and reconnections",
        "TouchIT App Store distribution - Easy deployment across LED installations",
        "Classroom optimization - Features designed specifically for educational environments",
        "Professional presentation support - Corporate boardroom and meeting room integration",
        "No additional hardware required - Pure software solution leveraging existing LED capabilities",
        "Open source integration - Leveraged and extended AirplayServer library for enterprise use",
        "Apple ecosystem integration - Native iOS screen mirroring workflow compatibility",
        "Background service operation - Continuous availability without user intervention",
        "Error recovery mechanisms - Automatic reconnection and fault tolerance"
      ],
      technicalImplementation: "The application leverages native Android development using Java, building upon the open source AirplayServer project as the foundation for AirPlay protocol implementation. The solution integrates and extends this library to create a complete AirPlay receiver that seamlessly integrates with Apple's screen mirroring ecosystem, handling device discovery through Bonjour/mDNS, connection establishment, and real-time screen streaming. The Android application runs as a background service on TouchIT LED displays, utilizing the AirplayServer library to continuously advertise its availability as an AirPlay receiver on the local network. Custom modifications were implemented to optimize the library for TouchIT's specific hardware requirements and educational use cases. The screen mirroring implementation extends the base AirplayServer functionality to handle various iOS device resolutions and orientations, with custom scaling and optimization logic for large interactive display formats. Additional layers were built on top of the open source foundation to manage TouchIT-specific features, video decoding optimization, and display rendering while maintaining low latency essential for interactive presentations. Security enhancements were added beyond the base library capabilities to prevent unauthorized device connections and implement session management ensuring only the intended presenter maintains control. Custom network handling was implemented to manage topology changes and reconnection logic for seamless user experience across varying WiFi conditions typical in educational institutions.",
      impactResults: [
        "Eliminated hardware dependencies by providing software-only screen mirroring solution without additional equipment",
        "Enhanced classroom technology integration enabling seamless iOS device connectivity for educational content delivery",
        "Improved presentation reliability through secure, uninterrupted connections designed for professional environments",
        "Reduced setup complexity providing one-touch screen mirroring from iOS devices to interactive displays",
        "Enabled BYOD initiatives supporting teachers and students using personal Apple devices in classroom settings",
        "Streamlined corporate presentations allowing executives to share content directly from personal devices",
        "Provided cost-effective solution eliminating need for additional AirPlay hardware in every classroom",
        "Enhanced user experience matching Apple's native screen mirroring workflow and interface expectations",
        "Supported scalable deployment across multiple TouchIT LED installations without per-device licensing"
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
        { label: "Platform Integration", value: "MISP + OpenCTI", description: "Unified two major open source platforms" },
        { label: "Development Approach", value: "100% Solo", description: "Complete solo development except design" },
        { label: "Custom Features", value: "World Globe Viz", description: "Innovative threat geography visualization" }
      ],
      keyFeatures: [
        "Integrated MISP and OpenCTI platform - Unified access to both threat intelligence systems",
        "Custom API development - Enterprise integration endpoints for internal system communication",
        "World Globe threat visualization - Interactive geographical threat intelligence mapping and statistics",
        "Complete white-label solution - Custom branding, UI/UX, and enterprise-specific design implementation",
        "Real-time data synchronization - Automated correlation and consistency between MISP and OpenCTI datasets",
        "Enhanced threat intelligence dashboard - Unified interface combining indicators, events, and knowledge graphs",
        "Custom visualization tools - At-a-glance statistics and interactive data exploration capabilities",
        "Enterprise authentication integration - Role-based access controls and organizational security policies",
        "Advanced search and filtering - Cross-platform threat intelligence discovery and analysis",
        "Automated threat correlation - Real-time relationship mapping between MISP indicators and OpenCTI entities",
        "Custom reporting engine - Executive summaries and technical threat intelligence reports",
        "Optimized analyst workflows - Streamlined processes for threat investigation and intelligence sharing",
        "Figma-based UI implementation - Professional design system integration and custom interface development",
        "Open source foundation - Leveraged proven MISP and OpenCTI platforms with custom enhancements",
        "Confidential enterprise deployment - Secure internal threat intelligence operations"
      ],
      technicalImplementation: "The platform leverages the robust foundations of both MISP and OpenCTI while extending their capabilities through custom development. The integration layer seamlessly connects MISP's threat sharing infrastructure with OpenCTI's GraphQL-based knowledge management, creating a unified threat intelligence ecosystem. The custom API layer provides RESTful endpoints specifically designed for the client's internal systems, enabling automated threat intelligence ingestion, indicator sharing, and real-time security alert integration. This API architecture ensures seamless communication between TIPX and existing security tools, SIEM systems, and threat detection platforms. The World Globe visualization represents a key innovation, providing interactive geographical mapping of threat intelligence data sourced from both MISP events and OpenCTI entities. This feature enables security analysts to quickly identify global threat patterns, regional attack trends, and geographical correlation of indicators, with drill-down capabilities to detailed threat intelligence records. The white-label implementation involved complete UI/UX redesign based on provided Figma specifications, replacing default MISP and OpenCTI interfaces with custom-branded, enterprise-optimized workflows. The new interface provides role-based dashboards, customized navigation, and organization-specific threat intelligence presentation formats. Data synchronization between MISP and OpenCTI maintains real-time consistency through custom connectors that automatically correlate indicators, update threat intelligence attributes, and ensure data integrity across both platforms while preserving each system's native capabilities.",
      impactResults: [
        "Unified threat intelligence operations by seamlessly integrating two leading open source platforms into single cohesive system",
        "Enhanced threat visibility through innovative World Globe visualization providing immediate geographical threat intelligence insights",
        "Improved operational efficiency with custom APIs enabling automated integration with existing security infrastructure",
        "Streamlined analyst workflows through white-labeled interface optimized for organization-specific threat intelligence processes",
        "Reduced platform complexity by providing single interface for accessing both MISP indicators and OpenCTI knowledge graphs",
        "Accelerated threat analysis with real-time data synchronization and automated correlation between platforms",
        "Enhanced executive reporting through custom visualization tools and automated threat intelligence summaries",
        "Improved security posture by leveraging combined strengths of MISP's sharing capabilities and OpenCTI's analytical features",
        "Cost-effective enterprise solution built on proven open source foundations with minimal licensing overhead"
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
        demoUrl: "https://zapier.com/apps/life-mib/integrations"
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
        { label: "Process Time Reduction", value: "Hours to Minutes", description: "Streamlined insurance buying workflow" },
        { label: "App Integrations", value: "8000+", description: "Zapier connectivity options" },
        { label: "Platform Architecture", value: "Dual Dashboard", description: "Customer-facing + Internal admin systems" }
      ],
      keyFeatures: [
        "Next.js web application - High-performance customer-facing insurance marketplace portal",
        "Lead capture and management - Automated workflows connecting customers with insurance professionals",
        "Appointment scheduling system - Integrated booking and calendar management for agent consultations",
        "Twilio automation integration - SMS notifications, reminders, and communication workflows",
        "Responsive design implementation - Mobile-optimized interface for all user types",
        "MongoDB data integration - Real-time synchronization with backend database systems",
        "Custom Zapier integration - Built from scratch with triggers and actions for 8,000+ third-party applications",
        "User authentication system - Secure login and session management for customers and agents",
        "Performance optimization - Next.js SSR and static generation for fast loading times",
        "Vercel deployment pipeline - Automated CI/CD with global CDN distribution",
        "Vue.js internal dashboard - Administrative and agent management interfaces",
        "Real-time data synchronization - Live updates across customer and agent interfaces",
        "Insurance industry compliance - Communication and data handling meeting industry standards",
        "Cross-platform compatibility - Consistent experience across desktop and mobile devices",
        "API integration architecture - Support for external platform connectivity and automation"
      ],
      technicalImplementation: "The frontend application leverages Next.js framework for server-side rendering, static site generation, and optimal performance characteristics essential for a customer-facing insurance platform. The application architecture supports both customer lead generation workflows and agent management interfaces while maintaining responsive design across all device types. Twilio integration provides automated communication capabilities including SMS notifications, appointment reminders, and lead qualification workflows. The implementation ensures seamless communication between platform users while maintaining compliance with insurance industry communication standards. The platform connects with MongoDB for persistent data storage, handling customer leads, agent profiles, appointment scheduling, and CRM data management. Vue.js powers the internal dashboard providing agents and administrators with comprehensive management tools separate from the customer-facing Next.js application. Vercel deployment infrastructure ensures reliable hosting with automatic scaling, continuous deployment, and global CDN distribution for optimal performance across geographic regions. The deployment strategy supports both production and staging environments for safe feature releases. Zapier integration architecture was designed and implemented from scratch, enabling connectivity with over 8,000 third-party applications including Google Workspace, Amazon Alexa, CRM systems, and marketing automation tools. The custom Zapier app includes triggers for 'New Appointment' and 'New Lead' events, plus actions for 'Create Appointment,' 'Create Lead,' and 'Lead Update,' providing extensive workflow automation capabilities for insurance professionals.",
      impactResults: [
        "Streamlined insurance buying process reducing customer journey from hours to minutes through intuitive web interface",
        "Enhanced lead management efficiency for insurance agents through automated lead capture and qualification workflows",
        "Improved customer experience with responsive, mobile-optimized interface for insurance discovery and agent connection",
        "Enabled extensive automation through Twilio integration for communication workflows and appointment management",
        "Supported scalable growth with Vercel deployment handling increased user load and geographic distribution",
        "Facilitated business integrations through Zapier connectivity enabling workflow automation with existing business tools",
        "Reduced operational overhead for insurance professionals through automated lead distribution and management features",
        "Enhanced platform reliability through Next.js performance optimizations and server-side rendering capabilities"
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
        { label: "Time-to-Insight Reduction", value: "Hours to Minutes", description: "Automated analytics processing" },
        { label: "App Integrations", value: "4000+", description: "Via Zapier API connectivity" },
        { label: "Role Evolution", value: "Frontend → Lead", description: "Promoted to lead developer role" }
      ],
      keyFeatures: [
        "Modern analytics dashboard - Comprehensive interface for marketing data visualization and insights",
        "Responsive design implementation - Consistent experience across desktop and mobile devices",
        "Real-time data visualization - Interactive charts and graphs for marketing performance tracking",
        "AI insights interface - Intuitive access to automated pattern recognition and predictive analytics",
        "App integration management - User-friendly interface for connecting 4,000+ third-party applications",
        "Automated pattern recognition - AI-powered identification of marketing data trends and anomalies",
        "Intelligent annotation system - Automated explanations for traffic fluctuations and campaign impacts",
        "Predictive analytics capabilities - Future trend identification based on historical marketing data",
        "Real-time insight delivery - Immediate notifications for significant marketing events and changes",
        "Contextual data analysis - AI-driven interpretation of multi-platform marketing performance",
        "Browser-based analytics tools - Direct integration with Google Analytics interface",
        "Automated annotation functionality - Real-time annotation generation within analytics platforms",
        "Cross-platform synchronization - Seamless data flow between extension and main platform",
        "Real-time tracking capabilities - Automatic monitoring of website changes and marketing events",
        "Secure data handling - Authenticated access and encrypted data transmission",
        "Zapier API connectivity - Automated workflows with 4,000+ third-party applications",
        "Google Analytics 4 integration - Direct data access and annotation capabilities",
        "Google Ads synchronization - Campaign performance tracking and automated insights",
        "Multi-platform data aggregation - Unified analytics from diverse marketing tools",
        "Webhook management system - Real-time data synchronization across connected platforms",
        "Cross-functional team management - Leadership of backend, frontend, and DevOps operations",
        "Development workflow establishment - Quality standards and deployment pipelines",
        "Feature prioritization framework - Strategic planning for platform enhancement and growth",
        "Technical decision ownership - Architecture choices and technology stack management"
      ],
      technicalImplementation: "The V2 frontend architecture leverages React framework with Laravel backend and MySQL database to deliver a responsive, high-performance analytics platform optimized for marketing professionals. The interface provides intuitive access to complex AI insights through carefully designed data visualization components that transform raw analytics data into actionable business intelligence. The AI insights implementation integrates machine learning capabilities to automatically analyze marketing data patterns, identifying significant events, traffic anomalies, and campaign performance correlations. The system processes data from Google Analytics 4, Google Ads, and other connected platforms to generate contextual annotations that explain marketing performance fluctuations. App integration framework supports connectivity with over 4,000 applications through Zapier API, enabling automated workflow creation for marketing teams. The integration system handles real-time data synchronization, webhook management, and secure API communication with external platforms including Mailchimp, GitHub, Bitbucket, and project management tools. The Chrome extension extends platform capabilities directly into users' browsers, providing real-time analytics overlay and automated annotation functionality. The extension utilizes Chrome APIs for secure data access while maintaining synchronization with the main platform through authenticated API calls. Cross-platform architecture deployed on Google Cloud Platform ensures seamless data flow between web application, Chrome extension, and integrated third-party services, with real-time updates and consistent user experience across all touchpoints. GCP infrastructure provides scalable hosting, automated deployment pipelines, and reliable performance for the analytics platform.",
      impactResults: [
        "Streamlined marketing analytics workflow by automating manual annotation processes that previously required hours of analyst time",
        "Enhanced marketing decision-making through AI-powered insights that identify patterns invisible to traditional analytics tools",
        "Improved campaign performance tracking with automated annotations explaining traffic fluctuations and marketing event impacts",
        "Enabled scalable analytics operations supporting marketers and agencies managing multiple client accounts and campaigns",
        "Reduced time-to-insight from hours to minutes through automated data analysis and intelligent annotation generation",
        "Expanded platform capabilities from basic analytics to comprehensive business intelligence through AI insights integration",
        "Achieved cross-platform accessibility through Chrome extension enabling analytics access directly within Google Analytics interface",
        "Supported business growth through enhanced user experience and expanded feature set driving platform adoption"
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