"use client";

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Users, TrendingUp } from 'lucide-react';
import { skills } from '@/lib/data';
import { Skill } from '@/types';

const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: Code, color: 'accent-blue' },
  { id: 'backend', name: 'Backend', icon: Database, color: 'accent-magenta' },
  { id: 'mobile', name: 'Mobile', icon: Smartphone, color: 'accent-green' },
  { id: 'tools', name: 'Herramientas', icon: TrendingUp, color: 'accent-blue' },
  { id: 'soft', name: 'Soft Skills', icon: Users, color: 'accent-magenta' },
];

export default function Skills() {
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'accent-blue': return 'text-accent-blue';
      case 'accent-magenta': return 'text-accent-magenta';
      case 'accent-green': return 'text-accent-green';
      default: return 'text-accent-blue';
    }
  };

  const getBgColorClass = (color: string) => {
    switch (color) {
      case 'accent-blue': return 'bg-accent-blue/10';
      case 'accent-magenta': return 'bg-accent-magenta/10';
      case 'accent-green': return 'bg-accent-green/10';
      default: return 'bg-accent-blue/10';
    }
  };

  return (
    <section id="skills" className="py-16 px-4 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Mis </span>
            <span className="text-accent-blue">Habilidades</span>
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear experiencias digitales excepcionales.
          </p>
        </motion.div>

        {/* Estadísticas generales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-background/50 rounded-2xl p-6 text-center border border-border">
            <div className="text-3xl font-bold text-accent-blue mb-2">3+</div>
            <div className="text-sm text-foreground-secondary">Años de Experiencia</div>
          </div>
          <div className="bg-background/50 rounded-2xl p-6 text-center border border-border">
            <div className="text-3xl font-bold text-accent-magenta mb-2">20+</div>
            <div className="text-sm text-foreground-secondary">Proyectos Completados</div>
          </div>
          <div className="bg-background/50 rounded-2xl p-6 text-center border border-border">
            <div className="text-3xl font-bold text-accent-green mb-2">15+</div>
            <div className="text-sm text-foreground-secondary">Tecnologías Dominadas</div>
          </div>
          <div className="bg-background/50 rounded-2xl p-6 text-center border border-border">
            <div className="text-3xl font-bold text-accent-blue mb-2">100%</div>
            <div className="text-sm text-foreground-secondary">Satisfacción del Cliente</div>
          </div>
        </motion.div>

        {/* Categorías de habilidades */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.id);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                {/* Header de categoría */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${getBgColorClass(category.color)} flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${getColorClass(category.color)}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{category.name}</h3>
                    <p className="text-foreground-secondary text-sm">
                      {categorySkills.length} tecnologías
                    </p>
                  </div>
                </div>

                {/* Grid de habilidades */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="bg-background/50 rounded-xl p-6 border border-border hover:border-accent-blue/30 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-accent-blue transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-medium text-accent-blue">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Barra de progreso */}
                        <div className="relative h-2 bg-background-secondary rounded-full overflow-hidden mb-3">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r from-accent-blue to-accent-magenta rounded-full`}
                          />
                        </div>
                        
                        <p className="text-sm text-foreground-secondary leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sección de certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-accent-blue/10 via-accent-magenta/10 to-accent-green/10 rounded-2xl p-8 border border-accent-blue/20"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Certificaciones y Cursos
            </h3>
            <p className="text-foreground-secondary mb-6 max-w-2xl mx-auto">
              Me mantengo actualizado con las últimas tecnologías y mejores prácticas 
              a través de certificaciones y cursos especializados.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background/50 rounded-xl p-4 border border-border">
                <div className="text-2xl mb-2">🎓</div>
                <div className="font-semibold text-foreground">Next.js 15</div>
                <div className="text-sm text-foreground-secondary">Certificación Oficial</div>
              </div>
              <div className="bg-background/50 rounded-xl p-4 border border-border">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-semibold text-foreground">React Advanced</div>
                <div className="text-sm text-foreground-secondary">Patrones y Optimización</div>
              </div>
              <div className="bg-background/50 rounded-xl p-4 border border-border">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-semibold text-foreground">UI/UX Design</div>
                <div className="text-sm text-foreground-secondary">Diseño Centrado en Usuario</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}