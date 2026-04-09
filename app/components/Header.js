'use client';
import Link from 'next/link';
import Image from 'next/image';
import Kyzen from '../../public/Kyzen.webp';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#services', label: 'Services' },
  { href: '/#why-kyzen', label: 'Why Kyzen' },
  { href: '/#pricing', label: 'Pricing' },
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
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.3
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <motion.div
          className="flex items-center"
          aria-label="Kyzen"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl px-1 py-1 transition-colors duration-200"
            aria-label="Go to homepage"
          >
            <motion.div>
              <Image
                src={Kyzen}
                alt="Kyzen"
                width={45}
                height={45}
                priority
                className="h-10 w-auto"
              />
            </motion.div>

            <motion.span
              className="flex leading-none"
            >
              <span className="text-xl font-extrabold tracking-[0.02em] text-slate-900 sm:text-2xl">
                KYZEN
              </span>
            </motion.span>
          </Link>
        </motion.div>
 
        
        {/* Desktop Nav */}
        <ul className="hidden items-center gap-1 md:flex">
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
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>
        
        {/* Hamburger Icon */}
        <motion.button
          className="flex h-10 w-10 flex-col items-center justify-center rounded-lg border border-slate-300 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <span className={`mb-1 block h-0.5 w-5 bg-slate-700 transition-transform duration-150 ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
          <span className={`mb-1 block h-0.5 w-5 bg-slate-700 transition-opacity duration-150 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-5 bg-slate-700 transition-transform duration-150 ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
        </motion.button>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.ul 
            className="absolute left-0 top-full z-40 flex w-full flex-col gap-1 overflow-hidden border-b border-slate-200 bg-white px-4 py-3 shadow-md will-change-transform md:hidden"
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
                className="w-full"
              >
                <Link 
                  href={link.href} 
                  className="block rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
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