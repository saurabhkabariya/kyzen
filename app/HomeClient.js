'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaBullseye,
  FaChartLine,
  FaCheck,
  FaComments,
  FaCog,
  FaGlobe,
  FaInstagram,
  FaLayerGroup,
  FaLink,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPlay,
  FaRegClock,
  FaRegHandshake,
  FaSearch,
  FaShieldAlt,
  FaShoppingCart,
  FaStar,
  FaTools,
  FaUsers,
  FaWhatsapp,
  FaWindowRestore,
  FaPhone,
} from 'react-icons/fa';
import { FiMail, FiTarget } from 'react-icons/fi';
import { HiOutlineCursorClick } from 'react-icons/hi';

const industries = [
  'Solar & Renewable',
  'Real Estate',
  'Education',
  'Healthcare',
  'E-Commerce',
  'Local Businesses',
  'Coaching & Consulting',
];

const painPoints = [
  {
    icon: <FaArrowRight className="text-orange-500" aria-hidden="true" />,
    title: 'Visitors Leave',
    description: 'People visit your website but do not take action.',
  },
  {
    icon: <FaSearch className="text-yellow-400" aria-hidden="true" />,
    title: 'Leads Slip Away',
    description: 'Inquiries come in, but you lose follow-ups.',
  },
  {
    icon: <FaRegClock className="text-violet-400" aria-hidden="true" />,
    title: 'Too Much Manual Work',
    description: 'You or your team spend hours on repetitive tasks.',
  },
  {
    icon: <FaShieldAlt className="text-sky-400" aria-hidden="true" />,
    title: 'Low Trust & Credibility',
    description: 'Outdated websites reduce customer trust.',
  },
  {
    icon: <FaChartLine className="text-emerald-400" aria-hidden="true" />,
    title: 'Missed Revenue',
    description: 'All of this leads to one thing - lost revenue.',
  },
];

const growthServices = [
  {
    icon: <FaGlobe className="text-3xl text-lime-400" aria-hidden="true" />,
    title: 'Growth Websites',
    description: 'Fast, mobile-first websites designed to convert visitors into customers.',
  },
  {
    icon: <FaWhatsapp className="text-3xl text-lime-400" aria-hidden="true" />,
    title: 'WhatsApp Automation',
    description: 'Instant replies, lead qualification, and automated follow-ups on WhatsApp.',
  },
  {
    icon: <FaInstagram className="text-3xl text-lime-400" aria-hidden="true" />,
    title: 'Instagram Funnel Setup',
    description: 'Turn followers into inquiries and build a predictable lead system.',
  },
  {
    icon: <FiTarget className="text-3xl text-lime-400" aria-hidden="true" />,
    title: 'Conversion Optimization',
    description: 'We analyze, test, and optimize every step to increase conversions.',
  },
  {
    icon: <FaSearch className="text-3xl text-lime-400" aria-hidden="true" />,
    title: 'SEO Foundations',
    description: 'Get discovered by the right customers and rank organically on Google.',
  },
  {
    icon: <FaCog className="text-3xl text-lime-400" aria-hidden="true" />,
    title: 'Business Automation',
    description: 'Automate workflows, reduce manual tasks, and scale your business.',
  },
];

const processSteps = [
  {
    icon: <FaUsers aria-hidden="true" />,
    title: 'Discover',
    description: 'We understand your business, audience, and goals.',
  },
  {
    icon: <FaLayerGroup aria-hidden="true" />,
    title: 'Plan',
    description: 'We create a strategy and roadmap for maximum impact.',
  },
  {
    icon: <FaTools aria-hidden="true" />,
    title: 'Build',
    description: 'We build, integrate, and automate your growth system.',
  },
  {
    icon: <FaBullseye aria-hidden="true" />,
    title: 'Optimize',
    description: 'We test, analyze, and continuously optimize for better results.',
  },
  {
    icon: <FaChartLine aria-hidden="true" />,
    title: 'Grow',
    description: 'More leads, more sales, and more business growth.',
  },
];

const projectHighlights = [
  'Custom Website with ROI Calculator',
  'Lead Capture & WhatsApp Integration',
  'Automated Follow-up System',
  'SEO Optimized for Local Search',
];

