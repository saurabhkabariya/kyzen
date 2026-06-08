'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Process', href: '/#about' },
  { label: 'About', href: '/#about' },
  { label: 'Pricing', href: '/#pricing' },
];
const services = ['Growth Websites', 'WhatsApp Automation', 'Instagram Funnel Setup', 'Conversion Optimization', 'SEO Foundations'];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="border-t border-white/10 bg-[#05070a] px-4 py-10 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#05070a' }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/Kyzen.webp" alt="Kyzen" width={34} height={34} className="h-8 w-8 rounded-full object-cover" />
            <span className="text-2xl font-bold tracking-[0.22em] text-white">KYZEN</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            We build growth systems that help businesses attract, convert, and retain more customers.
          </p>
          <div className="mt-5 flex gap-3 text-white/70">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5"><FaInstagram /></span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5"><FaWhatsapp /></span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5"><FaFacebookF /></span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5"><FaLinkedinIn /></span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-lime-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {services.map((item) => (
              <li key={item}>
                <a href="#services" className="transition-colors hover:text-lime-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Let&apos;s grow your business</h3>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Ready to get more leads and sales? Let&apos;s build your growth system.
          </p>
          <button
            type="button"
            onClick={() => window.open(`https://wa.me/917383403440?text=${encodeURIComponent("Hi! I'm interested in your web development services. Can you help me?")}`, '_blank', 'noopener,noreferrer')}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-lime-300"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp /> Get Free Audit
          </button>
          <div className="mt-4 space-y-2 text-sm text-white/65">
            <div className="flex items-center gap-2"><FaPhone className="text-lime-400" /> +91-7383403440</div>
            <div className="flex items-center gap-2"><FaEnvelope className="text-lime-400" /> kyzengrowth@gmail.com</div>
            <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-lime-400" /> Surat, India</div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2024 Kyzen. All rights reserved.</p>
        <p>Built for businesses that want more leads, more sales, and more growth.</p>
      </div>
    </motion.footer>
  );
}
