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
  FaHeadset
} from 'react-icons/fa';
import { SiSkype, SiSlack, SiZoom } from 'react-icons/si';
import Section from './Section';

const contactMethods = [
  {
    icon: <FaPhone />,
    title: "Phone Consultation",
    subtitle: "Direct line to our experts",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567",
    description: "Immediate support and consultation",
    available: "Mon-Fri 9AM-6PM EST"
  },
  {
    icon: <FaEnvelope />,
    title: "Email Support",
    subtitle: "Detailed project discussions",
    value: "codecatalyst8@gmail.com",
    action: "mailto:codecatalyst8@gmail.com",
    description: "Comprehensive project planning",
    available: "24/7 response within 2 hours"
  },
  {
    icon: <FaComments />,
    title: "Live Chat",
    subtitle: "Instant messaging support",
    value: "Start Chat",
    action: "#",
    description: "Real-time assistance",
    available: "Mon-Fri 9AM-9PM EST",
    isChat: true
  },
  {
    icon: <FaCalendarAlt />,
    title: "Book Meeting",
    subtitle: "Schedule strategy session",
    value: "Schedule Call",
    action: "https://calendly.com/codecatalyst",
    description: "Free 30-min consultation",
    available: "All time zones available"
  }
];

const socialProfiles = [
  { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com/company/codecatalyst", color: "hover:text-blue-600" },
  { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com/codecatalyst", color: "hover:text-blue-400" },
  { icon: <FaGithub />, name: "GitHub", url: "https://github.com/codecatalyst", color: "hover:text-gray-800" },
  { icon: <SiSlack />, name: "Slack", url: "https://codecatalyst.slack.com", color: "hover:text-purple-600" }
];

const quickStats = [
  { number: "24hr", label: "Avg Response Time", icon: <FaClock /> },
  { number: "98%", label: "Client Satisfaction", icon: <FaCheckCircle /> },
  { number: "50+", label: "Projects Delivered", icon: <FaRocket /> },
  { number: "24/7", label: "Support Available", icon: <FaHeadset /> }
];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerChildrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
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
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
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
        message: ''
      });
    }, 2000);
  };

  const openChat = () => {
    setIsChatOpen(true);
    // In a real implementation, this would open your chat widget
    console.log('Opening chat widget...');
  };

  return (
    <Section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white" id="contact" aria-label="Contact Us">
      <motion.div
        ref={ref}
        variants={staggerChildrenVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div 
          variants={fadeInUpVariant}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Let's Build Something Amazing
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to 
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"> Transform</span>
            <br />Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get a free consultation and discover how we can boost your online presence, 
            increase conversions, and drive sustainable growth.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          variants={fadeInUpVariant}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl text-purple-400 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            variants={fadeInUpVariant}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Start Your Project</h3>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-6"
              >
                <div className="flex items-center space-x-2 text-green-300">
                  <FaCheckCircle />
                  <span className="font-semibold">Message sent successfully!</span>
                </div>
                <p className="text-green-200 text-sm mt-1">We'll get back to you within 24 hours.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800">Select Project Type</option>
                    <option value="landing-page" className="bg-gray-800">Landing Page</option>
                    <option value="web-application" className="bg-gray-800">Web Application</option>
                    <option value="e-commerce" className="bg-gray-800">E-commerce Store</option>
                    <option value="portfolio" className="bg-gray-800">Portfolio Website</option>
                    <option value="other" className="bg-gray-800">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800">Select Budget</option>
                    <option value="5k-10k" className="bg-gray-800">$5,000 - $10,000</option>
                    <option value="10k-25k" className="bg-gray-800">$10,000 - $25,000</option>
                    <option value="25k-50k" className="bg-gray-800">$25,000 - $50,000</option>
                    <option value="50k+" className="bg-gray-800">$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Select Timeline</option>
                  <option value="asap" className="bg-gray-800">ASAP (Rush Project)</option>
                  <option value="1-2-months" className="bg-gray-800">1-2 Months</option>
                  <option value="2-3-months" className="bg-gray-800">2-3 Months</option>
                  <option value="3-6-months" className="bg-gray-800">3-6 Months</option>
                  <option value="flexible" className="bg-gray-800">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <FaRocket />
                    <span>Send Message & Get Free Quote</span>
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            variants={fadeInUpVariant}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Choose your preferred way to connect with us. We're here to help you succeed 
                and answer any questions about your project.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl text-purple-400 mt-1">{method.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-gray-300 text-sm mb-2">{method.subtitle}</p>
                      <motion.a
                        href={method.isChat ? "#" : method.action}
                        onClick={method.isChat ? (e) => { e.preventDefault(); openChat(); } : undefined}
                        className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {method.value}
                      </motion.a>
                      <div className="mt-2 text-xs text-gray-400">
                        <div>{method.description}</div>
                        <div>Available: {method.available}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Profiles */}
            <div className="pt-8 border-t border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialProfiles.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-gray-400 ${social.color} transition-colors duration-200`}
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

            {/* Business Hours & Location */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">Business Information</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-purple-400" />
                  <span>San Francisco, CA & Remote Worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaClock className="text-purple-400" />
                  <span>Mon-Fri: 9AM-6PM PST</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaHeadset className="text-purple-400" />
                  <span>24/7 Emergency Support Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          variants={fadeInUpVariant}
          className="text-center mt-16 pt-16 border-t border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Not Ready to Commit? No Problem!</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
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
              href="https://calendly.com/codecatalyst"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 inline-block"
            >
              Book Free Consultation
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Live Chat Widget (simplified version) */}
      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed bottom-4 right-4 bg-white rounded-xl shadow-2xl w-80 h-96 z-50 border border-gray-200"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaComments />
              <span className="font-semibold">Live Chat</span>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              ✕
            </button>
          </div>
          <div className="p-4 h-full flex items-center justify-center text-gray-600">
            <div className="text-center">
              <FaComments className="text-4xl text-gray-400 mb-4 mx-auto" />
              <p className="mb-4">Chat widget integration would go here</p>
              <p className="text-sm text-gray-500">
                (Tawk.to, Intercom, or custom chat solution)
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </Section>
  );
}
