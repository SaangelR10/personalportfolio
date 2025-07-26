"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';
import { personalInfo, timeline } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Sobre </span>
            <span className="text-accent-blue">Mí</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Avatar grande y llamativo */}
            <div className="relative inline-block mb-12">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent-blue via-accent-magenta to-accent-green p-2">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="text-8xl font-bold text-accent-blue">
                    {personalInfo.name.charAt(0)}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent-green rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-6 h-6 bg-accent-green rounded-full animate-pulse" />
              </div>
            </div>

            {/* Información de contacto visual */}
            <div className="grid grid-cols-1 gap-6 mb-12">
              <div className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-background/50 rounded-2xl border border-border">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm text-foreground-secondary">Email</p>
                  <p className="font-medium text-foreground">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-background/50 rounded-2xl border border-border">
                <div className="w-12 h-12 bg-accent-magenta/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-magenta" />
                </div>
                <div>
                  <p className="text-sm text-foreground-secondary">Ubicación</p>
                  <p className="font-medium text-foreground">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-background/50 rounded-2xl border border-border">
                <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent-green" />
                </div>
                <div>
                  <p className="text-sm text-foreground-secondary">Estado</p>
                  <p className="font-medium text-foreground">Disponible</p>
                </div>
              </div>
            </div>

            {/* Botón CV */}
            <Button
              size="lg"
              className="w-full lg:w-auto bg-gradient-to-r from-accent-blue to-accent-magenta hover:from-accent-magenta hover:to-accent-blue text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar CV
            </Button>
          </motion.div>

          {/* Columna derecha - Timeline visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-foreground mb-8">Experiencia</h3>
            
            <div className="space-y-6">
              {timeline.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Línea de tiempo */}
                  {index < 2 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue to-accent-magenta" />
                  )}
                  
                  <div className="flex items-start gap-6">
                    {/* Punto de la línea */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-blue to-accent-magenta border-4 border-background shadow-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{item.year}</span>
                      </div>
                    </div>
                    
                    {/* Contenido */}
                    <div className="flex-1 bg-background/50 rounded-2xl p-6 border border-border hover:border-accent-blue/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h4>
                      </div>
                      
                      <p className="text-accent-blue font-medium mb-2">
                        {item.company}
                      </p>
                      
                      <p className="text-foreground-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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