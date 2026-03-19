import Image from 'next/image';

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
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Gallery</h2>
        <div className="w-12 h-[1px] bg-olive mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-xl ${
              index === 1 || index === 3 ? 'col-span-2 md:col-span-1 aspect-video md:aspect-[3/4]' : 'aspect-[3/4]'
            }`}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
