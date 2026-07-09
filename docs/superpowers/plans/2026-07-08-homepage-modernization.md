# Homepage Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle maxifjaved.com's homepage from neon-cyberpunk to a refined dark-tech aesthetic (calm cyan accent, Space Grotesk headings, glass cards, real portrait photo) with zero content/SEO loss.

**Architecture:** Tailwind v4 theme tokens live in `src/styles/global.css` (`@theme` block); restyling shared classes there (`.cyber-btn`, `.glow`, `.text-shadow-glow`) modernizes all pages at once. Homepage components are self-contained `.astro` files composed in `src/pages/index.astro`; each is restyled independently against the shared tokens. Alpine.js powers interactivity (accordion, tabs) and stays.

**Tech Stack:** Astro 5, Tailwind CSS v4 (CSS-config), Alpine.js, astro:assets, Bun. No new dependencies.

**Spec:** `docs/superpowers/specs/2026-07-08-homepage-modernization-design.md`

## Global Constraints

- **Do NOT `git commit`, push, or branch** — the project owner commits manually. Deliverables land in the working tree. (Project CLAUDE.md rule; overrides this skill's commit steps.)
- **Do NOT run `bun run dev`.** Verify with `bun run build` only.
- Package manager/runner: **Bun** (`bun run build`).
- **No new npm dependencies. No new fonts beyond swapping Orbitron → Space Grotesk in the existing Google Fonts URL.**
- **Verified claims only** (source: `/Users/maxifjaved/Coding/maxifjaved/portfolio/upwork/verified-claims.md`): no concurrency/latency/user-count numbers. Allowed stats: "10+ Years Experience", "19 Shipped Projects", "7-Year Solo-Run Platform".
- **Feature preservation:** every heading, copy block, link href, aria attribute, FAQ schema, and Alpine behavior that exists today must exist after — restyle, don't remove. Exceptions explicitly approved in the spec: rotating hero badges + fake progress bars + stars/matrix effects + About competency percentage bars are deleted/replaced.
- Content/data arrays inside components keep their current text unless a task shows replacement text verbatim.
- All animations ≤500ms, and every new `animation`/`transition` must be inside or covered by the `prefers-reduced-motion` guard added in Task 1.
- `text-shadow-glow`, `glow`, `cyber-btn` class **names** must keep working (other pages use them).

---

### Task 1: Foundation — tokens, shared classes, layout cleanup

**Files:**

- Modify: `src/styles/global.css`
- Modify: `src/layouts/MainLayout.astro` (font URLs ~lines 218-236; star/matrix scripts ~lines 396-440)

**Interfaces:**

- Produces (used by Tasks 2-7): CSS classes `.glass-card`, `.section-kicker`, `.btn-primary`, `.btn-ghost`; theme tokens `--color-cyber-dark: #060d15`, `--color-cyber-surface: #0b1622`; heading font Space Grotesk via existing `--font-future` variable and `font-future` utility.

- [ ] **Step 1: Swap fonts in MainLayout.astro.** In both `<link ... fonts.googleapis.com/css2...>` URLs (preload at ~line 225 and noscript at ~line 229), replace `family=Orbitron:wght@400;500;600;700` with `family=Space+Grotesk:wght@500;600;700`. Poppins part stays untouched.

- [ ] **Step 2: Remove star + matrix effects from MainLayout.astro.** Delete the entire `createStars()` function, the entire `createMatrixEffect()` function, and the `requestIdleCallback`/fallback block that invokes them (the block starting at the comment `// Twinkling Stars and Matrix Code` through the end of the idle-callback invocation, ~lines 396-440 — read the file to find the exact closing lines; keep the back-to-top code above it intact).

- [ ] **Step 3: Update the `@theme` block in `global.css`** (lines 2-11) to:

```css
@theme {
  --font-sans: "Poppins", sans-serif;
  --font-future: "Space Grotesk", sans-serif;
  --color-cyber-blue: #00e5ff;
  --color-cyber-dark: #060d15;
  --color-cyber-surface: #0b1622;
  --color-cyber-light: #7deeff;
  --animation-pulse-slow: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animation-float: float 6s ease-in-out infinite;
}
```

(`--animation-data-stream` is deleted.)

- [ ] **Step 4: Replace body background + heading styles** in `global.css`:

```css
body {
  background-color: var(--color-cyber-dark);
  background-image: radial-gradient(
    ellipse 80% 50% at 50% -10%,
    rgba(0, 229, 255, 0.06) 0%,
    transparent 60%
  );
  position: relative;
  overflow-x: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-future);
  letter-spacing: -0.02em;
}
```

- [ ] **Step 5: Restyle `.cyber-btn` and delete its pseudo-elements + `neonPulse`.** Replace the `.cyber-btn`, `.cyber-btn::before`, `.cyber-btn::after` rules and the `@keyframes neonPulse` block with:

```css
.cyber-btn {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition:
    transform 200ms ease,
    background-color 150ms ease,
    border-color 150ms ease,
    color 150ms ease,
    box-shadow 200ms ease;
}
.cyber-btn:hover {
  transform: translateY(-1px);
}
.cyber-btn:active {
  transform: translateY(0);
}
```

- [ ] **Step 6: Soften glows.** Replace `.text-shadow-glow` and `.glow` bodies:

```css
.text-shadow-glow {
  text-shadow: 0 0 24px rgba(0, 229, 255, 0.25);
}
.glow {
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.35),
    0 0 20px rgba(0, 229, 255, 0.08);
}
```

- [ ] **Step 7: Delete dead effect CSS.** Remove these rules and keyframes entirely: `.data-stream`, `@keyframes dataStream` (if present), `.star`, `@keyframes softFade`, `@keyframes floatStar`, `.hologram-ring`, `@keyframes spinHologram`, `.matrix-code`, `.matrix-char`, `@keyframes matrixFall`.

- [ ] **Step 8: Calm the entrance animations.** In the `.animated` rule change `animation-duration: 1s` → `animation-duration: 0.5s`. In `@keyframes fadeInUp/fadeInLeft/fadeInRight/fadeInDown` change every `100px` offset to `24px` (and `-100px` to `-24px`).

- [ ] **Step 9: Add new utilities + reduced-motion guard** (place after the delay classes):

```css
/* Modern card & section idiom */
.glass-card {
  background: color-mix(in srgb, var(--color-cyber-surface) 70%, transparent);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  backdrop-filter: blur(8px);
  transition:
    border-color 200ms ease,
    transform 200ms ease,
    box-shadow 300ms ease;
}
.glass-card:hover {
  border-color: rgba(0, 229, 255, 0.35);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}
.section-kicker {
  color: var(--color-cyber-blue);
  font-family: var(--font-future);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.btn-primary {
  background-color: var(--color-cyber-blue);
  color: var(--color-cyber-dark);
  font-weight: 600;
}
.btn-primary:hover {
  background-color: var(--color-cyber-light);
}
.btn-ghost {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e8eef4;
}
.btn-ghost:hover {
  border-color: rgba(0, 229, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.05);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 10: Verify.** Run `bun run build` → expect "Complete!" and 34 pages. Run `grep -n 'Orbitron\|createStars\|createMatrixEffect\|neonPulse\|matrix-char\|hologram' src/layouts/MainLayout.astro src/styles/global.css` → expect no matches.

---

### Task 2: Hero — portrait photo + rewrite

**Files:**

- Create: `src/assets/img/asif-javed.jpeg` (copy from `/Users/maxifjaved/Desktop/Avatar 17304812 460x460.jpeg`)
- Rewrite: `src/components/Hero.astro`

**Interfaces:**

- Consumes: Task 1 classes (`.cyber-btn`, `.btn-primary`, `.btn-ghost`, `.glass-card`, `.section-kicker`).
- Produces: nothing consumed by later tasks. Anchor `id="home"`, hrefs `#projects`, `/contact`, and the three social links must survive verbatim.

- [ ] **Step 1: Copy the photo.**

```bash
mkdir -p src/assets/img && cp "/Users/maxifjaved/Desktop/Avatar 17304812 460x460.jpeg" src/assets/img/asif-javed.jpeg
```

- [ ] **Step 2: Replace `src/components/Hero.astro` entirely with:**

```astro
---
import { Image } from 'astro:assets';
import asifPhoto from '../assets/img/asif-javed.jpeg';

const hero = {
  eyebrow: "Senior Full-Stack Developer · WebRTC & Real-time Systems",
  title: "Muhammad Asif Javed",
  subtitle: "I build enterprise-grade real-time platforms.",
  description:
    "From classroom collaboration suites to cybersecurity intelligence tools — 10+ years designing, building, and running production systems for US, UK, and global clients.",
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "19", label: "Shipped Projects" },
    { value: "7yr", label: "Solo-Run Platform" },
  ],
  buttons: [
    { label: "View Projects", href: "#projects", isPrimary: true, isSmooth: true },
    { label: "Contact Me", href: "/contact", isPrimary: false, isSmooth: false },
  ],
  socialLinks: [
    { icon: "fab fa-github", href: "https://github.com/maxifjaved" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/maxifjaved" },
    { icon: "fab fa-whatsapp", href: "https://wa.me/923324647331" },
  ],
};
---

<section id="home" class="min-h-screen flex items-center pt-20 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 py-24 relative w-full">
    <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
      <div class="order-2 lg:order-1">
        <p class="section-kicker mb-4">{hero.eyebrow}</p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-4">
          {hero.title}
          <br />
          <span class="bg-gradient-to-r from-cyber-blue to-cyber-light bg-clip-text text-transparent">
            {hero.subtitle}
          </span>
        </h1>
        <p class="text-gray-300 text-lg mb-8 max-w-xl">{hero.description}</p>

        <div class="flex items-center gap-8 mb-10">
          {hero.stats.map((stat, i) => (
            <>
              {i > 0 && <div class="w-px h-10 bg-white/10" aria-hidden="true"></div>}
              <div>
                <div class="text-2xl font-semibold font-future text-white">{stat.value}</div>
                <div class="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            </>
          ))}
        </div>

        <div class="flex flex-wrap gap-4">
          {hero.buttons.map((button) => (
            <a
              href={button.href}
              data-type={button.isSmooth ? "smooth" : "link"}
              class={`max-sm:w-full inline-flex items-center justify-center gap-2 cyber-btn ${
                button.isPrimary ? "btn-primary" : "btn-ghost"
              } py-3 px-8 font-semibold`}
            >
              {button.label}
            </a>
          ))}
        </div>

        <div class="mt-12 flex gap-5">
          {hero.socialLinks.map((link) => {
            const platform = link.icon.includes('github') ? 'GitHub' :
                            link.icon.includes('linkedin') ? 'LinkedIn' :
                            link.icon.includes('whatsapp') ? 'WhatsApp' : 'Social media';
            return (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${platform} profile`}
                class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyber-blue hover:border-cyber-blue/50 transition-colors duration-200"
              >
                <i class={link.icon + " text-lg"} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>

      <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div class="relative">
          <div class="absolute -inset-6 rounded-3xl bg-cyber-blue/5 border border-white/5" aria-hidden="true"></div>
          <div class="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyber-blue/60 via-white/10 to-transparent">
            <Image
              src={asifPhoto}
              alt="Muhammad Asif Javed - Senior Full-Stack Developer"
              width={420}
              height={420}
              format="webp"
              quality={80}
              loading="eager"
              fetchpriority="high"
              class="rounded-2xl w-64 h-64 md:w-[400px] md:h-[400px] object-cover"
            />
          </div>
          <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-right-4 glass-card px-4 py-2 flex items-center gap-2 whitespace-nowrap">
            <span class="w-2 h-2 rounded-full bg-green-400" aria-hidden="true"></span>
            <span class="text-sm text-gray-200">Available for projects</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

