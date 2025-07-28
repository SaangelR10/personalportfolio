"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/lib/data';
import { Code, Server, Database, GitBranch, Box, PenTool, Figma, Wrench, Lightbulb, Zap, Target, Award, Clock, FolderOpen, TrendingUp, Star } from 'lucide-react';

const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: Code, color: 'from-blue-500 to-blue-600', description: 'Tecnologías para interfaces de usuario' },
  { id: 'backend', name: 'Backend', icon: Server, color: 'from-purple-500 to-purple-600', description: 'Servidores y APIs' },
  { id: 'tools', name: 'Herramientas', icon: Wrench, color: 'from-green-500 to-green-600', description: 'Herramientas de desarrollo' },
  { id: 'soft', name: 'Soft Skills', icon: Lightbulb, color: 'from-orange-500 to-orange-600', description: 'Habilidades interpersonales' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

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
  const activeCategoryData = skillCategories.find(cat => cat.id === activeCategory);

  // Calcular estadísticas generales
  const totalSkills = skills.length;
  const averageLevel = Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / totalSkills);
  const totalProjects = skills.reduce((acc, skill) => acc + (skill.projects || 0), 0);
  const totalExperience = skills.reduce((acc, skill) => {
    const years = parseInt(skill.experience?.split('+')[0] || '0');
    return acc + years;
  }, 0);

  return (
    <section id="skills" className="bg-background-secondary py-32">
      <div className="container-perfect">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header mejorado */}
          <div className="center-perfect mb-20">
            <div className="text-center w-full">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                <span className="text-foreground">Mis </span>
                <span className="gradient-text">Habilidades</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
                Tecnologías y herramientas que domino para crear experiencias digitales excepcionales
              </p>
            </div>
          </div>

          {/* Estadísticas generales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 text-center backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                {totalSkills}
              </div>
              <div className="text-sm sm:text-base text-foreground-secondary font-medium">Habilidades</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 text-center backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-accent-secondary to-accent-success bg-clip-text text-transparent">
                {averageLevel}%
              </div>
              <div className="text-sm sm:text-base text-foreground-secondary font-medium">Promedio</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 text-center backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-accent-success to-accent-warning bg-clip-text text-transparent">
                {totalProjects}
              </div>
              <div className="text-sm sm:text-base text-foreground-secondary font-medium">Proyectos</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 text-center backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-accent-warning to-accent-danger bg-clip-text text-transparent">
                {totalExperience}+
              </div>
              <div className="text-sm sm:text-base text-foreground-secondary font-medium">Años Exp.</div>
            </motion.div>
          </motion.div>

          {/* Filtros de categorías mejorados */}
          <div className="center-perfect mb-20">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {skillCategories.map((category) => {
                const IconComponent = category.icon;
                const categorySkills = getSkillsByCategory(category.id);
                const categoryLevel = Math.round(categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length);
                
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold border-2 transition-all duration-300 text-sm sm:text-base
                      ${activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-xl`
                        : 'bg-background/50 text-foreground-secondary border-border hover:bg-background hover:text-foreground hover:border-accent-primary/30'}
                    `}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className="text-xs opacity-80">({categorySkills.length})</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Contenido de habilidades */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Header de la categoría */}
              <div className="center-perfect mb-16">
                <div className="text-center w-full">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-6"
                  >
                    {activeCategoryData && (
                      <activeCategoryData.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent-primary" />
                    )}
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {activeCategoryData?.name}
                  </h3>
                  <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto">
                    {activeCategoryData?.description} • {activeSkills.length} habilidades especializadas
                  </p>
                </div>
              </div>

              {/* Grid de habilidades mejorado */}
              <div className="grid-skills">
                {activeSkills.map((skill, index) => {
                  const SkillIcon = getSkillIcon(skill.name);
                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02, 
                        y: -8,
                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                      }}
                      className="group bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
                    >
                      {/* Header de la skill */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <SkillIcon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-accent-primary transition-colors duration-300">
                              {skill.name}
                            </h4>
                            <div className="flex items-center gap-4 text-sm text-foreground-secondary">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-accent-primary" />
                                <span>Nivel {skill.level}%</span>
                              </div>
                              {skill.experience && (
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4 text-accent-secondary" />
                                  <span>{skill.experience}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {skill.projects && (
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm text-foreground-secondary">
                              <FolderOpen className="w-4 h-4" />
                              <span>{skill.projects} proyectos</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Barra de progreso mejorada */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-medium text-foreground-secondary">Progreso</span>
                          <span className="text-sm font-bold text-accent-primary">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-background-secondary/50 rounded-full h-3 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full relative overflow-hidden"
                          >
                            <motion.div
                              initial={{ x: '-100%' }}
                              animate={{ x: '100%' }}
                              transition={{ duration: 2, delay: 1.5 + index * 0.1, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Descripción */}
                      <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed mb-4">
                        {skill.description}
                      </p>

                      {/* Estadísticas adicionales */}
                      <div className="flex items-center justify-between text-xs text-foreground-muted">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-3 h-3" />
                          <span>Experiencia comprobada</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-3 h-3" />
                          <span>Certificaciones</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mensaje si no hay habilidades */}
              {activeSkills.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="center-perfect py-20"
                >
                  <div className="text-center w-full">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
                      <Target className="w-10 h-10 sm:w-12 sm:h-12 text-accent-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                      No hay habilidades en esta categoría
                    </h3>
                    <p className="text-base sm:text-lg text-foreground-secondary">
                      Prueba seleccionando otra categoría
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Resumen de categorías */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-32"
          >
            <div className="center-perfect mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Resumen por Categorías</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {skillCategories.map((category, index) => {
                const categorySkills = getSkillsByCategory(category.id);
                const categoryLevel = Math.round(categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length);
                const categoryProjects = categorySkills.reduce((acc, skill) => acc + (skill.projects || 0), 0);
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-background/80 to-background/40 rounded-3xl p-6 sm:p-8 border border-border-light/50 text-center backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{category.name}</h4>
                    <p className="text-sm text-foreground-secondary mb-4">{category.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground-secondary">Habilidades:</span>
                        <span className="font-bold text-foreground">{categorySkills.length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground-secondary">Promedio:</span>
                        <span className="font-bold text-accent-primary">{categoryLevel}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground-secondary">Proyectos:</span>
                        <span className="font-bold text-accent-secondary">{categoryProjects}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}