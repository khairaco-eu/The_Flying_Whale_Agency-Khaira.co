import { motion } from 'framer-motion';
import { Sparkles, Target, Users, Lightbulb, Heart, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that impact your bottom line.',
    },
    {
      icon: Users,
      title: 'Client-First',
      description: 'Your success is our success. We work as an extension of your team.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of trends to bring you cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do, and it shows in every project we deliver.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We never compromise on quality. Excellence is our standard.',
    },
  ];

  const team = [
    {
      name: 'Arvin Khaira',
      role: 'Founder & CEO',
      image: '/images/arvin.png',
      bio: 'Digital strategist with 5+ years of experience building successful online businesses.',
    },
    {
      name: 'Armaan Khaira',
      role: 'Creative Director & Business Analyst',
      image: '/images/armaan.png',
      bio: 'Award-winning designer passionate about creating beautiful, functional experiences.',
    },
  
  ];

  const milestones = [
    { year: '2018', event: 'Khaira.co founded' },
    { year: '2019', event: 'First 50 clients' },
    { year: '2020', event: 'Expanded to AI services' },
    { year: '2021', event: 'International team growth' },
    { year: '2022', event: '100+ projects delivered' },
    { year: '2023', event: 'Enterprise solutions launch' },
  ];

  return (
    <div className="min-h-screen pt-28 sm:pt-32">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#1A1A2E] to-[#553C9A]/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8"
              >
                <Sparkles size={16} className="text-[#9F7AEA]" />
                <span className="text-sm text-[#B8B8D1]">About Us</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                We're a full-service{' '}
                <span className="text-gradient">digital agency</span>
              </h1>
              <p className="text-lg text-[#B8B8D1] leading-relaxed mb-8">
                From websites to AI automations, we help businesses grow in the digital age. 
                Our team of experts is dedicated to delivering exceptional results that 
                exceed expectations.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-3xl font-bold text-gradient">50+</div>
                  <div className="text-[#B8B8D1] text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">6+</div>
                  <div className="text-[#B8B8D1] text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">98%</div>
                  <div className="text-[#B8B8D1] text-sm">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src="/images/about-illustration.jpg"
                  alt="Our Team"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#6B46C1]/30 to-[#9F7AEA]/30 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-[#B8B8D1] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#9F7AEA] flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-[#B8B8D1] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-[#B8B8D1] max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 card-hover">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-[#9F7AEA] text-sm mb-3">{member.role}</p>
                    <p className="text-[#B8B8D1] text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-[#B8B8D1] max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#6B46C1] to-[#9F7AEA]" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 inline-block">
                    <div className="text-2xl font-bold text-gradient mb-1">
                      {milestone.year}
                    </div>
                    <div className="text-[#B8B8D1]">{milestone.event}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#6B46C1] to-[#9F7AEA] border-4 border-[#1A1A2E]" />
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why choose <span className="text-gradient">Khaira.co?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Team',
                    description: 'Our team brings years of experience across design, development, and marketing.',
                  },
                  {
                    title: 'Fast Delivery',
                    description: 'We understand time is money. Most projects delivered in 2-6 weeks.',
                  },
                  {
                    title: 'Transparent Pricing',
                    description: 'No hidden fees. You know exactly what you\'re paying for.',
                  },
                  {
                    title: 'Ongoing Support',
                    description: 'We don\'t disappear after launch. We\'re here for the long haul.',
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6B46C1] to-[#9F7AEA] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-[#B8B8D1] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">100%</div>
                    <div className="text-[#B8B8D1] text-sm">Commitment</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">24/7</div>
                    <div className="text-[#B8B8D1] text-sm">Support</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">50+</div>
                    <div className="text-[#B8B8D1] text-sm">Happy Clients</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">5★</div>
                    <div className="text-[#B8B8D1] text-sm">Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
