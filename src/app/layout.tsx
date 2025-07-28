import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Tu Nombre - Senior Frontend Developer',
    template: '%s | Tu Nombre - Senior Frontend Developer'
  },
  description: 'Desarrollador frontend senior especializado en React, Next.js y aplicaciones móviles. Creo experiencias digitales excepcionales con las últimas tecnologías web.',
  keywords: [
    'desarrollador frontend',
    'React',
    'Next.js',
    'TypeScript',
    'React Native',
    'desarrollo web',
    'aplicaciones móviles',
    'UI/UX',
    'freelance',
    'Madrid',
    'España'
  ],
  authors: [{ name: 'Tu Nombre' }],
  creator: 'Tu Nombre',
  publisher: 'Tu Nombre',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tu-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tu-portfolio.vercel.app',
    title: 'Tu Nombre - Senior Frontend Developer',
    description: 'Desarrollador frontend senior especializado en React, Next.js y aplicaciones móviles. Creo experiencias digitales excepcionales con las últimas tecnologías web.',
    siteName: 'Tu Nombre - Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tu Nombre - Senior Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tu Nombre - Senior Frontend Developer',
    description: 'Desarrollador frontend senior especializado en React, Next.js y aplicaciones móviles.',
    images: ['/og-image.jpg'],
    creator: '@tu-usuario',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-google-verification-code',
    yandex: 'tu-yandex-verification-code',
    yahoo: 'tu-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect para mejorar rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://twitter.com" />
        
        {/* Meta tags adicionales para móviles */}
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tu Nombre",
              "jobTitle": "Senior Frontend Developer",
              "description": "Desarrollador frontend senior especializado en React, Next.js y aplicaciones móviles",
              "url": "https://tu-portfolio.vercel.app",
              "image": "https://tu-portfolio.vercel.app/avatar.webp",
              "email": "tu-email@ejemplo.com",
              "telephone": "+34 600 000 000",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madrid",
                "addressCountry": "ES"
              },
              "sameAs": [
                "https://linkedin.com/in/tu-perfil",
                "https://github.com/tu-usuario",
                "https://twitter.com/tu-usuario"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "React Native",
                "Node.js",
                "Tailwind CSS",
                "UI/UX Design"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
