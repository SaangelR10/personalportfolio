"use client";

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Users, TrendingUp } from 'lucide-react';
import { skills } from '@/lib/data';

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
    <section id="skills" className="py-24 px-6 bg-background-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-foreground">Mis </span>
            <span className="text-accent-primary">Habilidades</span>
          </h2>
        </motion.div>

        {/* Estadísticas visuales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          <div className="bg-background/50 rounded-3xl p-8 text-center border border-border">
            <div className="text-4xl font-bold text-accent-primary mb-3">3+</div>
            <div className="text-sm text-foreground-secondary">Años de Experiencia</div>
          </div>
          <div className="bg-background/50 rounded-3xl p-8 text-center border border-border">
            <div className="text-4xl font-bold text-accent-secondary mb-3">20+</div>
            <div className="text-sm text-foreground-secondary">Proyectos Completados</div>
          </div>
          <div className="bg-background/50 rounded-3xl p-8 text-center border border-border">
            <div className="text-4xl font-bold text-accent-success mb-3">15+</div>
            <div className="text-sm text-foreground-secondary">Tecnologías Dominadas</div>
          </div>
          <div className="bg-background/50 rounded-3xl p-8 text-center border border-border">
            <div className="text-4xl font-bold text-accent-primary mb-3">100%</div>
            <div className="text-sm text-foreground-secondary">Satisfacción del Cliente</div>
          </div>
        </motion.div>

        {/* Categorías de habilidades */}
        <div className="space-y-16">
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
                className="space-y-8"
              >
                {/* Header de categoría */}
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl ${getBgColorClass(category.color)} flex items-center justify-center`}>
                    <category.icon className={`w-8 h-8 ${getColorClass(category.color)}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">{category.name}</h3>
                    <p className="text-foreground-secondary">
                      {categorySkills.length} tecnologías
                    </p>
                  </div>
                </div>

                {/* Grid de habilidades mejorado */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="bg-background/50 rounded-2xl p-6 border border-border hover:border-accent-blue/30 transition-all duration-300 hover:shadow-lg h-full">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-foreground group-hover:text-accent-blue transition-colors">
                            {skill.name}
                          </h4>
                                    <span className="text-lg font-bold text-accent-primary">
            {skill.level}%
          </span>
                        </div>
                        
                        {/* Barra de progreso mejorada */}
                        <div className="relative h-3 bg-background-secondary rounded-full overflow-hidden mb-4">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full`}
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

        {/* Sección de certificaciones visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-success/10 rounded-3xl p-12 border border-accent-primary/20"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Certificaciones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background/50 rounded-2xl p-8 border border-border">
                <div className="text-4xl mb-4">🎓</div>
                <div className="text-xl font-bold text-foreground mb-2">Next.js 15</div>
                <div className="text-sm text-foreground-secondary">Certificación Oficial</div>
              </div>
              <div className="bg-background/50 rounded-2xl p-8 border border-border">
                <div className="text-4xl mb-4">⚛️</div>
                <div className="text-xl font-bold text-foreground mb-2">React Advanced</div>
                <div className="text-sm text-foreground-secondary">Patrones y Optimización</div>
              </div>
              <div className="bg-background/50 rounded-2xl p-8 border border-border">
                <div className="text-4xl mb-4">🎨</div>
                <div className="text-xl font-bold text-foreground mb-2">UI/UX Design</div>
                <div className="text-sm text-foreground-secondary">Diseño Centrado en Usuario</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}