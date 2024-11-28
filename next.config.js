/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'image.tmdb.org',
      'themoviedb.org'
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['@sendgrid/mail']
  }
}

module.exports = nextConfig 