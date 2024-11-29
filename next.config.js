/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'image.tmdb.org',
      'themoviedb.org'
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['@sendgrid/mail', 'groq-sdk']
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  swcMinify: false
}

module.exports = nextConfig 