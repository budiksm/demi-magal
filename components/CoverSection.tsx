import { MailOpen } from 'lucide-react';
import Image from 'next/image';
import Doodle from './Doodle';

export default function CoverSection({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] px-6 py-12 text-center overflow-x-hidden overflow-y-auto bg-cream">
      {/* Background Accents */}
      <Doodle 
        type="baby-breath" 
        className="absolute top-10 left-10 w-24 h-24 text-olive/30 animate-pulse-soft pointer-events-none" 
      />
      <Doodle 
        type="baby-breath" 
        className="absolute bottom-20 right-10 w-32 h-32 text-peach/30 animate-pulse-soft pointer-events-none" 
      />
      
      <div className="z-10 flex flex-col items-center max-w-md mx-auto w-full relative">
        
        {/* Playful Photobox */}
        <div className="relative w-48 h-56 md:w-56 md:h-64 mb-8 rotate-3 animate-float bg-white p-3 pb-12 shadow-xl rounded-sm border border-gray-100">
           <div className="relative w-full h-full bg-gray-200 overflow-hidden">
             <Image
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZ1OHB1aW1sN215cW11NnV4aG5wNnZ4bW11aG11bW11aG11bW11aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKoWXm3okO1kgHC/giphy.gif"
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
             className="absolute -bottom-10 -right-12 w-[140px] h-[140px] text-burgundy pointer-events-none z-20" 
           />
           <Doodle type="heart" className="absolute bottom-4 left-4 w-6 h-6 text-burgundy/20" />
        </div>

        <p className="font-serif text-2xl text-olive mb-1">The Wedding Of</p>
        
        <div className="relative flex items-center justify-center mb-1">
          {/* Title Decoration: Orchid */}
          <Doodle 
            type="orchid" 
            className="w-12 h-12 text-olive animate-float-slow mr-4" 
          />
          
          <h1 className="font-serif text-6xl md:text-7xl leading-tight relative">
            Romeo 
            <span className="inline-block mx-2 text-peach text-5xl">&amp;</span> 
            Juliet
            <Doodle type="line" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-4 text-peach/50 pointer-events-none" />
          </h1>

          {/* Title Decoration: Tulip */}
          <Doodle 
            type="tulip" 
            className="w-12 h-12 text-peach animate-float-slow ml-4" 
          />
        </div>
        
        <p className="font-serif text-2xl text-olive mt-2 mb-6">
          24 . 10 . 2026
        </p>

        <div className="mt-2 mb-10 relative">
          <Doodle type="arrow" className="absolute -top-6 -left-8 w-8 h-8 text-olive/50 -rotate-45" />
          <p className="text-sm text-burgundy/70 mb-1 font-sans">Dear,</p>
          <div className="relative inline-block">
            <p className="font-serif text-3xl bg-peach/20 px-6 py-2 rounded-lg transform -rotate-1">Guest Name</p>
            {/* Small floral accent near guest name */}
            <Doodle 
              type="flower" 
              className="absolute -top-2 -right-4 w-6 h-6 text-olive/40" 
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
