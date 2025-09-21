import Link from 'next/link'
import Image from 'next/image'

type Destination = {
  id?: string
  name: string
  slug: string
  image: string
  description?: string
}

export default function Spotlight({ destination }: { destination: Destination }) {
  return (
  <article className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        {/* bigger editorial image with a taller aspect on large screens */}
        <div className="w-full aspect-[16/9] sm:aspect-[3/2] lg:aspect-[5/3] overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            width={1600}
            height={960}
            priority
            className="w-full h-full object-cover"
            sizes="(max-width: 1024px) 100vw, 1600px"
          />
        </div>

        {/* softer, slightly darker gradient for stronger contrast on small screens; tightened width for readability */}
        <div className="absolute left-6 bottom-6 sm:left-8 sm:bottom-8 bg-gradient-to-r from-black/95 via-black/60 to-transparent text-white p-6 rounded max-w-xl md:max-w-2xl">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span className="uppercase tracking-wider text-xs text-primary font-semibold">Featured</span>
            <span aria-hidden className="opacity-50">•</span>
            <time className="text-xs">Updated just now</time>
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-lg">{destination.name}</h2>
          <p className="mt-3 text-sm md:text-base text-gray-100 opacity-95 max-w-prose">{destination.description}</p>
          <div className="mt-5">
            <Link href={`/destination/${destination.slug}`} className="inline-block bg-primary text-white font-medium px-5 py-2.5 rounded shadow-lg hover:opacity-95 transition">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
