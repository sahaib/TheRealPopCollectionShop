export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-16">About The Real Pop Collection Shop</h1>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        <section className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/30 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            What started as a personal passion during the pandemic has evolved into something much bigger. As a film enthusiast, I (Sahaib) began meticulously cataloging my movie collection in a humble Google Sheet during the COVID lockdown. This simple act of documentation sparked something unexpected – a realization that physical media isn't just about ownership, it's about preserving stories, memories, and the authentic movie-watching experience that streaming services can't quite replicate. From that spreadsheet to this curated collection, TRPC Shop represents a journey of turning a personal hobby into a community of fellow collectors who understand the irreplaceable value of physical media.
          </p>
        </section>

        <section className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/30 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission transcends mere movie sales – we're here to rekindle the joy of tangible movie collections. In an age where content disappears from streaming platforms without warning, we believe in the permanence and pride of owning physical copies. Each DVD in our collection is more than just a disc; it's a piece of cinema history, a conversation starter, and an investment that appreciates in both value and sentiment over time. We're committed to helping fellow enthusiasts build collections that tell their own unique stories and create lasting legacies of movie appreciation.
          </p>
        </section>

        <section className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/30 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Quality Guarantee</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Every DVD in our collection is carefully sourced and verified for quality. We understand that each addition to your collection is an investment, which is why we personally ensure that each item meets our rigorous standards before it reaches your hands. From classic masterpieces to contemporary gems, every piece in our inventory is guaranteed to provide the premium viewing experience you deserve.
          </p>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
        <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-200/20 dark:border-gray-700/30 shadow-lg">
          <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">1000+</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">DVDs in Collection</p>
        </div>
        <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-200/20 dark:border-gray-700/30 shadow-lg">
          <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">24/7</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Customer Support</p>
        </div>
        <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-200/20 dark:border-gray-700/30 shadow-lg">
          <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">100%</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Satisfaction Guaranteed</p>
        </div>
      </div>
    </div>
  )
} 