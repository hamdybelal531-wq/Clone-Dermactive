"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function OurRance() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      items: 1,
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
      Name: "SWEAT CONTROL",
      url: "https://derm-active.com/wp-content/uploads/2024/08/864x600-Sweat-Control.jpg",
    },
    {
      Name: "SWEAT CONTROL",
      url: "https://derm-active.com/wp-content/uploads/2024/08/864x600-Sweat-Control.jpg",
    },
    {
      Name: "SWEAT CONTROL",
      url: "https://derm-active.com/wp-content/uploads/2024/08/864x600-Sweat-Control.jpg",
    },
    {
      Name: "SWEAT CONTROL",
      url: "https://derm-active.com/wp-content/uploads/2024/08/864x600-Sweat-Control.jpg",
    },
  ];
  return (
    <>
      <h1 className="text-center text-4xl text-[#777] mt-10">
        DISCOVER OUR RANGE
      </h1>
      <Carousel
        infinite={true} // يخلي السلايدر يدور بشكل مستمر
        autoPlay={true} // يشتغل تلقائيًا
        autoPlaySpeed={3000} // سرعة التغيير بالألف جزء من الثانية (هنا كل 3 ثواني)
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={500}
        containerClass="carousel-container"
        showDots
        slidesToSlide={1}
        responsive={responsive}
        className="sm:mt-10 pb-10 text-center" // ← خلي margin-bottom كبير عشان تنزل الدوتس لتحت
        dotListClass="flex justify-center gap-2" // ترتيب الدوتس في النص
        itemClass="px-3"
      >
        {Boxs.map((obj, i) => (
          <div
            key={i}
            className="relative sm-[245px] lg:w-[340px] xl:w-[95%] h-full bg-white border-2 sm:m-2  overflow-hidden rounded-xl cursor-pointer"
          >
            <Image
              src={obj.url}
              alt={obj.Name}
              width={500}
              height={500}
              priority
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
            />
            <h1 className="absolute bottom-5 right-5 text-2xl text-[#777] bg-white/80 px-3 py-1 rounded-3xl shadow">
              {obj.Name}
            </h1>
          </div>
        ))}
      </Carousel>
    </>
  );
}
