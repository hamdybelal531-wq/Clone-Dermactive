"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { HiOutlineSearch } from "react-icons/hi";
import { useState, useEffect, useCallback } from "react";

const calculateDuration = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    return width >= 1200 ? 900 : width >= 768 ? 600 : 350;
  }
  return 500;
};

export default function NewAravil() {
  const [duration, setDuration] = useState(calculateDuration);

  const updateDuration = useCallback(() => {
    setDuration(calculateDuration());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, [updateDuration]);

  const SMOOTH_EASING = "cubic-bezier(0.25, 0.1, 0.25, 1)";
  const boxes = [
    {
      url: "https://derm-active.com/wp-content/uploads/2023/06/Tricho-ACT-Anti-Hair-loss-Shampoo.jpg",
      url2: "https://derm-active.com/wp-content/uploads/2023/06/1000x1440-3-711x1024.jpg",
      name: "tricho act".toUpperCase(),
      description: "anti hair loss shampoo ".toUpperCase(),
      id: 1,
    },
    {
      url: "https://derm-active.com/wp-content/uploads/2024/08/TRIPPLE-EFFECT-711x1024.png",
      name: "Triple Efect".toUpperCase(),
      description: "Sweet control".toUpperCase(),
      id: 2,
    },
    {
      url: "https://derm-active.com/wp-content/uploads/2024/08/REFRESHING-711x1024.png",
      name: "refreshing".toUpperCase(),
      description: "sweet control".toUpperCase(),
      id: 3,
    },
    {
      url: "https://derm-active.com/wp-content/uploads/2024/08/INTENSE-711x1024.png",
      name: "Intence".toUpperCase(),
      description: "sweet control".toUpperCase(),
      id: 4,
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 4 },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 2, slidesToSlide: 2 },
  };
  const newArrivalItemSizes =
    "(max-width: 1024px) 50vw, (max-width: 1400px) 25vw, 20vw";
  return (
    <>
      <div className="w-full lg:w-[75%] mx-auto sm:p-3 text-center mt-8">
        <h1 className="text-gray-800 text-2xl  uppercase text-center ">
          New Arrival
        </h1>
        <Carousel
          // showDots={true}
          swipeable={true}
          draggable={true}
          minimumTouchDrag={5}
          transitionDuration={duration}
          customTransition={`transform ${duration}ms ${SMOOTH_EASING}`}
          responsive={responsive}
        >
          {boxes.map((box) => {
            return (
              <div
                key={box.id}
                className="group  overflow-hidden transition-all duration-300 mt-20  m-4 flex flex-col cursor-pointer relative"
              >
                <div className="relative w-full sm:h-80 h-40 overflow-hidden">
                  <Image
                    sizes={newArrivalItemSizes}
                    src={box.url}
                    fill
                    alt={box.name}
                    className="object-contain  transition-all duration-500 "
                  />
                </div>

                {box.url2 ? (
                  <div className="absolute -top-2 left-0 w-full h-full">
                    <Image
                      sizes={newArrivalItemSizes}
                      src={box.url2}
                      alt="Second View"
                      fill
                      className="p-5 object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
                    />
                  </div>
                ) : null}

                <HiOutlineSearch className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/80 p-3 text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white" />

                <div className="px-4  flex flex-col items-center">
                  <h1 className="text-[14px]  text-gray-800 pt-2 pb-1 transition-colors duration-300 group-hover:text-blue-600">
                    {box.name}
                  </h1>
                  <p className="text-[10px] lg:text-[14px] text-gray-500 pb-2">
                    {box.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
