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

        {/* CSS scalloped border — fluid, ikuti tinggi konten */}
        <div className="absolute inset-0 z-10 pointer-events-none rounded-[2rem]"
          style={{
            background: 'rgba(250, 248, 245, 0.97)',
            border: '2px solid #737A59',
            borderRadius: '2rem',
            maskImage: 'none',
          }}
        />
        {/* Scalloped top edge */}
        <svg className="absolute top-0 left-0 w-full z-10 pointer-events-none" style={{ height: '20px', marginTop: '-1px' }}
          viewBox="0 0 420 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20 Q15 5,30 20 Q45 5,60 20 Q75 5,90 20 Q105 5,120 20 Q135 5,150 20 Q165 5,180 20 Q195 5,210 20 Q225 5,240 20 Q255 5,270 20 Q285 5,300 20 Q315 5,330 20 Q345 5,360 20 Q375 5,390 20 Q405 5,420 20"
            fill="rgba(250,248,245,0.97)" stroke="#737A59" strokeWidth="1.5" />
        </svg>
        {/* Scalloped bottom edge */}
        <svg className="absolute bottom-0 left-0 w-full z-10 pointer-events-none" style={{ height: '20px', marginBottom: '-1px' }}
          viewBox="0 0 420 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q15 15,30 0 Q45 15,60 0 Q75 15,90 0 Q105 15,120 0 Q135 15,150 0 Q165 15,180 0 Q195 15,210 0 Q225 15,240 0 Q255 15,270 0 Q285 15,300 0 Q315 15,330 0 Q345 15,360 0 Q375 15,390 0 Q405 15,420 0"
            fill="rgba(250,248,245,0.97)" stroke="#737A59" strokeWidth="1.5" />
        </svg>
        {/* Scalloped left edge */}
        <svg className="absolute top-0 left-0 h-full z-10 pointer-events-none" style={{ width: '20px', marginLeft: '-1px' }}
          viewBox="0 0 20 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 Q5 15,20 30 Q5 45,20 60 Q5 75,20 90 Q5 105,20 120 Q5 135,20 150 Q5 165,20 180 Q5 195,20 210 Q5 225,20 240 Q5 255,20 270 Q5 285,20 300 Q5 315,20 330 Q5 345,20 360 Q5 375,20 390 Q5 405,20 420 Q5 435,20 450 Q5 465,20 480 Q5 495,20 510 Q5 525,20 540 Q5 555,20 570 Q5 585,20 600"
            fill="rgba(250,248,245,0.97)" stroke="#737A59" strokeWidth="1.5" />
        </svg>
        {/* Scalloped right edge */}
        <svg className="absolute top-0 right-0 h-full z-10 pointer-events-none" style={{ width: '20px', marginRight: '-1px' }}
          viewBox="0 0 20 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q15 15,0 30 Q15 45,0 60 Q15 75,0 90 Q15 105,0 120 Q15 135,0 150 Q15 165,0 180 Q15 195,0 210 Q15 225,0 240 Q15 255,0 270 Q15 285,0 300 Q15 315,0 330 Q15 345,0 360 Q15 375,0 390 Q15 405,0 420 Q15 435,0 450 Q15 465,0 480 Q15 495,0 510 Q15 525,0 540 Q15 555,0 570 Q15 585,0 600"
            fill="rgba(250,248,245,0.97)" stroke="#737A59" strokeWidth="1.5" />
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
