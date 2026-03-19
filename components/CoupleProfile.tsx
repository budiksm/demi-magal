import Image from 'next/image';
import Doodle from './Doodle';

export default function CoupleProfile() {
  return (
    <section className="py-20 px-6 relative">
      <div className="text-center mb-16 relative">
        <h2 className="font-serif text-5xl md:text-6xl mb-2">The Happy Couple</h2>
        <Doodle type="heart" className="w-8 h-8 text-peach mx-auto" />
      </div>

      <div className="flex flex-col gap-16">
        {/* Groom */}
        <div className="flex flex-col items-center text-center relative">
          <Doodle type="arrow" className="absolute top-10 right-10 w-12 h-12 text-olive/40 rotate-45 hidden md:block" />
          <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-dashed border-peach p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/groom/400/400"
                alt="Groom"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <h3 className="font-serif text-4xl mb-1">Romeo Montague</h3>
          <p className="font-serif text-xl text-olive mb-2">The Son of</p>
          <p className="text-burgundy/80 font-sans text-sm">Mr. Lord Montague &amp; Mrs. Lady Montague</p>
        </div>

        {/* Divider */}
        <div className="flex justify-center items-center gap-4">
          <Doodle type="line" className="w-16 h-2 text-peach" />
          <span className="font-serif text-5xl text-peach">&amp;</span>
          <Doodle type="line" className="w-16 h-2 text-peach" />
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center text-center relative">
          <Doodle type="flower" className="absolute bottom-10 left-10 w-10 h-10 text-peach/60 hidden md:block" />
          <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-dashed border-olive/50 p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/bride/400/400"
                alt="Bride"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <h3 className="font-serif text-4xl mb-1">Juliet Capulet</h3>
          <p className="font-serif text-xl text-olive mb-2">The Daughter of</p>
          <p className="text-burgundy/80 font-sans text-sm">Mr. Lord Capulet &amp; Mrs. Lady Capulet</p>
        </div>
      </div>
    </section>
  );
}
