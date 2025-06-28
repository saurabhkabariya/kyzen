'use client';
import Section from '../components/Section';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <Section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/60 to-white overflow-hidden" aria-label="About Us">
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
        ref={ref}
        variants={staggerChildrenVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-2xl mx-auto text-center px-2"
      >
        <motion.h1 
          variants={fadeInUpVariant}
          className="text-4xl font-bold mb-8 text-blue-900"
        >
          About Us
        </motion.h1>
        
        <motion.div 
          variants={fadeInUpVariant}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Our Vision</h2>
          <p className="text-lg text-gray-700">To empower businesses through modern, scalable, and user-centric web solutions.</p>
        </motion.div>
        
        <motion.div 
          variants={fadeInUpVariant}
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Our Mission</h2>
          <p className="text-lg text-gray-700">Deliver high-performing websites with speed, elegance, and long-term value.</p>
        </motion.div>
      </motion.div>
    </Section>
  );
}