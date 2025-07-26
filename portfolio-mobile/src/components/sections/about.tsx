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
            className="mt-32 px-4"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                <span className="text-accent-primary">Experiencia</span>
              </h3>
              <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                Especializado en diferentes áreas del desarrollo digital
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 rounded-2xl p-4 border border-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300 text-center md:text-left"
              >
                <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent-primary/20 rounded-xl flex items-center justify-center">
                    <Code className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-base font-bold text-foreground">Frontend Developer</h4>
                    <p className="text-xs text-accent-primary font-medium">Especialista</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  <span className="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs font-medium rounded-full">React</span>
                  <span className="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs font-medium rounded-full">Next.js</span>
                  <span className="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs font-medium rounded-full">TypeScript</span>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-accent-secondary/10 to-accent-secondary/5 rounded-2xl p-4 border border-accent-secondary/20 hover:border-accent-secondary/40 transition-all duration-300 text-center md:text-left"
              >
                <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent-secondary/20 rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-accent-secondary" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-base font-bold text-foreground">UI/UX Designer</h4>
                    <p className="text-xs text-accent-secondary font-medium">Creativo</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  <span className="px-2 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-medium rounded-full">Figma</span>
                  <span className="px-2 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-medium rounded-full">Adobe XD</span>
                  <span className="px-2 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-medium rounded-full">Prototyping</span>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-2xl p-4 border border-accent-success/20 hover:border-accent-success/40 transition-all duration-300 text-center md:text-left"
              >
                <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent-success/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-success" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-base font-bold text-foreground">Mobile Developer</h4>
                    <p className="text-xs text-accent-success font-medium">Nativo</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  <span className="px-2 py-1 bg-accent-success/10 text-accent-success text-xs font-medium rounded-full">React Native</span>
                  <span className="px-2 py-1 bg-accent-success/10 text-accent-success text-xs font-medium rounded-full">Flutter</span>
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