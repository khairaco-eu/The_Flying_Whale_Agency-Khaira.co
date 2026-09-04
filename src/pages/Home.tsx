import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Globe, Cpu, Calendar } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const Home = () => {
  const { openBooking } = useBooking();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const clients = [
    'Theo', 'Luminous', 'Capsule', 'Lightbox', 
    'Spherule', 'Command', 'Focalpoint'
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '6+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '2-6', label: 'Weeks Delivery' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-32 sm:pt-36 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#1A1A2E] to-[#553C9A]/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B46C1]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#9F7AEA]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              style={{ opacity }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10"
              >
                <Sparkles size={16} className="text-[#9F7AEA]" />
                <span className="text-sm text-[#B8B8D1] tracking-wider">
                  WEBSITES · MARKETING · APPS · AI
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                We build{' '}
                <span className="text-gradient">digital systems</span> that
                help your business grow.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-[#B8B8D1] max-w-xl leading-relaxed"
              >
                Khaira.co designs and builds websites, marketing funnels, apps 
                and AI automations for startups, local businesses and enterprise teams.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  onClick={openBooking}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] hover:from-[#7B52D9] hover:to-[#AF88F8] rounded-full font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
                >
                  <Calendar size={18} />
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight size={16} />
                </motion.button>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/5 border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
                  >
                    View Services
                  </motion.button>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm text-[#B8B8D1]/70"
              >
                Built for startups, service businesses & corporate teams. Typical delivery: 2-6 weeks.
              </motion.p>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <img
                  src="/images/hero-illustration.png"
                  alt="Digital Marketing Team"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/20 to-[#9F7AEA]/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[#B8B8D1] text-sm mb-12"
          >
            Trusted by 50+ teams across the world
          </motion.p>
          
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-16 items-center"
            >
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-2xl font-bold text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  {client}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
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

      {/* Services Preview Section */}
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
              What we <span className="text-gradient">do best</span>
            </h2>
            <p className="text-[#B8B8D1] max-w-2xl mx-auto">
              From concept to launch, we handle every aspect of your digital presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: 'Websites & Funnels',
                description: 'High-converting websites and sales funnels that drive results.',
                image: '/images/service-websites.png',
                link: '/websites-and-funnels',
                badge: '3 Live Examples',
              },
              {
                icon: Zap,
                title: 'Marketing & SEO',
                description: 'Data-driven marketing strategies to grow your audience.',
                image: '/images/service-marketing.png',
                link: '/services',
              },
              {
                icon: Sparkles,
                title: 'Apps & Systems',
                description: 'Custom applications and systems tailored to your needs.',
                image: '/images/service-apps.png',
                link: '/services',
              },
              {
                icon: Cpu,
                title: 'AI Automations',
                description: 'Intelligent automation to streamline your workflows.',
                image: '/images/service-ai.png',
                link: '/services',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={service.link || '/services'}>
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 card-hover h-full flex flex-col justify-between">
                    <div>
                      <div className="aspect-square mb-6 overflow-hidden rounded-xl relative">
                        {service.badge && (
                          <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] text-[11px] font-bold text-white shadow-lg">
                            {service.badge}
                          </div>
                        )}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6B46C1] to-[#9F7AEA] flex items-center justify-center">
                          <service.icon size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-[#B8B8D1] text-sm mb-4">{service.description}</p>
                    </div>
                    {service.link === '/websites-and-funnels' ? (
                      <div className="pt-2 text-xs font-semibold text-[#9F7AEA] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Explore Live Examples</span>
                        <ArrowRight size={13} />
                      </div>
                    ) : (
                      <div className="pt-2 text-xs font-semibold text-[#B8B8D1] flex items-center gap-1 group-hover:text-white transition-colors">
                        <span>Learn more</span>
                        <ArrowRight size={13} />
                      </div>
                    )}
                  </div>
                </Link>
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6B46C1] to-[#553C9A] p-12 lg:p-20 text-center"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to grow your business?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Let's discuss how we can help you achieve your digital goals. 
                Book a free strategy call with our team.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-[#6B46C1] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
