import Doodle from './Doodle';

export default function RSVPSection() {
  return (
    <section className="py-20 px-6">
      <div className="bg-peach/20 p-8 rounded-3xl relative border-2 border-dashed border-peach">
        <Doodle type="star" className="absolute -top-4 -right-4 w-10 h-10 text-olive bg-cream rounded-full p-1" />
        
        <div className="text-center mb-8">
          <h2 className="font-serif text-5xl mb-2">RSVP</h2>
          <p className="font-sans text-sm text-burgundy/70">Kindly respond by October 1st, 2026</p>
        </div>

        <form className="space-y-5 font-sans">
          <div>
            <label htmlFor="name" className="block font-serif text-2xl mb-1">Your Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 bg-white border-2 border-peach/50 rounded-xl focus:outline-none focus:border-olive transition-colors"
              placeholder="e.g. John Doe"
            />
          </div>

          <div>
            <label htmlFor="attendance" className="block font-serif text-2xl mb-1">Will you join us?</label>
            <select 
              id="attendance" 
              className="w-full px-4 py-3 bg-white border-2 border-peach/50 rounded-xl focus:outline-none focus:border-olive transition-colors appearance-none"
            >
              <option value="">Select an option...</option>
              <option value="yes">Yes, I wouldn&apos;t miss it!</option>
              <option value="no">Sorry, I&apos;ll be celebrating from afar</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-serif text-2xl mb-1">Leave a message</label>
            <textarea 
              id="message" 
              rows={3}
              className="w-full px-4 py-3 bg-white border-2 border-peach/50 rounded-xl focus:outline-none focus:border-olive transition-colors resize-none"
              placeholder="Write your wishes here..."
            ></textarea>
          </div>

          <button 
            type="button"
            className="w-full py-4 bg-burgundy text-cream rounded-xl hover:bg-burgundy/90 transition-colors duration-300 font-serif text-2xl mt-2 cursor-pointer shadow-md"
          >
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
}
