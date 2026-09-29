import React, { useState, useEffect } from 'react';
import { EntryGate } from './components/EntryGate';
import { GoldParticles } from './components/GoldParticles';
import { Navbar } from './components/Navbar';
import { JourneyIndicator } from './components/JourneyIndicator';
import { Hero } from './components/Hero';
import { WeddingTimeline } from './components/WeddingTimeline';
import { Countdown } from './components/Countdown';
import { VenueSection } from './components/VenueSection';
import { InvitationExperience } from './components/InvitationExperience';
import { SaveTheDate } from './components/SaveTheDate';
import { Footer } from './components/Footer';
import { weddingAudio } from './utils/audio';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);

  useEffect(() => {
    // Accessibility check for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // Respect motion preferences
    }
  }, []);

  const handleToggleMusic = () => {
    const playing = weddingAudio.toggle();
    setIsMusicPlaying(playing);
  };

  return (
    <div className="relative min-h-screen bg-[#070102] text-[#4A3225] font-serif-classic selection:bg-[#D4AF37]/30 selection:text-[#5E0921] overflow-x-hidden">
      {/* Subtle Refined Gold Dust & Petals */}
      <GoldParticles density={hasEntered ? 22 : 14} showPetals={true} />

      {/* Royal 3D Gate Entry Experience */}
      {!hasEntered && (
        <EntryGate
          onEnter={() => setHasEntered(true)}
          onMusicStart={() => setIsMusicPlaying(true)}
        />
      )}

      {/* Main Luxury Wedding Invitation Experience */}
      <div
        className={`transition-opacity duration-1000 ${
          hasEntered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Navbar
          isMusicPlaying={isMusicPlaying}
          onToggleMusic={handleToggleMusic}
        />

        <JourneyIndicator />

        <main className="w-full flex flex-col">
          {/* 1. Cinematic Hero with Couple Photography */}
          <Hero />

          {/* 2. Our Celebrations: Vertical Cinematic Timeline */}
          <WeddingTimeline />

          {/* 3. Auspicious Muhurat Countdown */}
          <Countdown />

          {/* 4. The Wedding Venue */}
          <VenueSection />

          {/* 5. The Original Invitation Folio */}
          <InvitationExperience />

          {/* 6. Save The Date */}
          <SaveTheDate />
        </main>

        {/* 7. Final Closing & Blessings */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
