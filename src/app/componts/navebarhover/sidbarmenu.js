// MobileMenu.jsx

import { useState } from "react";
import { HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";

// بيانات القوائم الرئيسية الثلاث التي ستظهر في القائمة الجانبية

const menuData = [
  {
    title: "Our Range",
    sections: [
      {
        name: "Acti Clear",
        products: [
          "ACTI-CLEAR Gentle Cleansing Gel",
          "ACTI-CLEAR Hydra-Mattifying Gel",
          "ACTI-CLEAR Correcting Serum",
          "ACTI-CLEAR Global AC Cream",
        ],
      },
      {
        name: "Acti White",
        products: [
          "ACTI-WHITE Foaming Gel",
          "ACTI-WHITE Brightening Correcting Serum",
          "ACTI-WHITE Depigmenting Cream",
          "ACTI-WHITE Eye Contour",
          "ACTI-WHITE 2in1 Body Milk",
        ],
      },
      {
        name: "Acti Solair",
        products: [
          "ACTI-SOLAIRE SPF 50+ Ultra Fluid",
          "ACTI-SOLAIRE SPF 50+ Ultra Fluid Light Tinted",
          "ACTI-SOLAIRE SPF 50+ MELTING CREAM",
          "ACTI-SOLAIRE SPF 50+ MELTING CREAM Light Tinted",
        ],
      },
      {
        name: "Acti Repair",
        products: [
          "ACTI-REPAIR CICA Cream",
          "ACTI-REPAIR Soothing Cleansing Gel",
          "ACTI-REPAIR Hydro Gel",
          "ACTI-REPAIR Emollient Extreme",
        ],
      },
      {
        name: "Tricho Act",
        products: [
          "TRICHO-ACT Anti-Hair loss Shampoo",
          "TRICHO-ACT Anti-Dandruff Shampoo DS",
          "TRICHO-ACT Hair Repairing Mask",
          "TRICHO-ACT Anti-Hair Loss Lotion Concentrate",
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
          "ACTI-CLEAR Gentle Cleansing Gel",
          "ACTI-CLEAR Hydra-Mattifying Gel",
          "ACTI-CLEAR Correcting Serum",
          "ACTI-CLEAR Global AC Cream",
        ],
      },
      {
        name: "Un-Even & Pigmented Skin",
        products: [
          "ACTI-WHITE Foaming Gel",
          "ACTI-WHITE Brightening Correcting Serum",
          "ACTI-WHITE Depigmenting Cream",
          "ACTI-WHITE Eye Contour",
          "ACTI-WHITE 2in1 Body Milk",
        ],
      },
      {
        name: "Sun Exposure",
        products: [
          "ACTI-SOLAIRE SPF 50+ Ultra Fluid",
          "ACTI-SOLAIRE SPF 50+ Ultra Fluid Light Tinted",
          "ACTI-SOLAIRE SPF 50+ MELTING CREAM",
          "ACTI-SOLAIRE SPF 50+ MELTING CREAM Light Tinted",
          "ACTI-SOLAIRE SPF 50+ LAIT SPRAY",
          "ACTI-SOLAIRE SPF50+ KIDS",
        ],
      },
      {
        name: "Irritated & Damaged Skin",
        products: [
          "ACTI-REPAIR CICA Cream",
          "ACTI-REPAIR Soothing Cleansing Gel",
          "ACTI-REPAIR Hydro Gel",
          "ACTI-REPAIR Emollient Extreme",
        ],
      },
      {
        name: "Hair Loss",
        products: [
          "TRICHO-ACT Anti-Hair loss Shampoo",
          "TRICHO-ACT Anti-Dandruff Shampoo DS",
          "TRICHO-ACT Hair Repairing Mask",
          "TRICHO-ACT Anti-Hair Loss Lotion Concentrate",
        ],
      },
    ],
  },
  {
    title: "Product Type",
    sections: [
      {
        name: "Cleansers",
        products: ["ACTI-CLEAR Gentle Cleansing Gel", "ACTI-WHITE Foaming Gel"],
      },
      {
        name: "Face Care",
        products: [
          "ACTI-CLEAR Hydra-Mattifying Gel",
          "ACTI-WHITE Depigmenting Cream",
          "ACTI-WHITE Eye Contour",
        ],
      },
      {
        name: "Sun Protection",
        products: [
          "ACTI-SOLAIRE SPF 50+ Ultra Fluid",
          "ACTI-SOLAIRE SPF 50+ Ultra Fluid Light Tinted",
          "ACTI-SOLAIRE SPF 50+ MELTING CREAM",
          "ACTI-SOLAIRE SPF 50+ MELTING CREAM Light Tinted",
          "ACTI-SOLAIRE SPF 50+ LAIT SPRAY",
          "ACTI-SOLAIRE SPF50+ KIDS",
        ],
      },
      {
        name: "Serums",
        products: [
          " ACTI-CLEAR Correcting Serum",
          "ACTI-WHITE Brightening Correcting Serum",
        ],
      },
      { name: "Eye Care", products: [" ACTI-WHITE Eye Contour"] },
      {
        name: "Shampoo & Masks",
        products: [
          "TRICHO-ACT Anti-Hair loss Shampoo",
          "TRICHO-ACT Anti-Dandruff Shampoo DS",
          "TRICHO-ACT Hair Repairing Mask",
        ],
      },
    ],
  },
  {
    title: "About Dermactive",
    sections: [], // لا يوجد أقسام فرعية
  },
];

export default function MobileMenu({ ShowMobileMenu, SetShowMobileMenu }) {
  // للتحكم في فتح وغلق القوائم الرئيسية (Our Range, Skin Concerns, Product Type)
  const [activeTab, setActiveTab] = useState(null);
  // للتحكم في فتح وغلق الأقسام الداخلية (Acti Clear, Oily Skin, etc.)
  const [activeSection, setActiveSection] = useState(null);

  const toggleTab = (title) => {
    setActiveTab(activeTab === title ? null : title);
    // setActiveSection(null); // إغلاق الأقسام الداخلية عند تغيير التبويب الرئيسي
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
          className="absolute top-0 left-2 w-full max-w-xs bg-white shadow-xl z-[2000] lg:hidden" // يظهر على الأجهزة الصغيرة فقط
        >
          {/* Header & Close Button */}
          <div className="p-4 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white">
            <h2 className="text-xl font-semibold text-[#777]">Menu</h2>
            <HiX
              className="w-6 h-6 cursor-pointer text-black"
              onClick={() => SetShowMobileMenu(false)}
            />
          </div>
          <div className="shadow-sm  relative">
            <input
              type="search"
              placeholder="Search For Products"
              className="w-full pl-10 pr-4 py-6  focus:outline-none  focus:ring-[#777] text-center"
            />
            <HiOutlineSearch
              size={25}
              className="absolute left-70 top-1/2 -translate-y-1/2 text-gray-500 "
            />
          </div>

          {/* Menu Items (Accordion) */}
          <div className="p-4">
            {menuData.map((tab) => (
              <div key={tab.title} className="mb-2 border-b border-gray-100">
                <div
                  className={`flex justify-between items-center py-3 cursor-pointer text-[16px] font-medium ${
                    activeTab === tab.title ? "text-[#222]" : "text-black"
                  }`}
                  onClick={() => toggleTab(tab.title)}
                >
                  {tab.title}
                  {tab.sections.length > 0 && (
                    <span className="ml-2 bg-[#222] text-white rounded-2xl  ">
                      {activeTab === tab.title ? (
                        <HiChevronUp size={20} />
                      ) : (
                        <HiChevronDown size={20} />
                      )}
                    </span>
                  )}
                </div>

                {/* Sub-Sections (Hidden products list for 'About Dermactive') */}
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

                          {/* Products List */}
                          {activeSection === section.name && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 pt-2 text-sm text-gray-500"
                            >
                              {section.products.map((product) => (
                                <li
                                  key={product}
                                  className="py-1 hover:text-black"
                                >
                                  {product}
                                </li>
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
