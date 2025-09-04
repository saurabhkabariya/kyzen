'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaRocket, 
  FaChartLine,
  FaMobile,
  FaSearch,
  FaClock,
  FaAward
} from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import Section from './Section';

const portfolioProjects = [
  {
    id: 1,
    title: "EcoTech Solutions",
    category: "Landing Page",
    description: "High-converting landing page for a sustainable technology company with advanced SEO optimization and conversion tracking.",
    image: "/portfolio/ecotech-hero.jpg",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> }
    ],
    metrics: {
      loadTime: "1.2s",
      lighthouse: "98/100",
      conversion: "+340%",
      traffic: "+250%"
    },
    features: [
      "Core Web Vitals Optimized",
      "Mobile-First Design", 
      "Advanced SEO",
      "Conversion Tracking",
      "Multi-language Support"
    ],
    liveUrl: "https://ecotech-demo.vercel.app",
    githubUrl: "https://github.com/codecatalyst/ecotech",
    featured: true
  },
  {
    id: 2,
    title: "FinanceFlow Dashboard",
    category: "Web Application",
    description: "Modern financial dashboard with real-time data visualization and advanced analytics for investment firms.",
    image: "/portfolio/financeflow-dashboard.jpg",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ],
    metrics: {
      loadTime: "0.9s",
      lighthouse: "96/100",
      uptime: "99.9%",
      users: "10k+"
    },
    features: [
      "Real-time Analytics",
      "Interactive Charts",
      "Data Export",
      "Role-based Access",
      "API Integration"
    ],
    liveUrl: "https://financeflow-demo.vercel.app",
    githubUrl: "https://github.com/codecatalyst/financeflow",
    featured: true
  },
  {
    id: 3,
    title: "MedCare Clinic",
    category: "Healthcare Platform",
    description: "Comprehensive healthcare platform with appointment booking, patient management, and telemedicine capabilities.",
    image: "/portfolio/medcare-platform.jpg",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> }
    ],
    metrics: {
      loadTime: "1.1s",
      lighthouse: "97/100",
      bookings: "+180%",
      satisfaction: "4.9/5"
    },
    features: [
      "Appointment Booking",
      "Patient Portal",
      "Telemedicine",
      "HIPAA Compliant",
      "Multi-clinic Support"
    ],
    liveUrl: "https://medcare-demo.vercel.app",
    githubUrl: "https://github.com/codecatalyst/medcare",
    featured: false
  },
  {
    id: 4,
    title: "TechStartup Landing",
    category: "Landing Page",
    description: "High-performance landing page for a B2B SaaS startup with advanced conversion optimization and A/B testing.",
    image: "/portfolio/techstartup-landing.jpg",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> }
    ],
    metrics: {
      loadTime: "0.8s",
      lighthouse: "99/100",
      conversion: "+420%",
      leads: "+300%"
    },
    features: [
      "A/B Testing Ready",
      "Advanced Analytics",
      "Lead Generation",
      "CRM Integration",
      "Progressive Web App"
    ],
    liveUrl: "https://techstartup-demo.vercel.app",
    githubUrl: "https://github.com/codecatalyst/techstartup",
    featured: true
  }
];

const categories = ["All", "Landing Page", "Web Application", "Healthcare Platform"];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerChildrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeCategory);

  const featuredProjects = portfolioProjects.filter(project => project.featured);

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-blue-50" id="portfolio" aria-label="Our Portfolio">
      <motion.div
        ref={ref}
        variants={staggerChildrenVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div 
          variants={fadeInUpVariant}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Our Success Stories
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Portfolio of 
            <span className="bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed businesses with high-performance web solutions that deliver 
            exceptional results and maximum ROI.
          </p>
        </motion.div>

        {/* Performance Metrics Banner */}
        <motion.div 
          variants={fadeInUpVariant}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <motion.div 
            className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <FaRocket className="text-3xl text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">avg 1.1s</div>
            <div className="text-sm text-gray-600">Load Time</div>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <FaChartLine className="text-3xl text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">+320%</div>
            <div className="text-sm text-gray-600">Avg Conversion</div>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <FaAward className="text-3xl text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">97.5</div>
            <div className="text-sm text-gray-600">Avg Lighthouse</div>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <FaMobile className="text-3xl text-orange-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-600">Mobile Score</div>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          variants={fadeInUpVariant}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects Section */}
        {activeCategory === "All" && (
          <motion.div 
            variants={fadeInUpVariant}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project) => (
                <motion.div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🚀</div>
                        <div className="text-lg font-semibold text-gray-700">{project.title}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="text-sm" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex items-center space-x-3 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center space-x-1 text-gray-600">
                          <span className="text-lg">{tech.icon}</span>
                          <span className="text-sm font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <motion.div 
          variants={staggerChildrenVariant}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUpVariant}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌟</div>
                    <div className="text-sm font-medium text-gray-700">{project.title}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-2 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-lg text-gray-600">{tech.icon}</span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-sm" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUpVariant}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-600 mb-8">Let's create a high-performance solution that drives real results for your business.</p>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 inline-block"
            >
              Start Your Project
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
