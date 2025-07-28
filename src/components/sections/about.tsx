"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { timeline, personalInfo } from '@/lib/data';
import { 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  Download, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Star, 
  TrendingUp, 
  Users, 
  Code,
  Globe,
  Heart,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function About() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    // Simular descarga del CV
    const link = document.createElement('a');
    link.href = personalInfo.resume || '#';
    link.download = 'CV_TuNombre.pdf';
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="about" className="bg-background py-32">
      <div className="container-perfect">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header mejorado */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="center-perfect mb-20"
          >
            <div className="text-center w-full">
              <motion.h2 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
              >
                <span className="text-foreground">Sobre </span>
                <span className="gradient-text">Mí</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed"
              >
                Desarrollador frontend senior apasionado por crear experiencias digitales excepcionales
              </motion.p>
            </div>
          </motion.div>

          {/* Información personal y estadísticas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32"
          >
            {/* Columna izquierda - Información personal */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Avatar y nombre */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center shadow-xl relative overflow-hidden group"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10"
                  />
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center text-white text-4xl sm:text-5xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {personalInfo.name.charAt(0)}
                  </div>
                </motion.div>
                
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
                >
                  {personalInfo.name}
                </motion.h3>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg sm:text-xl text-accent-primary font-semibold mb-4"
                >
                  {personalInfo.title}
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-base sm:text-lg text-foreground-secondary leading-relaxed"
                >
                  {personalInfo.shortBio}
                </motion.p>
              </div>

              {/* Información de contacto */}
              <motion.div 
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent-primary" />
                  Información de Contacto
                </h4>
                
                <div className="space-y-3">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 text-foreground-secondary hover:text-foreground transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 text-accent-primary flex-shrink-0" />
                    <span>{personalInfo.email}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 text-foreground-secondary hover:text-foreground transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 text-accent-primary flex-shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 text-foreground-secondary hover:text-foreground transition-colors duration-300"
                  >
                    <MapPin className="w-4 h-4 text-accent-primary flex-shrink-0" />
                    <span>{personalInfo.location}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 text-foreground-secondary hover:text-foreground transition-colors duration-300"
                  >
                    <Globe className="w-4 h-4 text-accent-primary flex-shrink-0" />
                    <span>{personalInfo.availability}</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Botones de acción */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white px-6 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={() => handleScrollTo('contact')}
                  >
                    <Mail className="w-5 h-5" />
                    Contactar
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-accent-success text-accent-success hover:bg-accent-success/10 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={handleDownloadResume}
                  >
                    <Download className="w-5 h-5" />
                    Descargar CV
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Columna derecha - Estadísticas y habilidades destacadas */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Estadísticas destacadas */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                  className="bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 rounded-3xl p-6 border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-6 h-6 text-accent-primary" />
                  </motion.div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">4+</div>
                  <div className="text-sm text-foreground-secondary">Años de Experiencia</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05, y: -5, rotateY: -5 }}
                  className="bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 rounded-3xl p-6 border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code className="w-6 h-6 text-accent-secondary" />
                  </motion.div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">25+</div>
                  <div className="text-sm text-foreground-secondary">Proyectos Completados</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                  className="bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 rounded-3xl p-6 border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-accent-success/20 to-accent-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="w-6 h-6 text-accent-success" />
                  </motion.div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">100K+</div>
                  <div className="text-sm text-foreground-secondary">Usuarios Impactados</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5, rotateY: -5 }}
                  className="bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 rounded-3xl p-6 border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-accent-warning/20 to-accent-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="w-6 h-6 text-accent-warning" />
                  </motion.div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">15+</div>
                  <div className="text-sm text-foreground-secondary">Certificaciones</div>
                </motion.div>
              </div>

              {/* Habilidades destacadas */}
              <motion.div 
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent-primary" />
                  Habilidades Destacadas
                </h4>
                
                <div className="space-y-3">
                  {['React & Next.js', 'TypeScript', 'React Native', 'Node.js', 'UI/UX Design'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle className="w-4 h-4 text-accent-success flex-shrink-0" />
                      </motion.div>
                      <span className="text-foreground-secondary group-hover:text-foreground transition-colors duration-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Idiomas */}
              <motion.div 
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent-primary" />
                  Idiomas
                </h4>
                
                <div className="space-y-3">
                  {personalInfo.languages.map((language, index) => (
                    <motion.div
                      key={language}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Star className="w-4 h-4 text-accent-warning flex-shrink-0" />
                      </motion.div>
                      <span className="text-foreground-secondary group-hover:text-foreground transition-colors duration-300">{language}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Timeline de experiencia laboral */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            <motion.div 
              variants={itemVariants}
              className="center-perfect"
            >
              <div className="text-center w-full">
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Experiencia Laboral
                </h3>
                <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                  Mi trayectoria profesional en el desarrollo de software
                </p>
              </div>
            </motion.div>

            <div className="relative">
              {/* Línea de tiempo */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary to-accent-secondary origin-top"
              />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative pl-12 sm:pl-16"
                  >
                    {/* Punto de la línea de tiempo */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                      className="absolute left-2 sm:left-6 top-6 w-4 h-4 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full shadow-lg border-4 border-background"
                    />
                    
                    {/* Contenido del timeline */}
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <div className="flex items-center gap-4 mb-4 sm:mb-0">
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center shadow-lg"
                          >
                            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-accent-primary" />
                          </motion.div>
                          <div>
                            <h4 className="text-xl sm:text-2xl font-bold text-foreground">{item.title}</h4>
                            <p className="text-accent-primary font-semibold">{item.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-full">
                          <Calendar className="w-4 h-4 text-accent-primary" />
                          <span className="text-sm font-semibold text-accent-primary">{item.year}</span>
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-foreground-secondary leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Logros */}
                      {item.achievements && (
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-accent-success" />
                            Logros Principales
                          </h5>
                          <div className="space-y-2">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <motion.div 
                                key={achievementIndex} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle className="w-4 h-4 text-accent-success flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-foreground-secondary">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tecnologías */}
                      {item.technologies && (
                        <div>
                          <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Code className="w-5 h-5 text-accent-primary" />
                            Tecnologías Utilizadas
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="px-3 py-1 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 text-accent-primary border border-accent-primary/20 rounded-full text-sm font-medium hover:border-accent-primary/40 transition-all duration-300"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Intereses y pasiones */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <motion.div 
              variants={itemVariants}
              className="center-perfect mb-12"
            >
              <div className="text-center w-full">
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Intereses y Pasiones
                </h3>
                <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                  Áreas que me apasionan y en las que me mantengo actualizado
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {personalInfo.interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                  className="bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 rounded-3xl p-6 border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group cursor-pointer"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heart className="w-6 h-6 text-accent-primary" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-accent-primary transition-colors duration-300">{interest}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}