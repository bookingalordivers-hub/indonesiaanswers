import { getFeaturedDestinations } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const featuredDestinations = getFeaturedDestinations()
  const heroDestination = featuredDestinations[0]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Culture Trip style */}
      <section className="hero-ct">
        <div className="container-ct">
          <div className="hero-content text-center">
            <h1 className="text-h1 mb-6">
              Discover Indonesia's Hidden Gems
            </h1>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              From pristine beaches to ancient temples, explore Indonesia's most captivating destinations with insider guides and local expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Destination Spotlight */}
      <section className="section-ct bg-muted">
        <div className="container-ct">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="spotlight-ct">
              <Image
                src={heroDestination.image}
                alt={heroDestination.name}
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
              <div className="spotlight-content">
                <div className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  Featured Destination
                </div>
                <h3 className="text-h2 mb-2">{heroDestination.name}</h3>
                <p className="text-lg opacity-95">{heroDestination.tagline}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-h2 mb-4">Start Your Indonesian Adventure</h2>
              <p className="text-body text-muted mb-6 leading-relaxed">
                Indonesia offers an incredible diversity of experiences, from the cultural heart of Bali to the pristine beaches of Raja Ampat. 
                Our comprehensive guides help you navigate this archipelago of over 17,000 islands with confidence.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-accent mt-1"></i>
                  <div>
                    <strong>Visa-free entry</strong> for many countries up to 30 days
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-accent mt-1"></i>
                  <div>
                    <strong>Budget-friendly travel</strong> from $30-50 per day
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-accent mt-1"></i>
                  <div>
                    <strong>Year-round destinations</strong> with varied climates
                  </div>
                </div>
              </div>
              
              <Link href={`/destination/${heroDestination.slug}`} className="btn-primary">
                Discover {heroDestination.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid - Culture Trip style */}
      <section className="section-ct">
        <div className="container-ct">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Popular Destinations</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Discover Indonesia's most beloved destinations, from tropical paradises to cultural treasures
            </p>
          </div>

          <div className="grid-ct grid-ct-3 mb-8">
            {featuredDestinations.slice(0, 12).map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/destination" className="btn-secondary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Services - Culture Trip style */}
      <section className="section-ct bg-muted">
        <div className="container-ct">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Everything You Need for Indonesia</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Complete travel resources to make your Indonesian journey unforgettable
            </p>
          </div>

          <div className="grid-ct grid-ct-3">
            <div className="text-center">
              <div className="feature-icon primary mx-auto">
                <i className="fas fa-plane"></i>
              </div>
              <h3 className="text-h3 mb-3">Travel Planning</h3>
              <p className="text-muted mb-4">
                Complete guides on flights, visas, vaccinations, and travel insurance for Indonesia
              </p>
              <Link href="/travel-tips" className="text-primary font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="text-center">
              <div className="feature-icon accent mx-auto">
                <i className="fas fa-bed"></i>
              </div>
              <h3 className="text-h3 mb-3">Accommodation</h3>
              <p className="text-muted mb-4">
                From backpacker hostels to luxury resorts - find the perfect place to stay
              </p>
              <Link href="/hotels" className="text-primary font-semibold hover:underline">
                Find Hotels →
              </Link>
            </div>

            <div className="text-center">
              <div className="feature-icon secondary mx-auto">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-h3 mb-3">Local Culture</h3>
              <p className="text-muted mb-4">
                Understand Indonesian customs, traditions, and etiquette for respectful travel
              </p>
              <Link href="/culture" className="text-primary font-semibold hover:underline">
                Explore Culture →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
