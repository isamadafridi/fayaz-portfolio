import React from 'react';
import { motion } from 'framer-motion';

const CreativeBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden flex items-center justify-center">
      
      {/* Designer Studio Large Watermark Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute w-full flex items-center justify-center whitespace-nowrap select-none"
      >
        <h1 className="text-[15vw] md:text-[12vw] font-heading font-black text-transparent uppercase tracking-tighter" style={{ WebkitTextStroke: '2px #ffffff' }}>
          DESIGN STUDIO
        </h1>
      </motion.div>
      <motion.div
        animate={{ 
          rotate: 360,
          y: [0, -40, 0],
          x: [0, 30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] left-[8%] opacity-20"
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#FF6B00" strokeWidth="2">
          <polygon points="50,10 90,90 10,90" />
        </svg>
      </motion.div>

      {/* Circle */}
      <motion.div
        animate={{ 
          y: [0, 60, 0],
          x: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[10%] opacity-20"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#FF6B00" strokeWidth="2" strokeDasharray="5,5">
          <circle cx="50" cy="50" r="45" />
        </svg>
      </motion.div>

      {/* Cross / Plus */}
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, 50, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[15%] left-[20%] opacity-15"
      >
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#ffffff" strokeWidth="3">
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="10" y1="50" x2="90" y2="50" />
        </svg>
      </motion.div>
      
      {/* Bezier / Pen Tool path */}
      <motion.div
        animate={{ 
          rotate: [0, 15, -15, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[25%] opacity-20"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#ffffff" strokeWidth="2">
          <path d="M10,50 Q30,10 50,50 T90,50" />
          {/* Anchor points */}
          <rect x="7" y="47" width="6" height="6" fill="#FF6B00" />
          <rect x="47" y="47" width="6" height="6" fill="#FF6B00" />
          <rect x="87" y="47" width="6" height="6" fill="#FF6B00" />
          {/* Handles */}
          <line x1="10" y1="50" x2="30" y2="10" stroke="#FF6B00" strokeWidth="1" strokeDasharray="2,2" />
          <circle cx="30" cy="10" r="3" fill="#ffffff" />
        </svg>
      </motion.div>

      {/* Typography T */}
      <motion.div
        animate={{ 
          rotate: [-10, 10, -10],
          y: [0, 40, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[30%] opacity-15"
      >
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="#FF6B00" strokeWidth="3">
          <line x1="20" y1="20" x2="80" y2="20" />
          <line x1="50" y1="20" x2="50" y2="80" />
          <line x1="10" y1="20" x2="20" y2="20" />
          <line x1="80" y1="20" x2="90" y2="20" />
          <line x1="40" y1="80" x2="60" y2="80" />
        </svg>
      </motion.div>
      
      {/* Crop Tool */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[40%] right-[15%] opacity-20"
      >
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none" stroke="#ffffff" strokeWidth="3">
          <path d="M30,10 L30,70 L90,70" />
          <path d="M70,90 L70,30 L10,30" />
        </svg>
      </motion.div>

      {/* Design Cursor / Arrow */}
      <motion.div
        animate={{ 
          y: [0, -50, 0],
          x: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[40%] opacity-15"
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#FF6B00" strokeWidth="3" strokeLinejoin="round">
          <path d="M20,20 L80,50 L55,60 L75,90 L60,100 L40,65 L20,80 Z" />
        </svg>
      </motion.div>

    </div>
  );
};

export default CreativeBackground;
