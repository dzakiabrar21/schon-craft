// src/components/ProductCard.jsx
import React from 'react';
import { useCurrency } from '../context/CurrencyContext'; // Ambil context mata uang

const ProductCard = ({ product, onClick }) => {
  const { currency, rates, symbols } = useCurrency();

  // Logika untuk menampilkan harga tetap (Single Price) dengan pembatasan desimal
  const displayedPrice = (product.basePrice * rates[currency]).toLocaleString(
    currency === 'IDR' ? 'id-ID' : 'en-US', 
    { 
      // Jika IDR tidak pakai desimal, jika USD/EUR pakai maksimal 1 desimal
      maximumFractionDigits: currency === 'IDR' ? 0 : 1 
    }
  );

  return (
    <div onClick={() => onClick(product)} className="group cursor-pointer flex flex-col gap-4">
      <div className="aspect-square bg-[#F9FAFB] overflow-hidden relative rounded-sm">
        <img 
          src={product.image || '/images/placeholder.jpg'} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-serif text-2xl font-semibold text-[#6D2323] leading-tight group-hover:text-[#A31D1D] transition-colors">
            {product.name}
          </h3>
          <p className="text-[10px] md:text-xs text-[#6D2323]/60 font-sans mt-2 italic uppercase tracking-widest text-right whitespace-nowrap flex-shrink-0">
            {product.sizes || "Custom"}
          </p>
        </div>

        {/* HARGA DINAMIS: Menampilkan Single Price yang sudah terformat */}
        <p className="text-base text-[#6D2323]/70 font-sans font-normal">
          {symbols[currency]} {displayedPrice} <span className="text-sm">/ piece</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;