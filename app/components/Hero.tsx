import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 rounded-lg my-8">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Revive the Magic of Physical Media</h1>
        <p className="text-xl mb-8">Experience movies like never before with our curated DVD collection</p>
        <Button size="lg">
          Explore Collections
        </Button>
      </div>
    </section>
  )
}

