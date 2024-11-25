export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center">About The Real Pop Collection Shop</h1>
      
      <div className="max-w-4xl mx-auto space-y-12 mb-24">
        {/* Main Content Container */}
        <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          
          {/* Our Story Section */}
          <div className="mb-12">
            <div className="bg-white/5 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded in 2023, The Real Pop Collection emerged from a passion for preserving the authentic movie-watching experience. 
                In an era of streaming services, we believe in the tangible value of physical media and its ability to create lasting memories.
              </p>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="mb-12">
            <div className="bg-white/5 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We're dedicated to curating the finest collection of DVDs, bringing together classics, contemporary hits, and rare finds. 
                Our mission is to ensure that the magic of physical media continues to thrive in the digital age.
              </p>
            </div>
          </div>

          {/* Quality Guarantee Section */}
          <div>
            <div className="bg-white/5 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">Quality Guarantee</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Every DVD in our collection is carefully sourced and verified for quality. 
                We ensure that each item meets our high standards before it reaches our customers.
              </p>
            </div>
          </div>

        </div>

        {/* Stats Section with bottom margin */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-600/20 dark:to-purple-600/20 p-8 rounded-xl backdrop-blur-sm shadow-xl border border-white/20 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center space-y-3">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                1000+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                DVDs in Collection
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-600/20 dark:to-purple-600/20 p-8 rounded-xl backdrop-blur-sm shadow-xl border border-white/20 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center space-y-3">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                24/7
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Customer Support
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-600/20 dark:to-purple-600/20 p-8 rounded-xl backdrop-blur-sm shadow-xl border border-white/20 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center space-y-3">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                100%
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Satisfaction Guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 