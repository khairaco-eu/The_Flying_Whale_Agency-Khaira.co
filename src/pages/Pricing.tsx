import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$2,499',
      period: 'per project',
      icon: Sparkles,
      popular: false,
      features: [
        '5-Page Responsive Website',
        'Basic SEO Setup',
        'Contact Form Integration',
        'Mobile Optimization',
        '2 Revision Rounds',
        '1 Month Support',
        'Social Media Links',
        'Google Analytics Setup',
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-purple-500',
    },
    {
      name: 'Growth',
      description: 'Ideal for growing businesses',
      price: '$4,999',
      period: 'per project',
      icon: Zap,
      popular: true,
      features: [
        '10-Page Responsive Website',
        'Advanced SEO Package',
        'Custom Funnel Design',
        'Blog Setup',
        'CMS Integration',
        'Email Marketing Setup',
        '4 Revision Rounds',
        '3 Months Support',
        'Performance Optimization',
        'Monthly Analytics Report',
      ],
      cta: 'Most Popular',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Enterprise',
      description: 'For established businesses with complex needs',
      price: 'Custom',
      period: 'pricing',
      icon: Crown,
      popular: false,
      features: [
        'Unlimited Pages',
        'Custom Web Application',
        'AI Automation Integration',
        'E-commerce Solution',
        'Advanced Analytics',
        'Priority Support',
        'Dedicated Account Manager',
        'Unlimited Revisions',
        '12 Months Support',
        'Custom Integrations',
        'Training & Documentation',
      ],
      cta: 'Contact Us',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const addons = [
    {
      name: 'SEO Package',
      price: '$499/mo',
      description: 'Ongoing SEO optimization and content strategy',
    },
    {
      name: 'Social Media Management',
      price: '$799/mo',
      description: 'Full social media management across all platforms',
    },
    {
      name: 'Content Creation',
      price: '$299/mo',
      description: 'Blog posts, articles, and marketing copy',
    },
    {
      name: 'Maintenance & Updates',
      price: '$199/mo',
      description: 'Regular updates, backups, and security monitoring',
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
              <span className="text-sm text-[#B8B8D1]">Pricing Plans</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Simple, transparent{' '}
              <span className="text-gradient">pricing</span>
            </h1>
            <p className="text-lg text-[#B8B8D1] leading-relaxed">
              Choose the plan that fits your needs. All plans include our core 
              features with no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-[#16162A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] rounded-full text-sm font-semibold z-10">
                    Most Popular
                  </div>
                )}
                <div className={`h-full rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-[#6B46C1]/20 to-[#9F7AEA]/20 border-2 border-[#6B46C1]' 
                    : 'bg-white/5 border border-white/10'
                }`}>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    <plan.icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-[#B8B8D1] text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-[#B8B8D1] text-sm ml-2">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check size={18} className="text-[#9F7AEA] flex-shrink-0 mt-0.5" />
                        <span className="text-[#B8B8D1]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] text-white shadow-lg shadow-purple-500/25'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {plan.cta}
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
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
              Optional <span className="text-gradient">Add-ons</span>
            </h2>
            <p className="text-[#B8B8D1] max-w-2xl mx-auto">
              Enhance your package with these additional services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover"
              >
                <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-[#9F7AEA] mb-3">{addon.price}</p>
                <p className="text-[#B8B8D1] text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#16162A]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Most projects are completed within 2-6 weeks, depending on complexity. We\'ll provide a detailed timeline during our initial consultation.',
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes! We offer flexible payment plans. Typically, 50% upfront and 50% upon completion, but we can discuss options that work for you.',
              },
              {
                q: 'What if I need changes after launch?',
                a: 'All plans include a support period after launch. We also offer ongoing maintenance packages for continued support.',
              },
              {
                q: 'Can I upgrade my plan later?',
                a: 'Absolutely! You can upgrade at any time. We\'ll credit what you\'ve already paid toward the new plan.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                <p className="text-[#B8B8D1]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Still have questions?
            </h2>
            <p className="text-[#B8B8D1] text-lg max-w-2xl mx-auto mb-10">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] rounded-full font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 inline-flex items-center gap-2"
              >
                Schedule a Call
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
