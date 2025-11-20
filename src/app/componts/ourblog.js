"use client";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function OurBlog() {
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
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const boxes = [
    {
      url: "https://derm-active.com/wp-content/uploads/2023/05/865x620-2.jpg",
      prag: "Acne-Fighting Products: How to Choose and Use the Best Skincare",
      id: 1,
    },
    {
      url: "https://derm-active.com/wp-content/uploads/2023/05/865x620-1.jpg",
      prag: "How to Target and Treat Oily Skin Using the Best Ingredients",
      id: 2,
    },
    {
      url: "https://derm-active.com/wp-content/uploads/2023/05/865x620-3.jpg",
      prag: "The Importance of Sunscreen:Why You Should Wear It Every Day",
      id: 3,
    },
  ];

  return (
    <>
      <div className="lg:w-[80%] w-full mx-auto py-5 text-center pb-10">
        <h1 className="text-center  uppercase text-2xl text-gray-800 ">
          Our Blog
        </h1>

        <Carousel
          // autoPlay={true}
          arrows={false}
          showDots={true}
          swipeable={true}
          draggable={true}
          minimumTouchDrag={5}
          itemClass="p-3"
          responsive={responsive}
          customTransition={`transform ${duration}ms ${SMOOTH_EASING}`}
          transitionDuration={duration}
        >
          {boxes.map((box) => {
            return (
              <div
                className="w-full h-full  overflow-hidden 
                    transform transition duration-300 hover:scale-[1.02] cursor-pointer"
                key={box.id}
              >
                <div className="w-full h-[250px] relative">
                  <Image
                    src={box.url}
                    fill
                    alt="Blog Post Image"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  ></Image>
                </div>

                <div className="p-4">
                  <p className="text-[14px] text-[#777] text-left mt-3 leading-snug">
                    {box.prag}
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
