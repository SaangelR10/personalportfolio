"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Filter,
  Search,
  ExternalLink
} from 'lucide-react';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todos', 'Web Development', 'Mobile Development', 'Design'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section id="blog" className="bg-background py-32">
      <div className="container-perfect">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="center-perfect mb-20">
            <div className="text-center w-full">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                <span className="text-foreground">Mi </span>
                <span className="gradient-text">Blog</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
                Artículos técnicos, tutoriales y reflexiones sobre desarrollo web y móvil
              </p>
            </div>
          </div>

          {/* Artículos destacados */}
          {featuredPosts.length > 0 && (
            <div className="mb-20">
              <div className="center-perfect mb-12">
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-full">
                  <TrendingUp className="w-5 h-5 text-accent-primary" />
                  <span className="text-sm font-semibold text-accent-primary">Artículos Destacados</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                    }}
                    className="group bg-gradient-to-br from-background-secondary/90 to-background-secondary/70 rounded-3xl border border-accent-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm relative"
                  >
                    {/* Badge destacado */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs font-bold rounded-full shadow-lg">
                        Destacado
                      </div>
                    </div>

                    {/* Imagen del artículo */}
                    <div className="h-48 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-accent-primary/50" />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-6 sm:p-8">
                      {/* Meta información */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-foreground-secondary">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishedAt).toLocaleDateString('es-ES', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Categoría */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-accent-success/20 to-accent-success/10 text-accent-success border border-accent-success/20 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>

                      {/* Título */}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-accent-primary transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Extracto */}
                      <p className="text-foreground-secondary leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 text-accent-primary border border-accent-primary/20 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gradient-to-r from-accent-secondary/10 to-accent-secondary/5 text-accent-secondary border border-accent-secondary/20 rounded-full text-xs font-medium">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Botón leer más */}
                      <Button
                        variant="outline"
                        className="w-full border-2 border-accent-primary text-accent-primary hover:bg-accent-primary/10 hover:border-accent-secondary transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Leer Artículo</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {/* Filtros y búsqueda */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between">
              {/* Filtros de categorías */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold border-2 transition-all duration-300 text-sm sm:text-base
                      ${activeCategory === category
                        ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white border-transparent shadow-xl'
                        : 'bg-background-secondary/60 text-foreground-secondary border-border hover:bg-background-secondary hover:text-foreground hover:border-accent-primary/30'}
                    `}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Búsqueda */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 sm:py-3 bg-background-secondary/60 border border-border rounded-2xl text-sm sm:text-base text-foreground placeholder-foreground-secondary focus:outline-none focus:border-accent-primary/50 transition-all duration-300 w-48 sm:w-64"
                />
              </div>
            </div>
          </div>

          {/* Grid de artículos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                  }}
                  className="group bg-gradient-to-br from-background-secondary/90 to-background-secondary/70 rounded-3xl border border-border-light/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm"
                >
                  {/* Imagen del artículo */}
                  <div className="h-40 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-accent-primary/50" />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    {/* Meta información */}
                    <div className="flex items-center gap-4 mb-3 text-xs text-foreground-secondary">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.publishedAt).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Categoría */}
                    <div className="mb-3">
                      <span className="px-2 py-1 bg-gradient-to-r from-accent-success/20 to-accent-success/10 text-accent-success border border-accent-success/20 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-accent-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Extracto */}
                    <p className="text-sm text-foreground-secondary leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 text-accent-primary border border-accent-primary/20 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gradient-to-r from-accent-secondary/10 to-accent-secondary/5 text-accent-secondary border border-accent-secondary/20 rounded-full text-xs font-medium">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Botón leer más */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-2 border-accent-primary text-accent-primary hover:bg-accent-primary/10 hover:border-accent-secondary transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Leer Más</span>
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Mensaje cuando no hay artículos */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="center-perfect py-20"
            >
              <div className="text-center w-full">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <Filter className="w-10 h-10 sm:w-12 sm:h-12 text-accent-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  No se encontraron artículos
                </h3>
                <p className="text-base sm:text-lg text-foreground-secondary">
                  Prueba ajustando los filtros o la búsqueda
                </p>
              </div>
            </motion.div>
          )}

          {/* CTA para suscribirse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 rounded-3xl p-8 sm:p-12 border border-border-light/50 backdrop-blur-sm shadow-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                ¿Te gusta lo que lees?
              </h3>
              <p className="text-base sm:text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
                Suscríbete para recibir las últimas actualizaciones sobre desarrollo web, móvil y las mejores prácticas de la industria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  <span>Suscribirse al Blog</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent-success text-accent-success hover:bg-accent-success/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                >
                  Ver Todos los Artículos
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 