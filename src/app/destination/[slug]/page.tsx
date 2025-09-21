/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDestinationBySlug, destinations } from '../../../data/destinations';
import { generateTourismSchema, generateFAQSchema, generateBreadcrumbSchema, generateMetaTags } from '../../../utils/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image'

// Generate static params for all destinations (AI-friendly URLs)
export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

// AI-optimized metadata generation
export async function generateMetadata({ params }: any) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    return {
      title: 'Destination Not Found',
    };
  }

  return generateMetaTags(
    `${destination.name} Travel Guide: ${destination.tagline} | Indonesia Answer`,
    `Complete ${destination.name} travel guide. ${destination.description} Best time to visit, costs, activities, and insider tips.`,
    `/destination/${destination.slug}`,
    destination.image
  );
}

export default function DestinationPage({ params }: any) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  // Generate structured data for AI crawlers
  const tourismSchema = generateTourismSchema(destination);
  const faqSchema = generateFAQSchema(destination.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://indonesia-answer.com' },
    { name: 'Destinations', url: 'https://indonesia-answer.com/destination' },
    { name: destination.name, url: `https://indonesia-answer.com/destination/${destination.slug}` }
  ]);

  return (
    <>
      {/* Structured Data for AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([tourismSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section with Semantic Markup */}
        <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex space-x-2 opacity-90">
                <li><Link href="/" className="hover:text-primary-light">Home</Link></li>
                <li>›</li>
                <li><Link href="/destination" className="hover:text-primary-light">Destinations</Link></li>
                <li>›</li>
                <li className="font-medium">{destination.name}</li>
              </ol>
            </nav>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {destination.name}
                </h1>
                <p className="text-xl md:text-2xl mb-6 opacity-90">
                  {destination.tagline}
                </p>
                <p className="text-lg mb-8 opacity-80 leading-relaxed">
                  {destination.description}
                </p>
                
                {/* Quick Facts for AI */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="font-semibold">Best Time</div>
                    <div>{destination.quick_facts.best_time}</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="font-semibold">Budget/Day</div>
                    <div>${destination.quick_facts.budget_per_day.min}-{destination.quick_facts.budget_per_day.max}</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src={destination.image}
                  alt={`${destination.name} - ${destination.tagline}`}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                  width={1200}
                  height={800}
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  {destination.region}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Table - AI Extractable Data */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Facts About {destination.name}
            </h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold text-gray-900">Best Time to Visit</td>
                    <td className="px-6 py-4 text-gray-600">{destination.quick_facts.best_time}</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Recommended Duration</td>
                    <td className="px-6 py-4 text-gray-600">{destination.quick_facts.duration}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold text-gray-900">Daily Budget Range</td>
                    <td className="px-6 py-4 text-gray-600">
                      ${destination.quick_facts.budget_per_day.min} - ${destination.quick_facts.budget_per_day.max} {destination.quick_facts.budget_per_day.currency}
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Languages</td>
                    <td className="px-6 py-4 text-gray-600">{destination.quick_facts.language}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold text-gray-900">Currency</td>
                    <td className="px-6 py-4 text-gray-600">{destination.quick_facts.currency}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Time Zone</td>
                    <td className="px-6 py-4 text-gray-600">{destination.quick_facts.time_zone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section - AI Question/Answer Format */}
        {destination.faqs && destination.faqs.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions About {destination.name}
              </h2>
              
              <div className="space-y-8">
                {destination.faqs.map((faq, index) => (
                  <article key={index} className="bg-gray-50 rounded-lg p-6" itemScope itemType="https://schema.org/Question">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4" itemProp="name">
                      {faq.question}
                    </h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-700 leading-relaxed" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Top Activities Section */}
        {destination.top_activities && destination.top_activities.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                What to Do in {destination.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destination.top_activities.map((activity, index) => (
                  <article key={index} className="card" itemScope itemType="https://schema.org/TouristAttraction">
                    <div className="mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {activity.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3" itemProp="name">
                      {activity.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4" itemProp="description">
                      {activity.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Duration:</span>
                        <div className="text-gray-600">{activity.duration}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Price:</span>
                        <div className="text-primary font-medium">
                          ${activity.price_range.min}-{activity.price_range.max}
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Best Time:</span>
                        <div className="text-gray-600">{activity.best_time}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Difficulty:</span>
                        <div className="text-gray-600">{activity.difficulty}</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Cost Breakdown Section */}
        {destination.cost_breakdown && (
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                {destination.name} Cost Breakdown
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Accommodation Costs */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    <i className="fas fa-bed text-primary mr-2"></i>
                    Accommodation
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Budget</span>
                      <span className="font-medium text-green-600">
                        ${destination.cost_breakdown.accommodation.budget.min}-${destination.cost_breakdown.accommodation.budget.max}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Mid-range</span>
                      <span className="font-medium text-blue-600">
                        ${destination.cost_breakdown.accommodation.mid_range.min}-${destination.cost_breakdown.accommodation.mid_range.max}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Luxury</span>
                      <span className="font-medium text-purple-600">
                        ${destination.cost_breakdown.accommodation.luxury.min}-${destination.cost_breakdown.accommodation.luxury.max}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Food Costs */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    <i className="fas fa-utensils text-primary mr-2"></i>
                    Food & Dining
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Local food</span>
                      <span className="font-medium text-green-600">
                        ${destination.cost_breakdown.food.local.min}-${destination.cost_breakdown.food.local.max}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Mid-range</span>
                      <span className="font-medium text-blue-600">
                        ${destination.cost_breakdown.food.mid_range.min}-${destination.cost_breakdown.food.mid_range.max}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Fine dining</span>
                      <span className="font-medium text-purple-600">
                        ${destination.cost_breakdown.food.fine_dining.min}-${destination.cost_breakdown.food.fine_dining.max}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Transport Costs */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    <i className="fas fa-car text-primary mr-2"></i>
                    Transportation
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(destination.cost_breakdown.transport).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-gray-600 capitalize">{key.replace('_', ' ')}</span>
                        <span className="font-medium text-primary">
                          ${value.min}-{value.max}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Explore {destination.name}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start planning your Indonesian adventure today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3">
                <i className="fas fa-map-marked-alt mr-2"></i>
                View All Destinations
              </button>
              <button className="btn bg-primary-dark hover:bg-primary-light px-8 py-3">
                <i className="fas fa-plane mr-2"></i>
                Plan Your Trip
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
