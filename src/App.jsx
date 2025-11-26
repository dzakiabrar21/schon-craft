// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <-- TAMBAHAN: Komponen Scroll

// IMPORT KOMPONEN NYATA DARI FOLDER PAGES
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Catalog from './pages/Catalog.jsx';
import Certifications from './pages/Certifications.jsx';
import Contact from './pages/Contact.jsx';


function App() {
  return (
    <Router>
        {/* TEMPATKAN SCROLLTOTOPO DI SINI */}
        <ScrollToTop /> 
        
      <div className="bg-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            {/* TODO: Tambahkan Product Detail Route, e.g., /catalog/:id */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;