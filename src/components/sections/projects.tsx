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
    <section id="projects" className="bg-background flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center py-16 px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-12"
        >
          Proyectos
        </motion.h2>

        {/* Filtros minimalistas */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium border transition-all duration-300 text-sm
                ${activeCategory === category
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white border-transparent shadow-md'
                  : 'bg-background-secondary/60 text-foreground-secondary border-border hover:bg-background-secondary hover:text-foreground'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de proyectos minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center bg-background-secondary/80 rounded-2xl shadow-lg border border-border p-8 text-left group hover:shadow-2xl transition-all duration-300"
              >
                {/* Icono/Letra */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {/* Título */}
                <h3 className="text-2xl font-bold text-foreground mb-2 text-center w-full">
                  {project.title}
                </h3>
                {/* Descripción */}
                <p className="text-foreground-secondary text-sm mb-6 text-center w-full">
                  {project.description}
                </p>
                {/* Tecnologías */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
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
                {/* Botones */}
                <div className="flex gap-3 justify-center w-full mt-auto">
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className="bg-accent-primary hover:bg-accent-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow"
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
                      className="border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10 px-6 py-2 rounded-full text-sm font-semibold"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  )}
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