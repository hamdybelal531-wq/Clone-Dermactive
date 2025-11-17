"use client";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Navibar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const slider = [
    "https://derm-active.com/wp-content/uploads/2023/07/1980x963-2.1.webp",
    "https://derm-active.com/wp-content/uploads/2024/09/1980x963-Anti-Glow.jpg",
    "https://derm-active.com/wp-content/uploads/2023/06/1980x963-1.1.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState(null);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => setActiveIndex(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    onSelect();

    return () => carouselApi.off("select", onSelect);
  }, [carouselApi]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50  px-10"
      >
        <div className=" z-30 w-full flex justify-center md:justify-between items-center transition-all">
          <Image
            src="https://derm-active.com/wp-content/uploads/2023/01/Untitled-2-01.png"
            alt="Logo"
            width={150}
            height={60}
            className="h-auto w-auto"
          />
          <ul className="lg:flex gap-6 text-[14px] hidden">
            {[
              "Our Range",
              "Skin Concerns",
              "Product Type",
              "About Dermactive",
            ].map((text, i) => (
              <li key={i} className="flex cursor-pointer text-black">
                {text}{" "}
                <span className="mt-1">
                  <HiChevronDown />
                </span>
              </li>
            ))}
          </ul>
          <div className="relative w-full max-w-sm md:block hidden">
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-4xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#777]"
            />
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
        </div>
      </motion.nav>

      {/* Carousel */}
      <div className="w-full lg:h-screen relative mt-15">
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slider.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full border-2 border-[#999] ${
                activeIndex === i ? "bg-black" : "bg-transparent"
              } cursor-pointer`}
              onClick={() => carouselApi?.scrollTo(i)}
            />
          ))}
        </div>

        <Carousel className="w-full" setApi={setCarouselApi}>
          <CarouselContent>
            {slider.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full max-w-full  sm:h-screen h-[60vh]">
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-contain lg:object-cover"
                    priority
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
        </Carousel>
      </div>
    </>
  );
}
