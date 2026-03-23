'use client';

import { useRef } from 'react';
import { MailOpen } from 'lucide-react';
import Image from 'next/image';
import Doodle from './Doodle';

export default function CoverSection({ onOpen }: { onOpen: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.loop = true;
      audio.play().catch(() => {});
    }
    onOpen();
  };
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] px-6 py-6 text-center overflow-hidden bg-burgundy text-cream">
      <audio ref={audioRef} src="/audio/selfless.mp3" preload="auto" />
      
      {/* 1. BACKGROUND PATTERN: Scattered florals */}
      <Doodle type="baby-breath" className="absolute top-10 left-10 w-16 h-16 text-cream/20 animate-pulse-soft pointer-events-none" />
      <Doodle type="flower" className="absolute top-1/4 right-20 w-12 h-12 text-soft-peach/20 pointer-events-none" />
      <Doodle type="tulip" className="absolute bottom-1/4 left-20 w-16 h-16 text-olive/20 pointer-events-none" />
      <Doodle type="baby-breath" className="absolute bottom-10 right-10 w-20 h-20 text-cream/20 animate-pulse-soft pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center max-w-md mx-auto w-full relative">
        
        {/* 2. MAIN LAYOUT: Framed Photo */}
        <div className="relative w-56 h-64 mb-4 bg-cream p-2 shadow-md rounded-lg border border-cream/60 [box-shadow:inset_0_0_4px_rgba(0,0,0,0.1)]">
           <div className="relative w-full h-full bg-gray-200 overflow-hidden rounded-md">
             <Image
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWh3a3NxOTRjeXd1aXJ4Zmw2aHpwcWkxNmlkaWhpZzk0NXF2MjNmcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Kb4WlwEM9PiB8I7Yhc/giphy.gif"
                alt="Couple Photobox"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                unoptimized
             />
             <div className="absolute inset-0 bg-burgundy/10 z-10" />
           </div>
           
           {/* Decorative text around photo */}
           <p className="absolute -left-8 top-1/2 -rotate-10 text-olive font-[family-name:var(--font-beth-ellen)] text-2xl opacity-90 leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">so<br/>real</p>
           <p className="absolute -right-8 top-1/2 rotate-8 text-white font-[family-name:var(--font-beth-ellen)] text-2xl opacity-90 leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]">getting<br/>married</p>

           {/* Small doodle ornaments */}
           <Doodle type="star" className="absolute -top-6 -right-6 w-4 h-4 text-cream/60" />
           <Doodle type="flower" className="absolute -bottom-4 -left-4 w-4 h-4 text-cream/60" />
           <Doodle type="heart" className="absolute bottom-4 left-4 w-5 h-5 text-rose-800/80" />
           <Doodle type="star" className="absolute top-4 -left-6 w-5 h-5 text-soft-peach/60" />
           
           {/* MAIN ACCENTS: Asymmetrical florals */}
           <Doodle 
             type="calla-lily" 
             className="absolute -bottom-12 -right-14 w-[160px] h-[160px] text-soft-pink pointer-events-none z-20" 
           />
           <Doodle 
             type="orchid" 
             className="absolute -top-10 -left-10 w-[100px] h-[100px] text-olive pointer-events-none z-20" 
           />
        </div>

        {/* 3. TEXT: Below image */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-[family-name:var(--font-tnanti)] text-6xl leading-tight tracking-tight text-cream">
            Tsalsa & Budi
          </h1>
          <Doodle type="line" className="w-32 h-4 text-olive opacity-85" />
          <p className="font-[family-name:var(--font-midnight-study)] text-lg text-soft-peach mt-1">Sekitar Agustus</p>
          
          <div className="mt-4 bg-soft-peach/10 p-4 rounded-2xl shadow-md border border-cream/10 w-full max-w-[280px]">
             <p className="text-xs font-sans uppercase tracking-widest text-cream/60">Dear,</p>
             <p className="font-[family-name:var(--font-midnight-study)] text-2xl text-cream">Guest Name</p>
          </div>
        </div>

        {/* 4. BUTTON: Playful style */}
        <button
          onClick={handleOpen}
          className="mt-8 relative z-50 flex items-center gap-2 px-8 py-3 bg-cream text-burgundy rounded-full hover:bg-cream/90 transition-transform hover:scale-105 duration-300 font-[family-name:var(--font-midnight-study)] text-xl cursor-pointer shadow-lg active:scale-95 border-2 border-burgundy/20"
        >
          <MailOpen size={20} />
          Open Invitation
        </button>
      </div>
    </section>
  );
}
