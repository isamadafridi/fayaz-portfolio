import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What are your pricing packages?',
    answer: 'Profile Optimization ($300): Headshot, banner, 2 featured section images, ready-made carousel templates, and SEO-based rewrite of the about section & headline. Monthly Management ($400/mo): Complete profile optimization with monthly engagement, content scheduling, and posting. Logo & Social Media Design: Starting at $50.',
  },
  {
    question: 'How long does a branding project take?',
    answer: 'Normally profile optimization design takes 2 to 3 business days and for complex projects it takes up to 1 week.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes, absolutely. My process includes built-in feedback loops. I typically offer 2-3 rounds of revisions per deliverable to ensure the final result perfectly aligns with your vision and goals.',
  },
  {
    question: 'What is your design process?',
    answer: 'My process is highly collaborative. It starts with a deep-dive discovery session, followed by research, conceptualization, design, feedback, and final delivery. (You can view the detailed breakdown in the Process section above).',
  },
  {
    question: 'Can you just design my LinkedIn Banner?',
    answer: 'Yes! While I specialize in comprehensive personal branding, I also offer standalone services like LinkedIn banner design, logo creation, or a single social media campaign design.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            Common <span className="text-primary">Questions</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto mb-6 origin-left" 
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-primary' : 'border-border'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <h3 className="text-xl font-bold font-heading tracking-wide pr-8">{faq.question}</h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-background text-gray-400'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
