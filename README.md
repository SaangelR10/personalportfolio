# 🚀 Tu Nombre - Senior Frontend Developer Portfolio

Un portafolio web moderno y profesional construido con las últimas tecnologías web, optimizado para móviles y diseñado para mostrar habilidades de desarrollo frontend de manera impactante.

## ✨ Características

### 🎨 Diseño y UX
- **Diseño Mobile-First**: Optimizado para dispositivos móviles iOS y Android
- **UI/UX Profesional**: Interfaz moderna con paleta de colores oscura y acentos profesionales
- **Animaciones Fluidas**: Transiciones suaves con Framer Motion
- **Responsive Design**: Adaptable a todos los tamaños de pantalla
- **Accesibilidad**: Cumple con estándares WCAG 2.1

### 🛠️ Tecnologías
- **Next.js 15**: Framework React con App Router y optimizaciones avanzadas
- **TypeScript**: Tipado estático para mejor desarrollo y mantenimiento
- **Tailwind CSS 4**: Framework CSS utility-first con configuración personalizada
- **Framer Motion**: Animaciones y transiciones fluidas
- **Lucide React**: Iconografía moderna y consistente
- **Zustand**: Gestión de estado ligera y eficiente

### 📱 Funcionalidades
- **Sección Hero**: Presentación impactante con animaciones
- **Proyectos Destacados**: Showcase de trabajos con estadísticas y detalles
- **Skills Interactivas**: Barras de progreso animadas por categorías
- **Experiencia Laboral**: Timeline interactivo con logros
- **Blog Técnico**: Artículos con filtros y búsqueda
- **Formulario de Contacto**: Funcional y con validación
- **PWA Ready**: Instalable como aplicación móvil

### 🚀 Optimizaciones
- **SEO Avanzado**: Metadatos completos y structured data
- **Performance**: Lazy loading, code splitting y optimizaciones
- **Core Web Vitals**: Optimizado para métricas de rendimiento
- **PWA**: Manifest, service worker y funcionalidades offline
- **Security**: Headers de seguridad y mejores prácticas

## 🎯 Secciones del Portfolio

### 1. **Hero Section**
- Presentación personal impactante
- Badge de disponibilidad
- Características destacadas
- CTAs principales

### 2. **About Section**
- Información personal detallada
- Estadísticas de experiencia
- Timeline de experiencia laboral
- Habilidades e intereses

### 3. **Projects Section**
- Proyectos destacados con badges
- Estadísticas detalladas (usuarios, descargas, rating)
- Filtros por categorías
- Highlights de características
- Enlaces a demo y código

### 4. **Skills Section**
- Categorías organizadas (Frontend, Backend, Tools, Soft Skills)
- Barras de progreso animadas
- Estadísticas por categoría
- Experiencia y proyectos por skill

### 5. **Blog Section**
- Artículos técnicos destacados
- Filtros por categorías
- Búsqueda en tiempo real
- Sistema de tags
- CTA para suscripción

### 6. **Contact Section**
- Información de contacto personalizada
- Enlaces a redes sociales
- Formulario funcional
- Horarios de disponibilidad
- Descarga de CV

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/personalportfolio.git
cd personalportfolio
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con Turbopack
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run lint:fix     # Linting con auto-fix
npm run type-check   # Verificación de tipos TypeScript
npm run clean        # Limpiar archivos de build
npm run analyze      # Análisis de bundle
```

## 📁 Estructura del Proyecto

```
personalportfolio/
├── src/
│   ├── app/                 # App Router de Next.js 15
│   │   ├── globals.css      # Estilos globales y variables CSS
│   │   ├── layout.tsx       # Layout principal con SEO
│   │   └── page.tsx         # Página principal
│   ├── components/          # Componentes React
│   │   ├── sections/        # Secciones del portfolio
│   │   │   ├── hero.tsx     # Sección hero
│   │   │   ├── about.tsx    # Sección about
│   │   │   ├── projects.tsx # Sección proyectos
│   │   │   ├── skills.tsx   # Sección habilidades
│   │   │   ├── blog.tsx     # Sección blog
│   │   │   ├── contact.tsx  # Sección contacto
│   │   │   └── footer.tsx   # Footer
│   │   └── ui/              # Componentes UI reutilizables
│   ├── lib/                 # Utilidades y configuración
│   │   ├── data.ts          # Datos del portfolio
│   │   ├── store.ts         # Estado global con Zustand
│   │   └── utils.ts         # Utilidades generales
│   └── types/               # Definiciones de tipos TypeScript
├── public/                  # Archivos estáticos
│   ├── manifest.json        # Configuración PWA
│   └── icons/               # Iconos de la aplicación
├── next.config.ts           # Configuración de Next.js
├── tailwind.config.ts       # Configuración de Tailwind CSS
└── package.json             # Dependencias y scripts
```

## 🎨 Personalización

### 1. **Datos Personales**
Edita `src/lib/data.ts` para personalizar:
- Información personal
- Proyectos
- Habilidades
- Experiencia laboral
- Artículos del blog
- Enlaces sociales

### 2. **Colores y Tema**
Modifica `src/app/globals.css` para cambiar:
- Paleta de colores
- Variables CSS
- Gradientes
- Tipografía

### 3. **SEO y Metadatos**
Actualiza `src/app/layout.tsx` para:
- Título y descripción
- Open Graph
- Twitter Cards
- Structured Data

### 4. **Configuración PWA**
Edita `public/manifest.json` para:
- Nombre de la aplicación
- Iconos
- Colores del tema
- Shortcuts

## 📊 Métricas de Rendimiento

El portfolio está optimizado para obtener excelentes puntuaciones en:

- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 100
- **Lighthouse Best Practices**: 100
- **Lighthouse SEO**: 100
- **Core Web Vitals**: Optimizado
- **Mobile Performance**: Optimizado

## 🔧 Configuración Avanzada

### Variables de Entorno
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://tu-portfolio.vercel.app
NEXT_PUBLIC_GA_ID=tu-google-analytics-id
NEXT_PUBLIC_GTM_ID=tu-google-tag-manager-id
```

### Deploy en Vercel
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### Deploy en Netlify
1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `.next`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Lucide](https://lucide.dev/) - Iconografía
- [Vercel](https://vercel.com/) - Hosting y Deploy

## 📞 Contacto

- **Email**: tu-email@ejemplo.com
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- **Portfolio**: [tu-portfolio.vercel.app](https://tu-portfolio.vercel.app)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
