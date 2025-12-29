// src/pages/Contact.jsx
import React from 'react';
import { Clock, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const contactData = {
    phone1: '+62 857-7101-9071',
    phone2: '+62 812 8000 1670',
    email1: 'dschon.craft@gmail.com',
    instagram: '@schon.craft',
    instagram2: '@milioiki',
    hours: [
        { day: 'Mon - Fri', time: '08.00 AM - 3.30 PM (WIB)' },
        { day: 'Saturday', time: '08.00 AM - 3.00 PM (WIB)' },
        { day: 'Sunday', time: 'Closed' },
    ]
};

const whatsappLink = "https://wa.me/6285771019071";
    
const Contact = () => {
    return (
        <div className="bg-[#FEF9E1] font-sans text-[#6D2323] min-h-screen">
            
            {/* 1. HERO BANNER (Tetap menggunakan image background agar identik) */}
            <section 
                className="relative bg-[#6D2323] text-[#FEF9E1] py-16 md:py-24 px-6"
                style={{ 
                    backgroundImage: 'url(/images/contact_hero.jpg)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }}
            >
                <div className="absolute inset-0 bg-[#6D2323] opacity-85"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-lg font-light max-w-2xl mx-auto opacity-90">
                        We'd love to hear from you. Reach out for inquiries, collaborations, or bulk orders.
                    </p>
                </div>
            </section>

            {/* 2. CONTACT DETAILS (Menggunakan gaya komponen kecil/blok seperti sebelumnya) */}
            <section className="max-w-6xl mx-auto py-20 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Kolom 1: Official Information (Identik dengan versi yang Anda suka) */}
                    <div className="space-y-10">
                        <h2 className="text-3xl font-serif font-bold text-[#A31D1D] mb-8 border-b border-[#6D2323]/10 pb-4">
                            Official Information
                        </h2>
                        
                        {/* Phone & WhatsApp Block */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-[#A31D1D] p-3 rounded-lg shadow-md flex-shrink-0">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold">Phone Number / WhatsApp</h3>
                                    <p className="text-[#6D2323] font-bold mt-1 text-lg">{contactData.phone1}</p>
                                   
                                    <p className="text-[#6D2323]/80 mt-2">{contactData.phone2} (Secondary)</p>
                                </div>
                            </div>
                        </div>

                        {/* Email & Social Media Block */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-[#A31D1D] p-3 rounded-lg shadow-md flex-shrink-0">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold">Email Support</h3>
                                    <p className="text-[#6D2323] font-bold mt-1">{contactData.email1}</p>
                                    
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#A31D1D] p-3 rounded-lg shadow-md flex-shrink-0">
                                    <Instagram className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold">Follow Our Journey</h3>
                                    <p className="text-[#6D2323] font-medium mt-1">{contactData.instagram}</p>
                                    <p className="text-[#6D2323] font-medium mt-1">{contactData.instagram2}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kolom 2: Operational Hours (Menyesuaikan warna krem agar selaras) */}
                    <div className="space-y-8">
                        <div className="bg-[#FFFDE7] p-8 md:p-10 rounded-2xl shadow-xl border border-[#E5D0AC]">
                            <h3 className="text-2xl font-serif font-bold text-[#6D2323] mb-6 flex items-center">
                                <Clock className="w-6 h-6 mr-3 text-[#A31D1D]" /> 
                                Operational Hours
                            </h3>
                            <ul className="space-y-4 text-[#6D2323]">
                                {contactData.hours.map((item) => (
                                    <li key={item.day} className="flex justify-between border-b border-[#6D2323]/10 pb-2 last:border-b-0">
                                        <span className="font-semibold">{item.day}</span>
                                        <span className="text-sm">{item.time}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[11px] text-[#6D2323]/50 mt-6 italic uppercase tracking-wider text-center">
                                Time Zone: Western Indonesia Time (WIB)
                            </p>
                        </div>

                        {/* Pengganti Maps: Tombol CTA Besar agar tidak kosong */}
                        <div className="pt-4">
                            <a 
                                href={whatsappLink} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#A31D1D] text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#6D2323] transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Start Inquiry
                            </a>
                            <p className="text-center text-xs text-[#6D2323]/60 mt-4">
                                Our artisans are based in Cikarang, West Java, Indonesia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;