import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbsProps {
  items: {
    label: string
    href?: string
  }[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <li>
          <Link 
            href="/" 
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-1" />
            {item.href && index < items.length - 1 ? (
              <Link 
                href={item.href}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-gray-200 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Schema.org breadcrumbs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'item': {
                '@id': '/',
                'name': 'Home'
              }
            },
            ...items.map((item, index) => ({
              '@type': 'ListItem',
              'position': index + 2,
              'item': {
                '@id': item.href || '',
                'name': item.label
              }
            }))
          ]
        })
      }} />
    </nav>
  )
} 