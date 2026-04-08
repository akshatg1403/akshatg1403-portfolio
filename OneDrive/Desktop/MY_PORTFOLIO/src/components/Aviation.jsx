import { passionConfig } from '../data/config';
import './Aviation.css';

export default function Aviation() {
  return (
    <section id="aviation" className="section aviation">
      {/* Background grid decoration */}
      <div className="aviation__runway" aria-hidden="true">
        <div className="aviation__runway-line" />
        <div className="aviation__runway-line" />
        <div className="aviation__runway-line" />
      </div>

      <div className="container">
        <div className="aviation__inner">
          {/* Left: text */}
          <div className="aviation__text fade-in-left">
            <span className="section-label">{"// what drives me"}</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              <span>{passionConfig.title.split('&')[0]}</span>
              <span className="highlight">&amp;{passionConfig.title.split('&')[1]}</span>
            </h2>
            <p className="aviation__subtitle">{passionConfig.subtitle}</p>
            <p className="aviation__description">{passionConfig.description}</p>

            <div className="aviation__plane-deco" aria-hidden="true">
              <span style={{ fontSize: '2rem' }}>💡</span>
              <span className="aviation__flight-path" />
            </div>
          </div>

          {/* Right: interest cards */}
          <div className="aviation__cards fade-in-right">
            {passionConfig.interests.map((interest, i) => (
              <div key={i} className={`aviation__card card delay-${i + 1}`}>
                <span className="aviation__card-icon">{interest.icon}</span>
                <div>
                  <h3 className="aviation__card-title">{interest.title}</h3>
                  <p className="aviation__card-description">{interest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
