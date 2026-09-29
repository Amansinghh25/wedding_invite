import React from 'react';
import { motion } from 'framer-motion';
import { Monogram } from './Monogram';
import { OrnamentalDivider } from './OrnamentalDivider';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0103] text-amber-50"
    >
      {/* Full-Screen Cinematic Couple Photography Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="/photos/couple.jpg"
            alt="Anjali & Aman"
            className="w-full h-full object-cover object-[center_28%] sm:object-[center_35%] filter brightness-[0.72] contrast-105 animate-slow-zoom"
          />
        </motion.div>

        {/* Deep Maroon & Warm Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0103] via-[#0a0103]/45 to-[#0a0103]/85" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_35%] from-transparent via-transparent to-[#0a0103]/80" />
        <div className="absolute inset-0 bg-jali-pattern opacity-10" />
      </div>

      {/* Top Sacred Shloka & Monogram */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative z-20 flex flex-col items-center text-center space-y-1.5 sm:space-y-2 mt-1 sm:mt-2"
      >
        <span className="font-hindi text-amber-200/90 text-xs sm:text-base tracking-wider font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          ॥ ॐ श्री गणेशाय नमः ॥
        </span>
        <Monogram size="sm" />
      </motion.div>

      {/* Center Cinematic Opening Typography */}
      <div className="relative z-20 flex flex-col items-center text-center my-auto py-4 sm:py-6 max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.1 }}
          className="space-y-1.5 sm:space-y-3 w-full"
        >
          <p className="font-serif-classic italic text-amber-200/85 text-[11px] sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold">
            With the blessings of our elders
          </p>

          {/* Bride Name & Parents */}
          <div className="space-y-0.5">
            <h1 className="font-cinzel text-2xl sm:text-4xl md:text-6xl font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#FFF6DF] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              ANJALI
            </h1>
            <p className="font-serif-classic italic text-[11px] sm:text-sm text-amber-200/90 tracking-wider">
              D/o Smt. Seema Singh &amp; Shri Mukesh Singh
            </p>
          </div>

          <div className="font-script text-xl sm:text-3xl md:text-4xl text-amber-300 drop-shadow-md leading-none py-0.5 sm:py-1">
            &amp;
          </div>

          {/* Groom Name & Parents */}
          <div className="space-y-0.5">
            <h1 className="font-cinzel text-2xl sm:text-4xl md:text-6xl font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#FFF6DF] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              AMAN
            </h1>
            <p className="font-serif-classic italic text-[11px] sm:text-sm text-amber-200/90 tracking-wider">
              S/o Smt. Savita Singh &amp; Shri Sunil Singh
            </p>
          </div>
        </motion.div>

        {/* Auspicious Date Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="my-2 sm:my-3 w-full"
        >
          <OrnamentalDivider width="max-w-xs" className="my-3 sm:my-6" />
          <div className="font-cinzel text-xs sm:text-base md:text-lg tracking-[0.25em] sm:tracking-[0.3em] uppercase text-amber-200 font-bold drop-shadow-md">
            03 DECEMBER 2026
          </div>
          <div className="font-cinzel text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.2em] text-amber-300/80 uppercase mt-0.5 sm:mt-1 font-medium">
            RAJ KINGDOM RESORT • CHHAPRA, BIHAR
          </div>
          <OrnamentalDivider width="max-w-xs" className="my-3 sm:my-6" />
        </motion.div>

        {/* Heartfelt Invitation Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="font-serif-classic italic text-amber-100/95 text-xs sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto drop-shadow-md px-2 sm:px-4"
        >
          With hearts filled with joy and love,
          <br />
          we warmly invite you to join us in celebrating.
        </motion.p>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-20 flex flex-col items-center gap-1.5 sm:gap-2 text-amber-300/70 hover:text-amber-200 transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">The Celebrations</span>
        <div className="w-3.5 sm:w-4 h-6 sm:h-7 rounded-full border border-amber-400/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-amber-400"
          />
        </div>
      </motion.div>
    </section>
  );
};