const pricingPlans = [
  {
    name: 'Growth Starter',
    price: '₹15,000',
    badge: '',
    description: 'Professional website to build your online presence.',
    features: ['5-7 Page Website', 'Mobile Responsive', 'Basic SEO Setup', 'Contact / Lead Form'],
    cta: 'Get Started',
    accent: 'border-slate-700 bg-slate-950',
  },
  {
    name: 'Growth System',
    price: '₹25,000',
    badge: 'MOST POPULAR',
    description: 'Complete growth system with automation to generate more leads.',
    features: ['Everything in Starter', 'WhatsApp Automation', 'Lead Capture Funnel', 'Instagram Integration'],
    cta: 'Get Started',
    accent: 'border-lime-400 bg-slate-950 ring-1 ring-lime-400/60',
    featured: true,
  },
  {
    name: 'Growth Engine',
    price: 'Custom Pricing',
    badge: '',
    description: 'Advanced system to scale your business and maximize revenue.',
    features: ['Everything in Growth System', 'Advanced Automations', 'Conversion Optimization', 'Priority Support'],
    cta: 'Contact Us',
    accent: 'border-slate-700 bg-slate-950',
  },
];

const trustItems = [
  { label: '5+', sublabel: 'Projects Delivered' },
  // { label: '30+', sublabel: 'Businesses Growing' },
  { label: '3x', sublabel: 'Average Lead Increase' },
  { label: '100%', sublabel: 'Client Satisfaction' },
];

const heroFlowLeft = [
  { icon: <FaInstagram aria-hidden="true" />, label: 'Instagram' },
  { icon: <FaGlobe aria-hidden="true" />, label: 'Google' },
  { icon: <FaUsers aria-hidden="true" />, label: 'Referrals' },
  { icon: <FaBullseye aria-hidden="true" />, label: 'Ads' },
];

const heroFlowRight = [
  { icon: <FaGlobe aria-hidden="true" />, label: 'Website', sub: 'Attract' },
  { icon: <FaWindowRestore aria-hidden="true" />, label: 'Lead Capture', sub: 'Capture' },
  { icon: <FaWhatsapp aria-hidden="true" />, label: 'WhatsApp Automation', sub: 'Engage' },
  { icon: <FaLink aria-hidden="true" />, label: 'Follow-Up System', sub: 'Nurture' },
  { icon: <FaUsers aria-hidden="true" />, label: 'Happy Customers', sub: 'Convert' },
];

