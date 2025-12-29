import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react'; // Tambahkan ChevronDown
import { useCurrency } from '../context/CurrencyContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false); // State untuk mengontrol dropdown mata uang
  const location = useLocation();
  const { currency, setCurrency } = useCurrency();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#6D2323] shadow-lg sticky top-0 z-50 font-sans">
      <nav className="max-w-[1430px] mx-auto px-6 md:px-[107px] h-20 flex justify-between items-center">
        
        {/* Logo Brand */}
        <Link to="/" className="text-[20px] font-serif font-semibold hover:opacity-90 transition-opacity">
          <span className="text-[#FEF9E1]">PT. Schon Craft Indonesia</span>
        </Link>

        {/* Desktop Navigation & Currency Selector */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 items-center h-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[16px] transition-all relative group ${
                  isActive(item.path) ? 'text-[#E5D0AC] font-medium' : 'text-[#FEF9E1] hover:text-[#E5D0AC]'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#E5D0AC] transition-transform ${
                  isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* ELEGANT CURRENCY DROPDOWN */}
          <div className="relative ml-4 pl-6 border-l border-[#E5D0AC]/30">
            <button 
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              onBlur={() => setTimeout(() => setIsCurrencyOpen(false), 200)} // Tutup saat klik di luar
              className="flex items-center space-x-2 text-[#FEF9E1] hover:text-[#E5D0AC] transition-colors font-bold text-[14px] outline-none"
            >
              <span>{currency}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCurrencyOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Floating Menu List */}
            {isCurrencyOpen && (
              <div className="absolute right-0 mt-3 w-28 bg-[#6D2323] border border-[#E5D0AC]/30 rounded-lg shadow-2xl py-2 overflow-hidden animate-in fade-in zoom-in duration-200 z-[60]">
                {['USD', 'EUR', 'IDR'].map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      setCurrency(cur);
                      setIsCurrencyOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[13px] transition-colors ${
                      currency === cur 
                        ? 'bg-[#A31D1D] text-[#E5D0AC] font-bold' 
                        : 'text-[#FEF9E1] hover:bg-[#A31D1D]/50 hover:text-[#E5D0AC]'
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button & Select */}
        <div className="md:hidden flex items-center space-x-4">
          <select 
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent text-[#E5D0AC] text-[14px] font-bold border-none outline-none focus:ring-0 cursor-pointer"
          >
            <option value="USD" className="bg-[#6D2323]">USD</option>
            <option value="EUR" className="bg-[#6D2323]">EUR</option>
            <option value="IDR" className="bg-[#6D2323]">IDR</option>
          </select>
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#FEF9E1]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#6D2323] border-t border-[#A31D1D] absolute w-full shadow-xl z-50">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-[16px] block py-2 ${isActive(item.path) ? 'text-[#E5D0AC] font-medium' : 'text-[#FEF9E1]'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;