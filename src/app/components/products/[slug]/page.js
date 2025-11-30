"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Products from "@/app/components/data/products";
import React from "react";
import Link from "next/link";

export default function ProductsPage({ params }) {
  const { slug } = React.use(params);

  const Product = Products[slug];

  const [Show, SetShow] = useState(0);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const y = useTransform(smoothScrollY, [0, 800], [0, -150]);
  if (!Product) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center bg-gray-50">
        <h1 className="text-3xl text-red-500 p-20 rounded-lg shadow-lg">
          Not Found Any Items
        </h1>
      </div>
    );
  }
  const itemSizes = "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw";
  const collectionKey = slug;

  return (
    <>
      <div className="lg:pt-20 pt-15 ">
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className={`relative mt-4 lg:mt-0 w-full h-40 md:h-60 lg:h-100 overflow-hidden`}
          >
            <Image
              src={Product.img}
              fill
              alt={Product.title}
              sizes="(max-width: 768px) 100vw, 90vw"
              className="sm:object-cover object-contain"
              loading="eager"
            />
            <h1 className="absolute top-15 left-10 md:top-22 md:text-5xl  sm:top-16 sm:left-20 sm:text-4xl text-3xl lg:top-40 lg:left-40 lg:text-7xl font-bold text-white ">
              {Product.title.toUpperCase()}
            </h1>
          </div>
        </motion.div>
      </div>
      <div>
        <div className="text-center   m-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center lg:w-[900px] xl:w-[1160px]">
          {Product.items.map((item) => {
            const productLink = `/components/oneproduct/${collectionKey}/${item.id.toString()}`;
            return (
              <Link key={item.id} href={productLink}>
                <div
                  onMouseLeave={() => {
                    if (Show === item.id) {
                      SetShow(0);
                    }
                  }}
                  onMouseEnter={() => {
                    if (Show !== item.id) {
                      SetShow(item.id);
                    }
                  }}
                  className={` relative p-10 lg:p-15 xl:p-10   ${
                    Show === item.id ? "shadow-2xl" : ""
                  } w-full  lg:w-[300px] `}
                >
                  <div
                    className={` relative h-50 sm:h-80 flex items-center justify-center`}
                  >
                    <Image
                      sizes={itemSizes}
                      src={item.img}
                      alt="unkhown"
                      fill
                      className={` transition-all duration-800 ease-in-out object-cover ${
                        !item.imgHover ? "hover:scale-105" : "scale-100"
                      }`}
                    />
                    {item.imgHover ? (
                      <div className="absolute w-full h-full inset-0">
                        <Image
                          sizes={itemSizes}
                          src={item.imgHover}
                          alt="un"
                          fill
                          className={`transition-all opacity-0     duration-800 ease-in-out object-cover p-3 ${
                            Show === item.id
                              ? "lg:opacity-100 lg:scale-105"
                              : "opacity-0 scale-90"
                          } scale-3d`}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="">
                    <h1 className="text-center text-[#777] text-[17px] mt-5 ">
                      {Product.title.toUpperCase()}
                    </h1>
                    <p className="text-center text-[#222] mt-2  sm:text-[19px] text-[14px]">
                      {item.name}
                    </p>
                    <p
                      className={` transition-all pointer-events-none z-50 absolute bg-white bottom-10 translate-y-full  shadow-lg h-fit left-0 text-center text-[#666] w-full m-auto pb-7 pt-2 px-5 sm:text-[15px] text-[14px] ${
                        Show === item.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.prag}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
