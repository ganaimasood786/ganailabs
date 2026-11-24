import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { COMPANY, FOUNDER, services } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-about">
            {COMPANY.name} is a software development company helping startups and enterprises design, build and scale
            web, mobile and AI products.
          </p>
          <div className="socials">
            {FOUNDER.links.filter((l) => l.label !== 'Portfolio').map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" aria-label={l.label} title={l.label}>{l.short}</a>
            ))}
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Services</h4>
          {services.slice(0, 5).map((s) => (
            <Link key={s.title} to="/services">{s.title}</Link>
          ))}
        </div>
        <div>
          <h4>Get in touch</h4>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">{COMPANY.phone}</a>
          <p>{COMPANY.address}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service</p>
      </div>
    </footer>
  );
}
