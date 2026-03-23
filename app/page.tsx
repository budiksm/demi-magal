'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import CoverSection from '@/components/CoverSection';
import OpeningSection from '@/components/OpeningSection';
import QuranSection from '@/components/QuranSection';
import CoupleProfile from '@/components/CoupleProfile';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import EventDetails from '@/components/EventDetails';
import ClosingSection from '@/components/ClosingSection';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.loop = true;
      audio.play().catch(() => {});
    }
    setIsOpened(true);
  };

  return (
    <main className="min-h-screen bg-cream text-burgundy relative">
      <audio ref={audioRef} src="/audio/selfless.mp3" preload="auto" />
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="cover"
            initial={{ y: 0 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-cream overflow-y-auto"
          >
            <CoverSection onOpen={handleOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ y: '100%' }}
            animate={{ y: 0, transitionEnd: { transform: 'none' } }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-full"
          >
            <div className="flex flex-row min-h-screen relative z-10 bg-cream">

              {/* LEFT SIDE: Sticky Image (Desktop Only) */}
              <div className="hidden lg:flex w-[50%] sticky top-0 h-screen self-start flex-col items-center justify-center relative">
                <Image
                  src="https://picsum.photos/seed/wedding-main/1200/1600"
                  alt="Tsalsa dan Budi"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* RIGHT SIDE: Scrollable Content */}
              <div className="w-full lg:w-[50%] flex flex-col items-center bg-cream">

                {/* Opening */}
                <div className="w-full">
                  <OpeningSection />
                </div>

                <SectionDivider type="wave" />

                {/* Quran */}
                <div className="w-full">
                  <QuranSection />
                </div>

                <SectionDivider type="stars" />

                {/* Konten utama */}
                <div className="w-full max-w-[520px] mx-auto px-6 lg:px-10">

                  {/* Couple Profile */}
                  <CoupleProfile />

                  <SectionDivider type="floral" />

                  {/* Photo Placeholder */}
                  <PhotoPlaceholder />

                  <SectionDivider type="leaves" />

                  {/* Event Details */}
                  <EventDetails />

                  <SectionDivider type="stars" />

                  {/* Closing */}
                  <ClosingSection />

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
