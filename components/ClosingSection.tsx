'use client';

import { motion } from 'motion/react';
import Doodle from './Doodle';

const words = 'Doa dan kehadiran kalian adalah hadiah terindah yang bisa kami terima. Sampai jumpa di hari yang paling kami tunggu-tunggu.'.split(' ');

export default function ClosingSection() {
  return (
    <section className="py-20 px-6 text-center relative overflow-hidden">
      {/* Float ornaments */}
      {[
        { type: 'baby-breath' as const, cls: 'top-6 left-2 w-16 h-16 text-olive/15 -rotate-12', dy: -10, delay: 0 },
        { type: 'baby-breath' as const, cls: 'top-6 right-2 w-16 h-16 text-olive/15 rotate-12 scale-x-[-1]', dy: 10, delay: 1 },
        { type: 'tulip' as const, cls: 'bottom-10 left-2 w-14 h-14 text-peach/20', dy: -8, delay: 0.5 },
        { type: 'calla-lily' as const, cls: 'bottom-10 right-2 w-14 h-14 text-olive/15 scale-x-[-1]', dy: 8, delay: 1.5 },
      ].map((d, i) => (
        <motion.div key={i} className={`absolute pointer-events-none ${d.cls}`}
          animate={{ y: [0, d.dy, 0] }} transition={{ duration: 5 + i, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}>
          <Doodle type={d.type} className="w-full h-full" />
        </motion.div>
      ))}

      {/* Twinkling stars */}
      {['top-20 left-10 w-3 h-3 text-peach/35', 'top-16 right-10 w-2 h-2 text-olive/25', 'bottom-24 right-8 w-3 h-3 text-peach/30'].map((cls, i) => (
        <motion.div key={i} className={`absolute pointer-events-none ${cls}`}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}>
          <Doodle type="star" className="w-full h-full" />
        </motion.div>
      ))}

      <div className="max-w-md mx-auto relative z-10">
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-10"
        >
          <Doodle type="line" className="flex-1 h-3 text-olive/30" />
          <Doodle type="flower" className="w-6 h-6 text-peach/50 shrink-0" />
          <Doodle type="line" className="flex-1 h-3 text-olive/30 scale-x-[-1]" />
        </motion.div>

        {/* Word-by-word teks */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.1, staggerChildren: 0.04 } } }}
          className="mb-3"
        >
          <span className="font-[family-name:var(--font-smoky)] text-3xl leading-relaxed text-burgundy/80">
            &quot;{' '}
            {words.map((word, i) => (
              <motion.span key={i}
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
                className="inline-block mr-1"
              >{word}</motion.span>
            ))}
            &quot;
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="font-[family-name:var(--font-mansalva)] text-base text-olive/70 mt-6 mb-2"
        >Dengan kasih,</motion.p>

        {/* Nama dengan underline animasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative inline-block"
        >
          <h2 className="font-[family-name:var(--font-tnanti)] text-5xl text-burgundy">Tsalsa & Budi</h2>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-peach/50 rounded-full"
          />
        </motion.div>

        {/* Pulsing heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8, ease: 'backOut' }}
          className="mt-10"
        >
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <Doodle type="heart" className="w-8 h-8 text-burgundy/30 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
