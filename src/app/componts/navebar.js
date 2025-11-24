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

export default function Navibar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  // Our Range
  const [Show, SetShow] = useState({
    ShowOurRange: false,
    ShowSkin: false,
    ShowProduct: false,
  });
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
              width={150}
              height={60}
              className="h-auto w-auto"
            />
          </Link>
          <ul className="lg:flex gap-6 text-[14px] hidden relative">
            {[
              "Our Range",
              "Skin Concerns",
              "Product Type",
              "About Dermactive",
            ].map((text, i) => (
              <Link key={i} href={"/aboutus"}>
                <li
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
                  {text}{" "}
                  <span className="mt-1">
                    <HiChevronDown />
                  </span>
                </li>
              </Link>
            ))}
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
        {/* ⬅️ أيقونة القائمة الجانبية - تظهر على الأجهزة الصغيرة فقط */}
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
      {/* ⬅️ مكون القائمة الجانبية (Mobile Menu) */}
      <MobileMenu
        ShowMobileMenu={ShowMobileMenu}
        SetShowMobileMenu={SetShowMobileMenu}
      />
    </>
  );
}
