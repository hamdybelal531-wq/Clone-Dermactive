"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function OurRance() {
  // duration 
  const [duration, setDuration] = useState(500);

  const updateDuration = () => {
    const width = window.innerWidth;
    if (width >= 1200) setDuration(900);   // large screen
    else if (width >= 768) setDuration(600); // tablet
    else setDuration(350);                 // mobile
  };

  useEffect(() => {
    updateDuration(); // run on first load
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, []);
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
      url: "https://derm-active.com/wp-content/uploads/2023/06/864x600-Tricho-Act.jpg",
    },
    {
      Name: "SWEAT CONTROL",
      url: "https://derm-active.com/wp-content/uploads/2024/08/864x600-Sweat-Control.jpg",
    },
    {
      Name: "DERMA ACTIVE BABY",
      url: "https://derm-active.com/wp-content/uploads/2024/08/864x600-Baby.jpg",
    },
    {
      Name: "ACTI-WHITE",
      url: "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-White.jpg",
    },
    {
      Name: "TRICHO ACT",
      url: "https://derm-active.com/wp-content/uploads/2023/06/864x600-Tricho-Act.jpg",
    },
    {
      Name: "SWEAT CONTROL",
      url: "https://derm-active.com/wp-content/uploads/2024/08/864x600-Sweat-Control.jpg",
    },
    {
      Name: "DERMA ACTIVE BABY",
      url: "https://derm-active.com/wp-content/uploads/2024/08/864x600-Baby.jpg",
    },
    {
      Name: "ACTI-WHITE",
      url: "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-White.jpg",
    },

    // ... باقي العناصر
  ];

  return (
    <>
      <h1 className="text-center text-2xl  uppercase lg:text-2xl text-gray-800 mt-4 ">
        DISCOVER OUR RANGE
      </h1>
      <Carousel
        additionalTransfrom={0}
        infinite={false}
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
          <div
            key={i}
            className="relative w-full h-35 sm:h-60 md:h-60 group  cursor-pointer"
          >
            <Image
              sizes="100vw"
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
        ))}
      </Carousel>
    </>
  );
}
