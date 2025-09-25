# Muhammad Asif Javed - Master Blog Writing Guidelines (Enhanced Edition)

## Author Identity & Core Philosophy
**Muhammad Asif Javed** - Full-Stack Developer & WebRTC Expert with 10+ years experience. Writing system architect-level content focused on **technical decision-making** with minimal code, maximum reasoning. Each article guides readers through architectural choices, trade-offs, and strategic decisions.

## Target Audience & Promise
- **Primary Audience**: Senior engineers, tech leads, system architects evaluating design options
- **Secondary Audience**: CTOs, Engineering Managers making technology decisions
- **Reader Promise**: Finish with clear decision path and understood trade-offs
- **Content Goal**: Explain decision space, lay out credible alternatives, compare with explicit criteria

## Canonical Post Structure (Strict Order - 14 Sections)

### 1. Category
Display at top (e.g., "Architecture Decisions", "Technology Comparison", "System Design")

### 2. Title
Decision-focused format with proven formulas:

**The Comparison Formula:**
- "[Technology A] vs [Technology B]: System Architect's Guide"
- "WebRTC vs WebSockets: An Architect's Perspective"
- "Redis vs Memcached vs In-Memory: Caching Strategy Decision"

**The Decision Formula:**
- "Choosing Real-time Communication: WebRTC vs WebSockets vs SSE"
- "Choosing the Right Message Queue for Your Microservices Architecture"
- "Event Ingestion at Scale: Comparing 3 Architectural Approaches"

**The Strategy Formula:**
- "Architecting Real-time Collaboration: Key Decisions and Trade-offs"
- "Building Fault-Tolerant Systems: Strategy and Implementation"
- "Scaling WebRTC Beyond 1000 Concurrent Users"

### 3. Decision Snapshot (TL;DR)
**Purpose**: Provide immediate answer for busy architects who need the recommendation first

Template structure:
```
**Decision Snapshot**
- **Recommendation:** [Primary option] for [main use case]; [Secondary option] if [specific constraint]
- **Why:** [Reason 1], [Reason 2], [Reason 3]
- **Assumptions:** Region [X], [N]K RPS, P99 < [Y] ms, budget ≈ $[Z]/month, [team constraints]
- **Avoid if:** [Specific conditions where recommendation fails]
```

Example:
```
**Decision Snapshot**
- **Recommendation:** WebRTC for <10 users P2P; WebSockets for >50 users with server mediation
- **Why:** Lower latency, reduced server costs, direct data channels
- **Assumptions:** Consumer apps, <100ms latency requirement, mobile-friendly needed
- **Avoid if:** Corporate firewalls, complex NAT scenarios, need guaranteed delivery
```

### 4. Featured Image
High-quality architecture diagram or conceptual sketch (1200x630px)
- Include alt text and caption with assumptions

### 5. Introduction (120-180 words)
Must include:
- **Problem statement**: What decision are we making?
- **Context & constraints**: Scale, latency, budget, team, compliance
- **Success criteria**: What does "good" look like?
- Preview of options to be compared

Example:
> We need to ingest ~10k RPS of small JSON events with P99 < 150 ms, regional HA, and cost under $2k/month. This post compares three approaches and clarifies when to pick each...

### 6. Understanding Section (150-250 words)
**Heading**: "What It Is & How It Works"
- Technology/pattern explanation
- Core use cases with micro example
- Simple architecture diagram/schematic
- When teams typically face this decision

### 7. Options Deep Dive (200-350 words per option)
For each technology/service/approach:

#### Option A: [Name]
**Overview**: 2-3 sentence high-level description

**✅ Pros**
- Scalability advantage with specifics (e.g., "Handles 100K RPS")
- Performance benefit with metrics (e.g., "P99 < 50ms")
- Cost efficiency with numbers (e.g., "$0.001 per 1K requests")
- Team/operational advantage

**⚠️ Cons**
- Limitation with mitigation strategy
- Complexity consideration
- Operational burden
- Lock-in or migration difficulty

**Best For**: Specific scenarios where this excels

