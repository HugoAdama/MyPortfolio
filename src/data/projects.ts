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
