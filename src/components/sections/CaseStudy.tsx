import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-24 bg-background relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase mb-2 block">Featured Work</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Case <span className="text-primary">Study</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        </div>

        <div className="bg-card border border-border rounded-[2rem] overflow-hidden p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium mb-6">
              Client: Kirshan Khiloie
            </div>
            
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              From Invisible to Industry Authority on LinkedIn
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  The Problem
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Kirshan needed guidance to build authority on LinkedIn. He lacked a structured content system and a cohesive visual identity, making it difficult to stand out in a saturated niche.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                  The Solution
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  We developed a comprehensive personal branding strategy, completely overhauled his LinkedIn visual presence (banner, featured section, profile picture), and implemented a scalable content creation system with ongoing mentorship.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  The Outcome
                </h4>
                <ul className="space-y-3 mt-4">
                  {[
                    'Successfully launched a consistent content creation engine',
                    'Became recognized as a thought leader in his specific niche',
                    '300% increase in inbound profile views and connections',
                    'Secured high-ticket clients directly through inbound leads'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <a href="#" className="inline-flex items-center gap-2 bg-white text-background px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors group">
                View Client Profile
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Image Showcase */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-border"
            >
              <div className="aspect-[4/3] bg-gradient-to-tr from-gray-800 to-gray-900 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                {/* Simulated UI for showcase */}
                <div className="w-full max-w-sm bg-[#0a0a0a] rounded-xl border border-border overflow-hidden shadow-2xl z-10">
                  <div className="h-24 bg-gradient-to-r from-blue-900 to-primary/40 relative">
                     <div className="absolute -bottom-8 left-4 w-16 h-16 rounded-full border-4 border-[#0a0a0a] bg-gray-600" />
                  </div>
                  <div className="p-4 pt-10">
                    <div className="h-4 w-32 bg-gray-700 rounded mb-2" />
                    <div className="h-3 w-48 bg-gray-800 rounded mb-4" />
                    <div className="flex gap-2">
                      <div className="h-8 w-20 bg-primary/20 text-primary rounded-full" />
                      <div className="h-8 w-20 bg-gray-800 rounded-full" />
                    </div>
                  </div>
                </div>
                
                {/* Decorative floating elements */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-xl border border-primary/20 backdrop-blur-md" />
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-md" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
