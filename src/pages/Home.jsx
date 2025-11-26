// src/pages/Home.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Award, Zap, CheckCircle, MessageCircle } from 'lucide-react';
import { products } from '../data/products'; // Import data produk
import ProductDetailModal from '../components/ProductDetailModal';

const Home = () => {
  // 1. State untuk Filter & Modal
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Daftar Filter
  const filters = [
      { key: 'all', label: 'All Products' },
      { key: 'bag', label: 'Milioiki Bags' },
      { key: 'shoe', label: "d'schön Shoes" },
  ];

// 2. Logika Filter (Diperbarui untuk memprioritaskan 2 Tas dan 1 Sepatu saat 'All')
const filteredProducts = useMemo(() => {
    // Pisahkan semua produk berdasarkan kategori
    const bags = products.filter(p => p.category === 'bag');
    const shoes = products.filter(p => p.category === 'shoe');

    let result = [];

    if (activeFilter === 'all') {
        // LOGIKA KUSTOM UNTUK 'ALL PRODUCTS': 2 Tas, lalu 1 Sepatu
        // Ambil 2 tas pertama (Tas Milioiki biasanya produk ekspor unggulan)
        const selectedBags = bags.slice(0, 2); 
        // Ambil 1 sepatu pertama
        const selectedShoes = shoes.slice(0, 1);

        // Gabungkan dan pastikan urutan: Tas, Tas, Sepatu
        result = [...selectedBags, ...selectedShoes];

    } else if (activeFilter === 'bag') {
        // Jika filter 'Bag' aktif, tampilkan 3 tas pertama
        result = bags.slice(0, 3);

    } else if (activeFilter === 'shoe') {
        // Jika filter 'Shoe' aktif, tampilkan 3 sepatu pertama
        result = shoes.slice(0, 3);
    }
    
    // Batasan maksimal tetap 3 produk untuk display di Home Page
    return result.slice(0, 3); 
}, [activeFilter]);

  // Fungsi Buka Modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-[#FEF9E1] font-sans text-[#6D2323] overflow-x-hidden relative">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[90vh] flex items-center justify-center p-6"
        style={{ 
            backgroundImage: 'url(/images/hero_bg.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#6D2323]/90 to-[#6D2323]/60"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-[56px] font-serif font-bold leading-tight text-[#FEF9E1] drop-shadow-lg">
            One Stitch at a Time: Premium Handcrafted Crochet from Indonesia
          </h1>
          <p className="text-base md:text-lg text-[#FEF9E1] font-sans font-normal max-w-3xl mx-auto leading-relaxed opacity-95">
            Export-quality bags and shoes by PT. Schon Craft Indonesia. Empowering local artisans, serving the global market.
          </p>
          <div>
            <Link to="/catalog">
                <button className="bg-[#A31D1D] text-[#FEF9E1] font-sans font-normal text-base py-4 px-8 rounded-lg shadow-lg hover:bg-maroon hover:scale-105 transition duration-300">
                Explore Collection
                </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES */}
      <section className="bg-white border-y-2 border-[#E5D0AC] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 border-2 border-[#A31D1D] rounded-full">
                <ShoppingBag className="w-8 h-8 text-[#A31D1D]" />
            </div>
            <div className="space-y-1">
                <h3 className="text-2xl font-serif font-semibold text-[#6D2323]">Registered Brands</h3>
                <p className="text-base text-[#6D2323]/75 font-sans">d'schön & Milioiki (HKI Certified)</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 border-2 border-[#A31D1D] rounded-full">
                <Award className="w-8 h-8 text-[#A31D1D]" />
            </div>
            <div className="space-y-1">
                <h3 className="text-2xl font-serif font-semibold text-[#6D2323]">Inacraft Exhibitor</h3>
                <p className="text-base text-[#6D2323]/75 font-sans">2019, 2023, 2024, 2025</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 border-2 border-[#A31D1D] rounded-full">
                <Zap className="w-8 h-8 text-[#A31D1D]" />
            </div>
            <div className="space-y-1">
                <h3 className="text-2xl font-serif font-semibold text-[#6D2323]">Export Certified</h3>
                <p className="text-base text-[#6D2323]/75 font-sans">Ministry of Trade Training</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. STORY SECTION */}
      <section className="bg-[#FEF9E1] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl font-serif font-bold text-[#6D2323] leading-tight">
              Crafting Heritage, One Stitch at a Time
            </h2>
            <div className="space-y-6 text-base text-[#6D2323] font-sans">
                <p className="leading-relaxed">
                Established in 2018 and based in Cikarang, Bekasi, PT. Schon Craft Indonesia has become a beacon of handcrafted excellence in the international market.
                </p>
                <p className="leading-relaxed">
                We are proud to empower a community of 20 local artisans, preserving traditional crochet techniques while creating contemporary designs that resonate globally.
                </p>
            </div>
            <div className="space-y-6 mt-8">
                <div className="flex items-start space-x-4">
                    <div className="mt-1"><CheckCircle className="w-6 h-6 text-[#A31D1D]" /></div>
                    <div>
                        <h4 className="text-2xl font-serif font-semibold text-[#6D2323]">Community Empowerment</h4>
                        <p className="text-[#6D2323]/75">Supporting 20 local artisans and their families</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="mt-1"><CheckCircle className="w-6 h-6 text-[#A31D1D]" /></div>
                    <div>
                        <h4 className="text-2xl font-serif font-semibold text-[#6D2323]">Two Premium Brands</h4>
                        <ul className="text-[#6D2323]/75 mt-1 space-y-1">
                            <li><strong>d'schön</strong> - Focus on handcrafted shoes (Domestic market)</li>
                            <li><strong>Milioiki</strong> - Premium bags for export markets</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
                <img src="/images/artisan_work.jpg" alt="Artisan Crafting" className="w-full h-[600px] object-cover" />
            </div>
            <div className="absolute -bottom-10 right-0 lg:-right-10 bg-[#A31D1D] p-8 rounded-xl shadow-xl max-w-xs">
                <p className="text-[#FEF9E1] font-sans text-base leading-relaxed italic">
                    "Every piece tells a story of Indonesian craftsmanship and dedication to quality."
                </p>
            </div>
          </div>
        </div>
      </section>

    {/* 4. CERTIFICATIONS SECTION */}
      <section className="bg-[#FEF9E1] py-24 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-serif font-bold text-[#6D2323]">Certifications & Achievements</h2>
                <p className="text-[#6D2323]/75 max-w-2xl mx-auto">
                    Our commitment to excellence is recognized through various certifications and participation in prestigious exhibitions.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Kartu 1 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 overflow-hidden border border-[#E5D0AC]/50"> {/* Efek hover & shadow lebih menonjol */}
                    <div className="h-64 bg-gray-100 flex items-center justify-center">
                        <img src="/images/hki_dschon.png" alt="HKI Certificate" className="h-full object-contain p-4" /> {/* Tambah padding pada gambar */}
                    </div>
                    <div className="p-6 space-y-2">
                        <h4 className="font-serif text-2xl font-semibold text-[#6D2323]">HKI Merek Certificate</h4>
                        <p className="text-[#6D2323]/75">Official brand registration for d'schön</p>
                    </div>
                </div>

                {/* Kartu 2 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 overflow-hidden border border-[#E5D0AC]/50"> {/* Efek hover & shadow lebih menonjol */}
                    <div className="h-64 bg-gray-100 flex items-center justify-center">
                        <img src="/images/hki_milioiki.png" alt="HKI Certificate" className="h-full object-contain p-4" /> {/* Tambah padding pada gambar */}
                    </div>
                    <div className="p-6 space-y-2">
                        <h4 className="font-serif text-2xl font-semibold text-[#6D2323]">HKI Merek Certificate</h4>
                        <p className="text-[#6D2323]/75">Official brand registration for Milioiki</p>
                    </div>
                </div>

                {/* Kartu 3 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 overflow-hidden border border-[#E5D0AC]/50"> {/* Efek hover & shadow lebih menonjol */}
                    <div className="h-64 bg-gray-100 flex items-center justify-center">
                        <img src="/images/export_training.jpg" alt="Export Training" className="h-full object-contain p-4" /> {/* Tambah padding pada gambar */}
                    </div>
                    <div className="p-6 space-y-2">
                        <h4 className="font-serif text-2xl font-semibold text-[#6D2323]">Export Training</h4>
                        <p className="text-[#6D2323]/75">Ministry of Trade export readiness</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

         {/* 5. FEATURED COLLECTION (FILTER BERFUNGSI & DESAIN KARTU BARU) */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
            <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold text-[#6D2323]">Our Collection</h2>
                <p className="text-[#6D2323]/75 max-w-3xl mx-auto">
                    Discover our range of handcrafted crochet bags and shoes, each piece meticulously crafted with love and expertise.
                </p>
            </div>

            {/* TABS / FILTER BUTTONS (INTERAKTIF - Style Tombol Solid) */}
            <div className="flex flex-wrap justify-center gap-4">
                {filters.map((filter) => (
                    <button 
                        key={filter.key}
                        onClick={() => setActiveFilter(filter.key)}
                        className={`px-6 py-3 rounded-lg font-medium transition duration-300 shadow-sm ${
                            activeFilter === filter.key 
                            ? 'bg-[#A31D1D] text-[#FEF9E1] shadow-lg' 
                            : 'bg-[#E5D0AC] text-[#6D2323] hover:bg-[#dcc49c]'
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
            
            {/* Product Grid (DYNAMIC - DESAIN KARTU SESUAI GAMBAR) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {filteredProducts.map((product) => (
                    <div 
                        key={product.id} 
                        onClick={() => handleProductClick(product)}
                        // PERUBAHAN: Background Putih di luar gambar (Menghilangkan Bingkai Cream)
                        // Penambahan shadow (shadow-lg) pada div utama
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col overflow-hidden"
                    >
                        {/* Container Gambar */}
                        <div className="bg-white overflow-hidden relative aspect-square flex items-center justify-center p-0">
                            <img 
                                src={product.image || '/images/placeholder.png'} 
                                alt={product.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                        </div>

                        {/* Detail Produk - MERAPIKAN TEKS */}
                        <div className="flex flex-col flex-grow p-4">
                            <p className="text-sm text-[#6D2323]/70 uppercase tracking-wider mb-1 font-sans font-medium">
                                {product.brand}
                            </p>
                            {/* Tombol Merah Bawaan (Tambahkan Harga di bawah nama produk) */}
                            <h4 className="font-serif text-2xl font-bold text-[#6D2323] leading-tight">
                                {product.name}
                            </h4>
                            <p className="text-base text-[#A31D1D] font-medium mb-4">
                                {product.priceRange}
                            </p>
                            
                            {/* Tombol di bagian bawah */}
                            <button className="mt-auto w-full bg-[#A31D1D] text-[#FEF9E1] py-3 rounded-lg text-center font-medium hover:bg-[#8a1818] transition flex items-center justify-center gap-2 text-sm">
                                <MessageCircle className="w-4 h-4" />
                                Inquire via WhatsApp
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tombol View All */}
            <div className="pt-8">
                <Link to="/catalog">
                    <button className="bg-transparent border-2 border-[#A31D1D] text-[#A31D1D] font-bold py-3 px-8 rounded-lg hover:bg-[#A31D1D] hover:text-white transition duration-300">
                        View Full Catalog
                    </button>
                </Link>
            </div>
        </div>
      </section>

      {/* MODAL DETAIL PRODUK */}
      <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;