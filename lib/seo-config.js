// lib/seo-config.js - Centralized SEO configuration for maximum traffic optimization
export const seoConfig = {
  // Base site configuration
  baseUrl: 'https://codecatalystweb.vercel.app',
  siteName: 'Code Catalyst',
  defaultTitle: 'Code Catalyst | Premium Web Development Consultancy | Fast Delivery & High ROI',
  defaultDescription: 'Code Catalyst delivers premium web development solutions with modern frameworks (React, Next.js, Node.js). Specializing in landing pages, conversion optimization, and global SEO. Fast delivery, maximum ROI, 99% client satisfaction.',
  
  // Business information
  business: {
    name: 'Code Catalyst',
    phone: '+1 (555) 123-4567',
    email: 'codecatalyst8@gmail.com',
    address: {
      street: 'Global Remote Services',
      city: 'San Francisco',
      region: 'CA',
      postalCode: '94102',
      country: 'United States'
    },
    hours: {
      monday: '09:00-18:00',
      tuesday: '09:00-18:00',
      wednesday: '09:00-18:00',
      thursday: '09:00-18:00',
      friday: '09:00-18:00',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    socialMedia: {
      linkedin: 'https://linkedin.com/company/codecatalyst',
      twitter: 'https://twitter.com/codecatalyst',
      github: 'https://github.com/codecatalyst',
      facebook: 'https://facebook.com/codecatalyst'
    }
  },

  // SEO keywords for different pages
  keywords: {
    home: [
      'web development consultancy',
      'landing page development',
      'React Next.js developers',
      'conversion optimization',
      'SEO web development',
      'modern web frameworks',
      'fast delivery web development',
      'premium web solutions',
      'global web development',
      'high ROI web development',
      'performance optimization',
      'mobile responsive design',
      'e-commerce development',
      'web application development'
    ],
    services: [
      'custom web development',
      'professional web design',
      'full-stack development',
      'MVP development services',
      'website redesign services',
      'conversion rate optimization',
      'technical SEO services',
      'web performance optimization',
      'maintenance and support'
    ],
    portfolio: [
      'web development portfolio',
      'successful web projects',
      'client case studies',
      'before and after websites',
      'conversion rate improvements',
      'performance optimization results',
      'modern website examples'
    ]
  },

  // Structured data templates
  structuredData: {
    organization: {
      '@type': 'Organization',
      name: 'Code Catalyst',
      description: 'Premium web development consultancy specializing in modern frameworks and conversion optimization.',
      foundingDate: '2020',
      numberOfEmployees: '10-50',
      knowsAbout: [
        'Web Development',
        'React Development',
        'Next.js Development',
        'Node.js Development',
        'Conversion Optimization',
        'SEO Optimization',
        'Performance Optimization'
      ]
    },
    localBusiness: {
      '@type': 'LocalBusiness',
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Credit Card, PayPal, Bank Transfer',
      areaServed: [
        'United States',
        'Canada',
        'United Kingdom',
        'Australia',
        'European Union',
        'Global'
      ]
    },
    services: [
      {
        '@type': 'Service',
        name: 'Landing Page Development',
        description: 'High-converting landing pages built with modern frameworks',
        provider: 'Code Catalyst',
        areaServed: 'Global',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Landing Page'
              }
            }
          ]
        }
      }
    ]
  },

  // Analytics and tracking
  analytics: {
    googleAnalytics: 'G-P9QRFXCMVL',
    googleTagManager: 'GTM-XXXXXXX',
    facebookPixel: 'your-facebook-pixel-id',
    linkedInInsight: 'your-linkedin-insight-tag'
  },

  // Open Graph defaults
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Code Catalyst',
    images: [
      {
        url: '/og-image-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Code Catalyst - Premium Web Development Consultancy'
      }
    ]
  },

  // Twitter Card defaults
  twitter: {
    card: 'summary_large_image',
    site: '@codecatalyst',
    creator: '@codecatalyst'
  },

  // Robots and crawling preferences
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

// Helper functions for SEO
export const generatePageSEO = (page, customData = {}) => {
  const baseConfig = seoConfig;
  
  return {
    title: customData.title || baseConfig.defaultTitle,
    description: customData.description || baseConfig.defaultDescription,
    keywords: customData.keywords || baseConfig.keywords[page] || baseConfig.keywords.home,
    openGraph: {
      ...baseConfig.openGraph,
      title: customData.title || baseConfig.defaultTitle,
      description: customData.description || baseConfig.defaultDescription,
      url: `${baseConfig.baseUrl}${customData.path || ''}`,
      ...customData.openGraph
    },
    twitter: {
      ...baseConfig.twitter,
      title: customData.title || baseConfig.defaultTitle,
      description: customData.description || baseConfig.defaultDescription,
      ...customData.twitter
    },
    robots: customData.robots || baseConfig.robots,
    canonical: `${baseConfig.baseUrl}${customData.path || ''}`
  };
};

export const generateStructuredData = (type, customData = {}) => {
  const baseData = seoConfig.structuredData[type];
  
  return {
    '@context': 'https://schema.org',
    ...baseData,
    ...customData
  };
};
