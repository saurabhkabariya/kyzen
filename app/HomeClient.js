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
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white min-h-[95vh] flex items-center overflow-hidden" aria-label="Hero">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary gradient orb */}
          <motion.div 
            className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-50 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Secondary gradient orb */}
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-200 to-pink-200 rounded-full opacity-40 blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -40, 0],
              y: [0, 30, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          {/* Tertiary accent orb */}
          <motion.div 
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-30 blur-2xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          />
        </div>
        
        {/* Enhanced Floating Elements */}
        <motion.div 
          className="absolute top-20 right-10 w-4 h-4 bg-blue-500 rounded-full opacity-70 shadow-lg"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-6 h-6 bg-purple-500 rounded-full opacity-60 shadow-lg"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: [0.5, 0.9, 0.5],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-10 w-3 h-3 bg-cyan-400 rounded-full opacity-80"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-32 right-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-50"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        {/* Animated Wave Divider */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.svg
            className="w-full h-auto"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="white"
              opacity="0.8"
              animate={{
                d: [
                  "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z",
                  "M0,80 C300,40 900,100 1200,40 L1200,120 L0,120 Z",
                  "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.svg>
        </motion.div>
        
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
              {/* Trust Badge */}
              <motion.div 
                className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.4,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.span 
                  className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                3+ Projects Delivered Successfully
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight font-inter"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.6,
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Transform Your
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1.0, 
                    duration: 0.7,
                    type: "spring",
                    stiffness: 150
                  }}
                >
                  Business Ideas
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  Into Digital Reality
                </motion.span>
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

              {/* Social Proof */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start mb-8 space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.6,
                  duration: 0.5
                }}
              >
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex -space-x-2">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-md"
                      animate={{ 
                        rotate: [360, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                      }}
                    />
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Trusted by 3+ clients</span>
                </motion.div>
                <motion.div 
                  className="text-yellow-500 flex items-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    animate={{ 
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ⭐⭐⭐⭐⭐
                  </motion.span>
                  <span className="ml-2 text-sm text-gray-600">5.0 rating</span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.8,
                  duration: 0.6,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "rgba(249, 115, 22, 0.4), 0 15px 25px -5px rgba(234, 88, 12, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    duration: 0.3, 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                  }}
                >
                  <Link 
                    href="/contact" 
                    className="group relative inline-block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 text-lg w-full sm:w-auto text-center overflow-hidden shadow-lg"
                  >
                    <motion.span 
                      className="relative z-10 font-bold"
                      animate={{
                        x: [0, 2, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🚀 Start Your Project
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100"
                      whileHover={{
                        scale: [1, 1.05, 1],
                        transition: { duration: 0.6 }
                      }}
                    />
                    {/* Enhanced shimmer effect - removed white to prevent white box */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-20"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 opacity-20 blur-sm -z-10"></div>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    borderColor: "rgb(16, 185, 129)",
                    color: "rgb(16, 185, 129)",
                    boxShadow: "rgba(16, 185, 129, 0.2), 0 10px 10px -5px rgba(5, 150, 105, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    duration: 0.3, 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                  }}
                >
                  <Link 
                    href="/projects" 
                    className="inline-block bg-white text-gray-700 border-2 border-emerald-300 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-lg transition-all duration-300 text-lg w-full sm:w-auto text-center relative overflow-hidden group shadow-md"
                  >
                    <motion.span
                      className="font-medium"
                      animate={{
                        x: [0, -2, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ✨ View Our Work
                    </motion.span>
                    {/* Enhanced hover fill effect - removed to prevent white box */}
                    {/* Subtle glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-200 to-teal-200 opacity-10 blur-sm -z-20"></div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Enhanced Quick Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 2.0,
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className="text-center"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-primary"
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    48h
                  </motion.div>
                  <div className="text-sm text-gray-600">Fast Delivery</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-secondary"
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    99%
                  </motion.div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-success"
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    24/7
                  </motion.div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Hero Animation */}
            <motion.div 
              className="w-full lg:w-1/2 mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                delay: 0.5, 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Enhanced Background Blobs */}
                <motion.div 
                  className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-50 mix-blend-multiply blur-2xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                    x: [0, 20, 0],
                    y: [0, -30, 0]
                  }} 
                  transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-10 right-4 w-72 h-72 bg-gradient-to-l from-blue-200 to-indigo-200 rounded-full opacity-40 mix-blend-multiply blur-2xl"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    rotate: [360, 180, 0],
                    x: [0, -30, 0],
                    y: [0, 20, 0]
                  }} 
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                
                {/* Central Interactive Element */}
                <motion.div
                  className="relative w-full h-96 z-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Animated gradient overlay - changed from white to subtle color */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Content */}
                  <motion.div
                    className="text-white text-center relative z-10"
                    animate={{
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      🚀
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Launch?</h3>
                    <p className="text-lg opacity-90">Your digital transformation starts here</p>
                  </motion.div>
                </motion.div>
                
                {/* Enhanced Floating Cards */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4 flex items-center space-x-3 border border-green-100"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <span className="text-green-600 font-bold text-lg">✓</span>
                  </motion.div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800 block">Project Delivered</span>
                    <span className="text-xs text-gray-500">On time & budget</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 flex items-center space-x-3 border border-blue-100"
                  animate={{ 
                    y: [0, 12, 0],
                    rotate: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-blue-600 font-bold text-lg">⚡</span>
                  </motion.div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800 block">Fast & Reliable</span>
                    <span className="text-xs text-gray-500">Lightning speed</span>
                  </div>
                </motion.div>

                {/* Additional floating elements */}
                <motion.div
                  className="absolute top-1/3 -left-8 w-4 h-4 bg-yellow-400 rounded-full opacity-80"
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute bottom-1/3 -right-8 w-6 h-6 bg-cyan-400 rounded-full opacity-70"
                  animate={{
                    x: [0, -25, 0],
                    y: [0, 15, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
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

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.01, 
                y: -4,
                boxShadow: "rgba(139, 69, 19, 0.4), 0 18px 36px -18px rgba(124, 58, 237, 0.3)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link 
                href="/contact" 
                className="group relative inline-block bg-gradient-to-r from-amber-500 via-orange-600 to-red-500 text-white px-12 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-400 text-xl overflow-hidden shadow-xl"
              >
                <motion.span
                  className="relative z-10 flex items-center justify-center gap-2"
                  animate={{
                    y: [0, -1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span>💎</span>
                  Get Your Custom Quote
                  <motion.span
                    animate={{
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ⚡
                  </motion.span>
                </motion.span>
                
                {/* Enhanced hover gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 rounded-2xl"
                  whileHover={{
                    scale: [1, 1.02, 1],
                    transition: { duration: 0.8 }
                  }}
                />
                
                {/* Premium shimmer effect - changed from yellow to orange to prevent white appearance */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-25"
                  animate={{
                    x: ['-150%', '150%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 opacity-30 blur-lg -z-10 animate-pulse"></div>
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-50 animate-pulse"></div>
              </Link>
            </motion.div>
            <motion.p 
              className="text-gray-600 mt-6 text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-green-600 font-semibold">✅ Free consultation</span> • 
              <span className="text-blue-600 font-semibold"> 🚀 No obligation</span> • 
              <span className="text-purple-600 font-semibold"> ⚡ 24h response time</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </Section>     
      <ProjectsSection />
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
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="group flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <motion.div
                  className="relative z-10 mb-4 p-3 bg-gray-50 rounded-xl group-hover:bg-white group-hover:shadow-md transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 3,
                    transition: { duration: 0.2 } 
                  }}
                >
                  {tech.icon}
                </motion.div>
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
      
    </>
  );
}