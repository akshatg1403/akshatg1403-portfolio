import { useState, useEffect } from 'react';
import { siteConfig, socialLinks } from '../data/config';
import './Hero.css';

const TYPED_STRINGS = [
  'Software Developer',
  'AI & ML Enthusiast',
  'Full-Stack Engineer',
  'Open Source Contributor',
  'Problem Solver',
];

function useTypewriter(strings, speed = 80, pause = 2000) {
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'
  const [charIndex, setCharIndex] = useState(0);
  const [stringIndex, setStringIndex] = useState(0);

  useEffect(() => {
    let delay;
    const current = strings[stringIndex % strings.length];

    if (phase === 'typing') {
      if (charIndex < current.length) {
        delay = setTimeout(() => setCharIndex(i => i + 1), speed);
      } else {
        delay = setTimeout(() => setPhase('pausing'), pause);
      }
    } else if (phase === 'pausing') {
      delay = setTimeout(() => setPhase('deleting'), 100);
    } else if (phase === 'deleting') {
      if (charIndex > 0) {
        delay = setTimeout(() => setCharIndex(i => i - 1), speed / 2);
      } else {
        delay = setTimeout(() => {
          setStringIndex(i => (i + 1) % strings.length);
          setPhase('typing');
        }, 200);
      }
    }

    return () => clearTimeout(delay);
  }, [phase, charIndex, stringIndex, strings, speed, pause]);

  return strings[stringIndex % strings.length].slice(0, charIndex);
}

// Particle dot component
function ParticleDot({ style }) {
  return <div className="hero__particle" style={style} />;
}

export default function Hero() {
  const typedText = useTypewriter(TYPED_STRINGS);

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${Math.random() * 4 + 4}s`,
      opacity: Math.random() * 0.5 + 0.1,
    },
  }));

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Background grid */}
      <div className="hero__grid-bg" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      {/* Particles */}
      <div className="hero__particles" aria-hidden="true">
        {particles.map(p => <ParticleDot key={p.id} style={p.style} />)}
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <div className="hero__greeting fade-in visible">
            <span className="hero__greeting-emoji">👋</span>
            <span>Hello, World! I'm</span>
          </div>

          <h1 className="hero__name fade-in visible delay-1">
            {siteConfig.name}
          </h1>

          <div className="hero__typewriter fade-in visible delay-2">
            <span className="hero__typewriter-prefix">$ </span>
            <span className="hero__typewriter-text">{typedText}</span>
            <span className="hero__cursor" aria-hidden="true">_</span>
          </div>

          <p className="hero__tagline fade-in visible delay-3">
            {siteConfig.tagline}
          </p>

          <div className="hero__actions fade-in visible delay-4">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>View My Work</span>
              <span>→</span>
            </button>
            <a
              href={siteConfig.resumePath}
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              <span>↓</span>
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social links */}
          <div className="hero__social fade-in visible delay-5">
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="hero__social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            )}
            {socialLinks.email && (
              <a href={socialLinks.email} className="hero__social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Right side - Avatar */}
        <div className="hero__avatar-wrapper fade-in-right visible delay-2">
          <div className="hero__avatar">
            <div className="hero__avatar-ring hero__avatar-ring--1" />
            <div className="hero__avatar-ring hero__avatar-ring--2" />
            <div className="hero__avatar-inner">
              <span className="hero__avatar-initials">{siteConfig.avatarInitials}</span>
            </div>
          </div>
          {/* Floating badges */}
          <div className="hero__badge hero__badge--react">⚛️ React</div>
          <div className="hero__badge hero__badge--ai">🤖 AI/ML</div>
          <div className="hero__badge hero__badge--py">🐍 Python</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll-indicator" onClick={scrollToAbout} aria-label="Scroll down">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll</span>
      </button>
    </section>
  );
}
