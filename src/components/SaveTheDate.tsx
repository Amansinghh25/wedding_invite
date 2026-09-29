import React from 'react';
import { motion } from 'framer-motion';
import { OrnamentalDivider } from './OrnamentalDivider';

export const SaveTheDate: React.FC = () => {
  return (
    <section
      id="save-date"
      className="relative min-h-[90svh] flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#090103] text-amber-50 overflow-hidden"
    >
      {/* Background Cinematic Couple Photo with Slow Zoom */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img
          src="/photos/couple.jpg"
          alt="Anjali & Aman"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-110 animate-slow-zoom"
        />
        {/* Deep Maroon Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090103] via-[#090103]/60 to-[#090103]" />
        <div className="absolute inset-0 bg-jali-pattern opacity-10" />
      </div>

      <div className="relative max-w-3xl mx-auto w-full z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Calligraphic Script Heading */}
          <div className="space-y-0.5 sm:space-y-1">
            <h2 className="font-script text-6xl sm:text-8xl md:text-9xl text-[#FFE8A3] leading-none drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
              Save
            </h2>
            <p className="font-script text-3xl sm:text-5xl md:text-6xl text-amber-300/90 -mt-3 sm:-mt-6 drop-shadow-md">
              the Date
            </p>
          </div>

          <OrnamentalDivider width="max-w-xs" className="my-3 sm:my-6" />

          {/* Date Line */}
          <div className="space-y-1">
            <div className="font-cinzel text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#FFF4D4] uppercase">
              03 DECEMBER 2026
            </div>
            <div className="font-cinzel text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.25em] text-amber-300/90 uppercase font-medium">
              RAJ KINGDOM RESORT • CHHAPRA, BIHAR
            </div>
          </div>

          {/* Couple Names */}
          <div className="pt-2 sm:pt-4">
            <h3 className="font-cinzel text-xl sm:text-3xl md:text-4xl font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#FFEAA7] uppercase drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
              ANJALI & AMAN
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
