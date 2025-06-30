'use client';
import Section from '../components/Section';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLightbulb, FaCrosshairs, FaUsers, FaAward, FaLaptopCode, FaRocket, FaClipboardCheck, FaHeadset } from 'react-icons/fa';
import Image from 'next/image';

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 200, 
      damping: 20,
      duration: 0.3
    }
  }
};

const staggerChildrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

// Team members data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Full-stack expert with 8+ years experience in React and Node.js ecosystems."
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Creative designer focused on building intuitive and beautiful user experiences."
  },
  {
    name: "Michael Patel",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    bio: "Database and system architecture specialist with a passion for performance."
  }
];

// Core values data
const coreValues = [
  {
    icon: <FaLightbulb className="text-yellow-500" />,
    title: "Innovation",
    description: "We stay at the cutting edge of web technologies to deliver modern solutions."
  },
  {
    icon: <FaClipboardCheck className="text-green-600" />,
    title: "Quality",
    description: "We never compromise on code quality and user experience."
  },
  {
    icon: <FaRocket className="text-blue-600" />,
    title: "Speed",
    description: "We believe in rapid development without sacrificing quality."
  },
  {
    icon: <FaHeadset className="text-purple-600" />,
    title: "Support",
    description: "We provide exceptional support throughout and after the development process."
  }
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' });
  
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });
  
  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/60 to-white overflow-hidden pt-16 pb-20" aria-label="About Us">
        {/* Soft background graphic */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-2xl"
            initial={{ scale: 0.8, x: -30 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full opacity-30 blur-2xl"
            initial={{ scale: 0.8, x: 30 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />
        </motion.div>
        
        <motion.div
          ref={heroRef}
          variants={staggerChildrenVariant}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <motion.div className="inline-block mb-4">
            <motion.div 
              className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaUsers className="text-blue-600 text-3xl" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUpVariant}
            className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 leading-tight"
          >
            Transforming Ideas into <span className="text-primary">Digital Reality</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUpVariant}
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            CodeCatalyst is a team of passionate developers and designers committed to building exceptional digital experiences that empower businesses to thrive in the digital landscape.
          </motion.p>
          
          <motion.div 
            variants={fadeInUpVariant}
            className="flex flex-col md:flex-row gap-8 md:gap-12 mt-10 max-w-3xl mx-auto"
          >
            <div className="flex-1">
              <div className="flex justify-center mb-4">
                <motion.div 
                  className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLightbulb className="text-yellow-500 text-2xl" />
                </motion.div>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-blue-800">Our Vision</h2>
              <p className="text-gray-700">To empower businesses through modern, scalable, and user-centric web solutions that drive growth and innovation.</p>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-center mb-4">
                <motion.div 
                  className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCrosshairs className="text-blue-600 text-2xl" />
                </motion.div>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-blue-800">Our Mission</h2>
              <p className="text-gray-700">Deliver high-performing websites with speed, elegance, and long-term value that exceed client expectations and drive business success.</p>
            </div>
          </motion.div>
        </motion.div>
      </Section>
      
      {/* Core Values Section */}
      <Section className="bg-white py-16 md:py-20" aria-label="Our Core Values">
        <motion.div
          ref={valuesRef}
          variants={staggerChildrenVariant}
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto px-4"
        >
          <motion.div variants={fadeInUpVariant} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">The principles that guide our work and define our approach to every project.</p>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={cardVariant}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3, type: "spring" }
                }}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <motion.div 
                  className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-2xl"
                  whileHover={{ rotate: 10 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
      
      {/* Stats Section */}
      {/* <Section className="bg-blue-600 text-white py-14 md:py-16" aria-label="Our Achievements">
        <motion.div
          ref={statsRef}
          variants={staggerChildrenVariant}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto px-4"
        >
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div 
              variants={fadeInUpVariant}
              className="p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-bold text-4xl md:text-5xl mb-2"
              >
                50+
              </motion.div>
              <p className="text-blue-100">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariant}
              className="p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-bold text-4xl md:text-5xl mb-2"
              >
                20+
              </motion.div>
              <p className="text-blue-100">Happy Clients</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariant}
              className="p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-bold text-4xl md:text-5xl mb-2"
              >
                5+
              </motion.div>
              <p className="text-blue-100">Years Experience</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariant}
              className="p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-bold text-4xl md:text-5xl mb-2"
              >
                99%
              </motion.div>
              <p className="text-blue-100">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section> */}
      
      {/* Team Section */}
      {/* <Section className="bg-gray-50 py-16 md:py-20" aria-label="Our Team">
        <motion.div
          ref={teamRef}
          variants={staggerChildrenVariant}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto px-4"
        >
          <motion.div variants={fadeInUpVariant} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Talented professionals who make the magic happen.</p>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={cardVariant}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.2 } 
                }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                  
                  <div className="flex space-x-3 mt-4">
                    <motion.a 
                      href="#" 
                      whileHover={{ y: -3 }}
                      className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ y: -3 }}
                      className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ y: -3 }}
                      className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section> */}
      
      {/* Why Choose Us Section */}
      <Section className="bg-white py-16 md:py-20" aria-label="Why Choose Us">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">We combine technical expertise with creative excellence to deliver exceptional results.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-4 items-start"
            >
              <div className="bg-blue-100 rounded-full p-3 mt-1">
                <FaLaptopCode className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Technical Excellence</h3>
                <p className="text-gray-700">Our developers stay current with the latest technologies and best practices to deliver clean, efficient, and maintainable code.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-4 items-start"
            >
              <div className="bg-green-100 rounded-full p-3 mt-1">
                <FaRocket className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Rapid Development</h3>
                <p className="text-gray-700">We follow agile methodologies to ensure rapid development cycles without compromising on quality or attention to detail.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-4 items-start"
            >
              <div className="bg-purple-100 rounded-full p-3 mt-1">
                <FaUsers className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">User-Centric Design</h3>
                <p className="text-gray-700">We place users at the heart of our design process, creating intuitive interfaces that deliver exceptional experiences.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-4 items-start"
            >
              <div className="bg-yellow-100 rounded-full p-3 mt-1">
                <FaAward className="text-yellow-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Quality Assurance</h3>
                <p className="text-gray-700">Our rigorous testing ensures that every project we deliver is robust, secure, and performs flawlessly.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}