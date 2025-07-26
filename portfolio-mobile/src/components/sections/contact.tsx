"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, socialLinks } from '@/lib/data';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí se integraría con Supabase, EmailJS o similar
      console.log('Formulario enviado:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="h-6 w-6" />;
      case 'github':
        return <Github className="h-6 w-6" />;
      case 'twitter':
        return <Twitter className="h-6 w-6" />;
      default:
        return <ExternalLink className="h-6 w-6" />;
    }
  };

  return (
    <section id="contact" className="py-20 px-mobile-padding bg-background">
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
            <span className="text-accent-blue">Contacto</span>
          </h2>
          <p className="text-mobile-lg text-foreground-secondary max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para colaboraciones y oportunidades
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-mobile-2xl font-heading font-semibold text-foreground mb-6">
                Información de Contacto
              </h3>
              <p className="text-mobile-base text-foreground-secondary mb-8 leading-relaxed">
                No dudes en contactarme para discutir proyectos, colaboraciones o cualquier consulta relacionada con desarrollo web y móvil.
              </p>
            </div>

            {/* Detalles de contacto */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background-secondary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent-blue" />
                </div>
                <div>
                  <h4 className="text-mobile-lg font-heading font-semibold text-foreground mb-1">
                    Email
                  </h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-mobile-base text-foreground-secondary hover:text-accent-blue transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background-secondary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent-magenta" />
                </div>
                <div>
                  <h4 className="text-mobile-lg font-heading font-semibold text-foreground mb-1">
                    Ubicación
                  </h4>
                  <p className="text-mobile-base text-foreground-secondary">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background-secondary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent-green" />
                </div>
                <div>
                  <h4 className="text-mobile-lg font-heading font-semibold text-foreground mb-1">
                    Disponibilidad
                  </h4>
                  <p className="text-mobile-base text-foreground-secondary">
                    Disponible para proyectos freelance
                  </p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="text-mobile-lg font-heading font-semibold text-foreground mb-4">
                Sígueme en redes sociales
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-background-secondary rounded-lg flex items-center justify-center text-foreground-secondary hover:text-accent-blue hover:bg-background-secondary/80 transition-all duration-200"
                    aria-label={`Visitar ${social.name}`}
                  >
                    {getSocialIcon(social.name)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-background-secondary rounded-xl p-6 border border-border">
              <h3 className="text-mobile-2xl font-heading font-semibold text-foreground mb-6">
                Envíame un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-mobile-base font-medium text-foreground mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-mobile-base text-foreground placeholder-foreground-secondary focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-mobile-base font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-mobile-base text-foreground placeholder-foreground-secondary focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                    placeholder="tu-email@ejemplo.com"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-mobile-base font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-mobile-base text-foreground placeholder-foreground-secondary focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                {/* Botón de envío */}
                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                </Button>

                {/* Mensajes de estado */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-accent-green/10 border border-accent-green/20 rounded-lg"
                  >
                    <p className="text-sm text-accent-green font-medium">
                      ¡Mensaje enviado con éxito! Te responderé pronto.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-accent-magenta/10 border border-accent-magenta/20 rounded-lg"
                  >
                    <p className="text-sm text-accent-magenta font-medium">
                      Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}