**Notes**: Limits, quotas, prerequisites, "works well if..."

**Code/Config (Only if essential)**:
```yaml
# Maximum 10 lines
# Only configuration or architecture patterns
service:
  scaling: auto
  max_instances: 100
```

[Repeat for Options B and C]

### 8. Decision Framework Rationale (Required)
**Purpose**: Transparent justification of matrix weights based on specific constraints

Example structure:
```
**Decision Framework Rationale**
For this real-time communication problem, Latency (0.20) and Scalability (0.20) are weighted highest because user experience depends on sub-100ms response times at 10K+ concurrent users. Cost (0.15) and Operational Complexity (0.15) are secondary but critical for team sustainability. Lock-in Risk (0.10) receives lower priority since we're optimizing for performance over portability in this specific use case.
```

### 9. Comparison Matrix (Required)
Structured decision framework:

| Criterion | Option A | Option B | Option C | Weight | Notes |
|-----------|----------|----------|----------|--------|-------|
| Scalability | High | Medium | High | 0.20 | RPS capacity |
| Latency | Low | Medium | High | 0.15 | P99 < threshold |
| Reliability | High | Medium | High | 0.15 | SLA guarantees |
| Operability | Low | Medium | High | 0.15 | Team burden |
| Complexity | Low | Medium | High | 0.10 | Implementation effort |
| Security | High | Medium | High | 0.10 | Compliance met |
| Cost | $$ | $$$ | $ | 0.10 | Monthly estimate |
| Portability | Medium | Low | High | 0.05 | Lock-in risk |

**Cost Breakdown** (always include):
- What drives cost (requests, data, storage, egress)
- Back-of-envelope scenario: "10k RPS, 1KB payload, 30-day retention = $X/month"

### 10. Mid-Article Image
Decision tree, comparison diagram, or reference architecture
- Alt text: Describe what diagram communicates
- Caption: Decision tree premise or architecture assumptions

### 11. Practical Implementation Guidance (150-250 words)
**Heading**: "When to Choose What"

Structure as decision criteria:
- **Choose Option A when**:
  - Constraint 1 is critical (e.g., < 50ms P99)
  - Team size is X-Y
  - Budget is primary concern
  - Time to market matters most

- **Choose Option B when**:
  - Scale > 100K RPS
  - Compliance requirements exist
  - Migration from legacy system
  - Need enterprise support

- **Choose Option C when**:
  - Maximum flexibility needed
  - Multi-region deployment
  - Custom requirements
  - Portability is critical

**Guardrails & Pitfalls**:
- Quotas to watch
- Common mistakes to avoid
- Migration paths if needs change
- Blast-radius containment

### 12. Conclusion (80-120 words)
- Tight summary of key trade-offs
- Reiterate primary decision factors
- Next steps (e.g., "pilot with workload X, measure Y, revisit in Z weeks")
- Call-to-action for specific evaluation

### 13. Tags
5-8 relevant tags for discoverability
#Architecture #TradeOffs #Technology1 #Technology2 #SystemDesign

## Writing Style Guidelines ("State of Mind")

### Core Principles
1. **Decision-first**: Lead with why this choice matters and what can go wrong
2. **Comparative**: Always discuss 2-3 viable options minimum
3. **Vendor-neutral**: No hype; back claims with reasoning and links
4. **Minimal code**: Only to illuminate design decisions (<10 lines)
5. **Concrete**: Name specific constraints (throughput, latency, SLA, compliance)
6. **Skimmable**: Short paragraphs, bullets, tables, callouts

### Language & Tone
- **Sober and measured**: "tends to", "under these constraints", "in our experience"
- **Evidence-based**: Cite official docs/specs for limits, SLAs, security properties
- **Balanced**: Explain why option is worse for specific constraints, not universally bad
- **Honest about unknowns**: Call out unknowns and how to de-risk (PoC, benchmarks)

## Pre-Write Requirements Checklist

