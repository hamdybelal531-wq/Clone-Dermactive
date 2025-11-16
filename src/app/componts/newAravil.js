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
      search: "",
      name: "tricho act".toUpperCase(),
      description: "anti hair loss shampoo ".toUpperCase(),
      id: 1,
    },
    {
      url: "https://derm-active.com/wp-content/uploads/2024/08/TRIPPLE-EFFECT-711x1024.png",
      search: "",
      name: "Triple Efect".toUpperCase(),
      description: "Sweet control".toUpperCase(),
      id: 2,
    },
    {
      url: "https://derm-active.com/wp-content/uploads/2024/08/REFRESHING-711x1024.png",
      search: "",
      name: "refreshing".toUpperCase(),
      description: "sweet control".toUpperCase(),
      id: 3,
    },
    {
      url: "https://derm-active.com/wp-content/uploads/2024/08/INTENSE-711x1024.png",
      search: "",
      name: "Intence".toUpperCase(),
      description: "sweet control".toUpperCase(),
      id: 4,
    },
  ];
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
  return (
    <>
      <div className="w-[75%] mx-auto  sm:p-3 text-center">
        <h1 className="text-[#777] text-3xl text-center mt-10">New Arrivel</h1>
        <Carousel responsive={responsive} className="">
          {boxes.map((box) => {
            return (
              <div
                key={box.id}
                className="w-full h-full  m-5 flex flex-col overflow-hidden cursor-pointer relative box"
              >
                <div className="relative w-full h-100">
                  <Image
                    src={box.url}
                    fill
                    // fill
                    alt="sweet control"
                    className="p-5"
                  ></Image>
                </div>
                {box.url2 ? (
                  <div className="w-full absolute h-8/12">
                    <Image
                      src="https://derm-active.com/wp-content/uploads/2023/06/1000x1440-3-711x1024.jpg"
                      alt="image"
                      fill
                      className=" ml-3  top-0 left-0 opacity-0 photohover transition-all"
                    />
                  </div>
                ) : null}
                <h1 className="text-[#777] text-center pb-3 -mt-5 hover:text-[#222]">
                  {box.name}
                </h1>
                <p className="text-center text-[#222] hover:text-[#777] pb-3 mt-2 ">
                  {box.description}
                </p>
                <HiOutlineSearch className=" text-5xl search transition-all  bg-[#eee] absolute px-3 py-2 opacity-0  text-gray-500 bottom-25 left-30" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
