"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/lib/data';

const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: '🎨' },
  { id: 'backend', name: 'Backend', icon: '⚙️' },
  { id: 'tools', name: 'Herramientas', icon: '🛠️' },
  { id: 'soft', name: 'Soft Skills', icon: '💡' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const activeSkills = getSkillsByCategory(activeCategory);

  return (
    <section id="skills" className="bg-background-secondary py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12"
        >
          Habilidades
        </motion.h2>

        {/* Filtros de categorías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-medium border transition-all duration-300 text-sm
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white border-transparent shadow-lg scale-105'
                  : 'bg-background/50 text-foreground-secondary border-border hover:bg-background hover:text-foreground hover:scale-105'}
              `}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Contenido de habilidades */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Header de la categoría */}
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">
                {skillCategories.find(cat => cat.id === activeCategory)?.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {skillCategories.find(cat => cat.id === activeCategory)?.name}
              </h3>
              <p className="text-foreground-secondary">
                {activeSkills.length} habilidades especializadas
              </p>
            </div>

            {/* Grid de habilidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background/50 rounded-2xl p-6 border border-border-light shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-foreground">{skill.name}</h4>
                    <span className="text-sm font-bold text-accent-primary">{skill.level}%</span>
                  </div>
                  
                  {/* Barra de progreso */}
                  <div className="w-full h-3 bg-background-tertiary rounded-full mb-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                    />
                  </div>
                  
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Mensaje si no hay habilidades */}
            {activeSkills.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  No hay habilidades en esta categoría
                </h3>
                <p className="text-foreground-secondary">
                  Prueba con otra categoría
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Estadísticas generales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
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
        </motion.div>
      </div>
    </section>
  );
}