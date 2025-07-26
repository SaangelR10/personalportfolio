"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';
import { useAppStore } from '@/lib/store';

const navigationItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contacto', href: '#contact' },
];

export function MobileNav() {
  const { theme, isMenuOpen, setTheme, toggleMenu } = useAppStore();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu();
  };

  return (
    <>
      {/* Botón de menú hamburguesa */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-background-secondary/80 backdrop-blur-md border border-border rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Abrir menú de navegación"
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
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
      </motion.button>

      {/* Overlay del menú */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />

            {/* Menú lateral */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background-secondary/95 backdrop-blur-xl border-l border-border z-50 shadow-2xl"
            >
              {/* Header del menú */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold text-foreground">Menú</h2>
                
                {/* Toggle de tema */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border border-border hover:border-accent-blue transition-colors"
                  aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
                >
                  <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="w-5 h-5 text-accent-blue" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="w-5 h-5 text-accent-magenta" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              {/* Lista de navegación */}
              <nav className="p-6">
                <ul className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.button
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full flex items-center justify-between p-4 rounded-xl bg-background/50 hover:bg-background/80 border border-transparent hover:border-accent-blue/30 transition-all duration-300 group"
                      >
                        <span className="text-foreground font-medium group-hover:text-accent-blue transition-colors">
                          {item.name}
                        </span>
                        <ChevronRight className="w-5 h-5 text-foreground-secondary group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer del menú */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
                <div className="text-center">
                  <p className="text-sm text-foreground-secondary mb-2">
                    Desarrollador Frontend
                  </p>
                  <p className="text-xs text-foreground-secondary">
                    © 2025 - Código que impacta
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}