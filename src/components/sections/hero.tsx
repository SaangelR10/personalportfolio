"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-background">
      {/* Fondo consistente con elementos sutiles */}
      <div className="absolute inset-0">
        {/* Gradiente sutil de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
        
        {/* Elementos decorativos sutiles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-success/3 rounded-full blur-3xl" />
        
        {/* Líneas sutiles */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-secondary/10 to-transparent" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge de estado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-accent-primary/10 border border-accent-primary/20 rounded-full mb-12"
        >
          <Sparkles className="w-5 h-5 text-accent-primary" />
          <span className="text-sm font-semibold text-accent-primary">Disponible para proyectos</span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-10 leading-tight"
        >
          <span className="block text-foreground mb-2">Hola, soy</span>
          <span className="block bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-success bg-clip-text text-transparent">
            Desarrollador
          </span>
        </motion.h1>

        {/* Subtítulo elegante */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-foreground-secondary mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Creo experiencias digitales excepcionales con tecnologías modernas
        </motion.p>

        {/* Botones CTA mejorados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Ver Proyectos
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-2 border-accent-success/30 text-accent-success hover:bg-accent-success/10 font-bold px-12 py-6 rounded-2xl transition-all duration-300 text-lg"
          >
            Contactar
          </Button>
        </motion.div>

        {/* Indicador de scroll elegante */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-sm text-foreground-secondary font-medium">Scroll</span>
            <ArrowDown className="w-7 h-7 text-accent-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}