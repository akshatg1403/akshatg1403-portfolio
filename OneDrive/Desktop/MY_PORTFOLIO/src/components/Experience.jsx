import { educationConfig, experienceConfig } from '../data/config';
import './Experience.css';

function TimelineItem({ item, index, side }) {
  return (
    <div className={`timeline-item fade-in delay-${(index % 4) + 1}`}>
      <div className="timeline-item__dot">
        <span className="timeline-item__icon">{item.logo}</span>
      </div>
      <div className="timeline-item__card card">
        <div className="timeline-item__header">
          <div>
            <h3 className="timeline-item__title">
              {item.degree || item.role}
            </h3>
            <p className="timeline-item__org">
              {item.institution || item.company}
            </p>
          </div>
          <span className="timeline-item__duration">{item.duration}</span>
        </div>
        {item.location && (
          <p className="timeline-item__location">📍 {item.location}</p>
        )}
        <p className="timeline-item__description">{item.description}</p>
        {item.type && (
          <span className={`timeline-item__type timeline-item__type--${item.type}`}>
            {item.type}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">{"// my journey"}</span>
          <h2 className="section-title">
            Education & <span className="highlight">Experience</span>
          </h2>
          <p className="section-subtitle">
            My academic background and professional journey so far.
          </p>
          <div className="gradient-line" />
        </div>

        <div className="experience__columns">
          {/* Education column */}
          <div className="experience__column">
            <h3 className="experience__column-title">
              <span className="experience__column-icon">🎓</span>
              Education
            </h3>
            <div className="timeline">
              {educationConfig.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} side="left" />
              ))}
            </div>
          </div>

          {/* Experience column */}
          <div className="experience__column">
            <h3 className="experience__column-title">
              <span className="experience__column-icon">💼</span>
              Experience
            </h3>
            <div className="timeline">
              {experienceConfig.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} side="right" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
