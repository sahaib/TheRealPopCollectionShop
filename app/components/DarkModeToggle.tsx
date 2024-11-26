"use client"
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className = "" }: DarkModeToggleProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setIsDark(theme === 'dark')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`rounded-full glass-button ${className}`}
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
} 