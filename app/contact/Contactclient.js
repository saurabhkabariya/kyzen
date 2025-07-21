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
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (validateForm()) {
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
        >          {/* WhatsApp Contact */}
          <motion.button
            onClick={() => {
              const phoneNumber = "917383403440";
              const message = "Hi! I'm interested in your web development services. Can you help me?";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 17,
              duration: 0.2
            }}
            className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-md will-change-transform"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="text-white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
              </svg>
            </div>
            <span className="font-medium">Chat on WhatsApp</span>
          </motion.button>          {/* Email Contact */}
          <motion.a
            href="mailto:codecatalyst8@gmail.com"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 17,
              duration: 0.2
            }}
            className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-md will-change-transform"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-medium">Send us an Email</span>
          </motion.a>        </motion.div>
        
        {/* Quick Contact Options */}
        {/* <motion.div
          variants={fadeInUpVariant}
          className="mb-8 bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-blue-100"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Prefer instant messaging?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => {
                const phoneNumber = "917383403440";
                const message = "Hi! I'm interested in your web development services. Can you help me?";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
              </svg>
              <span className="text-sm font-medium">Quick WhatsApp</span>
            </motion.button>
            
            <motion.a
              href="mailto:codecatalyst8@gmail.com?subject=Project Inquiry&body=Hi! I'm interested in your web development services."
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">Quick Email</span>
            </motion.a>
          </div>
        </motion.div> */}
        
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