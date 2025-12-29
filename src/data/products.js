// src/data/products.js

// src/data/products.js

// src/data/products.js

// src/data/products.js

// src/data/products.js

export const products = [
  // --- BAGS (BRAND: MILIOIKI) ---
{
    id: "B-Schmette-Small",
    name: "Schmette Bag (small)",
    category: "bag",
    brand: "Milioiki",
    basePrice: 695000,
    sizes: "Small",
    description: "A mini crochet bag with a compact silhouette, crafted from poly yarn and finished with a genuine cow leather sling. Perfect for carrying your essential items.",
    material: "Poly Yarn finished with a Genuine Cow Leather Sling",
    variants: [
      { 
        colorName: "Terra cotta + Sand", 
        colorCodes: ["#E2725B", "#C2B280"], 
        images: ["/images/schmette-sm-terra-sand.png", 
                  "/images/schmette-sm-terra-sand-2.jpg",
                  "/images/schmette-sm-terra-sand-3.jpg",
                  "/images/schmette-sm-terra-sand-4.jpg"
        ] 
      },
      { 
        colorName: "Brick red + Dodger Blue", 
        colorCodes: ["#CB4154", "#1E90FF"], 
        images: ["/images/schmette-sm-brick-blue.png"] 
      },
      { 
        colorName: "Dark brown + Cool Grey", 
        colorCodes: ["#5D4037", "#8E9191"], 
        images: ["/images/schmette-sm-brown-grey.png"] 
      },
      { 
        colorName: "Cobalt Blue + Turquoise", 
        colorCodes: ["#0047AB", "#40E0D0"], 
        images: ["/images/schmette-sm-cobalt-turquoise.png"] 
      }
    ],
    details: `Category : Small bag
Dimensions : 12 x 9 x 10/16 cm
Body Material : Poly Yarn
Strap Material : Genuine Cow Leather`,
    maintenance: "Avoid washing crocheted bags in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. In addition to washing, regularly clean the knitted bag with a soft brush or cloth to remove dust and light dirt."
},
{
    id: "B-Schmette-Medium",
    name: "Schmette Bag (medium)",
    category: "bag",
    brand: "Milioiki",
    basePrice: 835000,
    sizes: "Medium",
    description: "A mini crochet bag with a compact silhouette, crafted from poly yarn and finished with a genuine cow leather sling. Perfect for carrying your essential items.",
    material: "Poly Yarn finished with a Genuine Cow Leather Sling",
    variants: [
      { 
        colorName: "Dark brown + Cool Grey", 
        colorCodes: ["#5D4037", "#8E9191"], 
        images: ["/images/schmette-sm-brown-grey.png"] 
      },
      { 
        colorName: "Terra cotta + Sand", 
        colorCodes: ["#E2725B", "#C2B280"], 
        images: ["/images/schmette-sm-terra-sand.png", 
                  "/images/schmette-sm-terra-sand-2.jpg",
                  "/images/schmette-sm-terra-sand-3.jpg",
                  "/images/schmette-sm-terra-sand-4.jpg"
        ] 
      },
      { 
        colorName: "Brick red + Dodger Blue", 
        colorCodes: ["#CB4154", "#1E90FF"], 
        images: ["/images/schmette-sm-brick-blue.png"] 
      },
      { 
        colorName: "Cobalt Blue + Turquoise", 
        colorCodes: ["#0047AB", "#40E0D0"], 
        images: ["/images/schmette-sm-cobalt-turquoise.png"] 
      }
    ],

    details: `Category : Small bag
              Dimensions : 23 x 9 x 15/20 cm
              Body Material : Poly Yarn
              Strap Material : Genuine Cow Leather`,
    maintenance: "Avoid washing crocheted bags in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. In addition to washing, regularly clean the knitted bag with a soft brush or cloth to remove dust and light dirt."
},
  {
    id: "B-Rose",
    name: "Rose Bag",
    category: "bag",
    brand: "Milioiki",
    basePrice: 598000,
    sizes: "Small Bag",
    description: "A rose-shaped sling bag paired with a genuine cow leather handle.",
    material: "Soft Poly Yarn with Refined Cow Leather Sling",
    variants: [
      {
        colorName: "Terra cotta",
        colorCode: "#E35336",
        images: [         
          "/images/rose-maroon.png",
          "/images/rose-maroon-2.png",
          "/images/rose-maroon-3.jpg"]
      }
    ],
    details: `Category : Small bag
              Dimensions : Dia 19 x 5 cm
              Body Material : Poly Yarn
              Strap Material : Genuine Cow Leather`,
    maintenance: "Avoid washing crocheted bags in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. In addition to washing, regularly clean the knitted bag with a soft brush or cloth to remove dust and light dirt."
  },
  {
    id: "B-Denia",
    name: "Denia Bag",
    category: "bag",
    brand: "Milioiki",
    basePrice: 869000,
    sizes: "Medium Bag",
    description: "A floral-detailed knot bag made from sturdy nylon yarn and paired with genuine cow leather. Designed to deliver both durability and a polish look for everyday use.",
    material: "High-quality Nylon Yarn combined with Genuine Cow Leather",
  variants: [
      { 
        colorName: "Terracotta Red + Olive Sage", 
        colorCodes: ["#BF3C2F", "#879769"], 
        images: ["/images/denia-terracotta.png", "/images/denia-terracotta-2.jpg"] 
      },
      { 
        colorName: "Dusty Teal + Peach Blush", 
        colorCodes: ["#6BA3B8", "#EDC3BA"], 
        images: ["/images/denia-teal.png"] 
      },
      { 
        colorName: "Wild Berry + Ebony Brown", 
        colorCodes: ["#D11E48", "#5C3D27"], 
        images: ["/images/denia-berry.png"] 
      },
      { 
        colorName: "Brick Red + Ebony Brown + Desert Sand", 
        colorCodes: ["#CD1E20", "#5C3D27", "#BA9470"], 
        images: ["/images/denia-sand.png"] 
      }
    ],
    details: `Category : Medium bag
                  Dimensions : 30 x 9 x 15 cm
                  Body Material : Nylon Yarn
                  Strap Material : Genuine Cow Leather`,
    maintenance: "Avoid washing crocheted bags in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. In addition to washing, regularly clean the knitted bag with a soft brush or cloth to remove dust and light dirt."
  },
  {
    id: "B-Pottea",
    name: "Potea Bag",
    category: "bag",
    brand: "Milioiki",
    basePrice: 1258000,
    sizes: "Large Bucket Bag",
    description: "A versatile bucket-style crochet bag made from poly yarn, featuring a genuine cow leather handle that can be attached or removed as needed. Perfect for day-to-day routines.",
    material: "Durable Poly Yarn with a Detachable Genuine Cow Leather handle",
   variants: [
      { 
        colorName: "Terra cotta", 
        colorCode: "#E35336", 
      
        images: [
          "/images/pottea-1.jpg",
          "/images/pottea-2.jpg",
          "/images/pottea-3.jpg",
          "/images/pottea-4.jpg",
          "/images/pottea-5.jpg"
        ] 
      }
    ],
    details: `Category : Large Bucket Bag
              Dimensions : 30 x 9 x 42 cm
              Body Material : Poly Yarn
              Handle Material : Genuine Cow Leather`,
    maintenance: "Avoid washing crocheted bags in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. In addition to washing, regularly clean the knitted bag with a soft brush or cloth to remove dust and light dirt."
  },
  {
    id: "B-Edel",
    name: "Edel Bag",
    category: "bag",
    brand: "Milioiki",
    basePrice: 1175000,
    sizes: "Large",
    description: "A handmade crocheted shoulder bag with neat details, completed with genuine leather straps for strength and comfort.",
    material: "Nylon Yarn combination with Genuine Leather",
    variants: [
      { 
        colorName: "Deep Burgundy", 
        colorCode: "#500B1E", 
        images: ["/images/edel-burgundy.png", "/images/edel-burgundy-2.png"] 
      },
      { 
        colorName: "Bold Red", 
        colorCode: "#8E0202", 
        images: ["/images/edel-red.png"] 
      },
      { 
        colorName: "Classic Tan", 
        colorCode: "#B18C6C", 
        images: ["/images/edel-tan.png"] 
      },
      { 
        colorName: "Midnight Navy", 
        colorCode: "#192740", 
        images: ["/images/edel-navy.png"] 
      }
    ],
    details: "Meticulously handcrafted with high-density nylon yarn for lasting durability. Features a premium waterproof inner lining to keep your essentials protected and genuine leather straps designed for a refined touch. Dimensions: 50 x 26 cm.",
    maintenance: "Avoid washing crocheted bags in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. In addition to washing, regularly clean the knitted bag with a soft brush or cloth to remove dust and light dirt."
  },
  {
    id: "B-Orlyn",
    name: "Orlyn Bag",
    category: "bag",
    brand: "Milioiki",
    basePrice: 1300000,
    sizes: "Medium Tote",
    description: "A masterfully crafted crochet tote featuring a unique geometric silhouette. Combining high-density nylon construction with refined leather accents, the Orlyn Bag is designed for the sophisticated woman who requires both elegance and ample space for her daily essentials.",
    material: "High-quality Nylon Yarn combined with Genuine Cow Leather",
    variants: [
      { 
        colorName: "Midnight Charcoal", 
        colorCode: "#3B3B3B", 
        images: ["/images/orlyn-charcoal.jpg"] 
      },
      { 
        colorName: "Caramel Gold", 
        colorCode: "#AB875C", 
        images: ["/images/orlyn-caramel.png"] 
      },
      { 
        colorName: "Dark Burgundy", 
        colorCode: "#5B191E", 
        images: ["/images/orlyn-burgundy.png"] 
      },
      { 
        colorName: "Roasted Coffee", 
        colorCode: "#5D493E", 
        images: ["/images/orlyn-coffee.png"] 
      },
      { 
        colorName: "Fossil Gray", 
        colorCode: "#7D7371", 
        images: ["/images/orlyn-gray.png"] 
      }
    ],
    details: "Meticulously handcrafted using durable nylon yarn for a structured finish. Features a premium waterproof inner lining for maximum protection and comfortable genuine leather shoulder straps. Dimensions: 33 x 9 x 33 cm.",
    maintenance: "Avoid washing crocheted bags in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. In addition to washing, regularly clean the knitted bag with a soft brush or cloth to remove dust and light dirt."
  },

  // --- SHOES (BRAND: D'SCHÖN) ---
  {
    id: "S-Traveler-Rosi",
    name: "Traveler Lady (Sole Rossi)",
    category: "shoe",
    brand: "d'schön",
    basePrice: 1300000,
    sizes: "EU 36 - 40",
    description: "A stylish and versatile crochet shoe designed to pair effortlessly with any outfit, from casual to semi-formal. Its breathable hand-crocheted construction ensures superior comfort for the urban traveler, blending artisanal charm with modern functionality.",
    material: "Premium Poly Yarn upper with Rossi Sole",
   variants: [
      { 
        colorName: "Oatmeal Beige", 
        colorCode: "#D1C2BA", 
        images: ["/images/shoe-traveler-rosi-oatmeal.png"] 
      },
      { 
        colorName: "Steel Gray", 
        colorCode: "#979EA8", 
        images: ["/images/shoe-traveler-rosi-gray.png"] 
      }
    ],
    details: "Hand-crocheted upper featuring a combination of plain and speckled poly yarn for a unique, breathable fit. Equipped with the Rossi sole: characterized by its medium thickness, neat finish, and high stability, providing a comfortable and secure walking experience. Size Range: EU 36 - 40.",
    maintenance: "Avoid washing in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. Regularly clean with a soft brush or cloth to remove dust and light dirt."
  },
  {
    id: "S-Traveler-Docmart",
    name: "Traveler Lady (Sole Docmart)",
    category: "shoe",
    brand: "d'schön",
    basePrice: 1300000,
    sizes: "EU 36 - 42",
   description: "A stylish and versatile crochet shoe designed to pair effortlessly with any outfit, from casual to semi-formal. Its breathable hand-crocheted construction ensures superior comfort for the urban traveler, blending artisanal charm with modern functionality.",
    material: "Premium Poly Yarn upper with Docmart Sole",
   variants: [
      { 
        colorName: "Khaki Tan", 
        colorCode: "#B8A079", 
        images: ["/images/shoe-traveler-docmart-khaki.png"] 
      },
      { 
        colorName: "Mustard Gold", 
        colorCode: "#CD9E46", 
        images: ["/images/shoe-traveler-docmart-mustard.png"] 
      },
      { 
        colorName: "Coffee Brown", 
        colorCode: "#795C3C", 
        images: ["/images/shoe-traveler-docmart-coffee.png"] 
      }
    ],

   details: "Hand-crocheted upper featuring a combination of plain and speckled poly yarn for a unique, breathable fit.  Equipped with the Docmart sole: characterized by its thick and hard structure, anti-slip properties, and high durability, providing a sturdy and long-lasting walking experience.  Size Range: EU 36 - 42. ",
    maintenance: "Avoid washing in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. Regularly clean with a soft brush or cloth to remove dust and light dirt."
  },
  {
    id: "S-Pakarena-Rossi",
    name: "Pakarena (Sole Rossi)",
    category: "shoe",
    brand: "d'schön",
    basePrice: 1375000,
    sizes: "EU 36 - 40",
    description: "An attractive design that beautifully combines traditional and modern elements. These shoes utilize a specialized dyeing technique that creates appealing color gradients or unique color combinations, making each pair a work of art.",
    material: "Premium Poly Yarn upper with Rossi Sole",
   variants: [
      { 
        colorName: "Sand Beige", 
        colorCode: "#E9D9C7", 
        images: ["/images/shoe-pakarena-rosi-beige.png"] 
      },
      { 
        colorName: "Obsidian Black", 
        colorCode: "#181E26", 
        images: ["/images/shoe-pakarena-rosi-black.png"] 
      }
    ],
    details: "Expertly hand-crocheted using high-quality poly yarn featuring a signature circular gradient pattern. Equipped with the Rossi sole: known for its medium thickness, neat aesthetic, and superior stability for a balanced walking experience. Size Range: EU 36 - 40.",
    maintenance: "Avoid washing in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. Regularly clean with a soft brush or cloth to remove dust and light dirt."
  },
  {
    id: "S-Pakarena-Pakarena",
    name: "Pakarena (Sole Pakarena)",
    category: "shoe",
    brand: "d'schön",
    basePrice: 1375000,
    sizes: "EU 36 - 40",
    description: "An attractive design that beautifully combines traditional and modern elements. Utilizing a specialized dyeing technique, these shoes feature appealing color gradients that make each pair uniquely expressive and artistic.",
    material: "Premium Poly Yarn upper with Pakarena Signature Sole",
   variants: [
      { 
        colorName: "Sage Sand", 
        colorCode: "#BFBA9B", 
        images: ["/images/shoe-pakarena-pakarena-sand.png"] 
      },
      { 
        colorName: "Leaf Green", 
        colorCode: "#1C7829", 
        images: ["/images/shoe-pakarena-pakarena-green.png"] 
      }
    ],
   details: "Hand-crocheted upper featuring intricate circular patterns and artistic color combinations. Equipped with the Pakarena signature sole: specifically designed to be thin, lightweight, and flexible, providing a natural 'soft feel' and maximum comfort for all-day movement. Size Range: EU 36 - 40.",
    maintenance: "Avoid washing in a washing machine as it can damage the knit structure. Hand washing is a gentler method. Choose a mild detergent or soap that is free from bleach. Regularly clean with a soft brush or cloth to remove dust and light dirt."
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
    description: "Started as Schön Craft, a small team of passionate artisans."
  },
  {
    year: 2023,
    title: "Transformation",
    description: "Rebranded as PT. Schon Craft Indonesia, formalizing our commitment to excellence and community. HKI trademark certificates issued."
  },
  {
    year: 2025,
    title: "Global Reach",
    description: "Serving global demand with 20 skilled artisans and two premium brands (d'schön & Milioiki)."
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
            "Citos Bazaar (Cilandak Town Square Jakarta) - Dec 2018",
            // 2019
            "ITT Expo 2019 Exhibition in Bali - April 2019",
            "Bazaar at Manggala Wana Bakti Building Jakarta - April 2019",
            "Bazaar at the Ministry of Marine Affairs and Fisheries - April 2019",
            "Citos Bazaar Jakarta - April 2019",
            "Inacraft Exhibition at JCC - April 2019",
            "Exhibition at the Ministry of Industry Building - May 2019",
            "Grand Ramadan Bazaar at the Ministry of Environment and Forestry RI - May 2019",
            "9th Gebyar IPPKINDO Expo Exhibition at JCC - June 2019",
            "Indonesia Product Expo 2019 Exhibition at City Point Malang - July 2019",
            "Exhibition at Bekasi Regency Government Office - Sep 2019",
            "Featured Products Bazaar at Manggala Wana Bakti Building - Sep 2019",
            "DWP KKP Bazaar - Oct 2019",
            "Bazaar at Sapta Pesona Building - Oct 2019",
            "Crafina 2019 Exhibition at JCC - Oct 2019",
            "Bazaar at Sapta Pesona Building - Nov 2019",
            "2019 KLHK Dharmawanita Anniversary Bazaar - Dec 2019",
        ]
    },

    // === 2. Post-Pandemic Expansion (2020 - 2023) ===
    {
        title: "Post-Pandemic Expansion",
        years: "2020 - 2023",
        events: [
            // 2020
            "TILATEX Expo Exhibition at Jogja City Mall - Yogyakarta - March 2020",
            // 2022
            "Exhibition at Ibis Hotel Cikarang - Nov 2022",
            // 2023
            "DWP KKP Bazaar - Jul 2023",
            "Exhibition at the Bekasi Regency Tourism Office Building - Jul 2023",
            "1445 H Muharram Fair Bazaar at Bekasi Customs and Excise Building - Jul 2023",
            "DWP DJP Mini Bazaar - Aug 2023",
            "77th Anniversary Bazaar of Perwita Wana Kencana Pusat, Ministry of Environment and Forestry RI - Sep 2023",
            "Inacraft Exhibition at JCC - Oct 2023",
        ]
    },

    // === 3. Current Focus & Future (2024 - 2025) ===
    {
        title: "Current Focus & Future",
        years: "2024 - 2025",
        events: [
            // 2024
            "Inacraft Exhibition at JCC - March 2024",
            "38th MTQ Bazaar at Bekasi Regency Government Office - May 2024",
            "PKJB Exhibition at Trans Studio Bandung - June 2024",
            "Bazaar at Nuaza Hotel Cikarang - Jul 2024",
            "Supplying Dekranasda Outlet at Aeon Mall Deltamas - March 2024 - Present",
            // 2025 (Upcoming)
            "Inacraft Exhibition at JCC - February 2025",
            "DWP KEMDIKSAINTEK Bazaar - April 2025",
            "The Sultan Hotel & Residence Bazaar Jakarta - May 2025",
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
        details: "Registered under the Ministry of Law and Human Rights, Republic of Indonesia. IDM000820860"
    },
    {
        title: "HKI Merek Certificate",
        subtitle: "Official Brand Registration for Milioiki",
        type: "legal",
        image: "/images/hki_milioiki.png",
        details: "Registered under the Ministry of Law and Human Rights, Republic of Indonesia. IDM001179711"
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