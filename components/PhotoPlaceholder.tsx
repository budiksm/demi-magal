'use client';

import { motion } from 'motion/react';
import Doodle from './Doodle';

function PhotoFrame({ index, delay }: { index: number; delay: number }) {
  const rotations = [-2, 1.5, -1, 2.5];
  const rotate = rotations[index % rotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate - 3 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="relative bg-[#f0ede8] rounded-lg overflow-hidden shadow-sm border border-olive/10"
      style={{ aspectRatio: '3/4' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
        {/* Kamera ilustrasi */}
        <svg viewBox="0 0 60 48" className="w-12 h-10 text-olive/20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="12" width="52" height="32" rx="4" />
          <circle cx="30" cy="28" r="9" />
          <circle cx="30" cy="28" r="5" />
          <path d="M20 12 L24 4 H36 L40 12" />
          <circle cx="48" cy="18" r="2" fill="currentColor" stroke="none" />
        </svg>
        <p className="font-[family-name:var(--font-beth-ellen)] text-[10px] text-olive/30 text-center leading-relaxed">
          foto prewed<br/>segera hadir
        </p>
        {/* Ornamen kecil */}
        <Doodle type="star" className="absolute top-3 right-3 w-3 h-3 text-olive/15" />
        <Doodle type="star" className="absolute bottom-3 left-3 w-2 h-2 text-peach/20" />
      </div>

      {/* Polaroid-style bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white/40" />
    </motion.div>
  );
}

export default function PhotoPlaceholder() {
  return (
    <section className="relative py-8 px-4 overflow-hidden">

      {/* Ornamen */}
      <Doodle type="orchid" className="absolute -top-4 left-0 w-16 h-16 text-olive/10 pointer-events-none" />
      <Doodle type="tulip" className="absolute -top-4 right-0 w-14 h-14 text-peach/10 pointer-events-none scale-x-[-1]" />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-beth-ellen)] text-xs uppercase tracking-[0.25em] text-olive/50 text-center mb-6"
      >
        our moments
      </motion.p>

      {/* Grid 2x2 */}
      <div className="grid grid-cols-2 gap-3">
        {[0, 1, 2, 3].map((i) => (
          <PhotoFrame key={i} index={i} delay={i * 0.1} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-[family-name:var(--font-beth-ellen)] text-xs text-olive/30 text-center mt-4"
      >
        foto prewed menyusul ✨
      </motion.p>

    </section>
  );
}
