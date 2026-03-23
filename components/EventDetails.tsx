'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Doodle from './Doodle';

const WEDDING_DATE = new Date('2026-08-17T08:00:00');
const MAPS_URL = 'https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgNGB4yCAgCEAAYDRgeMggIAxAAGA0YHjIICAQQABgNGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg3NDE2ajBqOagCBrACAfEFlXLfj9UWfUg&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KUv2_3Dkd2kuMUz4KcdeirkA&daddr=Jl.+Jenderal+Ahmad+Yani+No.29,+Tanjungpura,+Kec.+Karawang+Bar.,+Karawang,+Jawa+Barat+41315';

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

function CountUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center gap-1">
      <motion.span
        key={display}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="font-[family-name:var(--font-midnight-study)] text-5xl text-burgundy leading-none"
      >
        {display}
      </motion.span>
      <span className="font-[family-name:var(--font-midnight-study)] text-[10px] text-olive/70 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

function MapsButton() {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-burgundy/30 text-burgundy/70 hover:bg-burgundy hover:text-cream transition-all duration-300 text-xs font-sans"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
      Buka Maps
    </a>
  );
}

export default function EventDetails() {
  const { days, hours, mins, secs } = useCountdown(WEDDING_DATE);

  return (
    <section className="relative py-16 px-4 overflow-hidden">

      {/* Ornamen background — float */}
      {[
        { type: 'baby-breath' as const, cls: 'absolute top-4 left-0 w-20 h-20 text-olive/15 -rotate-12', dy: -10, delay: 0 },
        { type: 'baby-breath' as const, cls: 'absolute top-4 right-0 w-20 h-20 text-olive/15 rotate-12 scale-x-[-1]', dy: 10, delay: 1 },
        { type: 'tulip' as const, cls: 'absolute bottom-32 left-1 w-16 h-16 text-peach/15 rotate-6', dy: -8, delay: 0.5 },
        { type: 'orchid' as const, cls: 'absolute bottom-32 right-1 w-16 h-16 text-olive/10 -rotate-6', dy: 8, delay: 1.5 },
      ].map((d, i) => (
        <motion.div key={i} className={`${d.cls} pointer-events-none`}
          animate={{ y: [0, d.dy, 0] }} transition={{ duration: 5 + i, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}>
          <Doodle type={d.type} className="w-full h-full" />
        </motion.div>
      ))}

      {/* Twinkling stars */}
      {['absolute top-16 left-6 w-3 h-3 text-peach/35', 'absolute top-20 right-6 w-2 h-2 text-olive/25'].map((cls, i) => (
        <motion.div key={i} className={`${cls} pointer-events-none`}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.8 }}>
          <Doodle type="star" className="w-full h-full" />
        </motion.div>
      ))}

      {/* Save The Date + Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <p className="font-[family-name:var(--font-smoky)] text-5xl text-olive/70 mb-1">Save the Date</p>
        <h2 className="font-[family-name:var(--font-midnight-study)] text-4xl text-burgundy mb-6">The Wedding Day</h2>
        <div className="flex justify-center gap-5 bg-burgundy/5 rounded-2xl py-5 px-4 mx-2">
          <CountUnit value={days} label="Days" />
          <span className="font-[family-name:var(--font-midnight-study)] text-3xl text-olive/40 self-start mt-1">:</span>
          <CountUnit value={hours} label="Hours" />
          <span className="font-[family-name:var(--font-midnight-study)] text-3xl text-olive/40 self-start mt-1">:</span>
          <CountUnit value={mins} label="Mins" />
          <span className="font-[family-name:var(--font-midnight-study)] text-3xl text-olive/40 self-start mt-1">:</span>
          <CountUnit value={secs} label="Secs" />
        </div>
      </motion.div>

      {/* 4 Polaroid di bawah countdown */}
      <div className="grid grid-cols-2 gap-3 mb-10">
        {[0,1,2,3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, rotate: [-2,1.5,-1,2.5][i] - 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: [-2,1.5,-1,2.5][i] }}
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

      {/* Frame utama acara */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-2"
      >
        {/* Ornamen di sudut-sudut frame */}
        <div className="absolute -top-7 -left-5 z-20 pointer-events-none">
          <Doodle type="orchid" className="w-20 h-20 text-olive/55" />
        </div>
        <div className="absolute -top-7 -right-5 z-20 pointer-events-none scale-x-[-1]">
          <Doodle type="orchid" className="w-20 h-20 text-olive/55" />
        </div>
        <div className="absolute -bottom-7 -left-5 z-20 pointer-events-none">
          <Doodle type="calla-lily" className="w-20 h-20 text-burgundy/40" />
        </div>
        <div className="absolute -bottom-7 -right-5 z-20 pointer-events-none scale-x-[-1]">
          <Doodle type="calla-lily" className="w-20 h-20 text-burgundy/40" />
        </div>
        <Doodle type="star" className="absolute top-4 right-6 w-3 h-3 text-olive/35 z-20 pointer-events-none" />
        <Doodle type="star" className="absolute bottom-4 left-6 w-2 h-2 text-peach/45 z-20 pointer-events-none" />
        <Doodle type="star" className="absolute top-1/2 left-3 w-2 h-2 text-olive/25 z-20 pointer-events-none" />

        {/* Frame border scalloped */}
        <svg
          viewBox="0 0 340 400"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 25 18 Q 38 5,51 18 Q 64 5,77 18 Q 90 5,103 18 Q 116 5,129 18
              Q 142 5,155 18 Q 168 5,181 18 Q 194 5,207 18 Q 220 5,233 18
              Q 246 5,259 18 Q 272 5,285 18 Q 298 5,311 18 Q 324 8,324 25
              Q 337 38,324 51 Q 337 64,324 77 Q 337 90,324 103 Q 337 116,324 129
              Q 337 142,324 155 Q 337 168,324 181 Q 337 194,324 207 Q 337 220,324 233
              Q 337 246,324 259 Q 337 272,324 285 Q 337 298,324 311 Q 337 324,324 337
              Q 324 355,311 362 Q 298 375,285 362 Q 272 375,259 362 Q 246 375,233 362
              Q 220 375,207 362 Q 194 375,181 362 Q 168 375,155 362 Q 142 375,129 362
              Q 116 375,103 362 Q 90 375,77 362 Q 64 375,51 362 Q 38 375,25 362
              Q 8 355,8 337 Q -5 324,8 311 Q -5 298,8 285 Q -5 272,8 259
              Q -5 246,8 233 Q -5 220,8 207 Q -5 194,8 181 Q -5 168,8 155
              Q -5 142,8 129 Q -5 116,8 103 Q -5 90,8 77 Q -5 64,8 51
              Q -5 38,8 25 Q 12 8,25 18 Z
            "
            fill="rgba(250, 248, 245, 0.96)"
            stroke="#737A59"
            strokeWidth="1.5"
          />
        </svg>

        {/* Konten dalam frame */}
        <div className="relative z-20 px-10 py-12 text-center">

          {/* Tanggal besar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <p className="font-[family-name:var(--font-caveat)] text-2xl text-olive/70 leading-tight">Senin</p>
            <p className="font-[family-name:var(--font-caveat)] text-7xl font-semibold text-burgundy leading-none">17</p>
            <p className="font-[family-name:var(--font-caveat)] text-5xl font-semibold text-burgundy leading-tight">Agustus</p>
            <p className="font-[family-name:var(--font-caveat)] text-3xl text-burgundy/55 leading-tight">2026</p>
          </motion.div>

          {/* Divider tipis */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-1 h-px bg-olive/20" />
            <Doodle type="flower" className="w-5 h-5 text-peach/60 shrink-0" />
            <div className="flex-1 h-px bg-olive/20" />
          </div>

          {/* Akad Nikah & Syukuran */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-8"
          >
            <Doodle type="star" className="inline-block w-3 h-3 text-olive/30 mb-2" />
            <h3 className="font-[family-name:var(--font-caveat)] text-3xl font-semibold text-burgundy mb-1">
              Akad Nikah & Syukuran
            </h3>
            <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/60 mb-1">
              08.00 – 13.00 WIB
            </p>
            <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/50 leading-snug mb-5">
              Swiss-Belhotel Karawang<br />
              Jl. Jenderal Ahmad Yani No.29, Karawang
            </p>
            <MapsButton />
          </motion.div>

        </div>
      </motion.div>

      {/* Ilustrasi gedung */}
      <div className="mt-14 opacity-20">
        <svg viewBox="0 0 400 120" className="w-full text-olive" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="140" y="40" width="120" height="75" />
          <rect x="160" y="55" width="25" height="35" />
          <rect x="215" y="55" width="25" height="35" />
          <rect x="185" y="75" width="30" height="40" />
          <path d="M130 40 L200 10 L270 40" />
          <circle cx="200" cy="18" r="5" />
          <rect x="60" y="60" width="80" height="55" />
          <rect x="75" y="72" width="18" height="25" />
          <rect x="107" y="72" width="18" height="25" />
          <path d="M55 60 L100 38 L145 60" />
          <rect x="260" y="60" width="80" height="55" />
          <rect x="275" y="72" width="18" height="25" />
          <rect x="307" y="72" width="18" height="25" />
          <path d="M255 60 L300 38 L345 60" />
          <line x1="20" y1="115" x2="380" y2="115" />
          <line x1="30" y1="115" x2="30" y2="80" />
          <ellipse cx="30" cy="72" rx="12" ry="14" />
          <line x1="370" y1="115" x2="370" y2="80" />
          <ellipse cx="370" cy="72" rx="12" ry="14" />
        </svg>
      </div>

    </section>
  );
}
