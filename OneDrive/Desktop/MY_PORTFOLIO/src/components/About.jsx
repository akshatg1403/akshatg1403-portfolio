import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { siteConfig, aboutConfig, socialLinks, projectsConfig, experienceConfig } from '../data/config';
import './About.css';

const EASE = [0.22, 1, 0.36, 1];

const STATS = [
  { value: experienceConfig.length, suffix: '', label: 'Internships' },
  { value: aboutConfig.projectsCount ?? projectsConfig.length, suffix: '+', label: 'Projects' },
  { value: aboutConfig.skills.length, suffix: '+', label: 'Technologies' },
];

const INFO = [
  ['📍', siteConfig.location.split(',')[0]],
  ['🎓', 'B.Tech IT · RGIPT'],
  ['💼', 'SDE · Full-Stack · AI/ML'],
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, delay, ease: EASE },
});

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: v => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="about__stat-value">
      {display}
      <span className="about__stat-suffix">{suffix}</span>
    </span>
  );
}

// Profile card that tilts toward the pointer
function ProfileCard() {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const cfg = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(py, [0, 1], [10, -10]), cfg);
  const rotateY = useSpring(useTransform(px, [0, 1], [-10, 10]), cfg);

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div className="about__card-wrap" {...reveal(0)}>
      <motion.div
        className="about__card"
        style={{ rotateX, rotateY }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="about__card-shine" />

        <div className="about__avatar">
          <span className="about__avatar-initials">{siteConfig.avatarInitials}</span>
        </div>
        <h3 className="about__card-name">{siteConfig.name}</h3>
        <p className="about__card-role">{siteConfig.title}</p>

        <ul className="about__info">
          {INFO.map(([icon, text], i) => (
            <motion.li
              key={text}
              className="about__info-item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, ease: EASE }}
            >
              <span className="about__info-icon">{icon}</span>
              {text}
            </motion.li>
          ))}
        </ul>

        <div className="about__social">
          {socialLinks.github && <a href={socialLinks.github} target="_blank" rel="noreferrer" className="about__social-link">GitHub</a>}
          {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="about__social-link">LinkedIn</a>}
          {socialLinks.email && <a href={socialLinks.email} className="about__social-link">Email</a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

function SkillMarquee({ items, reverse }) {
  // Duplicated so the loop is seamless
  const loop = [...items, ...items];
  return (
    <div className="about__marquee">
      <div className={`about__marquee-track ${reverse ? 'about__marquee-track--reverse' : ''}`}>
        {loop.map((skill, i) => (
          <span key={i} className="about__skill" aria-hidden={i >= items.length}>
            <span className="about__skill-dot" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const half = Math.ceil(aboutConfig.skills.length / 2);

  return (
    <section id="about" className="section about">
      <div className="about__glow" aria-hidden="true" />

      <div className="container">
        <div className="about__inner">
          <ProfileCard />

          <div className="about__right">
            <motion.div {...reveal(0.05)}>
              <span className="section-label">{"// about me"}</span>
              <h2 className="section-title about__title">
                Who I <span className="highlight">Am</span>
              </h2>
            </motion.div>

            <div className="about__bio">
              {aboutConfig.bio.map((line, i) => (
                <motion.p
                  key={i}
                  className={`about__bio-line ${i === 0 ? 'about__bio-line--lead' : ''}`}
                  {...reveal(0.15 + i * 0.12)}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="about__stats">
              {STATS.map((s, i) => (
                <motion.div key={s.label} className="about__stat" {...reveal(0.3 + i * 0.1)}>
                  <Counter value={s.value} suffix={s.suffix} />
                  <span className="about__stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div className="about__skills" {...reveal(0.45)}>
              <span className="about__skills-title">Tech I work with</span>
              <SkillMarquee items={aboutConfig.skills.slice(0, half)} />
              <SkillMarquee items={aboutConfig.skills.slice(half)} reverse />
            </motion.div>

            <motion.a
              href={siteConfig.resumePath}
              className="btn btn-primary about__resume-btn"
              target="_blank"
              rel="noreferrer"
              {...reveal(0.55)}
            >
              <span>View Full Resume</span>
              <span className="about__resume-arrow">↗</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
