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
    <section id="projects" className="bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
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

        {/* Grid de proyectos mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-secondary/80 rounded-2xl border border-border-light shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header del proyecto */}
                <div className="p-6 border-b border-border-light">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                      <span className="text-xl font-bold text-white">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs bg-accent-success/10 text-accent-success px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="p-6 border-b border-border-light">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-background text-accent-primary border border-accent-primary/30 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-background text-accent-secondary border border-accent-secondary/30 rounded-full text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Botones */}
                <div className="p-6">
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-accent-primary hover:bg-accent-secondary text-white px-4 py-2 rounded-xl text-sm font-semibold shadow"
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
                        className="flex-1 border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10 px-4 py-2 rounded-xl text-sm font-semibold"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
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