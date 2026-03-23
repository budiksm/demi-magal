'use client';

import { motion } from 'motion/react';
import Doodle from './Doodle';

function InstagramButton({ handle }: { handle: string }) {
  return (
    <motion.a
      href={`https://instagram.com/${handle.replace('@', '')}`}
      target="_blank" rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full border border-burgundy/30 text-burgundy/70 hover:bg-burgundy hover:text-cream transition-all duration-300 font-[family-name:var(--font-tnanti)] text-sm"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
      {handle}
    </motion.a>
  );
}

function OvalPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[145px] h-[177px] bg-transparent">
      <div className="absolute z-10" style={{ top:'9%', left:'14%', width:'72%', height:'80%', clipPath:'ellipse(50% 50% at 50% 50%)', overflow:'hidden', background:'transparent' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" style={{ background: 'transparent' }} />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/decorations/Oval-2.svg" alt="" aria-hidden="true"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        style={{ objectFit:'fill', border:'none', outline:'none', boxShadow:'none', display:'block', background:'transparent' }} />
    </div>
  );
}

function PersonCard({ name, nameHighlight, parentLabel, father, mother, instagram, photoSrc, photoAlt, reverse = false, delay = 0 }:
  { name: string; nameHighlight: string; parentLabel: string; father: string; mother: string; instagram: string; photoSrc: string; photoAlt: string; reverse?: boolean; delay?: number }) {

  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={`flex items-center gap-5 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Foto + ornamen */}
      <div className="relative shrink-0">
        {!reverse ? (
          <>
            <motion.div className="absolute -top-7 -left-7 z-30 pointer-events-none"
              initial={{ opacity: 0, rotate: -180, scale: 0 }} whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: delay + 0.3, ease: 'backOut' }}>
              <Doodle type="orchid" className="w-16 h-16 text-olive/45" />
            </motion.div>
            <motion.div className="absolute -bottom-6 -right-5 z-30 pointer-events-none"
              initial={{ opacity: 0, rotate: 180, scale: 0 }} whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: delay + 0.4, ease: 'backOut' }}>
              <Doodle type="baby-breath" className="w-12 h-12 text-peach/55" />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div className="absolute -top-7 -right-7 z-30 pointer-events-none scale-x-[-1]"
              initial={{ opacity: 0, rotate: 180, scale: 0 }} whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: delay + 0.3, ease: 'backOut' }}>
              <Doodle type="calla-lily" className="w-16 h-16 text-olive/45" />
            </motion.div>
            <motion.div className="absolute -bottom-6 -left-5 z-30 pointer-events-none"
              initial={{ opacity: 0, rotate: -180, scale: 0 }} whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: delay + 0.4, ease: 'backOut' }}>
              <Doodle type="tulip" className="w-12 h-12 text-peach/55" />
            </motion.div>
          </>
        )}
        <OvalPhoto src={photoSrc} alt={photoAlt} />
      </div>

      {/* Teks info — stagger */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: delay + 0.2, staggerChildren: 0.1 } } }}
        className={`flex flex-col ${reverse ? 'items-end text-right' : 'items-start text-left'}`}
      >
        {[
          <p key="name" className="font-[family-name:var(--font-midnight-study)] text-xl text-burgundy/75 leading-tight">{name}</p>,
          <h3 key="highlight" className="font-[family-name:var(--font-midnight-study)] text-4xl text-burgundy leading-tight">{nameHighlight}</h3>,
          <div key="parents" className="mt-3">
            <p className="font-sans text-[10px] text-burgundy/45 uppercase tracking-widest mb-1">{parentLabel}</p>
            <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/80 leading-snug">{father}</p>
            <p className="font-[family-name:var(--font-mansalva)] text-sm text-burgundy/80 leading-snug">& {mother}</p>
          </div>,
          <InstagramButton key="ig" handle={instagram} />,
        ].map((el, i) => (
          <motion.div key={i} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
            {el}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function CoupleProfile() {
  return (
    <section className="relative py-16 px-2 overflow-hidden">
      <Doodle type="baby-breath" className="absolute top-4 right-2 w-16 h-16 text-olive/10 pointer-events-none" />
      <Doodle type="tulip" className="absolute bottom-4 left-2 w-16 h-16 text-peach/15 pointer-events-none" />

      <div className="flex flex-col gap-16">
        <PersonCard name="K. Lael" nameHighlight="Tsalsa" parentLabel="Putri dari"
          father="Bpk. Sopyan Saori" mother="Ibu Neneng Siswati" instagram="@tsalsakl"
          photoSrc="/photos/tsalsa.jpeg" photoAlt="Tsalsa K. Lael" reverse={false} delay={0} />

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center items-center gap-3"
        >
          <Doodle type="line" className="w-12 h-3 text-olive/40" />
          <motion.span
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="font-[family-name:var(--font-just-me)] text-5xl text-olive/60"
          >&</motion.span>
          <Doodle type="line" className="w-12 h-3 text-olive/40 scale-x-[-1]" />
        </motion.div>

        <PersonCard name="Budi" nameHighlight="Kusuma" parentLabel="Putra dari"
          father="Bpk. Sunadi" mother="Ibu Sartini" instagram="@efekkiranti"
          photoSrc="/photos/budi.jpeg" photoAlt="Budi Kusuma" reverse={true} delay={0.1} />
      </div>
    </section>
  );
}
