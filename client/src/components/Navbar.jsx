import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { COMPANY } from '../data.js';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="GanaiLabs home">
          <Logo />
        </Link>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
          <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">Get a Quote</a>
        </nav>
        <button className={`hamburger ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
