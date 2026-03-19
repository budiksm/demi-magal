import { Copy, Gift } from 'lucide-react';

export default function GiftSection() {
  return (
    <section className="py-32 px-6 max-w-3xl mx-auto text-center">
      <div className="mb-20">
        <Gift className="mx-auto text-olive mb-6" size={40} strokeWidth={1.5} />
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Wedding Gift</h2>
        <div className="w-12 h-[1px] bg-olive mx-auto mb-8"></div>
        <p className="text-burgundy/80 leading-relaxed">
          Your presence at our wedding is the greatest gift of all. However, should you wish to help us celebrate with a gift, a wishing well will be provided on the day.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div className="border border-burgundy/10 p-8 rounded-2xl bg-cream shadow-sm">
          <p className="text-sm tracking-widest uppercase text-olive mb-2">BCA</p>
          <p className="font-serif text-2xl mb-1">1234 5678 90</p>
          <p className="text-burgundy/70 mb-6">a.n. Romeo Montague</p>
          
          <button className="flex items-center justify-center gap-2 w-full py-3 border border-burgundy text-burgundy rounded-full hover:bg-burgundy hover:text-cream transition-colors duration-300 uppercase tracking-widest text-xs cursor-pointer">
            <Copy size={14} />
            Copy Account Number
          </button>
        </div>
      </div>
    </section>
  );
}
