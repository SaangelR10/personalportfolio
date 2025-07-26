# Portfolio Móvil - Desarrollador Frontend

Un portafolio personal web moderno y profesional, optimizado principalmente para dispositivos móviles iOS (Safari) con soporte para Android (Chrome). Diseñado para impresionar a reclutadores y visitantes con un diseño mobile-first, accesibilidad completa y rendimiento optimizado.

## 🚀 Características

### 📱 Optimización Móvil
- **Mobile-First Design**: Prioriza la experiencia en dispositivos móviles (320px–480px)
- **iOS Safari Optimizado**: Soporte completo para Safari, pantallas Retina y gestos táctiles
- **Android Chrome Compatible**: Optimizado para Chrome con ajustes específicos
- **Safe Area Support**: Compatible con notch y áreas seguras de iOS
- **Touch Targets**: Botones de 48px mínimo para interacciones táctiles

### 🎨 Diseño Moderno
- **Paleta Oscura**: Fondo negro (#121212) con acentos neón vibrantes
- **Tipografía Optimizada**: Inter para texto base, Poppins para títulos
- **Animaciones Suaves**: Framer Motion para transiciones de 60 FPS
- **Responsive Design**: Adaptable a tablet y escritorio

### ⚡ Rendimiento
- **Next.js 15**: App Router con SSR/SSG para SEO
- **Tailwind CSS**: Mobile-first con clases responsivas
- **Optimización de Imágenes**: Next.js Image con lazy loading
- **Core Web Vitals**: Tiempo de carga <2s optimizado

### ♿ Accesibilidad
- **WCAG 2.1**: Contraste 4.5:1 para pantallas AMOLED/OLED
- **VoiceOver Support**: ARIA labels y navegación por teclado
- **Focus Management**: Indicadores visuales claros
- **Screen Reader**: Compatible con lectores de pantalla

## 🛠️ Tecnologías

### Frontend
- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático para mejor desarrollo
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones y transiciones
- **Zustand** - Gestión de estado ligera
- **Lucide React** - Iconos modernos

### Herramientas
- **ESLint** - Linting de código
- **Prettier** - Formateo de código
- **Git** - Control de versiones

## 📁 Estructura del Proyecto

```
portfolio-mobile/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales y variables CSS
│   │   ├── layout.tsx           # Layout principal con metadatos
│   │   └── page.tsx             # Página principal
│   ├── components/
│   │   ├── ui/                  # Componentes UI reutilizables
│   │   │   ├── button.tsx       # Botón optimizado para móvil
│   │   │   └── mobile-nav.tsx   # Navegación móvil
│   │   └── sections/            # Secciones del portafolio
│   │       ├── hero.tsx         # Sección de inicio
│   │       ├── about.tsx        # Sobre mí con timeline
│   │       ├── projects.tsx     # Galería de proyectos
│   │       ├── skills.tsx       # Habilidades y tecnologías
│   │       ├── contact.tsx      # Formulario de contacto
│   │       └── footer.tsx       # Pie de página
│   ├── lib/
│   │   ├── store.ts             # Store de Zustand
│   │   ├── data.ts              # Datos del portafolio
│   │   └── utils.ts             # Utilidades
│   └── types/
│       └── index.ts             # Tipos TypeScript
├── public/                      # Archivos estáticos
├── tailwind.config.ts           # Configuración de Tailwind
└── package.json
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/SaangelR10/personalportfolio.git
cd portfolio-mobile
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
```

## 📱 Secciones del Portafolio

### 1. Hero (Inicio)
- Título principal con animaciones de entrada
- Botones CTA para explorar proyectos y descargar CV
- Indicador de scroll animado
- Información de disponibilidad

### 2. Sobre Mí
- Avatar personalizado con gradientes
- Biografía detallada
- Timeline de experiencia profesional
- Información de contacto

### 3. Proyectos
- Galería de proyectos con filtros por categoría
- Tarjetas interactivas con hover effects
- Enlaces a demo y código fuente
- Tecnologías utilizadas

### 4. Habilidades
- Categorías: Frontend, Backend, Herramientas, Soft Skills
- Barras de progreso animadas
- Estadísticas generales
- Descripciones de nivel de dominio

### 5. Contacto
- Formulario de contacto funcional
- Información de contacto detallada
- Enlaces a redes sociales
- Validación en tiempo real

### 6. Footer
- Enlaces rápidos a secciones
- Redes sociales
- Información de copyright
- Botón "Volver arriba"

## 🎨 Personalización

### Colores
Las variables de color están definidas en `src/app/globals.css`:

```css
:root {
  --background: #121212;
  --background-secondary: #1A1A1A;
  --foreground: #FFFFFF;
  --foreground-secondary: #D3D3D3;
  --accent-blue: #00DDEB;
  --accent-magenta: #FF007A;
  --accent-green: #00FF7F;
  --border: #2A2A2A;
}
```

### Datos del Portafolio
Edita `src/lib/data.ts` para personalizar:
- Información personal
- Proyectos
- Habilidades
- Timeline de experiencia
- Enlaces de redes sociales

### Metadatos SEO
Configura los metadatos en `src/app/layout.tsx`:
- Título y descripción
- Open Graph
- Twitter Cards
- Configuración de robots

## 📊 Optimizaciones de Rendimiento

### Móvil
- **Touch Targets**: 48px mínimo para botones
- **Safe Areas**: Soporte para notch y áreas seguras
- **Gestos**: Swipe y tap optimizados
- **Animaciones**: 60 FPS en dispositivos móviles

### SEO
- **SSR/SSG**: Renderizado del lado del servidor
- **Meta Tags**: Dinámicos y optimizados
- **Sitemap**: Generación automática
- **Structured Data**: Datos estructurados

### Accesibilidad
- **WCAG 2.1**: Cumplimiento completo
- **ARIA Labels**: Etiquetas descriptivas
- **Keyboard Navigation**: Navegación por teclado
- **Screen Readers**: Compatibilidad total

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Otros Proveedores
- **Netlify**: Compatible con Next.js
- **Railway**: Despliegue rápido
- **AWS Amplify**: Escalable

## 📱 Testing

### Dispositivos de Prueba
- **iOS**: iPhone 13/14/15 (Safari)
- **Android**: Samsung Galaxy S23/S24, Pixel 8/9 (Chrome)
- **Tablet**: iPad, Android tablets
- **Desktop**: Chrome, Firefox, Safari

### Herramientas de Testing
- **BrowserStack**: Testing en dispositivos reales
- **Lighthouse**: Core Web Vitals
- **WebPageTest**: Análisis de rendimiento

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: tu-email@ejemplo.com
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- **GitHub**: [@SaangelR10](https://github.com/SaangelR10)
- **Portfolio**: [tu-portfolio.vercel.app](https://tu-portfolio.vercel.app)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
