"use client";

import { motion } from 'framer-motion';
import { ArrowUp, Heart, Code, Linkedin, Github, Twitter, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
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
    <footer className="bg-gradient-to-br from-background-secondary/50 to-background-secondary/20 border-t border-border-light/50">
      <div className="container-desktop">
        <div className="max-w-7xl mx-auto py-20">
          {/* Contenido principal del footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            {/* Información del desarrollador */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-xl">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">Portfolio</h3>
                  <p className="text-accent-primary font-semibold">Desarrollador Full-Stack</p>
                </div>
              </div>
              <p className="text-foreground-secondary mb-8 leading-relaxed text-lg max-w-2xl">
                Desarrollador apasionado por crear experiencias digitales excepcionales. 
                Especializado en Next.js, React y aplicaciones móviles modernas con enfoque en la calidad y la innovación.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="group w-14 h-14 bg-gradient-to-br from-background/80 to-background/40 rounded-2xl border border-border-light/50 flex items-center justify-center hover:border-accent-primary/30 hover:bg-accent-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                  >
                    {social.name === 'LinkedIn' && <Linkedin className="w-6 h-6 text-accent-primary group-hover:scale-110 transition-transform duration-300" />}
                    {social.name === 'GitHub' && <Github className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />}
                    {social.name === 'Twitter' && <Twitter className="w-6 h-6 text-accent-secondary group-hover:scale-110 transition-transform duration-300" />}
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
              <h4 className="text-2xl font-bold text-foreground mb-8">Navegación</h4>
              <ul className="space-y-4">
                {navigationSections.map((section) => (
                  <li key={section.name}>
                    <motion.a
                      href={section.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-foreground-secondary hover:text-accent-primary transition-colors duration-300 text-lg font-medium flex items-center gap-2 group"
                    >
                      <span>{section.name}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
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
              <h4 className="text-2xl font-bold text-foreground mb-8">Contacto</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm">Email</p>
                    <p className="text-foreground font-medium">tu-email@ejemplo.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-secondary" />
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm">Teléfono</p>
                    <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-success/20 to-accent-success/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-success" />
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm">Ubicación</p>
                    <p className="text-foreground font-medium">Ciudad, País</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-border-light/50 pt-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 text-foreground-secondary text-lg"
              >
                <span>© 2025 Portfolio. Hecho con</span>
                <Heart className="w-6 h-6 text-accent-secondary fill-current animate-pulse" />
                <span>y Next.js</span>
              </motion.div>

              {/* Botón volver arriba */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              >
                <ArrowUp className="w-6 h-6" />
                Volver arriba
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}