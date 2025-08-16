# ManageMyLED - Central Remote Management Platform for Interactive Displays

- **Duration**: [Please provide start and end dates]
- **Role**: Full-Stack Developer (Solo)
- **Technologies**: Node.js, React, MongoDB, Digital Ocean, Pusher, Socket.io, Fabric.js (Canvas), OpenVidu/Agora (WebRTC), Kotlin (Android)
- **Team Size**: Solo Developer (except design)
- **Live Platform**: https://managemyled.com/
- **Company**: TouchIT Technologies

## Overview

Developed a comprehensive remote management solution for TouchIT Interactive Flat Panels (IFPDs) that combines a client-side Android application with a web-based control portal. Built entirely solo, this platform enables IT administrators to centrally manage, monitor, and control multiple interactive displays from anywhere with an internet connection. The system addresses the critical need for scalable device management in educational institutions and corporate environments where dozens or hundreds of interactive panels require coordinated administration and support.

## Key Responsibilities & Achievements

- **Architected and implemented** a complete remote device management ecosystem combining client-side Android app and web-based control portal
- **Built secure pairing system** using unique device IDs to establish trusted connections between LED displays and the management portal
- **Developed real-time remote control functionality** using WebRTC (OpenVidu/Agora) for screen streaming and Fabric.js canvas for mouse interaction forwarding
- **Created centralized app management system** allowing remote installation and uninstallation of applications across multiple devices
- **Implemented group policy management** enabling administrators to apply consistent configurations across device collections
- **Built team-based access control system** with role-based permissions and collaborative device management
- **Developed notification and alarm system** for sending messages and alerts to specific devices or device groups
- **Created device monitoring dashboard** with real-time status updates via Pusher and Socket.io for instant device health information
- **Implemented bulk operations** for efficient management of large-scale interactive display deployments
- **Built wallpaper and customization management** allowing remote aesthetic control of devices
- **Integrated TouchIT App Store connectivity** for seamless app deployment across managed devices
- **Developed secure remote shutdown capabilities** for energy management and device maintenance
- **Created detailed device inventory system** with serial number tracking and location management stored in MongoDB
- **Developed Kotlin Android service application** running as background utility on Android players for seamless device management

## Technical Implementation

The platform leverages a sophisticated real-time architecture combining Node.js backend with React frontend, deployed on Digital Ocean infrastructure with MongoDB for persistent data storage. The system utilizes dual real-time communication channels: Pusher for instant notifications and Socket.io for bidirectional device communication and control signals.

The Kotlin Android service application runs as a background utility on TouchIT LED displays, maintaining persistent connections to the management portal through secure pairing IDs. This service handles remote commands, status reporting, and app management operations while operating transparently to end users.

Remote control functionality represents a key technical innovation, utilizing WebRTC technology through OpenVidu or Agora (based on available credits) to stream LED display screens in real-time to the web portal. Interactive control is achieved through Fabric.js canvas implementation that captures mouse movements and clicks, translating them into precise touch commands forwarded to the Android devices.

The web portal built with React provides administrators with responsive dashboards featuring real-time device monitoring, bulk operations, and granular control capabilities. MongoDB stores device configurations, user permissions, team structures, and audit logs, while the Node.js API orchestrates all device communications and policy enforcement.

The system implements a credit-based WebRTC approach, intelligently switching between OpenVidu and Agora services based on availability and cost optimization, ensuring reliable screen streaming for remote support scenarios while managing operational expenses.

## Impact/Results

- **Revolutionized IT support efficiency** by enabling remote troubleshooting and control without physical presence at device locations
- **Reduced operational overhead** through centralized management of multiple interactive displays from a single web interface
- **Enhanced device standardization** via group policy management ensuring consistent configurations across educational institutions
- **Improved support response times** by eliminating travel time for basic device maintenance and troubleshooting
- **Enabled scalable deployments** supporting management of hundreds of devices across multiple locations
- **Eliminated subscription costs** by providing comprehensive management capabilities without recurring fees
- **Streamlined app deployment** through integration with TouchIT App Store for automated software distribution
- **Enhanced team collaboration** with role-based access controls and shared device management capabilities
- **Improved device security** through centralized monitoring and management of device access and applications

## Key Features Delivered

- **Web-based management portal** - Centralized dashboard for all device management operations
- **Kotlin Android service application** - Background utility for seamless device management and communication
- **Unique device pairing** - Secure ID-based connection system between devices and portal
- **Real-time remote control** - WebRTC screen streaming with Fabric.js canvas interaction forwarding
- **Centralized app management** - Remote installation/uninstallation across multiple devices
- **Group policy management** - Bulk configuration and standardization across device collections
- **Team-based administration** - Collaborative management with role-based access controls
- **Notification system** - Send messages and alarms to specific devices or groups
- **Real-time device monitoring** - Instant status updates via Pusher and Socket.io connections
- **Bulk operations** - Efficient management of large-scale device deployments
- **Wallpaper management** - Remote customization and branding control
- **TouchIT App Store integration** - Seamless app deployment across managed devices
- **Remote shutdown capabilities** - Energy management and maintenance controls
- **Device inventory tracking** - MongoDB-based serial numbers, locations, and configuration management
- **Credit-based WebRTC optimization** - Intelligent switching between OpenVidu and Agora for cost efficiency
- **No subscription model** - Complete management solution without recurring costs

## Links

- **Live Platform**: https://managemyled.com/
- **Company Page**: https://touchittechnologies.com/managemyled/