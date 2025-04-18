'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiTerminal } from 'react-icons/fi'

export default function Navbar() {
  const [isClient, setIsClient] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isTerminalMode, setIsTerminalMode] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
  }

  const toggleTerminalMode = () => {
    setIsTerminalMode(!isTerminalMode)
  }

  if (!isClient) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/50 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="w-32 h-8 bg-gray-700 rounded animate-pulse" />
            <div className="flex space-x-4">
              <div className="w-20 h-8 bg-gray-700 rounded animate-pulse" />
              <div className="w-20 h-8 bg-gray-700 rounded animate-pulse" />
              <div className="w-20 h-8 bg-gray-700 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white dark:bg-dark-900 shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold gradient-text">
              AI Portfolio
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={toggleTerminalMode}
              className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle terminal mode"
            >
              <FiTerminal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 