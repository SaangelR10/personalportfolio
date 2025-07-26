"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="bg-background-secondary flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center py-16 px-4 rounded-3xl shadow-xl bg-background-secondary/80">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-success p-2 mx-auto">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-7xl font-bold text-accent-primary">
                {personalInfo.name.charAt(0)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Nombre y título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold text-foreground mb-2"
        >
          {personalInfo.name}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-accent-primary font-semibold mb-6"
        >
          Desarrollador Frontend
        </motion.p>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-foreground-secondary mb-10 max-w-md mx-auto"
        >
          Apasionado por crear experiencias digitales excepcionales con React, Next.js y tecnologías modernas. Busco siempre la excelencia y el detalle en cada proyecto.
        </motion.p>

        {/* Datos de contacto */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full mb-10">
          <div className="flex items-center gap-3 bg-background/60 rounded-xl px-5 py-3 border border-border">
            <Mail className="w-5 h-5 text-accent-primary" />
            <span className="text-foreground-secondary text-sm">{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-3 bg-background/60 rounded-xl px-5 py-3 border border-border">
            <MapPin className="w-5 h-5 text-accent-secondary" />
            <span className="text-foreground-secondary text-sm">{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-3 bg-background/60 rounded-xl px-5 py-3 border border-border">
            <Calendar className="w-5 h-5 text-accent-success" />
            <span className="text-foreground-secondary text-sm">Disponible</span>
          </div>
        </div>

        {/* Botón CV */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Download className="w-6 h-6 mr-3" />
          Descargar CV
        </Button>
      </div>
    </section>
  );
}