(Note: no `<script>` block remains — the rAF progress bars and label-rotation intervals are deliberately deleted per spec.)

- [ ] **Step 3: Verify.** `bun run build` → Complete. `grep -n 'future-ai\|requestAnimationFrame\|setInterval' src/components/Hero.astro` → no matches. `ls dist/_astro | grep -i asif` → a generated webp exists.

---

### Task 3: About — header pattern + competency cards

**Files:**

- Modify: `src/components/About.astro` (header block lines ~70-80; competencies data lines ~51-56; competencies markup lines ~166-197)

**Interfaces:**

- Consumes: `.glass-card`, `.section-kicker` from Task 1.
- Preserve: `developer.toml` terminal card, mission copy, tools chips, `<Timeline />`, `<Counter />`, `id="about"`.

- [ ] **Step 1: Replace the `competencies` data array** (currently label+value percents) with:

```ts
  competencies: [
    { title: "Full-Stack Development", desc: "React to cloud, enterprise-scale" },
    { title: "Real-time Systems", desc: "WebRTC casting & Socket.io collaboration" },
    { title: "Platform Integration", desc: "4000+ apps connected via APIs" },
    { title: "Solo Development", desc: "Enterprise platforms built & run solo for years" },
  ],
```

- [ ] **Step 2: Replace the centered glowing header block** (the `flex justify-center mb-16` div containing the h2 + underline) with:

