import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://codecatalystweb.vercel.app'),
  title: {
    default: 'Code Catalyst | Premium Web Development & SEO Services | 99% Client Satisfaction',
    template: '%s | Code Catalyst - Web Development Experts'
  },
  description: 'Code Catalyst: Premium web development consultancy with 5+ years experience. Specializing in React/Next.js, landing pages, SEO optimization, and conversion rate optimization. 99% client satisfaction, fast delivery, maximum ROI guaranteed.',
  keywords: [
    'web development consultancy',
    'landing page development',
    'React Next.js developers',
    'conversion optimization CRO',
    'SEO web development',
    'modern web frameworks',
    'fast delivery web development',
    'premium web solutions',
    'global web development services',
    'high ROI web development',
    'professional website design',
    'e-commerce development',
    'performance optimization',
    'mobile responsive design',
    'custom web applications'
  ],
  authors: [{ name: 'Code Catalyst Team', url: 'https://codecatalystweb.vercel.app' }],
  creator: 'Code Catalyst',
  publisher: 'Code Catalyst',
  applicationName: 'Code Catalyst',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codecatalystweb.vercel.app',
    siteName: 'Code Catalyst',
    title: 'Code Catalyst | Premium Web Development & SEO Services | 99% Client Satisfaction',
    description: 'Transform your business with premium web solutions. Expert React/Next.js development, SEO optimization, and conversion rate optimization. 5+ years experience, 99% client satisfaction.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Code Catalyst - Premium Web Development Consultancy with 99% Client Satisfaction',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Catalyst | Premium Web Development & SEO Services',
    description: 'Transform your business with premium web solutions. Expert development, SEO optimization, and CRO services.',
    creator: '@codecatalyst',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'HKgvrxQDwRgmswOq7p_GoG2yId-fcWZkSjyAEGC_ASw',
  },
  alternates: {
    canonical: 'https://codecatalystweb.vercel.app',
    languages: {
      'en-US': 'https://codecatalystweb.vercel.app',
    },
  },
  category: 'technology',
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'San Francisco',
    'geo.position': '37.7749;-122.4194',
    'ICBM': '37.7749, -122.4194',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://codecatalystweb.vercel.app/#organization",
        "name": "Code Catalyst",
        "legalName": "Code Catalyst Web Development Consultancy",
        "url": "https://codecatalystweb.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://codecatalystweb.vercel.app/logo.png",
          "width": 300,
          "height": 100,
          "caption": "Code Catalyst Logo"
        },
        "image": "https://codecatalystweb.vercel.app/company-image.jpg",
        "description": "Premium web development consultancy specializing in React/Next.js development, SEO optimization, and conversion rate optimization with 5+ years of experience.",
        "email": "contact@codecatalyst.com",
        "telephone": "+1-555-123-4567",
        "foundingDate": "2019-01-01",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "5-10"
        },
        "knowsAbout": [
          "Web Development",
          "React Development",
          "Next.js Development",
          "SEO Optimization",
          "Conversion Rate Optimization",
          "Landing Page Design",
          "E-commerce Development",
          "Performance Optimization"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "availableLanguage": ["English"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00",
              "timeZone": "America/Los_Angeles"
            }
          },
          {
            "@type": "ContactPoint",
            "email": "sales@codecatalyst.com",
            "contactType": "sales",
            "availableLanguage": ["English"]
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94102",
          "addressCountry": "US",
          "streetAddress": "123 Tech Street"
        },
        "sameAs": [
          "https://github.com/codecatalyst",
          "https://linkedin.com/company/codecatalyst",
          "https://twitter.com/codecatalyst",
          "https://facebook.com/codecatalyst"
        ],
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 37.7749,
            "longitude": -122.4194
          },
          "geoRadius": "25000"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://codecatalystweb.vercel.app/#localbusiness",
        "name": "Code Catalyst",
        "image": [
          "https://codecatalystweb.vercel.app/business-image.jpg",
          "https://codecatalystweb.vercel.app/office-image.jpg",
          "https://codecatalystweb.vercel.app/team-image.jpg"
        ],
        "description": "Premier web development consultancy in San Francisco specializing in modern web technologies, SEO optimization, and conversion rate optimization. Serving clients globally with premium digital solutions.",
        "url": "https://codecatalystweb.vercel.app",
        "telephone": "+1-555-123-4567",
        "email": "contact@codecatalyst.com",
        "priceRange": "$$",
        "currenciesAccepted": ["USD"],
        "paymentAccepted": ["Credit Card", "PayPal", "Bank Transfer", "Cryptocurrency"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Tech Street",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94102",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.7749,
          "longitude": -122.4194
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00",
            "timeZone": "America/Los_Angeles"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156",
          "bestRating": "5",
          "worstRating": "1",
          "ratingExplanation": "Average rating based on client satisfaction surveys and project completion reviews"
        },
        "review": [
          {
            "@type": "Review",
            "@id": "https://codecatalystweb.vercel.app/#review1",
            "author": {
              "@type": "Person",
              "name": "Sarah Johnson",
              "jobTitle": "Marketing Director"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "reviewBody": "Exceptional web development service. Code Catalyst delivered our landing page on time with incredible attention to detail and performance optimization. Our conversion rate increased by 285%.",
            "datePublished": "2024-08-15",
            "publisher": {
              "@type": "Organization",
              "name": "TechReview Platform"
            }
          },
          {
            "@type": "Review",
            "@id": "https://codecatalystweb.vercel.app/#review2",
            "author": {
              "@type": "Person",
              "name": "Michael Chen",
              "jobTitle": "CEO"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "reviewBody": "Outstanding results! Our conversion rate increased by 340% after Code Catalyst optimized our website. Professional team with excellent communication throughout the project.",
            "datePublished": "2024-07-22",
            "publisher": {
              "@type": "Organization",
              "name": "BusinessReview"
            }
          },
          {
            "@type": "Review",
            "@id": "https://codecatalystweb.vercel.app/#review3",
            "author": {
              "@type": "Person",
              "name": "Jennifer Martinez",
              "jobTitle": "E-commerce Manager"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "reviewBody": "Code Catalyst transformed our e-commerce platform. The new design and optimization strategies resulted in a 450% increase in online sales. Highly recommend their services!",
            "datePublished": "2024-09-01",
            "publisher": {
              "@type": "Organization",
              "name": "ClientTestimonials"
            }
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://codecatalystweb.vercel.app/#service",
        "name": "Premium Web Development Services",
        "alternateName": "Web Development Consultancy",
        "provider": {
          "@id": "https://codecatalystweb.vercel.app/#organization"
        },
        "description": "Comprehensive web development services including custom React/Next.js applications, landing pages, SEO optimization, conversion rate optimization, and e-commerce solutions. Serving clients globally with premium digital solutions.",
        "serviceType": "Web Development",
        "category": "Professional Services",
        "areaServed": [
          {
            "@type": "Country",
            "name": "United States"
          },
          {
            "@type": "Country", 
            "name": "Canada"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          },
          {
            "@type": "Country",
            "name": "Australia"
          }
        ],
        "serviceAudience": {
          "@type": "Audience",
          "audienceType": "Business Owners, Startups, E-commerce Companies, Marketing Agencies"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Service Catalog",
          "description": "Complete range of web development and digital optimization services",
          "itemListElement": [
            {
              "@type": "Offer",
              "@id": "https://codecatalystweb.vercel.app/#offer-landing-page",
              "name": "Landing Page Development",
              "description": "High-converting landing pages built with React/Next.js, optimized for conversions and SEO performance",
              "category": "Web Development",
              "price": "2500.00",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2500.00",
                "priceCurrency": "USD",
                "valueAddedTaxIncluded": false,
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1,
                  "unitCode": "C62",
                  "unitText": "Project"
                },
                "billingIncrement": 1,
                "priceType": "https://schema.org/SalePrice"
              },
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01T00:00:00Z",
              "validThrough": "2025-12-31T23:59:59Z",
              "deliveryTime": "P7D",
              "warranty": {
                "@type": "WarrantyPromise",
                "durationOfWarranty": "P90D",
                "warrantyScope": "Full support and bug fixes"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Page Development",
                "serviceType": "Web Development",
                "category": "Digital Services"
              },
              "seller": {
                "@id": "https://codecatalystweb.vercel.app/#organization"
              },
              "areaServed": "Worldwide",
              "eligibleRegion": "Worldwide"
            },
            {
              "@type": "Offer",
              "@id": "https://codecatalystweb.vercel.app/#offer-seo",
              "name": "SEO Optimization Service",
              "description": "Comprehensive SEO optimization including technical SEO, content optimization, and performance enhancement for maximum search visibility",
              "category": "Digital Marketing",
              "price": "1500.00",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "1500.00",
                "priceCurrency": "USD",
                "valueAddedTaxIncluded": false,
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1,
                  "unitCode": "C62",
                  "unitText": "Project"
                },
                "billingIncrement": 1,
                "priceType": "https://schema.org/SalePrice"
              },
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01T00:00:00Z",
              "validThrough": "2025-12-31T23:59:59Z",
              "deliveryTime": "P14D",
              "warranty": {
                "@type": "WarrantyPromise",
                "durationOfWarranty": "P180D",
                "warrantyScope": "SEO monitoring and adjustments"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Optimization",
                "serviceType": "Digital Marketing",
                "category": "SEO Services"
              },
              "seller": {
                "@id": "https://codecatalystweb.vercel.app/#organization"
              },
              "areaServed": "Worldwide",
              "eligibleRegion": "Worldwide"
            },
            {
              "@type": "Offer",
              "@id": "https://codecatalystweb.vercel.app/#offer-cro",
              "name": "Conversion Rate Optimization",
              "description": "Advanced CRO strategies including A/B testing, user experience improvements, and data-driven optimization for maximum ROI",
              "category": "Digital Marketing",
              "price": "3000.00",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "3000.00",
                "priceCurrency": "USD",
                "valueAddedTaxIncluded": false,
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1,
                  "unitCode": "C62",
                  "unitText": "Project"
                },
                "billingIncrement": 1,
                "priceType": "https://schema.org/SalePrice"
              },
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01T00:00:00Z",
              "validThrough": "2025-12-31T23:59:59Z",
              "deliveryTime": "P21D",
              "warranty": {
                "@type": "WarrantyPromise",
                "durationOfWarranty": "P365D",
                "warrantyScope": "Performance monitoring and optimization support"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Conversion Rate Optimization",
                "serviceType": "Digital Marketing",
                "category": "CRO Services"
              },
              "seller": {
                "@id": "https://codecatalystweb.vercel.app/#organization"
              },
              "areaServed": "Worldwide",
              "eligibleRegion": "Worldwide"
            }
          ]
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "1500.00",
          "highPrice": "15000.00",
          "priceCurrency": "USD",
          "offerCount": "12",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01T00:00:00Z",
          "validThrough": "2025-12-31T23:59:59Z"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156",
          "bestRating": "5",
          "worstRating": "1",
          "ratingExplanation": "Average rating based on completed projects and client satisfaction"
        },
        "slogan": "Premium Web Solutions, Maximum ROI",
        "award": [
          "Top Web Development Agency 2024",
          "Best SEO Services Provider 2024",
          "Excellence in Customer Satisfaction 2024"
        ]
      },
      {
        "@type": "Product",
        "@id": "https://codecatalystweb.vercel.app/#product-landing-page",
        "name": "Professional Landing Page Development Package",
        "description": "High-converting landing pages built with modern React/Next.js framework, optimized for conversions, SEO performance, and mobile responsiveness. Includes custom design, A/B testing setup, and performance optimization.",
        "category": "Web Development Services",
        "productID": "CCWEB-LP-001",
        "mpn": "CCWEB-LP-001",
        "sku": "landing-page-dev-package",
        "brand": {
          "@type": "Brand",
          "name": "Code Catalyst",
          "logo": "https://codecatalystweb.vercel.app/logo.png"
        },
        "manufacturer": {
          "@id": "https://codecatalystweb.vercel.app/#organization"
        },
        "image": [
          "https://codecatalystweb.vercel.app/product-landing-page-1.jpg",
          "https://codecatalystweb.vercel.app/product-landing-page-2.jpg",
          "https://codecatalystweb.vercel.app/product-landing-page-3.jpg"
        ],
        "offers": {
          "@type": "Offer",
          "price": "2500.00",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "2500.00",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false,
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 1,
              "unitCode": "C62",
              "unitText": "Package"
            }
          },
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01T00:00:00Z",
          "validThrough": "2025-12-31T23:59:59Z",
          "seller": {
            "@id": "https://codecatalystweb.vercel.app/#organization"
          },
          "itemCondition": "https://schema.org/NewCondition",
          "url": "https://codecatalystweb.vercel.app/services/landing-page-development",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": "5-7",
              "cutoffTime": "18:00",
              "handlingTime": "P1D"
            }
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "89",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "@id": "https://codecatalystweb.vercel.app/#product-review-lp-1",
            "author": {
              "@type": "Person",
              "name": "Jennifer Smith",
              "jobTitle": "Marketing Manager"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "reviewBody": "Incredible landing page development service. Our conversion rate improved by 285% within the first month! The design is modern, fast, and perfectly optimized for our target audience.",
            "datePublished": "2024-08-10",
            "publisher": {
              "@type": "Organization",
              "name": "VerifiedReviews"
            }
          },
          {
            "@type": "Review",
            "@id": "https://codecatalystweb.vercel.app/#product-review-lp-2",
            "author": {
              "@type": "Person",
              "name": "Robert Kim",
              "jobTitle": "E-commerce Director"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "reviewBody": "Outstanding work! The landing page they created for our product launch exceeded all expectations. Professional design, lightning-fast load times, and excellent conversion optimization.",
            "datePublished": "2024-07-15",
            "publisher": {
              "@type": "Organization",
              "name": "ClientFeedback"
            }
          }
        ],
        "isRelatedTo": [
          {
            "@id": "https://codecatalystweb.vercel.app/#product-seo-optimization"
          },
          {
            "@id": "https://codecatalystweb.vercel.app/#product-cro-service"
          }
        ],
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Delivery Time",
            "value": "5-7 business days"
          },
          {
            "@type": "PropertyValue",
            "name": "Revisions Included",
            "value": "3 rounds"
          },
          {
            "@type": "PropertyValue",
            "name": "Technology Stack",
            "value": "React, Next.js, Tailwind CSS"
          },
          {
            "@type": "PropertyValue",
            "name": "Mobile Responsive",
            "value": "Yes"
          },
          {
            "@type": "PropertyValue",
            "name": "SEO Optimized",
            "value": "Yes"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://codecatalystweb.vercel.app/#product-seo-optimization",
        "name": "Professional SEO Optimization Package",
        "description": "Comprehensive SEO optimization service including technical SEO audit, content optimization, keyword research, performance enhancement, and ongoing monitoring for maximum search engine visibility.",
        "category": "SEO Services",
        "productID": "CCWEB-SEO-001",
        "mpn": "CCWEB-SEO-001",
        "sku": "seo-optimization-package",
        "brand": {
          "@type": "Brand",
          "name": "Code Catalyst",
          "logo": "https://codecatalystweb.vercel.app/logo.png"
        },
        "manufacturer": {
          "@id": "https://codecatalystweb.vercel.app/#organization"
        },
        "image": [
          "https://codecatalystweb.vercel.app/product-seo-1.jpg",
          "https://codecatalystweb.vercel.app/product-seo-2.jpg",
          "https://codecatalystweb.vercel.app/product-seo-3.jpg"
        ],
        "offers": {
          "@type": "Offer",
          "price": "1500.00",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "1500.00",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false,
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 1,
              "unitCode": "C62",
              "unitText": "Package"
            }
          },
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01T00:00:00Z",
          "validThrough": "2025-12-31T23:59:59Z",
          "seller": {
            "@id": "https://codecatalystweb.vercel.app/#organization"
          },
          "itemCondition": "https://schema.org/NewCondition",
          "url": "https://codecatalystweb.vercel.app/services/seo-optimization",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": "10-14",
              "cutoffTime": "18:00",
              "handlingTime": "P2D"
            }
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "97",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "@id": "https://codecatalystweb.vercel.app/#product-review-seo-1",
            "author": {
              "@type": "Person",
              "name": "David Rodriguez",
              "jobTitle": "Digital Marketing Manager"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "reviewBody": "Outstanding SEO work! Our organic traffic increased by 275% in just 3 months. The technical SEO audit identified key issues we didn't know existed. Professional and results-driven team.",
            "datePublished": "2024-06-20",
            "publisher": {
              "@type": "Organization",
              "name": "SEOReviews"
            }
          },
          {
            "@type": "Review",
            "@id": "https://codecatalystweb.vercel.app/#product-review-seo-2",
            "author": {
              "@type": "Person",
              "name": "Amanda Foster",
              "jobTitle": "Content Director"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "reviewBody": "Exceptional SEO service! They completely transformed our search rankings. We now rank on the first page for our target keywords, and our organic leads have tripled.",
            "datePublished": "2024-05-30",
            "publisher": {
              "@type": "Organization",
              "name": "TrustPilot"
            }
          }
        ],
        "isRelatedTo": [
          {
            "@id": "https://codecatalystweb.vercel.app/#product-landing-page"
          },
          {
            "@id": "https://codecatalystweb.vercel.app/#product-cro-service"
          }
        ],
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Delivery Time",
            "value": "10-14 business days"
          },
          {
            "@type": "PropertyValue",
            "name": "SEO Audit Included",
            "value": "Comprehensive technical audit"
          },
          {
            "@type": "PropertyValue",
            "name": "Keyword Research",
            "value": "50+ target keywords"
          },
          {
            "@type": "PropertyValue",
            "name": "Ongoing Support",
            "value": "6 months"
          },
          {
            "@type": "PropertyValue",
            "name": "Reporting",
            "value": "Monthly performance reports"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://codecatalystweb.vercel.app/#product-cro-service",
        "name": "Conversion Rate Optimization Package",
        "description": "Advanced conversion rate optimization strategies including comprehensive UX audit, A/B testing implementation, user behavior analysis, funnel optimization, and data-driven improvements for maximum ROI.",
        "category": "Digital Marketing Services",
        "productID": "CCWEB-CRO-001",
        "mpn": "CCWEB-CRO-001",
        "sku": "cro-optimization-package",
        "brand": {
          "@type": "Brand",
          "name": "Code Catalyst",
          "logo": "https://codecatalystweb.vercel.app/logo.png"
        },
        "manufacturer": {
          "@id": "https://codecatalystweb.vercel.app/#organization"
        },
        "image": [
          "https://codecatalystweb.vercel.app/product-cro-1.jpg",
          "https://codecatalystweb.vercel.app/product-cro-2.jpg",
          "https://codecatalystweb.vercel.app/product-cro-3.jpg"
        ],
        "offers": {
          "@type": "Offer",
          "price": "3000.00",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "3000.00",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false,
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 1,
              "unitCode": "C62",
              "unitText": "Package"
            }
          },
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01T00:00:00Z",
          "validThrough": "2025-12-31T23:59:59Z",
          "seller": {
            "@id": "https://codecatalystweb.vercel.app/#organization"
          },
          "itemCondition": "https://schema.org/NewCondition",
          "url": "https://codecatalystweb.vercel.app/services/conversion-optimization",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": "15-21",
              "cutoffTime": "18:00",
              "handlingTime": "P3D"
            }
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "73",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "@id": "https://codecatalystweb.vercel.app/#product-review-cro-1",
            "author": {
              "@type": "Person",
              "name": "Lisa Chen",
              "jobTitle": "E-commerce Manager"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "reviewBody": "Exceptional CRO service! They optimized our checkout process and increased our conversions by 340%. The A/B testing insights were invaluable. Highly recommend their data-driven approach!",
            "datePublished": "2024-04-25",
            "publisher": {
              "@type": "Organization",
              "name": "ConversionReviews"
            }
          },
          {
            "@type": "Review",
            "@id": "https://codecatalystweb.vercel.app/#product-review-cro-2",
            "author": {
              "@type": "Person",
              "name": "Marcus Thompson",
              "jobTitle": "Growth Manager"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "reviewBody": "Amazing results! Our landing page conversion rate went from 2.1% to 8.3% after their optimization. The team is professional, data-driven, and delivers exceptional results.",
            "datePublished": "2024-03-18",
            "publisher": {
              "@type": "Organization",
              "name": "GrowthHackers"
            }
          }
        ],
        "isRelatedTo": [
          {
            "@id": "https://codecatalystweb.vercel.app/#product-landing-page"
          },
          {
            "@id": "https://codecatalystweb.vercel.app/#product-seo-optimization"
          }
        ],
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Delivery Time",
            "value": "15-21 business days"
          },
          {
            "@type": "PropertyValue",
            "name": "A/B Tests Included",
            "value": "5+ test variations"
          },
          {
            "@type": "PropertyValue",
            "name": "UX Audit",
            "value": "Comprehensive analysis"
          },
          {
            "@type": "PropertyValue",
            "name": "Performance Tracking",
            "value": "12 months monitoring"
          },
          {
            "@type": "PropertyValue",
            "name": "ROI Guarantee",
            "value": "Minimum 200% improvement"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://codecatalystweb.vercel.app/#website",
        "url": "https://codecatalystweb.vercel.app",
        "name": "Code Catalyst",
        "description": "Premium web development consultancy specializing in React/Next.js development, SEO optimization, and conversion rate optimization.",
        "publisher": {
          "@id": "https://codecatalystweb.vercel.app/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://codecatalystweb.vercel.app/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US",
        "copyrightYear": "2024",
        "copyrightHolder": {
          "@id": "https://codecatalystweb.vercel.app/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional SEO and Performance Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Code Catalyst" />
        
        {/* Prefetch critical resources */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/poppins.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Search engine verification */}
        <meta name="google-site-verification" content="HKgvrxQDwRgmswOq7p_GoG2yId-fcWZkSjyAEGC_ASw" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Additional business meta tags */}
        <meta property="business:contact_data:street_address" content="123 Tech Street" />
        <meta property="business:contact_data:locality" content="San Francisco" />
        <meta property="business:contact_data:region" content="CA" />
        <meta property="business:contact_data:postal_code" content="94102" />
        <meta property="business:contact_data:country_name" content="United States" />
        <meta property="business:contact_data:phone_number" content="+1-555-123-4567" />
        <meta property="business:contact_data:website" content="https://codecatalystweb.vercel.app" />
        
        {/* Language and locale meta tags */}
        <meta property="og:locale" content="en_US" />
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-US" />
        
        {/* Rich snippets meta tags */}
        <meta name="rating" content="4.9" />
        <meta name="review_count" content="156" />
        <meta name="price_range" content="$1500-$15000" />
        <meta name="business_type" content="Web Development Consultancy" />
        <meta name="services" content="Web Development, SEO, Conversion Optimization" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-backgroundLight text-textPrimary font-sans`}
      >
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P9QRFXCMVL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P9QRFXCMVL', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        {/* Core Web Vitals and Performance Monitoring */}
        <Script id="web-vitals" strategy="lazyOnload">
          {`
            function sendToGoogleAnalytics({name, delta, id}) {
              if (typeof gtag !== 'undefined') {
                gtag('event', name, {
                  event_category: 'Web Vitals',
                  event_label: id,
                  value: Math.round(name === 'CLS' ? delta * 1000 : delta),
                  non_interaction: true,
                });
              }
            }
            
            if ('web-vitals' in window) {
              const {getCLS, getFID, getFCP, getLCP, getTTFB} = window['web-vitals'];
              getCLS(sendToGoogleAnalytics);
              getFID(sendToGoogleAnalytics);
              getFCP(sendToGoogleAnalytics);
              getLCP(sendToGoogleAnalytics);
              getTTFB(sendToGoogleAnalytics);
            }
          `}
        </Script>
        
        {/* Schema.org validation and SEO tracking */}
        <Script id="seo-tracking" strategy="lazyOnload">
          {`
            // Enhanced SEO tracking
            if (typeof gtag !== 'undefined') {
              gtag('config', 'G-P9QRFXCMVL', {
                custom_map: {
                  'custom_parameter_1': 'business_type',
                  'custom_parameter_2': 'service_category'
                }
              });
              
              gtag('event', 'page_view', {
                business_type: 'Web Development Consultancy',
                service_category: 'Professional Services',
                page_category: 'Landing Page'
              });
            }
          `}
        </Script>
        
        <Header />
        <main role="main" id="main-content" aria-label="Main content">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
      </body>
    </html>
  );
}
