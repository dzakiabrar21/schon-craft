// src/components/TeamCard.jsx
import React from 'react';

const TeamCard = ({ member }) => {
  return (
    <div className="bg-cream rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-0.5">
      <div className="relative">
        {/* Placeholder/Image Area */}
        {/* PERUBAHAN 1: h-64 diubah menjadi h-80 */}
        <div className="h-80 bg-beige flex items-center justify-center overflow-hidden">
            <img src={member.image} alt={member.name} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
        </div>
        
        {/* Gradient Overlay */}
        {/* PERUBAHAN 2: from-cream/90 diubah menjadi from-cream/70 (Mengurangi intensitas) */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full text-maroon">
            <h3 className="text-2xl font-serif font-bold">{member.name}</h3>
            <p className="text-chili font-medium uppercase text-sm tracking-wider">{member.role}</p>
        </div>
      </div>
      
      {/* Deskripsi di luar area gambar */}
      <div className="p-6 pt-2">
        <p className="text-sm text-gray-700">{member.desc}</p>
      </div>
    </div>
  );
};

export default TeamCard;