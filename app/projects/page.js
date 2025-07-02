import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    image: '/picknbuy.png',
    name: 'PickNBuy',
    description: 'Ecommerce + admin dashboard. Template + minor customization.',
    oldPrice: '$199',
    newPrice: '$119 or ₹9999',
    liveLink: 'https://picknbuyecom.netlify.app/',
  },
  {
    image: '/motivementor.png',
    name: 'MotiveMentor',
    description: 'MVP design demo for coaching/mentoring platform.',
    oldPrice: '',
    newPrice: '',
    liveLink: 'https://motivementor.vercel.app/',
  },
  {
    image: '/swifttech.png',
    name: 'SwiftTech',
    description: 'Landing page template. Template + minor customization.',
    oldPrice: '$25',
    newPrice: '$10 or ₹999',
    liveLink: 'https://swift-tech-olive.vercel.app/',
  },
  {
    image: '/codecatalyst.png',
    name: 'CodeCatalyst',
    description: 'Animated 3-page website. Template + minor customization.',
    oldPrice: '$25',
    newPrice: '$15 or ₹1499',
    liveLink: 'https://codecatalystweb.vercel.app/',
  },
  {
    image: '/supertutor.png',
    name: 'Supertutor',
    description: 'Course-selling landing page for tutors. Template + minor customization.',
    oldPrice: '$25',
    newPrice: '$10 or ₹999',
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