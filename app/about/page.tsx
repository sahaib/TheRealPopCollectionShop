export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About The Real Pop Collection</h1>
      
      <div className="prose lg:prose-xl max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023, The Real Pop Collection emerged from a passion for preserving 
            the authentic movie-watching experience. In an era of streaming services, 
            we believe in the tangible value of physical media and its ability to create 
            lasting memories.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            We're dedicated to curating the finest collection of DVDs, bringing together 
            classics, contemporary hits, and rare finds. Our mission is to ensure that 
            the magic of physical media continues to thrive in the digital age.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quality Guarantee</h2>
          <p className="text-gray-600 mb-4">
            Every DVD in our collection is carefully sourced and verified for quality. 
            We ensure that each item meets our high standards before it reaches our 
            customers.
          </p>
        </section>
      </div>
    </div>
  )
} 