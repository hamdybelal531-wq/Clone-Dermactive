// MobileMenu.jsx

import { useState } from "react";
import { HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";

// بيانات القوائم الرئيسية الثلاث التي ستظهر في القائمة الجانبية
// تم تحديث collectionKey و id لتتناسب مع ملف Products.js
const menuData = [
  {
    title: "Our Range",
    sections: [
      {
        name: "Acti Clear",
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
      },
      {
        name: "Acti White",
        products: [
          {
            name: "ACTI-WHITE Foaming Gel",
            collectionKey: "acti-white",
            id: 1,
          },
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
          {
            name: "ACTI-WHITE Eye Contour",
            collectionKey: "acti-white",
            id: 4,
          },
          {
            name: "ACTI-WHITE 2in1 Body Milk",
            collectionKey: "acti-white",
            id: 5,
          },
        ],
      },
      {
        name: "Acti Solair",
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
            id: 1, // تصحيح: تم تبديل هذا المنتج مع SPF 50+ Ultra Fluid Light Tinted في السابق
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
      },
      {
        name: "Acti Repair",
        products: [
          // تصحيح الأرقام التعريفية (ID) لتطابق ملف Products.js
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
          {
            name: "ACTI-REPAIR Hydro Gel",
            collectionKey: "acti-repair",
            id: 4,
          },
          {
            name: "ACTI-REPAIR Emollient Extreme",
            collectionKey: "acti-repair",
            id: 3,
          },
        ],
      },
      {
        name: "Tricho Act",
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
      },
    ],
  },
  {
    title: "Skin Concerns",
    sections: [
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
      },
      {
        name: "Un-Even & Pigmented Skin",
        products: [
          {
            name: "ACTI-WHITE Foaming Gel",
            collectionKey: "acti-white",
            id: 1,
          },
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
          {
            name: "ACTI-WHITE Eye Contour",
            collectionKey: "acti-white",
            id: 4,
          },
          {
            name: "ACTI-WHITE 2in1 Body Milk",
            collectionKey: "acti-white",
            id: 5,
          },
        ],
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
      },
      {
        name: "Irritated & Damaged Skin",
        products: [
          // تصحيح الأرقام التعريفية (ID) لتطابق ملف Products.js
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
          {
            name: "ACTI-REPAIR Hydro Gel",
            collectionKey: "acti-repair",
            id: 4,
          },
          {
            name: "ACTI-REPAIR Emollient Extreme",
            collectionKey: "acti-repair",
            id: 3,
          },
        ],
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
      },
    ],
  },
  {
    title: "Product Type",
    sections: [
      {
        name: "Cleansers",
        products: [
          {
            name: "ACTI-CLEAR Gentle Cleansing Gel",
            collectionKey: "acti-clear",
            id: 1,
          },
          {
            name: "ACTI-WHITE Foaming Gel",
            collectionKey: "acti-white",
            id: 1,
          },
        ],
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
          {
            name: "ACTI-WHITE Eye Contour",
            collectionKey: "acti-white",
            id: 4,
          },
        ],
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
      },
      {
        name: "Eye Care",
        products: [
          {
            name: " ACTI-WHITE Eye Contour",
            collectionKey: "acti-white",
            id: 4,
          },
        ],
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
      },
    ],
  },
  {
    title: "About Dermactive",
    sections: [],
  },
];

