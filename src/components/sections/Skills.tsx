import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Adobe Photoshop', proficiency: 95 },
  { name: 'Adobe Illustrator', proficiency: 90 },
  { name: 'Figma', proficiency: 85 },
  { name: 'Canva', proficiency: 95 },
  { name: 'LinkedIn Strategy', proficiency: 98 },
  { name: 'Brand Identity', proficiency: 92 },
  { name: 'Social Media Design', proficiency: 95 },
  { name: 'Personal Branding', proficiency: 98 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              My <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
              I combine creative design software expertise with deep strategic knowledge of LinkedIn to build personal brands that truly convert. 
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Design', 'Strategy', 'Branding', 'Social Media'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-background border border-border rounded-full text-sm text-gray-300 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-primary font-bold text-sm">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-background border border-border rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-orange-600 to-primary h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
