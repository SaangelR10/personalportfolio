"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Calendar, User, Code, Award, Clock } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function About() {
  // Estadísticas con useMemo para evitar re-renders
  const stats = useMemo(() => [
    { value: 3, suffix: '+', label: 'Años de Experiencia', color: 'text-accent-primary' },
    { value: 20, suffix: '+', label: 'Proyectos Completados', color: 'text-accent-secondary' },
    { value: 15, suffix: '+', label: 'Tecnologías Dominadas', color: 'text-accent-success' },
    { value: 100, suffix: '%', label: 'Satisfacción', color: 'text-accent-primary' },
  ], []);

  // Estado para los contadores animados
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animación de contador usando setInterval
  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animar cada contador
            stats.forEach((stat, index) => {
              const duration = 1500; // 1.5 segundos
              const steps = 60; // 60 pasos
              const increment = stat.value / steps;
              const stepDuration = duration / steps;
              
              let currentCount = 0;
              const timer = setInterval(() => {
                currentCount += increment;
                if (currentCount >= stat.value) {
                  currentCount = stat.value;
                  clearInterval(timer);
                }
                
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.round(currentCount);
                  return newCounts;
                });
              }, stepDuration);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section id="about" className="bg-background-secondary py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header elegante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Sobre </span>
            <span className="text-accent-primary">Mí</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Desarrollador apasionado por crear experiencias digitales excepcionales
          </p>
        </motion.div>

        {/* Contenido principal */}
        <div className="space-y-16">
          {/* Información personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            {/* Avatar */}
            <div className="mb-10">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-success p-2">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-6xl font-bold text-accent-primary">
                      {personalInfo.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-success rounded-full border-2 border-background flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent-success rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-4">{personalInfo.name}</h3>
            <p className="text-xl text-accent-primary font-semibold mb-6">Desarrollador Frontend</p>
            <p className="text-foreground-secondary text-base leading-relaxed max-w-2xl mx-auto">
              Especializado en React, Next.js y aplicaciones móviles. Me enfoco en crear experiencias 
              digitales excepcionales con las últimas tecnologías web y móviles.
            </p>
          </motion.div>

          {/* Información de contacto - badges minimalistas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center px-2"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border-light text-foreground text-sm min-w-[180px]">
              <Mail className="w-5 h-5 text-accent-primary" />
              <span className="truncate">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border-light text-foreground text-sm min-w-[140px]">
              <MapPin className="w-5 h-5 text-accent-secondary" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border-light text-foreground text-sm min-w-[120px]">
              <Calendar className="w-5 h-5 text-accent-success" />
              <span>Disponible</span>
            </div>
          </motion.div>

          {/* Estadísticas animadas minimalistas */}
          <motion.div
            ref={sectionRef}
            id="about-exp"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center justify-center">
                <span className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-2`}>
                  {counts[i]}{stat.suffix}
                </span>
                <div className="text-base md:text-lg text-foreground-secondary text-center leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Experiencia rediseñada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                <span className="text-accent-primary">Experiencia</span>
              </h3>
              <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                Especializado en diferentes áreas del desarrollo digital
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4 max-w-sm md:max-w-2xl mx-auto px-8 md:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-accent-primary/8 to-accent-primary/3 rounded-xl p-4 border border-accent-primary/15 hover:border-accent-primary/30 transition-all duration-300 text-center w-full max-w-xs"
              >
                <div className="flex flex-col items-center gap-2 mb-3">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 bg-accent-primary/15 rounded-lg flex items-center justify-center"
                  >
                    <Code className="w-5 h-5 text-accent-primary" />
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Frontend Developer</h4>
                    <p className="text-xs text-accent-primary/80 font-medium">Especialista</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-xs font-medium rounded-md"
                  >
                    React
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-2 py-0.5 bg-purple-500/10 text-purple-500 text-xs font-medium rounded-md"
                  >
                    Next.js
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-2 py-0.5 bg-cyan-500/10 text-cyan-500 text-xs font-medium rounded-md"
                  >
                    TypeScript
                  </motion.span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-accent-secondary/8 to-accent-secondary/3 rounded-xl p-4 border border-accent-secondary/15 hover:border-accent-secondary/30 transition-all duration-300 text-center w-full max-w-xs"
              >
                <div className="flex flex-col items-center gap-2 mb-3">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 bg-accent-secondary/15 rounded-lg flex items-center justify-center"
                  >
                    <User className="w-5 h-5 text-accent-secondary" />
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">UI/UX Designer</h4>
                    <p className="text-xs text-accent-secondary/80 font-medium">Creativo</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-2 py-0.5 bg-pink-500/10 text-pink-500 text-xs font-medium rounded-md"
                  >
                    Figma
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-2 py-0.5 bg-orange-500/10 text-orange-500 text-xs font-medium rounded-md"
                  >
                    Adobe XD
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-2 py-0.5 bg-indigo-500/10 text-indigo-500 text-xs font-medium rounded-md"
                  >
                    Prototyping
                  </motion.span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-accent-success/8 to-accent-success/3 rounded-xl p-4 border border-accent-success/15 hover:border-accent-success/30 transition-all duration-300 text-center w-full max-w-xs"
              >
                <div className="flex flex-col items-center gap-2 mb-3">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 bg-accent-success/15 rounded-lg flex items-center justify-center"
                  >
                    <Clock className="w-5 h-5 text-accent-success" />
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Mobile Developer</h4>
                    <p className="text-xs text-accent-success/80 font-medium">Nativo</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-2 py-0.5 bg-teal-500/10 text-teal-500 text-xs font-medium rounded-md"
                  >
                    React Native
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-xs font-medium rounded-md"
                  >
                    Flutter
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Botón CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-6 h-6 mr-3" />
              Descargar CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}