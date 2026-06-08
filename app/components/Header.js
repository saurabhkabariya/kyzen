'use client';
import Link from 'next/link';
import Image from 'next/image';
import Kyzen from '../../public/Kyzen.webp';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#work', label: 'Work' },
  { href: '/#process', label: 'Process' },
  { href: '/#about', label: 'About' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
      ease: 'easeOut',
    },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      opacity: { duration: 0.15 },
      height: { duration: 0.2 },
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: { duration: 0.1 },
      height: { duration: 0.15 },
      ease: 'easeIn',
    },
  },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#05070a] backdrop-blur-xl"
      style={{ backgroundColor: '#05070a' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src={Kyzen} alt="Kyzen" width={34} height={34} priority className="h-8 w-8 rounded-full object-cover" />
          <span className="text-2xl font-bold tracking-[0.22em] text-white">KYZEN</span>
        </Link>

        <ul className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link, index) => (
            <motion.li key={link.href} custom={index} initial="hidden" animate="visible" variants={navItemVariants}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-lime-400"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#audit"
            className="hidden rounded-md bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-lime-300 sm:inline-flex"
          >
            Get Free Audit
          </Link>

          <motion.button
            className="flex h-10 w-10 flex-col items-center justify-center rounded-lg border border-white/15 bg-white/5 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <span className={`mb-1 block h-0.5 w-5 bg-white transition-transform duration-150 ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`mb-1 block h-0.5 w-5 bg-white transition-opacity duration-150 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition-transform duration-150 ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </motion.button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.ul
            className="absolute left-0 top-full z-40 flex w-full flex-col gap-1 overflow-hidden border-b border-white/10 bg-[#05070a] px-4 py-3 shadow-md will-change-transform lg:hidden"
            style={{ backgroundColor: '#05070a' }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: index * 0.05 }}
                className="w-full"
              >
                <Link
                  href={link.href}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-lime-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
            <li className="pt-2">
              <Link
                href="#audit"
                className="flex w-full items-center justify-center rounded-md bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black"
                onClick={() => setMenuOpen(false)}
              >
                Get Free Audit
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
