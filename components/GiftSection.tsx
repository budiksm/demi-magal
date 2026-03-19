import { Copy, Gift } from 'lucide-react';
import Doodle from './Doodle';

export default function GiftSection() {
  return (
    <section className="py-20 px-6 text-center relative">
      <Doodle type="heart" className="absolute top-10 left-8 w-8 h-8 text-peach/60 rotate-12" />
      
      <div className="mb-12">
        <div className="inline-block p-4 bg-olive/10 rounded-full mb-4">
          <Gift className="text-olive" size={32} strokeWidth={1.5} />
        </div>
        <h2 className="font-serif text-5xl mb-4">Wedding Gift</h2>
        <p className="font-sans text-sm text-burgundy/80 leading-relaxed max-w-sm mx-auto">
          Your presence is the greatest gift. However, if you wish to bless us with a gift, you can use the details below.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-olive/30 shadow-sm relative rotate-1 hover:rotate-0 transition-transform max-w-sm mx-auto">
        <Doodle type="line" className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 text-peach bg-cream px-2" />
        
        <p className="font-serif text-2xl text-olive mb-1">BCA Bank</p>
        <p className="font-sans font-bold text-xl mb-1 tracking-wider">1234 5678 90</p>
        <p className="font-sans text-sm text-burgundy/70 mb-6">Romeo Montague</p>
        
        <button className="flex items-center justify-center gap-2 w-full py-3 bg-peach/20 text-burgundy rounded-xl hover:bg-peach/40 transition-colors font-serif text-xl cursor-pointer">
          <Copy size={16} />
          Copy Number
        </button>
      </div>
    </section>
  );
}
