"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Calendar, User, Code, Award, Clock } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="bg-background-secondary py-24 px-6">
      <div className="max-w-6xl mx-auto">
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

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda - Información personal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Avatar y nombre */}
            <div className="mb-12">
              <div className="relative inline-block mb-8">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-success p-2">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-8xl font-bold text-accent-primary">
                      {personalInfo.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent-success rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-8 h-8 bg-accent-success rounded-full animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-foreground mb-4">{personalInfo.name}</h3>
              <p className="text-2xl text-accent-primary font-semibold mb-6">Desarrollador Frontend</p>
              <p className="text-foreground-secondary text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Especializado en React, Next.js y aplicaciones móviles. Me enfoco en crear experiencias 
                digitales excepcionales con las últimas tecnologías web y móviles.
              </p>
            </div>

            {/* Información de contacto mejorada */}
            <div className="space-y-6 mb-12">
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

          {/* Columna derecha - Estadísticas y experiencia */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
                <div className="text-3xl font-bold text-accent-primary mb-2">3+</div>
                <div className="text-sm text-foreground-secondary">Años de Experiencia</div>
              </div>
              <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
                <div className="text-3xl font-bold text-accent-secondary mb-2">20+</div>
                <div className="text-sm text-foreground-secondary">Proyectos Completados</div>
              </div>
              <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
                <div className="text-3xl font-bold text-accent-success mb-2">15+</div>
                <div className="text-sm text-foreground-secondary">Tecnologías Dominadas</div>
              </div>
              <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
                <div className="text-3xl font-bold text-accent-primary mb-2">100%</div>
                <div className="text-sm text-foreground-secondary">Satisfacción del Cliente</div>
              </div>
            </div>

            {/* Experiencia resumida */}
            <div className="bg-background/50 rounded-2xl p-8 border border-border-light">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Experiencia</h3>
              </div>
              
              <div className="space-y-4">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}