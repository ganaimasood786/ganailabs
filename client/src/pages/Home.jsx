import { Link } from 'react-router-dom';
import { SectionHeader, CTA, Testimonials } from '../components/Common.jsx';
import { services, stats, process, industries, techStack } from '../data.js';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="pill">🚀 Trusted by startups & enterprises</span>
            <h1>
              We build <span className="gradient-text">digital products</span> that drive growth
            </h1>
            <p>
              GanaiLabs is a full-cycle software development company. We design and engineer mobile apps, web
              platforms and AI solutions that help businesses launch faster and scale smarter.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
              <Link to="/portfolio" className="btn btn-outline">View Our Work</Link>
            </div>
            <div className="hero-trust">
              <span>⭐ 4.9/5 client rating</span>
              <span>⚡ 24h response time</span>
              <span>🔒 NDA protected</span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="mock-window">
              <div className="mock-bar"><i /><i /><i /></div>
              <div className="mock-body">
                <div className="mock-line w70" />
                <div className="mock-line w40" />
                <div className="mock-chart">
                  {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                    <span key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="mock-row">
                  <div className="mock-card" />
                  <div className="mock-card" />
                </div>
              </div>
            </div>
            <div className="float-badge b1">📱 App launched</div>
            <div className="float-badge b2">📈 +240% growth</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What we do"
            title="End-to-end development services"
            text="From idea validation to launch and beyond, we cover every stage of your product journey."
          />
          <div className="grid grid-4">
            {services.map((s) => (
              <div key={s.title} className="card service-card">
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="center mt">
            <Link to="/services" className="btn btn-outline">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section alt">
        <div className="container split">
          <div>
            <SectionHeader
              center={false}
              eyebrow="Why GanaiLabs"
              title="A technology partner, not just a vendor"
              text="We combine product thinking, design craft and engineering excellence to deliver software that actually moves your business forward."
            />
            <ul className="checklist">
              <li>Dedicated team with a single point of contact</li>
              <li>Agile delivery with weekly demos and transparent pricing</li>
              <li>100% source code ownership and NDA from day one</li>
              <li>Post-launch support, maintenance and scaling</li>
            </ul>
            <Link to="/about" className="btn btn-primary">More About Us</Link>
          </div>
          <div className="why-grid">
            <div className="card mini"><strong>On-time</strong><span>Delivery commitment</span></div>
            <div className="card mini"><strong>Top 1%</strong><span>Vetted engineers</span></div>
            <div className="card mini"><strong>Flexible</strong><span>Engagement models</span></div>
            <div className="card mini"><strong>24/7</strong><span>Support availability</span></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="How we work" title="Our proven development process" />
          <div className="process">
            {process.map((p) => (
              <div key={p.step} className="process-step">
                <span className="step-num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Industries" title="Solutions for every industry" />
          <div className="grid grid-6">
            {industries.map((i) => (
              <div key={i.name} className="industry">
                <span>{i.icon}</span>
                <p>{i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Technologies" title="Modern tech stack we master" />
          <div className="tech-cloud">
            {techStack.map((t) => (
              <span key={t} className="tech">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
