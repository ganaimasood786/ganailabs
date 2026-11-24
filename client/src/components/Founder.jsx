import { Link } from 'react-router-dom';
import { FOUNDER } from '../data.js';

function Photo({ size = 'lg' }) {
  return (
    <div className={`founder-photo ${size}`}>
      <span className="founder-ring" aria-hidden="true" />
      <img src={FOUNDER.photo} alt={`${FOUNDER.name}, ${FOUNDER.role} of GanaiLabs`} width="320" height="320" loading="lazy" />
    </div>
  );
}

function Socials() {
  return (
    <div className="founder-socials">
      {FOUNDER.links.map((l) => (
        <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" aria-label={l.label} title={l.label}>{l.short}</a>
      ))}
    </div>
  );
}

/** Full profile for the About page */
export function FounderProfile() {
  return (
    <section className="section founder" id="founder">
      <div className="container">
        <div className="section-header center reveal">
          <span className="eyebrow">Leadership</span>
          <h2>Meet our Founder</h2>
        </div>

        <div className="founder-main reveal">
          <div className="founder-left">
            <Photo />
            <h3>{FOUNDER.name}</h3>
            <p className="founder-role">{FOUNDER.role}</p>
            <Socials />
          </div>

          <div className="founder-right">
            <blockquote className="founder-quote">“{FOUNDER.quote}”</blockquote>
            {FOUNDER.bio.map((p) => <p key={p.slice(0, 20)} className="lead">{p}</p>)}

            <div className="founder-highlights">
              {FOUNDER.highlights.map((h) => (
                <div key={h.label}><strong>{h.value}</strong><span>{h.label}</span></div>
              ))}
            </div>

            <div className="founder-skills">
              {FOUNDER.skills.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>

        <div className="founder-cols">
          <div className="card reveal">
            <h4>💼 Experience</h4>
            <ul className="timeline">
              {FOUNDER.experience.map((e) => (
                <li key={e.title}><small>{e.period}</small><strong>{e.title}</strong><span>{e.org}</span></li>
              ))}
            </ul>
          </div>
          <div className="card reveal" style={{ transitionDelay: '80ms' }}>
            <h4>🎓 Education</h4>
            <ul className="timeline">
              {FOUNDER.education.map((e) => (
                <li key={e.title}><small>{e.period}</small><strong>{e.title}</strong><span>{e.org}</span></li>
              ))}
            </ul>
          </div>
          <div className="card reveal" style={{ transitionDelay: '160ms' }}>
            <h4>🚀 Major projects</h4>
            <ul className="timeline">
              {FOUNDER.projects.map((p) => (
                <li key={p.name}><strong>{p.name}</strong><span>{p.text}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Short intro for the Home page */
export function FounderTeaser() {
  return (
    <section className="section founder-teaser">
      <div className="container">
        <div className="teaser-card reveal">
          <Photo size="md" />
          <div>
            <span className="eyebrow">A note from our founder</span>
            <blockquote>“{FOUNDER.quote}”</blockquote>
            <p className="teaser-name"><strong>{FOUNDER.name}</strong> · {FOUNDER.role}</p>
            <Link to="/about#founder" className="btn btn-outline">Meet the Founder →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
