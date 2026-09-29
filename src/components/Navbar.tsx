import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { Monogram } from './Monogram';

interface NavbarProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMusicPlaying,
  onToggleMusic,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'timeline-section', 'countdown', 'venue', 'invitation', 'save-date'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Functions', href: '#timeline-section' },
    { name: 'Countdown', href: '#countdown' },
    { name: 'Venue', href: '#venue' },
    { name: 'Invitation', href: '#invitation' },
    { name: 'Save the Date', href: '#save-date' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#100306]/85 backdrop-blur-md py-2.5 border-b border-amber-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-[#0e0204]/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand A&A Monogram */}
        <button
          onClick={() => scrollTo('#hero')}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
        >
          <Monogram size="sm" />
          <div className="hidden sm:block">
            <span className="font-cinzel text-xs tracking-[0.25em] text-amber-100 group-hover:text-amber-200 transition-colors uppercase font-bold block">
              ANJALI & AMAN
            </span>
            <span className="font-serif-classic italic text-[11px] text-amber-300/70 tracking-widest block">
              03 December 2026
            </span>
          </div>
        </button>

        {/* Desktop Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-1 rounded-full text-xs font-cinzel tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-amber-200 border-b border-amber-400/80 font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]'
                    : 'text-amber-100/70 hover:text-amber-200 hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Minimal Audio Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMusic}
            aria-label="Toggle Wedding Music"
            title={isMusicPlaying ? 'Mute Music' : 'Play Music'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/30 bg-black/40 hover:bg-black/60 text-amber-200 text-xs transition-all cursor-pointer backdrop-blur-xs"
          >
            {isMusicPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span className="hidden sm:inline font-cinzel text-[10px] tracking-wider uppercase">Sound On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-amber-200/60" />
                <span className="hidden sm:inline font-cinzel text-[10px] tracking-wider uppercase text-amber-200/60">Muted</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-amber-500/30 text-amber-200 bg-black/40 hover:bg-black/60 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-6 bg-[#100306]/95 backdrop-blur-xl border-b border-amber-500/30 shadow-2xl animate-in slide-in-from-top-4 duration-300 text-center space-y-4">
          <div className="flex justify-center mb-2">
            <Monogram size="md" />
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="font-cinzel text-xs tracking-[0.25em] uppercase text-amber-100 hover:text-amber-300 py-1 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-amber-500/20 text-[11px] font-serif-classic italic text-amber-200/70">
            ॥ ॐ श्री गणेशाय नमः ॥
          </div>
        </div>
      )}
    </header>
  );
};
