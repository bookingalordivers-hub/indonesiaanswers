 'use client'
import { useState } from 'react'
import Link from 'next/link'
// Image import removed — not used in this component

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destination' },
    { name: 'Transport', href: '/transport' },
    { name: 'Visas & Entry', href: '/visas' },
    { name: 'Hotels', href: '/hotels' },
    { name: 'Safety & Culture', href: '/safety' },
  ]

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Indonesia Answer home">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 rounded-md flex items-center justify-center mr-3 bg-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect width="24" height="24" rx="4" fill="#40A1AD" />
                  <text x="12" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">IA</text>
                </svg>
              </div>
              <span className="text-base font-bold text-gray-900">
                <span className="hidden sm:inline">Indonesia </span><span className="text-primary">Answer</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Link href="/destination" className="inline-flex items-center bg-white text-primary text-sm px-3 py-1 rounded shadow-sm hover:bg-gray-100 transition">Explore</Link>
              <Link href="/plan" className="text-sm px-3 py-1 border rounded hover:bg-gray-50">Plan</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-200 p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-300 transition-colors duration-200"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-sm`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200 mt-2">
                <i className="fas fa-search mr-2"></i>
                Search Destinations
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
