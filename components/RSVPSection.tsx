export default function RSVPSection() {
  return (
    <section className="py-32 px-6 bg-peach/10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">RSVP</h2>
        <p className="text-burgundy/70 mb-12">Please confirm your attendance by October 1st, 2026</p>

        <form className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-sm tracking-widest uppercase text-olive mb-2">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 bg-cream border border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition-colors"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="attendance" className="block text-sm tracking-widest uppercase text-olive mb-2">Will you attend?</label>
            <select 
              id="attendance" 
              className="w-full px-4 py-3 bg-cream border border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition-colors appearance-none"
            >
              <option value="">Select attendance</option>
              <option value="yes">Yes, I will attend</option>
              <option value="no">Sorry, I cannot attend</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm tracking-widest uppercase text-olive mb-2">Message for the couple</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full px-4 py-3 bg-cream border border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition-colors resize-none"
              placeholder="Write your wishes here..."
            ></textarea>
          </div>

          <button 
            type="button"
            className="w-full py-4 bg-burgundy text-cream rounded-lg hover:bg-burgundy/90 transition-colors duration-300 uppercase tracking-widest text-xs mt-4 cursor-pointer"
          >
            Send Confirmation
          </button>
        </form>
      </div>
    </section>
  );
}
