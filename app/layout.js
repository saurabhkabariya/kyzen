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
    default: 'Code Catalyst | Premium Web Development Consultancy | Fast Delivery & High ROI',
    template: '%s | Code Catalyst - Web Development Experts'
  },
  description: 'Code Catalyst delivers premium web development solutions with modern frameworks (React, Next.js, Node.js). Specializing in landing pages, conversion optimization, and global SEO. Fast delivery, maximum ROI, 99% client satisfaction.',
  keywords: [
    'web development consultancy',
    'landing page development',
    'React Next.js developers',
    'conversion optimization',
    'SEO web development',
    'modern web frameworks',
    'fast delivery web development',
    'premium web solutions',
    'global web development',
    'high ROI web development'
  ],
  authors: [{ name: 'Code Catalyst Team' }],
  creator: 'Code Catalyst',
  publisher: 'Code Catalyst',
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
    title: 'Code Catalyst | Premium Web Development Consultancy | Fast Delivery & High ROI',
    description: 'Transform your business with premium web solutions. Modern frameworks, conversion optimization, global SEO. Fast delivery, maximum ROI guaranteed.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Code Catalyst - Premium Web Development Consultancy',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Catalyst | Premium Web Development Consultancy',
    description: 'Transform your business with premium web solutions. Modern frameworks, conversion optimization, global SEO.',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://codecatalystweb.vercel.app',
    languages: {
      'en-US': 'https://codecatalystweb.vercel.app',
      'es-ES': 'https://codecatalystweb.vercel.app/es',
      'fr-FR': 'https://codecatalystweb.vercel.app/fr',
    },
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://codecatalystweb.vercel.app/#organization",
        "name": "Code Catalyst",
        "url": "https://codecatalystweb.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://codecatalystweb.vercel.app/logo.png",
          "width": 300,
          "height": 100
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-0123",
          "contactType": "customer service",
          "availableLanguage": ["English", "Spanish", "French"]
        },
        "sameAs": [
          "https://github.com/codecatalyst",
          "https://linkedin.com/company/codecatalyst",
          "https://twitter.com/codecatalyst"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://codecatalystweb.vercel.app/#localbusiness",
        "name": "Code Catalyst",
        "image": "https://codecatalystweb.vercel.app/business-image.jpg",
        "description": "Premium web development consultancy specializing in modern frameworks, conversion optimization, and global SEO solutions.",
        "url": "https://codecatalystweb.vercel.app",
        "telephone": "+1-555-0123",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US",
          "addressRegion": "Global"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "50"
        }
      },
      {
        "@type": "Service",
        "@id": "https://codecatalystweb.vercel.app/#service",
        "name": "Web Development Consultancy",
        "provider": {
          "@id": "https://codecatalystweb.vercel.app/#organization"
        },
        "description": "Complete web development solutions including landing pages, modern web applications, SEO optimization, and conversion rate optimization.",
        "serviceType": "Web Development",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Page Development"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Optimization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Conversion Rate Optimization"
              }
            }
          ]
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
        
        {/* Additional structured data for better SEO */}
        <meta property="business:contact_data:street_address" content="Global Remote Services" />
        <meta property="business:contact_data:locality" content="San Francisco" />
        <meta property="business:contact_data:region" content="CA" />
        <meta property="business:contact_data:postal_code" content="94102" />
        <meta property="business:contact_data:country_name" content="United States" />
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
            gtag('config', 'G-P9QRFXCMVL');
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
        <Script id="web-vitals" strategy="afterInteractive">
          {`
            function sendToGoogleAnalytics({name, delta, id}) {
              gtag('event', name, {
                event_category: 'Web Vitals',
                event_label: id,
                value: Math.round(name === 'CLS' ? delta * 1000 : delta),
                non_interaction: true,
              });
            }
            
            import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
              getCLS(sendToGoogleAnalytics);
              getFID(sendToGoogleAnalytics);
              getFCP(sendToGoogleAnalytics);
              getLCP(sendToGoogleAnalytics);
              getTTFB(sendToGoogleAnalytics);
            });
          `}
        </Script>
        
        <Header />
        <main role="main" id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
