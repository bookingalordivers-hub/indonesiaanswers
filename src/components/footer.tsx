import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-mountain text-white"></i>
              </div>
              <span className="text-2xl font-bold">
                Indonesia <span className="text-primary">Answer</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your complete guide to Indonesian destinations, travel tips, visas, hotels, and cultural experiences.
              Discover the beauty of Indonesia&apos;s diverse islands and rich culture.
            </p>
            <div className="flex space-x-4 items-center mb-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
            <form className="mt-6 flex max-w-sm">
              <input aria-label="Email address" type="email" placeholder="Enter your email" className="w-full px-3 py-2 rounded-l-md text-gray-900" />
              <button type="submit" className="bg-primary text-white px-4 rounded-r-md">Subscribe</button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><Link href="/destination/bali" className="text-gray-400 hover:text-primary transition-colors duration-200">Bali</Link></li>
              <li><Link href="/destination/java" className="text-gray-400 hover:text-primary transition-colors duration-200">Java</Link></li>
              <li><Link href="/destination/sumba" className="text-gray-400 hover:text-primary transition-colors duration-200">Sumba</Link></li>
              <li><Link href="/destination" className="text-gray-400 hover:text-primary transition-colors duration-200">All Destinations</Link></li>
            </ul>
          </div>

          {/* Travel Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Travel Info</h3>
            <ul className="space-y-2">
              <li><Link href="/transport" className="text-gray-400 hover:text-primary transition-colors duration-200">Transportation</Link></li>
              <li><Link href="/visas" className="text-gray-400 hover:text-primary transition-colors duration-200">Visas & Entry</Link></li>
              <li><Link href="/hotels" className="text-gray-400 hover:text-primary transition-colors duration-200">Hotels & Stay</Link></li>
              <li><Link href="/safety" className="text-gray-400 hover:text-primary transition-colors duration-200">Safety & Culture</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Indonesia Answer. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
