export const destinations = [
  {
    id: 'bali',
    name: 'Bali',
    slug: 'bali',
    tagline: 'Island of the Gods',
    region: 'Lesser Sunda Islands',
    country: 'Indonesia',
    featured: true,
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80',
    description: 'Bali is Indonesia\'s most famous destination, known for its stunning beaches, ancient temples, vibrant culture, and warm hospitality.',
    
    // AI-optimized geographic data
    coordinates: {
      lat: -8.3405,
      lng: 115.0920
    },
    
    // AI-friendly structured facts
    quick_facts: {
      best_time: 'April to October (dry season)',
      duration: '5-14 days',
      budget_per_day: { min: 30, max: 150, currency: 'USD' },
      language: 'Indonesian, Balinese, English widely spoken',
      currency: 'Indonesian Rupiah (IDR)',
      time_zone: 'WITA (UTC+8)',
      population: '4.3 million',
      area: '5,780 km²'
    },

    // Question-based content for AI
    faqs: [
      {
        question: "What is the best time to visit Bali?",
        answer: "The best time to visit Bali is during the dry season from April to October, with July-August being peak season. Avoid January-March for heavy rains."
      },
      {
        question: "How much does a trip to Bali cost per day?",
        answer: "Bali costs range from $30-50/day for budget travelers, $50-100/day for mid-range, and $150+ for luxury experiences including accommodation, food, and activities."
      },
      {
        question: "What are the must-visit temples in Bali?",
        answer: "Top Bali temples include Tanah Lot (sunset views), Uluwatu (clifftop location), Besakih (mother temple), and Tirta Empul (holy spring water)."
      },
      {
        question: "Is Bali safe for solo travelers?",
        answer: "Yes, Bali is very safe for solo travelers. Use common sense, avoid unlicensed taxis, watch for pickpockets in crowded areas, and respect local customs."
      },
      {
        question: "What should I pack for Bali?",
        answer: "Pack light cotton clothing, swimwear, sandals, sunscreen, insect repellent, rain jacket, and modest clothes for temple visits. Bring adapter for Type C/F plugs."
      }
    ],

    // Structured activity data
    top_activities: [
      {
        name: "Temple Hopping Tour",
        description: "Visit iconic temples like Tanah Lot, Uluwatu, and Besakih",
        duration: "Full day (8-10 hours)",
        price_range: { min: 20, max: 40, currency: 'USD' },
        best_time: "Early morning",
        difficulty: "Easy",
        category: "Cultural"
      },
      {
        name: "Rice Terrace Trek",
        description: "Explore Jatiluwih and Tegallalang rice terraces",
        duration: "Half day (4-6 hours)",
        price_range: { min: 15, max: 30, currency: 'USD' },
        best_time: "Morning or afternoon",
        difficulty: "Moderate",
        category: "Nature"
      },
      {
        name: "Surfing Lessons",
        description: "Learn to surf at beginner-friendly beaches in Canggu",
        duration: "2-3 hours",
        price_range: { min: 25, max: 50, currency: 'USD' },
        best_time: "Morning",
        difficulty: "Beginner to Advanced",
        category: "Adventure"
      }
    ],

    // Cost breakdown for AI extraction
    cost_breakdown: {
      accommodation: {
        budget: { min: 10, max: 25, currency: 'USD', type: 'Hostels, guesthouses' },
        mid_range: { min: 30, max: 80, currency: 'USD', type: 'Hotels, villas' },
        luxury: { min: 100, max: 500, currency: 'USD', type: 'Resorts, luxury villas' }
      },
      food: {
        local: { min: 3, max: 8, currency: 'USD', type: 'Warungs, local restaurants' },
        mid_range: { min: 10, max: 20, currency: 'USD', type: 'Casual dining' },
        fine_dining: { min: 25, max: 80, currency: 'USD', type: 'Upscale restaurants' }
      },
      transport: {
        scooter_rental: { min: 5, max: 8, currency: 'USD', type: 'Per day' },
        private_driver: { min: 30, max: 50, currency: 'USD', type: 'Per day' },
        taxi: { min: 0.5, max: 2, currency: 'USD', type: 'Per km' }
      }
    },

    // Seasonal data for AI
    seasons: [
      {
        name: "Dry Season",
        months: ["April", "May", "June", "July", "August", "September", "October"],
        weather: "Sunny, low humidity, minimal rainfall",
        pros: ["Best weather", "Ideal for outdoor activities", "Clear skies"],
        cons: ["Higher prices", "More crowds", "Need advance booking"]
      },
      {
        name: "Wet Season", 
        months: ["November", "December", "January", "February", "March"],
        weather: "Higher humidity, frequent afternoon showers",
        pros: ["Lower prices", "Fewer crowds", "Lush green landscapes"],
        cons: ["Frequent rain", "Higher humidity", "Some outdoor activities limited"]
      }
    ],

    // Transportation data
    getting_there: {
      airport: {
        name: "Ngurah Rai International Airport",
        code: "DPS",
        location: "Denpasar",
        international_flights: ["Singapore", "Kuala Lumpur", "Bangkok", "Sydney", "Tokyo"],
        domestic_connections: ["Jakarta", "Surabaya", "Yogyakarta", "Medan"]
      },
      from_jakarta: {
        flight_time: "2 hours",
        flight_price: { min: 50, max: 120, currency: 'USD' },
        frequency: "20+ daily flights"
      }
    },

    // Regional areas with specific data
    areas: [
      {
        name: "Ubud",
        description: "Cultural heart with rice terraces and wellness retreats",
        best_for: ["Culture", "Wellness", "Nature", "Digital nomads"],
        average_stay: "3-5 days",
        highlights: ["Monkey Forest", "Rice terraces", "Art markets", "Yoga studios"]
      },
      {
        name: "Seminyak",
        description: "Upscale beach area with luxury resorts and beach clubs",
        best_for: ["Luxury", "Nightlife", "Beaches", "Shopping"],
        average_stay: "2-4 days", 
        highlights: ["Beach clubs", "Fine dining", "Boutique hotels", "Sunset bars"]
      },
      {
        name: "Canggu",
        description: "Surf town with laid-back vibes and beach bars",
        best_for: ["Surfing", "Young travelers", "Beaches", "Nightlife"],
        average_stay: "3-7 days",
        highlights: ["Surf breaks", "Beach bars", "Coworking spaces", "Healthy cafes"]
      }
    ],

    tourist_types: ["Cultural Tourist", "Beach Tourist", "Adventure Tourist", "Wellness Tourist"],
    languages: ["Indonesian", "Balinese", "English"],
    
    highlights: [
      'Ancient Hindu temples and cultural sites',
      'World-class beaches and surf spots',
      'Lush rice terraces and volcanic landscapes', 
      'Vibrant arts and crafts scene',
      'Spiritual wellness retreats'
    ]
  },
  
  // Add more destinations with similar AI-optimized structure...
  {
    id: 'java',
    name: 'Java',
    slug: 'java',
    tagline: 'Heart of Indonesian Culture',
    region: 'Greater Sunda Islands',
    country: 'Indonesia',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555918219-d7d8d7c3b3f5?auto=format&fit=crop&w=800&q=80',
    description: 'Java is Indonesia\'s cultural and political heart, home to Jakarta, Yogyakarta, ancient temples, and over half of Indonesia\'s population.',
    
    coordinates: {
      lat: -7.2575,
      lng: 112.7521
    },
    
    quick_facts: {
      best_time: 'May to September (dry season)',
      duration: '7-21 days',
      budget_per_day: { min: 25, max: 150, currency: 'USD' },
      language: 'Indonesian, Javanese, English in cities',
      currency: 'Indonesian Rupiah (IDR)',
      time_zone: 'WIB (UTC+7)',
      population: '151 million',
      area: '129,904 km²'
    },

    faqs: [
      {
        question: "What are the must-see temples in Java?",
        answer: "Java's top temples are Borobudur (world's largest Buddhist temple), Prambanan (Hindu temple complex), and Mendut Temple. Borobudur sunrise tour is highly recommended."
      },
      {
        question: "How many days do you need in Java?",
        answer: "Minimum 7 days for highlights (Jakarta, Yogyakarta, temples), 10-14 days for comprehensive exploration including volcanoes, or 21+ days for in-depth cultural immersion."
      },
      {
        question: "Is Jakarta worth visiting?",
        answer: "Yes, Jakarta offers modern Indonesia experience with excellent food scene, shopping, museums, and nightlife. Allow 2-3 days for Old Town, National Monument, and cultural sites."
      }
    ],

    top_activities: [
      {
        name: "Borobudur Sunrise Tour",
        description: "Watch sunrise over the world's largest Buddhist temple",
        duration: "Half day (4-5 hours)",
        price_range: { min: 25, max: 50, currency: 'USD' },
        best_time: "Early morning (5 AM start)",
        difficulty: "Easy",
        category: "Cultural"
      },
      {
        name: "Yogyakarta Cultural Tour",
        description: "Explore Sultan's Palace, Taman Sari, and traditional crafts",
        duration: "Full day (8 hours)",
        price_range: { min: 20, max: 40, currency: 'USD' },
        best_time: "Morning",
        difficulty: "Easy",
        category: "Cultural"
      }
    ],

    tourist_types: ["Cultural Tourist", "History Tourist", "Urban Explorer", "Temple Tourist"],
    languages: ["Indonesian", "Javanese", "English"],
    
    highlights: [
      'Ancient temples: Borobudur and Prambanan',
      'Cultural capital Yogyakarta (Jogja)',
      'Vibrant capital city Jakarta',
      'Active volcanoes and crater lakes',
      'Rich Javanese culture and arts'
    ]
  },

  {
    id: 'sumba',
    name: 'Sumba',
    slug: 'sumba',
    tagline: 'Island of Megalithic Culture',
    region: 'East Nusa Tenggara',
    country: 'Indonesia',
    featured: true,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    description: 'Sumba is a remote Indonesian island known for its ancient megalithic culture, traditional villages, pristine beaches, and unique Pasola festival.',
    
    coordinates: {
      lat: -9.6575,
      lng: 120.2605
    },
    
    quick_facts: {
      best_time: 'May to October (dry season)',
      duration: '5-10 days', 
      budget_per_day: { min: 20, max: 80, currency: 'USD' },
      language: 'Indonesian, Sumbanese languages',
      currency: 'Indonesian Rupiah (IDR)',
      time_zone: 'WITA (UTC+8)',
      population: '779,049',
      area: '11,059 km²'
    },

    faqs: [
      {
        question: "What is Sumba famous for?",
        answer: "Sumba is famous for megalithic tombs, traditional villages, Pasola festival (horseback fighting), ikat weaving, and pristine beaches like Weekuri Lagoon."
      },
      {
        question: "When is the best time to see Pasola festival?",
        answer: "Pasola festival occurs February-March in western Sumba. Exact dates depend on lunar calendar and sea worm arrival. Book accommodations well in advance."
      }
    ],

    tourist_types: ["Cultural Tourist", "Adventure Tourist", "Beach Tourist", "Photography Tourist"],
    languages: ["Indonesian", "Sumbanese"],
    
    highlights: [
      'Ancient megalithic tombs and traditional villages',
      'Pristine beaches with turquoise waters',
      'Unique Pasola festival (traditional horseback fighting)',
      'Traditional ikat weaving culture',
      'Untouched natural landscapes'
    ]
  }
];

