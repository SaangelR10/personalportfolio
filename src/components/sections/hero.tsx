"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background">
        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-magenta/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Badge de estado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent-blue" />
          <span className="text-sm font-medium text-accent-blue">Disponible para proyectos</span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
        >
          <span className="block text-foreground">Hola, soy</span>
          <span className="block bg-gradient-to-r from-accent-blue via-accent-magenta to-accent-green bg-clip-text text-transparent">
            Desarrollador
          </span>
        </motion.h1>

        {/* Subtítulo corto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-foreground-secondary mb-12 max-w-lg mx-auto"
        >
          Creo experiencias digitales excepcionales
        </motion.p>

        {/* Botones CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-accent-blue to-accent-magenta hover:from-accent-magenta hover:to-accent-blue text-white font-semibold px-10 py-6 rounded-2xl shadow-2xl hover:shadow-accent-blue/25 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Ver Proyectos
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-2 border-accent-green/30 text-accent-green hover:bg-accent-green/10 font-semibold px-10 py-6 rounded-2xl transition-all duration-300 text-lg"
          >
            Contactar
          </Button>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-foreground-secondary">Scroll</span>
            <ArrowDown className="w-6 h-6 text-accent-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}