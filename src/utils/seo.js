// AI-optimized SEO utilities for Indonesia Answer

export function generateTourismSchema(destination) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.name,
    "description": destination.description,
    "image": destination.image,
    "geo": destination.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": destination.coordinates.lat,
      "longitude": destination.coordinates.lng
    } : null,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": destination.region,
      "addressCountry": destination.country
    },
    "touristType": destination.tourist_types || ["Cultural Tourist", "Adventure Tourist", "Beach Tourist"],
    "availableLanguage": ["Indonesian", "English"],
    "currency": "IDR",
    "timeZone": "Asia/Jakarta"
  };
}

export function generateFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateTravelGuideSchema(destination) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": `${destination.name} Travel Guide - Indonesia Answer`,
    "description": `Complete travel guide for ${destination.name}, Indonesia. ${destination.description}`,
    "about": {
      "@type": "Place",
      "name": destination.name,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": destination.region,
        "addressCountry": destination.country
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Indonesia Answer",
      "url": "https://indonesia-answer.com"
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };
}

export function generateMetaTags(title, description, url, image) {
  return {
    title,
    description,
    canonical: `https://indonesia-answer.com${url}`,
    openGraph: {
      title,
      description,
      url: `https://indonesia-answer.com${url}`,
      type: 'website',
      images: [
        {
          url: image || '/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || '/images/twitter-default.jpg'],
    },
  };
}

export function generateArticleSchema(destination) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${destination.name} Travel Guide: ${destination.tagline}`,
    "description": destination.description,
    "image": destination.image,
    "author": {
      "@type": "Organization",
      "name": "Indonesia Answer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Indonesia Answer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://indonesia-answer.com/logo.png"
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
  "@id": `https://indonesia-answer.com/destination/${destination.slug}`
    }
  };
}

// AI-friendly content helpers
export function formatPriceRange(min, max, currency = 'USD') {
  return {
    "@type": "MonetaryAmount",
    "currency": currency,
    "minValue": min,
    "maxValue": max,
    "value": `${min}-${max}`
  };
}

export function formatDuration(hours, days) {
  if (days) {
    return `P${days}D`; // ISO 8601 duration format for AI
  }
  if (hours) {
    return `PT${hours}H`;
  }
  return null;
}
