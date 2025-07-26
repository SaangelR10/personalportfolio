"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Calendar, User, Code, Award, Clock } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function About() {
  // Estadísticas
  const stats = [
    { value: 3, suffix: '+', label: 'Años de Experiencia', color: 'text-accent-primary' },
    { value: 20, suffix: '+', label: 'Proyectos Completados', color: 'text-accent-secondary' },
    { value: 15, suffix: '+', label: 'Tecnologías Dominadas', color: 'text-accent-success' },
    { value: 100, suffix: '%', label: 'Satisfacción', color: 'text-accent-primary' },
  ];

  // Animaciones de contador para cada estadística
  const [counts, setCounts] = useState(stats.map(() => 0));
  const controlsArrRef = useRef(stats.map(() => useAnimation()));
  const hasAnimated = useRef(false);

  useEffect(() => {
    function handleScroll() {
      const section = document.getElementById('about-exp');
      if (section && !hasAnimated.current) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          stats.forEach((stat, i) => {
            controlsArrRef.current[i].start({ count: stat.value });
          });
          hasAnimated.current = true;
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stats]);

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
            id="about-exp"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center justify-center">
                <motion.span
                  initial={{ count: 0 }}
                  animate={controlsArrRef.current[i]}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  onUpdate={latest => setCounts(prev => {
                    const arr = [...prev];
                    arr[i] = Math.round(latest.count);
                    return arr;
                  })}
                  className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-2`}
                >
                  {counts[i]}{stat.suffix}
                </motion.span>
                <div className="text-base md:text-lg text-foreground-secondary text-center leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Experiencia resumida (sin cambios por ahora) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-background/50 rounded-2xl p-8 border border-border-light"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experiencia</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 bg-background-secondary/30 rounded-xl">
                <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Frontend Developer</h4>
                  <p className="text-sm text-foreground-secondary">React, Next.js, TypeScript</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background-secondary/30 rounded-xl">
                <div className="w-10 h-10 bg-accent-secondary/10 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">UI/UX Designer</h4>
                  <p className="text-sm text-foreground-secondary">Figma, Adobe XD, Prototyping</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background-secondary/30 rounded-xl">
                <div className="w-10 h-10 bg-accent-success/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent-success" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Mobile Developer</h4>
                  <p className="text-sm text-foreground-secondary">React Native, Flutter</p>
                </div>
              </div>
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