import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FastForward } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingAudio } from '../utils/audio';
import { Monogram } from './Monogram';

interface EntryGateProps {
  onEnter: () => void;
  onMusicStart?: () => void;
}

export const EntryGate: React.FC<EntryGateProps> = ({ onEnter, onMusicStart }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const handleOpenGate = () => {
    if (isOpening || hasEntered) return;
    setIsOpening(true);

    // Subtle royal gold sparkle burst
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFF3B0', '#C9932B', '#E5C158'],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore
    }

    try {
      weddingAudio.play();
      onMusicStart?.();
    } catch {
      // ignore
    }

    setTimeout(() => {
      setHasEntered(true);
      onEnter();
    }, 2200);
  };

  const handleSkip = () => {
    try {
      weddingAudio.play();
      onMusicStart?.();
    } catch {
      // ignore
    }
    setHasEntered(true);
    onEnter();
  };

  if (hasEntered) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#060102] select-none"
        style={{ perspective: '1600px' }}
      >
        {/* Dark Maroon & Blackened Backdrop with Subtle Warm Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(94,9,33,0.55)_0%,rgba(28,4,10,0.92)_55%,#040102_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-jali-pattern opacity-15 pointer-events-none" />

        {/* Ambient Subtle Warm Candle Glow Halos */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-amber-600/10 blur-[140px] pointer-events-none" />

        {/* Skip Animation Accessible Shortcut */}
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 sm:top-6 sm:right-8 z-40 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/90 text-amber-200/80 hover:text-amber-100 border border-amber-500/30 text-xs font-sans tracking-widest transition-all backdrop-blur-sm cursor-pointer"
        >
          <span>Skip Animation</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>

        {/* Royal Wedding Entrance Assembly */}
        <motion.div
          animate={isOpening ? { scale: [1, 1.04, 1.35], z: [0, 80, 400], opacity: [1, 1, 0] } : {}}
          transition={{ duration: 2.1, ease: [0.33, 1, 0.68, 1] }}
          className="relative w-[94vw] max-w-[460px] sm:max-w-[500px] aspect-[9/14] sm:aspect-[3/4.2] max-h-[88vh] sm:max-h-[84vh] flex flex-col items-center justify-between rounded-t-[140px] sm:rounded-t-[180px] p-4 sm:p-7 z-10 shadow-[0_0_80px_rgba(94,9,33,0.6)] border border-[#D4AF37]/40 overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Outer Royal Arch Frame */}
          <div className="absolute inset-0 rounded-t-[140px] sm:rounded-t-[180px] border-[8px] sm:border-[12px] border-[#8C631F] bg-gradient-to-b from-[#2F060F] via-[#1B0308] to-[#0A0103] shadow-2xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-32 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.4)_0%,transparent_70%)]" />
            <div className="absolute inset-1.5 sm:inset-2 rounded-t-[130px] sm:rounded-t-[168px] border border-[#D4AF37]/30" />
          </div>

          {/* Left Gate Door - Smoothly swings outward left from center */}
          <motion.div
            animate={isOpening ? { rotateY: -115, x: '-50%', opacity: 0 } : { rotateY: 0, x: 0, opacity: 1 }}
            transition={{ duration: 1.9, ease: [0.25, 1, 0.5, 1] }}
            style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
            className="absolute top-0 bottom-0 left-0 w-1/2 rounded-tl-[140px] sm:rounded-tl-[180px] border-r border-[#EACB8C]/40 bg-gradient-to-r from-[#420A17] via-[#24040B] to-[#160206] shadow-2xl z-20 flex flex-col justify-between p-3 pointer-events-none"
          >
            <div className="absolute inset-2 sm:inset-2.5 border border-[#D4AF37]/20 rounded-tl-[120px] sm:rounded-tl-[160px] flex flex-col justify-around p-2">
              <div className="w-full h-20 sm:h-24 border-b border-[#D4AF37]/15 flex items-center justify-center opacity-25">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-amber-300/40 rotate-45" />
              </div>
              <div className="w-full h-20 sm:h-24 flex items-center justify-center opacity-25">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-amber-300/40" />
              </div>
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-amber-300/60 via-amber-500/60 to-amber-700/60" />
          </motion.div>

          {/* Right Gate Door - Smoothly swings outward right from center */}
          <motion.div
            animate={isOpening ? { rotateY: 115, x: '50%', opacity: 0 } : { rotateY: 0, x: 0, opacity: 1 }}
            transition={{ duration: 1.9, ease: [0.25, 1, 0.5, 1] }}
            style={{ transformOrigin: 'right center', transformStyle: 'preserve-3d' }}
            className="absolute top-0 bottom-0 right-0 w-1/2 rounded-tr-[140px] sm:rounded-tr-[180px] border-l border-[#EACB8C]/40 bg-gradient-to-l from-[#420A17] via-[#24040B] to-[#160206] shadow-2xl z-20 flex flex-col justify-between p-3 pointer-events-none"
          >
            <div className="absolute inset-2 sm:inset-2.5 border border-[#D4AF37]/20 rounded-tr-[120px] sm:rounded-tr-[160px] flex flex-col justify-around p-2">
              <div className="w-full h-20 sm:h-24 border-b border-[#D4AF37]/15 flex items-center justify-center opacity-25">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-amber-300/40 rotate-45" />
              </div>
              <div className="w-full h-20 sm:h-24 flex items-center justify-center opacity-25">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-amber-300/40" />
              </div>
            </div>
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-amber-300/60 via-amber-500/60 to-amber-700/60" />
          </motion.div>

          {/* Warm Golden Light Emerges from behind on open */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-amber-400 blur-3xl opacity-25 animate-pulse" />
          </div>

          {/* Sacred Entry Content Plate */}
          <div className="relative z-30 flex flex-col items-center justify-center text-center w-full my-auto px-2 sm:px-4 py-1">
            
            {/* Sacred Mantra Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mb-1.5 sm:mb-3"
            >
              <span className="font-hindi text-amber-200/95 text-xs sm:text-base md:text-lg tracking-wider font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                ॥ ॐ श्री गणेशाय नमः ॥
              </span>
            </motion.div>

            {/* Signature A&A Monogram Seal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="my-1 sm:my-2"
            >
              <Monogram size="md" className="sm:hidden" />
              <Monogram size="lg" className="hidden sm:inline-flex" />
            </motion.div>

            {/* Bride Family Invitation Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="my-1 sm:my-1.5"
            >
              <p className="font-cinzel text-[11px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.28em] text-amber-300 uppercase font-bold drop-shadow-md">
                The Singh Family
              </p>
              <p className="font-serif-classic italic text-[11px] sm:text-xs md:text-sm text-amber-200/85 tracking-widest mt-0.5">
                Warmly invites you to celebrate the wedding of
              </p>
            </motion.div>

            {/* Couple Typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="my-1 sm:my-2 space-y-0.5"
            >
              <h1 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.2em] text-[#FFF4D4] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                ANJALI
              </h1>
              <div className="font-script text-xl sm:text-2xl md:text-3xl text-amber-300/90 leading-none">
                &
              </div>
              <h1 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.2em] text-[#FFF4D4] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                AMAN
              </h1>
            </motion.div>

            {/* Engraved Gold Luxury CTA Button */}
            <motion.button
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(212,175,55,0.7)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              onClick={handleOpenGate}
              disabled={isOpening}
              className="group relative mt-2.5 sm:mt-4 inline-flex items-center justify-center px-5 sm:px-9 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#AA771C] text-[#3A0F03] font-cinzel font-bold text-[11px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.22em] uppercase shadow-[0_10px_30px_rgba(212,175,55,0.4)] border border-amber-100 cursor-pointer overflow-hidden"
            >
              {/* Shimmer sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
              <span>{isOpening ? 'OPENING...' : 'ENTER THE CELEBRATION'}</span>
            </motion.button>
          </div>

          {/* Bottom Royal Arch Base Trim */}
          <div className="relative z-30 w-full flex items-center justify-around pt-1.5 sm:pt-2 border-t border-amber-500/20">
            <span className="font-hindi text-amber-300/80 text-[11px] sm:text-xs md:text-sm tracking-widest font-semibold drop-shadow-md">
              ॥ शुभ विवाह ॥
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