Before drafting, must define:
- [ ] **Problem statement**: What are we trying to build/decide?
- [ ] **Constraints**:
  - Scale (RPS/throughput)
  - Latency SLOs (P50, P99)
  - Consistency model
  - Durability requirements
  - Budget limits
  - Team skills available
  - Compliance requirements
  - Time to market pressure
- [ ] **Success metrics**: Quantifiable outcomes
- [ ] **Context boundaries**: Cloud(s), languages, data gravity, existing stack

## Enhanced Comparison Framework

### Standardized Criteria Taxonomy (Use Exact Labels)
**Purpose**: Consistent terminology across all posts for better comparison and searchability

**Standard 8-Criteria Framework** (use these exact labels):

1. **Scalability** (0.20)
   - Horizontal scaling capability
   - Auto-scaling support
   - Performance at scale

2. **Latency** (0.15)
   - Response time (P50, P99)
   - Network latency characteristics
   - Real-time requirements

3. **Reliability** (0.15)
   - SLA/SLO guarantees
   - Failure modes
   - Data durability

4. **Operability** (0.15)
   - Tooling maturity
   - Debugging capability
   - On-call load

5. **Complexity** (0.10)
   - Cognitive load
   - Integration effort
   - Learning curve

6. **Security** (0.10)
   - Encryption options
   - Isolation mechanisms
   - Compliance capabilities

7. **Cost** (0.10)
   - Total cost of ownership
   - Predictability
   - Hidden costs (egress, cross-AZ)

8. **Portability** (0.05)
   - Vendor lock-in risk
   - Standards compliance
   - Migration difficulty

## Content Blocks & Conventions

### Standard Callout Boxes

**Assumptions Box**:
```
📋 **Assumptions**
- Region: AP-Southeast (Singapore)
- Scale: 10K RPS peak, 2K RPS average
- Payload: 1KB average JSON
- SLO: 99.9% availability
- Latency: P99 < 150ms
```

**From the Trenches Box**:
```
👨‍💻 **From the Trenches: An Architect's Anecdote**
On a past project, we chose WebRTC for its P2P efficiency but underestimated NAT traversal complexity in corporate networks. Our support tickets spiked 300% in the first month. This taught us to always factor in network topology constraints, not just technical capabilities. That painful experience is why "Operational Complexity" is weighted heavily in this analysis.
```

**Pitfalls Box**:
```
⚠️ **Common Pitfalls**
- Watch for egress costs exceeding estimates
- Cross-AZ fanout can double latency
- Cold starts on burst > 2x baseline
- Partition hot-spotting with poor key design
```

**Migration Note**:
```
🔄 **Migration Path**
If outgrowing Option A:
1. Implement Option B alongside
2. Dual-write for validation period
3. Gradual traffic shift (10% → 50% → 100%)
4. Monitor metrics at each stage
5. Keep Option A for rollback (30 days)
```

## SEO & Metadata Structure

### Required Front Matter (YAML)
```yaml
---
category: "Architecture Decisions"
title: "WebRTC vs WebSockets: Choosing Real-time Communication Architecture"
slug: "webrtc-vs-websockets-realtime-architecture"
date: "2024-01-01"
description: "Compare WebRTC and WebSockets for real-time apps. Learn trade-offs, costs, and when each makes sense for your architecture. Based on 10+ years building production systems."
author: "Muhammad Asif Javed"
tags: ["architecture", "webrtc", "websockets", "real-time", "comparison", "system-design"]
reading_time: "8 min"
og_image: "/images/webrtc-websockets-comparison.png"
canonical_url: "https://maxifjaved.com/blog/webrtc-vs-websockets/"
expertise_level: "system-architect"
---
```

### SEO Guidelines
- Primary keyword in: Title, H1, intro paragraph (naturally)
- Meta description: 120-160 chars, compelling and honest
- Internal links: 2-3 related posts on maxifjaved.com
- External links: Official docs, specs (open in new tab)

## Validation Checklist (Non-Negotiable)

