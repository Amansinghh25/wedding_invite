import React, { useState, useEffect } from 'react';

interface JourneyStep {
  id: string;
  label: string;
}

const STEPS: JourneyStep[] = [
  { id: 'hero', label: 'GANESH & UNION' },
  { id: 'haldi-section', label: 'HALDI' },
  { id: 'mehendi-section', label: 'MEHENDI' },
  { id: 'wedding-section', label: 'THE WEDDING' },
  { id: 'countdown', label: 'MUHURAT' },
  { id: 'venue', label: 'VENUE' },
  { id: 'invitation', label: 'INVITATION' },
  { id: 'save-date', label: 'BLESSINGS' },
];

export const JourneyIndicator: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (const step of STEPS) {
        const el = document.getElementById(step.id);
        if (el) {
          const top = el.offsetTop;
          const h = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + h) {
            setActiveStep(step.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Vertical Journey Bar */}
      <nav
        aria-label="Wedding Journey Progress"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-end gap-3 select-none"
      >
        <div className="relative flex flex-col items-center py-2">
          {/* Vertical Connecting Gold Line */}
          <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-500/20 via-amber-400/40 to-amber-500/20" />

          {STEPS.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => scrollToSection(step.id)}
                className="group relative flex items-center gap-3 my-2 cursor-pointer focus:outline-none"
                title={step.label}
              >
                {/* Text Label (visible on hover or when active) */}
                <span
                  className={`font-cinzel text-[10px] tracking-[0.25em] uppercase transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 text-amber-200 translate-x-0 font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]'
                      : 'opacity-0 group-hover:opacity-80 text-amber-300/60 translate-x-2 group-hover:translate-x-0'
                  }`}
                >
                  {step.label}
                </span>

                {/* Node Indicator Dot */}
                <div
                  className={`relative z-10 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-tr from-amber-300 to-amber-500 scale-125 ring-4 ring-amber-400/30 shadow-[0_0_12px_rgba(255,215,0,0.8)]'
                      : 'bg-[#3A0A15] border border-amber-500/40 group-hover:border-amber-300'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Top Minimal Progress Bar */}
      <div className="fixed top-0 inset-x-0 h-[2px] z-50 bg-black/40 xl:hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};
