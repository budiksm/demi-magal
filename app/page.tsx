'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import CoverSection from '@/components/CoverSection';
import OpeningSection from '@/components/OpeningSection';
import QuranSection from '@/components/QuranSection';
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
    <main className="min-h-screen bg-cream text-burgundy relative">
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
            animate={{ y: 0, transitionEnd: { transform: 'none' } }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-full"
          >
            <div className="flex flex-row min-h-screen relative z-10 bg-cream">
              {/* LEFT SIDE: Sticky Image (Desktop Only) */}
              <div className="hidden lg:flex w-[50%] sticky top-0 h-screen self-start flex-col items-center justify-center relative">
                <Image
                  src="https://picsum.photos/seed/wedding-main/1200/1600"
                  alt="Romeo and Juliet"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* RIGHT SIDE: Scrollable Content */}
              <div className="w-full lg:w-[50%] flex flex-col items-center bg-cream">
                <div className="w-full">
                  <OpeningSection />
                </div>
                <div className="w-full">
                  <QuranSection />
                </div>
                <div className="w-full max-w-[520px] mx-auto px-6 lg:px-10 py-12">
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
