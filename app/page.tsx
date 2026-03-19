'use client';

import { useState } from 'react';
import CoverSection from '@/components/CoverSection';
import OpeningSection from '@/components/OpeningSection';
import CoupleProfile from '@/components/CoupleProfile';
import LoveStory from '@/components/LoveStory';
import EventDetails from '@/components/EventDetails';
import Gallery from '@/components/Gallery';
import RSVPSection from '@/components/RSVPSection';
import GiftSection from '@/components/GiftSection';
import ClosingSection from '@/components/ClosingSection';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="min-h-screen bg-cream text-burgundy">
      {!isOpened ? (
        <CoverSection onOpen={() => setIsOpened(true)} />
      ) : (
        <div className="animate-in fade-in duration-1000">
          <OpeningSection />
          <CoupleProfile />
          <LoveStory />
          <EventDetails />
          <Gallery />
          <RSVPSection />
          <GiftSection />
          <ClosingSection />
        </div>
      )}
    </main>
  );
}
