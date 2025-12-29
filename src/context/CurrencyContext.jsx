// src/context/CurrencyContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Inisialisasi Context
const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  // Set default ke IDR
  const [currency, setCurrency] = useState('IDR');

  // 2. Definisi Kurs (Basis 1 Rupiah)
  const rates = {
    IDR: 1,
    USD: 1 / 15500, // 1 IDR = sekian USD
    EUR: 1 / 17000  // 1 IDR = sekian EUR
  };

  const symbols = {
    IDR: 'Rp',
    USD: '$',
    EUR: '€'
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates, symbols }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// 3. Hook kustom agar komponen lain bisa memanggil useCurrency()
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};