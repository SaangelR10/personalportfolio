export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'design';
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  description: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  company?: string;
  technologies?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
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