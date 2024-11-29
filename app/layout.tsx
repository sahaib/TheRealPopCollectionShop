import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from 'sonner'
import Favicon from './components/Favicon'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Favicon />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  )
}

