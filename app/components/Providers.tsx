"use client"

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AuthProvider } from '../providers/AuthProvider'
import { CartProvider as ShoppingCartProvider } from '@/contexts/CartContext'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <AuthProvider>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
          <ShoppingCartProvider>
            {children}
          </ShoppingCartProvider>
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  )
}