'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Doodle from './Doodle';
import Oval2 from '@/public/decorations/Oval-2.svg';

function InstagramButton({ handle }: { handle: string }) {
  return (
    <a
      href={`https://instagram.com/${handle.replace('@', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full border border-burgundy/30 text-burgundy/70 hover:bg-burgundy hover:text-cream transition-all duration-300 text-xs font-sans"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
      {handle}
    </a>
  );
}

function PersonCard({
  name,
  nameHighlight,
  nameSuffix,
  parentLabel,
  father,
  mother,
  instagram,
  photoSrc,
  photoAlt,
  reverse = false,
  delay = 0,
}: {
  name: string;
  nameHighlight: string;
  nameSuffix?: string;
  parentLabel: string;
  father: string;
  mother: string;
  instagram: string;
  photoSrc: string;
  photoAlt: string;
  reverse?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={`flex items-center gap-4 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Foto dalam oval */}
      <div className="relative shrink-0 w-[145px] h-[175px]">
        {!reverse ? (
          <>
            <Doodle type="orchid" className="absolute -top-6 -left-6 w-16 h-16 text-olive/50 pointer-events-none z-20" />
            <Doodle type="baby-breath" className="absolute -bottom-5 -right-5 w-14 h-14 text-peach/60 pointer-events-none z-20" />
            <Doodle type="star" className="absolute top-2 right-0 w-3 h-3 text-olive/40 pointer-events-none z-20" />
          </>
        ) : (
          <>
            <Doodle type="calla-lily" className="absolute -top-6 -right-6 w-16 h-16 text-olive/50 pointer-events-none z-20 scale-x-[-1]" />
            <Doodle type="tulip" className="absolute -bottom-5 -left-5 w-14 h-14 text-peach/60 pointer-events-none z-20" />
            <Doodle type="star" className="absolute top-2 left-0 w-3 h-3 text-olive/40 pointer-events-none z-20" />
          </>
        )}

        <div className="relative w-full h-full">
          {/* Foto */}
          <div
            className="absolute inset-0 overflow-hidden z-10"
            style={{ clipPath: 'ellipse(47% 49% at 50% 50%)' }}
          >
            <Image
              src={photoSrc}
              alt={photoAlt}
              fill
              className="object-cover object-top"
              sizes="145px"
            />
          </div>

          {/* Oval-2 frame di atas foto */}
          <Oval2
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 736 895"
          />
        </div>
      </div>

      {/* Teks info */}
      <div className={`flex flex-col ${reverse ? 'items-end text-right' : 'items-start text-left'}`}>
        <p className="font-[family-name:var(--font-beth-ellen)] text-lg text-burgundy/70 leading-tight">
          {name}
        </p>
        <h3 className="font-[family-name:var(--font-just-me)] text-4xl text-burgundy leading-tight">
          {nameHighlight}
        </h3>
        {nameSuffix && (
          <p className="font-[family-name:var(--font-beth-ellen)] text-lg text-burgundy/70 leading-tight">
            {nameSuffix}
          </p>
        )}

        <div className="mt-3">
          <p className="font-sans text-xs text-burgundy/50 uppercase tracking-widest mb-1">
            {parentLabel}
          </p>
          <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/80 leading-snug">
            {father}
          </p>
          <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/80 leading-snug">
            & {mother}
          </p>
        </div>

        <InstagramButton handle={instagram} />
      </div>
    </motion.div>
  );
}

export default function CoupleProfile() {
  return (
    <section className="relative py-16 px-2 overflow-hidden">

      {/* Ornamen latar */}
      <Doodle type="baby-breath" className="absolute top-4 right-2 w-16 h-16 text-olive/10 pointer-events-none" />
      <Doodle type="tulip" className="absolute bottom-4 left-2 w-16 h-16 text-peach/15 pointer-events-none" />
      <Doodle type="star" className="absolute top-1/2 right-4 w-3 h-3 text-olive/20 pointer-events-none" />
      <Doodle type="star" className="absolute top-1/3 left-4 w-2 h-2 text-peach/30 pointer-events-none" />

      <div className="flex flex-col gap-16">

        {/* Mempelai Wanita */}
        <PersonCard
          name="Tsalsa K."
          nameHighlight="Lael"
          parentLabel="Putri dari"
          father="Bpk. Sopyan Saori"
          mother="Ibu Neneng Siswati"
          instagram="@tsalsakl"
          photoSrc="/photos/tsalsa.jpeg"
          photoAlt="Tsalsa K. Lael"
          reverse={false}
          delay={0}
        />

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="flex justify-center items-center gap-3"
        >
          <Doodle type="line" className="w-12 h-3 text-olive/40" />
          <span className="font-[family-name:var(--font-just-me)] text-5xl text-olive/60">&</span>
          <Doodle type="line" className="w-12 h-3 text-olive/40" />
        </motion.div>

        {/* Mempelai Pria */}
        <PersonCard
          name="Budi"
          nameHighlight="Kusuma"
          parentLabel="Putra dari"
          father="Bpk. Sunadi"
          mother="Ibu Sartini"
          instagram="@efekkiranti"
          photoSrc="/photos/budi.jpeg"
          photoAlt="Budi Kusuma"
          reverse={true}
          delay={0.15}
        />
      </div>
    </section>
  );
}
