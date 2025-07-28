import { Project, Skill, TimelineItem, SocialLink, BlogPost } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Mobile App',
    description: 'Aplicación móvil completa de comercio electrónico con más de 50,000 descargas. Incluye autenticación biométrica, pagos con Apple Pay/Google Pay, gestión de inventario en tiempo real, y análisis avanzado de comportamiento del usuario.',
    image: '/projects/ecommerce-app.webp',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Firebase', 'Redux Toolkit'],
    demoUrl: 'https://demo-ecommerce.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/ecommerce-app',
    category: 'mobile',
    featured: true,
    stats: {
      downloads: '50K+',
      rating: 4.8,
      users: '25K+'
    },
    highlights: [
      'Autenticación biométrica y social login',
      'Pagos integrados con Apple Pay/Google Pay',
      'Gestión de inventario en tiempo real',
      'Análisis de comportamiento del usuario'
    ]
  },
  {
    id: '2',
    title: 'Portfolio Web Responsive',
    description: 'Portafolio web moderno optimizado para móviles con Next.js 15, implementando las últimas tecnologías web. Diseño mobile-first con soporte completo para iOS y Android, incluyendo PWA y optimizaciones de rendimiento.',
    image: '/projects/portfolio.webp',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'PWA', 'Vercel'],
    demoUrl: 'https://portfolio.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/portfolio',
    category: 'frontend',
    featured: true,
    stats: {
      performance: '98/100',
      accessibility: '100/100',
      seo: '100/100'
    },
    highlights: [
      'Optimización perfecta para móviles',
      'PWA con funcionalidad offline',
      'Animaciones fluidas con Framer Motion',
      'SEO optimizado y accesibilidad completa'
    ]
  },
  {
    id: '3',
    title: 'Dashboard Analytics Enterprise',
    description: 'Panel de control analítico empresarial con más de 100,000 usuarios activos. Incluye gráficos interactivos, datos en tiempo real, machine learning para predicciones, y exportación avanzada de reportes.',
    image: '/projects/dashboard.webp',
    technologies: ['React', 'D3.js', 'WebSocket', 'Express', 'PostgreSQL', 'Redis', 'TensorFlow.js'],
    demoUrl: 'https://dashboard-demo.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/analytics-dashboard',
    category: 'fullstack',
    featured: true,
    stats: {
      users: '100K+',
      dataPoints: '1M+',
      uptime: '99.9%'
    },
    highlights: [
      'Gráficos interactivos con D3.js',
      'Machine learning para predicciones',
      'Exportación de reportes en múltiples formatos',
      'Escalabilidad horizontal con Redis'
    ]
  },
  {
    id: '4',
    title: 'Task Management Pro',
    description: 'Aplicación de gestión de tareas premium con funcionalidades avanzadas como drag & drop, notificaciones push, sincronización offline, y integración con calendarios externos.',
    image: '/projects/task-app.webp',
    technologies: ['Vue.js 3', 'PWA', 'IndexedDB', 'Service Workers', 'Vuetify', 'Firebase'],
    demoUrl: 'https://task-app.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/task-manager',
    category: 'frontend',
    featured: false,
    stats: {
      tasks: '500K+',
      users: '10K+',
      rating: 4.9
    },
    highlights: [
      'Drag & drop intuitivo',
      'Sincronización offline completa',
      'Integración con Google Calendar',
      'Notificaciones push personalizadas'
    ]
  },
  {
    id: '5',
    title: 'Social Media Platform',
    description: 'Plataforma de redes sociales completa con chat en tiempo real, subida de archivos multimedia, sistema de recomendaciones personalizado, y moderación de contenido automática.',
    image: '/projects/social-platform.webp',
    technologies: ['Next.js', 'Socket.io', 'AWS S3', 'Redis', 'MongoDB', 'TensorFlow.js'],
    demoUrl: 'https://social-platform.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/social-platform',
    category: 'fullstack',
    featured: false,
    stats: {
      users: '250K+',
      posts: '2M+',
      messages: '10M+'
    },
    highlights: [
      'Chat en tiempo real con Socket.io',
      'Sistema de recomendaciones ML',
      'Moderación automática de contenido',
      'Escalabilidad con AWS y Redis'
    ]
  },
  {
    id: '6',
    title: 'Fitness Tracking Elite',
    description: 'Aplicación de seguimiento de fitness premium con integración de wearables, análisis avanzado de datos, planificación de entrenamientos personalizada, y comunidad social.',
    image: '/projects/fitness-app.webp',
    technologies: ['React Native', 'HealthKit', 'Firebase', 'Chart.js', 'TensorFlow Lite', 'WebRTC'],
    demoUrl: 'https://fitness-app.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/fitness-tracker',
    category: 'mobile',
    featured: false,
    stats: {
      downloads: '100K+',
      workouts: '1M+',
      calories: '50M+'
    },
    highlights: [
      'Integración con Apple Watch y Fitbit',
      'Análisis de datos con ML',
      'Entrenamientos personalizados',
      'Comunidad social integrada'
    ]
  },
  {
    id: '7',
    title: 'AI Content Generator',
    description: 'Generador de contenido con IA que crea artículos, imágenes y videos personalizados. Integra GPT-4, DALL-E y Stable Diffusion para contenido multimedia completo.',
    image: '/projects/ai-generator.webp',
    technologies: ['Next.js', 'OpenAI API', 'Stable Diffusion', 'PostgreSQL', 'Redis', 'AWS'],
    demoUrl: 'https://ai-generator.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/ai-content-generator',
    category: 'fullstack',
    featured: false,
    stats: {
      content: '500K+',
      users: '50K+',
      accuracy: '95%'
    },
    highlights: [
      'Integración con GPT-4 y DALL-E',
      'Generación de contenido multimedia',
      'Sistema de créditos y suscripciones',
      'API para desarrolladores'
    ]
  },
  {
    id: '8',
    title: 'Crypto Trading Bot',
    description: 'Bot de trading de criptomonedas con algoritmos de machine learning, análisis técnico avanzado, y gestión de riesgo automática. Compatible con múltiples exchanges.',
    image: '/projects/crypto-bot.webp',
    technologies: ['Python', 'TensorFlow', 'Binance API', 'PostgreSQL', 'Redis', 'Docker'],
    demoUrl: 'https://crypto-bot.vercel.app',
    githubUrl: 'https://github.com/tu-usuario/crypto-trading-bot',
    category: 'backend',
    featured: false,
    stats: {
      trades: '10K+',
      profit: '+45%',
      uptime: '99.5%'
    },
    highlights: [
      'Algoritmos de ML para predicciones',
      'Análisis técnico avanzado',
      'Gestión de riesgo automática',
      'Múltiples exchanges soportados'
    ]
  }
];