export default function HomeClient() {
  const [visitors, setVisitors] = useState(1000);
  const [averageSale, setAverageSale] = useState(5000);
  const [currentLeads, setCurrentLeads] = useState(10);
    // Investment calculator state
    const [pages, setPages] = useState(5);
    const [whatsAppAutomation, setWhatsAppAutomation] = useState(false);
    const [seoPackage, setSeoPackage] = useState(false);
    const [blogSetup, setBlogSetup] = useState(false);
    const [hosting, setHosting] = useState('basic');
    const [maintenanceMonths, setMaintenanceMonths] = useState(6);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const potentialOpportunity = useMemo(() => {
    const projectedLeads = Math.max(currentLeads, Math.round(visitors * 0.03));
    return projectedLeads * averageSale;
  }, [visitors, averageSale, currentLeads]);

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
    <main className="bg-[#05070a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(163,230,53,0.14),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(163,230,53,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/60 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-8">
          <div id="hero" className="grid gap-10 py-2 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-12">
            <div>
              <div className="mb-5 inline-flex max-w-full rounded-full border border-lime-400/30 bg-lime-400/8 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-lime-300 sm:text-[11px] sm:tracking-[0.18em]">
                Business Growth Agency
              </div>
              <h1 className="max-w-3xl text-3xl font-black leading-[0.96] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.35rem]">
                Turn More Visitors
                <br />Into <span className="text-lime-400">Customers.</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                We build conversion-focused websites, automate follow-ups, and create growth systems that generate leads and increase revenue.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                <Link href="#audit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-lime-300 sm:w-auto">
                  Get Free Growth Audit <FaArrowRight />
                </Link>
                <Link href="#work" className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10 sm:w-auto">
                  View Case Studies
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-4 sm:gap-4">
                {trustItems.map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-base font-bold text-white sm:text-lg">{item.label}</div>
                    <div className="mt-1 text-xs text-white/55">{item.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] lg:gap-6">
                <div className="space-y-4 pt-0 sm:pt-6">
                  {heroFlowLeft.map((item) => (
                    <div key={item.label} className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/85 shadow-lg backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-lime-400">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden flex-col items-center justify-center gap-3 pt-6 sm:flex">
                  <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
                  <div className="h-52 w-px rounded-full border-l border-dashed border-white/20" />
                </div>

                <div className="space-y-4">
                  {heroFlowRight.map((item) => (
                    <div key={item.label} className="rounded-xl border border-lime-400/30 bg-black/45 px-4 py-3 shadow-[0_0_0_1px_rgba(163,230,53,0.08)] backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-lime-400">{item.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-white sm:text-sm">{item.label}</div>
                          <div className="text-xs text-white/55">{item.sub}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 lg:block">
                <div className="w-28 rounded-2xl border border-lime-400/40 bg-black/55 p-4 text-center shadow-[0_0_40px_rgba(163,230,53,0.12)] backdrop-blur-sm">
                  <div className="text-sm font-semibold text-lime-300">More Leads</div>
                  <div className="text-sm font-semibold text-lime-300">More Sales</div>
                  <div className="text-sm font-semibold text-lime-300">More Growth</div>
                  <div className="mt-4 flex justify-center text-lime-400">
                    <FaChartLine className="text-2xl" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="border-t border-white/10 py-5">
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/55">Trusted by businesses across industries</div>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/70 sm:grid-cols-4 lg:grid-cols-7">
              {industries.map((industry) => (
                <div key={industry} className="flex items-center justify-center gap-2 rounded-lg border border-white/8 bg-white/4 px-3 py-3">
                  <FaCheck className="text-lime-400" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#06080b] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-lg font-semibold uppercase tracking-[0.22em] text-white/80">Most businesses face these problems</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {painPoints.map((point) => (
              <article key={point.title} className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-2xl">
                  {point.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10 bg-[#05070a] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-lg font-semibold uppercase tracking-[0.22em] text-white/80">Our growth services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {growthServices.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-black/35 p-5 text-center shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/25 bg-lime-400/6 text-lime-400">
                  {service.icon}
                </div>
                <h3 className="text-sm font-semibold text-lime-300">{service.title}</h3>
                <p className="mt-2 text-xs leading-6 text-white/60">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-white/10 bg-[#06080b] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div id="about" className="sr-only">About Kyzen</div>
          <article className="rounded-2xl border border-white/10 bg-black/35 p-5 sm:p-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-white/80">Our proven growth process</h2>
            <div
              className="mt-6 grid gap-4 xl:gap-3"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
            >
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex h-full min-h-[160px] flex-col rounded-xl border border-white/10 bg-white/4 p-4 lg:p-3 xl:p-4">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-lime-400/25 bg-lime-400/8 text-lime-400">
                      {step.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-start gap-2 text-sm font-semibold leading-snug text-white">
                        <span className="text-lime-400">0{index + 1}</span>
                        <span className="break-words">{step.title}</span>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-white/60 lg:text-[11px] xl:text-xs text-pretty">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article id="work" className="rounded-2xl border border-white/10 bg-black/35 p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-white/80">Featured project</h2>
              <span className="w-fit rounded-full border border-lime-400/30 bg-lime-400/8 px-3 py-1 text-xs font-semibold text-lime-300">Solar Business Growth System</span>
            </div>
            <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr] items-center">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 aspect-[16/9] xl:aspect-[18/9]">
                <Image
                  src="/solartech.webp"
                  alt="Solartech project preview"
                  width={900}
                  height={1000}
                  className="h-full w-full object-cover xl:object-contain"
                />
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-lime-400/20 bg-white/4 p-5 lg:p-4 xl:p-5">
                <div>
                  <p className="text-sm font-semibold text-lime-300">Goal: Generate more quote requests and increase installations</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {projectHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <FaCheck className="mt-1 text-lime-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row xl:flex-col 2xl:flex-row">
                  <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-md border border-lime-400/30 px-5 py-3 text-sm font-semibold text-lime-300 transition-colors hover:bg-lime-400/10">
                    View Case Study <FaArrowRight />
                  </Link>
                  <Link href="#audit" className="inline-flex items-center justify-center gap-2 rounded-md bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-lime-300">
                    Get Free Audit <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="resources" className="border-b border-white/10 bg-[#05070a] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <article id="pricing" className="rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-6">
              <h3 className="mb-1 text-sm font-medium text-white/90">Website investment calculator</h3>
              <p className="mb-4 text-xs text-white/60">Itemize features to get a real-time estimate (one-time + recurring)</p>

              <div className="grid gap-3 text-sm text-white/80 sm:grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs text-white/60">Number of pages</div>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setPages((p) => Math.max(1, p - 1))}
                        className="h-8 w-8 border-lime-300 border flex items-center justify-center rounded-md bg-white/6 text-sm"
                        aria-label="decrease pages"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min={1}
                        value={pages}
                        onChange={(e) => setPages(Math.max(1, Number(e.target.value || 1)))}
                        className="w-20 sm:w-24 rounded-md border border-white/10 bg-black/55 px-3 py-2 text-center text-sm focus:outline-none focus:ring-2 focus:ring-lime-400/30 no-spinner"
                      />
                      <button
                        type="button"
                        onClick={() => setPages((p) => p + 1)}
                        className="h-8 w-8 flex items-center justify-center rounded-md bg-white/6 text-sm border-lime-300 border"
                        aria-label="increase pages"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 sm:mt-0 text-xs text-white/50">User Funnel</div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs text-white/60">WhatsApp & Instagram automation</div>
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={() => setWhatsAppAutomation((v) => !v)}
                        className={`relative inline-flex h-7 w-12 items-center border-lime-300 border rounded-full px-1 transition-colors ${whatsAppAutomation ? 'bg-lime-400/80' : 'bg-white/8'}`}
                        aria-pressed={whatsAppAutomation}
                        aria-label="toggle whatsapp automation"
                      >
                        <span className={`block h-5 w-5 transform rounded-full bg-white transition-transform ${whatsAppAutomation ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 sm:mt-0 text-xs text-white/50">Instant lead replies</div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs text-white/60">SEO package</div>
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={() => setSeoPackage((v) => !v)}
                        className={`relative inline-flex h-7 w-12 border-lime-300 border items-center rounded-full px-1 transition-colors ${seoPackage ? 'bg-lime-400/80' : 'bg-white/8'}`}
                        aria-pressed={seoPackage}
                        aria-label="toggle seo package"
                      >
                        <span className={`block h-5 w-5 transform rounded-full bg-white transition-transform ${seoPackage ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 sm:mt-0 text-xs text-white/50">Local + technical SEO</div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs text-white/60">Blog setup</div>
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={() => setBlogSetup((v) => !v)}
                        className={`relative inline-flex h-7 w-12 border-lime-300 border items-center rounded-full px-1 transition-colors ${blogSetup ? 'bg-lime-400/80' : 'bg-white/8'}`}
                        aria-pressed={blogSetup}
                        aria-label="toggle blog setup"
                      >
                        <span className={`block h-5 w-5 transform rounded-full bg-white transition-transform ${blogSetup ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 sm:mt-0 text-xs text-white/50">CMS + initial posts</div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs text-white/60">Hosting</div>
                    <select
                      value={hosting}
                      onChange={(e) => setHosting(e.target.value)}
                      className="mt-2 w-full sm:w-44 rounded-md border border-white/10 bg-black/55 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400/30"
                      aria-label="hosting tier"
                    >
                      <option value="none">None</option>
                      <option value="basic">Basic (₹500/mo)</option>
                      <option value="premium">Premium (₹1500/mo)</option>
                    </select>
                  </div>
                  <div className="mt-1 sm:mt-0 text-xs text-white/50">Managed annual billing</div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs text-white/60">Maintenance (months)</div>
                    <div className="mt-2 flex items-center gap-3">
                      <input
                        type="range"
                        min={0}
                        max={24}
                        value={maintenanceMonths}
                        onChange={(e) => setMaintenanceMonths(Number(e.target.value))}
                        className="w-full sm:w-40 accent-lime-400"
                        aria-label="maintenance months"
                      />
                      <div className="w-16 rounded-md bg-white/6 px-2 py-1 text-center text-sm">{maintenanceMonths} mo</div>
                    </div>
                  </div>
                  <div className="mt-1 sm:mt-0 text-xs text-white/50">Optional ongoing support</div>
                </div>
              </div>

              {/* Pricing summary */}
              <div className="mt-4 rounded-lg border border-white/6 bg-white/5 p-4">
                {(() => {
                  const PRICING = {
                    baseDesign: 4000,
                    perPage: 4000,
                    whatsapp: 4000,
                    seo: 2000,
                    blog: 10000,
                    hosting: { none: 0, basic: 500 * 12, premium: 1500 * 12 },
                    maintenanceMonthly: 1000
                  }

                  const base = PRICING.baseDesign + pages * PRICING.perPage;
                  let addons = 0;
                  if (whatsAppAutomation) addons += PRICING.whatsapp;
                  if (seoPackage) addons += PRICING.seo;
                  if (blogSetup) addons += PRICING.blog;
                  addons += PRICING.hosting[hosting];
                  const maintenanceTotal = maintenanceMonths * PRICING.maintenanceMonthly;
                  const total = base + addons + maintenanceTotal;

                  const fmt = (n) => `₹${n.toLocaleString('en-IN')}`;

                  return (
                    <div>
                      <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                        <span>Base (design + per-page)</span>
                        <span className="font-medium">{fmt(base)}</span>
                      </div>

                      <div className="space-y-2 border-t border-white/6 pt-3">
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>WhatsApp automation</span>
                          <span className="font-medium">{whatsAppAutomation ? fmt(PRICING.whatsapp) : '—'}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>SEO package</span>
                          <span className="font-medium">{seoPackage ? fmt(PRICING.seo) : '—'}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>Blog setup</span>
                          <span className="font-medium">{blogSetup ? fmt(PRICING.blog) : '—'}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>Hosting (annual)</span>
                          <span className="font-medium">{hosting !== 'none' ? fmt(PRICING.hosting[hosting]) : '—'}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>Maintenance ({maintenanceMonths} mo)</span>
                          <span className="font-medium">{maintenanceMonths > 0 ? fmt(maintenanceTotal) : '—'}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-baseline justify-betweenflex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <div className="text-xs text-white/60">Estimated investment</div>
                          <div className="text-lg font-medium">{fmt(total)}</div>
                        </div>
                        <div>
                          <a href="/contact" className="rounded-md border border-lime-400 bg-white/6 px-3 py-2 text-sm font-medium">Request proposal</a>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </article>

          <article id="audit" className="rounded-2xl border border-white/10 bg-black/35 p-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-white/80">Get your free growth audit</h2>
            <p className="mt-3 text-sm text-white/60">We&apos;ll find what&apos;s costing you customers.</p>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              {['Conversion Leaks', 'Mobile Experience Review', 'Lead Capture Review', 'SEO Foundations Review'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/4 px-3 py-2">
                  <FaCheck className="text-lime-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="mt-6 space-y-3 text-left">
              {submitSuccess && (
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm text-emerald-200">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

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
                  className={`w-full rounded-md border ${errors.name ? 'border-red-400 bg-red-50/10' : 'border-white/10 bg-black/55'} px-3 py-2 text-sm text-white outline-none focus:border-lime-400`}
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
                  className={`w-full rounded-md border ${errors.email ? 'border-red-400 bg-red-50/10' : 'border-white/10 bg-black/55'} px-3 py-2 text-sm text-white outline-none focus:border-lime-400`}
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
                  rows={4}
                  className={`w-full rounded-md border ${errors.message ? 'border-red-400 bg-red-50/10' : 'border-white/10 bg-black/55'} px-3 py-2 text-sm text-white outline-none focus:border-lime-400`}
                  placeholder="Tell us about your project or how we can help..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-60"
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
                    <FaWhatsapp /> Get My Free Audit
                  </>
                )}
              </button>
            </form>
          </article>
        </div>
      </section>

      {/* <section id="pricing" className="border-b border-white/10 bg-[#06080b] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-lg font-semibold uppercase tracking-[0.22em] text-white/80">Simple, transparent pricing</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className={`relative rounded-2xl border p-6 ${plan.accent}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-black">
                    {plan.badge}
                  </div>
                )}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                    <p className="mt-2 text-sm text-white/60">{plan.description}</p>
                  </div>
                </div>
                <div className="mt-5 text-3xl font-black text-lime-300">{plan.price}</div>
                <div className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-white/75">
                      <FaCheck className="text-lime-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="#audit" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${plan.featured ? 'bg-lime-400 text-black hover:bg-lime-300' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'}`}>
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section> */}

    </main>
  );
}
