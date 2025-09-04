import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    image: '/picknbuy.webp',
    name: 'PickNBuy',
    description: 'Complete e-commerce solution with React, payment integration, inventory management, and powerful admin dashboard. Perfect for launching your online store quickly with modern UI/UX.',
    oldPrice: '$199',
    price: '$119 or ₹9999',
    liveLink: 'https://picknbuyecom.netlify.app/',
  },
  {
    image: '/motivementor.webp',
    name: 'MotiveMentor',
    description: 'Professional Motivation platform MVP featuring goal tracker, quote generator, and word game. Built with Next.js for users focusing self improvements.',
    oldPrice: '',
    price: '',
    liveLink: 'https://motivementor.vercel.app/',
  },
  {
    image: '/hirelift.webp',
    name: 'HireLift',
    description: 'AI-powered job application SaaS with resume optimization, interview prep tools, and HR Contactlist. Helps job seekers increase interview callbacks by 3x.',
    oldPrice: '',
    price: '',
    liveLink: 'https://hirelift.vercel.app/',
  },
  {
    image: '/swifttech.webp',
    name: 'SwiftTech',
    description: 'High-converting tech company landing page with modern animations, service showcases, and lead capture forms. Optimized for B2B client acquisition.',
    oldPrice: '$25',
    price: '$10 or ₹999',
    liveLink: 'https://swift-tech-olive.vercel.app/',
  },
  {
    image: '/codecatalyst.webp',
    name: 'CodeCatalyst',
    description: 'Premium animated agency website with smooth Framer Motion transitions, portfolio showcase, and contact forms. Designed to convert visitors into clients.',
    oldPrice: '$25',
    price: '$15 or ₹1499',
    liveLink: 'https://codecatalystweb.vercel.app/',
  },
  {
    image: '/supertutor.webp',
    name: 'Supertutor',
    description: 'Conversion-optimized course selling platform for educators with course preview, testimonials, and contact form.',
    oldPrice: '$25',
    price: '$10 or ₹999',
    liveLink: 'https://supertutor-smoky.vercel.app/',
  },
];

export const metadata = {
  title: 'Projects | CodeCatalyst',
  description: 'Explore our featured and custom web projects. Ecommerce, MVPs, landing pages, and more by CodeCatalyst.',
};

export default function ProjectsPage() {
  return (
    <Section className="bg-backgroundLight min-h-screen" aria-label="All Projects">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 font-sans text-textPrimary">All Projects</h1>
        <p className="text-textSecondary text-lg font-sans">Browse our portfolio of modern, high-quality web projects.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch mb-12">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
      <div className="text-center mt-8">
        <span className="text-textSecondary text-base font-medium">Custom websites available – priced as per requirements.</span>
      </div>
    </Section>
  );
} 