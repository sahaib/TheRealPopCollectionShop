import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Real Pop Collection Shop</h3>
            <p className="mb-4">Reviving the old era with physical media that creates tangible memories.</p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook"><Facebook className="w-6 h-6" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="w-6 h-6" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="w-6 h-6" /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/shipping">Shipping Information</Link></li>
              <li><Link href="/returns">Returns Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for exclusive deals and updates.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 rounded-l-md text-gray-900" />
              <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2023 The Real Pop Collection Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

