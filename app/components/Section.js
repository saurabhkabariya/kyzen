'use client';
import { motion } from 'framer-motion';

export default function Section({ children, className = '', ...props }) {
  return (
    <motion.section 
      className={`py-12 px-4 ${className}`} 
      {...props}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}