import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import { useScrollReveal } from './components/Effects.jsx';

const SITE = 'https://www.ganailabs.in';
const SEO = {
  '/': {
    title: 'GanaiLabs | Software, App & AI Development Company in Jammu & Kashmir',
    description: 'GanaiLabs is a software development company in Kathua, Jammu & Kashmir building mobile apps, websites, AI solutions and cloud products for startups and businesses.',
  },
  '/about': {
    title: 'About Us | GanaiLabs',
    description: 'Meet GanaiLabs, a team of designers and engineers in Kathua, J&K building reliable web, mobile and AI software for clients worldwide.',
  },
  '/services': {
    title: 'Services: App, Web, AI & Cloud Development | GanaiLabs',
    description: 'Mobile app development, website and MERN development, AI & machine learning, UI/UX design, cloud & DevOps, e-commerce and QA services by GanaiLabs.',
  },
  '/portfolio': {
    title: 'Portfolio | GanaiLabs',
    description: 'Explore apps, websites and AI products designed and engineered by GanaiLabs across healthcare, fintech, education, logistics and more.',
  },
  '/contact': {
    title: 'Contact GanaiLabs | Get a Free Quote',
    description: 'Talk to GanaiLabs about your app, website or AI project. Call or WhatsApp +91 6005134523 or email ganaimasood786@gmail.com. Based in Duggan, Bani, Kathua, J&K.',
  },
};

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    } else {
      window.scrollTo(0, 0);
    }
    const seo = SEO[pathname] || { title: 'Page not found | GanaiLabs', description: SEO['/'].description };
    document.title = seo.title;
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:url"]', 'content', SITE + pathname);
    setMeta('link[rel="canonical"]', 'href', SITE + pathname);
    setMeta('meta[name="robots"]', 'content', SEO[pathname] ? 'index, follow' : 'noindex');
  }, [pathname, hash]);
  useScrollReveal(pathname);
  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
