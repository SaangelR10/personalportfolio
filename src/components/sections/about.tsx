"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Calendar, Briefcase, Award, Clock } from 'lucide-react';
import { personalInfo, timeline } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header elegante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-foreground">Sobre </span>
            <span className="text-accent-primary">Mí</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Desarrollador apasionado por crear experiencias digitales excepcionales
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Columna izquierda - Información personal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Avatar y nombre */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-success p-2">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="text-9xl font-bold text-accent-primary">
                      {personalInfo.name.charAt(0)}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent-success rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-8 h-8 bg-accent-success rounded-full animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">{personalInfo.name}</h3>
              <p className="text-xl text-accent-primary font-semibold mb-6">Desarrollador Frontend</p>
            </div>

            {/* Información de contacto mejorada */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-background/50 rounded-2xl border border-border-light">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-accent-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                  <p className="text-foreground-secondary">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-background/50 rounded-2xl border border-border-light">
                <div className="w-16 h-16 bg-accent-secondary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-accent-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Ubicación</h4>
                  <p className="text-foreground-secondary">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-background/50 rounded-2xl border border-border-light">
                <div className="w-16 h-16 bg-accent-success/10 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-accent-success" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Estado</h4>
                  <p className="text-foreground-secondary">Disponible para proyectos</p>
                </div>
              </div>
            </div>

            {/* Botón CV */}
            <Button
              size="lg"
              className="w-full lg:w-auto bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-6 h-6 mr-3" />
              Descargar CV
            </Button>
          </motion.div>

          {/* Columna derecha - Experiencia profesional */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-accent-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground">Experiencia</h3>
                <p className="text-foreground-secondary">Mi trayectoria profesional</p>
              </div>
            </div>
            
            {/* Timeline mejorado */}
            <div className="relative">
              {/* Línea de tiempo vertical */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-success" />
              
              <div className="space-y-8">
                {timeline.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start gap-8"
                  >
                    {/* Punto de la línea de tiempo */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary border-4 border-background shadow-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{item.year}</span>
                      </div>
                    </div>
                    
                    {/* Contenido de la experiencia */}
                    <div className="flex-1 bg-background/50 rounded-2xl p-8 border border-border-light hover:border-accent-primary/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-2xl font-bold text-foreground group-hover:text-accent-primary transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-accent-primary">
                          <Clock className="w-5 h-5" />
                          <span className="text-sm font-semibold">{item.year}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-accent-secondary" />
                        <p className="text-accent-secondary font-semibold">
                          {item.company}
                        </p>
                      </div>
                      
                      <p className="text-foreground-secondary leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      {/* Tecnologías */}
                      {item.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-2 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-xl border border-accent-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {item.technologies.length > 4 && (
                            <span className="px-3 py-2 bg-accent-secondary/10 text-accent-secondary text-sm font-medium rounded-xl border border-accent-secondary/20">
                              +{item.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}