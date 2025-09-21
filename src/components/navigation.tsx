'use client'
import { useState } from 'react'
import Link from 'next/link'
import { destinations } from '../data/destinations'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false)

  const navigation = [
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
            {/* Destinations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}
            >
              <Link href="/destination" className="flex items-center gap-1">
                Destinations
                <i className="fas fa-chevron-down text-xs"></i>
              </Link>
              
              {isDestinationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md border z-50">
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {destinations.map((destination) => (
                      <Link
                        key={destination.id}
                        href={`/destination/${destination.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                      >
                        <div className="font-medium">{destination.name}</div>
                        <div className="text-xs text-gray-500">{destination.tagline}</div>
                      </Link>
                    ))}
                    <div className="border-t mt-2 pt-2">
                      <Link
                        href="/destination"
                        className="block px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100"
                      >
                        View All Destinations →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
              {/* Mobile Destinations */}
              <div>
                <button
                  onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  Destinations
                  <i className={`fas fa-chevron-${isDestinationsOpen ? 'up' : 'down'} text-xs`}></i>
                </button>
                
                {isDestinationsOpen && (
                  <div className="ml-4 mt-2 space-y-1 max-h-64 overflow-y-auto">
                    {destinations.map((destination) => (
                      <Link
                        key={destination.id}
                        href={`/destination/${destination.slug}`}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {destination.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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
