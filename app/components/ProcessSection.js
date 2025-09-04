'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaRocket, 
  FaLightbulb, 
  FaCode, 
  FaFlask, 
  FaRedo,
  FaHandshake,
  FaClock,
  FaShieldAlt,
  FaGlobe,
  FaCheck
} from 'react-icons/fa';
import Section from './Section';

const processSteps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description: "Deep dive into your business goals, target audience, and competitive landscape to create a winning strategy.",
    icon: <FaLightbulb className="text-3xl" />,
    timeline: "1-2 Days",
    deliverables: ["Business Analysis", "Technical Audit", "Strategy Document", "Project Roadmap"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Design & Planning",
    description: "Create wireframes, prototypes, and detailed technical specifications aligned with your brand and goals.",
    icon: <FaRocket className="text-3xl" />,
    timeline: "3-5 Days",
    deliverables: ["UI/UX Design", "Technical Architecture", "SEO Strategy", "Performance Plan"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Development",
    description: "Build your solution using modern frameworks with clean, scalable code and best practices.",
    icon: <FaCode className="text-3xl" />,
    timeline: "1-3 Weeks",
    deliverables: ["Frontend Development", "Backend Integration", "SEO Implementation", "Performance Optimization"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Testing & QA",
    description: "Comprehensive testing across devices, browsers, and performance metrics to ensure perfection.",
    icon: <FaFlask className="text-3xl" />,
    timeline: "2-3 Days",
    deliverables: ["Cross-browser Testing", "Mobile Optimization", "Performance Testing", "Security Audit"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Launch & Deployment",
    description: "Seamless deployment with monitoring, analytics setup, and immediate post-launch optimization.",
    icon: <FaGlobe className="text-3xl" />,
    timeline: "1 Day",
    deliverables: ["Production Deployment", "Analytics Setup", "SEO Submission", "Performance Monitoring"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Support & Growth",
    description: "Ongoing maintenance, performance monitoring, and conversion optimization for continuous growth.",
    icon: <FaHandshake className="text-3xl" />,
    timeline: "Ongoing",
    deliverables: ["24/7 Monitoring", "Regular Updates", "Performance Reports", "Growth Optimization"],
    color: "from-teal-500 to-blue-500"
  }
];

const guarantees = [
  {
    icon: <FaClock className="text-2xl text-green-600" />,
    title: "On-Time Delivery",
    description: "100% on-time delivery guarantee or your money back"
  },
  {
    icon: <FaShieldAlt className="text-2xl text-blue-600" />,
    title: "Quality Assurance",
    description: "Comprehensive testing and 30-day bug-free guarantee"
  },
  {
    icon: <FaRedo className="text-2xl text-purple-600" />,
    title: "Unlimited Revisions",
    description: "Unlimited revisions during development phase"
  },
  {
    icon: <FaGlobe className="text-2xl text-orange-600" />,
    title: "Global Support",
    description: "24/7 support across all time zones"
  }
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
      staggerChildren: 0.2
    }
  }
};

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section className="bg-gradient-to-br from-slate-50 to-blue-50" id="process" aria-label="Our Development Process">
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
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Our Proven Process
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            From Concept to 
            <span className="bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent"> Launch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures every project delivers maximum ROI with 
            premium quality, on-time delivery, and exceptional performance.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div 
          variants={staggerChildrenVariant}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full opacity-20"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeInUpVariant}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step Content */}
                <div className="w-full lg:w-5/12">
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-4`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-gray-500 font-medium">{step.timeline}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <FaCheck className="text-green-500 mr-2 text-xs" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.id}
                  </motion.div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="w-full lg:w-5/12 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees Section */}
        <motion.div 
          variants={fadeInUpVariant}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Guarantees</h3>
            <p className="text-xl text-gray-600">We stand behind our work with industry-leading guarantees</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariant}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex justify-center">
                  {guarantee.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{guarantee.title}</h4>
                <p className="text-sm text-gray-600">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUpVariant}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 inline-block"
            >
              Start Your Project Today
            </a>
          </motion.div>
          <p className="text-gray-600 mt-4">
            <span className="font-semibold text-green-600">✅ Free consultation</span> • 
            <span className="font-semibold text-blue-600"> 🚀 Fast delivery</span> • 
            <span className="font-semibold text-purple-600"> 💎 Premium quality</span>
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
