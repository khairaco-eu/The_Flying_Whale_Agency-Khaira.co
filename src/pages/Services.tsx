import { motion } from 'framer-motion';
import { Globe, Zap, Sparkles, Cpu, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Websites & Funnels',
      description: 'We create stunning, high-converting websites and sales funnels that turn visitors into customers. Our designs are mobile-first, SEO-optimized, and built for performance.',
      image: '/images/service-websites.png',
      features: [
        'Custom Website Design',
        'Landing Pages',
        'Sales Funnels',
        'E-commerce Solutions',
        'CMS Integration',
        'Performance Optimization',
      ],
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'Marketing & SEO',
      description: 'Data-driven marketing strategies that help you reach your target audience, increase brand awareness, and drive measurable results for your business.',
      image: '/images/service-marketing.png',
      features: [
        'SEO Optimization',
        'Content Marketing',
        'Social Media Management',
        'PPC Advertising',
        'Email Marketing',
        'Analytics & Reporting',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Sparkles,
      title: 'Apps & Systems',
      description: 'Custom web and mobile applications built to solve your unique business challenges. From MVPs to enterprise solutions, we deliver scalable systems.',
      image: '/images/service-apps.png',
      features: [
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'Database Design',
        'Cloud Solutions',
        'Maintenance & Support',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cpu,
      title: 'AI Automations',
      description: 'Leverage the power of artificial intelligence to automate repetitive tasks, gain insights from data, and create intelligent customer experiences.',
      image: '/images/service-ai.png',
      features: [
        'Chatbot Development',
        'Process Automation',
        'AI Integration',
        'Machine Learning',
        'Data Analysis',
        'Workflow Optimization',
      ],
      color: 'from-green-500 to-teal-500',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience through in-depth consultations.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Our team creates a comprehensive plan tailored to your specific needs and objectives.',
    },
    {
      step: '03',
      title: 'Build',
      description: 'We develop your solution using the latest technologies and best practices.',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'After thorough testing, we launch your project and provide ongoing support.',
    },
  ];

  return (
    <div className="min-h-screen pt-28 sm:pt-32">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#1A1A2E] to-[#553C9A]/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8"
            >
              <Sparkles size={16} className="text-[#9F7AEA]" />
              <span className="text-sm text-[#B8B8D1]">Our Services</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Everything you need to{' '}
              <span className="text-gradient">succeed online</span>
            </h1>
            <p className="text-lg text-[#B8B8D1] leading-relaxed mb-8">
              From stunning websites to intelligent AI solutions, we provide 
              end-to-end digital services that help your business thrive in the modern world.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/websites-and-funnels"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] hover:from-[#7B52D9] hover:to-[#AF88F8] text-white font-semibold text-sm sm:text-base shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group"
              >
                <span>Explore 3 Live Examples & Case Studies</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#16162A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 card-hover h-full">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="aspect-square rounded-xl overflow-hidden mb-6">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                        <service.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-[#B8B8D1] mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-[#B8B8D1]">
                            <Check size={16} className="text-[#9F7AEA]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How we <span className="text-gradient">work</span>
            </h2>
            <p className="text-[#B8B8D1] max-w-2xl mx-auto">
              Our proven process ensures every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-white/5 absolute -top-4 -left-2">
                  {step.step}
                </div>
                <div className="relative pt-8">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-[#B8B8D1] text-sm">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#6B46C1] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#16162A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Not sure what you need?
            </h2>
            <p className="text-[#B8B8D1] text-lg max-w-2xl mx-auto mb-10">
              Let's chat about your project. We'll help you identify the best solutions 
              for your business goals.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] rounded-full font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 inline-flex items-center gap-2"
              >
                Book a Free Consultation
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
