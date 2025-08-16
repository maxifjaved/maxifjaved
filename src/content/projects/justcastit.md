# JustCastIt - Browser-Based Wireless Screen Casting Platform

- **Duration**: [Please provide start and end dates]
- **Role**: Full-Stack Developer (Solo)
- **Technologies**: React, Node.js, OpenVidu (WebRTC), Fabric.js (Canvas), PWA (Android LEDs), Digital Ocean
- **Team Size**: Solo Developer (except design)
- **Live Platform**: https://justcastit.com/
- **Company**: TouchIT Technologies

## Overview

Developed a revolutionary browser-based wireless screen casting platform that eliminates the need for software installation while enabling unlimited simultaneous screen sharing to TouchIT Interactive LED displays. Built entirely solo, this solution addresses the critical challenge of cross-platform casting by leveraging web browser capabilities, supporting PC, Mac, Chromebook, and Linux devices through a simple web interface. The platform enables real-time multi-casting, remote collaboration, and seamless screen sharing for educational and corporate environments.

## Key Responsibilities & Achievements

- **Architected and implemented** a complete browser-based casting ecosystem combining web platform and Android receiver application
- **Built zero-installation casting solution** enabling screen sharing through web browsers without requiring software downloads
- **Developed cross-platform compatibility** supporting PC, Mac, Chromebook, and Linux devices through standardized web technologies
- **Created unlimited multi-casting capability** allowing infinite simultaneous participants casting to single LED display
- **Implemented real-time screen switching** with double-tap full-screen functionality and intuitive navigation controls
- **Built remote casting functionality** enabling screen sharing over internet connections beyond local network limitations
- **Developed simple pairing system** using casting IDs for secure connection establishment between browsers and LED displays
- **Created responsive web application** providing consistent experience across different browsers and operating systems
- **Implemented application-specific casting** allowing users to share specific applications instead of full screen
- **Built Progressive Web Application (PWA)** for TouchIT LED displays to handle incoming cast streams and display management without requiring native app installation
- **Developed real-time stream management** with seamless switching between multiple participant screens
- **Created optimized casting protocols** ensuring low latency and high-quality screen transmission

## Technical Implementation

The platform leverages React frontend with Node.js backend deployed on Digital Ocean infrastructure, utilizing OpenVidu's WebRTC framework for robust peer-to-peer screen sharing capabilities. The web application provides universal compatibility across Chrome and Firefox browsers on multiple operating systems without requiring client-side software installation.

The casting functionality utilizes OpenVidu's WebRTC implementation to establish direct connections between browser clients and the Progressive Web Application (PWA) running on TouchIT LED displays. This PWA approach eliminates the need for native Android app installation while providing full casting receiver capabilities through modern web standards.

The PWA receiver handles multiple simultaneous incoming streams using Fabric.js canvas for efficient stream rendering and real-time switching capabilities. The platform supports both full-screen and application-specific casting modes, with Fabric.js providing smooth canvas-based display management and interaction handling.

Remote casting capability extends beyond local network limitations through OpenVidu's signaling server infrastructure, enabling distributed collaboration scenarios such as remote learning and support. The system maintains consistent performance across various network conditions by leveraging OpenVidu's adaptive streaming and connection management.

The multi-casting architecture supports unlimited simultaneous participants through OpenVidu's scalable WebRTC infrastructure, implementing efficient stream management and display organization to handle large-scale collaborative scenarios typical in educational institutions. The React frontend provides responsive interfaces for both casting clients and PWA receivers, while Node.js orchestrates session management and participant coordination.

## Impact/Results

- **Eliminated installation barriers** by providing browser-based casting without software downloads or configuration
- **Enabled universal device support** across PC, Mac, Chromebook, and Linux platforms through web browser standardization
- **Supported unlimited collaboration** with infinite simultaneous casting participants for large classroom environments
- **Enhanced remote learning capabilities** by enabling internet-based casting beyond local network restrictions
- **Reduced IT overhead** by eliminating software deployment and management requirements across diverse device ecosystems
- **Improved classroom efficiency** through seamless screen switching and real-time collaboration features
- **Provided cost-effective solution** as free software for TouchIT customers eliminating licensing fees
- **Enabled flexible teaching methods** with application-specific casting and multi-participant display capabilities
- **Streamlined user experience** through simple web interface requiring only browser access and casting ID

## Key Features Delivered

- **Browser-based casting platform** - Zero-installation screen sharing through web browsers
- **Progressive Web Application (PWA)** - LED display receiver app eliminating native installation requirements
- **Cross-platform compatibility** - Support for PC, Mac, Chromebook, and Linux devices
- **Unlimited multi-casting** - Infinite simultaneous participants in single casting session
- **Chrome and Firefox support** - Broad browser compatibility for maximum accessibility
- **Remote casting capability** - Internet-based screen sharing beyond local networks
- **Real-time screen switching** - Fabric.js canvas-based navigation with double-tap full-screen
- **Application-specific casting** - Option to share specific applications instead of full screen
- **Casting ID pairing system** - Simple and secure connection establishment
- **Responsive web interface** - Consistent experience across browsers and devices
- **No hardware requirements** - Pure software solution without additional equipment
- **Free for TouchIT customers** - No licensing fees or subscription costs
- **OpenVidu WebRTC infrastructure** - Enterprise-grade streaming with adaptive connection management
- **Fabric.js canvas rendering** - Efficient multi-stream display and interaction handling
- **PWA deployment** - App-like experience without native installation requirements
- **Educational optimization** - Designed specifically for classroom and training environments

## Links

- **Live Platform**: https://justcastit.com/
- **Company Page**: https://touchittechnologies.com/justcastit/