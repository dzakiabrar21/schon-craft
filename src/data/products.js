// src/data/products.js

export const products = [
  // --- SHOES ---
  {
    id: "S-Freesia",
    name: "Freesia Shoe",
    category: "shoe",
    brand: "Milioiki", // Asumsi dari gambar
    priceRange: "USD 25-35",
    description: "An elegant crochet shoe featuring delicate floral patterns. Perfect for spring and summer collections.",
    material: "Premium Cotton Yarn",
    image: "/images/freesia.jpg"
  },
  {
    id: "S-Spartacus",
    name: "Spartacus Boots",
    category: "shoe",
    brand: "d'schön",
    priceRange: "IDR 150,000-200,000",
    description: "Stylish boots design making it easy to pair with various outfits.",
    material: "Poly Yarn",
    image: "/images/spartacus.jpg"
  },
  {
    id: "S-Pakarena",
    name: "Pakarena Shoes",
    category: "shoe",
    brand: "d'schön",
    priceRange: "IDR 200,000-250,000",
    description: "Design that combines traditional and modern elements with gradient dyeing.",
    material: "Poly Yarn (Gradient)",
    image: "/images/pakarena.png"
  },
  {
    id: "S-Marina",
    name: "Marina Sandals",
    category: "shoe",
    brand: "d'schön",
    priceRange: "IDR 120,000-150,000",
    description: "Comfortable handcrafted sandals perfect for daily wear.",
    material: "Poly Yarn",
    image: "/images/marina.jpg"
  },
  {
    id: "S-Terra",
    name: "Terra Slip-Ons",
    category: "shoe",
    brand: "d'schön",
    priceRange: "IDR 180,000-220,000",
    description: "Easy slip-on design with durable sole and breathable crochet upper.",
    material: "Poly Yarn",
    image: "/images/terra.jpg"
  },

  // --- BAGS ---
  {
    id: "B-Camila",
    name: "Camila Tote",
    category: "bag",
    brand: "Milioiki",
    priceRange: "USD 30-45",
    description: "Simple yet elegant design with timeless appeal.",
    material: "Premium Thread",
    image: "/images/camila.png"
  },
  {
    id: "B-Net",
    name: "Net Bag - Summer Edition",
    category: "bag",
    brand: "Milioiki",
    priceRange: "USD 18-25",
    description: "Made from poly yarn, known for its strength and flexibility.",
    material: "Poly Yarn",
    features: ["Summer"], // Tag untuk filter
    image: "/images/bag_net.png"
  },
  {
    id: "B-Blossom",
    name: "Blossom Clutch",
    category: "bag",
    brand: "Milioiki",
    priceRange: "USD 35-50",
    description: "Elegant clutch with floral motifs.",
    material: "Poly Yarn",
    image: "/images/bag_blossom.png"
  },
  {
    id: "B-Heritage",
    name: "Heritage Woven Tote",
    category: "bag",
    brand: "Milioiki",
    priceRange: "USD 40-55",
    description: "Combining traditional weaving with modern tote functionality.",
    material: "Poly Yarn & Leather",
    image: "/images/bag_heritage.png"
  },
  {
    id: "B-Urban",
    name: "Urban Crossbody",
    category: "bag",
    brand: "Milioiki",
    priceRange: "USD 28-38",
    description: "Practical crossbody bag for urban lifestyle.",
    material: "Leather & Yarn",
    image: "/images/bag_urban.png"
  },
  {
    id: "B-Artisan",
    name: "Artisan Bucket Bag",
    category: "bag",
    brand: "Milioiki",
    priceRange: "USD 45-60",
    description: "Unique bucket shape with intricate patterns.",
    material: "Poly Yarn",
    image: "/images/bag_artisan.jpg"
  },
  {
    id: "B-Coastal",
    name: "Coastal Mini Bag",
    category: "bag",
    brand: "Milioiki",
    priceRange: "USD 22-32",
    description: "Small and light, perfect for beach walks.",
    material: "Poly Yarn",
    features: ["Summer"],
    image: "/images/bag_coastal.png"
  }
];


// --- TEAM MEMBERS ---
export const teamMembers = [
  {
    name: "Etik Nuryani",
    role: "Chief Executive Officer (CEO)",
    desc: "Visionary leader with export certification, guiding PT. Schon Craft Indonesia since 2018.",
    image: "/images/etik.png"
  },
  {
    name: "Hanan Fitri Izdihar",
    role: "Chief Operating Officer (COO)",
    desc: "Orchestrates daily operations, ensuring quality control and seamless production processes across our artisan community.",
    image: "/images/hanan.png"
  },
  {
    name: "Alya Nur Azizah",
    role: "Chief Design Officer (CDO)",
    desc: "Creative force behind our collections, blending traditional Indonesian motifs with contemporary fashion trends.",
    image: "/images/alya.png"
  }
];

// src/data/products.js (Tambahkan di bagian paling bawah)

export const timelineEvents = [
  {
    year: 2018,
    title: "Foundation",
    description: "Started as Schön Craft, a small team of passionate artisans in Cikarang."
  },
  {
    year: 2023,
    title: "Transformation",
    description: "Rebranded as PT. Schon Craft Indonesia, formalizing our commitment to excellence and community. HKI trademark certificates issued."
  },
  {
    year: 2025,
    title: "Global Reach",
    description: "Serving global demand with 20 skilled artisans and two premium brands (d'schön & Milioiki). Strategically expanding export networks."
  },
];

