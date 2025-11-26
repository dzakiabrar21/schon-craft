// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Komponen ini memaksa halaman untuk scroll ke posisi (0, 0)
 * setiap kali terjadi perubahan path (navigasi rute).
 */
const ScrollToTop = () => {
  // Mengambil objek lokasi saat ini dari React Router
  const { pathname } = useLocation();

  // Efek ini akan dijalankan setiap kali 'pathname' (rute) berubah
  useEffect(() => {
    // Scroll ke atas halaman (posisi x=0, y=0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponen ini tidak merender elemen apa pun
};

export default ScrollToTop;