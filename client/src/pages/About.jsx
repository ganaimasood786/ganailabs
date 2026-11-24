import { PageHero, SectionHeader, CTA } from '../components/Common.jsx';
import { stats } from '../data.js';
import { FounderProfile } from '../components/Founder.jsx';

const values = [
  { icon: '🎯', title: 'Our Mission', text: 'To help businesses of every size turn ideas into reliable, beautiful software that creates real value.' },
  { icon: '🔭', title: 'Our Vision', text: 'To be the most trusted technology partner for innovators across the globe.' },
  { icon: '💎', title: 'Our Values', text: 'Transparency, ownership, craftsmanship and long-term partnerships over short-term wins.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We are GanaiLabs"
        text="A passionate team of designers, engineers and strategists building software that matters."
      />
      <section className="section">
        <div className="container split">
          <div>
            <SectionHeader
              center={false}
              eyebrow="Our story"
              title="Built on curiosity, driven by results"
            />
            <p className="lead">
              GanaiLabs started with a simple belief: great software comes from great partnerships. What began as a
              small team of developers has grown into a full-service product studio serving clients across healthcare,
              fintech, education, logistics and more.
            </p>
            <p className="lead">
              We work as an extension of your team, taking ownership of outcomes, communicating openly and shipping
              quality code on schedule.
            </p>
          </div>
          <div className="why-grid">
            {stats.map((s) => (
              <div key={s.label} className="card mini">
                <strong className="gradient-text">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid grid-3">
          {values.map((v) => (
            <div key={v.title} className="card service-card">
              <div className="icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <FounderProfile />
      <CTA />
    </>
  );
}
