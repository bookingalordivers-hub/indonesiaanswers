'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Destinations', href: '/destination' },
    { name: 'Travel Tips', href: '/travel-tips' },
    { name: 'Hotels', href: '/hotels' },
    { name: 'Culture', href: '/culture' },
    { name: 'Visas', href: '/visas' },
  ]

  return (
    <nav className="nav-ct">
      <div className="container-ct">
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            Indonesia Answer
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/destination" className="btn-primary">
              Explore Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary transition-colors duration-200"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link href="/destination" className="btn-primary w-full text-center">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
