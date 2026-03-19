import { MailOpen } from 'lucide-react';

export default function CoverSection({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] px-6 py-12 text-center overflow-hidden">
      {/* Subtle decorative border or element could go here later */}
      <div className="absolute inset-0 border-[16px] border-peach/20 pointer-events-none m-4 rounded-xl"></div>

      <div className="z-10 flex flex-col items-center max-w-md mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-olive mb-6">The Wedding Of</p>
        
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-4 leading-tight">
          Romeo <br /> <span className="text-4xl md:text-5xl italic text-peach">&amp;</span> <br /> Juliet
        </h1>
        
        <p className="text-sm tracking-widest uppercase text-olive mt-4 mb-12">
          24 . 10 . 2026
        </p>

        <div className="mt-8 mb-12">
          <p className="text-sm text-burgundy/70 mb-2">Dear,</p>
          <p className="font-serif text-2xl">Guest Name</p>
        </div>

        <button
          onClick={onOpen}
          className="flex items-center gap-2 px-8 py-4 bg-burgundy text-cream rounded-full hover:bg-burgundy/90 transition-colors duration-300 uppercase tracking-widest text-xs cursor-pointer"
        >
          <MailOpen size={16} />
          Open Invitation
        </button>
      </div>
    </section>
  );
}
