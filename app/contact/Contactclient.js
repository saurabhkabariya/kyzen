'use client';
import Section from '../components/Section';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 200, 
      damping: 20,
      duration: 0.3
    }
  }
};

const staggerChildrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const formItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

export default function ContactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  // Form state management
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      }, 1000);
    }
  };
  
  return (
    <Section className="relative min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/60 to-white overflow-hidden py-16" aria-label="Contact Us">
      {/* Soft background graphic */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-2xl"
          initial={{ scale: 0.8, x: -30 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full opacity-30 blur-2xl"
          initial={{ scale: 0.8, x: 30 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </motion.div>
      
      <motion.div
        ref={ref}
        variants={staggerChildrenVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-xl mx-auto text-center px-4 md:px-0"
      >
        <motion.h1 
          variants={fadeInUpVariant}
          className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 leading-tight"
        >
          Get In Touch
        </motion.h1>
        
        <motion.p
          variants={fadeInUpVariant}
          className="text-lg text-gray-600 mb-10 max-w-lg mx-auto"
        >
          Have a project in mind or just want to say hello? We'd love to hear from you!
        </motion.p>
        
        <motion.div 
          variants={fadeInUpVariant}
          className="mb-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">+91-7383403440</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a href="mailto:contact@codecatalyst.com" className="text-blue-600 font-medium hover:underline">
              contact@codecatalyst.com
            </a>
          </div>
        </motion.div>
        
        <motion.form 
          variants={fadeInUpVariant}
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 text-left"
        >
          {submitSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-2"
            >
              Thank you for your message! We'll get back to you soon.
            </motion.div>
          )}
          
          <motion.div custom={0} variants={formItemVariant} className="space-y-1">
            <label className="font-medium text-gray-800 block mb-1" htmlFor="name">
              Name
            </label>
            <input 
              id="name"
              type="text" 
              name="name" 
              value={formState.name}
              onChange={handleChange}
              className={`w-full border ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-200`} 
              placeholder="Your Name" 
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>
          
          <motion.div custom={1} variants={formItemVariant} className="space-y-1">
            <label className="font-medium text-gray-800 block mb-1" htmlFor="email">
              Email
            </label>
            <input 
              id="email"
              type="email" 
              name="email" 
              value={formState.email}
              onChange={handleChange}
              className={`w-full border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-200`} 
              placeholder="you@example.com" 
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>
          
          <motion.div custom={2} variants={formItemVariant} className="space-y-1">
            <label className="font-medium text-gray-800 block mb-1" htmlFor="message">
              Message
            </label>
            <textarea 
              id="message"
              name="message" 
              value={formState.message}
              onChange={handleChange}
              rows={4} 
              className={`w-full border ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-200`} 
              placeholder="Tell us about your project or how we can help..." 
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>
          
          <motion.div 
            custom={3} 
            variants={formItemVariant}
            className="mt-2"
          >
            <motion.button 
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-blue-600 hover:bg-opacity-90 text-white font-semibold rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </Section>
  );
}