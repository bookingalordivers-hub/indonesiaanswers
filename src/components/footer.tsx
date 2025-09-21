import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-ct">
      <div className="container-ct">
        {/* Newsletter Section */}
        <div className="text-center mb-12 pb-8 border-b border-gray-700">
          <h3 className="text-h2 mb-4">Stay Updated on Indonesia Travel</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest travel guides, destination insights, and exclusive tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-md text-gray-900 border-0"
              aria-label="Email address"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-content">
          {/* About */}
          <div className="footer-section">
            <h3>Indonesia Answer</h3>
            <p className="text-gray-300 mb-4">
              Your trusted guide to exploring Indonesia's incredible destinations, culture, and experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div className="footer-section">
            <h3>Popular Destinations</h3>
            <ul>
              <li><Link href="/destination/bali">Bali</Link></li>
              <li><Link href="/destination/java">Java</Link></li>
              <li><Link href="/destination/sumatra">Sumatra</Link></li>
              <li><Link href="/destination/lombok">Lombok</Link></li>
              <li><Link href="/destination">All Destinations</Link></li>
            </ul>
          </div>

          {/* Travel Planning */}
          <div className="footer-section">
            <h3>Travel Planning</h3>
            <ul>
              <li><Link href="/travel-tips">Travel Tips</Link></li>
              <li><Link href="/visas">Visas & Entry</Link></li>
              <li><Link href="/hotels">Accommodation</Link></li>
              <li><Link href="/culture">Culture Guide</Link></li>
              <li><Link href="/safety">Safety Tips</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/feedback">Feedback</Link></li>
              <li><Link href="/partnership">Partnership</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Indonesia Answer. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
