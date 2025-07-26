"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,221,235,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,122,0.05),transparent_50%)]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Badge de disponibilidad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-8"
        >
          <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
          <span className="text-sm font-medium text-accent-blue">Disponible para proyectos</span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          <span className="block text-foreground">Desarrollador</span>
          <span className="block bg-gradient-to-r from-accent-blue via-accent-magenta to-accent-green bg-clip-text text-transparent">
            Frontend
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-foreground-secondary mb-8 leading-relaxed"
        >
          Creo experiencias digitales excepcionales con tecnologías modernas. 
          Especializado en aplicaciones móviles y web de alto rendimiento.
        </motion.p>

        {/* Botones CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-accent-blue to-accent-magenta hover:from-accent-magenta hover:to-accent-blue text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver Proyectos
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-2 border-accent-green/30 text-accent-green hover:bg-accent-green/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Descargar CV
          </Button>
        </motion.div>

        {/* Estadísticas rápidas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-6 mb-12"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-blue mb-1">3+</div>
            <div className="text-sm text-foreground-secondary">Años Exp.</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-magenta mb-1">20+</div>
            <div className="text-sm text-foreground-secondary">Proyectos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-green mb-1">15+</div>
            <div className="text-sm text-foreground-secondary">Tecnologías</div>
          </div>
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
            <ChevronDown className="w-6 h-6 text-accent-blue" />
          </motion.div>
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 right-4 w-32 h-32 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-4 w-24 h-24 bg-accent-magenta/5 rounded-full blur-3xl" />
    </section>
  );
}