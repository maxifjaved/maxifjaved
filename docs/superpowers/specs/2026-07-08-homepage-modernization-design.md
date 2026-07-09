# Homepage Modernization — Design Spec

**Date:** 2026-07-08
**Goal:** Modernize maxifjaved.com's homepage from the current neon-cyberpunk look to a refined dark-tech aesthetic (Vercel/Linear register) that builds trust with US/UK enterprise clients, improves engagement/conversion, and protects Core Web Vitals. Content, SEO structure, and all existing affordances are preserved.

## Context

- Stack: Astro 5 + Tailwind v4 (CSS `@theme` in `src/styles/global.css`) + Alpine.js. Bun for scripts.
- Homepage (`src/pages/index.astro`): `Hero → About → ProjectsSection → WhyChooseUs → FAQ → CTA` inside `MainLayout`.
- Current look: Orbitron headings, `#00e5ff` cyan glows everywhere, `clip-path` buttons with infinite `neonPulse`, twinkling stars + data streams, spinning rings around a stock AI image (`/img/future-ai.png`), sine-wave fake progress bars driven by an always-on `requestAnimationFrame` loop.
- User's portrait available: `~/Desktop/Avatar 17304812 460x460.jpeg` (approved for hero use).

## 1. Foundation — design tokens (`src/styles/global.css`)

- **Palette:** keep brand identity, calm it down.
  - Background: deepen `--color-cyber-dark` to a near-black navy (e.g. `#060d15`); add a slightly lighter surface token for cards (e.g. `#0b1622`).
  - `--color-cyber-blue` `#00e5ff` stays but is used only as accent: links, kicker text, gradient highlight, focus rings, small chips. Body text: near-white `#e8eef4` / gray-300 range. Never large cyan text blocks.
- **Typography:** headings switch `--font-future` from Orbitron to **Space Grotesk** (Google font, same loading mechanism as current fonts); Poppins stays for body. h1/h2 weight 600, `letter-spacing: -0.02em`, `line-height` 1.1.
- **Remove sitewide:** `neonPulse` infinite animation, `.cyber-btn` clip-path corners + `::before/::after` slashes, `.text-shadow-glow` glow (keep class name, reduce to a very subtle `0 0 24px rgba(0,229,255,0.25)` ambient), `.glow` heavy box-shadow (reduce to soft ambient shadow), `.star` / `.data-stream` styles and any scripts that spawn them.
- **`.cyber-btn` restyled in place** (class kept so other pages inherit the modern look): `border-radius: 10px`, no clip-path, no infinite animation; primary = solid cyan w/ dark text, hover slightly lighter + translate-y(-1px); ghost = 1px `white/15` border, hover border-cyan + `bg-white/5`. 150–200ms ease transitions.
- **Card idiom:** `bg-white/[0.03]` (or surface token), `border border-white/10`, `rounded-2xl`, soft multi-layer shadow, hover: `border-cyan/40` + slight lift. Used by Projects, About, WhyChooseUs, FAQ.
- **Background:** body keeps dark navy with ONE subtle radial cyan tint top-center (opacity ≤ 0.06) and an optional faint dot-grid; no animated elements.
- **Motion:** entrance fades stay (Alpine `x-intersect` fadeInUp), capped ~500ms; all animation wrapped in `@media (prefers-reduced-motion: reduce)` guards.

## 2. Hero (`src/components/Hero.astro`)

- **Left column:**
  - Eyebrow: uppercase tracking-wide small text — "Senior Full-Stack Developer · WebRTC & Real-time Systems".
  - H1: "Muhammad Asif Javed" large (text-5xl/6xl/7xl responsive) with the last word or key phrase in a cyan→light-cyan gradient text; subtitle line below.
  - One-sentence value prop (reuse/trim current description; keep verified claims only).
  - **Stat row** (verified): `10+ years experience · 19 shipped projects · 7-yr solo-run platform` as three inline stat items with thin separators.
  - Buttons: primary "View Projects" (#projects smooth), ghost "Contact Me" (/contact). Same hrefs as today.
  - Social icons (GitHub, LinkedIn, WhatsApp) unchanged targets, restyled subtle gray→cyan hover.
- **Right column:** portrait photo replaces stock image.
  - Copy avatar to `src/assets/img/asif-javed.jpeg`, render via `astro:assets` `<Image>` webp, `loading="eager"`, `fetchpriority="high"`, dimensions set (no CLS).
  - Treatment: `rounded-2xl` (not circle) portrait ~380–420px, thin gradient ring (1px cyan→transparent), glass backdrop card offset behind it, one floating chip: green-dot "Available for projects" badge (static, no rotation).
  - **Delete:** spinning rings, pulse circles, both rotating badges, fake progress bars, and the `requestAnimationFrame`/`setInterval` scripts entirely.
- **Feature-preservation note:** rotating skill/experience labels are consolidated into the static stat row + eyebrow (content preserved, rotation dropped — approved direction "calmer").

## 3. Section pattern + individual sections

Shared header pattern for all homepage sections: uppercase cyan kicker (e.g. "WORK"), H2 in Space Grotesk, optional one-line gray sub. Replaces the glowing-underline centered headers.

- **About (`About.astro`):** keep copy + industries + tools. Replace percentage competency bars with 4 clean competency cards (label + one-line descriptor) or chips; stat styling per card idiom. No numeric "%" values (unverifiable).
- **ProjectsSection (`ProjectsSection.astro`):** keep Alpine filter logic + categories. Tabs restyled as a pill segmented control (single container, `bg-white/5`, active pill = cyan bg dark text). Cards: card idiom, image top, category chip, description, tech chips; hover = border brighten + translate-y(-2px), no blur-glow layer. Grid `md:grid-cols-2 lg:grid-cols-3` instead of flex-wrap centering.
- **WhyChooseUs (`WhyChooseUs.astro`):** same 6 features/copy; minimal cards, icon in a small rounded cyan-tinted square, title + description. 3-col grid.
- **FAQ (`FAQ.astro`):** same Alpine accordion + content/schema; restyle rows with `border-white/10` dividers, plus/minus indicator, cyan question hover.
- **CTA (`CTA.astro`):** single gradient panel card (radial cyan glow inside a bordered rounded-3xl container), H2 + trimmed description + one primary button. Same href/copy.
- `index.astro`: composition unchanged (order stays Hero→About→Projects→WhyChooseUs→FAQ→CTA).

## 4. Performance / SEO guardrails

- No always-running rAF/interval loops anywhere on the homepage.
- Remove star/data-stream spawner scripts if present in layout.
- Photo optimized via astro:assets (webp, quality ~80, exact dimensions).
- All h1/h2 text, FAQ questions/answers, links, aria-labels, and MainLayout structured data unchanged.
- Verify with `bun run build`; visual check via preview screenshots.

## Out of scope

- Other pages' markup (they inherit improved tokens/buttons only).
- Navigation/Footer redesign, blog, project detail pages.
- New copy/claims (only verified-claims-compliant text reuse) — except trimming for length.
- Unused `OurTeam.astro` cleanup (separate task).

## Definition of Done

- Homepage renders with new aesthetic; zero dropped content/affordances (section-by-section PRESERVED/CHANGED audit).
- `bun run build` passes; no console errors on preview.
- No infinite animations; reduced-motion respected.
- Portrait photo live in hero; stock `future-ai.png` no longer referenced by Hero.
