"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simular envío
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Contácta</span>
            <span className="text-accent-primary">me</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para colaborar en proyectos interesantes.
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h3>
              <p className="text-foreground-secondary mb-8">
                Estoy disponible para proyectos freelance y colaboraciones. 
                No dudes en contactarme para discutir tu proyecto.
              </p>
            </div>

            {/* Métodos de contacto */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-background-secondary/50 rounded-2xl border border-border-light">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email</h4>
                  <p className="text-foreground-secondary">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-background-secondary/50 rounded-2xl border border-border-light">
                <div className="w-12 h-12 bg-accent-secondary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Teléfono</h4>
                  <p className="text-foreground-secondary">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-background-secondary/50 rounded-2xl border border-border-light">
                <div className="w-12 h-12 bg-accent-success/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-success" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Ubicación</h4>
                  <p className="text-foreground-secondary">Ciudad, País</p>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 border border-border-light">
              <h4 className="font-bold text-foreground mb-4">Horarios de Disponibilidad</h4>
              <div className="space-y-2 text-sm text-foreground-secondary">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-background-secondary/50 rounded-2xl p-8 border border-border-light"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Envíame un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border-border-light focus:border-accent-primary"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border-border-light focus:border-accent-primary"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border-border-light focus:border-accent-primary"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-background border-border-light focus:border-accent-primary resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              {/* Estado del formulario */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-accent-success/10 border border-accent-success/20 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-accent-success" />
                  <span className="text-accent-success font-medium">¡Mensaje enviado con éxito!</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-accent-danger/10 border border-accent-danger/20 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-accent-danger" />
                  <span className="text-accent-danger font-medium">Error al enviar el mensaje</span>
                </motion.div>
              )}

              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </div>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}