export default function MobileMenu({ ShowMobileMenu, SetShowMobileMenu }) {
  // للتحكم في فتح وغلق القوائم الرئيسية (Our Range, Skin Concerns, Product Type)
  const [activeTab, setActiveTab] = useState(null);
  // للتحكم في فتح وغلق الأقسام الداخلية (Acti Clear, Oily Skin, etc.)
  const [activeSection, setActiveSection] = useState(null);

  const toggleTab = (title) => {
    setActiveTab(activeTab === title ? null : title);
  };

  const toggleSection = (name) => {
    setActiveSection(activeSection === name ? null : name);
  };

  return (
    <AnimatePresence>
      {ShowMobileMenu && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-2 w-full max-w-xs md:max-w-lg bg-white shadow-xl z-[999999999] lg:hidden"
        >
          {/* Header & Close Button */}
          <div className="p-4 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white">
            <h2 className="text-xl font-semibold text-[#777]">Menu</h2>
            <HiX
              className="w-6 h-6 cursor-pointer text-black"
              onClick={() => SetShowMobileMenu(false)}
            />
          </div>
          <div className="shadow-sm relative">
            <input
              type="search"
              placeholder="Search For Products"
              className="w-full pl-10 pr-4 py-6 focus:outline-none  focus:ring-[#777] text-center"
            />
            <HiOutlineSearch
              size={25}
              className="absolute left-65 md:left-110 top-1/2 -translate-y-1/2 text-gray-500 "
            />
          </div>

          {/* Menu Items (Accordion) */}
          <div className="p-4">
            {menuData.map((tab) => (
              <div key={tab.title} className="mb-2 border-b border-gray-100">
                {/* [!!!] رابط لـ About Dermactive إذا لم يكن به أقسام فرعية */}
                {tab.sections.length === 0 ? (
                  <Link href="#" onClick={() => SetShowMobileMenu(false)}>
                    {tab.title === "About Dermactive" ? (
                      <Link href={`/aboutus`}>
                        <div
                          className={`flex justify-between items-center py-3 cursor-pointer text-[16px] font-medium text-black hover:text-[#777]`}
                        >
                          {tab.title}
                        </div>
                      </Link>
                    ) : (
                      <div
                        className={`flex justify-between items-center py-3 cursor-pointer text-[16px] font-medium text-black hover:text-[#777]`}
                      >
                        {tab.title}
                      </div>
                    )}
                  </Link>
                ) : (
                  // القائمة الرئيسية القابلة للفتح (Accordion Header)
                  <div
                    className={`flex justify-between items-center py-3 cursor-pointer text-[16px] font-medium ${
                      activeTab === tab.title ? "text-[#222]" : "text-black"
                    }`}
                    onClick={() => toggleTab(tab.title)}
                  >
                    {tab.title}
                    <span className="ml-2 bg-[#222] text-white rounded-2xl  ">
                      {activeTab === tab.title ? (
                        <HiChevronUp size={20} />
                      ) : (
                        <HiChevronDown size={20} />
                      )}
                    </span>
                  </div>
                )}

                {/* Sub-Sections */}
                {tab.sections.length > 0 && activeTab === tab.title && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="pl-4 pb-3">
                      {tab.sections.map((section) => (
                        <li key={section.name} className="py-2">
                          <div
                            className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-[#777]"
                            onClick={() => toggleSection(section.name)}
                          >
                            {section.name}
                            <span className="ml-2 text-sm">
                              {activeSection === section.name ? (
                                <HiChevronUp />
                              ) : (
                                <HiChevronDown />
                              )}
                            </span>
                          </div>

                          {/* Products List (باستخدام Link والبيانات المصححة) */}
                          {activeSection === section.name && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 pt-2 text-sm text-gray-500"
                            >
                              {section.products.map((product) => (
                                <Link
                                  // نستخدم المسار كما حددته في ملف HoverProduct.jsx:
                                  // /componts/oneproduct/[collectionKey]/[id]
                                  href={`/componts/oneproduct/${
                                    product.collectionKey
                                  }/${product.id.toString()}`}
                                  // نستخدم اسم المنتج كمفتاح
                                  key={product.name}
                                  onClick={() => SetShowMobileMenu(false)} // إغلاق القائمة عند النقر
                                >
                                  <li className="py-1 hover:text-black cursor-pointer">
                                    {product.name}
                                  </li>
                                </Link>
                              ))}
                            </motion.ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
