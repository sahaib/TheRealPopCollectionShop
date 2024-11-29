import { collections } from '@/lib/collections'
import { movies } from '@/app/lib/movieData'

export async function GET() {
  const baseUrl = 'https://trpc.shop'
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${Object.entries(collections).map(([collectionKey, collection]) => `
        <url>
          <loc>${baseUrl}/collections/${collectionKey}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
        ${Object.entries(collection.categories).map(([categoryKey, movies]) => 
          Object.values(movies).map(movie => `
            <url>
              <loc>${baseUrl}/collections/${collectionKey}/${categoryKey}/${movie.id}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.6</priority>
            </url>
          `).join('')
        ).join('')}
      `).join('')}
    </urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}