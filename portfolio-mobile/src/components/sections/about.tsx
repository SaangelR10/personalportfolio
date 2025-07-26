"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Calendar, Briefcase, Award, Clock, User, Code, Globe } from 'lucide-react';
import { personalInfo, timeline } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header limpio y elegante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Sobre </span>
            <span className="text-accent-primary">Mí</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Desarrollador frontend apasionado por crear experiencias digitales excepcionales
          </p>
        </motion.div>

        {/* Contenido principal organizado */}
        <div className="space-y-20">
          {/* Sección 1: Información personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Avatar y nombre */}
            <div className="mb-12">
              <div className="relative inline-block mb-8">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-success p-2">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="text-8xl font-bold text-accent-primary">
                      {personalInfo.name.charAt(0)}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent-success rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-6 h-6 bg-accent-success rounded-full animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">{personalInfo.name}</h3>
              <p className="text-xl text-accent-primary font-semibold mb-6">Desarrollador Frontend</p>
              <p className="text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
                Especializado en React, Next.js y aplicaciones móviles. Me enfoco en crear experiencias 
                digitales excepcionales con las últimas tecnologías web y móviles.
              </p>
            </div>

            {/* Información de contacto en grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-background/50 rounded-2xl p-6 border border-border-light">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Email</h4>
                <p className="text-foreground-secondary text-sm">{personalInfo.email}</p>
              </div>

              <div className="bg-background/50 rounded-2xl p-6 border border-border-light">
                <div className="w-12 h-12 bg-accent-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent-secondary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Ubicación</h4>
                <p className="text-foreground-secondary text-sm">{personalInfo.location}</p>
              </div>

              <div className="bg-background/50 rounded-2xl p-6 border border-border-light">
                <div className="w-12 h-12 bg-accent-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent-success" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Estado</h4>
                <p className="text-foreground-secondary text-sm">Disponible para proyectos</p>
              </div>
            </div>

            {/* Botón CV centrado */}
            <div className="mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-6 h-6 mr-3" />
                Descargar CV
              </Button>
            </div>
          </motion.div>

          {/* Sección 2: Experiencia profesional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Header de experiencia */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-accent-primary" />
                </div>
                <h3 className="text-4xl font-bold text-foreground">Experiencia</h3>
              </div>
              <p className="text-foreground-secondary text-lg">
                Mi trayectoria profesional en desarrollo web y móvil
              </p>
            </div>
            
            {/* Timeline horizontal para desktop, vertical para móvil */}
            <div className="hidden lg:block">
              {/* Timeline horizontal */}
              <div className="relative">
                {/* Línea de tiempo horizontal */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-success transform -translate-y-1/2" />
                
                <div className="grid grid-cols-4 gap-8 relative z-10">
                  {timeline.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      {/* Punto de la línea de tiempo */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary border-4 border-background shadow-lg flex items-center justify-center mx-auto mb-6">
                        <span className="text-sm font-bold text-white">{item.year}</span>
                      </div>
                      
                      {/* Contenido de la experiencia */}
                      <div className="bg-background/50 rounded-2xl p-6 border border-border-light">
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          {item.title}
                        </h4>
                        
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <Award className="w-4 h-4 text-accent-secondary" />
                          <p className="text-accent-secondary font-semibold text-sm">
                            {item.company}
                          </p>
                        </div>
                        
                        <p className="text-foreground-secondary text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        
                        {/* Tecnologías */}
                        {item.technologies && (
                          <div className="flex flex-wrap gap-1 justify-center">
                            {item.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs font-medium rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                            {item.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-medium rounded-lg">
                                +{item.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline vertical para móvil */}
            <div className="lg:hidden">
              <div className="space-y-8">
                {timeline.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Línea de tiempo vertical */}
                    {index < 3 && (
                      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary to-accent-secondary" />
                    )}
                    
                    <div className="flex items-start gap-6">
                      {/* Punto de la línea de tiempo */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary border-4 border-background shadow-lg flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{item.year}</span>
                        </div>
                      </div>
                      
                      {/* Contenido de la experiencia */}
                      <div className="flex-1 bg-background/50 rounded-2xl p-6 border border-border-light">
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          {item.title}
                        </h4>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="w-4 h-4 text-accent-secondary" />
                          <p className="text-accent-secondary font-semibold text-sm">
                            {item.company}
                          </p>
                        </div>
                        
                        <p className="text-foreground-secondary text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        
                        {/* Tecnologías */}
                        {item.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs font-medium rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                            {item.technologies.length > 3 && (
                              <span className="px-3 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-medium rounded-lg">
                                +{item.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sección 3: Estadísticas rápidas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-background/50 rounded-2xl p-6 border border-border-light">
                <div className="text-3xl font-bold text-accent-primary mb-2">3+</div>
                <div className="text-sm text-foreground-secondary">Años de Experiencia</div>
              </div>
              <div className="bg-background/50 rounded-2xl p-6 border border-border-light">
                <div className="text-3xl font-bold text-accent-secondary mb-2">20+</div>
                <div className="text-sm text-foreground-secondary">Proyectos Completados</div>
              </div>
              <div className="bg-background/50 rounded-2xl p-6 border border-border-light">
                <div className="text-3xl font-bold text-accent-success mb-2">15+</div>
                <div className="text-sm text-foreground-secondary">Tecnologías Dominadas</div>
              </div>
              <div className="bg-background/50 rounded-2xl p-6 border border-border-light">
                <div className="text-3xl font-bold text-accent-primary mb-2">100%</div>
                <div className="text-sm text-foreground-secondary">Satisfacción del Cliente</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}