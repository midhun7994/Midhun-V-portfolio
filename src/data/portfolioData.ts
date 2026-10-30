export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Full Stack' | 'AI / Machine Learning';
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badgeColor?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export const personalData = {
  name: 'Midhun V',
  title: 'Python Full Stack Developer',
  tagline: 'Building scalable, secure, and intuitive full-stack web applications with Python, FastAPI, Django, React, and TypeScript.',
  bio: 'Python Full Stack Developer with hands-on experience building web applications using Django, Flask, FastAPI, and React. Experienced in designing REST APIs, managing relational databases with PostgreSQL and MySQL, and using Git for version control. Currently building ProjectFlow, an enterprise-grade full-stack project management platform with React 19, TypeScript, and FastAPI, and certified in Microsoft Azure AI and Oracle Agentic AI.',
  email: 'midhunvijayan7994@gmail.com',
  phone: '7994809233',
  phoneFormatted: '+91 7994809233',
  whatsappUrl: 'https://wa.me/917994809233?text=Hello%20Midhun%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.',
  location: 'Palakkad, Kerala, India',
  githubUrl: 'https://github.com/midhun7994',
  linkedinUrl: 'https://www.linkedin.com/in/midhun-v-975680335',
  existingPortfolioUrl: 'https://midhun-v-portfolio.vercel.app',
  resumeUrl: '/assets/midhun_CV.pdf',
  photoUrl: '/assets/midhun.jpeg',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Scripting',
    iconName: 'Code',
    skills: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases & ORM',
    iconName: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'SQLAlchemy', 'Alembic', 'Django ORM', 'Redis'],
  },
  {
    title: 'Frameworks & Libraries',
    iconName: 'Layers',
    skills: ['FastAPI (Async)', 'Django', 'Flask', 'React', 'Zustand', 'TanStack Query', 'Angular', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Tools, DevOps & Cloud',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'RESTful APIs', 'Postman', 'Docker', 'Vite', 'Azure AI Studio', 'Vercel'],
  },
  {
    title: 'Architecture & Professional Skills',
    iconName: 'CheckCircle',
    skills: [
      'Role-Based Access Control (RBAC)',
      'JWT Authentication & Argon2id',
      'Agile / Scrum & SDLC',
      'Async Architecture & Optimizations',
      'Clean Code & Technical Documentation',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Python Full Stack Developer Intern',
    company: 'Quest Innovative Solutions Pvt Ltd',
    location: 'Kochi, Kerala',
    period: 'Internship',
    responsibilities: [
      'Built full-stack web applications with Django (MVT) and Flask, covering server-side logic and front-end pages.',
      'Designed and integrated RESTful APIs for efficient client-server data exchange.',
      'Designed MySQL and PostgreSQL schemas and crafted optimized database queries.',
      'Built responsive interfaces using HTML5, CSS3, JavaScript, Bootstrap, and jQuery.',
      'Applied OOP principles and used Git and GitHub for version control and issue tracking across the development lifecycle.',
    ],
    skills: ['Python', 'Django', 'Flask', 'REST APIs', 'PostgreSQL', 'MySQL', 'Django ORM', 'Git', 'Bootstrap'],
  },
];

export const projectsData: Project[] = [
  {
    id: 'proj-projectflow',
    title: 'ProjectFlow',
    subtitle: 'Enterprise Full-Stack Project & Agile Task Management Platform',
    description:
      'A high-performance enterprise project management platform featuring real-time task tracking, interactive Kanban boards with optimistic updates, project analytics, and role-based access control (RBAC). Built with a decoupled architecture pairing a React 19 + TypeScript SPA with an async FastAPI backend.',
    category: 'Full Stack',
    technologies: [
      'FastAPI',
      'Python',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'SQLAlchemy 2.0',
      'Alembic',
      'Zustand',
      'TanStack Query',
      'Tailwind CSS v4',
      'Redis',
      'Docker',
    ],
    features: [
      'Interactive Kanban board with drag-and-drop (@hello-pangea/dnd) & optimistic updates',
      'Async REST API with FastAPI, SQLAlchemy 2.0 async sessions & Alembic migrations',
      'Enterprise security with JWT access/refresh tokens, HTTP-only cookies & Argon2id password hashing',
      'Fine-grained Role-Based Access Control (RBAC) for Admin, Project Manager, and Team Member roles',
      'Analytics dashboards with Recharts for team velocity, task distribution & completion metrics',
      'Production-ready architecture: Docker containerization, Gunicorn/Uvicorn workers & Redis caching',
    ],
    githubUrl: 'https://github.com/midhun7994',
    liveUrl: 'https://midhun-v-portfolio.vercel.app',
    image: '/assets/midhun.jpeg',
  },
  {
    id: 'proj-1',
    title: 'Calorie-Tracker Management System',
    subtitle: 'Web-Based Calorie Tracking & Dietary Analytics System',
    description:
      'A comprehensive full-stack application built with Python, Django, and PostgreSQL for logging daily food intake, viewing meal history, calculating automated calorie summaries, and visualizing nutritional trends.',
    category: 'Full Stack',
    technologies: ['Python', 'Django', 'Django ORM', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Daily food intake logging & automatic calorie calculation',
      'Secure user authentication and dietary profile management',
      'Date-wise consumption history and food item catalog management',
      'Optimized Django ORM queries for rapid page response times and intake summaries',
      'Clean MVT architecture with robust relational database schema',
    ],
    githubUrl: 'https://github.com/midhun7994',
    image: '/assets/midhun.jpeg',
  },
  {
    id: 'proj-2',
    title: 'AI Air Bag Detection & Emergency Alert',
    subtitle: 'Computer Vision Safety Monitoring & Instant SMTP Alerting',
    description:
      'An intelligent safety solution utilizing computer vision and machine learning algorithms to detect airbag deployment in a vehicle cabin in real-time and automatically dispatch emergency email alerts.',
    category: 'AI / Machine Learning',
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'SMTP', 'Computer Vision'],
    features: [
      'Real-time vehicle cabin camera video stream analysis and incident monitoring',
      'Machine learning classification for accurate, low-latency airbag deployment detection',
      'Automated SMTP email dispatch to emergency services upon detection',
      'Designed end-to-end vehicle cabin monitoring architecture',
    ],
    githubUrl: 'https://github.com/midhun7994',
    image: '/assets/midhun_full.jpg',
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2026',
    description:
      'Demonstrated expertise in cloud-based AI workloads, Azure Machine Learning pipelines, Computer Vision services, and NLP solution architectures.',
    badgeColor: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'cert-2',
    title: 'Oracle Agentic AI Foundations Associate Certificate',
    issuer: 'Oracle',
    date: '2026',
    description:
      'Certified in autonomous AI agents, multi-agent orchestrations, enterprise AI integration patterns, and prompt engineering principles.',
    badgeColor: 'from-amber-500 to-red-600',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University of Calicut — Sadanam Kumaran College Mankara',
    location: 'Palakkad, Kerala',
    period: '2021 – 2024',
    details: 'Focused on Computer Science, Data Structures, Database Systems, Software Engineering, and Web Development.',
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Education (Computer Science)',
    institution: 'GHSS Udma',
    location: 'Kasargod, Kerala',
    period: '2019 – 2021',
    details: 'Core subjects: Computer Science, Mathematics, Physics, and Chemistry.',
  },
  {
    id: 'edu-3',
    degree: 'Secondary Education (SSLC)',
    institution: 'Ambika English Medium School',
    location: 'Kasargod, Kerala',
    period: '2019',
    details: 'Completed secondary schooling with academic distinction.',
  },
];
