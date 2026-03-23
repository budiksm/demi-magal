'use client';

import { motion } from 'motion/react';
import Doodle from './Doodle';

const lines = [
  'Dan diantara tanda-tanda',
  '(kebesaran)-Nya ialah Dia',
  'menciptakan pasangan-pasangan',
  'untukmu dari jenismu sendiri,',
  'agar kamu cenderung dan merasa',
  'tenteram kepadanya, dan Dia',
  'menjadikan diantaramu rasa',
  'kasih dan sayang. Sungguh,',
  'pada apa yang demikian itu',
  'benar-benar terdapat tanda-',
  'tanda (kebesaran Allah) bagi',
  'kaum yang berpikir"',
];

export default function QuranSection() {
  return (
    <section className="relative py-16 px-6 flex items-center justify-center overflow-hidden bg-cream min-h-screen">

      {/* Floating background ornaments */}
      {[
        { type: 'baby-breath' as const, cls: 'top-6 left-2 w-20 h-20 text-olive/15 -rotate-12', delay: 0, dy: -12 },
        { type: 'tulip' as const, cls: 'top-10 right-4 w-16 h-16 text-peach/30 rotate-12', delay: 1, dy: 10 },
        { type: 'orchid' as const, cls: 'bottom-8 left-4 w-20 h-20 text-olive/15 rotate-6', delay: 0.5, dy: -8 },
        { type: 'baby-breath' as const, cls: 'bottom-4 right-2 w-16 h-16 text-peach/20 -rotate-6', delay: 1.5, dy: 12 },
      ].map((d, i) => (
        <motion.div key={i} className={`absolute pointer-events-none ${d.cls}`}
          animate={{ y: [0, d.dy, 0] }} transition={{ duration: 5 + i, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}>
          <Doodle type={d.type} className="w-full h-full" />
        </motion.div>
      ))}

      {/* Bintang-bintang */}
      {[
        'absolute top-20 left-10 w-3 h-3 text-olive/25',
        'absolute top-1/3 right-8 w-2 h-2 text-peach/40',
        'absolute bottom-24 left-16 w-2 h-2 text-olive/30',
        'absolute top-1/2 left-6 w-3 h-3 text-peach/25',
      ].map((cls, i) => (
        <motion.div key={i} className={cls}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}>
          <Doodle type="star" className="w-full h-full" />
        </motion.div>
      ))}

      {/* Frame + konten */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative w-full max-w-[360px] mx-auto"
      >
        {/* Corner doodles — spin masuk */}
        {[
          { cls: 'absolute -top-7 -left-5 z-30', type: 'orchid' as const, size: 'w-20 h-20 text-olive/60', rot: -180 },
          { cls: 'absolute -bottom-7 -right-4 z-30', type: 'calla-lily' as const, size: 'w-28 h-28 text-burgundy/70', rot: 180 },
          { cls: 'absolute -bottom-5 -left-2 z-30', type: 'tulip' as const, size: 'w-16 h-16 text-olive/40 -rotate-12', rot: -90 },
          { cls: 'absolute -top-3 -right-2 z-30', type: 'baby-breath' as const, size: 'w-14 h-14 text-peach/60 rotate-12', rot: 90 },
        ].map((d, i) => (
          <motion.div key={i} className={`${d.cls} pointer-events-none`}
            initial={{ opacity: 0, rotate: d.rot, scale: 0 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: 'backOut' }}>
            <Doodle type={d.type} className={d.size} />
          </motion.div>
        ))}

        {/* SVG scalloped frame */}
        <svg viewBox="0 0 360 480" xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <path d="M 30 20 Q 45 5,60 20 Q 75 5,90 20 Q 105 5,120 20 Q 135 5,150 20 Q 165 5,180 20 Q 195 5,210 20 Q 225 5,240 20 Q 255 5,270 20 Q 285 5,300 20 Q 315 5,330 20 Q 345 10,345 30 Q 358 45,345 60 Q 358 75,345 90 Q 358 105,345 120 Q 358 135,345 150 Q 358 165,345 180 Q 358 195,345 210 Q 358 225,345 240 Q 358 255,345 270 Q 358 285,345 300 Q 358 315,345 330 Q 358 345,345 360 Q 358 375,345 390 Q 358 405,345 420 Q 345 445,330 455 Q 315 470,300 455 Q 285 470,270 455 Q 255 470,240 455 Q 225 470,210 455 Q 195 470,180 455 Q 165 470,150 455 Q 135 470,120 455 Q 105 470,90 455 Q 75 470,60 455 Q 45 470,30 455 Q 12 445,12 430 Q 2 415,12 400 Q 2 385,12 370 Q 2 355,12 340 Q 2 325,12 310 Q 2 295,12 280 Q 2 265,12 250 Q 2 235,12 220 Q 2 205,12 190 Q 2 175,12 160 Q 2 145,12 130 Q 2 115,12 100 Q 2 85,12 70 Q 2 55,12 40 Q 15 8,30 20 Z"
            fill="rgba(250, 248, 245, 0.97)" stroke="#737A59" strokeWidth="1.5" />
        </svg>

        {/* Konten */}
        <div className="relative z-20 px-10 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.06 } } }}
            className="text-center mt-4"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              className="font-[family-name:var(--font-smoky)] text-8xl text-olive/50 leading-none mb-1 -mt-2"
            >"</motion.p>

            {lines.map((line, i) => (
              <motion.p key={i}
                variants={{ hidden: { opacity: 0, x: i % 2 === 0 ? -15 : 15 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                className="font-[family-name:var(--font-smoky)] text-2xl text-burgundy leading-relaxed"
              >{line}</motion.p>
            ))}

            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="font-[family-name:var(--font-smoky)] text-lg text-olive mt-4"
            >(QS. Ar-Rum : 21)</motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
