import Image from 'next/image'
import Link from 'next/link'

type Destination = {
  id?: string
  name: string
  slug: string
  image: string
  tagline?: string
  description?: string
  region?: string
}

export default function DestinationCard({ destination, delay = 0 }: { destination: Destination; delay?: number }) {
  return (
    <Link 
      href={`/destination/${destination.slug}`}
      className="card-ct animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        {destination.region && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
              {destination.region}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-h3 mb-2 line-clamp-2">{destination.name}</h3>
        {destination.tagline && (
          <p className="text-primary font-medium text-sm mb-2">{destination.tagline}</p>
        )}
        {destination.description && (
          <p className="text-muted text-sm line-clamp-3 mb-3">{destination.description}</p>
        )}
        
        <div className="flex items-center justify-between text-xs text-light">
          <span>Explore destination</span>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </Link>
  )
}
