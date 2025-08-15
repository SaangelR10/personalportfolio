# Guía de Despliegue - Portfolio Móvil

Esta guía te ayudará a desplegar tu portafolio móvil en diferentes plataformas.

## 🚀 Despliegue en Vercel (Recomendado)

### 1. Preparación
- Asegúrate de que tu código esté en un repositorio de GitHub
- Verifica que el proyecto se construya correctamente: `npm run build`

### 2. Despliegue Automático
1. Ve a [vercel.com](https://vercel.com) y crea una cuenta
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Next.js
4. Configura las variables de entorno si es necesario
5. Haz clic en "Deploy"

### 3. Configuración Personalizada
El archivo `vercel.json` ya está configurado con:
- Headers de seguridad
- Redirecciones
- Configuración de regiones

### 4. Dominio Personalizado
1. En el dashboard de Vercel, ve a tu proyecto
2. Navega a "Settings" > "Domains"
3. Agrega tu dominio personalizado
4. Configura los registros DNS según las instrucciones

## 🌐 Despliegue en Netlify

### 1. Configuración
1. Ve a [netlify.com](https://netlify.com)
2. Conecta tu repositorio de GitHub
3. Configura los comandos de build:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 2. Variables de Entorno
Si usas variables de entorno, configúralas en:
- Site settings > Environment variables

### 3. Redirecciones
Crea un archivo `netlify.toml` en la raíz:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/cv"
  to = "/cv.pdf"
  status = 301

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

## ☁️ Despliegue en Railway

### 1. Configuración
1. Ve a [railway.app](https://railway.app)
2. Conecta tu repositorio de GitHub
3. Railway detectará automáticamente el proyecto Next.js

### 2. Variables de Entorno
Configura las variables necesarias en el dashboard de Railway.

## 🔧 Configuración Post-Despliegue

### 1. Actualizar URLs
Después del despliegue, actualiza las URLs en:
- `src/app/layout.tsx` (metadatos)
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/lib/data.ts` (enlaces sociales)

### 2. Verificar Funcionalidad
- [ ] Navegación móvil funciona
- [ ] Formulario de contacto envía emails
- [ ] Enlaces a redes sociales funcionan
- [ ] Imágenes se cargan correctamente
- [ ] Animaciones funcionan en móvil

### 3. Testing de Rendimiento
Usa estas herramientas para verificar el rendimiento:
- **Lighthouse**: Análisis de Core Web Vitals
- **PageSpeed Insights**: Rendimiento en móvil
- **WebPageTest**: Testing en dispositivos reales

## 📱 Testing en Dispositivos Reales

### iOS (Safari)
- iPhone 13/14/15
- iPad (modo portrait y landscape)
- Verificar gestos táctiles
- Comprobar safe areas

### Android (Chrome)
- Samsung Galaxy S23/S24
- Google Pixel 8/9
- Verificar animaciones
- Comprobar rendimiento

### Herramientas de Testing
- **BrowserStack**: Testing en dispositivos reales
- **LambdaTest**: Testing cross-browser
- **DevTools**: Simulación de dispositivos

## 🔒 Configuración de Seguridad

### Headers de Seguridad
El archivo `vercel.json` incluye headers básicos:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

### HTTPS
- Vercel y Netlify proporcionan HTTPS automáticamente
- Railway requiere configuración adicional

## 📊 Monitoreo y Analytics

### Google Analytics
1. Crea una cuenta en Google Analytics
2. Obtén el ID de seguimiento
3. Agrega el script en `src/app/layout.tsx`

### Vercel Analytics
Si usas Vercel, puedes habilitar Vercel Analytics:
1. Instala: `npm install @vercel/analytics`
2. Configura en tu layout

## 🚨 Troubleshooting

### Error de Build
```bash
# Verificar dependencias
npm install

# Limpiar cache
rm -rf .next
npm run build
```

### Problemas de Rendimiento
1. Optimiza imágenes
2. Reduce el tamaño del bundle
3. Implementa lazy loading
4. Usa CDN para assets

### Problemas de SEO
1. Verifica meta tags
2. Comprueba sitemap.xml
3. Revisa robots.txt
4. Testea con Google Search Console

## 📈 Optimización Continua

### Core Web Vitals
Monitorea regularmente:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

### Mejoras Sugeridas
- Implementar Service Worker para PWA
- Agregar notificaciones push
- Optimizar para offline
- Implementar cache strategies

## 📞 Soporte

Si tienes problemas con el despliegue:
1. Revisa los logs de build
2. Verifica la configuración
3. Consulta la documentación de la plataforma
4. Abre un issue en el repositorio

---

¡Tu portafolio móvil está listo para impresionar! 🎉