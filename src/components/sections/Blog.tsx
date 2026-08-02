import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    title: '5 Design Secrets for a High-Converting LinkedIn Profile',
    category: 'LinkedIn Strategy',
    date: 'Oct 12, 2026',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'The Psychology Behind Effective Personal Branding Colors',
    category: 'Brand Identity',
    date: 'Sep 28, 2026',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Why Your CEO Profile Needs a Professional Banner',
    category: 'Design Tips',
    date: 'Sep 15, 2026',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold mb-4"
            >
              Latest <span className="text-primary">Articles</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-primary origin-left" 
            />
          </div>
          
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
            View All Posts
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-background border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-primary">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-xs text-gray-500 uppercase tracking-widest mb-3 block">{post.date}</span>
                <h3 className="text-2xl font-bold font-heading leading-tight mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read Article
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
            View All Posts
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
