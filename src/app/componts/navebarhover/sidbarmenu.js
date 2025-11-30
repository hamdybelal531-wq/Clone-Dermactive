// MobileMenu.jsx

import { useState } from "react";
import { HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";
import { menuData } from "@/app/data/mobileproducts";

export default function MobileMenu({ ShowMobileMenu, SetShowMobileMenu }) {
  const [activeTab, setActiveTab] = useState(null);
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
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 w-full max-w-xs md:max-w-lg bg-white shadow-xl z-[999999999] lg:hidden overflow-y-auto h-screen"
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
                    ) : tab.title === "Contact Us" ? (
                      <Link href={`/contactus`}>
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

                          {activeSection === section.name && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 pt-2 text-sm text-gray-500"
                            >
                              {section.products.map((product) => (
                                <Link
                                  href={`/componts/oneproduct/${
                                    product.collectionKey
                                  }/${product.id.toString()}`}
                                  key={product.name}
                                  onClick={() => SetShowMobileMenu(false)}
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
