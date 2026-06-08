'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaRocket,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaCheckCircle,
  FaComments,
  FaCalendarAlt,
  FaHeadset,
} from 'react-icons/fa';
import { SiSlack } from 'react-icons/si';
import Section from './Section';

const contactMethods = [
  {
    icon: <FaPhone />,
    title: 'Phone Consultation',
    subtitle: 'Direct line to our experts',
    value: '+91-7383403440',
    action: 'tel:+917383403440',
    description: 'Immediate support and consultation',
    available: 'Mon-Fri 9AM-6PM IST',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Support',
    subtitle: 'Detailed project discussions',
    value: 'kyzengrowth@gmail.com',
    action: 'mailto:kyzengrowth@gmail.com',
    description: 'Comprehensive project planning',
    available: 'Replies within 24 hours',
  },
  {
    icon: <FaComments />,
    title: 'Live Chat',
    subtitle: 'Instant messaging support',
    value: 'Start Chat',
    action: '#',
    description: 'Real-time assistance',
    available: 'Mon-Fri 9AM-9PM IST',
    isChat: true,
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Book Meeting',
    subtitle: 'Schedule strategy session',
    value: 'Schedule Call',
    action: '#audit',
    description: 'Free strategy consultation',
    available: 'All time zones available',
  },
];

const socialProfiles = [
  { icon: <FaLinkedin />, name: 'LinkedIn', url: '#', color: 'hover:text-blue-400' },
  { icon: <FaTwitter />, name: 'Twitter', url: '#', color: 'hover:text-sky-400' },
  { icon: <FaGithub />, name: 'GitHub', url: '#', color: 'hover:text-white' },
  { icon: <SiSlack />, name: 'Slack', url: '#', color: 'hover:text-purple-400' },
];

