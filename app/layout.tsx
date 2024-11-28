import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/app/providers'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Real Pop Collection Shop',
  description: 'Reviving the old era with physical media that creates tangible memories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4473243229406280"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} text-gray-900 dark:text-gray-100 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
        <Providers>
          <Header />
          <main id="main-content" className="pt-16 transition-all duration-300">
            {children}
          </main>
          <Footer />
        </Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}

