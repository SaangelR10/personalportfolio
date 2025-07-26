"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, timeline } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="py-20 px-mobile-padding bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-mobile-3xl md:text-4xl font-heading font-bold mb-4">
            Sobre <span className="text-accent-blue">Mí</span>
          </h2>
          <p className="text-mobile-lg text-foreground-secondary max-w-2xl mx-auto">
            Conoce mi trayectoria profesional y pasión por el desarrollo de aplicaciones móviles y web
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda - Información personal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Avatar */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-blue to-accent-magenta p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-background-secondary flex items-center justify-center">
                      <span className="text-3xl font-heading font-bold text-accent-blue">
                        {personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-full" />
                </div>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground-secondary">
                <MapPin className="h-5 w-5 text-accent-blue flex-shrink-0" />
                <span className="text-mobile-base">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground-secondary">
                <Mail className="h-5 w-5 text-accent-blue flex-shrink-0" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-mobile-base hover:text-accent-blue transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground-secondary">
                <Calendar className="h-5 w-5 text-accent-blue flex-shrink-0" />
                <span className="text-mobile-base">4+ años de experiencia</span>
              </div>
            </div>

            {/* Biografía */}
            <div>
              <h3 className="text-mobile-xl font-heading font-semibold mb-4 text-foreground">
                Biografía
              </h3>
              <p className="text-mobile-base text-foreground-secondary leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Botón CV */}
            <Button
              variant="outline"
              size="lg"
              className="w-full lg:w-auto group"
              onClick={() => {
                window.open('/cv.pdf', '_blank');
              }}
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              <span>Descargar CV</span>
            </Button>
          </motion.div>

          {/* Columna derecha - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-mobile-xl font-heading font-semibold mb-6 text-foreground">
              Experiencia Profesional
            </h3>
            
            <div className="relative">
              {/* Línea de tiempo */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-4 mb-8 last:mb-0"
                >
                  {/* Punto de la línea de tiempo */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-background-secondary border-2 border-accent-blue flex items-center justify-center">
                      <span className="text-sm font-bold text-accent-blue">{item.year}</span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 bg-background rounded-lg p-4 border border-border hover:border-accent-blue/50 transition-colors">
                    <h4 className="text-mobile-lg font-heading font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    {item.company && (
                      <p className="text-accent-blue font-medium text-sm mb-2">
                        {item.company}
                      </p>
                    )}
                    <p className="text-mobile-base text-foreground-secondary leading-relaxed">
                      {item.description}
                    </p>
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