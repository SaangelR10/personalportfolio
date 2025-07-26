"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { Project } from '@/types';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'mobile', label: 'Móvil' },
  { id: 'design', label: 'Diseño' },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 px-mobile-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-mobile-3xl md:text-4xl font-heading font-bold mb-4">
            Mis <span className="text-accent-blue">Proyectos</span>
          </h2>
          <p className="text-mobile-lg text-foreground-secondary max-w-2xl mx-auto">
            Explora mi portafolio de proyectos desarrollados con las tecnologías más modernas
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-accent-blue" />
            <span className="text-mobile-base font-medium text-foreground">Filtrar por:</span>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-lg text-mobile-base font-medium transition-all duration-200
                  ${activeFilter === category.id
                    ? 'bg-accent-blue text-background shadow-lg shadow-accent-blue/25'
                    : 'bg-background-secondary text-foreground-secondary hover:text-foreground hover:bg-background-secondary/80'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Galería de proyectos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mensaje cuando no hay proyectos */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-foreground-secondary text-mobile-lg">
              No hay proyectos en esta categoría por el momento.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-background-secondary rounded-xl overflow-hidden border border-border hover:border-accent-blue/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-blue/10">
      {/* Imagen del proyecto */}
      <div className="relative aspect-video bg-gradient-to-br from-accent-blue/20 to-accent-magenta/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-background-secondary rounded-lg flex items-center justify-center">
            <span className="text-2xl font-heading font-bold text-accent-blue">
              {project.title.split(' ').map(word => word[0]).join('')}
            </span>
          </div>
        </div>
        
        {/* Overlay con botones */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.demoUrl && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(project.demoUrl, '_blank')}
              className="bg-background/90 backdrop-blur-sm"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="bg-background/90 backdrop-blur-sm"
            >
              <Github className="h-4 w-4 mr-2" />
              Código
            </Button>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-mobile-xl font-heading font-semibold text-foreground mb-3 group-hover:text-accent-blue transition-colors">
          {project.title}
        </h3>
        
        <p className="text-mobile-base text-foreground-secondary mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-background rounded-full text-xs font-medium text-accent-blue border border-accent-blue/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-background-secondary rounded-full text-xs font-medium text-foreground-secondary">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Categoría */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-accent-magenta capitalize">
            {project.category}
          </span>
          
          <div className="flex gap-2">
            {project.demoUrl && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => window.open(project.demoUrl, '_blank')}
                className="text-foreground-secondary hover:text-accent-blue"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="text-foreground-secondary hover:text-accent-blue"
              >
                <Github className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}