```astro
    <div class="mb-16">
      <p class="section-kicker mb-3">About</p>
      <h2 class="text-3xl md:text-4xl font-semibold">
        {aboutData.title}
      </h2>
    </div>
```

(Drop the `.split(" ")` cyan-span trickery; plain white heading.)

- [ ] **Step 3: Replace the competencies progress-bar markup** (the `space-y-4 mb-8` div with `x-data="counter(...)"`, progressbar roles, and width animations) with:

```astro
        <div class="grid sm:grid-cols-2 gap-4 mb-8">
          {aboutData.competencies.map((comp) => (
            <div class="glass-card p-4">
              <div class="text-white font-semibold mb-1">{comp.title}</div>
              <div class="text-sm text-gray-400">{comp.desc}</div>
            </div>
          ))}
        </div>
```

- [ ] **Step 4: Verify.** `bun run build` → Complete. `grep -n 'progressbar\|startCounting' src/components/About.astro` → no matches (Counter.astro elsewhere still uses its own counter — do not touch it).

---

### Task 4: ProjectsSection — segmented control + grid cards

**Files:**

- Modify: `src/components/ProjectsSection.astro`

**Interfaces:**

- Consumes: `.glass-card`, `.section-kicker`, `.cyber-btn`, `.btn-primary` from Task 1.
- Preserve: Alpine `activeTab` filter logic, category values, `/projects/${slug}` links, `ProjectHeader` usage, "View All Projects" link, `id="projects"`.

