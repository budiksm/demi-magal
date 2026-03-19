import { MailOpen } from 'lucide-react';
import Image from 'next/image';
import Doodle from './Doodle';

export default function CoverSection({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] px-6 py-12 text-center overflow-x-hidden overflow-y-auto bg-cream">
      {/* Doodle Decorations */}
      <Doodle type="star" className="absolute top-20 left-10 md:left-32 w-8 h-8 text-peach animate-float pointer-events-none" />
      <Doodle type="heart" className="absolute top-40 right-10 md:right-32 w-6 h-6 text-burgundy/40 animate-float-reverse pointer-events-none" />
      <Doodle type="flower" className="absolute bottom-32 left-12 md:left-40 w-10 h-10 text-olive/40 animate-float pointer-events-none" />
      <Doodle type="star" className="absolute bottom-20 right-16 md:right-48 w-5 h-5 text-peach animate-float-reverse pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center max-w-md mx-auto w-full relative">
        
        {/* Playful Photobox / GIF placeholder */}
        <div className="relative w-48 h-64 md:w-56 md:h-72 mb-8 rotate-3 animate-float bg-white p-3 pb-12 shadow-xl rounded-sm border border-gray-100 pointer-events-none">
           <div className="relative w-full h-full bg-gray-200 overflow-hidden">
             {/* Using a placeholder GIF */}
             <Image
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZ1OHB1aW1sN215cW11NnV4aG5wNnZ4bW11aG11bW11aG11bW11aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKoWXm3okO1kgHC/giphy.gif"
                alt="Couple Photobox"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                unoptimized
             />
           </div>
           <Doodle type="heart" className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 text-burgundy" />
        </div>

        <p className="font-serif text-2xl text-olive mb-2">The Wedding Of</p>
        
        <h1 className="font-serif text-6xl md:text-7xl mb-2 leading-tight relative">
          Romeo 
          <span className="inline-block mx-2 text-peach text-5xl">&amp;</span> 
          Juliet
          <Doodle type="line" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-4 text-peach/50 pointer-events-none" />
        </h1>
        
        <p className="font-serif text-2xl text-olive mt-6 mb-10">
          24 . 10 . 2026
        </p>

        <div className="mt-4 mb-10 relative pointer-events-none">
          <Doodle type="arrow" className="absolute -top-6 -left-8 w-8 h-8 text-olive/50 -rotate-45" />
          <p className="text-sm text-burgundy/70 mb-1 font-sans">Dear,</p>
          <p className="font-serif text-3xl bg-peach/20 px-6 py-2 rounded-lg inline-block transform -rotate-1">Guest Name</p>
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
