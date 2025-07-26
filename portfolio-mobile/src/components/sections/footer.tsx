"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUp, Heart, Code, Linkedin, Github, Twitter } from 'lucide-react';
import { socialLinks } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationSections = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="bg-background-secondary/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Información del desarrollador */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-magenta flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Portfolio</h3>
            </div>
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              Desarrollador frontend apasionado por crear experiencias digitales excepcionales. 
              Especializado en Next.js, React y aplicaciones móviles modernas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-background/50 rounded-xl border border-border flex items-center justify-center hover:border-accent-blue/30 hover:bg-accent-blue/10 transition-all duration-300"
                >
                  {social.name === 'LinkedIn' && <Linkedin className="w-5 h-5 text-accent-blue" />}
                  {social.name === 'GitHub' && <Github className="w-5 h-5 text-foreground" />}
                  {social.name === 'Twitter' && <Twitter className="w-5 h-5 text-accent-magenta" />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navegación rápida */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-3">
              {navigationSections.map((section) => (
                <li key={section.name}>
                  <a
                    href={section.href}
                    className="text-foreground-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <p className="text-foreground-secondary">
                <span className="text-accent-blue">Email:</span><br />
                tu-email@ejemplo.com
              </p>
              <p className="text-foreground-secondary">
                <span className="text-accent-magenta">Ubicación:</span><br />
                Ciudad, País
              </p>
              <p className="text-foreground-secondary">
                <span className="text-accent-green">Disponibilidad:</span><br />
                Abierto a proyectos
              </p>
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <div className="border-t border-border my-8" />

        {/* Footer inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright y slogan */}
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground-secondary mb-2">
              © 2025 Portfolio. Todos los derechos reservados.
            </p>
            <p className="text-sm text-foreground-secondary flex items-center justify-center md:justify-start gap-2">
              Hecho con <Heart className="w-4 h-4 text-accent-magenta fill-current" /> 
              y mucho <Code className="w-4 h-4 text-accent-blue" />
            </p>
          </div>

          {/* Botón volver arriba */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-accent-blue/30 text-accent-blue hover:bg-accent-blue/10 hover:border-accent-blue transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Volver arriba
          </Button>
        </motion.div>

        {/* Mensaje adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-accent-blue/10 via-accent-magenta/10 to-accent-green/10 rounded-2xl p-6 border border-accent-blue/20">
            <p className="text-sm text-foreground-secondary">
              ¿Tienes un proyecto interesante? ¡Me encantaría colaborar contigo! 
              Siempre estoy buscando nuevos desafíos y oportunidades para crear algo increíble.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}