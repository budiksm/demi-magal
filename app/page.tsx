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
    <main className="min-h-screen bg-cream text-burgundy overflow-hidden relative">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="cover"
            initial={{ y: 0 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-50 bg-cream"
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
              <div className="lg:w-[40%] lg:sticky lg:top-0 lg:h-screen flex flex-col items-center justify-center bg-peach/10 p-8 relative overflow-hidden">
                <Doodle type="star" className="absolute top-12 left-12 w-8 h-8 text-peach animate-float" />
                <Doodle type="flower" className="absolute bottom-12 right-12 w-12 h-12 text-olive/30 animate-float-reverse" />
                
                <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border-8 border-white shadow-xl rotate-[-2deg] animate-float">
                  <Image
                    src="https://picsum.photos/seed/wedding-main/800/1000"
                    alt="Romeo and Juliet"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="mt-8 text-center lg:hidden">
                  <h2 className="font-serif text-5xl text-burgundy">Romeo & Juliet</h2>
                  <p className="text-olive mt-2 font-serif text-xl">24 . 10 . 2026</p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-olive animate-gentle-bounce">
                  <span className="font-serif text-lg mb-1">scroll down</span>
                  <Doodle type="arrow" className="w-6 h-6 rotate-90" />
                </div>
              </div>

              {/* RIGHT SIDE: Scrollable Content */}
              <div className="lg:w-[60%] flex flex-col items-center w-full">
                <div className="w-full max-w-2xl mx-auto">
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
