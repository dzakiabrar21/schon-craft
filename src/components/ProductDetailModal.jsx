// src/components/ProductDetailModal.jsx
import React from 'react';
import { X, MessageCircle } from 'lucide-react';

const ProductDetailModal = ({ product, onClose }) => {
    // 1. Safety Check: Jika tidak ada data produk, jangan render apa-apa
    if (!product) return null;

    // 2. Setup Link WhatsApp
    // Pesan otomatis mencakup ID dan Nama Produk untuk memudahkan admin
    const whatsappLink = `https://wa.me/6281280001670?text=Hello%20PT.%20Schon%20Craft%20Indonesia,%20I%20am%20interested%20in%20bulk%20order%20for%20${product.name}%20(ID:%20${product.id}).%20Can%20you%20provide%20more%20details?`;

    // 3. Menentukan Brand Name (Fallback jika data kosong)
    const brandName = product.brand || "Milioiki";

    return (
        // Overlay Background (Gelap transparan)
        <div 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity"
            onClick={onClose}
        >
            {/* Modal Container (Putih Bersih sesuai desain) */}
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] md:max-h-auto overflow-y-auto md:overflow-visible"
                onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam modal menutup modal
            >
                
                {/* Tombol Close (Pojok Kanan Atas) */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-gray-400 hover:text-maroon transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* KOLOM KIRI: GAMBAR PRODUK */}
                <div className="w-full md:w-1/2 bg-gray-100 h-64 md:h-auto relative">
                    <img 
                        src={product.image || '/images/placeholder.jpg'} 
                        alt={product.name} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* KOLOM KANAN: DETAIL INFORMASI */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center text-left bg-white">
                    
                    {/* 1. Brand & Title */}
                    <span className="text-sm text-gray-400 uppercase tracking-wide font-sans mb-1">
                        {brandName}
                    </span>
                    <h2 className="text-4xl font-serif font-bold text-maroon mb-2 leading-tight">
                        {product.name}
                    </h2>
                    
                    {/* 2. Price */}
                    <p className="text-lg font-medium text-chili mb-6 font-sans">
                        {product.priceRange} <span className="text-sm text-gray-500 font-normal">/ piece</span>
                    </p>

                    {/* 3. Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-8 font-sans">
                        {product.description}
                    </p>

                    {/* 4. Technical Specs (List Vertical) */}
                    <div className="space-y-4 mb-8 font-sans">
                        {/* Materials */}
                        <div>
                            <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-1">Materials</h4>
                            <p className="text-maroon font-medium text-sm">
                                {product.material || "Premium Material"}
                            </p>
                        </div>

                        {/* Dimensions / Size */}
                        <div>
                            <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dimensions / Size</h4>
                            <p className="text-maroon font-medium text-sm">
                                {product.dimensions || product.size || "Standard Size"}
                            </p>
                        </div>

                        {/* Minimum Order (Hardcoded for B2B context based on image) */}
                        <div>
                            <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-1">Minimum Order</h4>
                            <p className="text-maroon font-medium text-sm">
                                50 pieces per design
                            </p>
                        </div>
                    </div>

                    {/* 5. CTA Button (WhatsApp) */}
                    <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-chili text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-2 hover:bg-maroon transition-colors duration-300 shadow-md"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span className="uppercase tracking-wider text-sm">Inquire via WhatsApp</span>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;