export const skills: Skill[] = [
  // Frontend
  { 
    id: 'react',
    name: 'React', 
    icon: 'react', 
    level: 95, 
    category: 'frontend',
    description: 'Desarrollo de interfaces de usuario interactivas y componentes reutilizables',
    experience: '4+ años',
    projects: 25
  },
  { 
    id: 'nextjs',
    name: 'Next.js', 
    icon: 'nextjs', 
    level: 90, 
    category: 'frontend',
    description: 'Framework full-stack con SSR/SSG para aplicaciones web modernas',
    experience: '3+ años',
    projects: 18
  },
  { 
    id: 'typescript',
    name: 'TypeScript', 
    icon: 'typescript', 
    level: 88, 
    category: 'frontend',
    description: 'Tipado estático para JavaScript con mejor desarrollo y mantenimiento',
    experience: '3+ años',
    projects: 22
  },
  { 
    id: 'tailwind',
    name: 'Tailwind CSS', 
    icon: 'tailwind', 
    level: 92, 
    category: 'frontend',
    description: 'Framework CSS utility-first para diseño rápido y responsive',
    experience: '3+ años',
    projects: 20
  },
  { 
    id: 'vue',
    name: 'Vue.js', 
    icon: 'vue', 
    level: 85, 
    category: 'frontend',
    description: 'Framework progresivo para construir interfaces de usuario',
    experience: '2+ años',
    projects: 12
  },
  { 
    id: 'react-native',
    name: 'React Native', 
    icon: 'react-native', 
    level: 80, 
    category: 'frontend',
    description: 'Desarrollo de aplicaciones móviles nativas con React',
    experience: '2+ años',
    projects: 8
  },
  
  // Backend
  { 
    id: 'nodejs',
    name: 'Node.js', 
    icon: 'nodejs', 
    level: 85, 
    category: 'backend',
    description: 'Runtime de JavaScript para desarrollo backend y APIs',
    experience: '3+ años',
    projects: 15
  },
  { 
    id: 'express',
    name: 'Express', 
    icon: 'express', 
    level: 82, 
    category: 'backend',
    description: 'Framework web minimalista y flexible para Node.js',
    experience: '3+ años',
    projects: 12
  },
  { 
    id: 'mongodb',
    name: 'MongoDB', 
    icon: 'mongodb', 
    level: 78, 
    category: 'backend',
    description: 'Base de datos NoSQL orientada a documentos',
    experience: '2+ años',
    projects: 10
  },
  { 
    id: 'postgresql',
    name: 'PostgreSQL', 
    icon: 'postgresql', 
    level: 75, 
    category: 'backend',
    description: 'Sistema de gestión de bases de datos relacional',
    experience: '2+ años',
    projects: 8
  },
  { 
    id: 'firebase',
    name: 'Firebase', 
    icon: 'firebase', 
    level: 80, 
    category: 'backend',
    description: 'Plataforma de desarrollo de aplicaciones móviles y web',
    experience: '2+ años',
    projects: 14
  },
  { 
    id: 'aws',
    name: 'AWS', 
    icon: 'aws', 
    level: 70, 
    category: 'backend',
    description: 'Servicios en la nube para infraestructura y desarrollo',
    experience: '1+ años',
    projects: 6
  },
  
  // Tools
  { 
    id: 'git',
    name: 'Git', 
    icon: 'git', 
    level: 90, 
    category: 'tools',
    description: 'Sistema de control de versiones distribuido',
    experience: '4+ años',
    projects: 30
  },
  { 
    id: 'docker',
    name: 'Docker', 
    icon: 'docker', 
    level: 75, 
    category: 'tools',
    description: 'Plataforma de contenedores para desarrollo y despliegue',
    experience: '2+ años',
    projects: 8
  },
  { 
    id: 'figma',
    name: 'Figma', 
    icon: 'figma', 
    level: 85, 
    category: 'tools',
    description: 'Herramienta de diseño colaborativo para interfaces',
    experience: '3+ años',
    projects: 16
  },
  { 
    id: 'jest',
    name: 'Jest', 
    icon: 'jest', 
    level: 80, 
    category: 'tools',
    description: 'Framework de testing para JavaScript',
    experience: '2+ años',
    projects: 12
  },
  { 
    id: 'webpack',
    name: 'Webpack', 
    icon: 'webpack', 
    level: 75, 
    category: 'tools',
    description: 'Empaquetador de módulos para aplicaciones JavaScript',
    experience: '2+ años',
    projects: 10
  },
  { 
    id: 'vite',
    name: 'Vite', 
    icon: 'vite', 
    level: 85, 
    category: 'tools',
    description: 'Herramienta de construcción frontend moderna y rápida',
    experience: '2+ años',
    projects: 15
  },
  
  // Soft Skills
  { 
    id: 'teamwork',
    name: 'Trabajo en Equipo', 
    icon: 'team', 
    level: 95, 
    category: 'soft',
    description: 'Colaboración efectiva en equipos multidisciplinarios',
    experience: '4+ años',
    projects: 25
  },
  { 
    id: 'communication',
    name: 'Comunicación', 
    icon: 'communication', 
    level: 90, 
    category: 'soft',
    description: 'Comunicación clara y efectiva con stakeholders',
    experience: '4+ años',
    projects: 25
  },
  { 
    id: 'problem-solving',
    name: 'Resolución de Problemas', 
    icon: 'problem-solving', 
    level: 88, 
    category: 'soft',
    description: 'Análisis y solución de problemas técnicos complejos',
    experience: '4+ años',
    projects: 25
  },
  { 
    id: 'project-management',
    name: 'Gestión de Proyectos', 
    icon: 'project-management', 
    level: 82, 
    category: 'soft',
    description: 'Planificación y ejecución de proyectos de desarrollo',
    experience: '3+ años',
    projects: 18
  },
  { 
    id: 'learning',
    name: 'Aprendizaje Continuo', 
    icon: 'learning', 
    level: 95, 
    category: 'soft',
    description: 'Actualización constante en nuevas tecnologías',
    experience: '4+ años',
    projects: 25
  },
  { 
    id: 'critical-thinking',
    name: 'Pensamiento Crítico', 
    icon: 'critical-thinking', 
    level: 85, 
    category: 'soft',
    description: 'Evaluación analítica de soluciones y alternativas',
    experience: '4+ años',
    projects: 25
  }
];

