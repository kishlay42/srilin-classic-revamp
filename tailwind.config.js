/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Authentic SriLin Brand Palette derived from official srilin-logo.png
        srilin: {
          red: '#c5283d',
          'red-hover': '#a71d2a',
          'red-light': '#fef2f2',
          'red-border': '#fecaca',
          gold: '#e6a100',
          'gold-hover': '#c78a00',
          'gold-light': '#fefce8',
          teal: '#008b8b',
          navy: '#070e1e',
          slate: '#0f172a',
          cyan: '#0ea5e9',
          cleanroom: '#f8fafc',
          border: '#e2e8f0',
        },
        jlc: {
          blue: '#0066ff',
          'blue-hover': '#0052cc',
          'blue-light': '#eef5ff',
          'blue-border': '#b8d7ff',
          dark: '#070e1e',
          bg: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
          'border-light': '#f1f5f9',
          text: '#0f172a',
          muted: '#64748b',
          light: '#94a3b8',
        },
        pcb: {
          green: '#15803d',
          red: '#c5283d',
          blue: '#1d4ed8',
          yellow: '#ca8a04',
          black: '#18181b',
          white: '#ffffff',
          purple: '#6b21a8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'srilin-sm': '0 1px 3px rgba(0,0,0,0.05)',
        'srilin-card': '0 2px 8px rgba(0,0,0,0.06)',
        'srilin-hover': '0 10px 25px -3px rgba(197, 40, 61, 0.15)',
        'srilin-glow': '0 0 20px rgba(197, 40, 61, 0.25)',
      }
    },
  },
  plugins: [],
}
