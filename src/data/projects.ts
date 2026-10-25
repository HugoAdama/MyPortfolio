export type ProjectStatus = 'terminado' | 'en-progreso' | 'planeado';

export type ProjectCategory = 'web-apps' | 'landing-pages' | 'interactive';

export interface CategoryOption {
  id: 'ALL' | ProjectCategory;
  label_es: string;
  label_en: string;
}

export const projectCategories: CategoryOption[] = [
  { id: 'ALL', label_es: 'Todos', label_en: 'All' },
  { id: 'web-apps', label_es: 'Web Apps & Herramientas', label_en: 'Web Apps & Tools' },
  { id: 'landing-pages', label_es: 'Landing Pages & Negocio', label_en: 'Landing Pages & B2B' },
  { id: 'interactive', label_es: 'Experiencias Interactivas', label_en: 'Interactive Experiences' },
];

export interface Project {
  title: string;
  desc_es: string;
  desc_en: string;
  tags: string[];
  status: ProjectStatus;
  category: ProjectCategory;
  demo?: string;
  repo?: string;
  img?: string;
}

export const statusLabels: Record<'es' | 'en', Record<ProjectStatus, string>> = {
  es: {
    'terminado': 'Terminado',
    'en-progreso': 'En progreso',
    'planeado': 'Planeado',
  },
  en: {
    'terminado': 'Completed',
    'en-progreso': 'In progress',
    'planeado': 'Planned',
  },
};

export const uiLabels = {
  es: {
    filterAll: 'Todos',
    demo: 'Demo en vivo',
    code: 'Código',
    prevPage: 'Anterior',
    nextPage: 'Siguiente',
    page: 'Página',
    showing: 'Mostrando',
    of: 'de',
    projectsCount: 'proyectos',
    filterAria: 'Filtrar proyectos por tipo de solución',
  },
  en: {
    filterAll: 'All',
    demo: 'Live Demo',
    code: 'Code',
    prevPage: 'Previous',
    nextPage: 'Next',
    page: 'Page',
    showing: 'Showing',
    of: 'of',
    projectsCount: 'projects',
    filterAria: 'Filter projects by solution type',
  },
};

