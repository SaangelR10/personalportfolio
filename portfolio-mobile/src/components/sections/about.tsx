"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';
import { personalInfo, timeline } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-background-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Sobre </span>
            <span className="text-accent-blue">Mí</span>
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Desarrollador apasionado por crear experiencias digitales excepcionales 
            con las últimas tecnologías web y móviles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda - Información personal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Avatar y información básica */}
            <div className="text-center lg:text-left">
              {/* Avatar */}
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-blue via-accent-magenta to-accent-green p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="text-4xl font-bold text-accent-blue">
                      {personalInfo.name.charAt(0)}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-green rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                </div>
              </div>

              {/* Información de contacto */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-3 text-foreground-secondary">
                  <Mail className="w-5 h-5 text-accent-blue" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-foreground-secondary">
                  <MapPin className="w-5 h-5 text-accent-magenta" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-foreground-secondary">
                  <Calendar className="w-5 h-5 text-accent-green" />
                  <span className="text-sm">Disponible para proyectos</span>
                </div>
              </div>

              {/* Botón CV */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent-blue to-accent-magenta hover:from-accent-magenta hover:to-accent-blue text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar CV
              </Button>
            </div>

            {/* Biografía */}
            <div className="bg-background/50 rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Biografía</h3>
              <p className="text-foreground-secondary leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>
          </motion.div>

          {/* Columna derecha - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Experiencia</h3>
            
            <div className="relative">
              {/* Línea de tiempo */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-magenta to-accent-green" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start mb-8 last:mb-0"
                >
                  {/* Punto de la línea de tiempo */}
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-magenta border-4 border-background shadow-lg" />
                  
                  {/* Contenido */}
                  <div className="ml-12 bg-background/50 rounded-xl p-6 border border-border hover:border-accent-blue/30 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-accent-blue transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-sm text-accent-blue font-medium bg-accent-blue/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    
                    <p className="text-foreground-secondary mb-3">
                      {item.company}
                    </p>
                    
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Tecnologías */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-background-secondary/50 text-foreground-secondary px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}