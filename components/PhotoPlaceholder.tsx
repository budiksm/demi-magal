'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const ROTATIONS = [-1.5, 2, -2.5, 1];

function PolaroidGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 mb-5">
      {[0,1,2,3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, rotate: ROTATIONS[i] - 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: ROTATIONS[i] }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
          className="relative bg-[#e8e4dc] rounded-lg overflow-hidden shadow-sm border border-olive/10"
          style={{ aspectRatio: '3/4' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 60 48" className="w-10 h-8 text-olive/20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="12" width="52" height="32" rx="4" />
              <circle cx="30" cy="28" r="9" /><circle cx="30" cy="28" r="5" />
              <path d="M20 12 L24 4 H36 L40 12" />
              <circle cx="48" cy="18" r="2" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-7 bg-white/30" />
        </motion.div>
      ))}
    </div>
  );
}

function Slideshow() {
  const [current, setCurrent] = useState(0);
  const total = 3;

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % total), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative w-full rounded-xl overflow-hidden shadow-md border border-olive/10"
      style={{ aspectRatio: '4/3' }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-[#e0dbd3] flex items-center justify-center transition-opacity duration-700"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <svg viewBox="0 0 60 48" className="w-14 h-11 text-olive/20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="12" width="52" height="32" rx="4" />
            <circle cx="30" cy="28" r="9" /><circle cx="30" cy="28" r="5" />
            <path d="M20 12 L24 4 H36 L40 12" />
            <circle cx="48" cy="18" r="2" fill="currentColor" stroke="none" />
          </svg>
        </div>
      ))}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: current === i ? '16px' : '6px',
              height: '6px',
              background: current === i ? 'rgba(92,26,27,0.7)' : 'rgba(92,26,27,0.25)',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function PhotoPlaceholder() {
  return (
    <section className="relative py-4 px-4">
      <PolaroidGrid />
      <Slideshow />
    </section>
  );
}
