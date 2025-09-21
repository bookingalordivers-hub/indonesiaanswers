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
    <article
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative w-full overflow-hidden">
        <div className="w-full aspect-[4/3] overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            width={1200}
            height={900}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">{destination.region}</span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{destination.name}</h3>
          <p className="text-sm text-primary font-medium mb-2">{destination.tagline}</p>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{destination.description}</p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <Link href={`/destination/${destination.slug}`} aria-label={`Learn more about ${destination.name}`} className="inline-block bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-150">
            Learn More
          </Link>
          <div className="text-sm text-gray-500">{destination.region}</div>
        </div>
      </div>
    </article>
  )
}
