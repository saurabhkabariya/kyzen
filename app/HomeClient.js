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
    <>      {/* Modern Hero Section with Glassmorphism */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-[95vh] flex items-center overflow-hidden" aria-label="Hero">
        {/* Modern Gradient Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-purple-100 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-pink-100 opacity-60" />
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
        
        <div className="container mx-auto px-4 py-6 lg:py-8 relative z-10">
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
              {/* Modern Trust Badge with Glassmorphism */}
              <motion.div 
                className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 backdrop-blur-sm border border-emerald-200/50 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-emerald-100/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                3+ Projects Delivered Successfully
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 text-gray-900 leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="block mb-2">Transform Your</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                  Business Ideas
                </span>
                <span className="block mt-2">Into Digital Reality</span>
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
                className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.1, type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg w-full sm:w-auto text-center overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {/* <span className="text-xl">🚀</span> */}
                      Start Your Project
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.1, type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href="/projects" 
                    className="group relative inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-gray-800 border-2 border-gray-300 px-10 py-4 rounded-2xl font-bold hover:bg-white hover:border-purple-400 hover:text-purple-600 hover:shadow-xl transition-all duration-300 text-lg w-full sm:w-auto text-center overflow-hidden"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xl">✨</span>
                      View Our Work
                    </span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Quick Stats - Optimized */}
              <motion.div 
                className="grid grid-cols-3 gap-6 mt-2 pt-2 border-t border-gray-200"
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
            {/* Modern Hero Visual with Glassmorphism */}
            <motion.div 
              className="w-full lg:w-1/2 mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Modern Gradient Orbs */}
                <div className="absolute top-0 -left-8 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-40 mix-blend-multiply blur-3xl" />
                <div className="absolute -bottom-10 right-0 w-80 h-80 bg-gradient-to-l from-blue-300 to-indigo-300 rounded-full opacity-35 mix-blend-multiply blur-3xl" />
                
                {/* Modern Glassmorphism Card */}
                <div className="relative w-full h-[28rem] z-0 bg-gradient-to-br from-white/40 via-white/30 to-white/20 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 flex items-center justify-center overflow-hidden">
                  {/* Animated Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
                  
                  {/* Content */}
                  <div className="text-center relative z-10 px-8">
                    <motion.div 
                      className="text-7xl mb-6"
                    >
                      🚀
                    </motion.div>
                    <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Ready to Launch?</h3>
                    <p className="text-lg text-gray-700 font-medium">Your digital transformation starts here</p>
                    
                    {/* Modern Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/80">
                        <div className="text-2xl font-black text-blue-600">99%</div>
                        <div className="text-xs text-gray-600 font-semibold">Success</div>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/80">
                        <div className="text-2xl font-black text-purple-600">48h</div>
                        <div className="text-xs text-gray-600 font-semibold">Delivery</div>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/80">
                        <div className="text-2xl font-black text-pink-600">24/7</div>
                        <div className="text-xs text-gray-600 font-semibold">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Modern Glassmorphism Floating Cards */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center space-x-3 border border-white/60"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-800 block">Project Delivered</span>
                    <span className="text-xs text-gray-600 font-medium">On time & budget</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center space-x-3 border border-white/60"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">⚡</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-800 block">Fast & Reliable</span>
                    <span className="text-xs text-gray-600 font-medium">Lightning speed</span>
                  </div>
                </motion.div>

                {/* Simple floating elements */}
                <div className="absolute top-1/3 -left-8 w-4 h-4 bg-yellow-400 rounded-full opacity-60" />
                <div className="absolute bottom-1/3 -right-8 w-6 h-6 bg-cyan-400 rounded-full opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <Section className="bg-gradient-to-b from-white via-gray-50 to-white" id="services" aria-label="Our Services">
        <motion.div
          ref={servicesRef}
          variants={fadeInUpVariant}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
        >
          <motion.div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-base">✨</span>
              What We Offer
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 leading-tight">Turn Your Vision Into Reality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to launch, we provide end-to-end web solutions that drive results. 
              Our expert team delivers modern, scalable, and conversion-optimized websites.
            </p>
          </motion.div>
          <motion.div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerChildrenVariant}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={fadeInUpVariant}
                whileHover={{ 
                  y: -1, 
                  scale: 1.01,
                  transition: { duration: 0.1, type: "spring", stiffness: 300 }
                }}
                className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl hover:bg-white transition-all duration-300 cursor-pointer min-h-[280px] relative overflow-hidden border border-gray-200/50"
              >
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-500"></div>
                
                <motion.div 
                  className="relative z-10 mb-6 p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl group-hover:shadow-lg transition-all duration-300 border border-gray-100"
                  whileHover={{ 
                    scale: 1.01, 
                    rotate: 2,
                    transition: { duration: 0.1 }  
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="relative z-10 text-xl font-black mb-4 text-center text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{service.title}</h3>
                <p className="relative z-10 text-gray-600 text-center text-base leading-relaxed flex-grow font-medium">{service.desc}</p>
                
                {/* Modern CTA Arrow */}
                {/* <motion.div 
                  className="relative z-10 mt-6 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div> */}
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
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.1, type: "spring", stiffness: 400 }}
            >
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 text-white px-12 py-6 rounded-2xl font-black hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {/* <span className="text-2xl">💎</span> */}
                  Get Your Custom Quote
                  {/* <span className="text-2xl">⚡</span> */}
                </span>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      
      {/* Modern Technology Section */}
      <Section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden" id="technology" aria-label="Technology Stack">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
        
        <motion.div
          ref={techRef}
          variants={fadeInUpVariant}
          initial="hidden"
          animate={techInView ? "visible" : "hidden"}
          className="relative z-10"
        >
          <motion.div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 text-indigo-700 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-base">⚡</span>
              Our Tech Stack
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 leading-tight">
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
                whileHover={{ scale: 1.01, y: -2, transition: { duration: 0.1, type: "spring", stiffness: 400 } }}
                className="group flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:bg-white transition-all duration-300 cursor-pointer relative overflow-hidden border border-gray-200/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
                
                <motion.div 
                  className="relative z-10 mb-5 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl group-hover:shadow-lg transition-all duration-300 border border-gray-100"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.1 } }}
                >
                  {tech.icon}
                </motion.div>
                <span className="relative z-10 text-base font-black text-gray-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{tech.name}</span>
                
                {/* Modern Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 font-medium shadow-xl">
                  {tech.desc}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Modern Performance Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.01, y: -1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl mb-4 shadow-lg">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 font-medium">Optimized performance with 95+ PageSpeed scores</p>
            </motion.div>
            <motion.div 
              className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.01, y: -1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mb-4 shadow-lg">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600 font-medium">Enterprise-grade security and 99.9% uptime</p>
            </motion.div>
            <motion.div 
              className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.01, y: -1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl mb-4 shadow-lg">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Mobile First</h3>
              <p className="text-gray-600 font-medium">Responsive design that works on all devices</p>
            </motion.div>
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