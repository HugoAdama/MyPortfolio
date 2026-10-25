import { useState, useMemo, useEffect } from 'react';
import type { Project, ProjectCategory } from '../data/projects';
import { statusLabels, uiLabels, projectCategories } from '../data/projects';
import { getAssetPath } from '../utils/paths';

interface ProjectsFilterProps {
  projects: Project[];
}

export default function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [activeCategory, setActiveCategory] = useState<'ALL' | ProjectCategory>('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const ITEMS_PER_PAGE = 6;

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

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: projects.length,
    };
    for (const p of projects) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;

  // Keep currentPage within bounds when filtered results change
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length);
  const paginatedProjects = useMemo(() => {
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, startIndex, endIndex]);

  const handleCategorySelect = (categoryId: 'ALL' | ProjectCategory) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);

    const projectsSection = document.getElementById('proyectos');
    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      if (rect.top < 60) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const labels = uiLabels[lang];

  return (
    <>
      <div
        className="filters"
        role="group"
        aria-label={labels.filterAria}
      >
        {projectCategories.map((cat) => {
          const isSelected = cat.id === activeCategory;
          const label = lang === 'en' ? cat.label_en : cat.label_es;
          const count = categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${isSelected ? 'active' : ''}`}
              aria-pressed={isSelected}
              onClick={() => handleCategorySelect(cat.id)}
            >
              <span>{label}</span>
              <span className="filter-count" aria-hidden="true">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid">
        {paginatedProjects.map((p) => {
          const description = lang === 'en' ? p.desc_en : p.desc_es;
          const statusText = statusLabels[lang][p.status];

          return (
            <article className="card" key={p.title}>
              <div className="card-thumb">
                {p.img && !failedImages[p.title] ? (
                  <img
                    className="shot"
                    src={getAssetPath(p.img)}
                    alt={`Captura de ${p.title}`}
                    loading="lazy"
                    onError={() => {
                      setFailedImages((prev) => ({ ...prev, [p.title]: true }));
                    }}
                  />
                ) : (
                  <div className="shot ph" aria-hidden="true">
                    <span>{lang === 'es' ? `Captura de ${p.title}` : `${p.title} preview`}</span>
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

      {totalPages > 1 && (
        <nav
          className="pagination"
          aria-label={lang === 'es' ? 'Paginación de proyectos' : 'Projects pagination'}
        >
          <div className="pagination-info">
            <span>
              {labels.showing}{' '}
              <strong className="pagination-num">{filteredProjects.length > 0 ? startIndex + 1 : 0}</strong>
              {' - '}
              <strong className="pagination-num">{endIndex}</strong> {labels.of}{' '}
              <strong className="pagination-num">{filteredProjects.length}</strong> {labels.projectsCount}
            </span>
          </div>

          <div className="pagination-controls">
            <button
              type="button"
              className="pagination-btn pagination-nav-btn"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              aria-label={labels.prevPage}
            >
              <svg
                className="pagination-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <span>{labels.prevPage}</span>
            </button>

            <div className="pagination-pages" role="group" aria-label={lang === 'es' ? 'Páginas' : 'Pages'}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const isCurrent = page === currentPage;
                return (
                  <button
                    key={page}
                    type="button"
                    className={`pagination-btn pagination-page-btn ${isCurrent ? 'active' : ''}`}
                    aria-current={isCurrent ? 'page' : undefined}
                    aria-label={`${labels.page} ${page}`}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="pagination-btn pagination-nav-btn"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              aria-label={labels.nextPage}
            >
              <span>{labels.nextPage}</span>
              <svg
                className="pagination-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
