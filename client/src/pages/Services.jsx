import { PageHero, SectionHeader, CTA } from '../components/Common.jsx';
import { services } from '../data.js';

const models = [
  { title: 'Fixed Price', text: 'Clearly defined scope, timeline and budget. Ideal for MVPs and well-scoped projects.' },
  { title: 'Dedicated Team', text: 'A full team working exclusively on your product, managed by you or by us.' },
  { title: 'Time & Material', text: 'Pay for the hours worked. Maximum flexibility for evolving requirements.' },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to build and grow"
        text="Strategy, design, development and support under one roof."
      />
      <section className="section">
        <div className="container grid grid-2">
          {services.map((s) => (
            <div key={s.title} className="card service-row">
              <div className="icon">{s.icon}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Engagement models" title="Work with us the way you prefer" />
          <div className="grid grid-3">
            {models.map((m, i) => (
              <div key={m.title} className={`card pricing ${i === 1 ? 'featured' : ''}`}>
                {i === 1 && <span className="badge">Most popular</span>}
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
