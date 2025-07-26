"use client";

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

const skillCategories = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'tools', name: 'Herramientas' },
  { id: 'soft', name: 'Soft Skills' },
];

export default function Skills() {
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="bg-background flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center py-16 px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-12"
        >
          Habilidades
        </motion.h2>

        {/* Grupos de habilidades */}
        <div className="flex flex-col gap-12 w-full">
          {skillCategories.map((category, idx) => {
            const categorySkills = getSkillsByCategory(category.id);
            if (categorySkills.length === 0) return null;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full"
              >
                <h3 className="text-2xl font-bold text-accent-primary mb-6 text-center">
                  {category.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {categorySkills.map((skill, skillIdx) => (
                    <div
                      key={skill.id}
                      className="flex flex-col items-center bg-background-secondary/80 rounded-xl border border-border px-6 py-4 min-w-[160px] max-w-[200px] shadow-sm"
                    >
                      <span className="text-lg font-semibold text-foreground mb-2">{skill.name}</span>
                      {/* Barra de progreso minimalista */}
                      <div className="w-full h-2 bg-background-tertiary rounded-full mb-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.05 }}
                          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                        />
                      </div>
                      <span className="text-xs text-accent-primary font-bold mb-1">{skill.level}%</span>
                      <span className="text-xs text-foreground-secondary text-center">{skill.description}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}