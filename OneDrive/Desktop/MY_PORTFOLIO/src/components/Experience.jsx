import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { educationConfig, experienceConfig } from '../data/config';
import './Experience.css';

const EASE = [0.22, 1, 0.36, 1];

const passingYear = duration => duration.split(/[–-]/).pop().trim();

/* ---------------- Education journey ---------------- */

function SchoolCard({ item }) {
  return (
    <div className="journey-card">
      <div className="journey-card__mono">{item.short}</div>
      <span className="journey-card__level">{item.level}</span>
      <h4 className="journey-card__name">{item.institution}</h4>
      <div className="journey-card__meta">
        {item.board && <span className="journey-card__chip">{item.board}</span>}
        <span className="journey-card__years">{item.duration}</span>
      </div>
    </div>
  );
}

function FeaturedEduCard({ item }) {
  return (
    <div className="journey-card journey-card--featured">
      <div className="journey-card__photo">
        <img src={item.image} alt={`${item.short} campus`} loading="lazy" />
        <div className="journey-card__photo-fade" />
        {item.badge && (
          <span className="journey-card__badge">
            <span className="journey-card__badge-star">★</span> {item.badge}
          </span>
        )}
      </div>
      <div className="journey-card__featured-body">
        <div className="journey-card__logo">
          <img src={item.logo} alt={`${item.short} logo`} />
        </div>
        <div>
          <span className="journey-card__level">{item.level}</span>
          <h4 className="journey-card__name">{item.institution}</h4>
          <span className="journey-card__years">{item.duration}</span>
        </div>
      </div>
    </div>
  );
}

function EducationJourney() {
  return (
    <div className="journey">
      <motion.div
        className="journey__line"
        initial={{ scaleX: 0, scaleY: 0 }}
        whileInView={{ scaleX: 1, scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: EASE }}
        aria-hidden="true"
      />

      {educationConfig.map((item, i) => (
        <motion.div
          key={item.id}
          className={`journey__stop ${item.featured ? 'journey__stop--featured' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.25 + i * 0.35, ease: EASE }}
        >
          <div className="journey__node">
            <motion.span
              className="journey__dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.35 + i * 0.35 }}
            />
            <span className="journey__year">{passingYear(item.duration)}</span>
          </div>
          {item.featured ? <FeaturedEduCard item={item} /> : <SchoolCard item={item} />}
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------- Experience timeline ---------------- */

function ExperienceCard({ item, index }) {
  return (
    <motion.article
      className="exp-item"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
    >
      <motion.div
        className="exp-item__node"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.2 }}
      />

      <div className="exp-card">
        <div className="exp-card__head">
          <div className="exp-card__logo">
            <img src={item.logo} alt={`${item.company} logo`} />
          </div>
          <div className="exp-card__titles">
            <h4 className="exp-card__role">{item.role}</h4>
            <p className="exp-card__company">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">{item.company} ↗</a>
              ) : item.company}
            </p>
          </div>
          <div className="exp-card__when">
            <span className="exp-card__duration">{item.duration}</span>
            {item.type && <span className="exp-card__type">{item.type}</span>}
          </div>
        </div>

        <ul className="exp-card__points">
          {item.points.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.1, ease: EASE }}
            >
              {point}
            </motion.li>
          ))}
        </ul>

        {item.tech && (
          <div className="exp-card__tech">
            {item.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function ExperienceTimeline() {
  const ref = useRef(null);
  // Line fills as the timeline scrolls through the viewport
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <div className="exp-timeline" ref={ref}>
      <div className="exp-timeline__track" aria-hidden="true">
        <motion.div className="exp-timeline__fill" style={{ scaleY: progress }} />
      </div>
      {experienceConfig.map((item, i) => (
        <ExperienceCard key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}

/* ---------------- Section ---------------- */

function SubHeading({ icon, title, caption }) {
  return (
    <motion.div
      className="journey-subhead"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <span className="journey-subhead__icon">{icon}</span>
      <h3 className="journey-subhead__title">{title}</h3>
      <span className="journey-subhead__caption">{caption}</span>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="section-label">{"// my journey"}</span>
          <h2 className="section-title">
            The Journey <span className="highlight">So Far</span>
          </h2>
          <div className="gradient-line" />
        </motion.div>

        <SubHeading icon="🎓" title="Education" caption="school → university" />
        <EducationJourney />

        <SubHeading icon="💼" title="Experience" caption="where I've worked" />
        <ExperienceTimeline />
      </div>
    </section>
  );
}
