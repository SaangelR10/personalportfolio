"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, Twitter } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simular éxito
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Resetear formulario
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 px-4 bg-background">
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
            <span className="text-foreground">Contácta</span>
            <span className="text-accent-blue">me</span>
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él! 
            Estoy disponible para colaboraciones y oportunidades emocionantes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-background-secondary/50 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-foreground-secondary">tu-email@ejemplo.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background-secondary/50 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent-magenta/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-magenta" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Teléfono</h4>
                    <p className="text-foreground-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background-secondary/50 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ubicación</h4>
                    <p className="text-foreground-secondary">Ciudad, País</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Sígueme en Redes
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-background-secondary/50 rounded-xl border border-border flex items-center justify-center hover:border-accent-blue/30 hover:bg-accent-blue/10 transition-all duration-300"
                  >
                    {social.name === 'LinkedIn' && <Linkedin className="w-6 h-6 text-accent-blue" />}
                    {social.name === 'GitHub' && <Github className="w-6 h-6 text-foreground" />}
                    {social.name === 'Twitter' && <Twitter className="w-6 h-6 text-accent-magenta" />}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="bg-gradient-to-r from-accent-blue/10 via-accent-magenta/10 to-accent-green/10 rounded-2xl p-6 border border-accent-blue/20">
              <h4 className="font-semibold text-foreground mb-2">
                Disponibilidad
              </h4>
              <p className="text-foreground-secondary text-sm mb-4">
                Actualmente disponible para nuevos proyectos y colaboraciones.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                <span className="text-sm text-accent-green font-medium">
                  Disponible para proyectos
                </span>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-background-secondary/50 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Envíame un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 text-foreground placeholder-foreground-secondary"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 text-foreground placeholder-foreground-secondary"
                    placeholder="tu-email@ejemplo.com"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 text-foreground placeholder-foreground-secondary resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                {/* Botón de envío */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent-blue to-accent-magenta hover:from-accent-magenta hover:to-accent-blue text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </div>
                  )}
                </Button>

                {/* Mensaje de estado */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 p-4 bg-accent-green/10 border border-accent-green/20 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-green" />
                      <span className="text-sm text-accent-green">
                        ¡Mensaje enviado con éxito! Te responderé pronto.
                      </span>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 p-4 bg-accent-magenta/10 border border-accent-magenta/20 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 text-accent-magenta" />
                      <span className="text-sm text-accent-magenta">
                        Error al enviar el mensaje. Inténtalo de nuevo.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}