import { siteConfig, aboutConfig, socialLinks } from '../data/config';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__inner">
          {/* Left: Avatar & quick stats */}
          <div className="about__left fade-in-left">
            <div className="about__avatar-card">
              <div className="about__avatar">
                <span className="about__avatar-initials">{siteConfig.avatarInitials}</span>
                <div className="about__avatar-status">
                  <span className="about__status-dot" />
                  <span>Available for opportunities</span>
                </div>
              </div>
              <div className="about__quick-info">
                <div className="about__info-item">
                  <span className="about__info-icon">📍</span>
                  <span>{siteConfig.location}</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-icon">🎓</span>
                  <span>B.Tech IT @ RGIPT</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-icon">💻</span>
                  <span>Software Developer & AI Enthusiast</span>
                </div>
              </div>
              <div className="about__social">
                {socialLinks.github && (
                  <a href={socialLinks.github} target="_blank" rel="noreferrer" className="about__social-link">
                    GitHub
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="about__social-link">
                    LinkedIn
                  </a>
                )}
                {socialLinks.email && (
                  <a href={socialLinks.email} className="about__social-link">
                    Email
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Bio & skills */}
          <div className="about__right fade-in-right">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '32px' }}>
              <span className="section-label">{"// about me"}</span>
              <h2 className="section-title">
                Who I <span className="highlight">Am</span>
              </h2>
            </div>

            <div className="about__bio">
              {aboutConfig.bio.map((para, i) => (
                <p key={i} className="about__bio-para">{para}</p>
              ))}
            </div>

            <div className="about__skills">
              <h3 className="about__skills-title">Technologies I work with</h3>
              <div className="about__skills-grid">
                {aboutConfig.skills.map(skill => (
                  <span key={skill} className="about__skill-tag">
                    <span className="about__skill-dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={siteConfig.resumePath}
              className="btn btn-primary about__resume-btn"
              target="_blank"
              rel="noreferrer"
            >
              <span>↓</span>
              <span>View Full Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
