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
    <section className="py-32 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Story</h2>
        <div className="w-12 h-[1px] bg-olive mx-auto"></div>
      </div>

      <div className="space-y-16">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="text-sm tracking-widest uppercase text-olive mb-3">{story.year}</span>
            <h3 className="font-serif text-2xl mb-4">{story.title}</h3>
            <p className="text-burgundy/80 leading-relaxed max-w-lg">
              {story.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
