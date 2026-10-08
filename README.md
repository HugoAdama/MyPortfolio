# hugoadama.dev

Personal developer portfolio engineered with Astro, React, and TypeScript. Focused on high-performance web architecture, zero-FOUC rendering, and modern UI/UX standards.

---

## Overview

This repository contains the source code for the personal portfolio of **Hugo Adama**, Frontend & Full-Stack Developer based in Lima, Peru. The project is designed with an islands architecture: static HTML generation for content-heavy sections and lightweight client-side React islands for interactive features.

---

## Key Features

- **Astro Islands Architecture:** Static-first approach delivering zero unnecessary JavaScript to the client for informational sections (Hero, About, Tech Stack, Footer).
- **Interactive React Island:** A reactive project filtering system with real-time tag queries and smooth DOM transitions.
- **Dark and Light Mode:** System-aware theme switcher with `localStorage` persistence and anti-FOUC script in the document head.
- **Bilingual Internationalization (ES / EN):** Instant in-place language toggle between Spanish and English without full page reloads.
- **Custom Vector Iconography:** Accessible, lightweight inline SVG icons styled consistently with the application design tokens.
- **Accessible Interactions:** Built with keyboard focus states, semantic HTML5 landmarks, and WCAG AA contrast compliance.
- **Responsive Layout:** Tailored grid layouts for mobile, tablet, and desktop screens.

---

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Astro | Static site generation and islands orchestration |
| **UI Library** | React 19 | Interactive client components |
| **Language** | TypeScript | Type safety for project definitions and state logic |
| **Styling** | Vanilla CSS | Custom design system tokens, CSS variables, and layout |
| **Fonts** | Inter & JetBrains Mono | Primary typography and monospace code presentation |
| **Icons** | Custom Inline SVGs | Scalable and theme-aware vector icons |

---

## Featured Projects in Portfolio

1. **BeatNest:** In-browser private audio player with 5-band equalizer, real-time Canvas visualizer, and zero-cloud dependency.
2. **Nimbus:** High-precision real-time weather web application built with clean architecture (SoC) and interactive 24-hour SVG temperature chart.
3. **MiDespensa:** Smart recipe manager and offline-first Progressive Web App (PWA) with IndexedDB persistence.
4. **Kanban_Tableu:** Accessible Kanban board (WCAG 2.1 AA) with full keyboard navigation and native Drag and Drop.

---

## Project Structure

```text
portfolio/
├── public/
│   ├── capturas/          # High-resolution screenshots of featured projects
│   ├── cv-hugo-adama.pdf  # Downloadable resume
│   └── favicon.svg        # Vector favicon
├── src/
│   ├── components/
│   │   ├── About.astro          # Biography, core pillars, and categorized tech stack
│   │   ├── CodeWindow.astro     # Interactive code snippet card with typing animation
│   │   ├── Footer.astro         # Contact call-to-action, copy email button, and navigation
│   │   ├── Header.astro         # Sticky navigation bar with theme and language toggles
│   │   ├── Hero.astro           # Introduction, availability status, and primary CTAs
│   │   └── ProjectsFilter.tsx   # React client island for tag-based filtering
│   ├── data/
│   │   └── projects.ts          # Typed project datasets with bilingual descriptions
│   ├── layouts/
│   │   └── Layout.astro         # HTML document skeleton, SEO metadata, and anti-FOUC script
│   ├── styles/
│   │   └── global.css           # Design tokens, color schemes, resets, and media queries
│   └── pages/
│       └── index.astro          # Root page composing layout and components
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js version 18.17.1 or higher
- npm, pnpm, or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HugoAdama/MyPortfolio.git
   cd MyPortfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:4321`.

---

## Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the development server at `http://localhost:4321` |
| `npm run build` | Compiles static production build into `./dist/` |
| `npm run preview` | Previews the production build locally |

---

## Author

**Hugo Adama**  
Frontend & Full-Stack Developer  
Lima, Peru  

- GitHub: [https://github.com/HugoAdama](https://github.com/HugoAdama)
- LinkedIn: [https://www.linkedin.com/in/hugoadama](https://www.linkedin.com/in/hugoadama)
- Email: [contacto@hugoadama.dev](mailto:contacto@hugoadama.dev)

---

## License

This project is open-source and available under the [MIT License](LICENSE).
