import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const Countdown: React.FC = () => {
  // Target: 03 December 2026, 19:00:00 IST (UTC+5:30)
  const targetDate = new Date('2026-12-03T19:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const addToGoogleCalendar = () => {
    const title = encodeURIComponent('Anjali & Aman Wedding Ceremony');
    const details = encodeURIComponent('Wedding ceremony of Anjali Singh & Aman Singh at Raj Kingdom Resort, Chhapra, Bihar.');
    const location = encodeURIComponent('Raj Kingdom Resort, Chhapra, Bihar');
    const dates = '20261203T133000Z/20261203T203000Z';
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#070103] text-amber-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-600/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-amber-300 font-semibold">
            Auspicious Muhurat
          </p>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold gold-gradient-text tracking-[0.18em] uppercase">
            THE WEDDING DAY
          </h2>

          <div className="font-cinzel text-sm sm:text-base tracking-[0.25em] text-amber-200/90 uppercase font-semibold">
            03 DECEMBER 2026 • 7:00 PM
          </div>

          <OrnamentalDivider width="max-w-xs" />
        </motion.div>

        {timeLeft.isExpired ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-300">
            <h3 className="font-cinzel text-xl sm:text-4xl font-bold gold-gradient-text tracking-[0.18em] sm:tracking-[0.2em] uppercase">
              THE WAIT IS OVER — LET THE CELEBRATION BEGIN
            </h3>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-1.5 sm:gap-4 md:gap-6 my-8 sm:my-10 max-w-2xl mx-auto px-1">
            {units.map((unit, idx) => (
              <React.Fragment key={unit.label}>
                {/* Numeric Unit Column */}
                <div className="flex flex-col items-center flex-1 min-w-[54px] sm:min-w-[70px]">
                  <span className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFF6DF] tracking-tight drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="font-cinzel text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-amber-300/80 uppercase mt-1 sm:mt-2 font-medium">
                    {unit.label}
                  </span>
                </div>

                {/* Classical Elegant Separator */}
                {idx < units.length - 1 && (
                  <div className="font-cinzel text-xl sm:text-3xl md:text-4xl text-amber-400/40 -mt-4 sm:-mt-6">
                    :
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="pt-2">
          <button
            onClick={addToGoogleCalendar}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#AA771C] text-[#3A0F03] font-cinzel font-bold text-xs tracking-[0.2em] uppercase shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:scale-105 transition-all cursor-pointer border border-amber-100"
          >
            <Calendar className="w-4 h-4 text-amber-950" />
            <span>Save Date to Calendar</span>
          </button>
        </div>
      </div>
    </section>
  );
};
