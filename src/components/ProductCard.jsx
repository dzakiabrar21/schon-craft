// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onClick }) => {
    return (
        <div 
            onClick={() => onClick(product)} 
            className="group cursor-pointer flex flex-col gap-4"
        >
            {/* Area Gambar (Background #F9FAFB sesuai desain) */}
            <div className="aspect-square bg-[#F9FAFB] overflow-hidden relative rounded-sm">
                <img 
                    src={product.image || '/images/placeholder.jpg'} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Overlay Hitam Halus saat Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
            
            {/* Detail Teks */}
            <div className="flex flex-col gap-1">
                <h3 className="font-serif text-2xl font-semibold text-[#6D2323] leading-tight group-hover:text-[#A31D1D] transition-colors">
                    {product.name}
                </h3>
                <p className="text-base text-[#6D2323]/70 font-sans font-normal">
                    {product.priceRange} <span className="text-sm">/ piece</span>
                </p>
            </div>
        </div>
    );
};

export default ProductCard;