### Content Structure
- [ ] Category, Title, Featured image present
- [ ] Introduction states problem + constraints + success criteria
- [ ] At least 2-3 real alternatives compared (no strawmen)
- [ ] Decision matrix with explicit weights included
- [ ] Each option has specific pros AND cons (no hand-waving)
- [ ] Mid-post image with caption & alt text
- [ ] Practical takeaway: "choose X when..." with clear conditions
- [ ] Conclusion restates trade-offs + next steps
- [ ] Tags added (5-8 relevant)

### Technical Quality
- [ ] Constraints explicitly stated with numbers
- [ ] Cost estimates provided with breakdown
- [ ] Performance metrics included where relevant
- [ ] Migration paths discussed
- [ ] References to official docs for claims
- [ ] Unknown risks acknowledged with de-risking approach

### Accessibility & Format
- [ ] Logical heading hierarchy (H1→H2→H3, no jumps)
- [ ] Alt text for all images
- [ ] Tables have headers
- [ ] No walls of text (>6 lines without break)
- [ ] Mobile-responsive tables
- [ ] SI units used, time zones explicit

## Example Topics Aligned with Your Expertise

### WebRTC & Real-time Systems
1. "WebRTC Mesh vs SFU vs MCU: Scaling Video Conferencing Beyond 50 Users"
2. "WebSockets vs SSE vs WebRTC Data Channels for Real-time Updates"
3. "TURN vs STUN: When You Need Each (With Cost Analysis)"

### Database Architecture
4. "PostgreSQL vs MongoDB for Real-time Collaboration Platforms"
5. "Redis vs Memcached vs In-Memory: Caching Strategy for <50ms Latency"
6. "TimescaleDB vs InfluxDB vs ClickHouse for Time-Series at Scale"

### API & Communication
7. "REST vs GraphQL vs gRPC: Choosing for Microservices (With Benchmarks)"
8. "API Gateway Comparison: Kong vs AWS vs Nginx (Cost & Performance)"
9. "Message Queues: RabbitMQ vs Kafka vs AWS SQS (When Each Wins)"

### Frontend Architecture
10. "Next.js vs Remix vs SvelteKit: Enterprise App Architecture 2024"
11. "State Management: Redux vs Zustand vs Jotai (Bundle Size & DX)"
12. "Micro-Frontends: Module Federation vs Single-SPA vs Native Federation"

### Infrastructure & DevOps
13. "Kubernetes vs ECS vs Cloud Run: Container Orchestration Trade-offs"
14. "Monitoring Stack: Prometheus vs DataDog vs New Relic (TCO Analysis)"
15. "CI/CD: GitHub Actions vs GitLab vs Jenkins (For 50+ Developer Teams)"

## Publishing Checklist (Final Pass)

- [ ] Spelling/grammar check, active voice preferred
- [ ] All tables render correctly on mobile
- [ ] Images optimized (≤200KB) with descriptive alt text
- [ ] Internal links to 2-3 related posts
- [ ] Meta description compelling and accurate
- [ ] URL slug matches primary keyword pattern
- [ ] Assumptions clearly stated in callout box
- [ ] Costs and limits explicitly called out
- [ ] Decision matrix complete with reasoning
- [ ] No vendor bias, balanced analysis

## JSON Output Template for AI Generation

**Markdown Formatting Instructions**: Fields marked with `_markdown` suffix should contain properly formatted markdown content ready for direct rendering.

