'use client';

import { motion } from 'motion/react';
import { MailOpen } from 'lucide-react';
import Image from 'next/image';
import Doodle from './Doodle';

const floatVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' }
  })
};

const doodleFloat = (delay: number) => ({
  animate: { y: [0, -10, 0], rotate: [0, 3, 0] },
  transition: { duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }
});

export default function CoverSection({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] px-6 py-6 text-center overflow-hidden bg-burgundy text-cream">

      {/* Background doodles dengan parallax float */}
      <motion.div className="absolute top-10 left-10 pointer-events-none"
        animate={{ y: [0,-12,0], rotate: [0,5,0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <Doodle type="baby-breath" className="w-16 h-16 text-cream/20" />
      </motion.div>
      <motion.div className="absolute top-1/4 right-16 pointer-events-none"
        animate={{ y: [0,10,0], rotate: [0,-4,0] }} transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' }}>
        <Doodle type="flower" className="w-12 h-12 text-cream/15" />
      </motion.div>
      <motion.div className="absolute bottom-1/4 left-16 pointer-events-none"
        animate={{ y: [0,-8,0], rotate: [0,6,0] }} transition={{ duration: 7, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}>
        <Doodle type="tulip" className="w-16 h-16 text-olive/25" />
      </motion.div>
      <motion.div className="absolute bottom-10 right-10 pointer-events-none"
        animate={{ y: [0,12,0], rotate: [0,-5,0] }} transition={{ duration: 5.5, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
        <Doodle type="baby-breath" className="w-20 h-20 text-cream/20" />
      </motion.div>

      <div className="z-10 flex flex-col items-center max-w-md mx-auto w-full relative">

        {/* Foto dengan entrance animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative w-56 h-64 mb-4 bg-cream p-2 shadow-md rounded-lg border border-cream/60 [box-shadow:inset_0_0_4px_rgba(0,0,0,0.1)]"
        >
          <div className="relative w-full h-full bg-gray-200 overflow-hidden rounded-md">
            <Image
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWh3a3NxOTRjeXd1aXJ4Zmw2aHpwcWkxNmlkaWhpZzk0NXF2MjNmcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Kb4WlwEM9PiB8I7Yhc/giphy.gif"
              alt="Couple Photobox" fill className="object-cover"
              referrerPolicy="no-referrer" unoptimized
            />
            <div className="absolute inset-0 bg-burgundy/10 z-10" />
          </div>
          <p className="absolute -left-8 top-1/2 -rotate-10 text-olive font-[family-name:var(--font-beth-ellen)] text-2xl opacity-90 leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">so<br/>real</p>
          <p className="absolute -right-8 top-1/2 rotate-8 text-white font-[family-name:var(--font-beth-ellen)] text-2xl opacity-90 leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]">getting<br/>married</p>

          {/* Ornamen foto — spin masuk */}
          <motion.div initial={{ opacity: 0, rotate: -180, scale: 0 }} animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'backOut' }} className="absolute -top-6 -right-6">
            <Doodle type="star" className="w-4 h-4 text-cream/60" />
          </motion.div>
          <motion.div initial={{ opacity: 0, rotate: 180, scale: 0 }} animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0, ease: 'backOut' }} className="absolute -bottom-4 -left-4">
            <Doodle type="flower" className="w-4 h-4 text-cream/60" />
          </motion.div>

          {/* Bunga besar — float */}
          <motion.div className="absolute -bottom-12 -right-14 w-[160px] h-[160px] pointer-events-none z-20"
            animate={{ y: [0,-8,0], rotate: [0,4,0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <Doodle type="calla-lily" className="w-full h-full text-cream/40" />
          </motion.div>
          <motion.div className="absolute -top-10 -left-10 w-[100px] h-[100px] pointer-events-none z-20"
            animate={{ y: [0,8,0], rotate: [0,-5,0] }} transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' }}>
            <Doodle type="orchid" className="w-full h-full text-olive" />
          </motion.div>
        </motion.div>

        {/* Teks stagger */}
        <div className="flex flex-col items-center gap-1">
          <motion.h1
            custom={0} variants={floatVariants} initial="hidden" animate="visible"
            className="font-[family-name:var(--font-tnanti)] text-6xl leading-tight tracking-tight text-cream"
          >
            Tsalsa & Budi
          </motion.h1>
          <motion.div custom={1} variants={floatVariants} initial="hidden" animate="visible">
            <Doodle type="line" className="w-32 h-4 text-olive opacity-85" />
          </motion.div>
          <motion.p custom={2} variants={floatVariants} initial="hidden" animate="visible"
            className="font-[family-name:var(--font-midnight-study)] text-lg text-cream/70 mt-1">
            Sekitar Agustus
          </motion.p>
          <motion.div custom={3} variants={floatVariants} initial="hidden" animate="visible"
            className="mt-4 bg-cream/10 p-4 rounded-2xl shadow-md border border-cream/10 w-full max-w-[280px]">
            <p className="text-xs font-sans uppercase tracking-widest text-cream/60">Dear,</p>
            <p className="font-[family-name:var(--font-midnight-study)] text-2xl text-cream">Guest Name</p>
          </motion.div>
        </div>

        {/* Button pulse */}
        <motion.button
          custom={4} variants={floatVariants} initial="hidden" animate="visible"
          whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="mt-8 relative z-50 flex items-center gap-2 px-8 py-3 bg-cream text-burgundy rounded-full font-[family-name:var(--font-midnight-study)] text-xl cursor-pointer shadow-lg border-2 border-burgundy/20"
        >
          <motion.span animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}>
            <MailOpen size={20} />
          </motion.span>
          Open Invitation
        </motion.button>
      </div>
    </section>
  );
}
