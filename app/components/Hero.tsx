import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 rounded-lg my-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Revive the Magic of Physical Media</h1>
        <p className="text-xl mb-8">Experience movies like never before with our curated DVD collection</p>
        <Link href="/collections">
          <Button size="lg" className="glass-button">
            Explore Collections
          </Button>
        </Link>
      </div>
    </section>
  )
}

