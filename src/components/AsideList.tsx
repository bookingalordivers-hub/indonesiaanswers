import Link from 'next/link'
import Image from 'next/image'

type Destination = {
  id?: string
  name: string
  slug: string
  image: string
  tagline?: string
  description?: string
  region?: string
}

export default function AsideList({ items }: { items: Destination[] }) {
  return (
    <aside>
      {/* mobile: horizontal scroll; desktop: stacked list */}
      <div className="lg:hidden -mx-4 px-6 overflow-x-auto space-x-4 flex snap-x snap-mandatory touch-pan-x scrollbar-hide">
        {items.map((it, idx) => (
          <Link key={it.id || idx} href={`/destination/${it.slug}`} className="min-w-[220px] bg-white rounded-lg shadow-sm overflow-hidden flex-shrink-0 snap-start" aria-label={it.name}>
            <div className="w-full aspect-[16/10] overflow-hidden transition-transform duration-300 hover:scale-105 border border-transparent hover:border-gray-200">
              <Image src={it.image} alt={it.name} width={800} height={500} className="w-full h-full object-cover" sizes="(max-width: 640px) 70vw, 220px" />
            </div>
            <div className="p-4">
              <div className="text-xs text-primary font-medium">{it.region}</div>
              <div className="font-semibold text-gray-900 mt-1">{it.name}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="hidden lg:block space-y-4">
        {items.map((it, idx) => (
          <Link key={it.id || idx} href={`/destination/${it.slug}`} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md">
            <div className="w-16 h-12 rounded overflow-hidden flex-shrink-0">
              <Image src={it.image} alt={it.name} width={160} height={120} className="w-full h-full object-cover" sizes="64px" />
            </div>
            <div>
              <div className="text-xs text-primary font-medium">{it.region}</div>
              <div className="font-semibold text-gray-900">{it.name}</div>
              <div className="text-sm text-gray-600 mt-1 line-clamp-2">{it.tagline || it.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
