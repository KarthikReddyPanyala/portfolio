import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#33ff33',
          500: '#00ff00',
          600: '#00e600',
          700: '#00cc00'
        },
        dark: {
          600: '#1a1a1a',
          700: '#0a0a0a'
        },
        text: {
          light: '#000000',
          dark: '#00ff00'
        }
      },
      fontFamily: {
        'press-start': ['Press Start 2P', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config 