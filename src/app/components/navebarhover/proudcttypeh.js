import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { rangesData } from "@/app/components/data/products";

export default function HoverProduct({ Show, SetShow }) {
  const [namePrudct, setNamePrudect] = useState(rangesData[0].name);

  const renderRangeItems = () => {
    return rangesData.map((range) => (
      <li
        key={range.name}
        className="hover:text-[#777] cursor-pointer relative text-[20px] whitespace-nowrap"
      >
        <span
          style={{
            color: namePrudct === range.name ? "#777" : "black",
          }}
          onMouseEnter={() => setNamePrudect(range.name)}
          className="hover:text-[#777]"
        >
          {range.name}
        </span>
        <ul
          className="p-10 flex-col gap-5 absolute top-full min-w-[700px] text-[#777]"
          style={{
            display: namePrudct === range.name ? "flex" : "none",
            left:
              range.name === "Face Care"
                ? "-120px"
                : range.name === "Sun Protection"
                ? "-230px"
                : range.name === "Serums"
                ? "-360px"
                : range.name === "Eye Care"
                ? "-450px"
                : range.name === "Shampoo & Masks"
                ? "-550px"
                : "0px",
          }}
        >
          {range.products.map((product, index) => (
            <Link
              key={index}
              href={`/components/oneproduct/${
                product.collectionKey
              }/${product.id.toString()}`}
            >
              <li key={product.name} className="hover:text-black">
                {product.name}
              </li>
            </Link>
          ))}
          <div className="p-20 absolute lg:w-[400px] xl:w-[700px] h-[450px] top-0 lg:-right-[250px] xl:-right-[600px]">
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={range.imageSrc}
              fill
              alt={`${range.name} products photo`}
              className="object-cover p-5"
            />
          </div>
        </ul>
      </li>
    ));
  };

  return (
    <>
      {Show.ShowProduct && (
        <div
          onMouseLeave={() => SetShow({ ...Show, ShowProduct: false })}
          className="absolute top-full left-0 w-full h-140 bg-white pb-10 flex"
        >
          <div>
            <ul className="p-10 flex flex-col gap-5">
              <div className="flex gap-5 ">{renderRangeItems()}</div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
