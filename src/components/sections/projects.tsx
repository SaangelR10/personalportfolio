"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter, Star, Eye, Code2, TrendingUp, Users, Download, Award, Calendar, Clock, ChevronRight, Play } from 'lucide-react';
import { projects } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Todos', 'Frontend', 'Backend', 'Full-Stack', 'Mobile'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return projects;
    return projects.filter(project => project.category === activeCategory.toLowerCase());
  }, [activeCategory]);

  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured);
  }, []);

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
    <section id="projects" className="bg-background py-32">
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
                <span className="text-foreground">Mis </span>
                <span className="gradient-text">Proyectos</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed"
              >
                Una selección de proyectos que demuestran mi experiencia en desarrollo web y móvil
              </motion.p>
            </div>
          </motion.div>

          {/* Proyectos destacados */}
          {featuredProjects.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-20"
            >
              <motion.div 
                variants={itemVariants}
                className="center-perfect mb-12"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-full"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="w-5 h-5 text-accent-primary" />
                  </motion.div>
                  <span className="text-sm font-semibold text-accent-primary">Proyectos Destacados</span>
                </motion.div>
              </motion.div>
              
              <div className="grid-projects">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                    }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="group bg-gradient-to-br from-background-secondary/90 to-background-secondary/70 rounded-3xl border border-accent-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm relative"
                  >
                    {/* Badge destacado */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="absolute top-4 right-4 z-10"
                    >
                      <div className="px-3 py-1 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs font-bold rounded-full shadow-lg">
                        Destacado
                      </div>
                    </motion.div>

                    {/* Header del proyecto */}
                    <div className="p-6 sm:p-8 border-b border-border-light/30">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <motion.div 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                        >
                          <span className="text-2xl sm:text-3xl font-bold text-white">
                            {project.title.charAt(0)}
                          </span>
                        </motion.div>
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className="text-xs sm:text-sm bg-gradient-to-r from-accent-success/20 to-accent-success/10 text-accent-success px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold border border-accent-success/20"
                        >
                          {project.category}
                        </motion.span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-accent-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Estadísticas */}
                    {project.stats && (
                      <div className="p-6 sm:p-8 border-b border-border-light/30">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                          Estadísticas
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                          {project.stats.downloads && (
                            <motion.div 
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="text-center p-3 bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 rounded-xl border border-accent-primary/20"
                            >
                              <Download className="w-4 h-4 text-accent-primary mx-auto mb-1" />
                              <div className="text-xs sm:text-sm font-bold text-foreground">{project.stats.downloads}</div>
                              <div className="text-xs text-foreground-secondary">Descargas</div>
                            </motion.div>
                          )}
                          {project.stats.users && (
                            <motion.div 
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="text-center p-3 bg-gradient-to-br from-accent-secondary/10 to-accent-secondary/5 rounded-xl border border-accent-secondary/20"
                            >
                              <Users className="w-4 h-4 text-accent-secondary mx-auto mb-1" />
                              <div className="text-xs sm:text-sm font-bold text-foreground">{project.stats.users}</div>
                              <div className="text-xs text-foreground-secondary">Usuarios</div>
                            </motion.div>
                          )}
                          {project.stats.rating && (
                            <motion.div 
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="text-center p-3 bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-xl border border-accent-success/20"
                            >
                              <Star className="w-4 h-4 text-accent-success mx-auto mb-1" />
                              <div className="text-xs sm:text-sm font-bold text-foreground">{project.stats.rating}</div>
                              <div className="text-xs text-foreground-secondary">Rating</div>
                            </motion.div>
                          )}
                          {project.stats.performance && (
                            <motion.div 
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="text-center p-3 bg-gradient-to-br from-accent-warning/10 to-accent-warning/5 rounded-xl border border-accent-warning/20"
                            >
                              <TrendingUp className="w-4 h-4 text-accent-warning mx-auto mb-1" />
                              <div className="text-xs sm:text-sm font-bold text-foreground">{project.stats.performance}</div>
                              <div className="text-xs text-foreground-secondary">Performance</div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="p-6 sm:p-8 border-b border-border-light/30">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                          Características Principales
                        </h4>
                        <div className="space-y-2">
                          {project.highlights.slice(0, 3).map((highlight, index) => (
                            <motion.div 
                              key={index} 
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <motion.div 
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                                className="w-2 h-2 bg-accent-primary rounded-full flex-shrink-0"
                              />
                              <span className="text-sm text-foreground-secondary">{highlight}</span>
                            </motion.div>
                          ))}
                          {project.highlights.length > 3 && (
                            <motion.div 
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-2 h-2 bg-accent-secondary rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-foreground-secondary">
                                +{project.highlights.length - 3} características más
                              </span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Tecnologías */}
                    <div className="p-6 sm:p-8 border-b border-border-light/30">
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 text-accent-primary border border-accent-primary/20 rounded-full text-xs sm:text-sm font-medium hover:border-accent-primary/40 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 4 && (
                          <motion.span 
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-accent-secondary/10 to-accent-secondary/5 text-accent-secondary border border-accent-secondary/20 rounded-full text-xs sm:text-sm font-medium hover:border-accent-secondary/40 transition-all duration-300"
                          >
                            +{project.technologies.length - 4}
                          </motion.span>
                        )}
                      </div>
                    </div>

                    {/* Botones */}
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        {project.demoUrl && (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              size="lg"
                              className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                              onClick={() => window.open(project.demoUrl, '_blank')}
                            >
                              <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                              Demo
                              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </motion.div>
                        )}
                        {project.githubUrl && (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              size="lg"
                              variant="outline"
                              className="w-full border-2 border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10 hover:border-accent-primary px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                              Código
                              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Filtros mejorados */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="center-perfect mb-20"
          >
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold border-2 transition-all duration-300 text-sm sm:text-base relative overflow-hidden group
                    ${activeCategory === category
                      ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white border-transparent shadow-xl'
                      : 'bg-background-secondary/60 text-foreground-secondary border-border hover:bg-background-secondary hover:text-foreground hover:border-accent-primary/30'}
                  `}
                >
                  <span className="relative z-10">{category}</span>
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Grid de proyectos premium */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid-projects"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                  }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group bg-gradient-to-br from-background-secondary/90 to-background-secondary/70 rounded-3xl border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm"
                >
                  {/* Header del proyecto */}
                  <div className="p-6 sm:p-8 border-b border-border-light/30">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      >
                        <span className="text-2xl sm:text-3xl font-bold text-white">
                          {project.title.charAt(0)}
                        </span>
                      </motion.div>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="text-xs sm:text-sm bg-gradient-to-r from-accent-success/20 to-accent-success/10 text-accent-success px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold border border-accent-success/20"
                      >
                        {project.category}
                      </motion.span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-accent-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Estadísticas simplificadas */}
                  {project.stats && (
                    <div className="p-6 sm:p-8 border-b border-border-light/30">
                      <div className="grid grid-cols-2 gap-3">
                        {project.stats.downloads && (
                          <motion.div 
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="text-center p-2 bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 rounded-lg"
                          >
                            <div className="text-sm font-bold text-foreground">{project.stats.downloads}</div>
                            <div className="text-xs text-foreground-secondary">Descargas</div>
                          </motion.div>
                        )}
                        {project.stats.users && (
                          <motion.div 
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="text-center p-2 bg-gradient-to-br from-accent-secondary/10 to-accent-secondary/5 rounded-lg"
                          >
                            <div className="text-sm font-bold text-foreground">{project.stats.users}</div>
                            <div className="text-xs text-foreground-secondary">Usuarios</div>
                          </motion.div>
                        )}
                        {project.stats.rating && (
                          <motion.div 
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="text-center p-2 bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-lg"
                          >
                            <div className="text-sm font-bold text-foreground">{project.stats.rating}</div>
                            <div className="text-xs text-foreground-secondary">Rating</div>
                          </motion.div>
                        )}
                        {project.stats.performance && (
                          <motion.div 
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="text-center p-2 bg-gradient-to-br from-accent-warning/10 to-accent-warning/5 rounded-lg"
                          >
                            <div className="text-sm font-bold text-foreground">{project.stats.performance}</div>
                            <div className="text-xs text-foreground-secondary">Performance</div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tecnologías */}
                  <div className="p-6 sm:p-8 border-b border-border-light/30">
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
                      Tecnologías
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                          className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 text-accent-primary border border-accent-primary/20 rounded-full text-xs sm:text-sm font-medium hover:border-accent-primary/40 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <motion.span 
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                          className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-accent-secondary/10 to-accent-secondary/5 text-accent-secondary border border-accent-secondary/20 rounded-full text-xs sm:text-sm font-medium hover:border-accent-secondary/40 transition-all duration-300"
                        >
                          +{project.technologies.length - 4}
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      {project.demoUrl && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                            onClick={() => window.open(project.demoUrl, '_blank')}
                          >
                            <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                            Demo
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </motion.div>
                      )}
                      {project.githubUrl && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            size="lg"
                            variant="outline"
                            className="w-full border-2 border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10 hover:border-accent-primary px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                            Código
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Mensaje cuando no hay proyectos */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="center-perfect py-20"
            >
              <div className="text-center w-full">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8"
                >
                  <Filter className="w-10 h-10 sm:w-12 sm:h-12 text-accent-primary" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  No hay proyectos en esta categoría
                </h3>
                <p className="text-base sm:text-lg text-foreground-secondary">
                  Prueba seleccionando otra categoría o revisa más adelante
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}