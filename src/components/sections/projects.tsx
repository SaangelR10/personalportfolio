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
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Mis </span>
            <span className="text-accent-blue">Proyectos</span>
          </h2>
        </motion.div>

        {/* Filtros simplificados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-accent-blue to-accent-magenta text-white shadow-lg'
                    : 'bg-background-secondary/50 text-foreground-secondary hover:bg-background-secondary hover:text-foreground border border-border'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid de proyectos mejorado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background-secondary/30 rounded-3xl overflow-hidden border border-border hover:border-accent-blue/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-blue/10 h-full">
                  {/* Imagen del proyecto mejorada */}
                  <div className="relative h-64 bg-gradient-to-br from-accent-blue/20 via-accent-magenta/20 to-accent-green/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl text-accent-blue/30 font-bold">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    
                    {/* Overlay con botones */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          className="bg-accent-blue hover:bg-accent-blue/80 text-white px-6 py-3 rounded-xl"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-accent-magenta text-accent-magenta hover:bg-accent-magenta/10 px-6 py-3 rounded-xl"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Contenido del proyecto simplificado */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent-blue transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs bg-accent-green/10 text-accent-green px-3 py-1 rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-foreground-secondary text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Tecnologías simplificadas */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-background/50 text-foreground-secondary px-3 py-2 rounded-xl border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-accent-blue/10 text-accent-blue px-3 py-2 rounded-xl">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-8xl mb-6">🔍</div>
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