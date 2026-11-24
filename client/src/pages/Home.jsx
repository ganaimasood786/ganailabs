import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, CTA, Testimonials } from '../components/Common.jsx';
import { RotatingWords, CountUp, useParallax } from '../components/Effects.jsx';
import { FounderTeaser } from '../components/Founder.jsx';
import { services, stats, process, industries, techStack } from '../data.js';

export default function Home() {
  const heroRef = useRef(null);
  useParallax(heroRef);

  return (
    <>
      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg" aria-hidden="true">
          <span className="blob blob-1" />
          <span className="blob blob-2" />
          <span className="blob blob-3" />
          <span className="blob blob-4" />
          <span className="grid-overlay" />
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className={`particle p${i % 4}`} style={{ left: `${(i * 7.3) % 100}%`, animationDelay: `${(i * 0.9) % 8}s`, animationDuration: `${9 + (i % 5) * 2}s` }} />
          ))}
        </div>
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="pill fade-up"><span className="pulse-dot" /> Trusted by startups & enterprises</span>
            <h1 className="fade-up d1">
              We build <RotatingWords words={['mobile apps', 'websites', 'AI solutions', 'cloud platforms']} />
              <br />that drive growth
            </h1>
            <p className="fade-up d2">
              GanaiLabs is a full-cycle software development company. We design and engineer mobile apps, web
              platforms and AI solutions that help businesses launch faster and scale smarter.
            </p>
            <div className="hero-actions fade-up d3">
              <Link to="/contact" className="btn btn-primary btn-shine">Start Your Project</Link>
              <Link to="/portfolio" className="btn btn-outline">View Our Work</Link>
            </div>
            <div className="hero-trust fade-up d4">
              <span>⭐ 4.9/5 client rating</span>
              <span>⚡ 24h response time</span>
              <span>🔒 NDA protected</span>
            </div>
          </div>
          <div className="hero-visual fade-in d2" aria-hidden="true">
            <div className="orbit"><span /><span /><span /></div>
            <div className="mock-window tilt">
              <div className="mock-bar"><i /><i /><i /></div>
              <div className="mock-body">
                <div className="mock-line w70 shimmer" />
                <div className="mock-line w40 shimmer" />
                <div className="mock-chart">
                  {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                    <span key={i} style={{ height: `${h}%`, animationDelay: `${0.4 + i * 0.08}s` }} />
                  ))}
                </div>
                <div className="mock-row">
                  <div className="mock-card c1" />
                  <div className="mock-card c2" />
                </div>
              </div>
            </div>
            <div className="float-badge b1">📱 App launched</div>
            <div className="float-badge b2">📈 +240% growth</div>
            <div className="float-badge b3">🤖 AI powered</div>
          </div>
        </div>
        <a href="#stats" className="scroll-hint" aria-label="Scroll down"><span /></a>
      </section>

      {/* Stats */}
      <section className="stats-strip" id="stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat reveal">
              <strong><CountUp value={s.value} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="What we do"
              title="End-to-end development services"
              text="From idea validation to launch and beyond, we cover every stage of your product journey."
            />
          </div>
          <div className="grid grid-4 color-cards">
            {services.map((s, i) => (
              <div key={s.title} className="card service-card reveal" style={{ transitionDelay: `${(i % 4) * 80}ms` }}>
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
          <div className="reveal">
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
          <div className="why-grid color-cards">
            <div className="card mini reveal"><strong>On-time</strong><span>Delivery commitment</span></div>
            <div className="card mini reveal" style={{ transitionDelay: '80ms' }}><strong>Top 1%</strong><span>Vetted engineers</span></div>
            <div className="card mini reveal" style={{ transitionDelay: '160ms' }}><strong>Flexible</strong><span>Engagement models</span></div>
            <div className="card mini reveal" style={{ transitionDelay: '240ms' }}><strong>24/7</strong><span>Support availability</span></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="reveal"><SectionHeader eyebrow="How we work" title="Our proven development process" /></div>
          <div className="process">
            {process.map((p, i) => (
              <div key={p.step} className="process-step reveal" style={{ transitionDelay: `${i * 100}ms` }}>
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
          <div className="reveal"><SectionHeader eyebrow="Industries" title="Solutions for every industry" /></div>
          <div className="grid grid-6">
            {industries.map((ind, i) => (
              <div key={ind.name} className="industry reveal" style={{ transitionDelay: `${(i % 6) * 60}ms` }}>
                <span>{ind.icon}</span>
                <p>{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack marquee */}
      <section className="section">
        <div className="container">
          <div className="reveal"><SectionHeader eyebrow="Technologies" title="Modern tech stack we master" /></div>
        </div>
        <div className="marquee" aria-label="Technologies we use">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="tech" aria-hidden={i >= techStack.length}>{t}</span>
            ))}
          </div>
        </div>
        <div className="marquee reverse" aria-hidden="true">
          <div className="marquee-track">
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((t, i) => (
              <span key={i} className="tech">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <FounderTeaser />
      <Testimonials />
      <CTA />
    </>
  );
}