export const projects: Project[] = [
  {
    title: 'Git Command Web',
    desc_es: 'Guía interactiva y visual del modelo mental de Git. Incluye pipeline de transporte de cambios en 4 etapas, simulador de terminal en vivo, resolución visual de conflictos 3-way merge, simulador de Git Bisect, playground de rebase interactivo y generadores de comandos.',
    desc_en: 'Interactive, visual mental-model guide to Git. Features a 4-stage change lifecycle pipeline, live terminal simulator, 3-way merge conflict resolver, Git Bisect simulator, interactive rebase playground, and command builders.',
    tags: ['Astro', 'TypeScript', 'UI/UX'],
    status: 'terminado',
    category: 'web-apps',
    demo: 'https://hugoadama.github.io/Git_Command_Web/',
    repo: 'https://github.com/HugoAdama/Git_Command_Web',
    img: '/capturas/git-command-web.png',
  },
  {
    title: 'Once Upon a Timeline',
    desc_es: 'Archivo interactivo, musical y conmemorativo de TWICE. Explora la cronología discográfica completa, canciones oficiales, personalizador 3D de photocards con exportación en Canvas, simulador lumínico Candybong y soporte multi-idioma (ES/EN/KO/JA).',
    desc_en: 'Interactive digital archive and fan experience celebrating TWICE. Features an interactive discography timeline, audio player, 3D photocard customizer with Canvas export, virtual Candybong lightstick simulator, and multi-language support (ES/EN/KO/JA).',
    tags: ['Astro', 'TypeScript', 'CSS'],
    status: 'terminado',
    category: 'interactive',
    demo: 'https://hugoadama.github.io/Once_upon_a_Timeline/musica/',
    repo: 'https://github.com/HugoAdama/Once_upon_a_Timeline',
    img: '/capturas/once-upon-a-timeline.png',
  },
  {
    title: 'CSS Motion Lab',
    desc_es: 'Laboratorio interactivo y catálogo de 180 animaciones y patrones UI en CSS puro con código HTML y CSS coordinado. Incluye calibración de curvas Bézier en tiempo real, métricas de impacto en el pipeline de renderizado (GPU, Paint, Layout) y exportación a CodePen.',
    desc_en: 'Interactive laboratory and curated catalog of 180 production-ready pure CSS animations & UI patterns with coordinated HTML and CSS. Features real-time Bézier curve calibration, rendering pipeline cost metrics (GPU, Paint, Layout), and 1-click CodePen export.',
    tags: ['Astro', 'TypeScript', 'CSS'],
    status: 'terminado',
    category: 'interactive',
    demo: 'https://hugoadama.github.io/CSS_Motion_Lab/',
    repo: 'https://github.com/HugoAdama/CSS_Motion_Lab',
    img: '/capturas/css-motion-lab.png',
  },
  {
    title: 'Wedding Invitation',
    desc_es: 'Invitación de boda interactiva con temática celestial bajo las estrellas, construida con Astro 7, TypeScript y CSS moderno. Incluye cuenta regresiva en tiempo real, sintetizador ambiental con Web Audio API, efectos de partículas 2D en Canvas e integración de confirmación RSVP.',
    desc_en: 'Celestial-themed interactive wedding invitation web app built with Astro 7, TypeScript, and modern CSS. Features real-time countdown, Web Audio ambient synthesis, 2D canvas particle effects, and RSVP integration.',
    tags: ['Astro', 'TypeScript', 'Canvas'],
    status: 'terminado',
    category: 'interactive',
    demo: 'https://hugoadama.github.io/Wedding_Invitation/',
    repo: 'https://github.com/HugoAdama/Wedding_Invitation',
    img: '/capturas/wedding-invitation.png',
  },
  {
    title: 'Wedding Web',
    desc_es: 'Invitación de boda digital editorial construida con Astro 7, TypeScript y CSS moderno. Incluye embudo RSVP a WhatsApp sin backend, sintetizador ambiental con Web Audio API en tiempo real y selector interactivo de paletas en vivo.',
    desc_en: 'Editorial digital wedding invitation built with Astro 7, TypeScript & modern CSS. Features a zero-backend WhatsApp RSVP funnel, real-time Web Audio API ambient synth, and interactive live theme switcher.',
    tags: ['Astro', 'TypeScript', 'Web Audio'],
    status: 'terminado',
    category: 'landing-pages',
    demo: 'https://hugoadama.github.io/Wedding_Web/',
    repo: 'https://github.com/HugoAdama/Wedding_Web',
    img: '/capturas/wedding-web.png',
  },
  {
    title: 'Nova Smile Lima',
    desc_es: 'Landing page moderna para clínica dental boutique construida con Astro 7, TypeScript y CSS moderno. Incluye diagnóstico digital 3D, experiencia serena y diseño accesible de alta conversión totalmente responsive.',
    desc_en: 'Modern boutique dental clinic landing page built with Astro 7, TypeScript, and modern CSS. Features interactive 3D digital smile preview, accessible high-conversion appointment funnel, and full responsiveness.',
    tags: ['Astro', 'TypeScript', 'UI/UX'],
    status: 'terminado',
    category: 'landing-pages',
    demo: 'https://hugoadama.github.io/Nova_Smile_Lima/',
    repo: 'https://github.com/HugoAdama/Nova_Smile_Lima',
    img: '/capturas/nova-smile-lima.png',
  },
  {
    title: 'Lavanda',
    desc_es: 'Landing page moderna y ultrarrápida para LAVANDA, un servicio eco-friendly de lavandería y tintorería a domicilio bajo demanda. Construida con Astro, TypeScript y CSS moderno con cero JavaScript en el cliente.',
    desc_en: 'Modern, ultra-fast landing page for LAVANDA, an eco-friendly on-demand laundry and dry-cleaning delivery service. Built with Astro, TypeScript, and zero-JS modern CSS.',
    tags: ['Astro', 'TypeScript', 'UI/UX'],
    status: 'terminado',
    category: 'landing-pages',
    demo: 'https://hugoadama.github.io/Lavanda/',
    repo: 'https://github.com/HugoAdama/Lavanda',
    img: '/capturas/lavanda.png',
  },
  {
    title: 'Spartan Gym',
    desc_es: 'Landing page de alta conversión para centro fitness construida con Astro y TypeScript. Incluye embudo a WhatsApp sin fricción, modal accesible nativo (<dialog>), pase VIP digital y optimización Core Web Vitals.',
    desc_en: 'High-conversion fitness landing page built with Astro and TypeScript. Features a zero-friction WhatsApp conversion funnel, native accessible <dialog> modal, digital VIP pass, and Core Web Vitals optimization.',
    tags: ['Astro', 'TypeScript', 'UI/UX'],
    status: 'terminado',
    category: 'landing-pages',
    demo: 'https://hugoadama.github.io/Spartan_Gym/',
    repo: 'https://github.com/HugoAdama/Spartan_Gym',
    img: '/capturas/spartan-gym.png',
  },
  {
    title: 'BeatNest',
    desc_es: 'Reproductor de audio local y privado en el navegador. Incluye ecualizador de 5 bandas, visualizador en tiempo real con Canvas, crossfade y letras sincronizadas con cero uso de nube.',
    desc_en: 'Private in-browser local audio player with a 5-band EQ, real-time Canvas visualizer, crossfade, and synced lyrics. Zero cloud, 100% private.',
    tags: ['TypeScript', 'Web Audio', 'Canvas'],
    status: 'terminado',
    category: 'web-apps',
    demo: 'https://hugoadama.github.io/BeatNest/',
    repo: 'https://github.com/HugoAdama/BeatNest',
    img: '/capturas/beatnest.png',
  },
  {
    title: 'Nimbus',
    desc_es: 'Aplicación meteorológica de alta precisión construida con arquitectura limpia (Separation of Concerns), estado reactivo, búsqueda con debounce y gráfico interactivo de 24 horas en SVG.',
    desc_en: 'High-precision real-time weather web app built with clean architecture (SoC), reactive state management, debounced city search, and interactive 24-hour SVG temperature chart.',
    tags: ['JavaScript', 'APIs', 'SVG'],
    status: 'terminado',
    category: 'web-apps',
    demo: 'https://hugoadama.github.io/Nimbus/',
    repo: 'https://github.com/HugoAdama/Nimbus',
    img: '/capturas/nimbus.png',
  },
  {
    title: 'MiDespensa',
    desc_es: 'Recetario inteligente y Progressive Web App (PWA) offline con persistencia en IndexedDB, escalador dinámico de ingredientes por comensal y temporizador de cocción interactivo.',
    desc_en: 'Smart recipe manager and offline PWA with IndexedDB persistence, dynamic serving scaler, pantry ingredient matcher, and interactive cooking timer.',
    tags: ['JavaScript', 'PWA', 'IndexedDB'],
    status: 'terminado',
    category: 'web-apps',
    demo: 'https://hugoadama.github.io/MiDespensa/',
    repo: 'https://github.com/HugoAdama/MiDespensa',
    img: '/capturas/midespensa.png',
  },
  {
    title: 'Kanban Tableau',
    desc_es: 'Tablero Kanban enfocado en rendimiento y accesibilidad estricta (WCAG 2.1 AA). Soporta navegación integral por teclado, Drag & Drop nativo, pila Undo/Redo y persistencia local.',
    desc_en: 'High-performance Kanban board focused on strict accessibility (WCAG 2.1 AA) with full keyboard navigation, native Drag & Drop, Undo/Redo stack, and local persistence.',
    tags: ['JavaScript', 'Accesibilidad', 'Drag & Drop'],
    status: 'terminado',
    category: 'web-apps',
    demo: 'https://hugoadama.github.io/Kanban_Tableu/',
    repo: 'https://github.com/HugoAdama/Kanban_Tableu',
    img: '/capturas/kanban.png',
  },
];
