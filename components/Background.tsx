'use client'

import { useTheme } from '@/components/ThemeProvider'
import { motion } from 'framer-motion'

const Grid = () => (
  <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-[0.015]">
    {Array.from({ length: 24 }).map((_, i) => (
      <div key={i} className="border border-primary-500" />
    ))}
  </div>
)

export default function Background() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(to bottom, #1a1a2e, #0a0a14)'
            : 'linear-gradient(to bottom, #87CEEB, #E0F7FA)'
        }}
      />

      {/* Animated grid */}
      <Grid />

      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '0px 100px']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: theme === 'dark'
              ? 'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.08) 0px, transparent 1px, transparent 2px)'
              : 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.01) 0px, transparent 1px, transparent 2px)',
            backgroundSize: '100% 2px'
          }}
        />
      </div>

      {/* CRT flicker effect for dark mode */}
      {theme === 'dark' && (
        <>
          <motion.div
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            animate={{ opacity: [0.5, 0.8] }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 255, 0, 0.15) 0%, transparent 100%)',
            }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ 
              opacity: [0.97, 1],
              scale: [1, 1.02]
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.05) 0%, rgba(0, 255, 0, 0) 50%)',
            }}
          />
        </>
      )}
    </div>
  )
} 