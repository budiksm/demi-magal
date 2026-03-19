import { MailOpen } from 'lucide-react';
import Image from 'next/image';
import Doodle from './Doodle';

export default function CoverSection({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] px-6 py-6 text-center overflow-hidden bg-cream">
      {/* Background Accents */}
      <Doodle 
        type="baby-breath" 
        className="absolute top-10 left-10 w-24 h-24 text-olive/30 animate-pulse-soft pointer-events-none" 
      />
      <Doodle 
        type="baby-breath" 
        className="absolute bottom-20 right-10 w-24 h-24 text-peach/30 animate-pulse-soft pointer-events-none" 
      />
      
      {/* Subtle Ornaments */}
      <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-olive/40 animate-pulse" />
      <div className="absolute bottom-10 left-20 w-3 h-3 rounded-full bg-peach/50 animate-pulse" />
      <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-burgundy/30" />
      
      <div className="z-10 flex flex-col items-center max-w-md mx-auto w-full relative">
        
        {/* Playful Photobox */}
        <div className="relative w-48 h-56 md:w-56 md:h-64 mb-6 rotate-3 animate-float bg-white p-3 pb-12 shadow-xl rounded-sm border border-gray-100">
           <div className="relative w-full h-full bg-gray-200 overflow-hidden">
             <Image
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWh3a3NxOTRjeXd1aXJ4Zmw2aHpwcWkxNmlkaWhpZzk0NXF2MjNmcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Kb4WlwEM9PiB8I7Yhc/giphy.gif"
                alt="Couple Photobox"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                unoptimized
             />
           </div>
           {/* Hero Element: CallaLily */}
           <Doodle 
             type="calla-lily" 
             className="absolute -bottom-12 -right-14 w-[170px] h-[170px] text-burgundy pointer-events-none z-20" 
           />
           <Doodle type="heart" className="absolute bottom-4 left-4 w-6 h-6 text-burgundy/20" />
        </div>

        <p className="font-serif text-2xl text-olive mb-0">The Wedding Of</p>
        
        <div className="relative flex items-center justify-center mb-0">
          {/* Title Decoration: Orchid */}
          <Doodle 
            type="orchid" 
            className="w-20 h-20 text-olive animate-float-slow mr-4" 
          />
          
          <h1 className="font-[family-name:var(--font-just-me)] text-7xl md:text-8xl leading-tight relative">
            Budi & Tsalsa
            <Doodle type="line" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-6 text-peach/50 pointer-events-none" />
          </h1>

          {/* Title Decoration: Tulip */}
          <Doodle 
            type="tulip" 
            className="w-20 h-20 text-peach animate-float-slow ml-4" 
          />
        </div>
        
        <p className="font-[family-name:var(--font-just-me)] text-3xl text-olive mt-1 mb-4">
          Pokonya Sabtu atau Minggu
        </p>

        <div className="mt-1 mb-6 relative">
          <Doodle type="arrow" className="absolute -top-6 -left-8 w-8 h-8 text-olive/50 -rotate-45" />
          <p className="text-sm text-burgundy/70 mb-1 font-sans">Jangan lupa, Magal</p>
          <div className="relative inline-block">
            <p className="font-[family-name:var(--font-just-me)] text-4xl bg-peach/20 px-6 py-2 rounded-lg transform -rotate-1">Guest Name</p>
            {/* Small floral accent near guest name */}
            <Doodle 
              type="flower" 
              className="absolute -top-2 -right-4 w-8 h-8 text-olive/40" 
            />
          </div>
        </div>

        <button
          onClick={onOpen}
          className="relative z-50 flex items-center gap-2 px-8 py-4 bg-burgundy text-cream rounded-full hover:bg-burgundy/90 transition-transform hover:scale-105 duration-300 font-serif text-xl cursor-pointer shadow-lg active:scale-95"
        >
          <MailOpen size={20} />
          Open Invitation
        </button>
      </div>
    </section>
  );
}
