import { useState } from 'react';
import { projectsConfig } from '../data/config';
import './Projects.css';

const ALL_FILTER = 'All';

function getAllTechs(projects) {
  const set = new Set();
  projects.forEach(p => p.tech.forEach(t => set.add(t)));
  return [ALL_FILTER, ...Array.from(set)];
}

function ProjectCard({ project, index }) {
  return (
    <div className="project-card card">
      {project.featured && (
        <span className="project-card__featured-badge">★ Featured</span>
      )}

      {/* Project image preview */}
      {project.image && (
        <div className="project-card__image-wrap">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="project-card__image"
          />
          <div className="project-card__image-overlay">
            <div className="project-card__image-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="project-card__overlay-btn">
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__overlay-btn project-card__overlay-btn--primary">
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__header">
          {!project.image && (
            <div className="project-card__icon">
              {['📁', '⚙️', '🔗', '🤖', '🚀', '🧠'][index % 6]}
            </div>
          )}
          <div className="project-card__links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link" aria-label="Live demo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL_FILTER);
  const techs = getAllTechs(projectsConfig);

  const filtered = filter === ALL_FILTER
    ? projectsConfig
    : projectsConfig.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">{"// my work"}</span>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Things I've built — from full-stack apps to AI/ML experiments.
          </p>
          <div className="gradient-line" />
        </div>

        <div className="projects__filters fade-in">
          {techs.map(tech => (
            <button
              key={tech}
              className={`projects__filter-btn ${filter === tech ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setFilter(tech === ALL_FILTER ? ALL_FILTER : filter === tech ? ALL_FILTER : tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="projects__empty">No projects match this filter.</p>
        )}
      </div>
    </section>
  );
}