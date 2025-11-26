// src/components/Timeline.jsx
import React from 'react';

const Timeline = ({ events }) => {
  return (
    <div className="relative max-w-6xl mx-auto py-10 font-sans">
      {/* Garis Horizontal (Garis merah tipis di tengah lingkaran tahun) */}
      <div className="hidden md:block absolute top-[50px] left-0 w-full h-0.5 bg-[#A31D1D]/30 z-0"></div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 relative z-10">
        {events.map((event) => (
          <div key={event.year} className="flex flex-col items-center text-center w-full md:w-1/3 group">
            
            {/* Lingkaran Tahun (Merah Tua) */}
            <div className="w-24 h-24 rounded-full bg-[#A31D1D] border-4 border-[#FEF9E1] flex items-center justify-center shadow-lg mb-6 relative z-10 transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-serif text-2xl font-bold">{event.year}</span>
            </div>

            {/* Konten Teks (Judul & Deskripsi) */}
            <div className="space-y-3 px-4">
              <h3 className="text-3xl font-serif font-bold text-[#6D2323]">{event.title}</h3>
              <p className="text-[#6D2323]/80 text-base leading-relaxed max-w-xs mx-auto font-light">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;