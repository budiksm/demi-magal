import Image from 'next/image';

export default function CoupleProfile() {
  return (
    <section className="py-24 px-6 bg-peach/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">The Happy Couple</h2>
          <div className="w-12 h-[1px] bg-olive mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-8">
          {/* Groom */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="relative w-64 h-80 mb-8 rounded-t-full overflow-hidden border-4 border-cream shadow-lg">
              <Image
                src="https://picsum.photos/seed/groom/400/500"
                alt="Groom"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-serif text-3xl mb-2">Romeo Montague</h3>
            <p className="text-sm text-olive mb-4">The Son of</p>
            <p className="text-burgundy/80">Mr. Lord Montague <br /> &amp; Mrs. Lady Montague</p>
          </div>

          {/* Divider */}
          <div className="font-serif text-6xl text-peach italic md:pb-32">&amp;</div>

          {/* Bride */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="relative w-64 h-80 mb-8 rounded-t-full overflow-hidden border-4 border-cream shadow-lg">
              <Image
                src="https://picsum.photos/seed/bride/400/500"
                alt="Bride"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-serif text-3xl mb-2">Juliet Capulet</h3>
            <p className="text-sm text-olive mb-4">The Daughter of</p>
            <p className="text-burgundy/80">Mr. Lord Capulet <br /> &amp; Mrs. Lady Capulet</p>
          </div>
        </div>
      </div>
    </section>
  );
}
