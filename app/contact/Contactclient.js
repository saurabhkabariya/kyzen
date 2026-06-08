'use client';
import Section from '../components/Section';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaClock, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      duration: 0.3,
    },
  },
};

const staggerChildrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const contactItems = [
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91-7383403440',
    href: 'tel:+917383403440',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'kyzengrowth@gmail.com',
    href: 'mailto:kyzengrowth@gmail.com',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: 'Quick message',
    href: 'https://wa.me/917383403440?text=Hi!%20I%27m%20interested%20in%20your%20web%20development%20services.',
  },
];

const quickPillars = [
  { label: 'Response Time', value: '24hr', icon: <FaClock /> },
  { label: 'Client Satisfaction', value: '98%', icon: <FaCheckCircle /> },
  { label: 'Consultation', value: 'Free Audit', icon: <FaArrowRight /> },
];

export default function ContactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xldnzjpj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormState({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        console.error('Formspree error:', await response.json());
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="relative overflow-hidden bg-[#05070a] py-4 text-white" aria-label="Contact Us">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(163,230,53,0.12),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(163,230,53,0.08),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.04),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/60 to-transparent" />

      <motion.div
        ref={ref}
        variants={staggerChildrenVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUpVariant} className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-lime-400/25 bg-lime-400/8 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-lime-300 sm:text-[11px]">
            Contact Kyzen
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s build your next <span className="text-lime-400">growth system</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg">
            Tell us what you want to improve, and we&apos;ll send a clear next step with no pressure.
          </p>
        </motion.div>

        <motion.div variants={fadeInUpVariant} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {quickPillars.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-lime-400">
                <span className="text-base sm:text-lg">{item.icon}</span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white/65">{item.label}</span>
              </div>
              <div className="mt-2 text-xl sm:text-2xl font-bold text-white">{item.value}</div>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeInUpVariant} className="rounded-3xl border border-white/10 bg-black/35 p-6 sm:p-8">
            <h2 className="text-xl font-semibold uppercase tracking-[0.22em] text-white/75">Direct Contact</h2>
            <p className="mt-3 text-sm leading-7 text-white/60">Choose the fastest way to reach us.</p>

            <div className="mt-6 space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={item.label === 'WhatsApp' ? 'noreferrer' : undefined}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-lime-400/30 hover:bg-white/8"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-lime-400/20 bg-lime-400/8 text-lime-400">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">{item.label}</p>
                      <p className="mt-1 text-base font-semibold text-white break-words max-w-full">{item.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-lime-400/20 bg-[#081106] p-5">
              <div className="flex items-center gap-2 text-lime-300">
                <FaClock />
                <span className="font-semibold">Typical response time</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-white/65">Within 24 hours on business days.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpVariant} className="rounded-3xl border border-lime-400/20 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold uppercase tracking-[0.22em] text-white/75">Project Brief</h2>
            <p className="mt-3 text-sm leading-7 text-white/60">Share a few details and we&apos;ll respond with a clear plan.</p>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/15 p-4"
              >
                <div className="flex items-center gap-2 text-emerald-300">
                  <FaCheckCircle />
                  <span className="font-semibold">Message sent successfully!</span>
                </div>
                <p className="mt-1 text-sm text-emerald-200">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5 text-left">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full rounded-xl border ${errors.name ? 'border-red-400 bg-red-50/10' : 'border-white/10 bg-black/55'} px-4 py-3 text-white placeholder:text-white/40 text-sm sm:text-base outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full rounded-xl border ${errors.email ? 'border-red-400 bg-red-50/10' : 'border-white/10 bg-black/55'} px-4 py-3 text-white placeholder:text-white/40 text-sm sm:text-base outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full resize-none rounded-xl border ${errors.message ? 'border-red-400 bg-red-50/10' : 'border-white/10 bg-black/55'} px-4 py-3 text-white placeholder:text-white/40 text-sm sm:text-base outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30`}
                  placeholder="Tell us about your project or how we can help..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FaArrowRight />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}