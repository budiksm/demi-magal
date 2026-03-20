import { motion } from 'motion/react';
import Doodle from './Doodle';
import OvalFrame from '@/public/decorations/Oval-FIX.svg';

export default function OpeningSection() {
  return (
    <section 
      className="py-24 px-6 text-center relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
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
        className="relative z-10 flex items-center justify-center my-16 w-[85%] max-w-[440px]"
      >
        <div className="oval-container animate-float-subtle">
          {/* 1. Inner cream shape (Background for text) */}
          <div className="oval-fill" />

          {/* 2. Frame outline */}
          <OvalFrame 
            className="oval-frame drop-shadow-sm opacity-80" 
            preserveAspectRatio="xMidYMid meet" 
            viewBox="0 0 736 950"
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
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 p-8"
          >
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="font-[family-name:var(--font-beth-ellen)] text-sm md:text-base text-[#5A5A40] mb-2"
          >
            The Wedding of
          </motion.p>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="names"
          >
            <span className="name top">Budi</span>
            <span className="and">&</span>
            <span className="name bottom">Tsalsa</span>
          </motion.div>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="font-[family-name:var(--font-beth-ellen)] text-sm md:text-base text-[#5A5A40] mt-2"
          >
            August 2026
          </motion.p>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