const quickStats = [
  { number: '24hr', label: 'Avg Response Time', icon: <FaClock /> },
  { number: '98%', label: 'Client Satisfaction', icon: <FaCheckCircle /> },
  { number: '50+', label: 'Projects Delivered', icon: <FaRocket /> },
  { number: '24/7', label: 'Support Available', icon: <FaHeadset /> },
];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerChildrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
  const [isChatOpen, setIsChatOpen] = useState(false);

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

  const openChat = () => {
    setIsChatOpen(true);
  };

  return (
    <Section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white" id="contact" aria-label="Contact Us">
      <motion.div
        ref={ref}
        variants={staggerChildrenVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={fadeInUpVariant} className="mb-16 text-center">
          <motion.div
            className="mb-6 inline-block rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-black"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Let&apos;s Build Something Amazing
          </motion.div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">Transform</span>
            <br />Your Business?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/75">
            Get a free consultation and discover how we can boost your online presence,
            increase conversions, and drive sustainable growth.
          </p>
        </motion.div>

        <motion.div variants={fadeInUpVariant} className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {quickStats.map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-sm"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-3 flex justify-center text-2xl text-lime-300">{stat.icon}</div>
              <div className="mb-1 text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            variants={fadeInUpVariant}
            className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">Start Your Project</h3>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/15 p-4"
              >
                <div className="flex items-center gap-2 text-emerald-300">
                  <FaCheckCircle />
                  <span className="font-semibold">Message sent successfully!</span>
                </div>
                <p className="mt-1 text-sm text-emerald-200">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-white/70">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                  placeholder="Your Company"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-white/70">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                  >
                    <option value="" className="bg-slate-900">
                      Select Project Type
                    </option>
                    <option value="landing-page" className="bg-slate-900">
                      Landing Page
                    </option>
                    <option value="web-application" className="bg-slate-900">
                      Web Application
                    </option>
                    <option value="e-commerce" className="bg-slate-900">
                      E-commerce Store
                    </option>
                    <option value="portfolio" className="bg-slate-900">
                      Portfolio Website
                    </option>
                    <option value="other" className="bg-slate-900">
                      Other
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white/70">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                  >
                    <option value="" className="bg-slate-900">
                      Select Budget
                    </option>
                    <option value="5k-10k" className="bg-slate-900">
                      $5,000 - $10,000
                    </option>
                    <option value="10k-25k" className="bg-slate-900">
                      $10,000 - $25,000
                    </option>
                    <option value="25k-50k" className="bg-slate-900">
                      $25,000 - $50,000
                    </option>
                    <option value="50k+" className="bg-slate-900">
                      $50,000+
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-white/70">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                >
                  <option value="" className="bg-slate-900">
                    Select Timeline
                  </option>
                  <option value="asap" className="bg-slate-900">
                    ASAP (Rush Project)
                  </option>
                  <option value="1-2-months" className="bg-slate-900">
                    1-2 Months
                  </option>
                  <option value="2-3-months" className="bg-slate-900">
                    2-3 Months
                  </option>
                  <option value="3-6-months" className="bg-slate-900">
                    3-6 Months
                  </option>
                  <option value="flexible" className="bg-slate-900">
                    Flexible
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40"
                  placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 px-8 py-4 text-lg font-bold text-black transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <FaRocket />
                    <span>Send Message &amp; Get Free Quote</span>
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={fadeInUpVariant} className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white">Get In Touch</h3>
              <p className="mb-8 leading-relaxed text-white/75">
                Choose your preferred way to connect with us. We&apos;re here to help you succeed
                and answer any questions about your project.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="group rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-2xl text-lime-300">{method.icon}</div>
                    <div className="flex-1">
                      <h4 className="mb-1 text-lg font-semibold text-white">{method.title}</h4>
                      <p className="mb-2 text-sm text-white/70">{method.subtitle}</p>
                      <motion.a
                        href={method.isChat ? '#' : method.action}
                        onClick={method.isChat ? (e) => { e.preventDefault(); openChat(); } : undefined}
                        className="font-semibold text-lime-300 transition-colors duration-200 hover:text-lime-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {method.value}
                      </motion.a>
                      <div className="mt-2 text-xs text-white/50">
                        <div>{method.description}</div>
                        <div>Available: {method.available}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <h4 className="mb-4 text-lg font-semibold text-white">Business Information</h4>
              <div className="space-y-3 text-white/75">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-lime-300" />
                  <span>Remote projects worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-lime-300" />
                  <span>Mon-Fri: 9AM-6PM IST</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaHeadset className="text-lime-300" />
                  <span>Fast support for active clients</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="mb-4 text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex gap-4">
                {socialProfiles.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-white/50 ${social.color} transition-colors duration-200`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUpVariant} className="mt-16 border-t border-white/10 pt-16 text-center">
          <h3 className="mb-4 text-2xl font-bold text-white">Not Ready to Commit? No Problem!</h3>
          <p className="mx-auto mb-8 max-w-2xl text-white/75">
            Schedule a free 30-minute consultation to discuss your project, get expert advice,
            and receive a custom quote with no obligations.
          </p>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#audit"
              className="inline-block rounded-2xl bg-white px-10 py-4 text-lg font-bold text-gray-900 transition-all duration-300 hover:shadow-xl"
            >
              Book Free Consultation
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed bottom-4 right-4 z-50 h-96 w-80 rounded-xl border border-white/10 bg-white shadow-2xl"
        >
          <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-lime-400 to-emerald-400 p-4 text-black">
            <div className="flex items-center gap-2 font-semibold">
              <FaComments />
              <span>Live Chat</span>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-black transition-colors duration-200 hover:text-black/70"
              aria-label="Close chat widget"
            >
              ×
            </button>
          </div>
          <div className="flex h-full items-center justify-center p-4 text-gray-600">
            <div className="text-center">
              <FaComments className="mx-auto mb-4 text-4xl text-gray-400" />
              <p className="mb-4">Chat widget integration would go here</p>
              <p className="text-sm text-gray-500">(Tawk.to, Intercom, or custom chat solution)</p>
            </div>
          </div>
        </motion.div>
      )}
    </Section>
  );
}