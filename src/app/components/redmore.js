"use client";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
export default function Readmore() {
  return (
    <>
      <div className="w-full text-center h-[220px] sm:h-[300px] md:h-80 lg:mb-40">
        <div className="w-[100px] m-auto flex  justify-center items-center mt-5 text-[#777]">
          <span>
            <HiOutlineArrowNarrowRight className=" w-5 h-5 text-4xl" />
          </span>
          <h1 className="text-2xl inline-block Readmore relative">Readmore</h1>
        </div>
        <div className="w-full h-100 relative">
          <Image
            sizes="100vw"
            src={
              "https://derm-active.com/wp-content/uploads/2023/06/1920x470-ENG.jpg"
            }
            alt="unkhonwn"
            fill
            className="lg:object-cover object-contain lg:mt-10 -mt-20 p-0"
          />
        </div>
      </div>
    </>
  );
}
