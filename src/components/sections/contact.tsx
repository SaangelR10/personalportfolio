"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { personalInfo, socialLinks } from '@/lib/data';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  MessageSquare, 
  Globe, 
  Linkedin, 
  Github, 
  Twitter, 
  ExternalLink,
  Download,
  Calendar,
  Zap,
  Star
} from 'lucide-react';

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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume || '#';
    link.download = `CV_${personalInfo.name.replace(' ', '_')}.pdf`;
    link.click();
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'linkedin': return Linkedin;
      case 'github': return Github;
      case 'twitter': return Twitter;
      default: return ExternalLink;
    }
  };

  return (
    <section id="contact" className="bg-background-secondary py-32">
      <div className="container-perfect">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header mejorado */}
          <div className="center-perfect mb-20">
            <div className="text-center w-full">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                <span className="text-foreground">Contácta</span>
                <span className="gradient-text">me</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
                ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para colaborar en proyectos interesantes y crear experiencias digitales excepcionales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Información de Contacto</h3>
                <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed">
                  Estoy disponible para proyectos freelance y colaboraciones. 
                  No dudes en contactarme para discutir tu proyecto y cómo puedo ayudarte a hacerlo realidad.
                </p>
              </div>

              {/* Métodos de contacto mejorados */}
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-br from-background/80 to-background/40 rounded-3xl border border-border-light/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Email</h4>
                    <p className="text-foreground-secondary text-base sm:text-lg">{personalInfo.email}</p>
                    <p className="text-sm text-foreground-secondary mt-1">Respuesta en 24 horas</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-br from-background/80 to-background/40 rounded-3xl border border-border-light/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-accent-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Teléfono</h4>
                    <p className="text-foreground-secondary text-base sm:text-lg">{personalInfo.phone}</p>
                    <p className="text-sm text-foreground-secondary mt-1">Llamadas y WhatsApp</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-br from-background/80 to-background/40 rounded-3xl border border-border-light/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-success/20 to-accent-success/10 rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-accent-success" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Ubicación</h4>
                    <p className="text-foreground-secondary text-base sm:text-lg">{personalInfo.location}</p>
                    <p className="text-sm text-foreground-secondary mt-1">Trabajo remoto disponible</p>
                  </div>
                </motion.div>
              </div>

              {/* Redes sociales */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent-primary" />
                  Redes Sociales
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    const SocialIcon = getSocialIcon(social.name);
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex items-center gap-3 p-4 bg-gradient-to-br from-background/80 to-background/40 rounded-2xl border border-border-light/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-xl flex items-center justify-center">
                          <SocialIcon className="w-4 h-4 text-accent-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{social.name}</p>
                          <p className="text-xs text-foreground-secondary">{social.username}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Horarios mejorados */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-warning/20 to-accent-warning/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-warning" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground">Horarios de Disponibilidad</h4>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-foreground-secondary">
                  <div className="flex justify-between items-center py-2 border-b border-border-light/30">
                    <span className="font-medium">Lunes - Viernes</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-light/30">
                    <span className="font-medium">Sábados</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Domingos</span>
                    <span className="text-accent-danger">Cerrado</span>
                  </div>
                </div>
              </motion.div>

              {/* Botón descargar CV */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  onClick={handleDownloadResume}
                  className="w-full bg-gradient-to-r from-accent-success to-accent-success/80 hover:from-accent-success/90 hover:to-accent-success text-white font-semibold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Descargar CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Formulario mejorado */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 sm:p-8 lg:p-10 border border-border-light/50 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Envíame un Mensaje</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-foreground mb-3">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/80 border-border-light focus:border-accent-primary h-12 sm:h-14 text-sm sm:text-base rounded-2xl"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-foreground mb-3">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/80 border-border-light focus:border-accent-primary h-12 sm:h-14 text-sm sm:text-base rounded-2xl"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm sm:text-base font-semibold text-foreground mb-3">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/80 border-border-light focus:border-accent-primary h-12 sm:h-14 text-sm sm:text-base rounded-2xl"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-semibold text-foreground mb-3">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-background/80 border-border-light focus:border-accent-primary resize-none text-sm sm:text-base rounded-2xl"
                    placeholder="Cuéntame sobre tu proyecto, objetivos y cómo puedo ayudarte a alcanzarlos..."
                  />
                </div>

                {/* Estado del formulario */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-4 p-4 sm:p-6 bg-gradient-to-r from-accent-success/10 to-accent-success/5 border border-accent-success/20 rounded-2xl"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent-success" />
                    <div>
                      <span className="text-accent-success font-semibold text-base sm:text-lg">¡Mensaje enviado con éxito!</span>
                      <p className="text-accent-success/80 text-sm">Te responderé en las próximas 24 horas.</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-4 p-4 sm:p-6 bg-gradient-to-r from-accent-danger/10 to-accent-danger/5 border border-accent-danger/20 rounded-2xl"
                  >
                    <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent-danger" />
                    <div>
                      <span className="text-accent-danger font-semibold text-base sm:text-lg">Error al enviar el mensaje</span>
                      <p className="text-accent-danger/80 text-sm">Por favor, intenta nuevamente.</p>
                    </div>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-bold py-4 sm:py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
                >
                  {status === 'loading' ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando mensaje...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>Enviar Mensaje</span>
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 border border-border-light/50 backdrop-blur-sm shadow-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Respuesta Rápida</h4>
              <p className="text-sm text-foreground-secondary">Te respondo en menos de 24 horas</p>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 border border-border-light/50 backdrop-blur-sm shadow-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-success/20 to-accent-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-accent-success" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Calidad Garantizada</h4>
              <p className="text-sm text-foreground-secondary">Código limpio y documentado</p>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 border border-border-light/50 backdrop-blur-sm shadow-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-accent-secondary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Flexibilidad Total</h4>
              <p className="text-sm text-foreground-secondary">Adaptable a tus horarios</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}