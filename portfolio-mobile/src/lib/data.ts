import { Project, Skill, TimelineItem, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Mobile App',
    description: 'Aplicación móvil completa de comercio electrónico construida con React Native y Node.js. Incluye autenticación, pagos, y gestión de inventario.',
    image: '/projects/ecommerce-app.webp',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://demo-ecommerce.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/ecommerce-app',
    category: 'mobile'
  },
  {
    id: '2',
    title: 'Portfolio Web Responsive',
    description: 'Portafolio web moderno optimizado para móviles con Next.js 15, Tailwind CSS y Framer Motion. Diseño mobile-first con soporte para iOS y Android.',
    image: '/projects/portfolio.webp',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://portfolio.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/portfolio',
    category: 'frontend'
  },
  {
    id: '3',
    title: 'Dashboard Analytics',
    description: 'Panel de control analítico con gráficos interactivos y datos en tiempo real. Construido con React, D3.js y WebSocket para actualizaciones live.',
    image: '/projects/dashboard.webp',
    technologies: ['React', 'D3.js', 'WebSocket', 'Express'],
    demoUrl: 'https://dashboard-demo.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/analytics-dashboard',
    category: 'fullstack'
  },
  {
    id: '4',
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con drag & drop, notificaciones push y sincronización offline. Optimizada para productividad móvil.',
    image: '/projects/task-app.webp',
    technologies: ['Vue.js', 'PWA', 'IndexedDB', 'Service Workers'],
    demoUrl: 'https://task-app.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/task-manager',
    category: 'frontend'
  },
  {
    id: '5',
    title: 'Social Media Platform',
    description: 'Plataforma de redes sociales con chat en tiempo real, subida de archivos y sistema de recomendaciones personalizado.',
    image: '/projects/social-platform.webp',
    technologies: ['Next.js', 'Socket.io', 'AWS S3', 'Redis'],
    demoUrl: 'https://social-platform.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/social-platform',
    category: 'fullstack'
  },
  {
    id: '6',
    title: 'Fitness Tracking App',
    description: 'Aplicación de seguimiento de fitness con integración de wearables, análisis de datos y planificación de entrenamientos.',
    image: '/projects/fitness-app.webp',
    technologies: ['React Native', 'HealthKit', 'Firebase', 'Chart.js'],
    demoUrl: 'https://fitness-app.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/fitness-tracker',
    category: 'mobile'
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', level: 95, category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 92, category: 'frontend' },
  { name: 'Vue.js', icon: 'vue', level: 85, category: 'frontend' },
  { name: 'React Native', icon: 'react-native', level: 80, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'nodejs', level: 85, category: 'backend' },
  { name: 'Express', icon: 'express', level: 82, category: 'backend' },
  { name: 'MongoDB', icon: 'mongodb', level: 78, category: 'backend' },
  { name: 'PostgreSQL', icon: 'postgresql', level: 75, category: 'backend' },
  { name: 'Firebase', icon: 'firebase', level: 80, category: 'backend' },
  { name: 'AWS', icon: 'aws', level: 70, category: 'backend' },
  
  // Tools
  { name: 'Git', icon: 'git', level: 90, category: 'tools' },
  { name: 'Docker', icon: 'docker', level: 75, category: 'tools' },
  { name: 'Figma', icon: 'figma', level: 85, category: 'tools' },
  { name: 'Jest', icon: 'jest', level: 80, category: 'tools' },
  { name: 'Webpack', icon: 'webpack', level: 75, category: 'tools' },
  { name: 'Vite', icon: 'vite', level: 85, category: 'tools' },
  
  // Soft Skills
  { name: 'Trabajo en Equipo', icon: 'team', level: 95, category: 'soft' },
  { name: 'Comunicación', icon: 'communication', level: 90, category: 'soft' },
  { name: 'Resolución de Problemas', icon: 'problem-solving', level: 88, category: 'soft' },
  { name: 'Gestión de Proyectos', icon: 'project-management', level: 82, category: 'soft' },
  { name: 'Aprendizaje Continuo', icon: 'learning', level: 95, category: 'soft' },
  { name: 'Pensamiento Crítico', icon: 'critical-thinking', level: 85, category: 'soft' }
];

export const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Senior Frontend Developer',
    description: 'Liderando el desarrollo de aplicaciones móviles y web con tecnologías modernas como Next.js 15 y React Native.',
    company: 'TechCorp'
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    description: 'Desarrollando aplicaciones web completas con React, Node.js y bases de datos NoSQL.',
    company: 'StartupXYZ'
  },
  {
    year: '2022',
    title: 'Frontend Developer',
    description: 'Especializado en React y TypeScript, creando interfaces de usuario modernas y responsivas.',
    company: 'DigitalAgency'
  },
  {
    year: '2021',
    title: 'Junior Developer',
    description: 'Iniciando carrera en desarrollo web con HTML, CSS, JavaScript y frameworks modernos.',
    company: 'WebStudio'
  },
  {
    year: '2020',
    title: 'Bootcamp Graduado',
    description: 'Completé un bootcamp intensivo de desarrollo web full-stack con tecnologías modernas.',
    company: 'CodeAcademy'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tu-perfil',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tu-usuario',
    icon: 'github'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/tu-usuario',
    icon: 'twitter'
  },
  {
    name: 'Portfolio',
    url: 'https://tu-portfolio.vercel.app',
    icon: 'portfolio'
  }
];

export const personalInfo = {
  name: 'Tu Nombre',
  title: 'Desarrollador Frontend',
  subtitle: 'Especializado en aplicaciones móviles y web modernas',
  email: 'tu-email@ejemplo.com',
  location: 'Madrid, España',
  bio: 'Desarrollador frontend apasionado por crear experiencias digitales excepcionales. Especializado en React, Next.js y aplicaciones móviles. Me enfoco en el diseño mobile-first y la optimización de rendimiento para dispositivos iOS y Android. Con 4+ años de experiencia, he trabajado en proyectos que impactan a millones de usuarios.',
  avatar: '/avatar.webp'
};