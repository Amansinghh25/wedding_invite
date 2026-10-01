import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const WeddingTimeline: React.FC = () => {
  const events = [
    {
      id: 'haldi-section',
      num: '01',
      date: '01 DECEMBER 2026',
      day: 'Tuesday',
      title: 'HALDI',
      time: '12:00 PM',
      venue: 'Our Beloved Home',
      location: 'Sitab Diyara',
      image: '/photos/bride.jpg',
      themeBadge: 'Turmeric Yellow & Warm Ivory',
      accentColor: 'border-amber-500/40 text-amber-300',
      tagColor: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Haldi+Ceremony+-+Anjali+%26+Aman&dates=20261201T063000Z/20261201T103000Z&details=Haldi+Ceremony+at+Our+Beloved+Home,+Sitab+Diyara&location=Our+Beloved+Home,+Sitab+Diyara',
    },
    {
      id: 'mehendi-section',
      num: '02',
      date: '02 DECEMBER 2026',
      day: 'Wednesday',
      title: 'MEHENDI & SANGEET',
      time: '4:00 PM',
      venue: 'Our Beloved Home',
      location: 'Sitab Diyara',
      image: '/photos/groom.jpg',
      themeBadge: 'Emerald Green & Royal Wine',
      accentColor: 'border-emerald-500/40 text-emerald-300',
      tagColor: 'bg-emerald-900/40 text-emerald-200 border-emerald-500/40',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehendi+%26+Sangeet+-+Anjali+%26+Aman&dates=20261202T103000Z/20261202T163000Z&details=Mehendi+%26+Sangeet+at+Our+Beloved+Home,+Sitab+Diyara&location=Our+Beloved+Home,+Sitab+Diyara',
    },
    {
      id: 'wedding-section',
      num: '03',
      date: '03 DECEMBER 2026',
      day: 'Thursday',
      title: 'THE WEDDING',
      time: '7:00 PM',
      venue: 'RAJ KINGDOM RESORT',
      location: 'CHHAPRA, BIHAR',
      image: '/photos/couple.jpg',
      themeBadge: 'Royal Maroon & Antique Gold',
      accentColor: 'border-amber-400 text-amber-200',
      tagColor: 'bg-amber-500/30 text-amber-100 border-amber-400/60',
      isMainWedding: true,
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+-+Anjali+%26+Aman&dates=20261203T133000Z/20261203T203000Z&details=Vivaah+Ceremony+at+Raj+Kingdom+Resort,+Chhapra,+Bihar&location=Raj+Kingdom+Resort,+Chhapra,+Bihar',
    },
  ];

  return (
    <section
      id="timeline-section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090204] text-amber-50 overflow-hidden"
    >
      {/* Ambient Velvet Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(114,9,44,0.35)_0%,#070103_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-20">
          <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-amber-300 font-semibold mb-1.5 sm:mb-2">
            Auspicious Itinerary
          </p>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.16em] sm:tracking-[0.18em] text-[#FFF6DF] uppercase">
            OUR CELEBRATIONS
          </h2>
          <OrnamentalDivider width="max-w-xs" className="my-3 sm:my-6" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Gold Line */}
          <div className="absolute left-4 sm:left-1/2 top-8 bottom-8 w-[1px] bg-gradient-to-b from-amber-400/20 via-amber-400/60 to-amber-400/20 -translate-x-1/2 hidden sm:block" />

          {/* Timeline Events Stack */}
          <div className="space-y-12 sm:space-y-24">
            {events.map((evt, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={evt.id}
                  id={evt.id}
                  className="relative scroll-mt-28"
                >
                  {/* Central Node Marker on Desktop */}
                  <div className="absolute left-1/2 top-10 -translate-x-1/2 hidden sm:flex items-center justify-center z-20">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#1B040B] border-2 shadow-[0_0_20px_rgba(212,175,55,0.5)] ${
                      evt.isMainWedding ? 'border-amber-300 scale-125' : 'border-amber-500/60'
                    }`}>
                      <span className="font-cinzel text-xs font-bold text-amber-200">
                        {evt.num}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Layout: Royal Event Card Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className={`grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10 items-center p-4 sm:p-8 rounded-3xl bg-gradient-to-b from-[#2A0610]/80 via-[#1C030A]/60 to-[#100105]/80 border shadow-[0_20px_60px_rgba(94,9,33,0.4)] backdrop-blur-xs ${
                      evt.isMainWedding
                        ? 'border-amber-400/60 ring-1 ring-amber-400/30'
                        : 'border-amber-400/40'
                    }`}
                  >
                    {/* Event Editorial Photography */}
                    <div
                      className={`sm:col-span-6 ${
                        isEven ? 'sm:order-1' : 'sm:order-2'
                      }`}
                    >
                      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] bg-[#160206] shadow-2xl border border-amber-500/30 group">
                        <img
                          src={evt.image}
                          alt={evt.title}
                          className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Soft Vignette Mask */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        
                        {/* Day Tag Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-200 border border-amber-400/40 text-xs font-cinzel tracking-widest uppercase font-bold">
                            {evt.day}
                          </span>
                          <span className="font-cinzel text-xs text-amber-300 tracking-widest">
                            {evt.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Event Typography Content */}
                    <div
                      className={`sm:col-span-6 space-y-4 text-left ${
                        isEven ? 'sm:order-2 sm:pl-6' : 'sm:order-1 sm:pr-6 sm:text-right'
                      }`}
                    >
                      <div className={`flex items-center gap-2 ${isEven ? 'justify-start' : 'sm:justify-end justify-start'}`}>
                        <span className={`px-3 py-0.5 rounded-full text-[11px] font-cinzel tracking-widest uppercase font-bold border ${evt.tagColor}`}>
                          Day {evt.num}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="font-cinzel text-xs tracking-[0.25em] text-amber-300/80 uppercase">
                          {evt.date}
                        </div>
                        <h3 className={`font-cinzel font-bold tracking-[0.15em] text-[#FFF4D4] uppercase ${
                          evt.isMainWedding ? 'text-3xl sm:text-5xl text-amber-100' : 'text-2xl sm:text-4xl'
                        }`}>
                          {evt.title}
                        </h3>
                      </div>

                      {/* Time & Venue Block */}
                      <div className={`p-4 rounded-2xl bg-black/40 border border-amber-500/20 backdrop-blur-xs space-y-2 ${
                        isEven ? 'text-left' : 'sm:text-right text-left'
                      }`}>
                        <div className={`flex items-center gap-2 text-amber-200 text-sm font-cinzel font-semibold ${
                          isEven ? 'justify-start' : 'sm:justify-end justify-start'
                        }`}>
                          <Clock className="w-4 h-4 text-amber-400" />
                          <span>{evt.time}</span>
                        </div>

                        <div className={`flex items-start gap-2 text-xs font-serif-classic text-amber-100/90 ${
                          isEven ? 'justify-start' : 'sm:justify-end justify-start'
                        }`}>
                          <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="font-cinzel uppercase tracking-wider block text-xs">
                              {evt.venue}
                            </strong>
                            <span className="italic text-amber-200/70">{evt.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Add to Calendar Action */}
                      <div className={`pt-2 flex ${isEven ? 'justify-start' : 'sm:justify-end justify-start'}`}>
                        <a
                          href={evt.calendarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-400/40 text-xs font-cinzel tracking-widest uppercase transition-all hover:scale-105 cursor-pointer backdrop-blur-xs"
                        >
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>Add to Calendar</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
