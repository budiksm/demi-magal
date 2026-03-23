'use client';

import { useEffect, useState } from 'react';
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
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-[family-name:var(--font-just-me)] text-5xl text-burgundy leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-[family-name:var(--font-beth-ellen)] text-xs text-olive/80 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function EventDetails() {
  const { days, hours, mins, secs } = useCountdown(WEDDING_DATE);

  return (
    <section className="relative py-16 px-4 overflow-hidden">

      {/* Ornamen pojok */}
      <Doodle type="baby-breath" className="absolute top-4 left-0 w-20 h-20 text-olive/15 -rotate-12 pointer-events-none" />
      <Doodle type="baby-breath" className="absolute top-4 right-0 w-20 h-20 text-olive/15 rotate-12 pointer-events-none scale-x-[-1]" />
      <Doodle type="star" className="absolute top-20 left-8 w-3 h-3 text-peach/40 pointer-events-none" />
      <Doodle type="star" className="absolute top-24 right-8 w-2 h-2 text-olive/30 pointer-events-none" />

      {/* Border atas dekoratif */}
      <div className="flex items-center gap-2 mb-10">
        <svg viewBox="0 0 160 20" className="flex-1 h-4 text-burgundy/40" fill="none">
          <path d="M0 10 Q20 2,40 10 Q60 18,80 10 Q100 2,120 10 Q140 18,160 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <Doodle type="heart" className="w-5 h-5 text-burgundy/50 shrink-0" />
        <svg viewBox="0 0 160 20" className="flex-1 h-4 text-burgundy/40 scale-x-[-1]" fill="none">
          <path d="M0 10 Q20 2,40 10 Q60 18,80 10 Q100 2,120 10 Q140 18,160 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Save The Date */}
      <div className="text-center mb-8">
        <p className="font-[family-name:var(--font-beth-ellen)] text-xs uppercase tracking-[0.3em] text-olive/60 mb-1">
          save the date
        </p>
        <h2 className="font-[family-name:var(--font-just-me)] text-4xl text-burgundy">
          The Wedding Day
        </h2>
      </div>

      {/* Countdown */}
      <div className="flex justify-center gap-6 mb-10 bg-burgundy/5 rounded-2xl py-5 px-4 mx-2">
        <CountUnit value={days} label="Days" />
        <div className="font-[family-name:var(--font-just-me)] text-3xl text-olive/40 self-start mt-2">:</div>
        <CountUnit value={hours} label="Hours" />
        <div className="font-[family-name:var(--font-just-me)] text-3xl text-olive/40 self-start mt-2">:</div>
        <CountUnit value={mins} label="Mins" />
        <div className="font-[family-name:var(--font-just-me)] text-3xl text-olive/40 self-start mt-2">:</div>
        <CountUnit value={secs} label="Secs" />
      </div>

      {/* Tanggal besar */}
      <div className="text-center mb-10">
        <p className="font-[family-name:var(--font-beth-ellen)] text-base text-olive/70 leading-relaxed">
          Senin
        </p>
        <p className="font-[family-name:var(--font-just-me)] text-5xl text-burgundy leading-tight">
          17 Agustus
        </p>
        <p className="font-[family-name:var(--font-just-me)] text-4xl text-burgundy/70 leading-tight">
          2026
        </p>
      </div>

      {/* Akad */}
      <div className="relative text-center mb-6 px-4">
        <Doodle type="star" className="absolute -top-1 left-8 w-3 h-3 text-olive/30 pointer-events-none" />
        <h3 className="font-[family-name:var(--font-just-me)] text-3xl text-burgundy mb-1">Akad Nikah</h3>
        <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/60 mb-1">
          08.00 – 10.00 WIB
        </p>
        <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/60 mb-4 leading-snug">
          Swiss-Belhotel Karawang<br/>
          Jl. Jenderal Ahmad Yani No.29, Karawang
        </p>
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
      </div>

      {/* Divider ornamen */}
      <div className="flex items-center gap-3 my-8 px-6">
        <Doodle type="line" className="flex-1 h-3 text-olive/30" />
        <Doodle type="flower" className="w-6 h-6 text-peach/60 shrink-0" />
        <Doodle type="line" className="flex-1 h-3 text-olive/30 scale-x-[-1]" />
      </div>

      {/* Resepsi */}
      <div className="relative text-center mb-6 px-4">
        <Doodle type="star" className="absolute -top-1 right-8 w-2 h-2 text-peach/40 pointer-events-none" />
        <h3 className="font-[family-name:var(--font-just-me)] text-3xl text-burgundy mb-1">Resepsi</h3>
        <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/60 mb-1">
          11.00 – 13.00 WIB
        </p>
        <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/60 mb-4 leading-snug">
          Swiss-Belhotel Karawang<br/>
          Jl. Jenderal Ahmad Yani No.29, Karawang
        </p>
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
      </div>

      {/* Ilustrasi gedung */}
      <div className="mt-10 opacity-20">
        <svg viewBox="0 0 400 120" className="w-full text-olive" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Gedung utama */}
          <rect x="140" y="40" width="120" height="75" />
          <rect x="160" y="55" width="25" height="35" />
          <rect x="215" y="55" width="25" height="35" />
          <rect x="185" y="75" width="30" height="40" />
          {/* Atap */}
          <path d="M130 40 L200 10 L270 40" />
          <circle cx="200" cy="18" r="5" />
          {/* Sayap kiri */}
          <rect x="60" y="60" width="80" height="55" />
          <rect x="75" y="72" width="18" height="25" />
          <rect x="107" y="72" width="18" height="25" />
          <path d="M55 60 L100 38 L145 60" />
          {/* Sayap kanan */}
          <rect x="260" y="60" width="80" height="55" />
          <rect x="275" y="72" width="18" height="25" />
          <rect x="307" y="72" width="18" height="25" />
          <path d="M255 60 L300 38 L345 60" />
          {/* Tanah */}
          <line x1="20" y1="115" x2="380" y2="115" />
          {/* Pohon kiri */}
          <line x1="30" y1="115" x2="30" y2="80" />
          <ellipse cx="30" cy="72" rx="12" ry="14" />
          {/* Pohon kanan */}
          <line x1="370" y1="115" x2="370" y2="80" />
          <ellipse cx="370" cy="72" rx="12" ry="14" />
        </svg>
      </div>

      {/* Border bawah dekoratif */}
      <div className="flex items-center gap-2 mt-6">
        <svg viewBox="0 0 160 20" className="flex-1 h-4 text-burgundy/40" fill="none">
          <path d="M0 10 Q20 2,40 10 Q60 18,80 10 Q100 2,120 10 Q140 18,160 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <Doodle type="heart" className="w-5 h-5 text-burgundy/50 shrink-0" />
        <svg viewBox="0 0 160 20" className="flex-1 h-4 text-burgundy/40 scale-x-[-1]" fill="none">
          <path d="M0 10 Q20 2,40 10 Q60 18,80 10 Q100 2,120 10 Q140 18,160 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

    </section>
  );
}
