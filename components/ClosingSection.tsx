'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Doodle from './Doodle';

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    const onReady = () => setReady(true);
    audio.addEventListener('canplaythrough', onReady);
    return () => audio.removeEventListener('canplaythrough', onReady);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 mb-10">
      <audio ref={audioRef} src="/audio/selfless.mp3" loop preload="auto" />

      {/* Tombol play */}
      <button
        onClick={toggle}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-burgundy/30 text-burgundy/60 hover:border-burgundy hover:text-burgundy transition-all duration-300"
      >
        {playing ? (
          /* Pause icon */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
        ) : (
          /* Play icon */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}

        {/* Animasi gelombang kalau playing */}
        {playing && (
          <span className="absolute inset-0 rounded-full border-2 border-burgundy/20 animate-ping" />
        )}
      </button>

      {/* Info lagu */}
      <div className="text-center">
        <p className="font-[family-name:var(--font-beth-ellen)] text-xs text-olive/60 uppercase tracking-widest">
          {playing ? '♪ sedang diputar' : 'putar lagu'}
        </p>
        <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/50 mt-0.5">
          Selfless — The Strokes
        </p>
      </div>
    </div>
  );
}

export default function ClosingSection() {
  return (
    <section className="py-20 px-6 text-center relative overflow-hidden">

      {/* Ornamen */}
      <Doodle type="baby-breath" className="absolute top-6 left-2 w-16 h-16 text-olive/15 -rotate-12 pointer-events-none" />
      <Doodle type="baby-breath" className="absolute top-6 right-2 w-16 h-16 text-olive/15 rotate-12 pointer-events-none scale-x-[-1]" />
      <Doodle type="tulip" className="absolute bottom-10 left-2 w-14 h-14 text-peach/20 pointer-events-none" />
      <Doodle type="calla-lily" className="absolute bottom-10 right-2 w-14 h-14 text-olive/15 pointer-events-none scale-x-[-1]" />
      <Doodle type="star" className="absolute top-20 left-10 w-3 h-3 text-peach/35 pointer-events-none" />
      <Doodle type="star" className="absolute top-16 right-10 w-2 h-2 text-olive/25 pointer-events-none" />
      <Doodle type="star" className="absolute bottom-24 right-8 w-3 h-3 text-peach/30 pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10">

        {/* Music player */}
        <MusicPlayer />

        {/* Divider */}
        <div className="flex items-center gap-3 mb-10">
          <Doodle type="line" className="flex-1 h-3 text-olive/30" />
          <Doodle type="flower" className="w-6 h-6 text-peach/50 shrink-0" />
          <Doodle type="line" className="flex-1 h-3 text-olive/30 scale-x-[-1]" />
        </div>

        {/* Teks penutup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="font-[family-name:var(--font-beth-ellen)] text-lg leading-relaxed text-burgundy/80 mb-8">
            &quot;Doa dan kehadiran kalian adalah hadiah terindah yang bisa kami terima. Sampai jumpa di hari yang paling kami tunggu-tunggu.&quot;
          </p>

          <p className="font-[family-name:var(--font-mansalva)] text-base text-olive/70 mb-2">
            Dengan kasih,
          </p>

          <h2 className="font-[family-name:var(--font-just-me)] text-5xl text-burgundy relative inline-block">
            Tsalsa & Budi
            <Doodle type="line" className="absolute -bottom-1 left-0 w-full h-3 text-peach/50" />
          </h2>
        </motion.div>

        {/* Heart kecil di bawah */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'backOut' }}
          className="mt-10"
        >
          <Doodle type="heart" className="w-8 h-8 text-burgundy/30 mx-auto" />
        </motion.div>

      </div>
    </section>
  );
}
