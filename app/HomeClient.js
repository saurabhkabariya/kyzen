'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBolt, FaBullseye, FaCode, FaGlobeAsia, FaRocket, FaWindowRestore } from 'react-icons/fa';
import Section from './components/Section';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const trustProjects = ['PickNBuy', 'MotiveMentor', 'HireLift', 'SwiftTech', 'SuperTutor', 'CodeCatalyst'];

const services = [
  {
    icon: <FaGlobeAsia className="text-3xl text-blue-700" aria-hidden="true" />,
    title: 'Business Websites',
    description: 'Modern websites designed to help businesses build credibility and generate leads.',
  },
  {
    icon: <FaRocket className="text-3xl text-emerald-700" aria-hidden="true" />,
    title: 'Startup Launch Websites',
    description: 'Launch your startup with a fast, modern website that clearly communicates your product.',
  },
  {
    icon: <FaWindowRestore className="text-3xl text-sky-700" aria-hidden="true" />,
    title: 'Landing Pages',
    description: 'High-converting landing pages built to turn visitors into customers.',
  },
];

const whyKyzen = [
  {
    icon: <FaBolt className="text-2xl text-blue-700" aria-hidden="true" />,
    title: 'Fast Launch',
    description: 'Most projects launch within 7-10 days.',
  },
  {
    icon: <FaBullseye className="text-2xl text-emerald-700" aria-hidden="true" />,
    title: 'Conversion-Focused Design',
    description: 'Every page is structured to guide visitors toward taking action.',
  },
  {
    icon: <FaCode className="text-2xl text-sky-700" aria-hidden="true" />,
    title: 'Modern Technology',
    description: 'Built with modern frameworks for speed, security, and reliability.',
  },
];

export default function HomeClient() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white" aria-label="Hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.22),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-8 md:py-24 sm:px-6 sm:py-28 lg:py-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-100"
          >
            Kyzen • High-converting websites for startups and businesses.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 max-w-5xl text-2xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
          >
            Most developers build websites. Kyzen builds growth engines.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-2xl md:text-lg text-slate-200 sm:text-xl"
          >
            High-performance websites designed to generate traffic, convert visitors, and automate business processes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-7 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/40"
            >
              Start Your Project
            </Link>
            <Link
              href="#projects"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      <Section className="bg-white" aria-label="Trust and Social Proof">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Trust / Social Proof</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">6+ Real Projects Built</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {trustProjects.map((project) => (
              <div
                key={project}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
              >
                {project}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ProjectsSection />

      <Section className="bg-slate-50" id="services" aria-label="Services">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Services</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Built for business growth</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white" id="why-kyzen" aria-label="Why Kyzen">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Why Kyzen</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">A reliable partner for results</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whyKyzen.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50" id="pricing" aria-label="Simple Pricing">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Simple Pricing</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-700">
            Projects are currently available starting from ₹15k for a limited number of clients.
          </p>
          <p className="mt-2 text-sm text-slate-500">Final pricing depends on project scope.</p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-xl bg-emerald-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-900/25"
          >
            Request a Quote
          </Link>
        </div>
      </Section>

      <Section className="bg-slate-900 text-white" aria-label="Final CTA">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to build a website that grows your business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Let&apos;s create a fast, modern website designed to convert visitors into customers.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Start Your Project
          </Link>
        </div>
      </Section>

      {/* <ContactSection /> */}
    </>
  );
}