// app/sitemap-portfolio.js - Portfolio-specific sitemap for project showcase
export default function sitemapPortfolio() {
  const baseUrl = 'https://codecatalystweb.vercel.app';
  const currentDate = new Date().toISOString();
  
  const portfolioProjects = [
    {
      slug: 'ecotech-solutions',
      title: 'EcoTech Solutions - Sustainable Technology Landing Page',
      category: 'landing-page',
      priority: 0.8,
      changeFrequency: 'yearly'
    },
    {
      slug: 'financeflow-dashboard',
      title: 'FinanceFlow - Financial Dashboard Application',
      category: 'web-application',
      priority: 0.8,
      changeFrequency: 'yearly'
    },
    {
      slug: 'medcare-clinic',
      title: 'MedCare - Healthcare Platform',
      category: 'healthcare',
      priority: 0.8,
      changeFrequency: 'yearly'
    },
    {
      slug: 'techstartup-landing',
      title: 'TechStartup - B2B SaaS Landing Page',
      category: 'saas',
      priority: 0.8,
      changeFrequency: 'yearly'
    },
    {
      slug: 'retailstore-ecommerce',
      title: 'RetailStore - E-commerce Platform',
      category: 'ecommerce',
      priority: 0.7,
      changeFrequency: 'yearly'
    },
    {
      slug: 'consulting-firm-website',
      title: 'Consulting Firm - Professional Website',
      category: 'business',
      priority: 0.7,
      changeFrequency: 'yearly'
    }
  ];

  const portfolioUrls = [];

  // Main portfolio page
  portfolioUrls.push({
    url: `${baseUrl}/portfolio`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  });

  // Individual project pages
  portfolioProjects.forEach(project => {
    portfolioUrls.push({
      url: `${baseUrl}/portfolio/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: project.changeFrequency,
      priority: project.priority,
    });
  });

  // Category pages for better SEO
  const categories = ['landing-page', 'web-application', 'ecommerce', 'healthcare', 'saas', 'business'];
  categories.forEach(category => {
    portfolioUrls.push({
      url: `${baseUrl}/portfolio/category/${category}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  return portfolioUrls;
}
