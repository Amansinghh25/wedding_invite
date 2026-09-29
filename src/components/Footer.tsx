import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Monogram } from './Monogram';
import { OrnamentalDivider } from './OrnamentalDivider';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#090103] via-[#150308] to-[#050102] text-amber-50 border-t border-amber-500/20 overflow-hidden text-center select-none">
      <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto z-10 space-y-6">
        {/* Monogram Seal */}
        <div className="flex justify-center">
          <Monogram size="md" className="sm:hidden" />
          <Monogram size="lg" className="hidden sm:inline-flex" />
        </div>

        {/* Couple Names & Family */}
        <div className="space-y-1.5 sm:space-y-2">
          <h3 className="font-cinzel text-xl sm:text-3xl md:text-4xl font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#FFF6DF] uppercase drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
            ANJALI & AMAN
          </h3>

          <p className="font-serif-classic italic text-[11px] sm:text-sm text-amber-200/80 tracking-wider">
            D/o Smt. Seema &amp; Shri Mukesh Singh • S/o Smt. Savita &amp; Shri Sunil Singh
          </p>

          <p className="font-serif-classic italic text-sm sm:text-lg md:text-xl text-amber-100/90 tracking-wide max-w-md mx-auto pt-1 sm:pt-2">
            With love,
            <br />
            we look forward to celebrating with you.
          </p>
        </div>

        <OrnamentalDivider width="max-w-xs" className="my-3 sm:my-6" />

        {/* Sacred Mantra Closing */}
        <div>
          <span className="font-hindi text-amber-300 text-sm sm:text-base tracking-wider font-semibold">
            ॥ ॐ श्री गणेशाय नमः ॥
          </span>
          <p className="font-cinzel text-[10px] sm:text-xs text-amber-300/60 tracking-[0.25em] uppercase mt-1">
            Sitab Diyara • Chhapra, Bihar • 2026
          </p>
        </div>

        {/* Back to Top */}
        <div className="pt-4">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 hover:bg-black/70 text-amber-200 border border-amber-500/30 text-xs font-cinzel tracking-widest uppercase transition-all hover:scale-105 cursor-pointer backdrop-blur-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
