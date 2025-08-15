"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/lib/data';
import { Code, Server, Database, GitBranch, Box, PenTool, Figma, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: Code },
  { id: 'backend', name: 'Backend', icon: Server },
  { id: 'tools', name: 'Herramientas', icon: Wrench },
  { id: 'soft', name: 'Soft Skills', icon: Lightbulb },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getSkillIcon = (skillName: string): React.ElementType => {
    const iconMap: Record<string, React.ElementType> = {
      'React': Code,
      'TypeScript': Code,
      'Next.js': Code,
      'Node.js': Server,
      'MongoDB': Database,
      'PostgreSQL': Database,
      'Git': GitBranch,
      'Docker': Box,
      'Figma': Figma,
      'HTML': Code,
      'CSS': Code,
      'JavaScript': Code,
      'Express': Server,
      'Prisma': Database,
      'Redux': Code,
      'Jest': PenTool,
      'Cypress': PenTool,
      'Photoshop': PenTool,
      'Illustrator': PenTool,
      'Scrum': Lightbulb,
      'Comunicación': Lightbulb,
      'Liderazgo': Lightbulb,
    };
    return iconMap[skillName] || Code;
  };

  const activeSkills = getSkillsByCategory(activeCategory);

  return (
    <section id="skills" className="bg-background-secondary py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Habilidades
        </h2>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-medium border transition-all duration-300 text-sm
                  ${activeCategory === category.id
                    ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white border-transparent shadow-lg scale-105'
                    : 'bg-background/50 text-foreground-secondary border-border hover:bg-background hover:text-foreground hover:scale-105'}
                `}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Contenido de habilidades */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Header de la categoría */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {(() => {
                  const IconComponent = skillCategories.find(cat => cat.id === activeCategory)?.icon;
                  return IconComponent ? <IconComponent className="w-8 h-8 text-accent-primary" /> : null;
                })()}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {skillCategories.find(cat => cat.id === activeCategory)?.name}
              </h3>
              <p className="text-foreground-secondary">
                {activeSkills.length} habilidades especializadas
              </p>
            </div>

            {/* Grid de habilidades */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              {activeSkills.map((skill, index) => {
                const SkillIcon = getSkillIcon(skill.name);
                return (
                  <div
                    key={skill.id}
                    className="bg-background/50 rounded-2xl p-6 border border-border-light shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col items-center text-center space-y-4"
                  >
                    {/* Título */}
                    <h4 className="text-xl font-bold text-foreground">{skill.name}</h4>
                    
                    {/* Porcentaje */}
                    <span className="text-sm font-bold text-accent-primary">{skill.level}%</span>
                    
                    {/* Círculo de progreso */}
                    <div className="relative w-20 h-20">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#374151"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeDasharray={`${skill.level}, 100`}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    
                    {/* Descripción */}
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mensaje si no hay habilidades */}
            {activeSkills.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  No hay habilidades en esta categoría
                </h3>
                <p className="text-foreground-secondary">
                  Prueba con otra categoría
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Estadísticas generales */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
            <div className="text-2xl font-bold text-accent-primary mb-2">
              {skills.filter(s => s.category === 'frontend').length}
            </div>
            <div className="text-sm text-foreground-secondary">Frontend</div>
          </div>
          <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
            <div className="text-2xl font-bold text-accent-secondary mb-2">
              {skills.filter(s => s.category === 'backend').length}
            </div>
            <div className="text-sm text-foreground-secondary">Backend</div>
          </div>
          <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
            <div className="text-2xl font-bold text-accent-success mb-2">
              {skills.filter(s => s.category === 'tools').length}
            </div>
            <div className="text-sm text-foreground-secondary">Herramientas</div>
          </div>
          <div className="bg-background/50 rounded-2xl p-6 border border-border-light text-center">
            <div className="text-2xl font-bold text-accent-primary mb-2">
              {skills.filter(s => s.category === 'soft').length}
            </div>
            <div className="text-sm text-foreground-secondary">Soft Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
}