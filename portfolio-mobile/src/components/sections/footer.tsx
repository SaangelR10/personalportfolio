"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, socialLinks } from '@/lib/data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-mobile-padding py-12">
        {/* Contenido principal */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-mobile-xl font-heading font-bold text-accent-blue">
              {personalInfo.name}
            </h3>
            <p className="text-mobile-base text-foreground-secondary leading-relaxed">
              Desarrollador frontend apasionado por crear experiencias digitales excepcionales. 
              Especializado en aplicaciones móviles y web modernas.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground-secondary">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-mobile-lg font-heading font-semibold text-foreground">
              Enlaces Rápidos
            </h4>
            <nav className="space-y-2">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'Sobre Mí', href: '#about' },
                { label: 'Proyectos', href: '#projects' },
                { label: 'Habilidades', href: '#skills' },
                { label: 'Contacto', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-mobile-base text-foreground-secondary hover:text-accent-blue transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-mobile-lg font-heading font-semibold text-foreground">
              Conecta Conmigo
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-foreground-secondary hover:text-accent-blue hover:bg-background/80 transition-all duration-200"
                  aria-label={`Visitar ${social.name}`}
                >
                  {social.name === 'LinkedIn' && <Linkedin className="h-5 w-5" />}
                  {social.name === 'GitHub' && <Github className="h-5 w-5" />}
                  {social.name === 'Twitter' && <Twitter className="h-5 w-5" />}
                  {social.name === 'Portfolio' && <ExternalLink className="h-5 w-5" />}
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-mobile-base text-foreground-secondary hover:text-accent-blue transition-colors duration-200"
              >
                {personalInfo.email}
              </a>
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
              className="flex items-center gap-2 text-sm text-foreground-secondary"
            >
              <span>© {currentYear} {personalInfo.name}. Todos los derechos reservados.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Código que impacta</span>
            </motion.div>

            {/* Botón volver arriba */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-foreground-secondary hover:text-accent-blue"
                aria-label="Volver arriba"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Volver arriba
              </Button>
            </motion.div>
          </div>

          {/* Créditos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-6 pt-6 border-t border-border/50"
          >
            <p className="text-xs text-foreground-secondary">
              Hecho con <Heart className="inline h-3 w-3 text-accent-magenta" /> usando Next.js, TypeScript y Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

// Componentes de iconos para evitar importaciones adicionales
function MapPin({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function Github({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function Twitter({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  );
}

function ExternalLink({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}