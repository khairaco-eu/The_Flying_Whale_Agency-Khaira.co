import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Gauge, 
  MousePointerClick, 
  ShoppingCart, 
  Coins, 
  Users, 
  Calendar,
  ExternalLink,
  ChevronRight,
  Code2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollingWebsitePreview } from '../components/ScrollingWebsitePreview';
import { useBooking } from '../context/BookingContext';

export const WebsitesAndFunnels = () => {
  const { openBooking } = useBooking();

  // Set SEO title, meta description & structured data
  useEffect(() => {
    document.title = "High-Converting Websites & Sales Funnels | Live Examples | Khaira.co";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Bespoke, high-converting websites and sales funnels engineered for maximum ROI. Explore live client production builds including Reedo, Blemince Paris, and Aurum Ledger.'
      );
    }
  }, []);

  const showcaseProjects = [
    {
      id: 'reedo',
      name: 'Reedo',
      url: 'https://reedo.online/',
      category: 'On-Demand Services Marketplace & Multi-Step Booking Funnel',
      tagline: 'Hyper-Fast Service Matching & Frictionless Onboarding Engine',
      description:
        'Reedo is a digital marketplace connecting homeowners and businesses with verified service professionals across home cleaning, electrical, plumbing, IT support, and repairs. Khaira.co engineered an intuitive multi-step booking funnel that matches user requirements with localized service quotes in under 60 seconds.',
      previewImage: '/images/preview-reedo.png',
      fullImage: '/images/reedo-full.png',
      allowIframe: true,
      accentColor: '#4285F4',
      badge: 'Marketplace Funnel',
      stats: [
        { label: 'Booking Velocity', value: '3.8x Lift' },
        { label: 'Lighthouse Speed', value: '99/100' },
        { label: 'Quote Completion', value: '64.2%' },
      ],
      deliverables: [
        '3-Step Dynamic Quote & Matching Intake Funnel',
        'Mobile-First Responsive User Experience',
        'Verified Provider Onboarding & Verification Portal',
        'Sub-second Search with Instant Filtering',
        'Automated Booking Notifications & Scheduling'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'RESTful API', 'Node.js'],
      resultsText:
        'Eliminated drop-off points by transforming complex service request forms into an interactive 3-step conversational flow, drastically increasing conversion across mobile traffic.'
    },
    {
      id: 'blemince',
      name: 'Blemince Paris',
      url: 'https://bleminceparis.com/',
      category: 'Luxury Direct-to-Consumer (DTC) E-Commerce & Brand Funnel',
      tagline: 'High-Ticket French Lingerie & Seamless Cross-Sell Architecture',
      description:
        'Blemince Paris designs premium seamless lingerie and everyday essentials embodying effortless Parisian elegance and second-skin comfort. Khaira.co designed and built a luxury brand conversion funnel pairing high-fashion visual storytelling with high-converting e-commerce mechanics, bundle upsells, and a frictionless slide-out checkout flow.',
      previewImage: '/images/preview-blemince.png',
      fullImage: '/images/blemince-full.png',
      allowIframe: false,
      accentColor: '#EC4899',
      badge: 'Luxury DTC E-Commerce',
      stats: [
        { label: 'Avg. Order Value', value: '+42% Uplift' },
        { label: 'Mobile Checkout Rate', value: '68.5%' },
        { label: 'Page Load Time', value: '0.7s' },
      ],
      deliverables: [
        'High-End Fashion Editorial Typography & Visual Storytelling',
        'Intelligent Slide-Out Cart with Dynamic Free Shipping Threshold',
        'One-Click Product Bundle & Size Matching Selector',
        'Friction-Free Multi-Currency International Checkout',
        'Optimized High-Resolution Asset Compression'
      ],
      techStack: ['Headless E-Commerce', 'Shopify Liquid', 'Tailwind CSS', 'Klaviyo', 'Edge CDN', 'JSON-LD Product Schema'],
      resultsText:
        'Engineered an aspirational French luxury atmosphere while strictly implementing conversion-rate-optimization (CRO) principles, driving higher average order values and repeat customer retention.'
    },
    {
      id: 'aurum-ledger',
      name: 'Aurum Ledger',
      url: 'https://www.aurumledger.eu/',
      category: 'B2B FinTech & Capital Call Automation SaaS Funnel',
      tagline: 'Institutional Wealth Management Intake & Reconciliation Funnel',
      description:
        'Aurum Ledger provides automated intake pipelines that parse institutional capital calls, reconcile bank coordinates, and generate DATEV/Excel accounting entries in seconds for wealth firms and single-family offices. Khaira.co built a high-trust enterprise B2B lead generation funnel tailored to European financial executives and asset managers.',
      previewImage: '/images/preview-aurum.png',
      fullImage: '/images/aurum-full.png',
      allowIframe: true,
      accentColor: '#F59E0B',
      badge: 'B2B FinTech Lead Funnel',
      stats: [
        { label: 'Enterprise Demo Leads', value: '4.1x Surge' },
        { label: 'Pipeline Velocity', value: '-65% Cycle' },
        { label: 'Security Grade', value: 'SOC2 / GDPR' },
      ],
      deliverables: [
        'Executive-Focused B2B Value Proposition & Visual Hierarchy',
        'Interactive Capital Call Parsing Workflow Visualization',
        'DATEV Reconciliation Benefits & ROI Calculation Model',
        'Institutional Trust Signals & Bank-Grade Compliance Badging',
        'Direct Executive Calendar Demo Booking Integration'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FinTech Integrations', 'DATEV Standard Formats'],
      resultsText:
        'Created a polished institutional presentation that immediately communicates high security and technical rigor, turning conservative wealth fund decision-makers into qualified sales calls.'
    }
  ];

  const methodologyPillars = [
    {
      icon: Gauge,
      title: 'Sub-800ms Performance & Core Web Vitals',
      description:
        'A 1-second delay in page load drops conversions by up to 20%. We engineer lightweight, edge-cached web platforms with perfect 95+ Google Lighthouse scores.'
    },
    {
      icon: MousePointerClick,
      title: 'Psychological Funnel Sequencing',
      description:
        'We eliminate decision fatigue. Every heading, micro-copy element, and CTA is strategically arranged along the customer journey to steer visitors toward high-value conversions.'
    },
    {
      icon: ShoppingCart,
      title: 'Frictionless Checkout & Lead Intake',
      description:
        'Whether it is dynamic multi-step booking forms, 1-click cart drawers, or calendar-synced scheduling, we remove every barrier between visitor interest and transaction.'
    },
    {
      icon: ShieldCheck,
      title: 'Technical SEO & Rich Structured Schema',
      description:
        'Every website is delivered with semantic HTML5 tags, JSON-LD Schema markup, OpenGraph previews, and localized metadata to dominate organic search results.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Primary Objective',
      traditional: 'Acts as a digital brochure that looks decorative',
      funnel: 'Acts as an automated 24/7 revenue & lead-generation machine',
    },
    {
      feature: 'User Experience',
      traditional: 'Scattered navigation links that distract visitors',
      funnel: 'Laser-focused psychological paths leading directly to action',
    },
    {
      feature: 'Mobile Performance',
      traditional: 'Clunky responsive desktop shrinkages',
      funnel: 'Mobile-first, touch-optimized ergonomics with instant load times',
    },
    {
      feature: 'Conversion Tracking',
      traditional: 'Basic pageview tracking without actionable insights',
      funnel: 'Full-funnel event tracking, scroll-depth analytics & CRM syncing',
    },
    {
      feature: 'Speed & SEO',
      traditional: 'Bloated page builders with 4-8 second loading times',
      funnel: 'Custom-coded clean architecture with 95+ Core Web Vitals',
    },
  ];

  const faqs = [
    {
      q: 'What is the difference between a standard website and a conversion funnel?',
      a: 'A standard website often functions like an informational catalog with dozens of competing links, which causes visitors to wander and bounce. A conversion funnel is an engineered experience designed with one explicit business goal—guiding visitors through an intentional sequence of value propositions, social proof, and clear calls-to-action that systematically convert visitors into paying clients.'
    },
    {
      q: 'How fast can Khaira.co design, build, and launch a custom website or funnel?',
      a: 'Typical delivery ranges from 2 to 4 weeks for focused sales funnels and DTC landing experiences, and 4 to 6 weeks for multi-page bespoke platforms and marketplace applications. Every project includes wireframing, high-fidelity UI design, frontend coding, SEO schema setup, and rigorous cross-device testing.'
    },
    {
      q: 'Can I integrate my existing CRM, Stripe, or Google Calendar with the funnel?',
      a: 'Yes. We seamlessly connect your funnel with payment processors (Stripe, PayPal), CRM systems (HubSpot, Salesforce, Klaviyo), automated email sequences, and Google Calendar scheduling tools so your team receives booked meetings and verified leads on autopilot.'
    },
    {
      q: 'How do you ensure our website ranks on Google search?',
      a: 'We implement comprehensive on-page SEO from the ground up: semantic HTML5 architecture, sub-second Core Web Vitals performance, automated XML sitemaps, OpenGraph social cards, fast-loading image CDNs, and Google-recommended JSON-LD structured data (Organization, LocalBusiness, Service, and Product schemas).'
    }
  ];

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-24">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#6B46C1]/15 rounded-full blur-3xl" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-[#9F7AEA]/15 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
        {/* Breadcrumb & Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#B8B8D1] mb-6 backdrop-blur-md">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight size={12} />
          <span className="text-[#9F7AEA] font-semibold">Websites & Funnels</span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6"
        >
          Websites & Sales Funnels Engineered for <span className="text-gradient">Measurable Revenue</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg lg:text-xl text-[#B8B8D1] max-w-3xl mx-auto leading-relaxed mb-10"
        >
          We do not build generic template sites that sit idle on the web. We engineer high-performance digital platforms, 
          conversion-focused sales funnels, and luxury e-commerce experiences that systematically transform cold traffic into loyal clients.
        </motion.p>

        {/* Hero Quick CTA & Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            type="button"
            onClick={openBooking}
            className="px-8 py-4 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] hover:from-[#7B52D9] hover:to-[#AF88F8] rounded-full font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Calendar size={18} />
            <span>Book a Funnel Strategy Call</span>
            <ArrowRight size={16} />
          </button>
          <a
            href="#live-case-studies"
            className="px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/15 rounded-full font-semibold text-white transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore 3 Live Builds</span>
            <ChevronRight size={16} />
          </a>
        </motion.div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Avg. Conversion Lift', value: '3.4x' },
            { label: 'Google Core Web Vitals', value: '98/100' },
            { label: 'Average Page Load', value: '< 800ms' },
            { label: 'Client Retention Rate', value: '96%' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">{item.value}</div>
              <div className="text-xs text-[#B8B8D1]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Case Studies Section */}
      <section id="live-case-studies" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 scroll-mt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9F7AEA]/10 border border-[#9F7AEA]/30 text-[#9F7AEA] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            <span>Production Client Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Live Websites & High-Converting Funnels
          </h2>
          <p className="text-[#B8B8D1] max-w-2xl mx-auto text-sm sm:text-base">
            Interact with real client platforms built by Khaira.co. Test the scrolling responsive previews, 
            inspect live interactive frames, and explore the conversion architectures below.
          </p>
        </div>

        {/* 3 Detailed Showcases */}
        <div className="space-y-24">
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] text-white">
                      Case Study #0{index + 1}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-[#B8B8D1] border border-white/10">
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-[#9F7AEA] text-sm sm:text-base font-medium">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#4285F4] to-[#6B46C1] hover:opacity-90 font-semibold text-white text-sm shadow-md transition-all"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={15} />
                  </a>
                  <button
                    type="button"
                    onClick={openBooking}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-medium text-white text-sm transition-all cursor-pointer"
                  >
                    <Calendar size={15} />
                    <span>Build Similar Funnel</span>
                  </button>
                </div>
              </div>

              {/* Live Interactive Scrolling Mockup */}
              <div className="mb-10">
                <ScrollingWebsitePreview
                  title={project.name}
                  url={project.url}
                  category={project.category}
                  previewImage={project.previewImage}
                  fullImage={project.fullImage}
                  allowIframe={project.allowIframe}
                  accentColor={project.accentColor}
                  stats={project.stats}
                />
              </div>

              {/* Detailed Case Study Analysis Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
                {/* Column 1: Objectives & Problem */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Layers size={18} className="text-[#9F7AEA]" />
                      <span>The Strategic Challenge & Architecture</span>
                    </h4>
                    <p className="text-[#B8B8D1] text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-3">
                      Core Funnel Deliverables & Engineering
                    </h5>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-[#B8B8D1]">
                          <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results summary quote */}
                  <div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#9F7AEA] text-sm text-[#B8B8D1] italic">
                    "{project.resultsText}"
                  </div>
                </div>

                {/* Column 2: Tech Stack & Key Stats */}
                <div className="bg-[#131322] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                      <Code2 size={16} className="text-[#9F7AEA]" />
                      <span>Production Technology Stack</span>
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="text-xs text-[#B8B8D1] mb-3">Ready to build your high-converting platform?</div>
                    <button
                      type="button"
                      onClick={openBooking}
                      className="w-full py-3 px-4 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] hover:opacity-90 rounded-xl font-semibold text-white text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar size={14} />
                      <span>Schedule 30-Min Strategy Call</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Khaira.co Funnels Convert Better (4 Pillars) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Our Funnels Outperform <span className="text-gradient">Standard Websites</span>
          </h2>
          <p className="text-[#B8B8D1] max-w-2xl mx-auto text-sm sm:text-base">
            We merge behavioral consumer psychology, ultra-fast web engineering, and rigorous conversion rate optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologyPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#9F7AEA]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#9F7AEA] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <pillar.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#B8B8D1] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table: Standard Website vs Khaira.co Funnel */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="bg-[#16162A]/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Standard Website vs. <span className="text-gradient">Khaira.co Funnel Engine</span>
            </h2>
            <p className="text-[#B8B8D1] text-sm max-w-xl mx-auto">
              Understand the structural differences that drive higher conversions and reliable customer acquisition.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 font-semibold text-white/60 uppercase tracking-wider text-xs">Dimension</th>
                  <th className="py-4 px-4 font-semibold text-rose-400/80 uppercase tracking-wider text-xs">Standard Digital Brochure</th>
                  <th className="py-4 px-4 font-semibold text-emerald-400 uppercase tracking-wider text-xs">Khaira.co Funnel Engine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-medium text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-[#B8B8D1]/80">{row.traditional}</td>
                    <td className="py-4 px-4 text-emerald-300 font-medium flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                      <span>{row.funnel}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEO Frequently Asked Questions Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-[#B8B8D1] text-sm">Everything you need to know about our web & funnel development process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-all"
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center justify-between">
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-[#B8B8D1] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Strategy Call Conversion Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#6B46C1]/30 via-[#4285F4]/20 to-[#9F7AEA]/30 border border-white/15 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white mb-4">
              <Calendar size={13} className="text-[#9F7AEA]" />
              <span>Google Calendar Instant Booking</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Ready to Turn Your Digital Presence into a High-Converting Engine?
            </h2>
            <p className="text-[#B8B8D1] text-base sm:text-lg mb-8 leading-relaxed">
              Book a complimentary 30-minute strategy session with our lead architects. We will audit your current site, 
              pinpoint conversion leakages, and outline a tailored roadmap.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={openBooking}
                className="px-8 py-4 bg-gradient-to-r from-[#4285F4] via-[#6B46C1] to-[#9F7AEA] hover:opacity-95 rounded-full font-bold text-white shadow-xl shadow-purple-500/25 transition-all duration-300 flex items-center gap-2.5 cursor-pointer text-base"
              >
                <Calendar size={20} />
                <span>Schedule Free 30-Min Strategy Call</span>
                <ArrowRight size={18} />
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-semibold text-white transition-all text-base"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsitesAndFunnels;
