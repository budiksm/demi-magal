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
        className="relative w-full max-w-[420px] mx-auto"
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
        <svg viewBox="0 0 420 580" xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <path d="M 30 20 Q 47 5,64 20 Q 81 5,98 20 Q 115 5,132 20 Q 149 5,166 20 Q 183 5,200 20 Q 217 5,234 20 Q 251 5,268 20 Q 285 5,302 20 Q 319 5,336 20 Q 353 5,370 20 Q 387 8,400 20 Q 412 30,412 47 Q 425 64,412 81 Q 425 98,412 115 Q 425 132,412 149 Q 425 166,412 183 Q 425 200,412 217 Q 425 234,412 251 Q 425 268,412 285 Q 425 302,412 319 Q 425 336,412 353 Q 425 370,412 387 Q 425 404,412 421 Q 425 438,412 455 Q 425 472,412 489 Q 412 510,395 522 Q 378 535,361 522 Q 344 535,327 522 Q 310 535,293 522 Q 276 535,259 522 Q 242 535,225 522 Q 208 535,191 522 Q 174 535,157 522 Q 140 535,123 522 Q 106 535,89 522 Q 72 535,55 522 Q 38 535,22 522 Q 8 510,8 493 Q -5 476,8 459 Q -5 442,8 425 Q -5 408,8 391 Q -5 374,8 357 Q -5 340,8 323 Q -5 306,8 289 Q -5 272,8 255 Q -5 238,8 221 Q -5 204,8 187 Q -5 170,8 153 Q -5 136,8 119 Q -5 102,8 85 Q -5 68,8 51 Q 12 8,30 20 Z"
            fill="rgba(250, 248, 245, 0.97)" stroke="#737A59" strokeWidth="1.5" />
        </svg>

        {/* Konten */}
        <div className="relative z-20 px-12 py-16">
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