// src/data/products.js (Tambahkan di bagian paling bawah)

// src/data/products.js (UPDATE BAGIAN INI)


export const exhibitionData = [
    // === 1. The Foundation Years (2018 - 2019) ===
    {
        title: "The Foundation Years",
        years: "2018 - 2019",
        events: [
            // 2018
            "Bazaar Citos (Cilandak Town Square Jakarta) - Dec 2018",
            // 2019
            "Exhibition ITT Expo 2019 in Bali - April 2019",
            "Bazaar in Gedung Manggala Wana Bakti Jakarta - April 2019",
            "Bazaar in Gedung Kementerian Kelautan - April 2019",
            "Bazaar Citos Jakarta - April 2019",
            "Exhibition Inacraft in JCC - April 2019",
            "Exhibition in Gedung Kementerian Perindustrian - May 2019",
            "Bazaar Akbar Ramadhan in Kementerian Lingkungan Hidup dan Kehutanan RI - May 2019",
            "Exhibition Gebyar IPPKINDO 9th Expo in JCC - June 2019",
            "Exhibition Indonesia Product Expo 2019 in City Point Malang - July 2019",
            "Exhibition in kantor Pemkab Bekasi - Sep 2019",
            "Bazaar produk unggulan in Gedung Manggala Wana Bakti - Sep 2019",
            "Bazaar DWP KKP - Oct 2019",
            "Bazaar in Gedung Sapta Pesona - Oct 2019",
            "Pameran Crafina 2019 in JCC - Oct 2019",
            "Bazaar in Gedung Sapta Pesona - Nov 2019",
            "Bazaar HUT Darmawanita KLHK 2019 - Dec 2019",
        ]
    },

    // === 2. Post-Pandemic Expansion (2020 - 2023) ===
    {
        title: "Post-Pandemic Expansion",
        years: "2020 - 2023",
        events: [
            // 2020
            "Exhibition TILATEX Expo in Jogja City Mall - Yogyakarta - March 2020",
            // 2022
            "Pameran di Ibis Hotel Cikarang - Nov 2022",
            // 2023
            "Bazaar DWP KKP - Jul 2023",
            "Pameran di Gedung Dinas Pariwisata Kab. Bekasi - Jul 2023",
            "Bazaar Muharram fair 1445 H di Gedung Beacukai Bekasi - Jul 2023",
            "Mini Bazaar DWP DJP - Agust 2023",
            "Bazaar Hut ke-77 Perwita Wana Kencana Pusat Kementerian Lingkungan Hidup dan Kehutanan RI - Sep 2023",
            "Pameran Inacraft di JCC - Okt 2023",
        ]
    },

    // === 3. Current Focus & Future (2024 - 2025) ===
    {
        title: "Current Focus & Future",
        years: "2024 - 2025",
        events: [
            // 2024
            "Pameran Inacraft di JCC - Maret 2024",
            "Bazaar MTQ ke-38 di Pemda Kab. Bekasi - Mei 2024",
            "Pameran PKJB di Trans Studio Bandung - Juni 2024",
            "Bazaar di Hotel Nuaza Cikarang - Jul 2024",
            "Mengisi outlet Dekranasda Aeon Mall Deltamas - Maret 2024 -", // Dipertahankan seperti data Anda
            // 2025 (Upcoming)
            "Pameran Inacraft di JCC - Februari 2025",
            "Bazaar DWP KEMDIKSAINTEK - April 2025",
            "Bazaar The Sultan Hotel & Residence Jakarta - May 2025",
        ]
    }
];

export const certificationData = [
    // --- HKI CERTIFICATES (Legal) ---
    {
        title: "HKI Merek Certificate",
        subtitle: "Official Brand Registration for d'schön",
        type: "legal",
        image: "/images/hki_dschon.png",
        details: "Registered under the Ministry of Law and Human Rights, Republic of Indonesia. IDM000639902"
    },
    {
        title: "HKI Merek Certificate",
        subtitle: "Official Brand Registration for Milioiki",
        type: "legal",
        image: "/images/hki_milioiki.png",
        details: "Registered under the Ministry of Law and Human Rights, Republic of Indonesia. IDM00117811"
    },
    
    // --- TRAINING & CERTIFICATION (Tambahan Image Path) ---
    {
        title: "Agro Industry Development (IKM)", // Sesuai PDF
        subtitle: "Dinas Perindustrian Kab. Bekasi",
        type: "training",
        icon: "TrendingUp", // Penanda ikon
        image: "/images/cert_training_ikm.png" // <-- PATH DITAMBAHKAN
    },
    {
        title: "Export Procedures Training",
        subtitle: "Ministry of Trade (PPEJP), Aug 2024",
        type: "training",
        icon: "FileText",
        image: "/images/cert_training_export_proc.png" // <-- PATH DITAMBAHKAN
    },
    {
        title: "How to Start Exporting",
        subtitle: "Ministry of Trade (PPEJP), May 2024",
        type: "training",
        icon: "Award",
        image: "/images/cert_training_how_to_start.png" // <-- PATH DITAMBAHKAN
    },
];