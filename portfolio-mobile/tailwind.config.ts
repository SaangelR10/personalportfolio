import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        "background-tertiary": "var(--background-tertiary)",
        foreground: "var(--foreground)",
        "foreground-secondary": "var(--foreground-secondary)",
        "foreground-muted": "var(--foreground-muted)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "accent-success": "var(--accent-success)",
        "accent-warning": "var(--accent-warning)",
        "accent-danger": "var(--accent-danger)",
        border: "var(--border)",
        "border-light": "var(--border-light)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "mobile-base": ["16px", { lineHeight: "1.6" }],
        "mobile-lg": ["18px", { lineHeight: "1.5" }],
        "mobile-xl": ["20px", { lineHeight: "1.4" }],
        "mobile-2xl": ["24px", { lineHeight: "1.3" }],
        "mobile-3xl": ["28px", { lineHeight: "1.2" }],
        "mobile-4xl": ["32px", { lineHeight: "1.1" }],
        "mobile-5xl": ["36px", { lineHeight: "1.1" }],
      },
      spacing: {
        "mobile-padding": "var(--mobile-padding)",
        "mobile-margin": "var(--mobile-margin)",
        "touch-target": "var(--touch-target)",
      },
      minHeight: {
        "touch-target": "var(--touch-target)",
      },
      minWidth: {
        "touch-target": "var(--touch-target)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale": "scale 0.2s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scale: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
      screens: {
        "mobile": "320px",
        "mobile-lg": "375px",
        "mobile-xl": "414px",
        "tablet": "768px",
        "desktop": "1024px",
        "desktop-lg": "1280px",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
    },
  },
  plugins: [],
};

export default config;