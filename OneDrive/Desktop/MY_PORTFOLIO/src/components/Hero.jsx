import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { siteConfig, socialLinks } from '../data/config';
import './Hero.css';

const ROLES = ['scalable web apps', 'AI-powered tools', 'full-stack products', 'things people use'];

// Chips orbiting the monogram: [label, ring, angle]
const ORBIT_ITEMS = [
  ['React', 1, 0], ['Python', 1, 120], ['Node.js', 1, 240],
  ['AI / ML', 2, 60], ['SQL', 2, 180], ['Docker', 2, 300],
];

const EASE = [0.22, 1, 0.36, 1];

function useRotatingIndex(length, interval = 2600) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval]);
  return index;
}

// Name reveals letter-by-letter from behind a mask
function RevealName({ text, delay = 0.2 }) {
  let charCount = 0;
  return (
    <h1 className="hero__name" aria-label={text}>
      {text.split(' ').map((word, wi) => (
        <span key={wi} className="hero__name-word" aria-hidden="true">
          {word.split('').map(ch => {
            const i = charCount++;
            return (
              <span key={i} className="hero__name-mask">
                <motion.span
                  className="hero__name-char"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: delay + i * 0.04, ease: EASE }}
                >
                  {ch}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

// Element that leans toward the pointer while hovered
function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 250, damping: 15, mass: 0.3 });
  const y = useSpring(0, { stiffness: 250, damping: 15, mass: 0.3 });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div ref={ref} className="hero__magnetic" style={{ x, y }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  );
}

const SOCIAL_ICONS = {
  github: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  email: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
};

const fadeUp = delay => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function Hero() {
  const roleIndex = useRotatingIndex(ROLES.length);

  // Pointer position relative to the section centre, -0.5..0.5
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const orb1X = useTransform(smx, v => v * 80);
  const orb1Y = useTransform(smy, v => v * 80);
  const orb2X = useTransform(smx, v => v * -60);
  const orb2Y = useTransform(smy, v => v * -60);
  const visualX = useTransform(smx, v => v * -30);
  const visualY = useTransform(smy, v => v * -30);
  const spotX = useTransform(smx, v => `${(v + 0.5) * 100}%`);
  const spotY = useTransform(smy, v => `${(v + 0.5) * 100}%`);

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero" onMouseMove={onMove}>
      <div className="hero__grid-bg" aria-hidden="true" />
      <motion.div className="hero__spotlight" style={{ '--spot-x': spotX, '--spot-y': spotY }} aria-hidden="true" />
      <motion.div className="hero__orb hero__orb--1" style={{ x: orb1X, y: orb1Y }} aria-hidden="true" />
      <motion.div className="hero__orb hero__orb--2" style={{ x: orb2X, y: orb2Y }} aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__text">
          <motion.div className="hero__status" {...fadeUp(0.05)}>
            <span className="hero__status-dot" />
            Available for opportunities
          </motion.div>

          <RevealName text={siteConfig.name} />

          <motion.p className="hero__role" {...fadeUp(0.75)}>
            <span className="hero__role-prefix">I build</span>
            <span className="hero__role-slot">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="hero__role-word"
                  initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: '-100%', opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.p>

          <motion.p className="hero__tagline" {...fadeUp(0.9)}>
            {siteConfig.tagline}
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(1.05)}>
            <Magnetic>
              <button className="btn btn-primary hero__cta" onClick={() => scrollTo('projects')}>
                <span>View My Work</span>
                <span className="hero__cta-arrow">→</span>
              </button>
            </Magnetic>
            <Magnetic>
              <a href={siteConfig.resumePath} className="btn btn-outline" target="_blank" rel="noreferrer">
                <span>Resume</span>
                <span>↗</span>
              </a>
            </Magnetic>
          </motion.div>

          <motion.div className="hero__social" {...fadeUp(1.2)}>
            {Object.entries(SOCIAL_ICONS).map(([key, path]) =>
              socialLinks[key] ? (
                <a
                  key={key}
                  href={socialLinks[key]}
                  target={key === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="hero__social-link"
                  aria-label={key}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={path} /></svg>
                </a>
              ) : null
            )}
          </motion.div>
        </div>

        {/* Orbit visual */}
        <motion.div
          className="hero__visual"
          style={{ x: visualX, y: visualY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
          aria-hidden="true"
        >
          <div className="hero__orbit hero__orbit--1">
            {ORBIT_ITEMS.filter(([, ring]) => ring === 1).map(([label, , angle]) => (
              <div key={label} className="hero__orbit-item" style={{ '--angle': `${angle}deg` }}>
                <span className="hero__orbit-chip">{label}</span>
              </div>
            ))}
          </div>
          <div className="hero__orbit hero__orbit--2">
            {ORBIT_ITEMS.filter(([, ring]) => ring === 2).map(([label, , angle]) => (
              <div key={label} className="hero__orbit-item" style={{ '--angle': `${angle}deg` }}>
                <span className="hero__orbit-chip">{label}</span>
              </div>
            ))}
          </div>

          <div className="hero__core">
            <div className="hero__core-ring" />
            <div className="hero__core-inner">
              <span className="hero__core-initials">{siteConfig.avatarInitials}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll-indicator"
        onClick={() => scrollTo('about')}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="hero__scroll-line" />
        <span>Scroll</span>
      </motion.button>
    </section>
  );
}
