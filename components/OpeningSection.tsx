import { motion } from 'motion/react';
import Image from 'next/image';
import Doodle from './Doodle';

export default function OpeningSection() {
  return (
    <section 
      className="py-24 px-6 text-center relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/backgrounds/bg-floral.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(122, 34, 34, 0.55)",
        backgroundBlendMode: "multiply"
      }}
    >
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
        className="relative z-10 flex items-center justify-center my-16 w-[320px] md:w-[500px]"
      >
        {/* 1. Inner cream shape (Background for text) */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-[80%] h-[80%] rounded-full bg-[#FDF6F0]" />
        </div>

        {/* 2. Frame outline */}
        <Image
          src="/doodles/Oval-FIX.svg"
          alt="Frame"
          width={736}
          height={950}
          className="relative z-10 w-full h-auto drop-shadow-sm opacity-80"
          priority
        />
        
        {/* 3. Text Content inside Oval */}
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
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-5 px-8 py-12 md:px-10 md:py-16 text-center z-20"
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

