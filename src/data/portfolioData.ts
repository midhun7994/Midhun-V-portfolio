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
  tagline: 'Building scalable, secure, and intuitive web applications with Python, Django, Flask, and modern frontend technologies.',
  bio: 'BCA graduate and Python Full Stack Developer with hands-on internship experience in Django, Flask, Angular, React, REST APIs, and database engineering (MySQL/PostgreSQL/MongoDB). Passionate about clean architecture, optimized SQL queries, robust security, and seamless user experiences.',
  email: 'midhunvijayan7994@gmail.com',
  phone: '7994809233',
  phoneFormatted: '+91 7994809233',
  whatsappUrl: 'https://wa.me/917994809233?text=Hello%20Midhun%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.',
  location: 'Palakkad, Kerala, India',
  githubUrl: 'https://github.com/midhun7994',
  linkedinUrl: 'https://www.linkedin.com/in/midhun-v-975680335',
  existingPortfolioUrl: 'https://midhunvwebsite.netlify.app/',
  resumeUrl: '/assets/midhun_CV.pdf',
  photoUrl: '/assets/midhun.jpeg',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Scripting',
    iconName: 'Code',
    skills: ['Python', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'TypeScript'],
  },
  {
    title: 'Databases',
    iconName: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Django ORM'],
  },
  {
    title: 'Frameworks & Libraries',
    iconName: 'Layers',
    skills: ['Django', 'Flask', 'Angular', 'React', 'Bootstrap', 'jQuery', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Platforms',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'RESTful APIs', 'Web Scraping', 'Vite', 'Postman', 'Netlify'],
  },
  {
    title: 'Professional & Soft Skills',
    iconName: 'CheckCircle',
    skills: [
      'Agile Workflows & SDLC',
      'Collaborative Problem-Solving',
      'Debugging & Troubleshooting',
      'Code Optimization & Clean Code',
      'Technical Documentation',
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
      'Engineered full-stack web applications utilizing Python, Django, and Flask frameworks following MVT design patterns.',
      'Implemented robust authentication systems, password hashing, and role-based access control (RBAC) security.',
      'Designed and integrated RESTful APIs to connect frontend user interfaces with Python backend services.',
      'Managed relational database schemas, crafted optimized SQL queries, and leveraged Django ORM for data integrity.',
      'Practiced clean code methodologies, object-oriented programming principles, and collaborative Git workflows.',
    ],
    skills: ['Python', 'Django', 'Flask', 'REST APIs', 'MySQL', 'Django ORM', 'Git', 'Clean Code'],
  },
];

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Calorie-Tracker Management System',
    subtitle: 'Web-Based Calorie Tracking & Dietary Analytics System',
    description:
      'A comprehensive full-stack application for logging daily meal consumption, calculating automated calorie balances, generating date-wise nutritional reports, and visualizing health trends.',
    category: 'Full Stack',
    technologies: ['Python', 'Django', 'Django ORM', 'HTML5', 'CSS3', 'JavaScript', 'SQLite / PostgreSQL'],
    features: [
      'Daily food intake logging & automatic calorie calculation',
      'Role-based access control for users and system administrators',
      'Date-wise consumption history and food item catalog management',
      'Daily & weekly interactive calorie summary reports and dashboards',
      'Clean MVT architecture with secure authentication',
    ],
    githubUrl: 'https://github.com/midhun7994',
    image: '/assets/midhun.jpeg',
  },
  {
    id: 'proj-2',
    title: 'AI Air Bag Detection & Emergency Alert',
    subtitle: 'Computer Vision Safety Monitoring & Instant SMTP Alerting',
    description:
      'An intelligent safety solution utilizing computer vision and machine learning algorithms to detect airbag deployment in real-time and instantly trigger emergency email notifications with location telemetry.',
    category: 'AI / Machine Learning',
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'SMTP', 'Computer Vision'],
    features: [
      'Real-time video stream analysis and vehicle incident detection',
      'Machine learning classification for fast, accurate airbag deployment verification',
      'Automated SMTP email dispatch to emergency services upon detection',
      'Built with focus on passenger safety and low-latency response',
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
