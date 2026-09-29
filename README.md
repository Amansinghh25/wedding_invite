# 👑 Anjali & Aman — Royal Wedding Invitation 🪔

> **A bespoke, cinematic luxury Indian wedding invitation website crafted for Anjali & Aman.**  
> Designed with royal maroon, antique gold, warm ivory, and traditional Indian heritage aesthetics celebrating the auspicious union in Sitab Diyara and Chhapra, Bihar.

---

## ✨ Features & Visual Highlights

1. **Sacred 3D Royal Entrance (Entry Gate)**:
   * **Host Family Welcome:** Warm opening invitation presented on behalf of **The Singh Family**.
   * **Sacred Invocations:** Sanskrit shloka (*॥ ॐ श्री गणेशाय नमः ॥*) and auspicious *॥ शुभ विवाह ॥* inscription.
   * **Signature Seal:** Custom vector **A & A** Monogram seal with royal filigree.
   * **3D Gate Animation:** Dual arched palace gates that swing outward smoothly into deep perspective with golden sparkle confetti bursts upon clicking **ENTER THE CELEBRATION**.
   * **Accessibility:** Built-in **Skip Animation** shortcut.

2. **Cinematic Hero Sanctuary**:
   * Full-bleed couple photograph with smooth atmospheric breathing zoom.
   * Sacred Lord Ganesha invocation and golden monogram.
   * **Parents' Honors:**
     * **Bride:** *D/o Smt. Seema Singh & Shri Mukesh Singh*
     * **Groom:** *S/o Smt. Savita Singh & Shri Sunil Singh*
   * Auspicious wedding date and venue highlights with smooth scroll indicator.

3. **Our Celebrations (Vertical Editorial Timeline)**:
   * **🌿 Haldi Ceremony**: Tuesday, 01 December 2026, 12:00 PM (*Our Beloved Home, Sitab Diyara*) — paired with bridal portrait.
   * **🌸 Mehendi & Sangeet**: Wednesday, 02 December 2026, 4:00 PM (*Our Beloved Home, Sitab Diyara*) — paired with groom portrait.
   * **👑 Vivaah Sanskar**: Thursday, 03 December 2026, 7:00 PM (*Raj Kingdom Resort, Chhapra, Bihar*) — paired with couple portrait.
   * Direct **Add to Google Calendar** for each ceremony.

4. **Auspicious Muhurat Countdown**:
   * Minimalist gold countdown timer ticking down to **03 December 2026, 7:00 PM IST**.
   * Live celebration status banner upon arrival of the auspicious hour.

5. **Royal Venue Spotlight**:
   * Elegant showcase of **Raj Kingdom Resort, Chhapra, Bihar**.
   * 1-Click **GET DIRECTIONS** button opening exact location on Google Maps.

6. **Interactive 6-Page Digital Folio Viewer**:
   * Authentic preservation and high-resolution rendering of the original physical invitation cards (`1.png` to `6.png`).
   * 3D paper shadows, soft page gradients, quick slide navigator (`‹ 1 / 6 ›`), touch swipe support, and full-screen lightbox zoom inspection.

7. **Save The Date & Sacred Benediction**:
   * Full-bleed couple portrait with classic calligraphy and golden borders.
   * Concluding family blessings and Sanskrit shloka (*वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ...*).

8. **Synchronized Wedding Audio Experience**:
   * Custom wedding soundtrack extracted from video (`wedding-music.mp3`) with gentle fade-in on entrance.
   * Built-in Web Audio API synthesizer fallback (Shehnai & Tanpura drone).
   * Floating, non-intrusive sound toggle in the navigation bar.

9. **Atmospheric Particle & Light Effects**:
   * Soft drifting gold dust and jasmine/marigold petals on canvas.
   * Subtle ambient candle glow halos and traditional Indian jali geometric backdrop textures.

---

## 🛠️ Technology Stack

* **Framework:** React 19 + TypeScript
* **Bundler & Dev Server:** Vite 8
* **Styling:** Tailwind CSS v4
* **Animations:** Framer Motion + Canvas Confetti
* **Icons:** Lucide React
* **Audio Engine:** HTML5 Audio with Web Audio API Fallback & Smooth Volume Ramp
* **Typography:** Cinzel, Cormorant Garamond, Great Vibes, Alex Brush, Tiro Devanagari Hindi

---

## 📂 Project Structure

```
shaadi/
├── public/
│   ├── audio/
│   │   └── wedding-music.mp3    # Extracted wedding soundtrack
│   ├── invitation-assets/       # Original 6-page invitation cards (1.png - 6.png)
│   └── photos/                  # High-res portraits (bride.jpg, couple.jpg, groom.jpg)
├── src/
│   ├── components/
│   │   ├── EntryGate.tsx            # Royal 3D entrance & opening animation
│   │   ├── GoldParticles.tsx        # Canvas gold dust & falling petals
│   │   ├── Navbar.tsx               # Minimal navigation & audio toggle
│   │   ├── JourneyIndicator.tsx     # Vertical progress tracker
│   │   ├── Hero.tsx                 # Full-bleed cinematic hero & family honors
│   │   ├── WeddingTimeline.tsx      # Vertical celebrations schedule & portraits
│   │   ├── Countdown.tsx            # Auspicious Muhurat countdown clock
│   │   ├── VenueSection.tsx         # Raj Kingdom Resort showcase & map link
│   │   ├── InvitationExperience.tsx # 6-page digital folio viewer & lightbox
│   │   ├── SaveTheDate.tsx          # Save The Date showcase
│   │   ├── Footer.tsx               # Sacred closing & family blessings
│   │   ├── Monogram.tsx             # Signature vector A & A seal
│   │   └── OrnamentalDivider.tsx    # Reusable royal gold filigree divider
│   ├── utils/
│   │   └── audio.ts                 # Dual-mode audio player & synthesizer
│   ├── App.tsx                      # Root component & flow manager
│   ├── index.css                    # Royal gold theme, typography & keyframes
│   └── main.tsx                     # Vite application entry point
├── index.html                       # HTML head, meta tags & web fonts
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production assets will be built cleanly to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌸 Sacred Inscription

$$\text{॥ ॐ श्री गणेशाय नमः ॥}$$
$$\text{वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥}$$