```json
{
  "category": "Architecture Decisions",
  "title": "[Technology A] vs [Technology B]: System Architect's Guide",
  "decision_snapshot_markdown": "**Decision Snapshot**\n- **Recommendation:** WebRTC for <10 users P2P; WebSockets for >50 users with server mediation\n- **Why:** Lower latency, reduced server costs, direct data channels\n- **Assumptions:** Region ap-southeast-1, 10K RPS peak, P99 < 150ms, budget $2K/month, 5 engineers limited ops\n- **Avoid if:** Corporate firewalls, complex NAT scenarios, guaranteed delivery requirements",
  "featured_image": {
    "file": "architecture-comparison.png",
    "alt": "Technical diagram showing [Technology A] vs [Technology B] comparison",
    "caption": "Architecture comparison assuming [key constraint]"
  },
  "introduction_markdown": "## Introduction\n\nWe need to choose between [Technology A] and [Technology B] for our real-time communication system. This decision impacts user experience, costs, and team productivity for the next 2+ years.\n\n📋 **Assumptions**\n- Region: ap-southeast-1\n- Scale: 10K RPS peak, 2K RPS average\n- Latency: P99 < 150ms required\n- Budget: $2K/month operational costs\n- Team: 5 engineers with limited ops experience\n- Compliance: SOC2 Type II required\n\n**Success looks like:** Sub-100ms response times, predictable costs, and maintainable by current team.",
  "understanding_markdown": "## What It Is & How It Works\n\nTechnology explanation and core concepts with architecture fundamentals.\n\n![Simple Architecture](simple-architecture.png)\n*Alt: Basic architecture diagram showing core components*\n\n**Common Use Cases:**\n- Primary use case with scale requirements\n- Secondary use case for specific scenarios\n- Edge case handling for complex situations",
  "options_markdown": "## Options Deep Dive\n\n### Option A: [Technology Name]\n\n**Overview:** 2-3 sentence high-level description of the technology and its primary value proposition.\n\n**✅ Pros**\n- Scales to 100K RPS with auto-scaling\n- P99 < 50ms latency in benchmarks\n- $0.001 per 1K requests cost efficiency\n- 5 minute setup with managed service\n\n**⚠️ Cons**\n- Vendor lock-in to specific cloud provider\n- Complex debugging in distributed scenarios\n- No local development environment\n- Limited customization options\n\n**Best For:** Teams needing quick start with predictable costs\n\n**Notes:** Rate limit: 10K RPS per account default, enterprise tiers available\n\n```yaml\n# Configuration example\nservice:\n  scaling: auto\n  max_instances: 100\n```\n\n### Option B: [Technology Name]\n\n[Similar structure for Option B]\n\n### Option C: [Technology Name]\n\n[Similar structure for Option C]",
  "decision_framework_rationale_markdown": "## Decision Framework Rationale\n\nFor this real-time communication problem, **Latency (0.20)** and **Scalability (0.20)** are weighted highest because user experience depends on sub-100ms response times at 10K+ concurrent users. **Cost (0.15)** and **Operability (0.15)** are secondary but critical for team sustainability.\n\n**Deliberately excluded:** Multi-cloud portability not prioritized due to focus on performance optimization.",
  "comparison_matrix_markdown": "## Comparison Matrix\n\n| Criterion | Option A | Option B | Option C | Weight | Notes |\n|-----------|----------|----------|----------|--------|---------|\n| Scalability | High | Medium | High | 0.20 | RPS capacity |\n| Latency | Low | Medium | High | 0.15 | P99 < threshold |\n| Reliability | High | Medium | High | 0.15 | SLA guarantees |\n| Operability | Low | Medium | High | 0.15 | Team burden |\n| Complexity | Low | Medium | High | 0.10 | Implementation effort |\n| Security | High | Medium | High | 0.10 | Compliance met |\n| Cost | $$ | $$$ | $ | 0.10 | Monthly estimate |\n| Portability | Medium | Low | High | 0.05 | Lock-in risk |\n\n**Cost Breakdown** (10K RPS, 1KB payload, 30-day retention):\n- **Cost Drivers:** Requests, data storage, network egress, control plane\n- **Option A:** $850/month\n- **Option B:** $1,250/month\n- **Option C:** $650/month",
  "mid_article_image": {
    "file": "decision-tree.png",
    "alt": "Decision tree for choosing between architectural options based on constraints",
    "caption": "Decision flow based on primary constraints: scale, latency, and team capabilities"
  },
  "practical_guidance_markdown": "## When to Choose What\n\n- **Choose Option A when:**\n  - Need fastest time to market (<2 weeks)\n  - Team size < 10 developers\n  - Acceptable vendor lock-in for managed convenience\n\n- **Choose Option B when:**\n  - Scale > 100K RPS required consistently\n  - Multi-region deployment mandatory\n  - Strict compliance requirements (HIPAA, PCI)\n\n- **Choose Option C when:**\n  - Maximum portability and flexibility needed\n  - Custom integration requirements\n  - Cost optimization is primary concern\n\n**Guardrails & Pitfalls:**\n- Monitor egress costs monthly - can exceed compute costs\n- Set up alerting for quota limits before hitting them\n- Plan migration path before committing to prevent lock-in\n\n**Migration Path:** Least-risk path: A→B via dual-write pattern, B→C via abstraction layer",
  "from_the_trenches_markdown": "👨‍💻 **From the Trenches: An Architect's Anecdote**\n\nOn a past project, we chose Option A for its speed to market. We hit our launch deadline, but six months later, our egress costs spiraled out of control as user-generated content grew. This taught us a critical lesson: always model your cost drivers for 12 months out, not just for launch. That painful experience is why \"Cost\" criterion is weighted heavily in this analysis.",
  "conclusion": "For most teams starting out, Option A provides the best balance of simplicity and capability. Option B becomes necessary at enterprise scale, while Option C offers maximum flexibility for specialized requirements and cost-sensitive scenarios.",
  "tags": ["architecture", "comparison", "system-design", "trade-offs", "decision-framework"]
}
```

## Visual Design Guidelines for AI Image Generation

### Featured Image Specifications (1200x630px)
**Style**: Clean, modern, technical diagram aesthetic
**Color Palette**:
- Primary: Deep blue (#1e3a8a), Tech green (#10b981), Warning orange (#f59e0b)
- Background: Clean white or subtle gradient (#f8fafc to #f1f5f9)
- Accent: Professional gray (#64748b)

### Featured Image Templates

#### Architecture Comparison Template
```
AI Prompt Template:
"Create a clean, professional technical diagram showing [Technology A] vs [Technology B] comparison. Style: Modern system architecture diagram with clean lines, minimal icons, and clear visual hierarchy. Layout: Split screen with both technologies side by side, connected components shown as rounded rectangles, data flow arrows in tech blue. Background: Clean white with subtle grid pattern. Include small performance metrics callouts (latency, cost, scale). 1200x630px, high contrast for readability."

