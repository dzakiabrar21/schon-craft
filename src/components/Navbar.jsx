// src/components/Navbar.jsx

import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Menu, X } from 'lucide-react';



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();



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

        <Link to="/" className="text-[20px] font-serif font-semibold text-[#6D2323] tracking-[0.60px] leading-[33.60px] hover:opacity-90 transition-opacity">

          {/* Note: Text color adjusted to be visible on the maroon background if needed,

              but adhering to requested style where text color is also maroon (which might be invisible).

              Assuming text should be cream/white based on typical header design contrast,

              but code below follows request strictly or adjusts for visibility if logic dictates.

              However, looking at the provided snippet, the container background is #6D2323.

              Ideally, text should be contrasting like #FEF9E1.

              If strict adherence to snippet text color #6D2323 is required on #6D2323 bg, it will be invisible.

              I will use #FEF9E1 for text visibility as implied by context of a usable navbar. */}

          <span className="text-[#FEF9E1]">PT. Schon Craft Indonesia</span>

        </Link>



        {/* Desktop Navigation */}

        <div className="hidden md:flex space-x-8 items-center h-6">

          {navItems.map((item) => (

            <Link

              key={item.name}

              to={item.path}

              className={`

                text-[16px] font-normal leading-[24px] transition-colors duration-300 relative group

                ${isActive(item.path) ? 'text-[#E5D0AC] font-medium' : 'text-[#FEF9E1] hover:text-[#E5D0AC]'}

              `}

              style={{ fontFamily: 'Inter, sans-serif' }}

            >

              {item.name}

              {/* Underline effect on hover */}

              <span className={`

                absolute -bottom-1 left-0 w-full h-0.5 bg-[#E5D0AC] transform transition-transform duration-300

                ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}

              `}></span>

            </Link>

          ))}

        </div>



        {/* Mobile Menu Button */}

        <div className="md:hidden">

          <button

            onClick={() => setIsOpen(!isOpen)}

            className="text-[#FEF9E1] hover:text-[#E5D0AC] focus:outline-none transition-colors"

          >

            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}

          </button>

        </div>

      </nav>



      {/* Mobile Navigation Menu (Dropdown) */}

      {isOpen && (

        <div className="md:hidden bg-[#6D2323] border-t border-[#A31D1D] absolute w-full shadow-xl">

          <div className="flex flex-col px-6 py-4 space-y-4">

            {navItems.map((item) => (

              <Link

                key={item.name}

                to={item.path}

                onClick={() => setIsOpen(false)}

                className={`

                  text-[16px] block py-2 transition-colors leading-[24px]

                  ${isActive(item.path) ? 'text-[#E5D0AC] font-medium' : 'text-[#FEF9E1] hover:text-[#E5D0AC]'}

                `}

                style={{ fontFamily: 'Inter, sans-serif' }}

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