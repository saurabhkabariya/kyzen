'use client';
import Section from './components/Section';
import { motion, useInView } from 'framer-motion';
import { useRef, memo, lazy, Suspense, useCallback, useMemo } from 'react';
import { FaRocket, FaLightbulb, FaShoppingCart, FaRedo, FaBug, FaTools, FaCloudUploadAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiMaterialdesign } from 'react-icons/si';
import Link from 'next/link';

// Lazy load heavy components
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ProcessSection = lazy(() => import('./components/ProcessSection'));
const PortfolioSection = lazy(() => import('./components/PortfolioSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

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

// Optimized animation variants - reduced complexity
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

const staggerChildrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

// Optimized component with reduced animations
const OptimizedBackgroundElements = memo(() => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Simplified static gradient orbs - no animations */}
    <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-30 blur-2xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-200 to-pink-200 rounded-full opacity-25 blur-2xl" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20 blur-xl" />
  </div>
));

export default function HomeClient() {
  // Scroll-based animation refs
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true, margin: '-100px' });
  return (
    <>      {/* Optimized Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white min-h-[95vh] flex items-center overflow-hidden" aria-label="Hero">
        {/* Optimized Background Elements - No animations */}
        <OptimizedBackgroundElements />
        
        {/* Static Wave Divider - No animations */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="white"
              opacity="0.8"
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Hero Content */}
            <motion.div 
              ref={heroRef}
              className="w-full lg:w-1/2 text-center lg:text-left md:ml-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2
              }}
            >
              {/* Trust Badge - Optimized */}
              <motion.div 
                className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                3+ Projects Delivered Successfully
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight font-inter"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="block">Transform Your</span>
                <span className="bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent">
                  Business Ideas
                </span>
                <span className="block">Into Digital Reality</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.4,
                  duration: 0.6,
                  ease: "easeOut"
                }}
              >
                Join 3+ successful businesses who've accelerated their growth with our modern web solutions. From concept to launch in just weeks, not months.
              </motion.p>

              {/* Social Proof - Optimized */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start mb-8 space-x-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-md" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Trusted by 3+ clients</span>
                </div>
                <div className="text-yellow-500 flex items-center">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span className="ml-2 text-sm text-gray-600">5.0 rating</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href="/contact" 
                    className="group relative inline-block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 text-lg w-full sm:w-auto text-center overflow-hidden shadow-lg"
                  >
                    <span className="relative z-10 font-bold">🚀 Start Your Project</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 opacity-20 blur-sm -z-10"></div>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href="/projects" 
                    className="inline-block bg-white text-gray-700 border-2 border-emerald-300 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-lg transition-all duration-300 text-lg w-full sm:w-auto text-center relative overflow-hidden group shadow-md"
                  >
                    <span className="font-medium">✨ View Our Work</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-200 to-teal-200 opacity-10 blur-sm -z-20"></div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Quick Stats - Optimized */}
              <motion.div 
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">48h</div>
                  <div className="text-sm text-gray-600">Fast Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">99%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </motion.div>
            </motion.div>
            {/* Optimized Hero Visual */}
            <motion.div 
              className="w-full lg:w-1/2 mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Simplified Background - Static */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-30 mix-blend-multiply blur-xl" />
                <div className="absolute -bottom-10 right-4 w-72 h-72 bg-gradient-to-l from-blue-200 to-indigo-200 rounded-full opacity-25 mix-blend-multiply blur-xl" />
                
                {/* Simplified Central Element */}
                <div className="relative w-full h-96 z-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/10 to-transparent opacity-50"></div>
                  
                  <div className="text-white text-center relative z-10">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Launch?</h3>
                    <p className="text-lg opacity-90">Your digital transformation starts here</p>
                  </div>
                </div>
                
                {/* Static Floating Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 border border-green-100">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800 block">Project Delivered</span>
                    <span className="text-xs text-gray-500">On time & budget</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 border border-blue-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">⚡</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800 block">Fast & Reliable</span>
                    <span className="text-xs text-gray-500">Lightning speed</span>
                  </div>
                </div>

                {/* Simple floating elements */}
                <div className="absolute top-1/3 -left-8 w-4 h-4 bg-yellow-400 rounded-full opacity-60" />
                <div className="absolute bottom-1/3 -right-8 w-6 h-6 bg-cyan-400 rounded-full opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section className="bg-gradient-to-b from-white to-gray-50" id="services" aria-label="Our Services">
        <motion.div
          ref={servicesRef}
          variants={fadeInUpVariant}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
        >
          <motion.div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              What We Offer
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Turn Your Vision Into Reality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to launch, we provide end-to-end web solutions that drive results. 
              Our expert team delivers modern, scalable, and conversion-optimized websites.
            </p>
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
                  y: -12, 
                  scale: 1.03,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="group bg-white rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[280px] relative overflow-hidden border border-gray-100"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <motion.div 
                  className="relative z-10 mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2 }  
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="relative z-10 text-xl font-bold mb-4 text-center text-gray-900 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="relative z-10 text-gray-600 text-center text-base leading-relaxed flex-grow">{service.desc}</p>
                
                {/* CTA Arrow */}
                <motion.div 
                  className="relative z-10 mt-6 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/contact" 
                className="group relative inline-block bg-gradient-to-r from-amber-500 via-orange-600 to-red-500 text-white px-12 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-400 text-xl overflow-hidden shadow-xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>💎</span>
                  Get Your Custom Quote
                  <span>⚡</span>
                </span>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 opacity-30 blur-lg -z-10"></div>
                <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-50"></div>
              </Link>
            </motion.div>
            <motion.p 
              className="text-gray-600 mt-6 text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-green-600 font-semibold">✅ Free consultation</span> • 
              <span className="text-blue-600 font-semibold"> 🚀 No obligation</span> • 
              <span className="text-purple-600 font-semibold"> ⚡ 24h response time</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </Section>     
      
      {/* Lazy load heavy components */}
      <Suspense fallback={<div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>}>
        <ProjectsSection />
      </Suspense>
      
      {/* Technology Section */}
      <Section className="bg-gradient-to-br from-blue-50 to-indigo-50" id="technology" aria-label="Technology Stack">
        <motion.div
          ref={techRef}
          variants={fadeInUpVariant}
          initial="hidden"
          animate={techInView ? "visible" : "hidden"}
        >
          <motion.div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Tech Stack
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Built With Modern Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use cutting-edge technologies to build fast, scalable, and future-ready applications that give your business a competitive edge.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
            variants={staggerChildrenVariant}
            initial="hidden"
            animate={techInView ? "visible" : "hidden"}
          >
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                variants={fadeInUpVariant}
                whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 mb-4 p-3 bg-gray-50 rounded-xl group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="relative z-10 text-base font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">{tech.name}</span>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                  {tech.desc}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Performance Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized performance with 95+ PageSpeed scores</p>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime</p>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-success mb-2">📱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile First</h3>
              <p className="text-gray-600">Responsive design that works on all devices</p>
            </div>
          </motion.div>
        </motion.div>
      </Section>
      
      {/* Commented out sections for better performance */}
      {/* <PortfolioSection /> */}
      {/* <ProcessSection /> */}
      {/* <ContactSection /> */}
      
    </>
  );
}