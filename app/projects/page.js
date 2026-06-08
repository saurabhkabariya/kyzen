import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    image: '/solartech.webp',
    name: 'Solartech',
    description: 'A website customized for a solar energy company to showcase their services and drive leads.',
    liveLink: 'https://solartech-xi.vercel.app/',
  },
  {
    image: '/picknbuy.webp',
    name: 'PickNBuy',
    description: 'A modern ecommerce platform designed to improve product discovery and streamline checkout with integrated payments.',
    liveLink: 'https://picknbuyecom.netlify.app/',
  },
  {
    image: '/motivementor.webp',
    name: 'MotiveMentor',
    description: 'A startup MVP that helps users stay engaged with consistent progress tools, built to improve retention.',
    liveLink: 'https://motivementor.vercel.app/',
  },
  {
    image: '/hirelift.webp',
    name: 'HireLift',
    description: 'A SaaS product experience crafted to guide users from application to interview opportunities faster.',
    liveLink: 'https://www.hirelift.tech/',
  },
  {
    image: '/swifttech.webp',
    name: 'SwiftTech',
    description: 'A conversion-oriented service website built to turn B2B visitors into qualified inbound leads.',
    liveLink: 'https://swift-tech-olive.vercel.app/',
  },
  {
    image: '/supertutor.webp',
    name: 'Supertutor',
    description: 'An education-focused website designed to increase course interest and drive higher-quality inquiries.',
    liveLink: 'https://supertutor-smoky.vercel.app/',
  },
];

export const metadata = {
  title: 'Projects | Kyzen',
  description: 'Explore business-focused web projects by Kyzen, built to improve clarity, trust, and conversion.',
};

export default function ProjectsPage() {
  return (
    <Section className="bg-[#05070a] min-h-screen" aria-label="All Projects">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 text-white">All Projects</h1>
        <p className="text-white/70 text-lg">A portfolio of websites built to help businesses generate leads and customers.</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <span className="text-white/70 text-base font-medium">Custom websites available – priced as per requirements.</span>
        </div>
      </div>
    </Section>
  );
}