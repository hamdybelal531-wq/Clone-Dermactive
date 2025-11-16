"use client";
import Carousel from "react-multi-carousel";
import Image from "next/image";

export default function OurBlog() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 3,
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
      <div className="w-[75%] mx-auto  sm:p-3 text-center">
        <h1 className="text-center text-5xl text-[#777]">Our Blog</h1>
        <Carousel itemClass="p-2" showDots responsive={responsive}>
          {boxes.map((box) => {
            return (
              <div className="w-full h-full m-5" key={box.id}>
                <div className="w-full h-[200px] relative">
                  <Image
                    src={box.url}
                    fill
                    alt="Unkhown"
                    className="object-cover"
                  ></Image>
                </div>
                <div className="">
                  <p className="text-1xl max-w-[90%] text-left text-[#666] mt-3">
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
