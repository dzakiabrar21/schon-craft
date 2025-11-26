// src/pages/Contact.jsx
import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

// Data Kontak Statis dari PDF
const contactData = {
    address: 'Perum Taman Sentosa Blok H4/3, Cikarang, Bekasi, Jawa Barat, 17532 Indonesia',
    phone1: '+62 812 8000 1670',
    phone2: '+49 176 67875329',
    email1: 'dschon.craft@gmail.com',
    email2: 'etiknuryani03@gmail.com',
    instagram: '@schon.craft',
    hours: [
        { day: 'Mon - Fri', time: '08.00 AM - 3.30 PM (WIB)' },
        { day: 'Saturday', time: '08.00 AM - 3.00 PM (WIB)' },
        { day: 'Sunday', time: 'Closed' },
    ]
};

const GOOGLE_MAPS_LINK = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63449.13544657434!2d107.06315439010852!3d-6.319947135936991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b5beae01883%3A0xc4fae392b47e9cb0!2sTaman%20sentosa!5e0!3m2!1sid!2sid!4v1764135455108!5m2!1sid!2sid";
const whatsappLink = "https://wa.me/6281280001670";
    
const Contact = () => {
    return (
        <div className="bg-cream font-sans text-maroon min-h-screen">
            
            {/* 1. HERO BANNER CONTACT (Diperkecil: py-24/36 -> py-16/24) */}
            <section 
                className="relative bg-maroon text-cream py-16 md:py-24 px-6"
                style={{ backgroundImage: 'url(/images/contact_hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-maroon opacity-80"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-lg font-light max-w-3xl mx-auto">
                        We'd love to hear from you. Reach out for inquiries, collaborations, or bulk orders.
                    </p>
                </div>
            </section>

            {/* 2. CONTACT DETAILS & MAP */}
            <section className="max-w-7xl mx-auto py-20 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Kolom 1: Information */}
                    <div className="space-y-10">
                        <h2 className="text-3xl font-serif font-bold text-chili mb-4">
                            Official Information
                        </h2>
                        
                        {/* Address */}
                        <div className="flex items-start space-x-4">
                            <MapPin className="w-6 h-6 text-maroon mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-serif font-bold">Address</h3>
                                <p className="text-gray-700">{contactData.address}</p>
                            </div>
                        </div>

                        {/* Phone & WhatsApp */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-serif font-bold text-maroon">Phone Number / WhatsApp</h3>
                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-maroon mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-700 font-bold">{contactData.phone1} (Primary)</p>
                                    <p className="text-sm text-gray-500">Fast response via WhatsApp for inquiries.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-maroon mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-700">{contactData.phone2} (Secondary/EU Contact)</p>
                                </div>
                            </div>
                            <a 
                                href={whatsappLink} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-chili text-cream font-bold py-3 px-8 rounded-lg shadow-md hover:bg-maroon transition duration-300 text-sm uppercase tracking-widest mt-4"
                            >
                                Inquire via WhatsApp
                            </a>
                        </div>

                        {/* Email & Social Media */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-serif font-bold text-maroon">Email & Social Media</h3>
                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-maroon mt-1 flex-shrink-0" />
                                <p className="text-gray-700 font-bold">{contactData.email1} (Primary)</p>
                            </div>
                             <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-maroon mt-1 flex-shrink-0" />
                                <p className="text-gray-700">{contactData.email2} (Secondary)</p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Instagram className="w-6 h-6 text-maroon mt-1 flex-shrink-0" />
                                <p className="text-gray-700">{contactData.instagram}</p>
                            </div>
                        </div>

                    </div>

                    {/* Kolom 2: Operational Hours & Map */}
                    <div className="space-y-10">
                        
                        {/* Operational Hours */}
                        <div className="bg-beige p-8 rounded-lg shadow-xl">
                            <h3 className="text-xl font-serif font-bold text-maroon mb-4 flex items-center">
                                <Clock className="w-5 h-5 mr-3 text-chili" /> Operational Hours
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                {contactData.hours.map((item) => (
                                    <li key={item.day} className="flex justify-between border-b border-beige/80 pb-1 last:border-b-0">
                                        <span className="font-semibold">{item.day}</span>
                                        <span>{item.time}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-500 mt-4 italic">Time Zone: Western Indonesia Time (WIB)</p>
                        </div>

                        {/* Map Embed */}
                        <div className="rounded-xl shadow-lg overflow-hidden h-80 border-2 border-beige">
                            <iframe
                                src={GOOGLE_MAPS_LINK}
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <p className="text-center text-sm text-gray-600">
                            Visit us at our workshop in Cikarang, West Java.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;