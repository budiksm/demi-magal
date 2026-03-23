'use client';

import { motion } from 'motion/react';
import Doodle from './Doodle';

export default function QuranSection() {
  return (
    <section className="relative py-16 px-6 flex items-center justify-center overflow-hidden bg-cream min-h-screen">

      {/* Background scattered doodles (luar frame) */}
      <Doodle type="baby-breath" className="absolute top-6 left-2 w-20 h-20 text-olive/15 -rotate-12 pointer-events-none" />
      <Doodle type="tulip" className="absolute top-10 right-4 w-16 h-16 text-peach/30 rotate-12 pointer-events-none" />
      <Doodle type="orchid" className="absolute bottom-8 left-4 w-20 h-20 text-olive/15 rotate-6 pointer-events-none" />
      <Doodle type="baby-breath" className="absolute bottom-4 right-2 w-16 h-16 text-peach/20 -rotate-6 pointer-events-none" />

      {/* Bintang-bintang tersebar */}
      <Doodle type="star" className="absolute top-20 left-10 w-3 h-3 text-olive/25 pointer-events-none" />
      <Doodle type="star" className="absolute top-1/3 right-8 w-2 h-2 text-peach/40 pointer-events-none" />
      <Doodle type="star" className="absolute bottom-24 left-16 w-2 h-2 text-olive/30 pointer-events-none" />
      <Doodle type="star" className="absolute top-1/2 left-6 w-3 h-3 text-peach/25 pointer-events-none" />

      {/* Frame scalloped utama */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative w-full max-w-[360px] mx-auto"
      >
        {/* SVG scalloped frame border */}
        <svg
          viewBox="0 0 360 480"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 30 20
              Q 45 5, 60 20
              Q 75 5, 90 20
              Q 105 5, 120 20
              Q 135 5, 150 20
              Q 165 5, 180 20
              Q 195 5, 210 20
              Q 225 5, 240 20
              Q 255 5, 270 20
              Q 285 5, 300 20
              Q 315 5, 330 20
              Q 345 10, 345 30
              Q 358 45, 345 60
              Q 358 75, 345 90
              Q 358 105, 345 120
              Q 358 135, 345 150
              Q 358 165, 345 180
              Q 358 195, 345 210
              Q 358 225, 345 240
              Q 358 255, 345 270
              Q 358 285, 345 300
              Q 358 315, 345 330
              Q 358 345, 345 360
              Q 358 375, 345 390
              Q 358 405, 345 420
              Q 345 445, 330 455
              Q 315 470, 300 455
              Q 285 470, 270 455
              Q 255 470, 240 455
              Q 225 470, 210 455
              Q 195 470, 180 455
              Q 165 470, 150 455
              Q 135 470, 120 455
              Q 105 470, 90 455
              Q 75 470, 60 455
              Q 45 470, 30 455
              Q 12 445, 12 430
              Q 2 415, 12 400
              Q 2 385, 12 370
              Q 2 355, 12 340
              Q 2 325, 12 310
              Q 2 295, 12 280
              Q 2 265, 12 250
              Q 2 235, 12 220
              Q 2 205, 12 190
              Q 2 175, 12 160
              Q 2 145, 12 130
              Q 2 115, 12 100
              Q 2 85, 12 70
              Q 2 55, 12 40
              Q 15 8, 30 20
              Z
            "
            fill="rgba(250, 248, 245, 0.97)"
            stroke="#737A59"
            strokeWidth="2"
          />
        </svg>

        {/* Konten dalam frame */}
        <div className="relative z-20 px-10 py-12">

          {/* Ornamen bunga pojok kiri atas (dalam frame) */}
          <div className="absolute -top-4 -left-4 z-30 pointer-events-none">
            <Doodle type="orchid" className="w-24 h-24 text-olive/60" />
          </div>

          {/* Ornamen bunga pojok kanan bawah (dalam frame) — mirip referensi */}
          <div className="absolute -bottom-6 -right-4 z-30 pointer-events-none">
            <Doodle type="calla-lily" className="w-28 h-28 text-burgundy/70" />
          </div>

          {/* Ornamen bunga pojok kiri bawah */}
          <div className="absolute -bottom-4 -left-2 z-30 pointer-events-none">
            <Doodle type="tulip" className="w-16 h-16 text-olive/40 -rotate-12" />
          </div>

          {/* Ornamen pojok kanan atas kecil */}
          <div className="absolute -top-2 -right-2 z-30 pointer-events-none">
            <Doodle type="baby-breath" className="w-14 h-14 text-peach/60 rotate-12" />
          </div>

          {/* Bintang-bintang di dalam frame */}
          <Doodle type="star" className="absolute top-6 right-10 w-3 h-3 text-olive/40 pointer-events-none" />
          <Doodle type="star" className="absolute bottom-16 left-10 w-2 h-2 text-peach/50 pointer-events-none" />
          <Doodle type="star" className="absolute top-1/2 right-6 w-2 h-2 text-olive/30 pointer-events-none" />

          {/* Teks ayat */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.3, staggerChildren: 0.18 },
              },
            }}
            className="text-center mt-4"
          >
            {/* Tanda kutip pembuka */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="font-[family-name:var(--font-smoky)] text-7xl text-olive/50 leading-none mb-1 -mt-2"
            >
              "
            </motion.p>

            {/* Baris ayat */}
            {[
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
            ].map((line, i) => (
              <motion.p
                key={i}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                className="font-[family-name:var(--font-smoky)] text-xl text-burgundy leading-relaxed"
              >
                {line}
              </motion.p>
            ))}

            {/* Sumber */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="font-[family-name:var(--font-smoky)] text-base text-olive mt-4"
            >
              (QS. Ar-Rum : 21)
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
