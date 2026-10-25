# Development Guidelines for Hugo Adama Portfolio

## Project Overview

- **Core Stack:** Astro 7, React 19, TypeScript, Vanilla CSS (Modular).
- **Architecture:** Static-first Astro Islands architecture. Static generation for content sections and React client islands (`client:load`) for interactive UI.
- **Repository:** `https://github.com/HugoAdama/MyPortfolio.git`
- **Deployment Target:** GitHub Pages (`https://hugoadama.github.io/MyPortfolio/`) via GitHub Actions.

---

## Local Development Commands

- Start development server in background mode:
  ```bash
  astro dev --background
  ```
- Manage background server:
  - Check status: `astro dev status`
  - View server logs: `astro dev logs`
  - Stop server: `astro dev stop`
- Build for production:
  ```bash
  npm run build
  ```
- Regenerate Astro types:
  ```bash
  npx astro sync
  ```

---

## Design and Code Guidelines

### Visual Standards and Iconography
- **No Emojis:** Do not use emojis in UI, code, or documentation. Use clean, scalable, theme-aware inline SVG icons.
- **Color Contrast & Readability:** Maintain WCAG AA/AAA compliance. Never place light text on bright neon accents. On saturated backgrounds (e.g., cyan in dark mode), use deep navy text (`#0F172A`) with bold font weight. In light mode, ensure buttons have dark navy text (`#0F172A`) or high-contrast white text on deep colors (`#0284C7`, `#7C3AED`).
- **No Horizontal Scrollbars:** Ensure all code blocks, cards, and navigation bars fit within viewport boundaries without causing horizontal overflow.

### Liquid Glass System & Motion Physics
- **Liquid Glass Tokens:** Defined in `src/styles/tokens.css`:
  - `--glass-surface` / `--glass-surface-hover`: Directional 135° light-refraction gradients simulating polished glass curvature.
  - `--glass-bevel` / `--glass-bevel-hover`: Top-edge specular highlight reflections (`inset 0 1px 1px 0 ...`).
  - `--glass-shadow` / `--glass-shadow-hover`: Multi-elevation layered atmospheric shadows.
  - `--glass-blur`: `blur(24px) saturate(...)` for vibrant backdrop refraction.
- **GPU Sheen Crossfade:** For liquid glass hover highlights on `.card`, `.editor`, and panels, never transition CSS `background` gradients directly (which triggers expensive CPU repaints). Place `--glass-surface` on `::before` and `--glass-surface-hover` on `::after` with `opacity: 0 -> 1` GPU transitions.
- **Fluid Staggered Entrance:** Grid items glide into view with `@keyframes cardEntrance` using spring physics (`cubic-bezier(0.16, 1, 0.3, 1)`) and `--stagger` index delays (`calc(var(--stagger, 0) * 45ms)`), preventing abrupt teleportation on filter/page switches.
- **Spring Physics Easing:** Use `--ease-spring: cubic-bezier(0.16, 1, 0.3, 1)` for all card, button, and pill hover transitions.
- **Tactile Active Feedback:** All interactive elements (buttons, cards, pills, chips, control toggles) must provide immediate `:active` tactile feedback (`transform: translateY(0) scale(0.96)`).
- **Compositor-Only Animations:** Transitions must be restricted to GPU-accelerated properties (`transform`, `opacity`, `box-shadow`) with `will-change: transform` and `backface-visibility: hidden` applied to eliminate subpixel raster jitter.

### Theme and Language System
- **Theme (Dark / Light):** Controlled via `document.documentElement.dataset.theme`. Default is `dark`. All theme variables are defined in `tokens.css`.
- **CRITICAL - Astro Scoped Styles Theme Rule:** In `.astro` scoped `<style>` blocks, ALWAYS prefix theme overrides with `:global([data-theme="light"])` (e.g., `:global([data-theme="light"]) .my-card`). Never use bare `[data-theme="light"] .my-card` in scoped styles, as Astro will append its scope identifier to `[data-theme="light"]` and fail to match the root `<html>` attribute. In global CSS files (`src/styles/*.css`), regular `[data-theme="light"]` can be used directly.
- **Language (ES / EN):** Controlled via `document.documentElement.dataset.lang`.
  - Static Astro templates use `<span class="i18n-es">...</span>` and `<span class="i18n-en">...</span>`.
  - React components subscribe to the `lang-change` custom event on `window` and read `desc_es` / `desc_en` from `src/data/projects.ts`.

### Project Filtering and Pagination
- **Pagination Architecture:** Projects in `src/components/ProjectsFilter.tsx` are paginated at 6 items per page (`ITEMS_PER_PAGE = 6`) with smooth section scrolling on page change.
- **Solution-Oriented Categories:** Projects are categorized into:
  - `web-apps`: "Web Apps & Herramientas" / "Web Apps & Tools"
  - `landing-pages`: "Landing Pages & Negocio" / "Landing Pages & B2B"
  - `interactive`: "Experiencias Interactivas" / "Interactive Experiences"
  Each category pill displays a dynamic item count badge.

### Background Canvas & Script Performance
- `src/components/AuroraWaves.astro` renders an undulating Aurora Borealis canvas:
  - Framerate-independent pointer tracking: Uses exponential smoothing (`1 - Math.exp(-delta * 3.8)`) for identical fluid inertia across 60Hz, 120Hz, and 144Hz displays.
  - Coordinate caching: Precomputes wave coordinates once per curtain to avoid redundant trigonometry calculations between fill and stroke passes.
  - Device pixel ratio capped at `1.75` to conserve battery and GPU fillrate on high-DPR mobile screens.
  - Ambient glowing orbs use 3D hardware acceleration (`translate3d(0, 0, 0)` and `backface-visibility: hidden`).
  - Pauses execution during `visibilitychange` when tab is inactive.
  - Respects `@media (prefers-reduced-motion: reduce)`.
- `src/components/CodeWindow.astro` typing cadence is locked to display V-sync using `requestAnimationFrame` timestamp deltas rather than `setInterval`.

### Assets and Base Path
- The project runs with `base: '/MyPortfolio'` in `astro.config.mjs`.
- Always prefix internal URLs, images, and documents with `import.meta.env.BASE_URL` (or using `getAssetPath()` from `src/utils/paths.ts`).
