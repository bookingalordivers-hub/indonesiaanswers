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
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Indonesia Answers" 
              className="h-4 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {/* Destinations Dropdown */}
            <div className="dropdown-trigger">
              <Link href="/destination" className="nav-link flex items-center gap-1">
                Destinations
                <i className="fas fa-chevron-down text-xs"></i>
              </Link>
              
              <div className="dropdown-menu">
                <div className="max-h-80 overflow-y-auto">
                  {destinations.map((destination) => (
                    <Link
                      key={destination.id}
                      href={`/destination/${destination.slug}`}
                      className="dropdown-item"
                    >
                      <div className="font-medium text-gray-900 text-sm">{destination.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{destination.tagline}</div>
                    </Link>
                  ))}
                  <div className="dropdown-item border-t border-gray-200 mt-2 pt-3">
                    <Link
                      href="/destination"
                      className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1"
                    >
                      View All Destinations
                      <i className="fas fa-arrow-right text-xs"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
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
