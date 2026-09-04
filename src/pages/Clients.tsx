import { motion } from 'framer-motion';
import { Sparkles, Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Clients = () => {
  const testimonials = [
    {
      name: 'Emily Richardson',
      role: 'CEO, TechStart Inc.',
      image: '/images/avatar-1.jpg',
      content: 'Khaira.co transformed our online presence completely. Our website traffic increased by 300% within the first month of launch. The team is incredibly talented and responsive.',
      rating: 5,
      project: 'Website Redesign',
    },
    {
      name: 'James Mitchell',
      role: 'Founder, GrowthLabs',
      image: '/images/avatar-2.jpg',
      content: 'Working with Khaira.co was a game-changer for our business. They understood our vision and delivered a product that exceeded our expectations. Highly recommended!',
      rating: 5,
      project: 'Marketing Funnel',
    },
    {
      name: 'Sophia Chen',
      role: 'Marketing Director, InnovateCo',
      image: '/images/avatar-3.jpg',
      content: 'The AI automation solution they built for us saved us countless hours every week. Their technical expertise combined with creative thinking is rare to find.',
      rating: 5,
      project: 'AI Automation',
    },
    {
      name: 'Michael Torres',
      role: 'CTO, DataFlow Systems',
      image: '/images/avatar-4.jpg',
      content: 'From concept to delivery, the Khaira.co team was professional, creative, and dedicated. Our app has received amazing feedback from users.',
      rating: 5,
      project: 'Mobile App',
    },
    {
      name: 'Amanda Foster',
      role: 'Owner, Bloom Boutique',
      image: '/images/avatar-1.jpg',
      content: 'They built us a beautiful e-commerce site that perfectly captures our brand. Sales have doubled since the launch. Couldn\'t be happier!',
      rating: 5,
      project: 'E-commerce Site',
    },
    {
      name: 'David Kim',
      role: 'Partner, Venture Capital Firm',
      image: '/images/avatar-2.jpg',
      content: 'Khaira.co helped us establish a strong digital presence for our portfolio companies. Their strategic approach to digital marketing is exceptional.',
      rating: 5,
      project: 'Digital Strategy',
    },
  ];

  const clientLogos = [
    { name: 'TechStart', industry: 'Technology' },
    { name: 'GrowthLabs', industry: 'Marketing' },
    { name: 'InnovateCo', industry: 'Innovation' },
    { name: 'DataFlow', industry: 'Data' },
    { name: 'Bloom', industry: 'Retail' },
    { name: 'VentureX', industry: 'Finance' },
    { name: 'CloudNine', industry: 'SaaS' },
    { name: 'HealthPlus', industry: 'Healthcare' },
  ];

  const stats = [
    { value: '50+', label: 'Clients Worldwide' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '4.9', label: 'Average Rating' },
    { value: '85%', label: 'Repeat Business' },
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
              <span className="text-sm text-[#B8B8D1]">Our Clients</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Trusted by teams{' '}
              <span className="text-gradient">worldwide</span>
            </h1>
            <p className="text-lg text-[#B8B8D1] leading-relaxed">
              We've had the privilege of working with amazing clients across 
              various industries. Here's what they have to say about us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-[#B8B8D1] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-[#16162A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Companies we've <span className="text-gradient">worked with</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center card-hover"
              >
                <div className="text-2xl font-bold text-white/60 mb-2">
                  {client.name}
                </div>
                <div className="text-[#B8B8D1] text-sm">{client.industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
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
              What our clients <span className="text-gradient">say</span>
            </h2>
            <p className="text-[#B8B8D1] max-w-2xl mx-auto">
              Don't just take our word for it - hear from the people we've helped succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 card-hover">
                  <Quote size={32} className="text-[#6B46C1] mb-6" />
                  
                  <p className="text-[#B8B8D1] mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-[#B8B8D1] text-sm">{testimonial.role}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs text-[#9F7AEA] bg-[#6B46C1]/20 px-3 py-1 rounded-full">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-[#16162A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
                <span className="text-sm text-[#9F7AEA]">Featured Case Study</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                How we helped TechStart increase conversions by 250%
              </h2>
              <p className="text-[#B8B8D1] mb-8 leading-relaxed">
                TechStart came to us with a challenge: their website wasn't converting 
                visitors into customers. We redesigned their entire digital experience, 
                implemented a new marketing funnel, and the results spoke for themselves.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-gradient">250%</div>
                  <div className="text-[#B8B8D1] text-sm">Conversion Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">3x</div>
                  <div className="text-[#B8B8D1] text-sm">Traffic Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">50%</div>
                  <div className="text-[#B8B8D1] text-sm">Bounce Rate Drop</div>
                </div>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] rounded-full font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#6B46C1]/20 to-[#9F7AEA]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">250%</div>
                  <div className="text-[#B8B8D1]">Conversion Rate Improvement</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
              Join our satisfied clients
            </h2>
            <p className="text-[#B8B8D1] text-lg max-w-2xl mx-auto mb-10">
              Let's create something amazing together. Your success story starts here.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] rounded-full font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
