import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Calendar, Clock } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const VenueSection: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Raj+Kingdom+Resort+Chhapra+Bihar';

  return (
    <section
      id="venue"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0b0205] text-amber-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-jali-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto w-full z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2 mb-10"
        >
          <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-amber-300 font-semibold">
            The Royal Destination
          </p>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-[0.18em] text-[#FFF6DF] uppercase">
            THE WEDDING VENUE
          </h2>
          <OrnamentalDivider width="max-w-xs" />
        </motion.div>

        {/* Regal Architectural Arch Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[28px] sm:rounded-[40px] bg-gradient-to-b from-[#2A0610] via-[#1A0309] to-[#0D0104] p-6 sm:p-10 md:p-14 border border-amber-400/40 shadow-[0_20px_60px_rgba(94,9,33,0.35)] overflow-hidden max-w-2xl mx-auto"
        >
          {/* Inner Double Gold Frame */}
          <div className="absolute inset-2.5 sm:inset-4 rounded-[22px] sm:rounded-[34px] border border-amber-400/20 pointer-events-none" />

          {/* Palace Arch Silhouette Icon */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-b from-amber-300/20 to-amber-600/30 border border-amber-400/50 flex items-center justify-center p-2.5 sm:p-3 shadow-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F5E0A3" strokeWidth="1.5" className="w-full h-full">
              <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6a3 3 0 0 1 6 0v6" />
            </svg>
          </div>

          <h3 className="font-cinzel text-xl sm:text-3xl md:text-4xl font-bold text-[#FFF6DF] uppercase tracking-wider mb-1">
            RAJ KINGDOM RESORT
          </h3>
          <p className="font-cinzel text-xs sm:text-base text-amber-300 tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold">
            CHHAPRA, BIHAR
          </p>

          {/* Date & Time Line */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-6 my-6 sm:my-8 py-3 sm:py-4 border-y border-amber-400/20 text-xs sm:text-sm font-cinzel text-amber-100/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              <span>03 DECEMBER 2026</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-amber-400" />
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              <span>7:00 PM</span>
            </div>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 sm:px-8 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#AA771C] text-[#3A0F03] font-cinzel font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase shadow-[0_8px_25px_rgba(212,175,55,0.4)] border border-amber-100 hover:scale-105 transition-all cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-950" />
            <span>VIEW LOCATION</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
