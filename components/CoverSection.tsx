import { MailOpen } from 'lucide-react';
import Image from 'next/image';
import Doodle from './Doodle';

export default function CoverSection({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] px-6 py-6 text-center overflow-hidden bg-burgundy text-cream">
      
      {/* 1. BACKGROUND PATTERN: Scattered florals */}
      <Doodle type="baby-breath" className="absolute top-10 left-10 w-16 h-16 text-cream/20 animate-pulse-soft pointer-events-none" />
      <Doodle type="flower" className="absolute top-1/4 right-20 w-12 h-12 text-soft-pink/20 pointer-events-none" />
      <Doodle type="tulip" className="absolute bottom-1/4 left-20 w-16 h-16 text-olive/20 pointer-events-none" />
      <Doodle type="baby-breath" className="absolute bottom-10 right-10 w-20 h-20 text-cream/20 animate-pulse-soft pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center max-w-md mx-auto w-full relative">
        
        {/* 2. MAIN LAYOUT: Polaroid Photobox */}
        <div className="relative w-56 h-64 mb-8 -rotate-2 animate-float bg-cream p-4 pb-16 shadow-2xl rounded-sm border border-cream/20">
           <div className="relative w-full h-full bg-gray-200 overflow-hidden shadow-inner">
             <Image
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWh3a3NxOTRjeXd1aXJ4Zmw2aHpwcWkxNmlkaWhpZzk0NXF2MjNmcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Kb4WlwEM9PiB8I7Yhc/giphy.gif"
                alt="Couple Photobox"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                unoptimized
             />
           </div>
           
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
          <p className="font-[family-name:var(--font-just-me)] text-2xl text-cream/80">The Wedding Of</p>
          
          <h1 className="font-[family-name:var(--font-just-me)] text-7xl leading-tight relative">
            Budi & Tsalsa
          </h1>

          <p className="font-[family-name:var(--font-just-me)] text-3xl text-cream/90 mt-2">
            Pokonya Sabtu atau Minggu
          </p>

          <div className="mt-4 relative">
            {/* MICRO DOODLES: Near text */}
            <Doodle type="baby-breath" className="absolute -top-4 -left-6 w-6 h-6 text-cream/40" />
            <p className="text-sm text-cream/60 font-sans tracking-widest uppercase">Jangan lupa, Magal</p>
            <p className="font-[family-name:var(--font-just-me)] text-4xl bg-cream/10 px-6 py-2 rounded-lg transform -rotate-1 mt-2">Guest Name</p>
            <Doodle type="flower" className="absolute -bottom-2 -right-4 w-6 h-6 text-soft-pink/50" />
          </div>
        </div>

        {/* 4. BUTTON: Playful style */}
        <button
          onClick={onOpen}
          className="mt-8 relative z-50 flex items-center gap-2 px-8 py-3 bg-cream text-burgundy rounded-full hover:bg-cream/90 transition-transform hover:scale-105 duration-300 font-[family-name:var(--font-just-me)] text-2xl cursor-pointer shadow-lg active:scale-95 border-2 border-burgundy/20"
        >
          <MailOpen size={20} />
          Open Invitation
        </button>
      </div>
    </section>
  );
}
