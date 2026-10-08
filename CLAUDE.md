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
- **Color Contrast & Readability:** Maintain WCAG AA compliance. Never place light text on bright neon accents. On saturated backgrounds (e.g., cyan), use deep navy text (`#0F172A`) with bold font weight.
- **No Horizontal Scrollbars:** Ensure all code blocks, cards, and navigation bars fit within viewport boundaries without causing horizontal overflow.

### Modular CSS Architecture
All global styles reside in `src/styles/` and are organized as follows:
- `tokens.css`: Color palettes, CSS variables for dark and light themes, and i18n visibility rules.
- `base.css`: Resets, typography, focus outlines, and smooth scrolling.
- `layout.css`: `.wrap` containers, `h2` headings with accent lines, and rhythm.
- `header.css`: Fixed navbar, logo, and control buttons.
- `filters.css`: Technology filter pills and active states.
- `cards.css`: 2x2 project grid, card architecture, status badges, and action buttons.
- `global.css`: Master stylesheet importing the modular files.
- Component-specific styles must remain scoped within `<style>` blocks inside respective `.astro` files.

### Theme and Language System
- **Theme (Dark / Light):** Controlled via `document.documentElement.dataset.theme`. Default is `dark`. All theme variables are defined in `tokens.css`.
- **Language (ES / EN):** Controlled via `document.documentElement.dataset.lang`.
  - Static Astro templates use `<span class="i18n-es">...</span>` and `<span class="i18n-en">...</span>`.
  - React components subscribe to the `lang-change` custom event on `window` and read `desc_es` / `desc_en` from `src/data/projects.ts`.

### Assets and Base Path
- The project runs with `base: '/MyPortfolio'` in `astro.config.mjs`.
- Always prefix internal URLs, images, and documents with `import.meta.env.BASE_URL` (e.g., `${import.meta.env.BASE_URL}favicon.svg` or `${import.meta.env.BASE_URL}cv-hugo-adama.pdf`).