// Enhanced helper functions with AI optimization
export const getFeaturedDestinations = () => {
  return destinations.filter(dest => dest.featured);
};

export const getDestinationBySlug = (slug) => {
  return destinations.find(dest => dest.slug === slug);
};

export const getDestinationsByRegion = (region) => {
  return destinations.filter(dest => dest.region === region);
};

export const getAllRegions = () => {
  const regions = [...new Set(destinations.map(dest => dest.region))];
  return regions.sort();
};

export const searchDestinations = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return destinations.filter(dest =>
    dest.name.toLowerCase().includes(lowercaseQuery) ||
    dest.description.toLowerCase().includes(lowercaseQuery) ||
    dest.tagline.toLowerCase().includes(lowercaseQuery) ||
    dest.highlights.some(highlight => highlight.toLowerCase().includes(lowercaseQuery)) ||
    dest.faqs?.some(faq => 
      faq.question.toLowerCase().includes(lowercaseQuery) ||
      faq.answer.toLowerCase().includes(lowercaseQuery)
    )
  );
};

// AI-friendly data extraction helpers
export const getDestinationFAQs = (slug) => {
  const destination = getDestinationBySlug(slug);
  return destination?.faqs || [];
};

export const getDestinationCosts = (slug) => {
  const destination = getDestinationBySlug(slug);
  return destination?.cost_breakdown || null;
};

export const getDestinationActivities = (slug) => {
  const destination = getDestinationBySlug(slug);
  return destination?.top_activities || [];
};
