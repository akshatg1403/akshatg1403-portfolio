import { achievementsConfig } from '../data/config';
import './Achievements.css';

function AchievementCard({ item, index }) {
  return (
    <div className={`achievement-card card fade-in delay-${(index % 3) + 1}`}>
      <div className="achievement-card__icon-wrap">
        <span className="achievement-card__icon">{item.icon}</span>
      </div>
      <div className="achievement-card__content">
        <div className="achievement-card__header">
          <h3 className="achievement-card__title">{item.title}</h3>
          <span className="achievement-card__year">{item.year}</span>
        </div>
        <p className="achievement-card__description">{item.description}</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">{"// recognition"}</span>
          <h2 className="section-title">
            Achievements & <span className="highlight">Awards</span>
          </h2>
          <p className="section-subtitle">
            Milestones, recognitions, and certifications along the way.
          </p>
          <div className="gradient-line" />
        </div>

        <div className="achievements__grid">
          {achievementsConfig.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