- [ ] **Step 1: Replace the header block** (`flex justify-center mb-16` div) with:

```astro
    <div class="text-center mb-12">
      <p class="section-kicker mb-3">Work</p>
      <h2 class="text-3xl md:text-4xl font-semibold">Featured Projects</h2>
      <p class="text-gray-400 mt-3">A selection of platforms I've designed, built, and run in production.</p>
    </div>
```

- [ ] **Step 2: Replace the filter buttons block** (keep the surrounding `x-data="{ activeTab: 'all' }"`) with a segmented pill control:

```astro
      <div class="flex justify-center mb-12">
        <div class="inline-flex flex-wrap justify-center gap-1 p-1 rounded-full bg-white/5 border border-white/10">
          {filterTabs.map((tab) => (
            <button
              x-on:click={`activeTab = '${tab.value}'`}
              x-bind:class={`activeTab === '${tab.value}' ? 'bg-cyber-blue text-cyber-dark' : 'text-gray-300 hover:text-white'`}
              class="py-2 px-5 rounded-full text-sm font-medium transition-colors duration-200"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
```

- [ ] **Step 3: Convert the cards container** from `flex flex-wrap justify-center gap-8` to `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`, and on each card: delete the blur-glow overlay div (`absolute inset-0 bg-cyber-blue/10 blur-md ...`), remove `w-full max-w-sm` from the wrapper, change the `<a>` card classes from `border border-cyber-blue/20 bg-cyber-dark/70 backdrop-blur-sm rounded-xl ... hover:border-cyber-blue/50` to `glass-card overflow-hidden h-full flex flex-col`, and fix the broken delay class interpolation `'animated fadeInUp delay-' + '${(index + 1) * 100}'` → `'animated fadeInUp delay${(index + 1) * 100}'`. Tech chips: `bg-white/5 border border-white/10 rounded-md text-xs text-gray-300` instead of cyan tint. Category chip stays but as `bg-cyber-dark/80 border border-white/15 text-gray-200`.

