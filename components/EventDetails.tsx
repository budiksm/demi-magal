import { MapPin, Calendar, Clock } from 'lucide-react';

export default function EventDetails() {
  return (
    <section className="py-32 px-6 bg-burgundy text-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-peach">Wedding Events</h2>
          <div className="w-12 h-[1px] bg-peach/50 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Akad Card */}
          <div className="border border-peach/20 p-10 flex flex-col items-center text-center rounded-2xl bg-burgundy/50 backdrop-blur-sm">
            <h3 className="font-serif text-3xl mb-8 text-peach">Akad Nikah</h3>
            
            <div className="space-y-6 mb-10 w-full">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-olive" size={24} />
                <p className="tracking-widest uppercase text-sm">Saturday, 24 October 2026</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-olive" size={24} />
                <p className="tracking-widest uppercase text-sm">08:00 AM - 10:00 AM</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <MapPin className="text-olive" size={24} />
                <p className="font-medium">The Grand Mosque</p>
                <p className="text-sm text-cream/70">Jl. Sudirman No. 1, Jakarta</p>
              </div>
            </div>

            <button className="px-8 py-3 border border-peach text-peach rounded-full hover:bg-peach hover:text-burgundy transition-colors duration-300 uppercase tracking-widest text-xs w-full max-w-xs cursor-pointer">
              View Location
            </button>
          </div>

          {/* Resepsi Card */}
          <div className="border border-peach/20 p-10 flex flex-col items-center text-center rounded-2xl bg-burgundy/50 backdrop-blur-sm">
            <h3 className="font-serif text-3xl mb-8 text-peach">Wedding Reception</h3>
            
            <div className="space-y-6 mb-10 w-full">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-olive" size={24} />
                <p className="tracking-widest uppercase text-sm">Saturday, 24 October 2026</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-olive" size={24} />
                <p className="tracking-widest uppercase text-sm">11:00 AM - 02:00 PM</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <MapPin className="text-olive" size={24} />
                <p className="font-medium">Grand Ballroom Hotel</p>
                <p className="text-sm text-cream/70">Jl. Thamrin No. 2, Jakarta</p>
              </div>
            </div>

            <button className="px-8 py-3 border border-peach text-peach rounded-full hover:bg-peach hover:text-burgundy transition-colors duration-300 uppercase tracking-widest text-xs w-full max-w-xs cursor-pointer">
              View Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
