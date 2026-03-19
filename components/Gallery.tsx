import Image from 'next/image';
import Doodle from './Doodle';

export default function Gallery() {
  const images = [
    'https://picsum.photos/seed/wed1/600/800',
    'https://picsum.photos/seed/wed2/800/600',
    'https://picsum.photos/seed/wed3/600/800',
    'https://picsum.photos/seed/wed4/800/600',
    'https://picsum.photos/seed/wed5/600/600',
    'https://picsum.photos/seed/wed6/600/800',
  ];

  return (
    <section className="py-20 px-6 relative">
      <Doodle type="arrow" className="absolute top-16 left-4 w-8 h-8 text-peach/60 -rotate-12" />
      <div className="text-center mb-12">
        <h2 className="font-serif text-5xl md:text-6xl mb-2">Our Moments</h2>
        <Doodle type="line" className="w-24 h-3 text-olive/40 mx-auto" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg border-4 border-white shadow-sm ${
              index % 3 === 0 ? 'rotate-2' : index % 2 === 0 ? '-rotate-2' : 'rotate-1'
            } hover:rotate-0 transition-transform duration-300 ${
              index === 1 || index === 4 ? 'col-span-2 aspect-video' : 'aspect-square'
            }`}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
