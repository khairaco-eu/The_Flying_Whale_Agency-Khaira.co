import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { label: 'Websites & Funnels', path: '/websites-and-funnels' },
      { label: 'Marketing & SEO', path: '/services' },
      { label: 'Apps & Systems', path: '/services' },
      { label: 'AI Automations', path: '/services' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/about' },
      { label: 'Careers', path: '/about' },
      { label: 'Blog', path: '/about' },
    ],
    support: [
      { label: 'Contact', path: '/contact' },
      { label: 'FAQ', path: '/contact' },
      { label: 'Privacy Policy', path: '/contact' },
      { label: 'Terms of Service', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#16162A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={handleLinkClick} className="inline-block mb-6">
              <img
                src="/images/logof.png"
                alt="Khaira.co"
                className="h-28 sm:h-32 w-auto object-contain -ml-2"
              />
            </Link>
            <p className="text-[#B8B8D1] text-sm leading-relaxed mb-6 max-w-sm">
              The Flying Whale Agency - We build digital systems that help your business grow. 
              From websites to AI automations, we deliver excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#B8B8D1] text-sm">
                <Mail size={16} className="text-[#9F7AEA]" />
                <span>info@khaira-co.eu</span>
              </div>
              <div className="flex items-center gap-3 text-[#B8B8D1] text-sm">
                <Phone size={16} className="text-[#9F7AEA]" />
                <span>+48 452193173</span>
              </div>
              <div className="flex items-center gap-3 text-[#B8B8D1] text-sm">
                <MapPin size={16} className="text-[#9F7AEA]" />
                <span>Warsaw, Paris, London, Riga</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-[#B8B8D1] text-sm hover:text-[#9F7AEA] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-[#B8B8D1] text-sm hover:text-[#9F7AEA] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-[#B8B8D1] text-sm hover:text-[#9F7AEA] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#B8B8D1] text-sm">
            &copy; {currentYear} Khaira.co. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B8B8D1] hover:text-white hover:bg-[#6B46C1] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
