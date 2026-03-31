'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/#technology', label: 'Technology' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const faqLinks = [
  { href: '/faq#cost', label: 'How much does a website cost?' },
  { href: '/faq#timeline', label: 'How long does development take?' },
  { href: '/faq#maintenance', label: 'Do you offer maintenance?' },
  { href: '/faq#seo', label: 'Is SEO included?' },
];

const socialLinks = [
  { href: 'https://linkedin.com', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: <FaTwitter />, label: 'Twitter' },
  { href: 'https://github.com', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://instagram.com', icon: <FaInstagram />, label: 'Instagram' },
];

// Animation variants
const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: 'easeOut',
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 24,
      duration: 0.3
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: i => ({
    opacity: 1, 
    x: 0,
    transition: { 
      delay: i * 0.05,
      duration: 0.2
    }
  })
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
      className="bg-gray-900 text-gray-200 pt-16 pb-8 px-4 mt-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div 
            variants={childVariants}
            className="flex flex-col"
          >
            <motion.h3 
              variants={childVariants}
              className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2"
            >
              CodeCatalyst
            </motion.h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              We build digital experiences that spark growth. From MVPs to enterprise applications, we deliver with passion and precision.
            </p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                  aria-label={link.label}
                  variants={childVariants}
                >
                  <span className="text-xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={childVariants}>
            <motion.h3 
              variants={childVariants}
              className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <motion.li 
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  className="flex items-center"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center w-full"
                  >
                    <span className="mr-2 text-blue-400 text-xs">→</span>
                    <Link 
                      href={link.href} 
                      className="hover:text-blue-400 transition-colors duration-300 text-gray-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* FAQ */}
          <motion.div variants={childVariants} className="lg:col-span-1">
            <motion.h3 
              variants={childVariants}
              className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2"
            >
              FAQ
            </motion.h3>
            <ul className="space-y-2">
              {faqLinks.map((link, i) => (
                <motion.li 
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  className="flex items-center"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center w-full"
                  >
                    <span className="mr-2 text-blue-400 text-xs">→</span>
                    <Link 
                      href={link.href} 
                      className="hover:text-blue-400 transition-colors duration-300 text-gray-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div variants={childVariants}>
            <motion.h3 
              variants={childVariants}
              className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2"
            >
              Contact Us
            </motion.h3>
            <ul className="space-y-3">
              <motion.li variants={childVariants} className="flex items-start">
                <FaPhone className="text-blue-400 mt-1 mr-3" />
                <div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <p className="text-gray-400 text-sm">+91-7383403440</p>
                </div>
              </motion.li>
              
              <motion.li variants={childVariants} className="flex items-start">
                <FaEnvelope className="text-blue-400 mt-1 mr-3" />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <a href="mailto:codecatalyst8@gmail.com" className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300">
                    codecatalyst8@gmail.com
                  </a>
                </div>
              </motion.li>
              
              <motion.li variants={childVariants} className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                <div>
                  <p className="text-white text-sm font-medium">Location</p>
                  <p className="text-gray-400 text-sm">Surat, India</p>
                </div>
              </motion.li>
            </ul>
            
            <motion.div 
              className="mt-6"
              variants={childVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                <FaEnvelope className="mr-2" /> Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-sm pt-6 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Kyzen. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2 text-xs">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}