Visual Elements:
- Split-screen layout (50/50)
- Technology logos/icons (small, top corners)
- Architecture components as rounded rectangles
- Connecting arrows showing data flow
- Performance metrics in small callout boxes
- Clean typography for labels
```

#### Decision Tree Template
```
AI Prompt Template:
"Design a clean decision tree flowchart for choosing between technical options. Style: Professional flowchart with rounded decision nodes, clear yes/no paths, and endpoint boxes. Colors: Deep blue nodes, green success paths, orange warning paths. Layout: Top-down flow with clear branching logic. Include constraint labels (scale, cost, team size). Background: Clean white. 1200x630px, optimized for social sharing."

Visual Elements:
- Diamond shapes for decisions
- Rectangular boxes for outcomes
- Clear directional arrows
- Constraint labels along paths
- Color-coded outcomes (green=recommended, orange=caution)
```

#### System Architecture Template
```
AI Prompt Template:
"Illustrate a clean system architecture diagram showing [specific technology/pattern]. Style: Modern technical schematic with clean lines, consistent shapes, and logical flow. Components: Databases as cylinders, services as rectangles, users as simple icons, cloud services as clouds. Colors: Professional blue and green palette. Include data flow arrows and brief labels. Background: Clean white with subtle grid. 1200x630px."

Visual Elements:
- Standard architecture symbols
- Consistent shape language
- Logical component grouping
- Clear data flow indicators
- Minimal text labels
- Professional spacing
```

### Mid-Article Image Specifications (800x400px)

#### Performance Comparison Charts
```
AI Prompt Template:
"Create a clean bar chart or line graph comparing performance metrics between options. Style: Minimal, professional data visualization. Axes clearly labeled, different colors for each option, clean typography. Include key metrics like latency (ms), throughput (RPS), cost ($). Background: Clean white. 800x400px."