export const timeline: TimelineItem[] = [
  {
    id: '1',
    year: '2024',
    title: 'Senior Frontend Developer',
    description: 'Liderando el desarrollo de aplicaciones móviles y web con tecnologías modernas como Next.js 15 y React Native. Gestionando equipos de 5-8 desarrolladores y implementando mejores prácticas de desarrollo.',
    company: 'TechCorp',
    technologies: ['Next.js 15', 'React Native', 'TypeScript', 'Tailwind CSS', 'Team Leadership'],
    achievements: [
      'Lideré el desarrollo de 3 aplicaciones móviles con más de 100K usuarios',
      'Implementé arquitecturas escalables que redujeron el tiempo de carga en 60%',
      'Mentoré a 5 desarrolladores junior en mejores prácticas'
    ]
  },
  {
    id: '2',
    year: '2023',
    title: 'Full Stack Developer',
    description: 'Desarrollando aplicaciones web completas con React, Node.js y bases de datos NoSQL. Especializado en optimización de rendimiento y experiencias de usuario excepcionales.',
    company: 'StartupXYZ',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redis', 'AWS'],
    achievements: [
      'Desarrollé 5 aplicaciones web con más de 50K usuarios activos',
      'Optimicé el rendimiento reduciendo el tiempo de carga en 40%',
      'Implementé sistemas de autenticación seguros y escalables'
    ]
  },
  {
    id: '3',
    year: '2022',
    title: 'Frontend Developer',
    description: 'Especializado en React y TypeScript, creando interfaces de usuario modernas y responsivas. Enfoque en accesibilidad y experiencia de usuario móvil.',
    company: 'DigitalAgency',
    technologies: ['React', 'TypeScript', 'CSS3', 'JavaScript', 'Accessibility'],
    achievements: [
      'Creé 8 interfaces de usuario con puntuación perfecta en accesibilidad',
      'Implementé diseño mobile-first en todos los proyectos',
      'Reduje el bundle size en 30% mediante optimizaciones'
    ]
  },
  {
    id: '4',
    year: '2021',
    title: 'Junior Developer',
    description: 'Iniciando carrera en desarrollo web con HTML, CSS, JavaScript y frameworks modernos. Aprendiendo mejores prácticas y patrones de diseño.',
    company: 'WebStudio',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Responsive Design'],
    achievements: [
      'Desarrollé 12 sitios web responsivos para clientes',
      'Aprendí React y comenzé a implementarlo en proyectos',
      'Mejoré mis habilidades en CSS y JavaScript avanzado'
    ]
  },
  {
    id: '5',
    year: '2020',
    title: 'Bootcamp Graduado',
    description: 'Completé un bootcamp intensivo de desarrollo web full-stack con tecnologías modernas. Proyectos prácticos y colaboración en equipo.',
    company: 'CodeAcademy',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
    achievements: [
      'Completé 15 proyectos prácticos durante el bootcamp',
      'Colaboré en 3 proyectos de equipo con otros desarrolladores',
      'Aprendí metodologías ágiles y control de versiones'
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tu-perfil',
    icon: 'linkedin',
    username: '@tu-perfil'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tu-usuario',
    icon: 'github',
    username: '@tu-usuario'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/tu-usuario',
    icon: 'twitter',
    username: '@tu-usuario'
  },
  {
    name: 'Portfolio',
    url: 'https://tu-portfolio.vercel.app',
    icon: 'portfolio',
    username: 'portfolio.vercel.app'
  }
];

export const personalInfo = {
  name: 'Tu Nombre',
  title: 'Senior Frontend Developer',
  subtitle: 'Especializado en aplicaciones móviles y web modernas',
  email: 'tu-email@ejemplo.com',
  phone: '+34 600 000 000',
  location: 'Madrid, España',
  bio: 'Desarrollador frontend senior con 4+ años de experiencia creando experiencias digitales excepcionales. Especializado en React, Next.js y aplicaciones móviles con React Native. Me enfoco en el diseño mobile-first, optimización de rendimiento y accesibilidad para dispositivos iOS y Android. He liderado equipos de desarrollo y contribuido a proyectos que impactan a millones de usuarios.',
  shortBio: 'Desarrollador frontend senior apasionado por crear experiencias digitales excepcionales con tecnologías modernas.',
  avatar: '/avatar.webp',
  resume: '/resume.pdf',
  availability: 'Disponible para proyectos freelance',
  languages: ['Español (Nativo)', 'Inglés (Avanzado)', 'Francés (Intermedio)'],
  interests: ['Inteligencia Artificial', 'Desarrollo Móvil', 'UX/UI Design', 'Open Source']
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Optimizando el rendimiento de aplicaciones React Native',
    excerpt: 'Guía completa para mejorar el rendimiento de tus aplicaciones móviles con React Native, incluyendo técnicas avanzadas de optimización.',
    content: 'Contenido completo del artículo...',
    publishedAt: '2024-01-15',
    readTime: '8 min',
    category: 'Mobile Development',
    tags: ['React Native', 'Performance', 'Mobile', 'Optimization'],
    image: '/blog/react-native-performance.webp',
    featured: true
  },
  {
    id: '2',
    title: 'Next.js 15: Nuevas características y mejores prácticas',
    excerpt: 'Explorando las nuevas características de Next.js 15 y cómo implementarlas en proyectos reales para mejorar el rendimiento y la experiencia del desarrollador.',
    content: 'Contenido completo del artículo...',
    publishedAt: '2024-01-10',
    readTime: '12 min',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Performance', 'Best Practices'],
    image: '/blog/nextjs-15.webp',
    featured: true
  },
  {
    id: '3',
    title: 'Diseño mobile-first: Estrategias para 2024',
    excerpt: 'Estrategias actualizadas para implementar diseño mobile-first en proyectos web modernos, considerando las últimas tendencias y tecnologías.',
    content: 'Contenido completo del artículo...',
    publishedAt: '2024-01-05',
    readTime: '10 min',
    category: 'Design',
    tags: ['Mobile-First', 'UX/UI', 'Responsive Design', 'CSS'],
    image: '/blog/mobile-first-design.webp',
    featured: false
  }
];