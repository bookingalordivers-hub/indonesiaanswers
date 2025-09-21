import { getFeaturedDestinations } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'
import Spotlight from '../components/Spotlight'
import AsideList from '../components/AsideList'

export default function HomePage() {
  const featuredDestinations = getFeaturedDestinations()

  // choose the first featured as the spotlight and keep a short aside list
  const spotlight = featuredDestinations[0]
  const asideItems = featuredDestinations.slice(1, 5)

  return (
    <div className="min-h-screen bg-white">
      {/* CultureTrip-inspired Hero: two-column */}
      <section className="hero-section relative bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <Spotlight destination={spotlight} />
            </div>

            <div className="hidden lg:block">
              <AsideList items={asideItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations grid (kept below the hero) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Destinations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore Indonesia&apos;s most popular and breathtaking destinations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {featuredDestinations.map((destination, index) => (
              // Make the first card span more columns for a staggered look
              <div key={destination.id} className={index === 0 ? 'lg:col-span-4 md:col-span-2' : 'lg:col-span-2 md:col-span-1'}>
                <DestinationCard destination={destination} delay={index * 0.05} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section - keep small */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-light text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-plane text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Travel Tips</h3>
              <p className="text-gray-600">Get essential travel information, visa requirements, and local customs</p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hotel text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Hotels & Stay</h3>
              <p className="text-gray-600">Find the perfect accommodation from budget hostels to luxury resorts</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-dark text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Culture</h3>
              <p className="text-gray-600">Discover rich traditions, festivals, and authentic local experiences</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
