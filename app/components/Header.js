'use client';
import Link from 'next/link';
import Image from 'next/image';
import Kyzen from '../../public/Kyzen.webp';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#technology', label: 'Technology' },
  { href: '/contact', label: 'Contact' },
];

// Animation variants
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: i => ({
    opacity: 1, 
    y: 0,
    transition: { 
      delay: i * 0.1,
      duration: 0.2,
      ease: "easeOut"
    }
  })
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: {
      opacity: { duration: 0.15 },
      height: { duration: 0.2 },
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { 
      opacity: { duration: 0.1 },
      height: { duration: 0.15 },
      ease: "easeIn"
    }
  }
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header 
      className="bg-backgroundLight shadow sticky top-0 z-50 md: px-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.3
      }}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <motion.div
          className="flex items-center"
          aria-label="Kyzen"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-2.5 py-2 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200/80 hover:bg-white hover:shadow-lg"
            aria-label="Go to homepage"
          >
            <motion.div>
              <Image
                src={Kyzen}
                alt="Kyzen"
                width={45}
                height={45}
                priority
                className="h-10 w-auto sm:h-11"
              />
            </motion.div>

            {/* <span className="h-8 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" aria-hidden="true" /> */}

            <motion.span
              className="flex leading-none"
            >
              <span className="bg-gradient-to-r from-slate-900 via-green-700 to-green-600 bg-clip-text text-xl font-extrabold tracking-[0.02em] text-transparent sm:text-2xl">
                KYZEN
              </span>
            </motion.span>
          </Link>
        </motion.div>
 
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-textSecondary font-bold">
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={link.href} className="hover:text-primary transition-colors duration-300">
                  {link.label}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>
        
        {/* Hamburger Icon */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <span className={`block w-6 h-0.5 bg-textPrimary mb-1 transition-transform duration-150 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-textPrimary mb-1 transition-opacity duration-150 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-textPrimary transition-transform duration-150 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </motion.button>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.ul 
            className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full flex flex-col items-center space-y-4 py-4 z-40 overflow-hidden will-change-transform"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: i * 0.05 }}
                className="w-full text-center"
              >
                <Link 
                  href={link.href} 
                  className="text-textSecondary hover:text-primary transition-colors duration-200 block px-4 py-2 font-bold"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}