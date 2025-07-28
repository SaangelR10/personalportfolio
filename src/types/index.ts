export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'design' | 'backend';
  featured?: boolean;
  stats?: {
    downloads?: string;
    rating?: number;
    users?: string;
    performance?: string;
    accessibility?: string;
    seo?: string;
    dataPoints?: string;
    uptime?: string;
    tasks?: string;
    posts?: string;
    messages?: string;
    workouts?: string;
    calories?: string;
    content?: string;
    accuracy?: string;
    trades?: string;
    profit?: string;
  };
  highlights?: string[];
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  description: string;
  experience?: string;
  projects?: number;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  company?: string;
  technologies?: string[];
  achievements?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

export type Theme = 'dark' | 'light';

export interface AppState {
  theme: Theme;
  isMenuOpen: boolean;
  activeSection: string;
  setTheme: (theme: Theme) => void;
  toggleMenu: () => void;
  setActiveSection: (section: string) => void;
}