# Three.js Creative Site Layer — Design

**Date:** 2026-07-08
**Status:** Final (web research incorporated)
**Goal:** Make maxifjaved.com feel creative and impressive by layering Three.js visuals across the whole site, without sacrificing SEO, accessibility, or load performance.

## Context

- Astro 5 static site, TailwindCSS 4, Alpine.js islands, `three@0.185` already installed.
- Dark "cyber" theme: `--color-cyber-dark #060d15`, accent `--color-cyber-blue #00e5ff`.
- Hero previously had a modest per-section particle canvas (desktop-only); rest of the page was static glass cards. User verdict: "not impressive."
- Brand: WebRTC / real-time systems — visual language should say _connections, signals, live systems_.

## Research summary (Codrops / Awwwards / three.js manual)

The 2026 consensus for impressive-but-tasteful portfolio WebGL is **one idea executed cleanly**, composed of:

1. **Global flow-noise "aurora" shader plane** — cheapest "expensive look"; one fullscreen quad, all work in the fragment shader (fbm + domain warp), reacting to scroll and pointer. Used under content on most dark-theme award sites.
2. **Hero particle morph** — thousands of points that coalesce from noise into a recognizable shape and disperse on scroll; mouse repels nearby particles. The most-copied award-site pattern (Three.js Journey "particles morphing", Colorverse).
3. **Wireframe network/icosahedron accent** — nodes + edges, noise-displaced, pointer parallax. On-brand for WebRTC (peers + connections).
4. **Scroll choreography, no library** — a lerped `scrollY` fed into uniforms/camera; native scrolling never hijacked.
   Architecture consensus: **one shared renderer + one fixed canvas** (browsers cap WebGL contexts at ~8); zero three.js in the critical path (dynamic import after load); gates for reduced-motion/saveData/WebGL support; pixel ratio capped; RAF paused when hidden.

## Constraints (non-negotiable)

1. **SEO preserved** — all HTML content stays server-rendered; canvas is decorative (`aria-hidden`, `pointer-events: none`, behind content).
2. **Progressive enhancement** — no-JS, `prefers-reduced-motion`, save-data, and WebGL-failure paths keep the existing CSS aurora/gradients.
3. **Performance** — `three` dynamically imported after `load`; pixel ratio ≤1.5 (≤1.25 lite); loop pauses on `visibilitychange`; one WebGL context.
4. **Feature preservation** — every existing affordance (filter tabs, counters, hover states, FAQ accordion, buttons) keeps working untouched.

## Architecture

One full-viewport fixed canvas (`position: fixed; inset: 0; z-index: 0; pointer-events: none`) behind all content, one `WebGLRenderer`, `autoClear` off, manual clear per frame, then:

1. **Global scene** (aurora plane) rendered full-viewport on every page — this alone upgrades _every_ section and inner page since it ships via `MainLayout`.
2. **Section scenes** rendered on top via scissor/viewport clipped to their section's `getBoundingClientRect()` (three.js _multiple elements_ pattern). Sections opt in with `data-scene="<name>"`; offscreen sections are skipped.

```
src/scripts/three/
  engine.ts         # renderer, RAF loop, registry, scroll/pointer state, guards
  scenes/aurora.ts  # global fbm/domain-warp fragment-shader plane
  scenes/hero.ts    # particle morph (</> glyph) + mouse repulsion + scroll disperse
  scenes/network.ts # icosahedron node/edge cluster for the CTA section
```

Entry: small inline `<script>` in `MainLayout.astro` — checks guards, then `import()`s the engine on `load`/idle.

## Scenes

1. **Global — aurora flow field** (every page)
   Fullscreen quad, raw `ShaderMaterial`: 3–4 octave fbm with domain warp (`fbm(p + fbm(p + t))`), tinted black→cyan, vignetted. Uniforms `uTime`, `uScroll`, `uPointer`; scroll slowly shifts hue/intensity so each section feels different. Replaces the CSS aurora blobs when active (CSS version remains as fallback).

2. **Hero — particle morph** (`data-scene="hero"`)
   ~6k points (lite: ~2.5k). Target positions sampled from a `</>` glyph drawn on an offscreen 2D canvas (`getImageData`, opaque-pixel sampling) — on-brand, doesn't duplicate the `<h1>` text next to it. Vertex shader mixes scatter↔glyph by `uProgress` plus simplex drift; pointer uniform repels nearby particles; scroll progress disperses the glyph as the hero exits. Additive-blended cyan.

3. **CTA — peer network** (`data-scene="network"`)
   `IcosahedronGeometry(r, 2)`: vertices as glowing points (peers), edges as additive line segments (connections), CPU noise displacement (few hundred verts), rotation eased toward pointer. Sits behind the CTA card — the "closer" moment echoes the hero.

4. **Scroll glue**
   One passive scroll listener → normalized, lerped `uScroll` consumed by aurora + hero. No GSAP/Lenis.

About / Projects / WhyChooseUs get their atmosphere from the global aurora (restraint per research); per-card WebGL hover distortion is explicitly deferred (most engineering per wow).

## Modes & fallbacks

- **Lite** (coarse pointer or <1024px): reduced particle count, pixel ratio 1.25, no antialias, pointer effects off. Mobile now gets the visuals (previously nothing).
- **Off** (reduced motion, save-data, no WebGL, no JS, init error): canvas never activates; CSS aurora + gradients remain. Engine init in try/catch; `webglcontextlost` → stop loop, remove canvas.

## Testing / verification

- `bun run build` clean.
- Browser: aurora on all pages; hero morph + repulsion; CTA network; scroll disperse; reduced-motion off-path; mobile lite mode; existing interactions unchanged.
- Feature-preservation walk: hero buttons/socials/stats/photo badge, project filter tabs, counters, FAQ accordion, CTA button.

## Out of scope

- Full-canvas 3D navigation experience (kills SEO/a11y — rejected).
- Project-card WebGL hover distortion (deferred; add once core lands).
- New dependencies (GSAP, postprocessing) — not needed.