- [ ] **Step 4: Restyle "View All Projects"** link classes to `cyber-btn btn-primary px-8 py-3 inline-flex items-center gap-2`.

- [ ] **Step 5: Verify.** `bun run build` → Complete. `grep -c 'activeTab' src/components/ProjectsSection.astro` → ≥ 3 (logic intact); `grep -n 'blur-md' src/components/ProjectsSection.astro` → no matches.

---

### Task 5: WhyChooseUs — minimal icon cards

**Files:**

- Modify: `src/components/WhyChooseUs.astro`

**Interfaces:**

- Consumes: `.glass-card`, `.section-kicker`. Preserve all 6 features' copy and `id="why-choose-us"`.

- [ ] **Step 1: Replace the header block** with:

```astro
    <div class="text-center mb-12">
      <p class="section-kicker mb-3">Why Me</p>
      <h2 class="text-3xl md:text-4xl font-semibold">Why Choose Me</h2>
    </div>
```

- [ ] **Step 2: Restyle cards:** delete each card's blur-glow overlay div; change the inner card div classes to `glass-card p-6 h-full`; change the icon container to `w-11 h-11 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center mb-4` (drop `glow`, drop `rounded-full`); icon `<i>` stays `text-cyber-blue` but `text-lg`; title h3 → `text-lg font-semibold mb-2 text-white` (white, not cyan).

- [ ] **Step 3: Verify.** `bun run build` → Complete. All six `featureData` titles still present: `grep -c 'title:' src/components/WhyChooseUs.astro` → 6.

---

### Task 6: FAQ — cleaner accordion

**Files:**

- Modify: `src/components/FAQ.astro`

**Interfaces:**

- Preserve: FAQ JSON-LD schema script, Alpine `open` toggle, `aria-expanded`, all questions/answers, `id` prop default `faq`.

- [ ] **Step 1: Replace the header block** (centered glowing h2 + underline, lines ~37-42) with:

```astro
    <div class="text-center mb-12">
      <p class="section-kicker mb-3">FAQ</p>
      <h2 class="text-3xl md:text-4xl font-semibold">{title}</h2>
    </div>
```

(Note: use the `{title}` prop as-is, dropping the hardcoded split-color "Frequently".)

- [ ] **Step 2: Restyle accordion items:** container div per item `glass-card overflow-hidden` (replacing `border border-cyber-blue/20 rounded-lg bg-cyber-dark/60 backdrop-blur-sm overflow-hidden`); button hover `hover:bg-white/[0.03]` instead of `hover:bg-cyber-blue/5`; question h3 `text-base md:text-lg font-medium text-white pr-4`; chevron svg class `w-5 h-5 text-gray-400 transition-transform duration-200` with the same `open ? 'rotate-180' : ''` binding; keep the `space-y-6` list wrapper but change to `space-y-3`.