Visual Elements:
- Clear axis labels
- Distinct colors per option
- Performance thresholds marked
- Clean grid lines
- Professional typography
```

#### Cost Analysis Diagrams
```
AI Prompt Template:
"Design a cost breakdown visualization showing different pricing models. Style: Clean infographic with pie charts or stacked bars. Colors: Professional palette with clear distinctions. Include monthly cost estimates, usage tiers, and cost drivers. Background: Clean white. 800x400px."

Visual Elements:
- Cost component breakdown
- Usage tier indicators
- Monthly/annual projections
- Clear legends
- Comparative scales
```

### Visual Style Guidelines

#### Typography for Images
- **Headers**: Bold, sans-serif, high contrast
- **Labels**: Clean, readable, consistent sizing
- **Metrics**: Highlighted in accent colors
- **Minimum font size**: 14px (legibility at small sizes)

#### Icon Standards
- **Databases**: Cylinder shapes in tech blue
- **APIs**: Hexagonal or rectangular connectors
- **Users**: Simple person icons
- **Cloud Services**: Stylized cloud shapes
- **Microservices**: Rounded rectangles
- **Message Queues**: Arrow-connected boxes
- **Load Balancers**: Triangle or diamond shapes

#### Color Psychology for Technical Decisions
- **Green (#10b981)**: Recommended options, positive metrics
- **Orange (#f59e0b)**: Caution areas, trade-offs, considerations
- **Red (#ef4444)**: Limitations, bottlenecks, avoid scenarios
- **Blue (#1e3a8a)**: Neutral technology representations
- **Gray (#64748b)**: Supporting elements, labels, backgrounds

### AI Generation Prompts by Content Type

#### WebRTC/Real-time Systems
```
"Technical diagram of WebRTC architecture vs WebSocket connection patterns. Style: Clean system diagram with peer-to-peer connections, server mediation, and data flow arrows. Include latency callouts and connection types. Colors: Professional blue and green. Background: Clean white. 1200x630px."
```

#### Database Comparisons
```
"Database architecture comparison showing [DB A] vs [DB B] data flow and scaling patterns. Style: Technical schematic with data stores, query patterns, and performance indicators. Include throughput metrics and consistency models. Clean professional design. 1200x630px."
```

#### API Architecture
```
"API communication pattern diagram comparing REST, GraphQL, and gRPC. Style: Clean technical illustration showing request/response flows, data structures, and performance characteristics. Professional color scheme. 1200x630px."
```

### Image Optimization Checklist
- [ ] **Resolution**: Exactly 1200x630px (featured) or 800x400px (mid-article)
- [ ] **File size**: Under 200KB for fast loading
- [ ] **Format**: PNG for diagrams, WebP for photographs
- [ ] **Alt text**: Descriptive, technical, includes key concepts
- [ ] **Caption**: Explains assumptions or decision criteria
- [ ] **Contrast**: High enough for mobile viewing
- [ ] **Typography**: Readable at 50% zoom
- [ ] **Brand consistency**: Uses defined color palette

### Accessibility Standards for Technical Images
- **Alt text formula**: "Technical diagram showing [what] comparing [options] with [key insight]"
- **Color blind friendly**: No information conveyed by color alone
- **High contrast**: Minimum 4.5:1 ratio for text elements
- **Descriptive captions**: Explain the decision framework being illustrated

## Target Metrics
- Word count: 1,200-2,000 words (optimal for depth without fatigue)
- Reading time: 6-10 minutes
- Comparison options: 2-3 minimum
- Decision criteria: 5-8 dimensions
- Cost analysis: Always included
- Migration path: Always discussed
- **Visual elements**: 2 images minimum (featured + mid-article)
- **Image optimization**: <200KB per image, high contrast
- **Alt text coverage**: 100% of images with descriptive technical content

This master guideline ensures every blog post maintains your system architect perspective, provides genuine value through decision frameworks, builds your authority as someone who has actually built these systems in production, and includes compelling visuals that enhance technical understanding.