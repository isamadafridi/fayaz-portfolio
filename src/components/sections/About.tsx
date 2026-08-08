import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '100+', label: 'Happy Clients' },
  { value: '10+', label: 'Countries Served' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left: Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" />

              <p className="text-gray-300 mb-6 leading-relaxed">
                I am a passionate Graphic Designer and LinkedIn Personal Branding Expert with over 5 years of experience in the creative industry. My mission is to help professionals and businesses stand out in a crowded digital landscape.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Through strategic design and targeted personal branding, I transform ordinary profiles into industry-leading voices. Whether you are a CEO, founder, or entrepreneur, I craft visual identities and content systems that drive authority and growth.
              </p>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-card p-6 rounded-2xl border border-primary transition-colors duration-300">
                  <h3 className="text-primary font-bold text-xl mb-3 font-heading tracking-wide">Mission</h3>
                  <p className="text-sm text-gray-400">To empower professionals with compelling visual narratives that build trust and command authority.</p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-primary transition-colors duration-300">
                  <h3 className="text-primary font-bold text-xl mb-3 font-heading tracking-wide">Vision</h3>
                  <p className="text-sm text-gray-400">To be the leading catalyst for personal brand transformations on LinkedIn globally.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats & Timeline */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background border border-primary p-8 rounded-3xl flex flex-col items-center justify-center text-center group transition-colors"
                >
                  <h4 className="text-4xl md:text-5xl font-heading font-bold text-primary transition-colors mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
