// src/components/Footer.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#6D2323] pt-10 pb-6 px-6 md:px-[107px] font-sans text-[#FEF9E1]"> {/* Mengurangi padding vertikal */}
      <div className="max-w-[1430px] mx-auto">
        
        {/* GRID CONTAINER: 3 KOLOM */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-10"> {/* Mengurangi gap antar kolom dan margin bawah */}
          
          {/* KOLOM 1: BRAND INFO */}
          <div className="space-y-3"> {/* Mengurangi jarak antar elemen */}
            <h3 className="text-[26px] font-serif font-semibold leading-[34px] tracking-[0.6px]"> {/* Sedikit memperkecil ukuran font judul */}
              PT. Schon Craft Indonesia
            </h3>
            <p className="text-[15px] font-normal leading-[24px] opacity-90 max-w-sm"> {/* Sedikit memperkecil ukuran font body */}
              Crafting premium handmade crochet bags and shoes since 2023. Empowering Indonesian artisans, serving the global market.
            </p>
          </div>

{/* KOLOM 2: CONTACT US */}
<div className="space-y-6"> {/* Sedikit menambah jarak antar elemen utama agar tidak terlalu rapat setelah address dihapus */}
  <h3 className="text-[20px] font-serif font-semibold leading-[28px]">
    Contact Us
  </h3>
  
  <div className="space-y-4"> {/* Menggunakan space-y-4 untuk menjaga kepadatan visual yang pas */}
    {/* Phone */}
    <div className="flex items-center space-x-3 group cursor-pointer">
      <Phone className="w-4 h-4 flex-shrink-0 opacity-90 transition-colors" />
      <p className="text-[14px] leading-[20px] opacity-90 group-hover:opacity-100 transition-opacity">
        +62 857-7101-9071
      </p>
    </div>

    {/* Email */}
    <div className="flex items-center space-x-3 group cursor-pointer">
      <Mail className="w-4 h-4 flex-shrink-0 opacity-90 transition-colors" />
      <p className="text-[14px] leading-[20px] opacity-90 group-hover:opacity-100 transition-opacity">
        dschon.craft@gmail.com
      </p>
    </div>

    {/* Hours */}
    <div className="flex items-start space-x-3">
      <Clock className="w-4 h-4 mt-1 flex-shrink-0 opacity-90" />
      <div className="text-[15px] leading-[24px] opacity-90">
        <p>Mon - Fri: 08:00 - 15:30</p>
        <p>Weekend: Closed</p>
      </div>
    </div>
  </div>
</div>

          {/* KOLOM 3: FOLLOW US */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-serif font-semibold leading-[28px]">
              Follow Us
            </h3>
            
            <div className="flex flex-col items-start space-y-3">
              {/* Instagram Icon Box (Sesuai gambar: Kotak Merah Terang) */}
              <a 
                href="https://instagram.com/schon.craft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#A31D1D] p-2.5 rounded-[12px] hover:scale-110 transition-transform duration-300 inline-block" /* Mengurangi padding dan rounded */
              >
                <Instagram className="w-5 h-5 text-[#FEF9E1]" />
              </a>
              
              {/* Handle Text */}
              <a 
                href="https://instagram.com/schon.craft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[15px] leading-[24px] opacity-90 hover:text-[#E5D0AC] transition-colors"
              >
                @schon.craft
              </a>
              <a 
                href="https://instagram.com/milioiki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[15px] leading-[24px] opacity-90 hover:text-[#E5D0AC] transition-colors"
              >
                @milioiki
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT SECTION (Border Top) */}
        <div className="border-t border-[#A31D1D] pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-[14px] leading-[20px] opacity-75"> {/* Mengurangi padding atas dan ukuran font */}
          <p className="text-center w-full">
            &copy; 2025 PT. Schon Craft Indonesia. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;