"use client";

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Función para scroll suave
    const smoothScrollTo = (target: string) => {
      const element = document.querySelector(target);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        const headerHeight = 80; // Altura del header fijo
        
        window.scrollTo({
          top: offsetTop - headerHeight,
          behavior: 'smooth'
        });
      }
    };

    // Interceptar clicks en enlaces internos
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          smoothScrollTo(href);
        }
      }
    };

    // Agregar event listener
    document.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
} 