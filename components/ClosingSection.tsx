import Doodle from './Doodle';

export default function ClosingSection() {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">
      <Doodle type="flower" className="absolute top-10 right-10 w-12 h-12 text-peach/40 animate-float" />
      <Doodle type="star" className="absolute bottom-20 left-10 w-8 h-8 text-olive/30 animate-float-reverse" />
      
      <div className="max-w-md mx-auto relative z-10">
        <p className="font-serif text-3xl leading-relaxed text-burgundy/90 mb-12">
          &quot;We look forward to sharing this beautiful day with you. Thank you for your love and blessings.&quot;
        </p>
        
        <p className="font-serif text-2xl text-olive mb-2">With Love,</p>
        <h2 className="font-serif text-6xl text-burgundy relative inline-block">
          Romeo &amp; Juliet
          <Doodle type="line" className="absolute -bottom-2 left-0 w-full h-4 text-peach/50" />
        </h2>
      </div>
    </section>
  );
}
