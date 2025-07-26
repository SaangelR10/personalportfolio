import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio Móvil | Desarrollador Frontend",
  description: "Portafolio personal de desarrollador frontend optimizado para móviles iOS y Android. Especializado en Next.js, React, TypeScript y diseño móvil-first.",
  keywords: ["desarrollador frontend", "Next.js", "React", "TypeScript", "móvil", "iOS", "Android"],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  publisher: "Tu Nombre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Portfolio Móvil",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-portfolio.vercel.app",
    title: "Portfolio Móvil | Desarrollador Frontend",
    description: "Portafolio personal optimizado para móviles iOS y Android",
    siteName: "Portfolio Móvil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Móvil | Desarrollador Frontend",
    description: "Portafolio personal optimizado para móviles iOS y Android",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
