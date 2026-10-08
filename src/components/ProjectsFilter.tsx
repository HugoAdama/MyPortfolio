import { useState, useMemo, useEffect } from 'react';
import type { Project } from '../data/projects';
import { statusLabels, uiLabels } from '../data/projects';

interface ProjectsFilterProps {
  projects: Project[];
}

export default function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [activeFilter, setActiveFilter] = useState('ALL');

  useEffect(() => {
    // Read initial language from data-lang or default to 'es'
    const docLang = (document.documentElement.getAttribute('data-lang') as 'es' | 'en') || 'es';
    setLang(docLang);

    // Listen to custom event dispatched by language toggle in Header
    const handleLangChange = (e: CustomEvent<{ lang: 'es' | 'en' }>) => {
      setLang(e.detail.lang);
    };

    window.addEventListener('lang-change', handleLangChange as EventListener);
    return () => {
      window.removeEventListener('lang-change', handleLangChange as EventListener);
    };
  }, []);

  const allTags = useMemo(() => {
    return Array.from(new Set(projects.flatMap((p) => p.tags)));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return projects;
    return projects.filter((p) => p.tags.includes(activeFilter));
  }, [projects, activeFilter]);

  const labels = uiLabels[lang];

  return (
    <>
      <div
        className="filters"
        role="group"
        aria-label={lang === 'es' ? 'Filtrar proyectos por tecnología' : 'Filter projects by technology'}
      >
        <button
          type="button"
          aria-pressed={activeFilter === 'ALL'}
          onClick={() => setActiveFilter('ALL')}
        >
          {labels.filterAll}
        </button>
        {allTags.map((tag) => {
          const isSelected = tag === activeFilter;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="grid">
        {filteredProjects.map((p) => {
          const description = lang === 'en' ? p.desc_en : p.desc_es;
          const statusText = statusLabels[lang][p.status];

          return (
            <article className="card" key={p.title}>
              <div className="card-thumb">
                {p.img ? (
                  <img
                    className="shot"
                    src={p.img}
                    alt={`Captura de ${p.title}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="shot ph" aria-hidden="true">
                    <span>{lang === 'es' ? 'Captura de proyecto' : 'Project preview'}</span>
                  </div>
                )}
              </div>

              <div className="body">
                <div className="card-top">
                  <span className={`badge ${p.status}`}>
                    {statusText}
                  </span>
                </div>

                <h3>{p.title}</h3>
                <p>{description}</p>

                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="links">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-btn demo-btn"
                    >
                      <svg
                        className="link-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>{labels.demo}</span>
                    </a>
                  )}

                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-btn code-btn"
                    >
                      <svg
                        className="link-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      <span>{labels.code}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
