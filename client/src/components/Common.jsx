import { Link } from 'react-router-dom';
import { testimonials } from '../data.js';

export function SectionHeader({ eyebrow, title, text, center = true }) {
  return (
    <div className={`section-header ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Tell us about your idea and get a free consultation and estimate within 24 hours.</p>
          </div>
          <Link to="/contact" className="btn btn-light">Let's Talk →</Link>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section alt">
      <div className="container">
        <SectionHeader eyebrow="Testimonials" title="What our clients say" />
        <div className="grid grid-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card testimonial">
              <div className="stars">★★★★★</div>
              <blockquote>“{t.text}”</blockquote>
              <figcaption>
                <span className="avatar">{t.name[0]}</span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
