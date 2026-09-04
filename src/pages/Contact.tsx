import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Phone, MapPin, Send, Check, Loader2, AlertCircle, Linkedin, Twitter, Instagram, Youtube, Calendar } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const RECIPIENT_EMAIL = 'khairaco.eu@gmail.com';

const Contact = () => {
  const { openBooking } = useBooking();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not specified',
          service: formData.service || 'Not specified',
          message: formData.message,
          _subject: `New Query from ${formData.name} - The Flying Whale Agency`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        throw new Error(data.message || 'Unable to submit your query at this moment.');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(
        err?.message || 'Something went wrong submitting your query. Please try again or email directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
  };

  const services = [
    'Websites & Funnels',
    'Marketing & SEO',
    'Apps & Systems',
    'AI Automations',
    'Not sure yet',
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: RECIPIENT_EMAIL,
      href: `mailto:${RECIPIENT_EMAIL}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+48 452193173 (Whatsapp, Telegram and Mobile)',
      href: 'tel:+48452193173',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Warsaw, Paris, London, Riga',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
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
              <span className="text-sm text-[#B8B8D1]">Get in Touch</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's start a{' '}
              <span className="text-gradient">conversation</span>
            </h1>
            <p className="text-lg text-[#B8B8D1] leading-relaxed">
              Have a project in mind? We'd love to hear about it. Fill out the form 
              below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#16162A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6B46C1] to-[#9F7AEA] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30">
                      <Check size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Query Sent Successfully!</h3>
                    <p className="text-[#B8B8D1] max-w-md mx-auto mb-2 text-base leading-relaxed">
                      Thank you for contacting us. Your project query and details have been dispatched to{' '}
                      <span className="text-[#9F7AEA] font-medium">{RECIPIENT_EMAIL}</span>.
                    </p>
                    <p className="text-sm text-[#B8B8D1]/80 mb-8">
                      We'll review your inquiry and respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all duration-200 border border-white/15"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-sm flex items-start gap-3">
                        <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium mb-1">{errorMessage}</p>
                          <a
                            href={`mailto:${RECIPIENT_EMAIL}?subject=Inquiry from ${encodeURIComponent(formData.name || 'Client')}&body=${encodeURIComponent(
                              `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.service || 'N/A'}\n\nMessage:\n${formData.message}`
                            )}`}
                            className="text-[#9F7AEA] underline hover:text-white transition-colors"
                          >
                            Click here to email khairaco.eu@gmail.com directly
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#B8B8D1] focus:outline-none focus:border-[#6B46C1] transition-colors disabled:opacity-50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#B8B8D1] focus:outline-none focus:border-[#6B46C1] transition-colors disabled:opacity-50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#B8B8D1] focus:outline-none focus:border-[#6B46C1] transition-colors disabled:opacity-50"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Service Interest</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#6B46C1] transition-colors disabled:opacity-50"
                        >
                          <option value="" className="bg-[#1A1A2E]">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-[#1A1A2E]">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Your Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#B8B8D1] focus:outline-none focus:border-[#6B46C1] transition-colors resize-none disabled:opacity-50"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={isSubmitting ? {} : { scale: 1.02 }}
                      whileTap={isSubmitting ? {} : { scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Sending query...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-[#B8B8D1]/70">
                      Queries are delivered directly to {RECIPIENT_EMAIL}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#6B46C1]/20 group-hover:border-[#6B46C1] transition-all duration-300">
                        <item.icon size={20} className="text-[#9F7AEA]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#B8B8D1]">{item.label}</div>
                        <div className="font-medium group-hover:text-[#9F7AEA] transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B8B8D1] hover:text-white hover:bg-[#6B46C1] hover:border-[#6B46C1] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#6B46C1]/20 via-[#4285F4]/15 to-[#9F7AEA]/20 border border-white/10 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4285F4]/15 border border-[#4285F4]/30 text-[#8ab4f8] text-xs font-medium mb-3">
                  <Calendar size={13} className="text-[#8ab4f8]" />
                  <span>Google Calendar</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Schedule a Call</h3>
                <p className="text-[#B8B8D1] text-sm mb-6 leading-relaxed">
                  Prefer to talk? Book a free 30-minute strategy call with our team directly via Google Calendar.
                </p>
                <motion.a
                  href="#book-strategy-call"
                  onClick={(e) => {
                    e.preventDefault();
                    openBooking();
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-[#4285F4] via-[#6B46C1] to-[#9F7AEA] hover:opacity-95 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar size={18} />
                  <span>Book a Call via Google Calendar</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
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

          <div className="space-y-4">
            {[
              {
                q: 'How quickly will you respond to my inquiry?',
                a: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
              },
              {
                q: 'Do you work with clients internationally?',
                a: 'Absolutely! We work with clients from all over the world. Our team is experienced in remote collaboration across time zones.',
              },
              {
                q: 'What information should I include in my message?',
                a: 'The more details you can provide about your project, the better. Include your goals, timeline, budget range, and any specific requirements.',
              },
              {
                q: 'Can I schedule a call before committing to a project?',
                a: 'Yes! We offer free 30-minute strategy calls to discuss your project and determine if we\'re the right fit for your needs.',
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
      <section className="py-24 bg-[#16162A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6B46C1] to-[#553C9A] p-12 lg:p-20 text-center"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to get started?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Let's turn your vision into reality. Reach out today and let's 
                discuss how we can help your business grow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:hello@khaira.co">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white text-[#6B46C1] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Email Us
                  </motion.button>
                </a>
                <a href="tel:+15551234567">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white/10 text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Call Now
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
