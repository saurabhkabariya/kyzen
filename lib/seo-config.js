export const seoConfig = {
  baseUrl: 'https://kyzen-growth.vercel.app',
  siteName: 'Kyzen',
  defaultTitle: 'Kyzen | Conversion-Focused Web Development, SEO & WhatsApp Automation',
  defaultDescription:
    'Kyzen builds conversion-focused websites, SEO-friendly landing pages, WhatsApp automation flows, and business growth systems for service businesses, startups, and local brands in Surat and beyond.',
  business: {
    name: 'Kyzen',
    phone: '+91-7383403440',
    email: 'kyzengrowth@gmail.com',
    address: {
      street: 'Kathodara',
      city: 'Surat',
      region: 'Gujarat',
      postalCode: '395006',
      country: 'IN',
    },
  },
  keywords: {
    home: [
      'conversion focused website development in Surat',
      'Next.js website development for small business',
      'SEO friendly business website design',
      'WhatsApp automation for lead generation',
      'landing page design for service businesses',
      'website development for local businesses in India',
      'lead generation website design',
      'performance optimized marketing website'
    ],
    about: [
      'Surat web development agency',
      'conversion focused web design team',
      'business growth website consultant',
      'Next.js and React website development',
      'SEO and automation for businesses'
    ],
    contact: [
      'web development company contact Surat',
      'request website proposal in Surat',
      'contact Kyzen for SEO and automation',
      'book a free growth audit'
    ],
    projects: [
      'conversion focused website portfolio',
      'Next.js and React project examples',
      'ecommerce website development examples',
      'solar business website case study',
      'startup landing page portfolio'
    ]
  },
  pages: {
    home: {
      title: 'Kyzen | Conversion-Focused Web Development, SEO & WhatsApp Automation',
      description:
        'Kyzen designs fast, mobile-first websites, SEO-ready landing pages, WhatsApp automation flows, and conversion systems that help businesses turn visitors into leads and customers.',
      path: '/',
    },
    about: {
      title: 'About Kyzen | Surat Web Development, SEO & Growth Systems',
      description:
        'Learn how Kyzen helps businesses in Surat and across India with conversion-focused websites, SEO foundations, WhatsApp automation, and ongoing growth systems.',
      path: '/about',
    },
    contact: {
      title: 'Contact Kyzen | Request a Website Proposal or Free Growth Audit',
      description:
        'Contact Kyzen for website development, SEO support, WhatsApp automation, or a free growth audit. Available by phone, email, and WhatsApp.',
      path: '/contact',
    },
    projects: {
      title: 'Projects by Kyzen | Conversion-Focused Website Portfolio',
      description:
        'Explore Kyzen projects across solar, ecommerce, SaaS, education, and service businesses built to improve clarity, trust, and conversion.',
      path: '/projects',
    },
  },
  structuredData: {
    organization: {
      '@type': 'Organization',
      name: 'Kyzen',
      url: 'https://kyzen-growth.vercel.app',
      logo: 'https://kyzen-growth.vercel.app/Kyzen.webp',
      email: 'kyzengrowth@gmail.com',
      telephone: '+91-7383403440',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kathodara',
        addressLocality: 'Surat',
        addressRegion: 'Gujarat',
        postalCode: '395006',
        addressCountry: 'IN'
      },
      sameAs: [],
      knowsAbout: [
        'Conversion-Focused Web Development',
        'Next.js Development',
        'React Development',
        'SEO Foundations',
        'WhatsApp Automation',
        'Business Automation',
        'Performance Optimization'
      ]
    },
    localBusiness: {
      '@type': 'ProfessionalService',
      name: 'Kyzen',
      url: 'https://kyzen-growth.vercel.app',
      telephone: '+91-7383403440',
      email: 'kyzengrowth@gmail.com',
      priceRange: '₹₹',
      areaServed: ['Surat', 'Gujarat', 'India', 'Remote'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kathodara',
        addressLocality: 'Surat',
        addressRegion: 'Gujarat',
        postalCode: '395006',
        addressCountry: 'IN'
      },
      serviceType: [
        'Website Development',
        'Landing Page Design',
        'SEO Optimization',
        'WhatsApp Automation',
        'Conversion Optimization'
      ]
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kyzen',
    images: [
      {
        url: '/Kyzen.webp',
        width: 1200,
        height: 630,
        alt: 'Kyzen conversion-focused web development and SEO'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
  },
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
  },
};

export const getPageSeo = (pageKey) => {
  const page = seoConfig.pages[pageKey] ?? seoConfig.pages.home;
  const keywords = seoConfig.keywords[pageKey] ?? seoConfig.keywords.home;

  return {
    title: page.title,
    description: page.description,
    keywords,
    alternates: {
      canonical: `${seoConfig.baseUrl}${page.path}`,
    },
    openGraph: {
      ...seoConfig.openGraph,
      title: page.title,
      description: page.description,
      url: `${seoConfig.baseUrl}${page.path}`,
    },
    twitter: {
      ...seoConfig.twitter,
      title: page.title,
      description: page.description,
    },
    robots: seoConfig.robots,
  };
};

export const getStructuredData = (type) => ({
  '@context': 'https://schema.org',
  ...(seoConfig.structuredData[type] ?? {}),
});
