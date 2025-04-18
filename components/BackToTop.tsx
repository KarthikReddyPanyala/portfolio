'use client'

import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className="fixed right-6 bottom-6 z-50 p-3 bg-black dark:bg-primary-500 text-white dark:text-black 
               shadow-lg cursor-pointer transition-colors duration-200 border-2 
               border-black dark:border-primary-500 hover:border-primary-500 dark:hover:border-primary-400
               w-12 h-12 flex items-center justify-center"
      aria-label="Back to top"
    >
      <FiArrowUp className="w-6 h-6" />
    </motion.button>
  )
} 