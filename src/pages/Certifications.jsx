// src/pages/Certifications.jsx
import React from 'react';
import { certificationData, exhibitionData } from '../data/products';
import { Briefcase, Zap, CheckCircle, Award, FileText, TrendingUp, Image as ImageIcon } from 'lucide-react';

const Certifications = () => {
    // Filter data sesuai kategori
    const legalCerts = certificationData.filter(c => c.type === 'legal');
    const trainingCerts = certificationData.filter(c => c.type === 'training');

    // Helper array untuk 22 item
    const imageIndices = Array.from({ length: 22 }, (_, i) => i + 1);

    // Helper untuk icon dinamis (Digunakan di Section 3)
    const getIcon = (iconName) => {
        if (iconName === 'TrendingUp') return <TrendingUp className="w-8 h-8 text-[#A31D1D]" />;
        if (iconName === 'FileText') return <FileText className="w-8 h-8 text-[#A31D1D]" />;
        return <Award className="w-8 h-8 text-[#A31D1D]" />;
    };

    return (
        <div className="bg-[#FEF9E1] font-sans text-[#6D2323]">
            
            {/* 1. HERO SECTION (Warna Solid Maroon) */}
            <section 
                className="relative h-[60vh] flex items-center justify-center p-6 text-center bg-[#6D2323]"
            >
                <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                    <span className="bg-[#A31D1D] text-white px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg">Certified & Verified</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[#FEF9E1]">
                        Our Global Footprint & Quality Assurance
                    </h1>
                    <p className="text-lg text-[#FEF9E1]/90 font-light max-w-3xl mx-auto leading-relaxed">
                        Registered brands and certified export competence. Building trust through proven track record.
                    </p>
                </div>
            </section>

            {/* 2. REGISTERED HKI CERTIFICATES */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#6D2323] mb-4">Registered HKI Certificates</h2>
                        <p className="text-[#6D2323]/70 max-w-2xl mx-auto">Our brands are officially registered under the Ministry of Law and Human Rights, Republic of Indonesia.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {legalCerts.map((cert, idx) => (
                            <div key={idx} className="bg-[#FEF9E1] p-6 rounded-xl shadow-lg border border-[#E5D0AC] hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5 group">
                                <div className="bg-white h-96 rounded-lg overflow-hidden mb-6 border border-gray-200 relative">
                                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-serif font-bold text-[#6D2323]">{cert.title}</h3>
                                    <p className="text-[#A31D1D] font-medium">{cert.subtitle}</p>
                                    <p className="text-[#6D2323]/60 text-sm mt-2">{cert.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TRAINING & CERTIFICATION */}
            <section className="py-24 px-6 bg-[#FEF9E1]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#6D2323] mb-4">Training & Certification</h2>
                        <p className="text-[#6D2323]/70">Our commitment to excellence through continuous professional development.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trainingCerts.map((cert, idx) => (
                            <div key={idx} className="bg-[#FEF9E1] p-6 rounded-xl shadow-lg border border-[#E5D0AC] hover:shadow-2xl transition duration-300 transform hover:-translate-y-0.5 group">
                                
                                <div className="bg-white h-72 rounded-lg overflow-hidden mb-6 border border-gray-200 relative flex items-center justify-center">
                                    
                                    {cert.image ? (
                                        <img 
                                            src={cert.image} 
                                            alt={cert.title} 
                                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
                                        />
                                    ) : (
                                        <div className="w-16 h-16 bg-[#A31D1D]/10 rounded-full flex items-center justify-center mx-auto shadow-md">
                                            {getIcon(cert.icon)} 
                                        </div>
                                    )}
                                </div>
                                
                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-serif font-bold text-[#6D2323]">{cert.title}</h3>
                                    <p className="text-[#A31D1D] font-medium">{cert.subtitle}</p>
                                    <p className="text-[#6D2323]/60 text-sm mt-2">{cert.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TRADE FAIRS & EXHIBITIONS (BLOCK TIMELINE BARU) */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-serif font-bold text-[#6D2323]">Trade Fairs & Exhibitions</h2>
                        <p className="text-[#6D2323]/70 max-w-3xl mx-auto">
                            Consistent presence at Indonesia's premier craft and trade exhibitions, connecting with international buyers and partners.
                        </p>
                    </div>

                    {/* Timeline Block Container (Diperlebar menjadi max-w-6xl) */}
                    <div className="space-y-12 max-w-6xl mx-auto">
                        {exhibitionData.map((group, index) => {
                            let IconComponent;
                            // Logika Ikon 
                            if (group.title.includes("Foundation")) {
                                IconComponent = Briefcase; 
                            } else if (group.title.includes("Expansion")) {
                                IconComponent = TrendingUp; 
                            } else {
                                IconComponent = Zap; 
                            }
                            
                            return (
                                <div 
                                    key={index} 
                                    className="relative flex flex-col md:flex-row shadow-2xl rounded-xl overflow-hidden transition duration-300 hover:scale-[1.01]"
                                >
                                    
                                    {/* Block Header (Maroon Left Side) - Centered & Styled */}
                                    <div className="w-full md:w-1/4 bg-[#6D2323] text-[#FEF9E1] p-6 flex flex-col justify-center items-center text-center relative overflow-hidden"> 
                                        
                                        {/* Background Dekoratif Ringan */}
                                        <div className="absolute inset-0 bg-white/5 opacity-5 mix-blend-overlay"></div>
                                        
                                        {/* Ikon Diperbesar */}
                                        <div className="p-4 rounded-full bg-[#A31D1D] mb-3 shadow-xl">
                                            <IconComponent className="w-10 h-10 text-white" />
                                        </div>

                                        {/* Tahun Diperbesar */}
                                        <p className="text-2xl font-serif font-bold tracking-wider">{group.years}</p>
                                    </div>
                                    
                                    {/* Block Content (Cream Right Side) */}
                                    <div className="w-full md:w-3/4 bg-[#FEF9E1] p-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                            {/* Map events dengan Logika Title/Subtitle */}
                                            {group.events.map((event, idx) => {
                                                // 1. Ambil teks di dalam kurung/dash untuk Subtitle
                                                const match = event.match(/\((.*?)\)| \- (.*)/); 
                                                const subtitle = match ? (match[1] || match[2] || '').trim() : '';

                                                // 2. Ambil Judul bersih (menghapus subtitle dari string event)
                                                let title = event.replace(/\((.*?)\)/, '').replace(/\- .*/, '').trim();
                                                
                                                // Penyesuaian agar teks tidak terpotong jika ada sisa
                                                if (title.includes("INACRAFT Exhibition")) title = "INACRAFT Exhibition";
                                                
                                                return (
                                                    <div key={idx} className="flex items-start space-x-3">
                                                        {/* Bullet Point Merah Kecil */}
                                                        <div className="w-2 h-2 bg-[#A31D1D] rounded-full mt-2 flex-shrink-0"></div>
                                                        
                                                        {/* Judul dan Subtitle */}
                                                        <div className="text-left">
                                                            {/* Baris 1: Judul Event (Font Bold) */}
                                                            <span className="text-[#6D2323] text-base leading-snug block font-bold">
                                                                {title}
                                                            </span>
                                                            
                                                            {/* Baris 2: Subtitle/Keterangan (Font Normal, Lebih Kecil) */}
                                                            {subtitle && (
                                                                <span className="text-[#6D2323]/70 text-sm leading-snug block">
                                                                    {subtitle}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. EVENT DOCUMENTATION (GALLERY DENGAN 22 GAMBAR, DENSE GRID) */}
            <section className="py-24 px-6 bg-[#FEF9E1] border-t border-[#E5D0AC]">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-serif font-bold text-[#6D2323] mb-12">
                        Event Documentation
                    </h2>
                    
                    {/* Gallery Grid: Grid 3 kolom (Mobile) hingga 6 kolom (Desktop), gap diperkecil */}
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-full mx-auto"> 
                        
                        {/* Memetakan 22 item */}
                        {imageIndices.map((item) => {
                            // Tinggi gambar diset kecil (10rem/160px) untuk kepadatan
                            const heightClass = "h-40"; 

                            return (
                                <div 
                                    key={item} 
                                    className={`${heightClass} col-span-1 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
                                >
                                    <img 
                                        src={`/images/doc_${item}.jpg`} 
                                        alt={`Exhibition Documentation ${item}`} 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 6. WHY TRUST US */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#6D2323]">Why International Buyers Trust Us</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Award, title: "Legally Protected Brands", text: "Both d'schön and Milioiki are registered trademarks, ensuring authentic and protected intellectual property." },
                            { icon: TrendingUp, title: "Proven Track Record", text: "Years of consistent exhibition participation and growing international presence since 2018." },
                            { icon: CheckCircle, title: "Export Ready", text: "Ministry of Trade certified professionals managing all export procedures and documentation." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#FEF9E1] p-8 rounded-xl shadow-sm text-center border-b-4 border-[#A31D1D] hover:-translate-y-1 transition-transform h-full flex flex-col items-center">
                                <div className="w-16 h-16 bg-[#A31D1D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-8 h-8 text-[#A31D1D]" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#6D2323] mb-3">{item.title}</h3>
                                <p className="text-[#6D2323]/70 text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Certifications;