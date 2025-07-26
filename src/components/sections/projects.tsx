"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';

const categories = ['Todos', 'Frontend', 'Backend', 'Full-Stack', 'Mobile'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return projects;
    return projects.filter(project => project.category === activeCategory.toLowerCase());
  }, [activeCategory]);

  return (
    <section id="projects" className="bg-background py-24 px-6 md:px-8 lg:px-16" style={{ marginLeft: '16px', marginRight: '16px' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16"
        >
          Proyectos
        </motion.h2>

        {/* Filtros minimalistas */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium border transition-all duration-300 text-sm
                ${activeCategory === category
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white border-transparent shadow-md'
                  : 'bg-background-secondary/60 text-foreground-secondary border-border hover:bg-background-secondary hover:text-foreground'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de proyectos premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto px-6 md:px-8 lg:px-12" style={{ marginLeft: '8px', marginRight: '8px' }}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -6,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-gradient-to-br from-background-secondary/90 to-background-secondary/70 rounded-3xl border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group backdrop-blur-sm"
              >
                {/* Header del proyecto */}
                <div className="p-8 border-b border-border-light/30">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg"
                    >
                      <span className="text-2xl font-bold text-white">
                        {project.title.charAt(0)}
                      </span>
                    </motion.div>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs bg-gradient-to-r from-accent-success/20 to-accent-success/10 text-accent-success px-4 py-2 rounded-full font-semibold border border-accent-success/20"
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  
                  <motion.h3 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent-primary transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-foreground-secondary text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="p-8 border-b border-border-light/30">
                  <h4 className="text-base font-semibold text-foreground mb-4">Tecnologías</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 text-accent-primary border border-accent-primary/20 rounded-full text-sm font-medium hover:border-accent-primary/40 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <motion.span 
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="px-4 py-2 bg-gradient-to-r from-accent-secondary/10 to-accent-secondary/5 text-accent-secondary border border-accent-secondary/20 rounded-full text-sm font-medium hover:border-accent-secondary/40 transition-all duration-300"
                      >
                        +{project.technologies.length - 4}
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Botones */}
                <div className="p-8">
                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          size="lg"
                          className="flex-1 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white px-6 py-3 rounded-2xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Demo
                        </Button>
                      </motion.div>
                    )}
                    {project.githubUrl && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          size="lg"
                          variant="outline"
                          className="flex-1 border-2 border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10 hover:border-accent-primary px-6 py-3 rounded-2xl text-base font-semibold transition-all duration-300"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-5 h-5 mr-2" />
                          Código
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-7xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              No se encontraron proyectos
            </h3>
            <p className="text-foreground-secondary">
              Prueba con otra categoría
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}