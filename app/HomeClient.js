'use client';
import Section from './components/Section';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket, FaLightbulb, FaShoppingCart, FaRedo, FaBug, FaTools, FaCloudUploadAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiMaterialdesign } from 'react-icons/si';
import Link from 'next/link';
import ProjectsSection from './components/ProjectsSection';

const services = [
  {
    icon: <FaRocket className="text-blue-600 text-3xl mb-3" />, 
    title: 'Landing Page Development',
    desc: 'High-converting, modern landing pages tailored to your brand.'
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-3xl mb-3" />, 
    title: 'MVP Development',
    desc: 'Quickly validate your ideas with a minimum viable product.'
  },
  {
    icon: <FaShoppingCart className="text-green-600 text-3xl mb-3" />, 
    title: 'E-commerce Website Development',
    desc: 'Robust, scalable online stores to grow your business.'
  },
  {
    icon: <FaRedo className="text-purple-600 text-3xl mb-3" />, 
    title: 'Redesigning Website',
    desc: 'Modernize your site for better engagement and conversions.'
  },
  {
    icon: <FaBug className="text-red-500 text-3xl mb-3" />, 
    title: 'Bug Fixes',
    desc: 'Swift resolution of issues to keep your site running smoothly.'
  },
  {
    icon: <FaTools className="text-gray-700 text-3xl mb-3" />, 
    title: 'Maintenance',
    desc: 'Ongoing support and updates for peace of mind.'
  },
  {
    icon: <FaCloudUploadAlt className="text-blue-400 text-3xl mb-3" />, 
    title: 'Deployment Support',
    desc: 'Seamless deployment and launch assistance.'
  },
];

const techStack = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="text-black text-4xl" />, 
    desc: 'React framework for production-grade web apps.'
  },
  {
    name: 'React.js',
    icon: <FaReact className="text-sky-500 text-4xl" />, 
    desc: 'Component-based UI library for building interfaces.'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-green-600 text-4xl" />, 
    desc: 'JavaScript runtime for scalable server-side apps.'
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-gray-800 text-4xl" />, 
    desc: 'Minimal and flexible Node.js web application framework.'
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-green-700 text-4xl" />, 
    desc: 'NoSQL database for modern applications.'
  },
  {
    name: 'HTML',
    icon: <FaHtml5 className="text-orange-600 text-4xl" />, 
    desc: 'Standard markup language for web pages.'
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className="text-blue-600 text-4xl" />, 
    desc: 'Style sheet language for designing web pages.'
  },
  {
    name: 'JavaScript',
    icon: <FaJs className="text-yellow-400 text-4xl" />, 
    desc: 'Programming language for web development.'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-sky-400 text-4xl" />, 
    desc: 'Utility-first CSS framework for rapid UI development.'
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap className="text-purple-700 text-4xl" />, 
    desc: 'Popular CSS framework for responsive design.'
  },
  // {
  //   name: 'Material UI',
  //   icon: <SiMaterialdesign className="text-blue-700 text-4xl" />, 
  //   desc: 'React UI framework with Material Design.'
  // },
];

// Animation variants for reuse
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 200, 
      damping: 20, 
      mass: 0.8,
      duration: 0.3
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

export default function HomeClient() {
  // Scroll-based animation refs
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true, margin: '-100px' });
  return (
    <>      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <img src="/wave-divider.svg" alt="" className="w-full" />
        </div>
        
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Hero Content */}
            <motion.div 
              ref={heroRef}
              variants={fadeInUpVariant}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="w-full lg:w-1/2 text-center lg:text-left md:ml-20"
            >              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight font-inter">
                <span className="block">We Build Digital</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Experiences That Spark Growth</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
                From MVPs to scalable applications, CodeCatalyst empowers your web journey with cutting-edge technologies and beautiful designs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}                  transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-lg w-full sm:w-auto text-center"
                  >
                    Get Started
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
                >                  <Link 
                    href="/#services" 
                    className="inline-block bg-white text-blue-600 border border-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 hover:shadow-lg transition-all duration-300 text-lg w-full sm:w-auto text-center"
                  >
                    Our Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Hero Animation */}
            <motion.div 
              className="w-full lg:w-1/2 mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-lg mx-auto">
                <motion.div 
                  className="absolute top-0 -left-4 w-72 h-72 bg-purple-100 rounded-full opacity-30 mix-blend-multiply blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }} 
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-10 right-4 w-72 h-72 bg-blue-100 rounded-full opacity-30 mix-blend-multiply blur-2xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, -10, 0]
                  }} 
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />                <img 
                  src="/hero-animation.svg" 
                  alt="Web development illustration" 
                  className="relative z-10 w-full h-auto drop-shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>{/* Services Section */}
      <Section className="bg-white" id="services" aria-label="Our Services">
        <motion.div
          ref={servicesRef}
          variants={fadeInUpVariant}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
        >
          <motion.div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 font-sans">Our Services</h2>
            <p className="text-gray-600 text-lg font-sans">From idea to launch, we offer a full suite of services to help your business grow online.</p>
          </motion.div>
          <motion.div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerChildrenVariant}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={fadeInUpVariant}
                whileHover={{ 
                  y: -8, 
                  scale: 1.04, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="bg-gray-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-all cursor-pointer min-h-[220px]"
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    transition: { duration: 0.2 }  
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-center font-sans">{service.title}</h3>
                <p className="text-gray-600 text-center text-base font-sans">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>      {/* Technology Section */}
      <Section className="bg-blue-50" id="technology" aria-label="Technology Stack">
        <motion.div
          ref={techRef}
          variants={fadeInUpVariant}
          initial="hidden"
          animate={techInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-3xl font-bold mb-4 text-center font-sans">
            Technology We Use
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={staggerChildrenVariant}
            initial="hidden"
            animate={techInView ? "visible" : "hidden"}
          >
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                variants={fadeInUpVariant}
                whileHover={{ 
                  scale: 1.08, 
                  y: -6,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="flex flex-col hover:z-20 items-center bg-white rounded-xl p-6 shadow group relative cursor-pointer"
              >                <motion.div
                  whileHover={{ 
                    scale: 1.15,
                    transition: { duration: 0.2 } 
                  }}
                >
                  {tech.icon}
                </motion.div>
                <span className="mt-3 text-base font-semibold text-gray-800 font-sans">{tech.name}</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5rem] w-max px-3 py-2 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:z-50 group-hover:translate-y-2 transition-all pointer-events-none z-50 whitespace-nowrap">
                  {tech.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
      <ProjectsSection />
    </>
  );
}