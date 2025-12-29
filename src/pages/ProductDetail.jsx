// src/pages/ProductDetail.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plus, Minus, MessageCircle, Heart, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { currency, rates, symbols } = useCurrency();
    const [openSection, setOpenSection] = useState('details'); 

    const product = useMemo(() => products.find(p => p.id === id), [id]);
    const [selectedVariant, setSelectedVariant] = useState(null);

    useEffect(() => {
        if (product && product.variants) {
            setSelectedVariant(product.variants[0]);
        }
    }, [product]);

    if (!product || !selectedVariant) {
        return <div className="py-20 text-center font-serif text-[#6D2323]">Product not found.</div>;
    }

    const displayedPrice = (product.basePrice * rates[currency]).toLocaleString(
        currency === 'IDR' ? 'id-ID' : 'en-US', 
        { maximumFractionDigits: currency === 'IDR' ? 0 : 1 }
    );

    const whatsappLink = `https://wa.me/6285771019071?text=Hello%20PT.%20Schon%20Craft%20Indonesia,%20I%20am%20interested%20in%20${product.name}%20color%20${selectedVariant.colorName}.`; 

    return (
        <div className="bg-white min-h-screen font-sans text-[#6D2323]">
            
            <button onClick={() => navigate(-1)} className="lg:hidden fixed left-4 top-20 z-50  text-[#6D2323] p-1.5 rounded-full shadow-sm flex items-center justify-center" aria-label="Back">
                <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="max-w-[1430px] mx-auto px-6 md:px-[107px] py-12 flex flex-col lg:flex-row gap-12 lg:gap-16">
                
                {/* --- KOLOM KIRI: GALERI FOTO (GRID LAYOUT) --- */}
                {/* Ubah w-full menjadi grid-cols-2 untuk menampilkan 2 foto berdampingan.
                    'gap-4' memberikan jarak antar foto.
                    'h-fit' agar tingginya menyesuaikan konten.
                */}
                <div className="w-full lg:w-[80%] grid grid-cols-2 gap-4 h-fit">
                    {selectedVariant.images.map((img, index) => (
                        <div key={index} className="w-full bg-[#FAFAFA] aspect-[3/4] overflow-hidden">
                            <img 
                                src={img} 
                                alt={`${product.name} ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                            />
                        </div>
                    ))}
                </div>

                {/* --- KOLOM KANAN: PANEL INFORMASI (STICKY) --- */}
                <div className="w-full lg:w-[40%] lg:sticky lg:top-24 h-fit space-y-8 pt-2">
                    
                    {/* Back button (desktop: icon only) */}
                    <div>
                        <button onClick={() => navigate(-1)} className="hidden lg:inline-flex items-center text-sm text-[#6D2323]/80 hover:opacity-80 mb-2" aria-label="Back">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="font-serif text-4xl md:text-[40px] leading-tight font-normal">
                                    {product.name}
                                </h1>
                                <p className="text-sm text-[#6D2323]/60 mt-2 font-light tracking-wide">
                                    {product.material}
                                </p>
                            </div>
                            <button className="text-[#6D2323] hover:opacity-70 transition p-1">
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <p className="font-sans text-xl font-medium text-[#A31D1D]">
                            {symbols[currency]} {displayedPrice}
                        </p>
                    </div>

                    {/* Color Selector */}
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                        <p className="text-[13px] font-sans uppercase tracking-widest text-[#6D2323]/70">
                            Color: <span className="text-[#6D2323] font-medium ml-1">{selectedVariant.colorName}</span>
                        </p>
                        <div className="flex gap-3">
                            {product.variants.map((variant, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedVariant(variant)}
                                    className={`w-10 h-10 border transition-all duration-300 ${
                                        selectedVariant.colorName === variant.colorName 
                                        ? 'border-[#6D2323] ring-1 ring-[#6D2323] ring-offset-2' 
                                        : 'border-gray-200 hover:border-[#6D2323]/50'
                                    }`}
                                    style={{ backgroundColor: variant.colorCode }}
                                    title={variant.colorName}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size Info */}
                    <div className="space-y-2 pt-2">
                        <div className="flex justify-between items-baseline text-[13px] text-[#6D2323]/60">
                            <p className="uppercase tracking-widest">SIZE: {product.sizes}</p>
                            <button className="underline hover:text-[#6D2323]">size guide</button>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="pt-2">
                        <p className="text-[15px] leading-relaxed text-[#6D2323]/80 font-light">
                            {product.description}
                        </p>
                    </div>

                    {/* ACCORDION SECTIONS */}
                    <div className="border-t border-[#6D2323]/10 mt-6">
                        
                        {/* Details */}
                        <div className="border-b border-[#6D2323]/10">
                            <button 
                                onClick={() => setOpenSection(openSection === 'details' ? '' : 'details')}
                                className="w-full flex justify-between items-center py-5 font-serif text-[16px] text-[#6D2323] hover:opacity-70 transition-opacity"
                            >
                                Product details
                                {openSection === 'details' ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'details' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                                <p className="text-[15px] leading-relaxed text-[#6D2323]/70 font-light">
                                    {product.details}
                                </p>
                            </div>
                        </div>

                        {/* Maintenance */}
                        <div className="border-b border-[#6D2323]/10">
                            <button 
                                onClick={() => setOpenSection(openSection === 'maintenance' ? '' : 'maintenance')}
                                className="w-full flex justify-between items-center py-5 font-serif text-[16px] text-[#6D2323] hover:opacity-70 transition-opacity"
                            >
                                Care & Maintenance
                                {openSection === 'maintenance' ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === 'maintenance' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                                <p className="text-[15px] leading-relaxed text-[#6D2323]/70 font-light">
                                    {product.maintenance}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="pt-8">
                        <a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-[#A31D1D] text-white py-4 font-sans text-xs font-bold uppercase tracking-[2px] hover:bg-[#8B1818] transition-all duration-300 shadow-sm"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>Inquire via WhatsApp</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;