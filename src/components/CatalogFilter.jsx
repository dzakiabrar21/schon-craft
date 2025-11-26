// src/components/CatalogFilter.jsx
import { q } from 'framer-motion/client';
import React from 'react';

const CatalogFilter = ({ activeFilter, setFilter }) => {
    // Mengembalikan semua kategori sesuai desain PDF
    const filters = [
        { key: 'all', label: 'All Products' },
        { key: 'bag', label: 'Milioiki Bags' },
        { key: 'shoe', label: "d'schön Shoes" },

    ];

    return (
        // Container Flex dengan Border Bawah tipis (garis abu-abu panjang)
        <div className="flex flex-wrap gap-8 border-b border-[#E5E7EB] mb-12">
            {filters.map((filter) => (
                <button
                    key={filter.key}
                    onClick={() => setFilter(filter.key)}
                    className={`
                        pb-4 text-base font-sans transition-all duration-300 relative
                        ${activeFilter === filter.key
                            ? 'text-[#6D2323] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#6D2323]' // Aktif: Teks Merah Tebal + Garis Bawah Merah
                            : 'text-[#9CA3AF] hover:text-[#6D2323]' // Tidak Aktif: Abu-abu (Tanpa Background Cream)
                        }
                    `}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default CatalogFilter;q