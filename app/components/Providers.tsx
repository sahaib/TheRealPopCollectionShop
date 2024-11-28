"use client"

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { CartProvider as ShoppingCartProvider } from '@/contexts/CartContext'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider 
        attribute="class" 
        defaultTheme="system" 
        enableSystem
      >
        <ShoppingCartProvider>
          {children}
        </ShoppingCartProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}