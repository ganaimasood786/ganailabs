import { useState } from 'react';
import { PageHero, CTA, Testimonials } from '../components/Common.jsx';
import { projects } from '../data.js';

export default function Portfolio() {
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work we're proud of"
        text="A glimpse of the products we've designed and engineered for our clients."
      />
      <section className="section">
        <div className="container">
          <div className="filters">
            {categories.map((c) => (
              <button key={c} className={c === active ? 'active' : ''} onClick={() => setActive(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-3">
            {shown.map((p) => (
              <article key={p.title} className="card project">
                <div className="project-thumb" style={{ background: `linear-gradient(135deg, ${p.color}, #0f172a)` }}>
                  <span>{p.title}</span>
                </div>
                <div className="project-body">
                  <small>{p.category}</small>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </>
  );
}