- [ ] **Step 3: Remove the decorative blurred orb div** (`absolute w-96 h-96 bg-cyber-blue/5 ...`) at the top of the section.

- [ ] **Step 4: Verify.** `bun run build` → Complete. `grep -n 'FAQPage' src/components/FAQ.astro` → schema intact; `grep -n 'aria-expanded' src/components/FAQ.astro` → intact.

---

### Task 7: CTA — gradient panel

**Files:**

- Modify: `src/components/CTA.astro`

**Interfaces:**

- Preserve: title, description, button label + `/contact` href, `id="cta"`.

- [ ] **Step 1: Replace the section markup** (keep frontmatter data object unchanged) with:

```astro
<section id="cta" class="py-24 relative">
  <div class="max-w-5xl mx-auto px-6">
    <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-cyber-surface/60 px-8 py-16 md:px-16 text-center">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
        style="background: radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,229,255,0.12) 0%, transparent 70%);">
      </div>
      <div class="relative">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">{ctaData.title}</h2>
        <p class="text-gray-300 text-lg mb-10 max-w-3xl mx-auto">{ctaData.description}</p>
        <div
          x-data="{ visible: false }"
          x-intersect.once="visible = true"
          x-bind:class="visible ? 'animated fadeInUp delay100' : 'opacity-0'"
        >
          <a
            href={ctaData.button.href}
            class="inline-flex items-center justify-center cyber-btn btn-primary py-4 px-10 text-lg"
          >
            {ctaData.button.label}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

(`bg-cyber-surface/60` uses the Task 1 `--color-cyber-surface` token. The split-word cyan span and pulsing orbs are removed.)

- [ ] **Step 2: Verify.** `bun run build` → Complete. `grep -n 'Schedule a Free' src/components/CTA.astro` → button label intact.

---

### Task 8: Final verification + feature-preservation audit

**Files:** none (read-only + build)

- [ ] **Step 1: Full build.** `bun run build` → "34 page(s) built", "Complete!".

- [ ] **Step 2: Feature-preservation audit.** For each homepage section walk the before-list and tag PRESERVED/CHANGED/DROPPED:
  - Hero: h1 name, subtitle content, description claims, View Projects `#projects` smooth link, Contact `/contact`, GitHub/LinkedIn/WhatsApp links + aria-labels (PRESERVED); photo (CHANGED: stock→portrait); rotating badges + progress bars (DROPPED — spec-approved).
  - About: toml card, mission, tools chips, Timeline, Counter (PRESERVED); % bars (DROPPED — spec-approved, replaced by competency cards).
  - Projects: filter logic, 6 featured cards, slugs, View All (PRESERVED).
  - WhyChooseUs: 6 features (PRESERVED). FAQ: schema + all Q/A (PRESERVED). CTA: copy + button (PRESERVED).
    Report any unexpected DROPPED item to the user instead of shipping.

- [ ] **Step 3: Output smoke check.** Do not start any server (dev/preview both prohibited); inspect the built `dist/index.html` instead: `grep -c 'Available for projects' dist/index.html` → 1; `grep -c 'asif-javed' dist/index.html` → ≥1; `grep -c 'future-ai' dist/index.html` → 0; `grep -c 'FAQPage' dist/index.html` → 1.

- [ ] **Step 4: Reduced-motion + no-infinite-animation check.** `grep -rn 'infinite' src/styles/global.css` → only `pulse`/`float` token definitions remain (neither used on homepage sections after this plan; acceptable), and `prefers-reduced-motion` guard present.

- [ ] **Step 5: Summarize** changes + audit results to the user. Do not commit.
