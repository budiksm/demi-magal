import Doodle from './Doodle';

export default function OpeningSection() {
  return (
    <section className="py-24 px-6 text-center relative bg-cream min-h-[80vh] flex flex-col items-center justify-center">
      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Floral Arch (Top) */}
      <div className="absolute top-0 left-0 w-full flex justify-center pt-10">
        <Doodle type="orchid" className="w-24 h-24 text-burgundy/80 -rotate-12" />
        <Doodle type="baby-breath" className="w-20 h-20 text-burgundy/60 rotate-12" />
        <Doodle type="tulip" className="w-24 h-24 text-burgundy/80" />
        <Doodle type="baby-breath" className="w-20 h-20 text-burgundy/60 -rotate-12" />
        <Doodle type="orchid" className="w-24 h-24 text-burgundy/80 rotate-12" />
      </div>

      {/* Floral Curve (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-10">
        <Doodle type="orchid" className="w-24 h-24 text-burgundy/80 rotate-180 -rotate-12" />
        <Doodle type="baby-breath" className="w-20 h-20 text-burgundy/60 rotate-180 rotate-12" />
        <Doodle type="tulip" className="w-24 h-24 text-burgundy/80 rotate-180" />
        <Doodle type="baby-breath" className="w-20 h-20 text-burgundy/60 rotate-180 -rotate-12" />
        <Doodle type="orchid" className="w-24 h-24 text-burgundy/80 rotate-180 rotate-12" />
      </div>

      {/* Doodles outside the oval */}
      <Doodle type="calla-lily" className="absolute top-20 left-10 w-16 h-16 text-burgundy/20" />
      <Doodle type="tulip" className="absolute top-20 right-10 w-16 h-16 text-burgundy/20" />
      <Doodle type="baby-breath" className="absolute bottom-20 left-10 w-16 h-16 text-burgundy/20" />
      <Doodle type="orchid" className="absolute bottom-20 right-10 w-16 h-16 text-burgundy/20" />

      {/* Text Block */}
      <div className="z-10 flex flex-col items-center gap-4 border-2 border-burgundy/10 p-10 rounded-full w-full max-w-lg">
        <p className="font-[family-name:var(--font-mansalva)] text-lg text-olive">The Wedding Celebration of</p>
        <h2 className="font-[family-name:var(--font-just-me)] text-6xl text-burgundy">Budi & Tsalsa</h2>
        <Doodle type="line" className="w-32 h-4 text-olive opacity-85" />
        <p className="font-[family-name:var(--font-mansalva)] text-xl text-olive">August 2026</p>
      </div>
    </section>
  );
}
