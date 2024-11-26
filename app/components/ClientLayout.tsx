"use client"

import Header from './Header'
import Footer from './Footer'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16 transition-all duration-300">
        {children}
      </main>
      <Footer />
    </>
  )
} 