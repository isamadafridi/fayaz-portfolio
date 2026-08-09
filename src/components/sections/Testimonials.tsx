import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
const images = import.meta.glob('../../assets/clint_review/*.jpeg', {
  eager: true,
  query: '?url',
  import: 'default'
});

const imageList = Object.values(images) as string[];

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

        <style>{`
          .swiper-button-next::after,
          .swiper-button-prev::after {
            display: none !important;
          }
        `}</style>

        <div className="max-w-4xl mx-auto">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Pagination, Autoplay, Navigation]}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="w-full max-w-sm md:max-w-md py-10 h-[500px] md:h-[600px]"
            style={{
              '--swiper-pagination-color': '#FF6B00',
              '--swiper-navigation-color': '#FF6B00',
              '--swiper-navigation-size': '24px',
            } as React.CSSProperties}
          >
            {imageList.map((imgSrc, index) => (
              <SwiperSlide key={index} className="bg-[#0a0a0a] border border-primary/50 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <img
                  src={imgSrc}
                  alt={`Client Review ${index + 1}`}
                  className="w-full h-full object-contain p-2"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
