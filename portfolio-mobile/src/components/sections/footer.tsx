"use client";

import { motion } from 'framer-motion';
import { ArrowUp, Heart, Code, Linkedin, Github, Twitter } from 'lucide-react';
import { socialLinks } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationSections = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="bg-background-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Información del desarrollador */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Portfolio</h3>
            </div>
            <p className="text-foreground-secondary mb-8 leading-relaxed text-lg">
              Desarrollador frontend apasionado por crear experiencias digitales excepcionales. 
              Especializado en Next.js, React y aplicaciones móviles modernas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-background/50 rounded-2xl border border-border flex items-center justify-center hover:border-accent-blue/30 hover:bg-accent-blue/10 transition-all duration-300"
                >
                                     {social.name === 'LinkedIn' && <Linkedin className="w-6 h-6 text-accent-primary" />}
                   {social.name === 'GitHub' && <Github className="w-6 h-6 text-foreground" />}
                   {social.name === 'Twitter' && <Twitter className="w-6 h-6 text-accent-secondary" />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navegación rápida */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-foreground mb-6">Navegación</h4>
            <ul className="space-y-4">
              {navigationSections.map((section) => (
                <li key={section.name}>
                  <a
                    href={section.href}
                    className="text-foreground-secondary hover:text-accent-primary transition-colors duration-300 text-lg"
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-foreground mb-6">Contacto</h4>
            <div className="space-y-4">
              <p className="text-foreground-secondary text-lg">tu-email@ejemplo.com</p>
              <p className="text-foreground-secondary text-lg">+1 (555) 123-4567</p>
              <p className="text-foreground-secondary text-lg">Ciudad, País</p>
            </div>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-foreground-secondary"
            >
              <span>© 2025 Portfolio. Hecho con</span>
              <Heart className="w-5 h-5 text-accent-secondary fill-current" />
              <span>y Next.js</span>
            </motion.div>

            {/* Botón volver arriba */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
              Volver arriba
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}