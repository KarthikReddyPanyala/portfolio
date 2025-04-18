'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'ai'
type FontSize = 'small' | 'medium' | 'large'
type ColorPalette = 'blue' | 'purple' | 'green' | 'red'

interface ThemeContextType {
  mode: ThemeMode
  fontSize: FontSize
  colorPalette: ColorPalette
  setMode: (mode: ThemeMode) => void
  setFontSize: (size: FontSize) => void
  setColorPalette: (palette: ColorPalette) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('dark')
  const [fontSize, setFontSize] = useState<FontSize>('medium')
  const [colorPalette, setColorPalette] = useState<ColorPalette>('blue')

  useEffect(() => {
    // Load saved preferences
    const savedMode = localStorage.getItem('themeMode') as ThemeMode
    const savedFontSize = localStorage.getItem('fontSize') as FontSize
    const savedColorPalette = localStorage.getItem('colorPalette') as ColorPalette

    if (savedMode) setMode(savedMode)
    if (savedFontSize) setFontSize(savedFontSize)
    if (savedColorPalette) setColorPalette(savedColorPalette)
  }, [])

  useEffect(() => {
    // Save preferences
    localStorage.setItem('themeMode', mode)
    localStorage.setItem('fontSize', fontSize)
    localStorage.setItem('colorPalette', colorPalette)

    // Apply theme
    document.documentElement.classList.remove('light', 'dark', 'ai')
    document.documentElement.classList.add(mode)

    // Apply font size
    document.documentElement.style.fontSize = 
      fontSize === 'small' ? '14px' : 
      fontSize === 'medium' ? '16px' : '18px'
  }, [mode, fontSize, colorPalette])

  return (
    <ThemeContext.Provider
      value={{
        mode,
        fontSize,
        colorPalette,
        setMode,
        setFontSize,
        setColorPalette,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 