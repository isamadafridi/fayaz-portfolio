import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaLinkedinIn, FaBehance, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 relative overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[300px] bg-primary/5 rounded-t-full blur-[120px] -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-heading tracking-wider font-bold text-white mb-6 inline-block">
              FAYAZ<span className="text-primary">AFRIDI</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Elevating personal brands for founders, CEOs, and industry leaders through strategic design and LinkedIn optimization.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/fayaz-afridi-80ba02224' },
                { icon: FaBehance, link: 'https://www.behance.net/fayazafridi' },
                { icon: FaWhatsapp, link: 'https://wa.me/923129979558' },
                { icon: FaInstagram, link: 'https://www.instagram.com/fayaz_afridii' },
                { icon: FaFacebookF, link: 'https://www.facebook.com/fayaz_afridii' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary transition-colors text-gray-400 hover:text-white"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-widest text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Portfolio', 'Process', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-widest text-lg">Services</h4>
            <ul className="space-y-4">
              {['LinkedIn Strategy', 'Banner Design', 'Logo Creation', 'Brand Identity', 'UI/UX Design'].map((item, i) => (
                <li key={i}>
                  <a href="#services" className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Fayaz Afridi. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Back to top
            <div className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center">
              <ArrowUp size={14} className="text-primary" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
