"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { HiOutlineSearch } from "react-icons/hi";

export default function NewAravil() {
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
    desktop: { breakpoint: { max: 1400, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
  };

  return (
    <>
      <div className="w-full lg:w-[75%] mx-auto sm:p-3 text-center py-12">
        <h1 className="text-gray-800 text-5xl  text-center mb-12">
          New Arrival
        </h1>
        <Carousel responsive={responsive} className="py-8">
          {boxes.map((box) => {
            return (
              <div
                key={box.id}
                className="group  overflow-hidden transition-all duration-300  m-4 flex flex-col cursor-pointer relative"
              >
                <div className="relative w-full h-80 overflow-hidden">
                  <Image
                    src={box.url}
                    fill
                    alt={box.name}
                    className="object-contain  transition-all duration-500 "
                  />
                </div>

                {box.url2 ? (
                  <div className="absolute -top-2 left-0 w-full h-full">
                    <Image
                      sizes="100vw"
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
