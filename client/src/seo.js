// Shared SEO data: used by the browser (App.jsx) and by the build-time pre-renderer.
import { COMPANY, FOUNDER, FAQ } from './data.js';

export const SITE = 'https://www.ganailabs.in';

export const SEO = {
  '/': {
    title: 'GanaiLabs | Software, App & AI Development Company in Jammu & Kashmir',
    description: 'GanaiLabs is a software development company in Kathua, Jammu & Kashmir, founded by Masood Ahamed Ganai, building mobile apps, websites, AI solutions and cloud products.',
  },
  '/about': {
    title: 'About GanaiLabs | Founded by Masood Ahamed Ganai (Founder & CEO)',
    description: 'GanaiLabs was founded in 2026 by Masood Ahamed Ganai, Founder & CEO and full-stack engineer. Meet the founder and learn about our team in Kathua, J&K.',
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

export const NOT_FOUND = { title: 'Page not found | GanaiLabs', description: SEO['/'].description };

const founderSameAs = FOUNDER.links.map((l) => l.url);

/** Organization + founder Person + WebSite, linked by @id so Google ties them together. Used on every page. */
export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE}/#organization`,
      name: COMPANY.name,
      alternateName: ['Ganai Labs', 'GanaiLabs Software'],
      url: `${SITE}/`,
      logo: `${SITE}/favicon.svg`,
      image: `${SITE}/founder.webp`,
      description: 'GanaiLabs is a software, mobile app, web and AI development company founded in 2026 by Masood Ahamed Ganai.',
      foundingDate: '2026',
      founder: { '@id': `${SITE}/#founder` },
      email: COMPANY.email,
      telephone: '+91-6005134523',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Duggan, Bani',
        addressLocality: 'Kathua',
        addressRegion: 'Jammu and Kashmir',
        postalCode: '184206',
        addressCountry: 'IN',
      },
      areaServed: 'Worldwide',
      sameAs: founderSameAs.filter((u) => u.includes('linkedin') || u.includes('x.com')),
    },
    {
      '@type': 'Person',
      '@id': `${SITE}/#founder`,
      name: FOUNDER.name,
      alternateName: ['Masood Ganai', 'Masood Ahamed'],
      jobTitle: FOUNDER.role,
      description: `${FOUNDER.name} is the Founder & CEO of GanaiLabs and a full-stack engineer specialising in React, Node.js, MongoDB, microservices and AWS.`,
      image: `${SITE}/founder.webp`,
      url: `${SITE}/about#founder`,
      worksFor: { '@id': `${SITE}/#organization` },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Chandigarh University' },
        { '@type': 'CollegeOrUniversity', name: 'Maharaja Ranjit Singh Punjab Technical University (MRSPTU)' },
      ],
      knowsAbout: FOUNDER.skills,
      sameAs: founderSameAs,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: `${SITE}/`,
      name: COMPANY.name,
      publisher: { '@id': `${SITE}/#organization` },
    },
  ],
};

/** Extra structured data for specific pages. */
export const pageJsonLd = {
  '/about': [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      url: `${SITE}/about`,
      name: SEO['/about'].title,
      about: { '@id': `${SITE}/#organization` },
      mainEntity: { '@id': `${SITE}/#founder` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};
