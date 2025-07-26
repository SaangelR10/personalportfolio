"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Users } from 'lucide-react';
import { skills } from '@/lib/data';
import { Skill } from '@/types';

const categories = [
  { id: 'frontend', label: 'Frontend', icon: Code, color: 'text-accent-blue' },
  { id: 'backend', label: 'Backend', icon: Database, color: 'text-accent-magenta' },
  { id: 'tools', label: 'Herramientas', icon: Wrench, color: 'text-accent-green' },
  { id: 'soft', label: 'Soft Skills', icon: Users, color: 'text-accent-blue' },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);
  const activeCategoryData = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 px-mobile-padding bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-mobile-3xl md:text-4xl font-heading font-bold mb-4">
            Mis <span className="text-accent-blue">Habilidades</span>
          </h2>
          <p className="text-mobile-lg text-foreground-secondary max-w-2xl mx-auto">
            Tecnologías y competencias que he desarrollado a lo largo de mi carrera profesional
          </p>
        </motion.div>

        {/* Selector de categorías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-200
                    ${activeCategory === category.id
                      ? 'bg-background border-2 border-accent-blue shadow-lg shadow-accent-blue/25'
                      : 'bg-background/50 border-2 border-transparent hover:bg-background/80'
                    }
                  `}
                >
                  <Icon className={`h-8 w-8 ${category.color}`} />
                  <span className={`text-mobile-base font-medium ${
                    activeCategory === category.id ? 'text-foreground' : 'text-foreground-secondary'
                  }`}>
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Habilidades de la categoría seleccionada */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <div className="text-center mb-8">
            <h3 className="text-mobile-2xl font-heading font-semibold text-foreground mb-2">
              {activeCategoryData?.label}
            </h3>
            <p className="text-foreground-secondary text-mobile-base">
              {filteredSkills.length} habilidades en esta categoría
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border hover:border-accent-blue/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-background-secondary rounded-lg flex items-center justify-center">
                      <span className="text-lg font-heading font-bold text-accent-blue">
                        {skill.name.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-mobile-lg font-heading font-semibold text-foreground">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-foreground-secondary">
                        Nivel de dominio
                      </p>
                    </div>
                  </div>
                  <span className="text-mobile-lg font-bold text-accent-blue">
                    {skill.level}%
                  </span>
                </div>

                {/* Barra de progreso */}
                <div className="relative">
                  <div className="w-full h-3 bg-background-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-accent-blue to-accent-magenta rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                  
                  {/* Marcadores de nivel */}
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-foreground-secondary">Básico</span>
                    <span className="text-xs text-foreground-secondary">Intermedio</span>
                    <span className="text-xs text-foreground-secondary">Avanzado</span>
                    <span className="text-xs text-foreground-secondary">Experto</span>
                  </div>
                </div>

                {/* Descripción del nivel */}
                <div className="mt-4">
                  <p className="text-sm text-foreground-secondary">
                    {getSkillDescription(skill.level)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Estadísticas generales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-accent-blue mb-2">
              {skills.length}
            </div>
            <p className="text-sm text-foreground-secondary">Habilidades Totales</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-accent-magenta mb-2">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
            <p className="text-sm text-foreground-secondary">Promedio General</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-accent-green mb-2">
              {skills.filter(skill => skill.level >= 90).length}
            </div>
            <p className="text-sm text-foreground-secondary">Nivel Experto</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-accent-blue mb-2">
              {categories.length}
            </div>
            <p className="text-sm text-foreground-secondary">Categorías</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function getSkillDescription(level: number): string {
  if (level >= 90) return 'Dominio experto. Puedo liderar proyectos y enseñar a otros.';
  if (level >= 80) return 'Nivel avanzado. Desarrollo proyectos complejos con confianza.';
  if (level >= 70) return 'Nivel intermedio-avanzado. Manejo proyectos independientes.';
  if (level >= 60) return 'Nivel intermedio. Puedo contribuir efectivamente a proyectos.';
  return 'Nivel básico. En proceso de aprendizaje y mejora continua.';
}