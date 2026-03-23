'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Doodle from './Doodle';
import OvalFrame from '@/public/decorations/Oval-FIX.svg';

export default function OpeningSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const doodle1Y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const doodle2Y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={ref}
      className="py-24 px-6 text-center relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/backgrounds/bg-floral.webp')",
        backgroundColor: "rgba(122, 34, 34, 0.55)",
        backgroundBlendMode: "multiply",
        y: bgY
      }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Parallax doodles */}
      <motion.div style={{ y: doodle1Y }} className="absolute top-12 left-8 md:left-16 opacity-20 pointer-events-none">
        <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
          <Doodle type="orchid" className="w-24 h-24 md:w-32 md:h-32 text-[#FFF8F0]" />
        </motion.div>
      </motion.div>
      <motion.div style={{ y: doodle2Y }} className="absolute bottom-12 right-8 md:right-16 opacity-20 pointer-events-none">
        <motion.div animate={{ rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
          <Doodle type="tulip" className="w-24 h-24 md:w-32 md:h-32 text-[#FFF8F0]" />
        </motion.div>
      </motion.div>

      {/* Oval — bounce masuk */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative z-10 flex items-center justify-center my-16 w-[85%] max-w-[440px]"
      >
        <motion.div
          className="oval-container"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="oval-fill" />
          <OvalFrame className="oval-frame drop-shadow-sm opacity-80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 490.72 657.54" />

          {/* Teks stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.5, staggerChildren: 0.2 } } }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 p-8"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="font-[family-name:var(--font-smoky)] text-3xl md:text-4xl text-[#5A5A40] mb-2"
            >The Wedding of</motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } } }}
              className="names"
            >
              <span className="name top">Tsalsa</span>
              <span className="and">&</span>
              <span className="name bottom">Budi</span>
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="font-[family-name:var(--font-smoky)] text-3xl md:text-4xl text-[#5A5A40] mt-2"
            >August 2026</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
