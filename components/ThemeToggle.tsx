'use client'

import { useTheme } from '@/components/ThemeProvider'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 hover:opacity-80 transition-opacity"
      aria-label="Toggle theme"
    >
      {/* Moon Icon */}
      {theme === 'dark' && (
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Crescent moon */}
          <mask id="moon-mask">
            <circle cx="16" cy="16" r="12" fill="white" />
            <circle cx="24" cy="16" r="12" fill="black" />
          </mask>
          <circle cx="16" cy="16" r="12" fill="#E5E7EB" mask="url(#moon-mask)" />
        </svg>
      )}

      {/* Sun Icon */}
      {theme === 'light' && (
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main circle */}
          <circle cx="16" cy="16" r="8" fill="#FCD34D" />
          {/* Rays */}
          <path
            d="M16 4v4M16 24v4M4 16h4M24 16h4"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path
            d="M7.757 7.757l2.829 2.829M21.414 21.414l2.829 2.829M7.757 24.243l2.829-2.829M21.414 10.586l2.829-2.829"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      )}
    </button>
  )
} 