export type ProjectStatus = 'terminado' | 'en-progreso' | 'planeado';

export interface Project {
  title: string;
  desc_es: string;
  desc_en: string;
  tags: string[];
  status: ProjectStatus;
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
  },
  en: {
    filterAll: 'All',
    demo: 'Live Demo',
    code: 'Code',
  },
};

export const projects: Project[] = [
  {
    title: 'Lavanda',
    desc_es: 'Landing page moderna y ultrarrápida para LAVANDA, un servicio eco-friendly de lavandería y tintorería a domicilio bajo demanda. Construida con Astro, TypeScript y CSS moderno con cero JavaScript en el cliente.',
    desc_en: 'Modern, ultra-fast landing page for LAVANDA, an eco-friendly on-demand laundry and dry-cleaning delivery service. Built with Astro, TypeScript, and zero-JS modern CSS.',
    tags: ['Astro', 'TypeScript', 'UI/UX'],
    status: 'terminado',
    demo: 'https://hugoadama.github.io/Lavanda/',
    repo: 'https://github.com/HugoAdama/Lavanda',
    img: '/capturas/lavanda.png',
  },
  {
    title: 'Spartan Gym',
    desc_es: 'Landing page de alta conversión para centro fitness construida con Astro y TypeScript. Incluye embudo a WhatsApp sin fricción, modal nativo <dialog>, pase VIP digital y optimización Core Web Vitals.',
    desc_en: 'High-conversion fitness landing page built with Astro and TypeScript. Features a zero-friction WhatsApp conversion funnel, native <dialog> modal, digital VIP pass, and Core Web Vitals optimization.',
    tags: ['Astro', 'TypeScript', 'UI/UX'],
    status: 'terminado',
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
    demo: 'https://hugoadama.github.io/MiDespensa/',
    repo: 'https://github.com/HugoAdama/MiDespensa',
    img: '/capturas/midespensa.png',
  },
  {
    title: 'Kanban_Tableu',
    desc_es: 'Tablero Kanban enfocado en rendimiento y accesibilidad estricta (WCAG 2.1 AA). Soporta navegación integral por teclado, Drag & Drop nativo, pila Undo/Redo y persistencia local.',
    desc_en: 'High-performance Kanban board focused on strict accessibility (WCAG 2.1 AA) with full keyboard navigation, native Drag & Drop, Undo/Redo stack, and local persistence.',
    tags: ['JavaScript', 'Accesibilidad', 'Drag & Drop'],
    status: 'terminado',
    demo: 'https://hugoadama.github.io/Kanban_Tableu/',
    repo: 'https://github.com/HugoAdama/Kanban_Tableu',
    img: '/capturas/kanban.png',
  },
];
