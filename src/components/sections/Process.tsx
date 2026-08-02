import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start with a deep dive into your goals, target audience, and current brand positioning.',
  },
  {
    number: '02',
    title: 'Research',
    description: 'Analyzing industry trends, competitors, and identifying unique angles for your personal brand.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Crafting the visual assets and content strategy tailored to your unique voice and objectives.',
  },
  {
    number: '04',
    title: 'Feedback',
    description: 'Collaborative review sessions to refine and perfect every element of the strategy and design.',
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'Final handover of assets, optimized profiles, and a clear roadmap for execution.',
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            My <span className="text-primary">Process</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto mb-6 origin-left" 
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-16 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center md:justify-between w-full">
                  
                  {/* Circle Marker */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`ml-20 md:ml-0 md:w-[45%] bg-card border border-border p-8 rounded-3xl relative
                      ${!isEven ? 'md:ml-auto' : ''}
                    `}
                  >
                    <span className="text-6xl font-heading font-bold text-white/5 absolute -top-6 -right-2 pointer-events-none select-none">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold font-heading mb-3 text-primary">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
