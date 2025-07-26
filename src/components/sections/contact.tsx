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
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-foreground">Contácta</span>
            <span className="text-accent-primary">me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de contacto visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-background-secondary/30 rounded-2xl border border-border">
                  <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                    <p className="text-foreground-secondary">tu-email@ejemplo.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-background-secondary/30 rounded-2xl border border-border">
                  <div className="w-16 h-16 bg-accent-secondary/10 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-accent-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Teléfono</h4>
                    <p className="text-foreground-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-background-secondary/30 rounded-2xl border border-border">
                  <div className="w-16 h-16 bg-accent-success/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-accent-success" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Ubicación</h4>
                    <p className="text-foreground-secondary">Ciudad, País</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
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
                    className="w-14 h-14 bg-background-secondary/30 rounded-2xl border border-border flex items-center justify-center hover:border-accent-blue/30 hover:bg-accent-blue/10 transition-all duration-300"
                  >
                                         {social.name === 'LinkedIn' && <Linkedin className="w-7 h-7 text-accent-primary" />}
                     {social.name === 'GitHub' && <Github className="w-7 h-7 text-foreground" />}
                     {social.name === 'Twitter' && <Twitter className="w-7 h-7 text-accent-secondary" />}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Disponibilidad */}
                          <div className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-success/10 rounded-2xl p-8 border border-accent-primary/20">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Disponibilidad
                </h4>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-accent-success rounded-full animate-pulse" />
                  <span className="text-accent-success font-bold">
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
            <div className="bg-background-secondary/30 rounded-3xl p-10 border border-border">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Envíame un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-background rounded-2xl border border-border focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 text-foreground placeholder-foreground-secondary text-lg"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-background rounded-2xl border border-border focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 text-foreground placeholder-foreground-secondary text-lg"
                    placeholder="tu-email@ejemplo.com"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-3">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 bg-background rounded-2xl border border-border focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 text-foreground placeholder-foreground-secondary resize-none text-lg"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                {/* Botón de envío */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold py-6 rounded-2xl shadow-2xl hover:shadow-accent-primary/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Send className="w-6 h-6" />
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
                      className="flex items-center gap-4 p-6 bg-accent-green/10 border border-accent-green/20 rounded-2xl"
                    >
                                             <CheckCircle className="w-6 h-6 text-accent-success" />
                       <span className="text-accent-success font-bold">
                         ¡Mensaje enviado con éxito!
                       </span>
                     </motion.div>
                   )}
                   
                   {submitStatus === 'error' && (
                     <motion.div
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="flex items-center gap-4 p-6 bg-accent-danger/10 border border-accent-danger/20 rounded-2xl"
                     >
                       <AlertCircle className="w-6 h-6 text-accent-danger" />
                       <span className="text-accent-danger font-bold">
                         Error al enviar el mensaje
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