import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface InvitationCardPage {
  pageNumber: number;
  title: string;
  imageSrc: string;
}

const INVITATION_PAGES: InvitationCardPage[] = [
  { pageNumber: 1, title: 'Shree Ganeshay Namah', imageSrc: '/invitation-assets/1.png' },
  { pageNumber: 2, title: 'Vivaah Sanskar Invitation', imageSrc: '/invitation-assets/2.png' },
  { pageNumber: 3, title: 'Functions & Ceremonies Schedule', imageSrc: '/invitation-assets/3.png' },
  { pageNumber: 4, title: 'Haldi Ceremony', imageSrc: '/invitation-assets/4.png' },
  { pageNumber: 5, title: 'Mehendi & Sangeet', imageSrc: '/invitation-assets/5.png' },
  { pageNumber: 6, title: 'Save the Date', imageSrc: '/invitation-assets/6.png' },
];

export const InvitationExperience: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [hasSwiped, setHasSwiped] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextPage = () => {
    setHasSwiped(true);
    setCurrentPage((prev) => (prev + 1) % INVITATION_PAGES.length);
  };

  const prevPage = () => {
    setHasSwiped(true);
    setCurrentPage((prev) => (prev - 1 + INVITATION_PAGES.length) % INVITATION_PAGES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextPage();
    } else if (diff < -50) {
      prevPage();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentCard = INVITATION_PAGES[currentPage];

  return (
    <section
      id="invitation"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#080103] text-amber-50 overflow-hidden select-none"
    >
      <div className="absolute inset-0 bg-jali-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2 mb-10"
        >
          <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-amber-300 font-semibold">
            Authentic Wedding Folio
          </p>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-[0.18em] text-[#FFF6DF] uppercase">
            THE INVITATION
          </h2>
          <OrnamentalDivider width="max-w-xs" />
        </motion.div>

        {/* Physical Folio Card Presentation Stage */}
        <div
          className="flex flex-col items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Frame with 3D Depth & Paper Shadows */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[1/1.414] rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#FFEAA7] via-[#D4AF37] to-[#8C5318] shadow-[0_30px_70px_rgba(0,0,0,0.85)] border border-amber-200">
            <div className="relative w-full h-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#FAF6EE] shadow-inner">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentCard.pageNumber}
                  src={currentCard.imageSrc}
                  alt={currentCard.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>

              {/* Fullscreen Trigger */}
              <button
                onClick={() => setFullScreenImage(currentCard.imageSrc)}
                className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-amber-200 backdrop-blur-md border border-amber-400/40 hover:scale-110 transition-transform cursor-pointer shadow-lg"
                title="View Fullscreen"
                aria-label="View Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Page Navigation Indicator: ‹  1 / 6  › */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8">
            <button
              onClick={prevPage}
              className="p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-amber-200 border border-amber-500/40 hover:scale-105 transition-transform cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-amber-200 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-black/60 border border-amber-500/30">
              {currentPage + 1} / {INVITATION_PAGES.length}
            </span>

            <button
              onClick={nextPage}
              className="p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-amber-200 border border-amber-500/40 hover:scale-105 transition-transform cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Mobile Swipe Hint */}
          {!hasSwiped && (
            <p className="sm:hidden font-serif-classic italic text-[11px] text-amber-300/70 tracking-wider mt-3 animate-pulse">
              Swipe or tap arrows to view all pages
            </p>
          )}

          {/* Quick Folio Thumbnails (Scrollable on small devices) */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-3 mt-5 sm:mt-6 max-w-full overflow-x-auto py-1 px-2">
            {INVITATION_PAGES.map((page, idx) => (
              <button
                key={page.pageNumber}
                onClick={() => {
                  setHasSwiped(true);
                  setCurrentPage(idx);
                }}
                className={`w-9 sm:w-12 h-12 sm:h-16 rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer ${
                  currentPage === idx
                    ? 'ring-2 ring-amber-400 border-amber-300 scale-105 shadow-[0_0_12px_rgba(212,175,55,0.6)]'
                    : 'opacity-40 hover:opacity-80 border-amber-500/30'
                }`}
                title={page.title}
              >
                <img src={page.imageSrc} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {fullScreenImage && (
        <div
          onClick={() => setFullScreenImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setFullScreenImage(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/40 cursor-pointer"
            aria-label="Close Fullscreen"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={fullScreenImage}
            alt="Original Wedding Invitation"
            className="max-w-[92vw] max-h-[92vh] object-contain rounded-2xl shadow-2xl border border-amber-400/40"
          />
        </div>
      )}
    </section>
  );
};
