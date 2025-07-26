"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { Button } from './button';
import { cn } from '@/lib/utils';

const navigationItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
];

export function MobileNav() {
  const { isMenuOpen, toggleMenu, theme, setTheme } = useAppStore();

  const handleNavClick = (href: string) => {
    toggleMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border ios-safe-top">
      <div className="flex items-center justify-between px-mobile-padding py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-heading font-bold text-accent-blue"
        >
          Portfolio
        </motion.div>

        {/* Botones de acción */}
        <div className="flex items-center gap-2">
          {/* Toggle de tema */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground-secondary hover:text-foreground"
            aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Botón de menú */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-foreground-secondary hover:text-foreground"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
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
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Menú desplegable */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-background-secondary border-t border-border overflow-hidden"
          >
            <div className="px-mobile-padding py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'w-full text-left py-3 px-4 rounded-lg text-mobile-base font-medium transition-all duration-200',
                      'text-foreground-secondary hover:text-foreground hover:bg-background',
                      'focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-inset',
                      'active:bg-accent-blue/10 active:text-accent-blue'
                    )}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}