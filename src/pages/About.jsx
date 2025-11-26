// src/pages/About.jsx
import React from 'react';
import TeamCard from '../components/TeamCard';
import Timeline from '../components/Timeline';
import { teamMembers, timelineEvents } from '../data/products';
import { Heart, Users, Globe, CheckCircle, MessageCircle, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Data Kontak Statis
  const contactData = {
    address: 'Perum Taman Sentosa Blok H4/3, Cikarang, Bekasi, Jawa Barat, 17532 Indonesia',
    email: 'dschon.craft@gmail.com',
    phone: '+62 812 8000 1670',
    hours: 'Monday - Friday: 08:00 - 15:30'
  };

  return (
    <div className="bg-[#FEF9E1] font-sans text-[#6D2323]">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[60vh] flex items-center justify-center p-6"
        style={{ 
            backgroundImage: 'url(/images/about_hero.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-[#6D2323]/80 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="bg-[#A31D1D] text-white px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[#FEF9E1]">
            Crafting with Heart in Cikarang
          </h1>
          <p className="text-lg text-[#FEF9E1]/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Established in 2018 as Schön Craft, rebranded to PT. Schon Craft Indonesia in 2023. We weave Indonesian heritage into every stitch.
          </p>
        </div>
      </section>

      {/* 2. TIMELINE SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12 space-y-3">
            <h2 className="text-4xl font-serif font-bold text-[#6D2323]">Our Journey</h2>
            <p className="text-[#6D2323]/70 text-base font-normal">From humble beginnings to international recognition</p>
        </div>
        <Timeline events={timelineEvents} />
      </section>

      {/* 3. ARTISAN SECTION */}
      <section className="py-24 px-6 bg-[#FEF9E1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
                <div className="absolute inset-0 bg-[#A31D1D] rounded-xl transform translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                    <img src="/images/artisan_main.jpg" alt="Pengrajin merajut" className="w-full h-[500px] object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-[#A31D1D] text-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block z-10">
                    <p className="text-4xl font-serif font-bold mb-1">20+</p>
                    <p className="text-sm font-medium opacity-90">Local Artisans Empowered</p>
                </div>
            </div>

            <div className="space-y-8">
                <span className="text-[#A31D1D] font-bold uppercase tracking-widest text-sm border-b-2 border-[#A31D1D] pb-1">The Soul of Our Brand</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#6D2323] leading-tight">Empowering 20 Local Artisans</h2>
                <p className="text-[#6D2323]/80 leading-relaxed text-lg">
                    We are more than a brand. We empower a community of 20 skilled women in Cikarang, turning craftsmanship into sustainable income.
                </p>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-[#E5D0AC]">
                    <h3 className="text-xl font-serif font-bold text-[#6D2323] mb-6 flex items-center">
                        <Heart className="w-6 h-6 text-[#A31D1D] mr-3" />
                        Our Community Impact
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Fair wages and flexible working hours",
                            "Continuous skill development programs",
                            "Supporting local families & traditions",
                            "Creating economic opportunities"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-[#6D2323]/80">
                                <CheckCircle className="w-5 h-5 text-[#A31D1D] mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif font-bold text-[#6D2323]">Meet The Team</h2>
            <p className="text-[#6D2323]/70 max-w-2xl mx-auto text-lg">The passionate leaders behind PT. Schon Craft Indonesia's success.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
            ))}
        </div>
      </section>

      {/* 5. VALUES SECTION */}
      <section className="py-24 px-6 bg-[#FEF9E1]">
        <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#6D2323]">Our Values</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: Heart, title: "Passion & Pride", text: "Every stitch is made with love and dedication." },
                { icon: Users, title: "Community First", text: "Empowering artisans, creating sustainable livelihoods." },
                { icon: Globe, title: "Export Excellence", text: "Committed to international quality standards." }
            ].map((val, idx) => (
                <div key={idx} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition border-t-4 border-[#A31D1D] text-center group cursor-default">
                    <div className="w-16 h-16 bg-[#A31D1D]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#A31D1D] transition-colors duration-300">
                        <val.icon className="w-8 h-8 text-[#A31D1D] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#6D2323] mb-3">{val.title}</h3>
                    <p className="text-[#6D2323]/70 text-sm leading-relaxed">{val.text}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 6. GET IN TOUCH SECTION (UPDATED DENGAN MAPS IFRAME) */}
      <section className="pt-24 px-6 bg-white"> 
        <div className="max-w-7xl mx-auto">
            {/* Judul Tengah */}
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-5xl font-serif font-bold text-[#6D2323]">Get In Touch</h2>
                <p className="text-[#6D2323]/70 text-lg">We'd love to hear from you. Reach out for inquiries, collaborations, or bulk orders.</p>
            </div>

            {/* Container 2 Kolom: Info Kontak & Peta */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                
                {/* Kiri: Contact Information (Krem #FFFDE7) */}
                <div className="bg-[#FFFDE7] p-10 rounded-xl shadow-md border border-[#E5D0AC] space-y-8 h-full">
                    <h3 className="text-3xl font-serif font-bold text-[#6D2323] mb-6 border-b border-[#E5D0AC] pb-4">Contact Information</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#A31D1D] p-3 rounded-lg shadow-md">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-[#6D2323]">Address</h4>
                                <p className="text-[#6D2323]/80 mt-1 leading-relaxed">{contactData.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-[#A31D1D] p-3 rounded-lg shadow-md">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-[#6D2323]">Email</h4>
                                <p className="text-[#6D2323]/80 mt-1">{contactData.email}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-[#A31D1D] p-3 rounded-lg shadow-md">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-[#6D2323]">WhatsApp</h4>
                                <p className="text-[#6D2323]/80 mt-1">{contactData.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-[#A31D1D] p-3 rounded-lg shadow-md">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-[#6D2323]">Business Hours</h4>
                                <p className="text-[#6D2323]/80 mt-1">{contactData.hours}</p>
                                <p className="text-[#6D2323]/60 text-sm mt-1">Weekend: Closed</p>
                            </div>
                        </div>
                        
                        {/* Tombol Contact Us via WhatsApp di dalam kontainer kontak (DIKEMBALIKAN karena bagian 6) */}
                        <a 
                            href="https://wa.me/6281280001670" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-[#A31D1D] text-white px-8 py-3 rounded-lg font-bold text-base shadow-md hover:bg-[#6D2323] transition duration-300 flex items-center justify-center mt-6"
                        >
                            <MessageCircle className="w-5 h-5 mr-3" />
                            Contact Us via WhatsApp
                        </a>
                    </div>
                </div>

                {/* Kanan: Map IFRAME */}
                <div className="rounded-xl shadow-md overflow-hidden h-full min-h-[450px]"> 
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63449.13544657434!2d107.06315439010852!3d-6.319947135936991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b5beae01883%3A0xc4fae392b47e9cb0!2sTaman%20sentosa!5e0!3m2!1sid!2sid!4v1764135455108!5m2!1sid!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>


{/* 7. CTA BUTTON BAR (Modifikasi: Tombol Mailto Langsung) */}
      <section className="pt-8 px-6 bg-white"> 
        {/* Kotak CTA (Lebar max-w-3xl, padding internal p-8) */}
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-[#6D2323] p-8 rounded-xl shadow-2xl border-4 border-[#A31D1D]">
             <p className="text-[#FEF9E1]/90 text-lg max-w-2xl mx-auto">
                Whether you're a retailer, distributor, or individual customer, we'd love to discuss how PT. Schon Craft Indonesia can meet your needs with our handcrafted excellence.
            </p>
            
            {/* Hanya Tombol Email, di tengah */}
            <div className="flex justify-center"> 
                
                {/* Tombol 2: Email (Menggunakan <a> dengan mailto:) */}
                <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dschon.craft@gmail.com"
                    // Teks dan styling tombol kecil
                    className="w-full sm:w-auto bg-transparent border-2 border-[#FEF9E1] text-[#FEF9E1] px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#FEF9E1] hover:text-[#6D2323] transition duration-300 flex items-center justify-center"
                >
                    <Mail className="w-5 h-5 mr-3" />
                    Send an Email
                </a>
            </div>
            
        </div>
      </section>

      {/* SPACER DIV: Jarak Pemisah sebelum Footer */}
      <div className="h-16 bg-white"></div>
    </div>
  );
};

export default About;