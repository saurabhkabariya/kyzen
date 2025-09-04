// app/sitemap-services.js - Services-specific sitemap for better SEO targeting
export default function sitemapServices() {
  const baseUrl = 'https://codecatalystweb.vercel.app';
  const currentDate = new Date().toISOString();
  
  const services = [
    {
      slug: 'landing-page-development',
      title: 'Landing Page Development',
      priority: 0.9,
      changeFrequency: 'monthly'
    },
    {
      slug: 'web-application-development',
      title: 'Web Application Development',
      priority: 0.9,
      changeFrequency: 'monthly'
    },
    {
      slug: 'e-commerce-development',
      title: 'E-commerce Development',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      slug: 'mvp-development',
      title: 'MVP Development',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      slug: 'website-redesign',
      title: 'Website Redesign',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      slug: 'conversion-optimization',
      title: 'Conversion Optimization',
      priority: 0.9,
      changeFrequency: 'weekly'
    },
    {
      slug: 'seo-optimization',
      title: 'SEO Optimization',
      priority: 0.9,
      changeFrequency: 'weekly'
    },
    {
      slug: 'performance-optimization',
      title: 'Performance Optimization',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      slug: 'maintenance-support',
      title: 'Maintenance & Support',
      priority: 0.7,
      changeFrequency: 'monthly'
    }
  ];

  return services.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: service.changeFrequency,
    priority: service.priority,
  }));
}
