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
    email: 'dschon.craft@gmail.com',
    phone: '+62 857-7101-9071',
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
            Crafting with Heart
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

{/* 3. ARTISAN SECTION -  */}
<section className="py-24 px-6 bg-[#FEF9E1]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* KOLOM KIRI: FOTO (Tetap Dipertahankan karena visualnya sudah bagus) */}
      <div className="relative group">
          <div className="absolute inset-0 bg-[#A31D1D] rounded-xl transform translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="/images/knit3.jpg" alt="Artisan at work" className="w-full h-[500px] object-cover" />
          </div>
          {/* Badge 20+ tetap dipertahankan sebagai elemen bukti sosial (social proof) */}
          <div className="absolute -bottom-8 -right-8 bg-[#A31D1D] text-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block z-10">
              <p className="text-4xl font-serif font-bold mb-1">20+</p>
              <p className="text-sm font-medium opacity-90">Local Artisans Empowered</p>
          </div>
      </div>

      {/* KOLOM KANAN: TEKS BARU (Menghapus List & Mengganti Judul) */}
      <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-[#A31D1D] font-bold uppercase tracking-widest text-sm border-b-2 border-[#A31D1D] pb-1">
                The Soul of Our Brand
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#6D2323] leading-tight">
                The Beauty of Handcrafted Work
            </h2>
          </div>

          {/* Narasi Baru dari Owner - Menggunakan font-serif italic untuk kesan eksklusif */}
          <div className="space-y-6 text-[#6D2323]/90 leading-relaxed text-xl font-serif italic">
              <p>
                  "Each of our products is crafted using traditional crochet techniques that require patience and meticulous attention to detail."
              </p>
              <p>
                  "We collaborate with local artisans to ensure that each piece carries its own unique character and soul. Nothing handmade ever turns out exactly the same — that is the beauty of handcrafted work."
              </p>
          </div>

          {/* Garis dekoratif tambahan untuk mengisi ruang agar tidak terlihat kosong */}
          <div className="w-20 h-1 bg-[#A31D1D] opacity-30"></div>
      </div>
  </div>
</section>

      {/* 5. VALUES SECTION */}
      <section className="py-10 px-6 bg-[#FEF9E1]">
        <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#6D2323]">Our Values</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: Heart, title: "Passion & Pride", text: "Every stitch is made with love and dedication." },
                { icon: Users, title: "Community First", text: "Empowering local artisans." },
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

{/* 6. Simplified Get In Touch */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-4xl mx-auto bg-[#FFFDF6] p-8 rounded-2xl shadow-sm border border-[#EDE6DA]">
    <div className="text-center mb-6">
      <h2 className="text-4xl font-serif font-bold text-[#6D2323]">Get In Touch</h2>
      <p className="text-[#6D2323]/70 mt-2">We'd love to hear from you. Reach out for inquiries or collaborations.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="flex items-start gap-3 p-3 rounded-md">
        <div className="bg-[#A31D1D] p-2 rounded-md text-white inline-flex"><Mail className="w-5 h-5" /></div>
        <div>
          <div className="text-sm font-semibold text-[#6D2323]">Email</div>
          <div className="text-sm text-[#6D2323]/80">{contactData.email}</div>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 rounded-md">
        <div className="bg-[#A31D1D] p-2 rounded-md text-white inline-flex"><Phone className="w-5 h-5" /></div>
        <div>
          <div className="text-sm font-semibold text-[#6D2323]">WhatsApp</div>
          <div className="text-sm text-[#6D2323]/80">{contactData.phone}</div>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 rounded-md">
        <div className="bg-[#A31D1D] p-2 rounded-md text-white inline-flex"><Clock className="w-5 h-5" /></div>
        <div>
          <div className="text-sm font-semibold text-[#6D2323]">Hours</div>
          <div className="text-sm text-[#6D2323]/80">{contactData.hours}</div>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a href="https://wa.me/6285771019071" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#A31D1D] text-white px-6 py-3 rounded-md font-semibold inline-flex items-center justify-center">
        <MessageCircle className="w-4 h-4 mr-2" /> Contact via WhatsApp
      </a>

      <a href="mailto:dschon.craft@gmail.com" className="w-full sm:w-auto border-2 border-[#A31D1D] text-[#6D2323] px-6 py-3 rounded-md font-semibold inline-flex items-center justify-center">
        <Mail className="w-4 h-4 mr-2" /> Send an Email
      </a>
    </div>
  </div>
</section>

      {/* Spacer before footer */}
      <div className="h-16 bg-white"></div>
    </div>
  );
};

export default About;