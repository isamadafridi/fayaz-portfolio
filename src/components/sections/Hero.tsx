import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, ArrowRight, Mouse } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import heroImage from '../../assets/hero.jpeg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-orange-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-primary font-medium tracking-widest uppercase mb-4"
            >
              Hi, I'm
            </motion.p>
            <h1 className="text-6xl md:text-8xl font-heading font-bold leading-[0.9] mb-4">
              Fayaz <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Afridi</span>
            </h1>
            <h2 className="text-xl md:text-3xl text-gray-300 font-medium mb-6">
              Graphic Designer & <br className="hidden md:block" />
              LinkedIn Personal Branding Expert
            </h2>
            <p className="text-gray-400 max-w-lg text-sm md:text-base mb-10 leading-relaxed">
              Helping founders, entrepreneurs, CEOs and professionals build powerful personal brands through strategic graphic design and LinkedIn optimization.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="group flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                Hire Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="flex items-center gap-2 border border-border text-white px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-all duration-300">
                View Portfolio
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image & Floating Elements */}
          <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">
            <motion.div 
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-border bg-card overflow-hidden flex items-center justify-center"
            >
              {/* Profile Image */}
              <div className="w-full h-full flex items-center justify-center overflow-hidden bg-card">
                 <img src={heroImage} alt="Fayaz Afridi" className="w-full h-full object-cover object-center" />
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 right-10 md:right-20 bg-card border border-border p-4 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <FaLinkedin className="text-primary w-8 h-8" />
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 md:left-20 bg-card border border-border p-4 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <FaBehance className="text-white w-8 h-8" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Mouse size={24} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
