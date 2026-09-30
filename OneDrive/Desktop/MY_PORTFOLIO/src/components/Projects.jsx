import { useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { projectsConfig } from '../data/config';
import './Projects.css';

const ALL_FILTER = 'All';
const FEATURED_FILTER = 'Featured';

function getFilters(projects) {
  const counts = { [ALL_FILTER]: projects.length };
  counts[FEATURED_FILTER] = projects.filter(p => p.featured).length;
  projects.forEach(p => {
    if (p.category) counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return Object.entries(counts).filter(([, n]) => n > 0);
}

function matchesFilter(project, filter) {
  if (filter === ALL_FILTER) return true;
  if (filter === FEATURED_FILTER) return project.featured;
  return project.category === filter;
}

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// Shown when a project has no screenshot: animated grid + monogram
function ProjectPlaceholder({ title, index }) {
  const initials = title
    .split(/[\s—-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');

  return (
    <div className={`project-placeholder project-placeholder--${index % 3}`}>
      <div className="project-placeholder__grid" />
      <div className="project-placeholder__orb project-placeholder__orb--a" />
      <div className="project-placeholder__orb project-placeholder__orb--b" />
      <span className="project-placeholder__initials">{initials}</span>
      <span className="project-placeholder__code">{'</>'}</span>
    </div>
  );
}

// Media links to the live demo (or repo); the custom cursor shows "View" over it
function MediaWrapper({ href, title, children }) {
  if (!href) return <div className="project-card__media">{children}</div>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="project-card__media"
      data-cursor="View"
      aria-label={`Open ${title}`}
    >
      {children}
    </a>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: i => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.25 } },
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  // Pointer position within the card, 0..1
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springCfg = { stiffness: 180, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), springCfg);
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), springCfg);
  const glowX = useTransform(px, v => `${v * 100}%`);
  const glowY = useTransform(py, v => `${v * 100}%`);

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      className="project-card"
    >
      <motion.div
        ref={ref}
        className="project-card__inner"
        onMouseMove={reduceMotion ? undefined : handleMove}
        onMouseLeave={handleLeave}
        style={reduceMotion ? undefined : { rotateX, rotateY, '--glow-x': glowX, '--glow-y': glowY }}
      >
        <div className="project-card__glow" aria-hidden="true" />

        <MediaWrapper href={project.demo || project.github} title={project.title}>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-card__image"
              loading="lazy"
            />
          ) : (
            <ProjectPlaceholder title={project.title} index={index} />
          )}
          <div className="project-card__media-fade" />
          {project.featured && <span className="project-card__badge">★ Featured</span>}
          <span className="project-card__number">{number}</span>
        </MediaWrapper>

        <div className="project-card__body">
          <span className="project-card__category">{project.category}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>

          <ul className="project-card__tech">
            {project.tech.map((t, i) => (
              <motion.li
                key={t}
                className="tech-tag"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.04 }}
              >
                {t}
              </motion.li>
            ))}
          </ul>

          <div className="project-card__actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="project-card__btn">
                <GithubIcon /> Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__btn project-card__btn--primary">
                Live Demo <span className="project-card__btn-arrow"><ArrowIcon /></span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL_FILTER);
  const filters = useMemo(() => getFilters(projectsConfig), []);
  const filtered = projectsConfig.filter(p => matchesFilter(p, filter));

  return (
    <section id="projects" className="section projects">
      <div className="projects__bg" aria-hidden="true">
        <div className="projects__blob projects__blob--1" />
        <div className="projects__blob projects__blob--2" />
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-label">{"// my work"}</span>
          <h2 className="section-title">
            Featured <span className="highlight projects__title-shine">Projects</span>
          </h2>
          <p className="section-subtitle">
            Things I've built — from full-stack apps to AI/ML experiments.
          </p>
          <div className="gradient-line" />
        </motion.div>

        <motion.div
          className="projects__filters"
          role="tablist"
          aria-label="Filter projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {filters.map(([name, count]) => {
            const active = filter === name;
            return (
              <button
                key={name}
                role="tab"
                aria-selected={active}
                className={`projects__filter-btn ${active ? 'projects__filter-btn--active' : ''}`}
                onClick={() => setFilter(name)}
              >
                {active && (
                  <motion.span
                    layoutId="projects-filter-pill"
                    className="projects__filter-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="projects__filter-label">{name}</span>
                <span className="projects__filter-count">{count}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="projects__empty">No projects match this filter.</p>
        )}
      </div>
    </section>
  );
}
