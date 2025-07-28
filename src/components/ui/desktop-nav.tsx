"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  User, 
  FolderOpen, 
  Code, 
  BookOpen, 
  Mail, 
  Menu,
  X,
  Download
} from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '#home', icon: Home },
  { name: 'Sobre Mí', href: '#about', icon: User },
  { name: 'Proyectos', href: '#projects', icon: FolderOpen },
  { name: 'Habilidades', href: '#skills', icon: Code },
  { name: 'Blog', href: '#blog', icon: BookOpen },
  { name: 'Contacto', href: '#contact', icon: Mail },
];

export default function DesktopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Ajusta la ruta según tu CV
    link.download = 'CV_Desarrollador.pdf';
    link.click();
  };

  return (
    <>
      {/* Navegación Desktop */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border-light/50 shadow-xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-perfect">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Portfolio</span>
            </motion.div>

            {/* Navegación Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <motion.button
                    key={item.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 relative group ${
                      isActive 
                        ? 'text-accent-primary bg-accent-primary/10' 
                        : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary/50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                    
                    {/* Indicador activo */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Botones de acción */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadResume}
                className="border-accent-success text-accent-success hover:bg-accent-success/10 hover:border-accent-success/50 transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
              
              <Button
                size="sm"
                onClick={() => handleNavClick('#contact')}
                className="bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contactar
              </Button>
            </div>

            {/* Botón móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-12 h-12 bg-background-secondary/80 backdrop-blur-sm rounded-2xl border border-border-light/50 flex items-center justify-center hover:bg-background-secondary transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 bg-background/95 backdrop-blur-xl z-40 lg:hidden"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="container-perfect pt-8"
            >
              <div className="space-y-4">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20' 
                          : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary/50'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="text-lg">{item.name}</span>
                    </motion.button>
                  );
                })}
                
                <div className="pt-8 space-y-4">
                  <Button
                    variant="outline"
                    onClick={handleDownloadResume}
                    className="w-full border-accent-success text-accent-success hover:bg-accent-success/10"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Descargar CV
                  </Button>
                  
                  <Button
                    onClick={() => handleNavClick('#contact')}
                    className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white"
                  >
                    Contactar
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 