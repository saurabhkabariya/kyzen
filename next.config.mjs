/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    scrollRestoration: true,
  },

  // Optimize images for better SEO and performance
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200'
          }
        ]
      }
    ];
  },

  // Redirects for SEO optimization
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/portfolio.html',
        destination: '/#portfolio',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/#contact',
        permanent: true,
      }
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return [
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
      },
      {
        source: '/robots',
        destination: '/robots.txt',
      }
    ];
  },

  // Turbopack configuration for Next.js 16+
  turbopack: {
    // Empty config to silence warning - Turbopack works fine with default settings
  },

  // Output configuration for static export (if needed)
  output: 'standalone',
  
  // Trailing slash configuration for consistent URLs
  trailingSlash: false,

  // Enable source maps in production for debugging
  productionBrowserSourceMaps: false,
};

export default nextConfig;
