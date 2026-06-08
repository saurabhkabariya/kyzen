import Section from './Section';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

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
    description: 'A modern ecommerce platform designed to improve product discovery and streamline the checkout experience with payment integration.',
    liveLink: 'https://picknbuyecom.netlify.app/',
  },
  {
    image: '/motivementor.webp',
    name: 'MotiveMentor',
    description: 'A focused startup MVP that helps users stay engaged with daily progress tools, designed to improve retention and return visits.',
    liveLink: 'https://motivementor.vercel.app/',
  },
  {
    image: '/hirelift.webp',
    name: 'HireLift',
    description: 'A SaaS platform experience crafted to help job-seekers move faster from applications to interviews with a clearer conversion flow.',
    liveLink: 'https://www.hirelift.tech/',
  },
  {
    image: '/swifttech.webp',
    name: 'SwiftTech',
    description: 'A service-business website structured to convert visitors into qualified B2B leads through clear offers and focused calls-to-action.',
    liveLink: 'https://swift-tech-olive.vercel.app/',
  },
  {
    image: '/supertutor.webp',
    name: 'Supertutor',
    description: 'An education landing experience designed to increase course interest and drive inquiries with a cleaner decision-making path.',
    liveLink: 'https://supertutor-smoky.vercel.app/',
  },
];

export default function ProjectsSection() {
  return (
    <Section className="bg-white" id="projects" aria-label="Portfolio and Projects">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Portfolio / Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-3 text-slate-900">Websites built to create business outcomes</h2>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          Every project is designed to improve clarity, trust, and conversion so businesses can generate more leads and customers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch mb-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/projects" className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors duration-200 text-lg">View Our Work</Link>
      </div>
    </Section>
  );
} 