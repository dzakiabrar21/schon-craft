/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fef9e1',      // Background Utama
        beige: '#e5d0ac',      // Background Card/Section Sekunder
        maroon: '#6d2323',     // Teks Utama & Footer
        chili: '#a31d1d',      // Tombol/Aksen (CTA)
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Untuk Judul (Mewah)
        sans: ['Lato', 'sans-serif'],           // Untuk Body Text
      }
    },
  },
  plugins: [],
}