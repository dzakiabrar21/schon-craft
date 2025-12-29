// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import Context Provider untuk Konversi Mata Uang
import { CurrencyProvider } from './context/CurrencyContext';

// IMPORT HALAMAN UTAMA
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Catalog from './pages/Catalog.jsx';
import Certifications from './pages/Certifications.jsx';
import Contact from './pages/Contact.jsx';

// IMPORT HALAMAN BARU: Detail Produk (Full Page Style)
import ProductDetail from './pages/ProductDetail.jsx';

function App() {
  return (
    /* Membungkus aplikasi dengan CurrencyProvider agar status mata uang 
       bisa diakses di Navbar, Home, Catalog, dan ProductDetail.
    */
    <CurrencyProvider>
      <Router>
        {/* Mengatur agar setiap perpindahan halaman otomatis scroll ke atas */}
        <ScrollToTop /> 
        
        {/* Menggunakan warna background cream yang konsisten (#FEF9E1) */}
        <div className="bg-[#FEF9E1] min-h-screen flex flex-col font-sans">
          {/* Navbar sekarang bisa mengubah mata uang secara global */}
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* RUTE BARU: Menampilkan halaman detail produk berdasarkan ID.
                URL akan terlihat seperti: /product/S-Freesia
              */}
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CurrencyProvider>
  );
}

export default App;