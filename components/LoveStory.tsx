import Doodle from './Doodle';

export default function LoveStory() {
  const stories = [
    {
      year: '2018',
      title: 'First Met',
      description: 'We met at a mutual friend\'s gathering. A simple conversation turned into hours of talking, and we knew there was something special.',
    },
    {
      year: '2020',
      title: 'The Journey',
      description: 'Through ups and downs, we grew together. We learned about each other\'s flaws and loved them anyway. Every moment became a cherished memory.',
    },
    {
      year: '2025',
      title: 'The Proposal',
      description: 'On a quiet evening by the beach, he asked the question. With tears of joy, she said yes to forever.',
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <Doodle type="star" className="absolute top-20 right-8 w-6 h-6 text-peach" />
      <div className="text-center mb-16">
        <h2 className="font-serif text-5xl md:text-6xl mb-2">Our Story</h2>
        <Doodle type="line" className="w-20 h-3 text-olive/40 mx-auto" />
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-peach before:to-transparent">
        {stories.map((story, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-cream bg-peach text-burgundy shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
              <Doodle type="heart" className="w-4 h-4 text-cream" />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-peach/20 relative rotate-1 hover:rotate-0 transition-transform">
              <span className="font-serif text-2xl text-olive mb-1 block">{story.year}</span>
              <h3 className="font-serif text-3xl mb-2">{story.title}</h3>
              <p className="text-burgundy/80 font-sans text-sm leading-relaxed">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
