import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    position: 'CEO at TechNova',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    text: 'Fayaz completely transformed how I am perceived in my industry. The new branding and LinkedIn strategy led to three major speaking engagements in just two months.',
    rating: 5,
  },
  {
    name: 'Marcus Thorne',
    position: 'Founder, GrowthWorks',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    text: 'Working with Fayaz was a game-changer. The visual identity he crafted perfectly captured my vision, and the engagement on my profile skyrocketed.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    position: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    text: 'A true professional. The attention to detail in the logo and banner designs was outstanding. Fayaz is now my go-to for all personal branding needs.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            Client <span className="text-primary">Love</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto mb-6 origin-left" 
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Pagination, Autoplay]}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full max-w-lg md:max-w-2xl py-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="bg-card/80 backdrop-blur-xl border border-primary rounded-3xl p-8 md:p-12 shadow-2xl transition-colors duration-300">
                <Quote className="text-primary/20 w-20 h-20 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium relative z-10">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-bold text-white tracking-wide">{testimonial.name}</h4>
                    <span className="text-sm text-gray-400">{testimonial.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
