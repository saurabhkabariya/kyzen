import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { getStructuredData, seoConfig } from '../lib/seo-config';

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
  metadataBase: new URL(seoConfig.baseUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: '%s | Kyzen',
  },
  description: seoConfig.defaultDescription,
  keywords: seoConfig.keywords.home,
  authors: [{ name: seoConfig.siteName, url: seoConfig.baseUrl }],
  creator: seoConfig.siteName,
  publisher: seoConfig.siteName,
  applicationName: seoConfig.siteName,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: seoConfig.baseUrl,
    languages: {
      'en-IN': seoConfig.baseUrl,
    },
  },
  openGraph: {
    ...seoConfig.openGraph,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    url: seoConfig.baseUrl,
  },
  twitter: {
    ...seoConfig.twitter,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
  },
  robots: seoConfig.robots,
  verification: {
    google: 'HKgvrxQDwRgmswOq7p_GoG2yId-fcWZkSjyAEGC_ASw',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#05070a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Kyzen" />
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-IN" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                getStructuredData('organization'),
                getStructuredData('localBusiness'),
                {
                  '@type': 'WebSite',
                  name: seoConfig.siteName,
                  url: seoConfig.baseUrl,
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: `${seoConfig.baseUrl}/?s={search_term_string}`,
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DYT5ZGF2WC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DYT5ZGF2WC');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} bg-[#05070a] text-white antialiased`}
      >
        <Header />
        <main role="main" id="main-content" aria-label="Main content">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
