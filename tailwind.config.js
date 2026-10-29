/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#080810',
        surface: '#0d0d1a',
        card: '#111122',
        border: '#1a1a2e',
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#00d4ff',
          700: '#0ea5e9',
          glow: '#00d4ff',
          electric: '#0066ff',
          neon: '#00aaff',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: '#00ffff',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          glow: '#7c3aed',
          subtle: '#6d28d9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        'glow-blue': 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
        'glow-violet': 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)',
        'glow-violet': '0 0 30px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 8px 40px rgba(0,212,255,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass': '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
