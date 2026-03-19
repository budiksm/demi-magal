import { MapPin, Calendar, Clock } from 'lucide-react';
import Doodle from './Doodle';

export default function EventDetails() {
  return (
    <section className="py-20 px-6">
      <div className="text-center mb-16 relative">
        <h2 className="font-serif text-5xl md:text-6xl mb-2">Wedding Events</h2>
        <Doodle type="flower" className="w-8 h-8 text-peach mx-auto" />
      </div>

      <div className="flex flex-col gap-8">
        {/* Akad Card */}
        <div className="relative bg-white p-8 rounded-3xl shadow-sm border-2 border-dashed border-peach/60 -rotate-1 hover:rotate-0 transition-transform">
          <Doodle type="star" className="absolute -top-3 -right-3 w-8 h-8 text-olive bg-cream rounded-full p-1" />
          
          <h3 className="font-serif text-4xl mb-6 text-center text-burgundy">Akad Nikah</h3>
          
          <div className="space-y-4 mb-8 font-sans text-sm text-burgundy/80">
            <div className="flex items-center gap-4 bg-peach/10 p-3 rounded-xl">
              <Calendar className="text-olive shrink-0" size={20} />
              <p>Saturday, 24 October 2026</p>
            </div>
            
            <div className="flex items-center gap-4 bg-peach/10 p-3 rounded-xl">
              <Clock className="text-olive shrink-0" size={20} />
              <p>08:00 AM - 10:00 AM</p>
            </div>
            
            <div className="flex items-start gap-4 bg-peach/10 p-3 rounded-xl">
              <MapPin className="text-olive shrink-0 mt-1" size={20} />
              <div>
                <p className="font-bold text-burgundy">The Grand Mosque</p>
                <p>Jl. Sudirman No. 1, Jakarta</p>
              </div>
            </div>
          </div>

          <button className="w-full py-3 bg-olive text-cream rounded-xl hover:bg-olive/90 transition-colors font-serif text-xl shadow-sm cursor-pointer">
            View Location
          </button>
        </div>

        {/* Resepsi Card */}
        <div className="relative bg-white p-8 rounded-3xl shadow-sm border-2 border-dashed border-olive/40 rotate-1 hover:rotate-0 transition-transform">
          <Doodle type="heart" className="absolute -top-3 -left-3 w-8 h-8 text-peach bg-cream rounded-full p-1" />
          
          <h3 className="font-serif text-4xl mb-6 text-center text-burgundy">Wedding Reception</h3>
          
          <div className="space-y-4 mb-8 font-sans text-sm text-burgundy/80">
            <div className="flex items-center gap-4 bg-olive/10 p-3 rounded-xl">
              <Calendar className="text-olive shrink-0" size={20} />
              <p>Saturday, 24 October 2026</p>
            </div>
            
            <div className="flex items-center gap-4 bg-olive/10 p-3 rounded-xl">
              <Clock className="text-olive shrink-0" size={20} />
              <p>11:00 AM - 02:00 PM</p>
            </div>
            
            <div className="flex items-start gap-4 bg-olive/10 p-3 rounded-xl">
              <MapPin className="text-olive shrink-0 mt-1" size={20} />
              <div>
                <p className="font-bold text-burgundy">Grand Ballroom Hotel</p>
                <p>Jl. Thamrin No. 2, Jakarta</p>
              </div>
            </div>
          </div>

          <button className="w-full py-3 bg-peach text-burgundy rounded-xl hover:bg-peach/90 transition-colors font-serif text-xl shadow-sm cursor-pointer">
            View Location
          </button>
        </div>
      </div>
    </section>
  );
}
