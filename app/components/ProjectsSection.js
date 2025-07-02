import Section from './Section';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

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
];

export default function ProjectsSection() {
  return (
    <Section className="bg-backgroundLight" aria-label="Featured Projects">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 font-sans text-textPrimary">Featured Projects</h2>
        <p className="text-textSecondary text-lg font-sans">A glimpse of our recent work. Quality, speed, and modern design.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/projects" className="inline-block bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary transition-colors duration-200 text-lg">View More Projects</Link>
      </div>
    </Section>
  );
} 