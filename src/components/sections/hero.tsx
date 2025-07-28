"use client";

import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Star, Zap, Target, FolderOpen, Mail, Code, Smartphone, Palette, ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 40) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="home" className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden pt-20">
      {/* Fondo dinámico mejorado */}
      <div className="absolute inset-0">
        {/* Gradientes animados */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-success/3 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Elementos decorativos interactivos */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent-primary/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent-secondary/40 rounded-full"
          animate={{
            scale: [1, 2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent-success/50 rounded-full"
          animate={{
            scale: [1, 3, 1]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Cursor follower para desktop */}
        <motion.div
          className="hidden lg:block fixed w-6 h-6 bg-accent-primary/20 rounded-full pointer-events-none z-10"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="container-centered">
        <div className="w-full max-w-7xl mx-auto px-6 pt-20 pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Badge de estado mejorado */}
            <motion.div
              variants={itemVariants}
              className="center-perfect"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-full backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-accent-primary" />
                </motion.div>
                <span className="text-sm font-semibold text-accent-primary">Disponible para proyectos freelance</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronRight className="w-4 h-4 text-accent-primary" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Título principal rediseñado */}
            <motion.div
              variants={itemVariants}
              className="center-perfect"
            >
              <div className="text-center w-full">
                <motion.h1 
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.span 
                    className="block text-foreground mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Hola, soy
                  </motion.span>
                  <motion.span 
                    className="gradient-text block"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    Desarrollador
                  </motion.span>
                </motion.h1>
                
                {/* Subtítulo elegante */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed font-light"
                >
                  Creo experiencias digitales excepcionales con tecnologías modernas y diseño centrado en el usuario
                </motion.p>
              </div>
            </motion.div>

            {/* Características destacadas rediseñadas */}
            <motion.div
              variants={itemVariants}
              className="grid-perfect max-w-5xl mx-auto"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col items-center text-center gap-4 sm:gap-6">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code className="w-6 h-6 sm:w-8 sm:h-8 text-accent-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Código Limpio</h3>
                    <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">Desarrollo con las mejores prácticas y arquitecturas escalables</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -8, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col items-center text-center gap-4 sm:gap-6">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-accent-secondary" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Alto Rendimiento</h3>
                    <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">Aplicaciones optimizadas para velocidad y eficiencia</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col items-center text-center gap-4 sm:gap-6">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-success/20 to-accent-success/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-accent-success" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Diseño UX</h3>
                    <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">Experiencias intuitivas y centradas en el usuario</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Botones CTA mejorados */}
            <motion.div
              variants={itemVariants}
              className="center-perfect"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-2xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold px-6 sm:px-8 py-4 sm:py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-accent-primary/40 min-w-[200px] group"
                    onClick={() => handleScrollTo('projects')}
                  >
                    <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                    Ver Proyectos
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-accent-success/30 text-accent-success hover:bg-accent-success/10 font-bold px-6 sm:px-8 py-4 sm:py-6 rounded-2xl transition-all duration-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-accent-success/30 min-w-[200px] group"
                    onClick={() => handleScrollTo('contact')}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                    Contactar
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Botón de demo adicional */}
            <motion.div
              variants={itemVariants}
              className="center-perfect"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-warning/10 to-accent-warning/5 border border-accent-warning/20 rounded-2xl text-accent-warning hover:bg-accent-warning/20 transition-all duration-300 group"
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Ver Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll elegante */}
      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3 cursor-pointer"
            onClick={() => handleScrollTo('about')}
          >
            <span className="text-sm text-foreground-secondary font-medium">Scroll</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <ArrowDown className="w-6 h-6 text-accent-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}