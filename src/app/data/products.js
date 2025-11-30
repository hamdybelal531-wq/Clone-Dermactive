"use client";
import { v4 as uuidv4 } from "uuid";
const Products = {
  // Collection
  "acti-clear": {
    id: uuidv4(),
    title: "Acti Clear",
    img: "https://derm-active.com/wp-content/uploads/2023/02/Range-Page-1-1.jpg",
    items: [
      {
        name: "Gentle Cleansing Gel",
        id: 1,
        img: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-Clear-Gentle-Cleansing-Gel-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/Gentle-Cleansing-Gel-model--711x1024.jpg",
        prag: "Gentle Cleansing Gel for combination to oily skin, Specially formulated to gently cleanse and removes impurities and regulates the production of sebum - Non-drying - Soap-free .",
        size: "200 ML",
      },
      {
        name: "Hydra-Mattifying Gel",
        id: 2,
        img: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-Clear-Hydra-Mattifying-Gel-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/1000x1440-5-711x1024.jpg",
        prag: "Hydra-Mattifying Gel, Developed specifically for adults with combination to oily skin It moisturizes the oily skin and controls it's shine and ensures perfect and Matt effect throughout the day - Can be used as make-up base",
        size: "50 ML",
      },
      {
        name: "Correcting Serum",
        id: 3,
        img: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-Clear-Correcting-Serum-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/Correcting-Serum--711x1024.jpg",
        prag: "Correcting Serum for combination to oily skin. This serum actively helps to eliminate spots, blackheads and minimize large pores and acne marks leaving the skin clear, smooth and glow. Its fresh light texture offers considerable hydration all over the day. Non-greasy.",
        size: "30 ML",
      },
      {
        name: "Global AC Cream",
        id: 4,
        img: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-Clear-Global-AC-Cream-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/Global-AC-model--711x1024.jpg",
        prag: "Global AC Gel Cream, for combination to oily skin, highly concentrated in dermatological actives for visible results on imperfections, blackheads and red/brown marks. Its light texture hydrates the skin and soothes discomfort without leaving a greasy film or white cast.",
        size: "50 ML",
      },
    ],
    name: "Acti-Clear",
    products: [
      "ACTI-CLEAR Gentle Cleansing Gel",
      "ACTI-CLEAR Hydra-Mattifying Gel",
      "ACTI-CLEAR Correcting Serum",
      "ACTI-CLEAR Global AC Cream",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-Clear.jpg",
  },

  //  Next Collection
  "acti-white": {
    id: uuidv4(),
    title: "Acti White",
    img: "https://derm-active.com/wp-content/uploads/2023/02/Range-Page-4-1.jpg",
    items: [
      {
        name: "Foaming Gel",
        id: 1,
        img: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-White-Foaming-Gel-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/Foam-711x1024.jpg",
        prag: "Gentle Cleansing Gel, Specially designed to cleanse the skin, unifies it's color irregularities and removes surface impurities to restore the complexion’s radiance , suitable for all skin types even sensitive skin",
        size: "200 ML",
      },
      {
        name: "Brightening Correcting Serum",
        id: 2,
        img: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-White-Brightening-Correcting-Serum-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/Serum-711x1024.jpg",
        prag: "Brightening Correcting Serum, Radiance enhancing brown spots and pigmentation correcting serum for face, neck, décolleté and hands. Visibly reduces hyperpigmentation. For all skin types",
        size: "30 ML",
      },
      {
        name: "Depigmenting Cream",
        id: 3,
        img: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-White-Depigmenting-Cream-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/1000x1440-2-711x1024.jpg",
        prag: "Depigmenting Daily care Cream , Combining softness and effectiveness specifically formulated for all skin types, in order to eliminate pigment spots and unifies skin color while bringing comfort and softness to the skin.",
        size: "50 ML",
      },
      {
        name: "Eye Contour",
        id: 4,
        img: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-White-Eye-Contour-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/Eye-Cream-711x1024.jpg",
        prag: "Eye Contour gel, Suitable for sensitive skin, this very fresh gel-cream works to brighten dull skin that has lost its radiance.",
        size: "15 ML",
      },
      {
        name: "2in1 Body Milk",
        id: 5,
        img: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-White-2in1-Body-Milk.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/1000x1440-8-1-150x216.jpg",
        prag: "Special 2 in 1 Body Milk, designed to Soften, Unified and brightened the skin tone of sensitive and intimate areas as Bikini line and Armpits. Helps to reduce the appearance of dark spots in areas of friction. Leaves the skin soft and comfortable , Non-sticky, non-greasy texture – Unfragranced – safe to be used on sensitive areas",
        size: "200 ML",
      },
    ],
    name: "Acti-White",
    products: [
      "ACTI-WHITE Foaming Gel",
      "ACTI-WHITE Brightening Correcting Serum",
      "ACTI-WHITE Depigmenting Cream",
      "ACTI-WHITE Eye Contour",
      "ACTI-WHITE 2in1 Body Milk",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-White.jpg",
  },

  // Next Collection
  "acti-solaire": {
    id: uuidv4(),
    title: "Acti SoLarire",
    img: "https://derm-active.com/wp-content/uploads/2023/06/New-Project-44.jpg",
    items: [
      {
        name: "SPF 50 MELTING CREAM Light Tinted",
        id: 1,
        img: "https://derm-active.com/wp-content/uploads/2023/05/cream-tinted-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/Cream-Tinted-711x1024.jpg",
        prag: "ACTI-SOLAIRE SPF 50 MELTING CREAM Light Tinted Tinted melting cream specifically designed for sun-sensitive skin, it intensely protects the skin from hazardous effect of UV rays, It provides Very High and Broad-Spectrum protection against UVA/UVB through broad-spectrum filters ensuring long-lasting protection.",
        size: "50 ML",
      },
      {
        name: "SPF 50+ LAIT SPRAY",
        id: 2,
        img: "https://derm-active.com/wp-content/uploads/2023/05/spray-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/Fluid-1-711x1024.jpg",
        prag: "ACTI-SOLAIRE SPF 50+ LAIT SPRAY Effective Sun Protection with non-oily light texture designed for sun sensitive skin for Face and body. It intensely protects the skin from hazardous effect of UV rays. It provides Very High and Broad-Spectrum protection ensuring long-lasting protection.",
        size: "125 ML",
      },
      {
        name: "SPF 50+ MELTING CREAM",
        id: 3,
        img: "https://derm-active.com/wp-content/uploads/2023/05/cream-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/ACTI-SOLAIRE-SPF-50-MELTING-CREAM-model--711x1024.jpg",
        prag: "Melting Cream specifically designed for sun-sensitive skin, protects from hazardous effect of UV rays. Provides Very High and Broad-Spectrum protection through broad-spectrum filters ensuring long-lasting protection.",
        size: "50 ML",
      },
      {
        name: "SPF 50+ Ultra Fluid",
        id: 4,
        img: "https://derm-active.com/wp-content/uploads/2023/05/fluid-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/SPF50-ultra-Fluid-model--711x1024.jpg",
        prag: "Ultra Fluid Sun protection specifically designed for oily and sun-sensitive skin. Offers mattifying effect and provides Very High and Broad-Spectrum protection ensuring long-lasting protection.",
        size: "50 ML",
      },
      {
        name: "SPF 50+ Ultra Fluid Light Tinted",
        id: 5,
        img: "https://derm-active.com/wp-content/uploads/2023/05/fluid-tinted-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/1000x1440-1-711x1024.jpg",
        prag: "Ultra Fluid Sun protection for oily and sun-sensitive skin, intensely protects while mattifying, offers Very High and Broad-Spectrum protection through broad-spectrum filters ensuring long-lasting protection.",
        size: "50 ML",
      },
      {
        name: "SPF50+ KIDS",
        id: 6,
        img: "https://derm-active.com/wp-content/uploads/2023/05/kids-711x1024.jpg",
        imgHover: "",
        prag: "Water and sweat resistant, photostable, provides reliable sun protection. Light non-oily formula absorbs quickly and leaves skin hydrated, suitable for children and babies from 3 years old.",
      },
    ],
    name: "Acti-Solaire",
    products: [
      "ACTI-SOLAIRE SPF 50+ Ultra Fluid",
      "ACTI-SOLAIRE SPF 50+ Ultra Fluid Light Tinted",
      "ACTI-SOLAIRE SPF 50+ MELTING CREAM",
      "ACTI-SOLAIRE SPF 50+ MELTING CREAM Light Tinted",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/05/864x600-Acti-Solaire-1.jpg",
  },

  "acti-repair": {
    id: uuidv4(),
    title: "Acti Repair",
    img: "https://derm-active.com/wp-content/uploads/2023/02/Range-Page-2-1.jpg",
    items: [
      {
        name: "Soothing Cleansing Gel",
        id: 1,
        img: "https://derm-active.com/wp-content/uploads/2024/04/acti-repair-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/Repair-711x1024.jpg",
        prag: "Soothing Cleansing Gel, appreciated by dry and sensitive skin. Easy to rinse, suitable for face and body for adults and children. Soap-free formulation gentle on skin barrier.",
      },
      {
        name: "CICA Cream",
        id: 2,
        img: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-Repair-CICA-Cream-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/1000x1440-711x1024.jpg",
        prag: "Repairing and soothing cream for face & body. Restores the epidermis, moisturizes, relieves discomfort and reduces urge to scratch. Protects damaged skin. Non-greasy, non-sticky.",
        size: "50 ML",
      },
      {
        name: "Emollient Extreme",
        id: 3,
        img: "https://derm-active.com/wp-content/uploads/2024/04/acti-repair-extreme-711x1024.jpg",
        imgHover: "",
        prag: "Lotion helps restore skin barrier and soothe itching. Suitable for face & body for adults and children. Non-greasy and non-sticky.",
      },
      {
        name: "Hydro Gel",
        id: 4,
        img: "https://derm-active.com/wp-content/uploads/2024/04/acti-repair-gel-711x1024.jpg",
        imgHover: "",
        prag: "Hydro-gel gives instant intense hydration with non-sticky texture suitable for summer and winter. Skin feels nourished, supple and soothed.",
      },
    ],
    name: "Acti-Repair",
    products: [
      "ACTI-REPAIR Soothing Cleansing Gel",
      "ACTI-REPAIR CICA Cream",
      "ACTI-REPAIR Emollient Extreme",
      "ACTI-REPAIR Hydro Gel",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-Repair.jpg",
  },

  "tricho-act": {
    id: uuidv4(),
    title: "Tricho act",
    img: "https://derm-active.com/wp-content/uploads/2023/02/Range-Page-3-1.jpg",
    items: [
      {
        id: 1,
        name: "Anti-Hair loss Shampoo",
        img: "https://derm-active.com/wp-content/uploads/2023/06/Tricho-ACT-Anti-Hair-loss-Shampoo-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/1000x1440-3-711x1024.jpg",
        prag: "Anti-hair loss shampoo for all hair types. Gently cleanses while respecting scalp balance. Sulphate-free formula safe for frequent use even on sensitive scalps.",
        size: "200 ML",
      },
      {
        id: 2,
        name: "Anti-Dandruff Shampoo DS",
        img: "https://derm-active.com/wp-content/uploads/2023/06/Tricho-ACT-Anti-Dandruff-Shampoo-DS-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/1000x1440-7-1-711x1024.jpg",
        prag: "Anti-dandruff shampoo removes all types of dandruff — dry & oily — with triple efficacy: reduces sebum secretion, eliminates dandruff with kerato-reducing action, relieves itchy scalp and soothes irritation.",
        size: "200 ML",
      },
      {
        id: 3,
        name: "Hair Repairing Mask",
        img: "https://derm-active.com/wp-content/uploads/2023/06/Tricho-ACT-Hair-Repairing-Mask-711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/Mask-711x1024.jpg",
        prag: "Hair repairing mask for all hair types. Revitalizes dull, dry, and breaking hair. Helps repair split ends, nourishes, hydrates, and strengthens hair fiber. Improves shine and manageability.",
        size: "150 ML",
      },
      {
        id: 4,
        name: "Anti-Hair Loss Lotion Concentrate",
        img: "https://derm-active.com/wp-content/uploads/2023/06/Tricho-ACT-Anti-Hair-Loss-Lotion-Concentrate--711x1024.jpg",
        imgHover:
          "https://derm-active.com/wp-content/uploads/2023/06/1000x1440-5-1-711x1024.jpg",
        prag: "Hair loss lotion concentrate acts deep in the hair bulb to control hair loss and promote growth of stronger, denser, healthier hair. Lightweight formula suitable for daily use on all scalp types including sensitive scalps.",
        size: "120 ML",
      },
    ],
    name: "Tricho-Act",
    products: [
      "TRICHO-ACT Anti-Hair loss Shampoo",
      "TRICHO-ACT Anti-Dandruff Shampoo DS",
      "TRICHO-ACT Hair Repairing Mask",
      "TRICHO-ACT Anti-Hair Loss Lotion Concentrate",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/02/Ranges-4.2-1.jpg",
  },
  "sweat-control": {
    id: uuidv4(),
    title: "Sweat Control",
    img: "/black_header.png",
    items: [
      {
        id: 1,
        name: "control intense",
        img: "https://derm-active.com/wp-content/uploads/2024/08/INTENSE-711x1024.png",
        imgHover: "",
        prag: "Dermactive Sweat Control INTENSE Anti-Perspirant Deodorant Roll-On is an antiperspirant that protects against sweating up to 48h , helps control excess underarm odor thanks to its intense formula that regulates perspiration, helps reduce the bacteria responsible for odors",
        size: "50 ML",
      },
      {
        id: 2,
        name: "control refreshing",
        img: "https://derm-active.com/wp-content/uploads/2024/08/REFRESHING-711x1024.png",
        imgHover: "",
        prag: "Dermactive Sweat Control REFRESHING Deodorant Roll-On refreshes and protects the underarm area for up to 48 h, helps regulate normal to excessive perspiration",
        size: "50 ML",
      },
      {
        id: 3,
        name: "control triple effect",
        img: "https://derm-active.com/wp-content/uploads/2024/08/TRIPPLE-EFFECT.png",
        imgHover: "",
        prag: "Dermactive Sweat Control TRIPLE EFFECT Deodorant Roll-On offers complete Care for underarm area. It regulates perspiration up to 48 h, helps reduce the bacteria responsible for odors. Helps prevent bad body odors.",
        size: "50 ML",
      },
    ],
  },
};

export const rangesData = [
  {
    name: "Cleansers",
    products: [
      {
        name: "ACTI-CLEAR Gentle Cleansing Gel",
        collectionKey: "acti-clear",
        id: 1,
      },
      { name: "ACTI-WHITE Foaming Gel", collectionKey: "acti-white", id: 1 },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-9.jpg",
  },
  {
    name: "Face Care",
    products: [
      {
        name: "ACTI-CLEAR Hydra-Mattifying Gel",
        collectionKey: "acti-clear",
        id: 2,
      },
      {
        name: "ACTI-WHITE Depigmenting Cream",
        collectionKey: "acti-white",
        id: 3,
      },
      { name: "ACTI-WHITE Eye Contour", collectionKey: "acti-white", id: 4 },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-3.jpg",
  },
  {
    name: "Sun Protection",
    products: [
      {
        name: "ACTI-SOLAIRE SPF 50+ Ultra Fluid",
        collectionKey: "acti-solaire",
        id: 4,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ Ultra Fluid Light Tinted",
        collectionKey: "acti-solaire",
        id: 5,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ MELTING CREAM",
        collectionKey: "acti-solaire",
        id: 3,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ MELTING CREAM Light Tinted",
        collectionKey: "acti-solaire",
        id: 1,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ LAIT SPRAY",
        collectionKey: "acti-solaire",
        id: 2,
      },
      {
        name: "ACTI-SOLAIRE SPF50+ KIDS",
        collectionKey: "acti-solaire",
        id: 6,
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/05/864x600-Acti-Solaire.jpg",
  },
  {
    name: "Serums",
    products: [
      {
        name: " ACTI-CLEAR Correcting Serum",
        collectionKey: "acti-clear",
        id: 3,
      },
      {
        name: "ACTI-WHITE Brightening Correcting Serum",
        collectionKey: "acti-white",
        id: 2,
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-4.jpg",
  },
  {
    name: "Eye Care",
    products: [
      { name: " ACTI-WHITE Eye Contour", collectionKey: "acti-white", id: 4 },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/02/864x600-7.jpg",
  },
  {
    name: "Shampoo & Masks",
    products: [
      {
        name: "TRICHO-ACT Anti-Hair loss Shampoo",
        collectionKey: "tricho-act",
        id: 1,
      },
      {
        name: "TRICHO-ACT Anti-Dandruff Shampoo DS",
        collectionKey: "tricho-act",
        id: 2,
      },
      {
        name: "TRICHO-ACT Hair Repairing Mask",
        collectionKey: "tricho-act",
        id: 3,
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-5.jpg",
  },
];

export const rangesDataSkin = [
  {
    name: "Oily & Acne - prone skin",
    products: [
      {
        name: "ACTI-CLEAR Gentle Cleansing Gel",
        collectionKey: "acti-clear",
        id: 1,
      },
      {
        name: "ACTI-CLEAR Hydra-Mattifying Gel",
        collectionKey: "acti-clear",
        id: 2,
      },
      {
        name: "ACTI-CLEAR Correcting Serum",
        collectionKey: "acti-clear",
        id: 3,
      },
      {
        name: "ACTI-CLEAR Global AC Cream",
        collectionKey: "acti-clear",
        id: 4,
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-Clear.jpg",
  },
  {
    name: "Un-Even & Pigmented Skin",
    products: [
      { name: "ACTI-WHITE Foaming Gel", collectionKey: "acti-white", id: 1 }, // صحيح
      {
        name: "ACTI-WHITE Brightening Correcting Serum",
        collectionKey: "acti-white",
        id: 2,
      },
      {
        name: "ACTI-WHITE Depigmenting Cream",
        collectionKey: "acti-white",
        id: 3,
      },
      { name: "ACTI-WHITE Eye Contour", collectionKey: "acti-white", id: 4 },
      { name: "ACTI-WHITE 2in1 Body Milk", collectionKey: "acti-white", id: 5 },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-2.jpg",
  },
  {
    name: "Sun Exposure",
    products: [
      {
        name: "ACTI-SOLAIRE SPF 50+ Ultra Fluid",
        collectionKey: "acti-solaire",
        id: 4,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ Ultra Fluid Light Tinted",
        collectionKey: "acti-solaire",
        id: 5,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ MELTING CREAM",
        collectionKey: "acti-solaire",
        id: 3,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ MELTING CREAM Light Tinted",
        collectionKey: "acti-solaire",
        id: 1,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ LAIT SPRAY",
        collectionKey: "acti-solaire",
        id: 2,
      },
      {
        name: "ACTI-SOLAIRE SPF50+ KIDS",
        collectionKey: "acti-solaire",
        id: 6,
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/05/New-Project-40.jpg",
  },
  {
    name: "Irritated & Damaged Skin",
    products: [
      {
        name: "ACTI-REPAIR CICA Cream",
        collectionKey: "acti-repair",
        id: 2,
      },
      {
        name: "ACTI-REPAIR Soothing Cleansing Gel",
        collectionKey: "acti-repair",
        id: 1,
      },
      { name: "ACTI-REPAIR Hydro Gel", collectionKey: "acti-repair", id: 4 }, // تم تصحيح: كان 3، أصبح 4
      {
        name: "ACTI-REPAIR Emollient Extreme",
        collectionKey: "acti-repair",
        id: 3,
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-8.jpg",
  },
  {
    name: "Hair Loss",
    products: [
      {
        name: "TRICHO-ACT Anti-Hair loss Shampoo",
        collectionKey: "tricho-act",
        id: 1,
      },
      {
        name: "TRICHO-ACT Anti-Dandruff Shampoo DS",
        collectionKey: "tricho-act",
        id: 2,
      },
      {
        name: "TRICHO-ACT Hair Repairing Mask",
        collectionKey: "tricho-act",
        id: 3,
      },
      {
        name: "TRICHO-ACT Anti-Hair Loss Lotion Concentrate",
        collectionKey: "tricho-act",
        id: 4,
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-6.jpg",
  },
];
export const getRangesData = () => {
  return Object.keys(Products)
    .filter((key) => key !== "sweat-control")
    .map((key) => {
      const collection = Products[key];
      return {
        name: collection.name,
        products: collection.products,
        imageSrc: collection.imageSrc,
      };
    });
};
export default Products;
