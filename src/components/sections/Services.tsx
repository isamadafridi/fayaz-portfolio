import React from 'react';
import { motion } from 'framer-motion';
import { Layout, PenTool, Image as ImageIcon, Briefcase, Sparkles, MonitorSmartphone, Palette } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const services = [
  {
    title: 'LinkedIn Profile Optimization',
    description: 'Transform your LinkedIn profile into a powerful landing page that attracts high-value connections and clients.',
    icon: FaLinkedin,
    price: '$300',
  },
  {
    title: 'LinkedIn Personal Branding',
    description: 'Comprehensive strategy and content design to establish your authority and thought leadership on LinkedIn.',
    icon: Briefcase,
    price: '$400/mo',
  },
  {
    title: 'Social Media Design',
    description: 'Eye-catching and engaging graphics tailored for various social media platforms to boost audience engagement.',
    icon: Layout,
    price: 'From $50',
  },
  {
    title: 'LinkedIn Banner Design',
    description: 'Custom, high-converting banner designs that communicate your unique value proposition instantly.',
    icon: ImageIcon,
    price: 'From $50',
  },
  {
    title: 'Logo Design',
    description: 'Memorable and timeless logo designs that capture the essence of your personal or business brand.',
    icon: PenTool,
    price: 'From $50',
  },
  {
    title: 'Brand Identity',
    description: 'Complete visual identity systems including color palettes, typography, and brand guidelines.',
    icon: Palette,
    price: 'From $60',
  },
  {
    title: 'Profile Management',
    description: 'End-to-end management of your visual presence, ensuring consistency across all touchpoints.',
    icon: Sparkles,
    price: '$400/mo',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric interface designs for web and mobile applications focused on seamless experiences.',
    icon: MonitorSmartphone,
    price: 'From $60',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            My <span className="text-primary">Services</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto mb-6 origin-left" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            I offer a comprehensive suite of design and branding services tailored to elevate your professional presence.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-card border border-primary p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="text-primary group-hover:text-white w-6 h-6 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-heading tracking-wide mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.price && (
                    <div className="inline-block mt-2 px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-bold rounded-full">
                      {service.price}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
