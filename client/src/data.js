export const COMPANY = {
  name: 'GanaiLabs',
  tagline: 'Engineering digital products that scale',
  email: 'ganaimasood786@gmail.com',
  phone: '+91 6005134523',
  address: 'Duggan, Bani, Kathua, Jammu and Kashmir 184206',
  whatsappNumber: '916005134523',
  whatsapp: `https://wa.me/916005134523?text=${encodeURIComponent("Hi GanaiLabs, I'd like to discuss a project.")}`,
};

export const FOUNDER = {
  name: 'Masood Ahamed Ganai',
  role: 'Founder & CEO',
  photo: '/founder.webp',
  quote: 'I started GanaiLabs to build software the way I would want it built for my own business: honest timelines, clean code and a team that truly cares about the result.',
  bio: [
    'Masood is a full-stack engineer who specialises in building scalable, high-performance applications with React, Node.js, Express and MongoDB, along with microservices on AWS and Kubernetes.',
    'From 2023 to 2026 he worked as a Full Stack Engineer at Ganai Care Solutions, writing Node.js microservices, Helm charts for Kubernetes deployments and React front ends, alongside a team of 20+ developers, QA engineers and scrum masters. In 2026 he left to found GanaiLabs.',
  ],
  highlights: [
    { value: '4+', label: 'MERN products delivered' },
    { value: '1000+', label: 'REST APIs built & optimised' },
    { value: 'MCA', label: 'Chandigarh University' },
  ],
  skills: ['React JS', 'Node JS', 'Express JS', 'MongoDB', 'Redux', 'MySQL', 'REST APIs', 'Microservices', 'Kafka', 'AWS', 'Kubernetes', 'CI/CD', 'Git', 'Jira'],
  experience: [
    { period: '2026 – Present', title: 'Founder & CEO', org: 'GanaiLabs' },
    { period: '2023 – 2026', title: 'Full Stack Engineer', org: 'Ganai Care Solutions Pvt. Ltd' },
    { period: '2020 – 2021', title: 'Full Stack Developer (Internship)', org: 'Apprify Digital IT Hub Solutions Pvt. Ltd' },
  ],
  education: [
    { period: '2023', title: 'Master of Computer Applications (MCA)', org: 'Chandigarh University' },
    { period: '2020', title: 'Bachelor of Computer Applications (BCA)', org: 'MRSPTU, Punjab' },
  ],
  projects: [
    { name: 'Wandrstar', text: 'Online travel agency platform: core booking features.' },
    { name: 'Eventutti', text: 'Marketplace connecting event service providers with customers.' },
    { name: 'IndieTown', text: 'Invite-only community for independent bands and artists.' },
  ],
  links: [
    { label: 'LinkedIn', short: 'in', url: 'https://www.linkedin.com/in/masood-ahamed-6a2a21200/' },
    { label: 'X / Twitter', short: '𝕏', url: 'https://x.com/masoodGanai1' },
    { label: 'Instagram', short: 'ig', url: 'https://www.instagram.com/masoodaganai/' },
    { label: 'YouTube', short: 'yt', url: 'https://www.youtube.com/@masoodslens' },
    { label: 'Portfolio', short: '🌐', url: 'https://masoodaganai.vercel.app/' },
  ],
};

export const services = [
  { icon: '📱', title: 'Mobile App Development', text: 'Native and cross-platform iOS & Android apps built with Flutter, React Native, Swift and Kotlin.' },
  { icon: '💻', title: 'Web Development', text: 'Fast, secure and SEO-friendly websites and web apps using React, Next.js, Node.js and the MERN stack.' },
  { icon: '🤖', title: 'AI & Machine Learning', text: 'Chatbots, generative AI, computer vision and predictive analytics that automate and add intelligence.' },
  { icon: '🎨', title: 'UI/UX Design', text: 'Research-driven, pixel-perfect interfaces and design systems that users love to use.' },
  { icon: '☁️', title: 'Cloud & DevOps', text: 'Scalable architecture on AWS, Azure and GCP with CI/CD pipelines, monitoring and cost optimisation.' },
  { icon: '🛒', title: 'E-commerce Solutions', text: 'Custom storefronts, marketplaces and Shopify builds with seamless payments and inventory.' },
  { icon: '🔗', title: 'Blockchain Development', text: 'Smart contracts, dApps, wallets and tokenisation solutions on Ethereum, Solana and Polygon.' },
  { icon: '🧪', title: 'QA & Testing', text: 'Manual and automated testing to ship bug-free, high-performance software every release.' },
];

export const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '80+', label: 'Happy Clients' },
  { value: '25+', label: 'Expert Engineers' },
  { value: '10+', label: 'Countries Served' },
];

export const process = [
  { step: '01', title: 'Discovery', text: 'We understand your business, users and goals, then define scope and roadmap.' },
  { step: '02', title: 'Design', text: 'Wireframes, prototypes and visual design validated with real feedback.' },
  { step: '03', title: 'Development', text: 'Agile sprints with weekly demos, clean code and transparent progress.' },
  { step: '04', title: 'Testing', text: 'Rigorous QA across devices, performance and security before launch.' },
  { step: '05', title: 'Launch & Support', text: 'Smooth deployment, store submission and ongoing maintenance.' },
];

export const industries = [
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🏦', name: 'Fintech' },
  { icon: '🎓', name: 'Education' },
  { icon: '🚚', name: 'Logistics' },
  { icon: '🛍️', name: 'Retail' },
  { icon: '🏠', name: 'Real Estate' },
  { icon: '🍔', name: 'Food Delivery' },
  { icon: '✈️', name: 'Travel' },
  { icon: '🎮', name: 'Gaming' },
  { icon: '💪', name: 'Fitness' },
  { icon: '🚗', name: 'Automotive' },
  { icon: '📺', name: 'Media' },
];

export const techStack = [
  'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Flutter', 'React Native', 'Swift',
  'Kotlin', 'Python', 'TensorFlow', 'OpenAI', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL',
];

export const testimonials = [
  { name: 'Aarav Mehta', role: 'Founder, HealthNest', text: 'GanaiLabs turned our idea into a polished telemedicine app in under four months. Communication was excellent throughout.' },
  { name: 'Sarah Collins', role: 'CTO, ShipFast', text: 'Their engineers are sharp and proactive. The logistics dashboard they built cut our dispatch time by 40%.' },
  { name: 'Imran Shah', role: 'CEO, LearnLoop', text: 'From design to launch, the team owned the product like it was their own. Highly recommended.' },
];

export const projects = [
  { title: 'HealthNest', category: 'Healthcare', text: 'Telemedicine app with video consults, e-prescriptions and appointment booking.', color: '#6d5dfc' },
  { title: 'ShipFast', category: 'Logistics', text: 'Real-time fleet tracking and dispatch dashboard for a delivery company.', color: '#0ea5e9' },
  { title: 'LearnLoop', category: 'Education', text: 'E-learning platform with live classes, quizzes and progress analytics.', color: '#f59e0b' },
  { title: 'PayPilot', category: 'Fintech', text: 'Digital wallet with UPI payments, bill splits and spending insights.', color: '#10b981' },
  { title: 'FreshCart', category: 'E-commerce', text: 'Grocery delivery marketplace with multi-vendor support and live order tracking.', color: '#ef4444' },
  { title: 'AskAI', category: 'AI', text: 'Generative AI assistant that answers customer queries from company documents.', color: '#8b5cf6' },
];
