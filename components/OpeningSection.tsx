import { motion } from 'motion/react';
import Doodle from './Doodle';
import Oval from './Oval';

export default function OpeningSection() {
  return (
    <section className="py-24 px-6 text-center relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[url('/backgrounds/bg-floral.webp')] bg-cover bg-center">
      {/* Burgundy Overlay */}
      <div className="absolute inset-0 bg-[rgba(122,34,34,0.55)]" />

      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Minimalist Decorations */}
      <div className="absolute top-12 left-8 md:left-16 opacity-15 pointer-events-none">
        <Doodle type="orchid" className="w-24 h-24 md:w-32 md:h-32 text-[#FFF8F0] -rotate-12" />
      </div>
      <div className="absolute bottom-12 right-8 md:right-16 opacity-15 pointer-events-none">
        <Doodle type="tulip" className="w-24 h-24 md:w-32 md:h-32 text-[#FFF8F0] rotate-12" />
      </div>

      {/* Oval Container with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-center my-16 w-[280px] sm:w-[320px] md:w-[420px]"
      >
        {/* Oval outline */}
        <Oval className="w-full h-auto text-[#FFF8F0] opacity-90 drop-shadow-sm" />
        
        {/* Text Content inside Oval */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.15
              }
            }
          }}
          className="absolute flex flex-col items-center justify-center gap-4 md:gap-5 px-8 py-12 md:px-10 md:py-16 bg-[rgba(255,248,240,0.88)] backdrop-blur-[2px] rounded-[50%] w-[86%] h-[86%] text-center shadow-xl"
        >
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="font-[family-name:var(--font-mansalva)] text-lg md:text-xl text-[#5A5A40]"
          >
            The Wedding of
          </motion.p>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="font-[family-name:var(--font-just-me)] text-5xl sm:text-6xl md:text-7xl text-[#7A2222] leading-tight max-w-[90%]"
          >
            Budi & Tsalsa
          </motion.h2>
          <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
            <Doodle type="line" className="w-16 md:w-20 h-2 md:h-3 text-[#5A5A40] opacity-60" />
          </motion.div>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="font-[family-name:var(--font-mansalva)] text-lg md:text-xl text-[#5A5A40]"
          >
            August 2026
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

