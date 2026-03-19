'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import CoverSection from '@/components/CoverSection';
import OpeningSection from '@/components/OpeningSection';
import CoupleProfile from '@/components/CoupleProfile';
import LoveStory from '@/components/LoveStory';
import EventDetails from '@/components/EventDetails';
import Gallery from '@/components/Gallery';
import RSVPSection from '@/components/RSVPSection';
import GiftSection from '@/components/GiftSection';
import ClosingSection from '@/components/ClosingSection';
import Doodle from '@/components/Doodle';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="min-h-screen bg-cream text-burgundy relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="cover"
            initial={{ y: 0 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-cream overflow-y-auto"
          >
            <CoverSection onOpen={() => setIsOpened(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-full"
          >
            <div className="flex flex-col lg:flex-row min-h-screen relative z-10 bg-cream">
              {/* LEFT SIDE: Sticky Image (Desktop) / Stacked (Mobile) */}
              <div className="w-full h-[60vh] lg:w-[65%] lg:sticky lg:top-0 lg:h-screen flex flex-col items-center justify-center relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/wedding-main/1200/1600"
                  alt="Romeo and Juliet"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                
                <div className="mt-8 text-center lg:hidden relative z-10 bg-cream/80 p-6 rounded-2xl backdrop-blur-sm">
                  <h2 className="font-serif text-5xl text-burgundy">Romeo & Juliet</h2>
                  <p className="text-olive mt-2 font-serif text-xl">24 . 10 . 2026</p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center text-cream drop-shadow-md animate-gentle-bounce z-10">
                  <span className="font-serif text-xl mb-1">scroll down</span>
                  <Doodle type="arrow" className="w-8 h-8 rotate-90" />
                </div>
              </div>

              {/* RIGHT SIDE: Scrollable Content */}
              <div className="lg:w-[35%] flex flex-col items-center w-full bg-cream">
                <div className="w-full max-w-[520px] mx-auto px-6 lg:px-10 py-12">
                  <OpeningSection />
                  <CoupleProfile />
                  <LoveStory />
                  <EventDetails />
                  <Gallery />
                  <RSVPSection />
                  <GiftSection />
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
