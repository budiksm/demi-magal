import { motion } from 'motion/react';
import Doodle from './Doodle';
import Oval from './Oval';

export default function OpeningSection() {
  return (
    <section className="py-24 px-6 text-center relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[url('/backgrounds/bg-floral.png')] bg-cover bg-center">
      {/* Burgundy Overlay */}
      <div className="absolute inset-0 bg-[#7A2222]/35" />

      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Floral Arch (Top) - Reduced quantity and opacity */}
      <div className="absolute top-0 left-0 w-full flex justify-center pt-12 opacity-20">
        <Doodle type="orchid" className="w-28 h-28 text-[#7A2222] -rotate-12" />
        <Doodle type="tulip" className="w-28 h-28 text-[#7A2222] rotate-12" />
      </div>

      {/* Oval Container with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center my-16"
      >
        {/* Oval outline */}
        <Oval className="w-[320px] h-[400px] md:w-[420px] md:h-[500px] text-[#7A2222] opacity-40" />
        
        {/* Text Content inside Oval */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-10"
        >
          <p className="font-[family-name:var(--font-mansalva)] text-xl text-[#5A5A40]">The Wedding of</p>
          <h2 className="font-[family-name:var(--font-just-me)] text-6xl md:text-7xl text-[#7A2222]">Budi & Tsalsa</h2>
          <Doodle type="line" className="w-24 h-3 text-[#5A5A40] opacity-60" />
          <p className="font-[family-name:var(--font-mansalva)] text-xl text-[#5A5A40]">August 2026</p>
        </motion.div>
      </motion.div>

      {/* Floral Curve (Bottom) - Reduced quantity and opacity */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-12 opacity-20">
        <Doodle type="tulip" className="w-28 h-28 text-[#7A2222] rotate-180 -rotate-12" />
        <Doodle type="orchid" className="w-28 h-28 text-[#7A2222] rotate-180 rotate-12" />
      </div>
    </section>
  );
}

