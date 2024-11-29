export const siteMetadata = {
  metadataBase: new URL('https://trpc.shop'),
  title: 'The Real Pop Collection Shop | Premium Movie Collections & Reviews',
  description: 'Discover and collect premium physical media from classic to contemporary cinema. Expert movie reviews, curated collections, and exclusive DVD editions.',
  keywords: ['movie collection', 'DVD shop', 'film reviews', 'classic movies', 'movie recommendations', 'physical media', 'cinema collection'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trpc.shop',
    siteName: 'The Real Pop Collection Shop',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'The Real Pop Collection Shop'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@trpcshop',
    creator: '@trpcshop'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Real Pop Collection Shop",
  "url": "https://trpc.shop",
  "logo": "https://trpc.shop/images/logo.png",
  "sameAs": [
    "https://twitter.com/trpcshop",
    "https://facebook.com/trpcshop",
    "https://instagram.com/trpcshop"
  ]
} 