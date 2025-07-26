"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Calendar, User, Code, Award, Clock, CheckCircle } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="bg-background-secondary py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header elegante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
        <div className="space-y-12">
          {/* Información personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            {/* Avatar */}
            <div className="mb-8">
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
            
            <h3 className="text-3xl font-bold text-foreground mb-3">{personalInfo.name}</h3>
            <p className="text-xl text-accent-primary font-semibold mb-6">Desarrollador Frontend</p>
            <p className="text-foreground-secondary text-base leading-relaxed max-w-lg mx-auto mb-8">
              Especializado en React, Next.js y aplicaciones móviles. Me enfoco en crear experiencias 
              digitales excepcionales con las últimas tecnologías web y móviles.
            </p>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Email</h4>
              <p className="text-sm text-foreground-secondary">{personalInfo.email}</p>
            </div>

            <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent-secondary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Ubicación</h4>
              <p className="text-sm text-foreground-secondary">{personalInfo.location}</p>
            </div>

            <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
              <div className="w-12 h-12 bg-accent-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-accent-success" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Estado</h4>
              <p className="text-sm text-foreground-secondary">Disponible</p>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
              <div className="text-2xl font-bold text-accent-primary mb-2">3+</div>
              <div className="text-sm text-foreground-secondary">Años de Experiencia</div>
            </div>
            <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
              <div className="text-2xl font-bold text-accent-secondary mb-2">20+</div>
              <div className="text-sm text-foreground-secondary">Proyectos Completados</div>
            </div>
            <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
              <div className="text-2xl font-bold text-accent-success mb-2">15+</div>
              <div className="text-sm text-foreground-secondary">Tecnologías Dominadas</div>
            </div>
            <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
              <div className="text-2xl font-bold text-accent-primary mb-2">100%</div>
              <div className="text-sm text-foreground-secondary">Satisfacción</div>
            </div>
          </motion.div>

          {/* Experiencia resumida */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-background/50 rounded-2xl p-8 border border-border-light"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-accent-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Experiencia</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background-secondary/30 rounded-xl">
                <div className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-accent-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Frontend Developer</h4>
                  <p className="text-sm text-foreground-secondary">React, Next.js, TypeScript</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background-secondary/30 rounded-xl">
                <div className="w-8 h-8 bg-accent-secondary/10 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-accent-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">UI/UX Designer</h4>
                  <p className="text-sm text-foreground-secondary">Figma, Adobe XD, Prototyping</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background-secondary/30 rounded-xl">
                <div className="w-8 h-8 bg-accent-success/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-accent-success" />
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
              className="bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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