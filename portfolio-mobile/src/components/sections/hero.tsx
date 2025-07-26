"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
      
      {/* Partículas de fondo (simuladas con CSS) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-blue rounded-full animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent-magenta rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent-blue rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 px-mobile-padding text-center max-w-2xl mx-auto">
        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-mobile-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
        >
          <span className="text-foreground">{personalInfo.name}</span>
          <br />
          <span className="text-accent-blue">{personalInfo.title}</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-mobile-lg text-foreground-secondary mb-8 leading-relaxed"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto group"
            onClick={() => {
              const projectsSection = document.querySelector('#projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>Explora Proyectos</span>
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              // Aquí se puede agregar la lógica para descargar CV
              window.open('/cv.pdf', '_blank');
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            <span>Descargar CV</span>
          </Button>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-foreground-secondary hover:text-foreground transition-colors duration-200"
            aria-label="Ir a la siguiente sección"
          >
            <span className="text-sm mb-2">Descubre más</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Información adicional flotante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-20 left-mobile-padding right-mobile-padding"
      >
        <div className="bg-background-secondary/50 backdrop-blur-sm rounded-lg p-4 border border-border">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
              <span className="text-foreground-secondary">Disponible para proyectos</span>
            </div>
            <span className="text-accent-blue font-medium">{personalInfo.location}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}