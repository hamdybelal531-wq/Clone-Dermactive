"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ملاحظة: لإضافة Text Shadow في Tailwind، قد تحتاج إلى إضافة مكون إضافي
// أو تعريف الكلاس في Global CSS. سنستخدم هنا كلاسات Tailwind فقط.

export default function OurRance() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
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
    // ... باقي العناصر
  ];

  return (
    <>
      <h1 className="text-center text-3xl  lg:text-4xl text-gray-800 mt-16 mb-12">
        DISCOVER OUR RANGE
      </h1>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        // containerClass="carousel-container"
        // showDots
        slidesToSlide={1}
        responsive={responsive}
        className="sm:mt-10 pb-16 text-center"
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
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 p-[5px]"
            />

            <div className="absolute inset-0 -bottom-[38px] sm:-bottom-[37px] md:-bottom-[42px] flex items-end justify-end p-6">
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
