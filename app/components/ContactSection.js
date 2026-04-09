'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import Section from './Section';

const contactMethods = [
  {
    icon: <FaPhone />,
    title: 'Phone',
    value: '+91-7383403440',
    action: 'tel:+917383403440',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'kyzengrowth@gmail.com',
    action: 'mailto:kyzengrowth@gmail.com',
    note: 'Replies within 24 hours',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    value: 'Remote projects worldwide',
    action: '#',
  },
];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <Section className="bg-white" id="contact" aria-label="Contact Us">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUpVariant}
        className="mx-auto max-w-6xl"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Start your project with Kyzen</h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your goals and we will send a clear scope and pricing estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div variants={fadeInUpVariant} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-slate-900">Direct Contact</h3>
            <p className="mt-2 text-slate-600">Pick the fastest way to reach us.</p>

            <div className="mt-6 space-y-4">
              {contactMethods.map((method) => (
                <div key={method.title} className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-blue-700">{method.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">{method.title}</p>
                      {method.action === '#' ? (
                        <p className="text-base font-semibold text-slate-900">{method.value}</p>
                      ) : (
                        <a
                          href={method.action}
                          className="text-base font-semibold text-slate-900 underline-offset-2 hover:text-blue-700 hover:underline"
                        >
                          {method.value}
                        </a>
                      )}
                      <p className="mt-1 text-sm text-slate-500">{method.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              <div className="flex items-center gap-2 text-slate-900">
                <FaClock className="text-blue-700" />
                <span className="font-semibold">Typical response time</span>
              </div>
              <p className="mt-2">Within 24 hours on business days.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpVariant} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-3 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900">Project Brief</h3>
            <p className="mt-2 text-slate-600">Share a few details so we can recommend the best approach.</p>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4"
              >
                <div className="flex items-center gap-2 text-emerald-700">
                  <FaCheckCircle className="text-emerald-600" />
                  <span className="font-semibold">Message sent successfully</span>
                </div>
                <p className="mt-1 text-sm text-emerald-700">We will get back to you within 24 hours.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tony Stark"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="tony@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Company"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-slate-700">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Project Type</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="web-application">Web Application</option>
                    <option value="e-commerce">E-commerce Store</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-700">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Budget</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-slate-700">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Timeline</option>
                  <option value="asap">ASAP (Rush Project)</option>
                  <option value="1-2-months">1-2 Months</option>
                  <option value="2-3-months">2-3 Months</option>
                  <option value="3-6-months">3-6 Months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project goals, target audience, and specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
