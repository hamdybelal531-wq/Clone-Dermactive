"use client";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineSearch, HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import HoverOurRange from "./navebarhover/ourRangeH";
import HoverSkincon from "./navebarhover/skincon";
import HoverProduct from "./navebarhover/proudcttypeh";
import MobileMenu from "./navebarhover/sidbarmenu";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Navibar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  // Our Range
  const [Show, SetShow] = useState({
    ShowOurRange: false,
    ShowSkin: false,
    ShowProduct: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    { id: 1, text: "About Dermactive", collectionLink: "aboutus" },
    { id: 2, text: "Contact Us", collectionLink: "contactus" },
  ];
  // mobile menu sidbar
  const [ShowMobileMenu, SetShowMobileMenu] = useState(false);
  // mobile menu sidbar

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50  px-10"
      >
        <div className=" z-[99999] w-full flex justify-center lg:justify-between items-center transition-all relative p-2">
          <Link href={"/"}>
            <Image
              src="https://derm-active.com/wp-content/uploads/2023/01/Untitled-2-01.png"
              alt="Logo"
              width={140}
              height={60}
              className="h-auto w-auto"
            />
          </Link>
          <ul className="lg:flex gap-6 text-[14px] hidden relative mx-2">
            {["Our Range", "Skin Concerns", "Product Type"].map((text, i) => (
              <li
                key={i}
                onMouseEnter={() => {
                  if (text === "Our Range") {
                    SetShow({
                      ShowOurRange: true,
                      ShowProduct: false,
                      ShowSkin: false,
                    });
                  } else if (text === "Skin Concerns") {
                    SetShow({
                      ShowOurRange: false,
                      ShowProduct: false,
                      ShowSkin: true,
                    });
                  } else if (text === "Product Type") {
                    SetShow({
                      ShowOurRange: false,
                      ShowSkin: false,
                      ShowProduct: true,
                    });
                  }
                }}
                className="flex cursor-pointer text-black whitespace-nowrap hover:text-[#777] "
              >
                {text}
                <span className="mt-1">
                  <HiChevronDown />
                </span>
              </li>
            ))}
            {/* More Links */}
            <div
              onClick={toggleAccordion}
              className="flex relative justify-between items-center cursor-pointer  transition duration-200"
            >
              <h3
                onMouseEnter={() => {
                  SetShow({
                    ShowOurRange: false,
                    ShowSkin: false,
                    ShowProduct: false,
                  });
                }}
                className="text-lg text-[14px] text-black hover:text-[#777]"
              >
                More
              </h3>

              <div className="text-gray-600">
                {isOpen ? <FaChevronUp size={6} /> : <FaChevronDown size={6} />}
              </div>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 block opacity-100" : " hidden opacity-0"
                } overflow-hidden`}
              >
                <ul className="absolute top-full -left-3">
                  {items.map((item) => (
                    <Link href={`/${item.collectionLink}`} key={item.id}>
                      <li className="p-3 bg-white text-black shadow-sm text-[14px] rounded-2xl mt-2 whitespace-nowrap hover:text-[#777]">
                        {item.text}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </ul>
          <div className="relative w-full max-w-sm lg:block hidden">
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-4xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#777]"
            />
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
        </div>
        <HiOutlineMenuAlt3
          className="lg:hidden w-8 h-8 cursor-pointer text-black absolute top-5 left-2"
          onClick={() => SetShowMobileMenu(true)}
        />
        {/* Hover For Ul */}
        <HoverOurRange Show={Show} SetShow={SetShow} />
        <HoverSkincon Show={Show} SetShow={SetShow} />
        <HoverProduct Show={Show} SetShow={SetShow} />
        {/* Hover For Ul */}
      </motion.nav>
      <MobileMenu
        ShowMobileMenu={ShowMobileMenu}
        SetShowMobileMenu={SetShowMobileMenu}
      />
    </>
  );
}
