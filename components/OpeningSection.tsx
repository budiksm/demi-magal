import Doodle from './Doodle';

export default function OpeningSection() {
  return (
    <section className="py-24 px-6 text-center relative">
      <Doodle type="star" className="absolute top-10 left-10 w-6 h-6 text-peach/60" />
      <p className="font-serif text-2xl md:text-3xl leading-relaxed text-burgundy/90">
        &quot;And among His signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your (hearts).&quot;
      </p>
      <p className="mt-6 font-serif text-xl text-olive">
        ~ Ar-Rum: 21 ~
      </p>
      <Doodle type="line" className="w-24 h-4 text-peach/50 mx-auto mt-8" />
    </section>
  );
}
