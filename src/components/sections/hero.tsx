"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Star, Zap, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Fondo con elementos sutiles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-success/3 rounded-full blur-3xl" />
      </div>

      {/* Contenido principal - Subido desde arriba */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-32 pb-40">
        {/* Badge de estado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-accent-primary/10 border border-accent-primary/20 rounded-full mb-20"
        >
          <Sparkles className="w-5 h-5 text-accent-primary" />
          <span className="text-sm font-semibold text-accent-primary">Disponible para proyectos</span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 leading-tight"
        >
          <span className="block text-foreground mb-6">Hola, soy</span>
          <span className="block bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-success bg-clip-text text-transparent">
            Desarrollador
          </span>
        </motion.h1>

        {/* Subtítulo elegante */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-foreground-secondary mb-24 max-w-3xl mx-auto leading-relaxed"
        >
          Creo experiencias digitales excepcionales con tecnologías modernas y diseño centrado en el usuario
        </motion.p>

        {/* Características destacadas - Con mejor espaciado y animaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-6 mb-24"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 bg-background-secondary/40 rounded-2xl px-6 py-4 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center">
              <Star className="w-5 h-5 text-accent-primary" />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-foreground mb-1">Calidad Premium</h3>
              <p className="text-xs text-foreground-secondary">Código limpio</p>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 bg-background-secondary/40 rounded-2xl px-6 py-4 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-10 h-10 bg-accent-secondary/10 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-accent-secondary" />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-foreground mb-1">Rendimiento</h3>
              <p className="text-xs text-foreground-secondary">Aplicaciones rápidas</p>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 bg-background-secondary/40 rounded-2xl px-6 py-4 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-10 h-10 bg-accent-success/10 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-accent-success" />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-foreground mb-1">Enfoque UX</h3>
              <p className="text-xs text-foreground-secondary">Experiencias intuitivas</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Botones CTA mejorados - Con más espacio abajo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base"
          >
            Ver Proyectos
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-2 border-accent-success/30 text-accent-success hover:bg-accent-success/10 font-bold px-10 py-4 rounded-2xl transition-all duration-300 text-base"
          >
            Contactar
          </Button>
        </motion.div>

        {/* Indicador de scroll elegante - Ahora mucho más abajo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-sm text-foreground-secondary font-medium">Scroll</span>
            <ArrowDown className="w-6 h-6 text-accent-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}