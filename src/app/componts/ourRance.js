"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const calculateDuration = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    return width >= 1200 ? 900 : width >= 768 ? 600 : 350;
  }
  return 500;
};

export default function OurRance() {
  const [duration, setDuration] = useState(calculateDuration);

  const updateDuration = useCallback(() => {
    setDuration(calculateDuration());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, [updateDuration]);
  const SMOOTH_EASING = "cubic-bezier(0.25, 0.1, 0.25, 1)";
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 4,
      slidesToSlide: 4,
      // customTransition: `transform 1.2s ${SMOOTH_EASING}`,
      // transitionDuration: 1200,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 4,
      slidesToSlide: 4,
      // customTransition: `transform 0.8s ${SMOOTH_EASING}`,
      // transitionDuration: 800,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
      // customTransition: `transform 0.5s ${SMOOTH_EASING}`,
      // transitionDuration: 500,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
      slidesToSlide: 2,
      // customTransition: `transform 0.5s ${SMOOTH_EASING}`,
      // transitionDuration: 500,
    },
  };
  const Boxs = [
    {
      Name: "TRICHO ACT",
      colectionLink: "tricho-act",
      url: "https://derm-active.com/wp-content/uploads/2023/06/864x600-Tricho-Act.jpg",
    },
    {
      Name: "SWEAT CONTROL",
      colectionLink: "sweat-control",
      url: "https://derm-active.com/wp-content/uploads/2024/08/864x600-Sweat-Control.jpg",
    },
    {
      Name: "ACTI-WHITE",
      colectionLink: "acti-white",
      url: "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-White.jpg",
    },
    {
      Name: "ACTI-REPAIR",
      colectionLink: "acti-repair",
      url: "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-Repair.jpg",
    },
  ];

  const carouselItemSizes =
    "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw";
  return (
    <>
      <h1 className="text-center text-2xl  uppercase lg:text-2xl text-gray-800 mt-4 ">
        DISCOVER OUR RANGE
      </h1>
      <Carousel
        additionalTransfrom={0}
        infinite={true}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        arrows={false}
        swipeable={true}
        draggable={true}
        minimumTouchDrag={5}
        pauseOnHover={true}
        containerClass="carousel-container"
        customTransition={`transform ${duration}ms ${SMOOTH_EASING}`}
        transitionDuration={duration}
        responsive={responsive}
        className=" pb-16 text-center "
        itemClass=""
      >
        {Boxs.map((obj, i) => (
          <Link key={i} href={`/products/${obj.colectionLink}`}>
            <div className="relative w-full h-35 sm:h-60 md:h-60 group  cursor-pointer">
              <Image
                sizes={carouselItemSizes}
                src={obj.url}
                alt={obj.Name}
                fill
                priority
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 p-[8px]"
              />

              <div className="absolute inset-0 -bottom-[38px] sm:-bottom-[37px] md:-bottom-[42px] flex items-end justify-end p-5 text-right">
                <h1 className="text-[#777] text-[14px]  sm:text-[18px] text-left whitespace-nowrap transition duration-300 border-b-2 border-gray-400">
                  {obj.Name}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </>
  );
}
