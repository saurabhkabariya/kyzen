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
  description: 'Code Catalyst: Premium web development consultancy timely delivery. Specializing in React/Next.js, landing pages, SEO optimization, and conversion rate optimization. 99% client satisfaction, fast delivery, maximum ROI guaranteed.',
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "PickNBuy",
              image: "https://codecatalystweb.vercel.app/picknbuy.webp",
              description:
                "Complete e-commerce solution with React, payment integration, inventory management, and powerful admin dashboard. Perfect for launching your online store quickly with modern UI/UX.",
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2026-12-31",
                url: "https://codecatalystweb.vercel.app",
              },
            }),
          }}
        />

        {/* MotiveMentor */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "MotiveMentor",
              image: "https://codecatalystweb.vercel.app/motivementor.webp",
              description:
                "Professional Motivation platform MVP featuring goal tracker, quote generator, and word game. Built with Next.js for users focusing self improvements.",
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: "https://codecatalystweb.vercel.app",
              },
            }),
          }}
        />

        {/* Supertutor */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Supertutor",
              image: "https://codecatalystweb.vercel.app/supertutor.webp",
              description:
                "Conversion-optimized course selling platform for educators with course preview, testimonials, and contact form.",
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2026-12-31",
                url: "https://codecatalystweb.vercel.app",
              },
            }),
          }}
        />


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
        
        
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-backgroundLight text-textPrimary font-sans`}
      >
        
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
