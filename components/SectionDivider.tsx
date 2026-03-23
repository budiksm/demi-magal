import Doodle from './Doodle';

type DividerType = 'wave' | 'stars' | 'floral' | 'leaves';

export default function SectionDivider({ type }: { type: DividerType }) {

  if (type === 'wave') {
    // Setelah OpeningSection — sulur gelombang burgundy
    return (
      <div className="w-full flex items-center justify-center py-2 px-6 overflow-hidden">
        <svg viewBox="0 0 400 24" className="w-full h-6 text-burgundy/30" fill="none">
          <path
            d="M0 12 Q25 4,50 12 Q75 20,100 12 Q125 4,150 12 Q175 20,200 12 Q225 4,250 12 Q275 20,300 12 Q325 4,350 12 Q375 20,400 12"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          />
          <path
            d="M0 16 Q25 8,50 16 Q75 24,100 16 Q125 8,150 16 Q175 24,200 16 Q225 8,250 16 Q275 24,300 16 Q325 8,350 16 Q375 24,400 16"
            stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"
          />
        </svg>
      </div>
    );
  }

  if (type === 'stars') {
    // Setelah QuranSection — bintang-bintang tersebar
    return (
      <div className="w-full flex items-center justify-center gap-3 py-4 px-6">
        <div className="flex-1 h-px bg-olive/15" />
        <Doodle type="star" className="w-2 h-2 text-olive/30" />
        <Doodle type="star" className="w-3 h-3 text-peach/50" />
        <Doodle type="star" className="w-4 h-4 text-burgundy/20" />
        <Doodle type="star" className="w-3 h-3 text-peach/50" />
        <Doodle type="star" className="w-2 h-2 text-olive/30" />
        <div className="flex-1 h-px bg-olive/15" />
      </div>
    );
  }

  if (type === 'floral') {
    // Setelah CoupleProfile — garis dengan ornamen bunga
    return (
      <div className="w-full flex flex-col items-center py-4 px-6 gap-2">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-px bg-olive/20" />
          <Doodle type="flower" className="w-6 h-6 text-peach/50 shrink-0" />
          <Doodle type="flower" className="w-4 h-4 text-olive/30 shrink-0" />
          <Doodle type="flower" className="w-6 h-6 text-peach/50 shrink-0" />
          <div className="flex-1 h-px bg-olive/20" />
        </div>
      </div>
    );
  }

  if (type === 'leaves') {
    // Setelah EventDetails — baby-breath tipis
    return (
      <div className="w-full flex items-center justify-center py-2 px-8 gap-2">
        <Doodle type="baby-breath" className="w-10 h-10 text-olive/20" />
        <div className="flex-1 h-px bg-burgundy/10" />
        <Doodle type="heart" className="w-4 h-4 text-burgundy/20 shrink-0" />
        <div className="flex-1 h-px bg-burgundy/10" />
        <Doodle type="baby-breath" className="w-10 h-10 text-olive/20 scale-x-[-1]" />
      </div>
    );
  }

  return null;
}
