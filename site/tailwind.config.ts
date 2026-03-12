import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        panel: '#0A1818',
        text: '#C8E8E8',
        dim: '#4A7070',
        accent: '#00E5FF',
        'accent-axplorer': '#00D4D8',
        border: '#0D2626',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '2px',
        lg: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
