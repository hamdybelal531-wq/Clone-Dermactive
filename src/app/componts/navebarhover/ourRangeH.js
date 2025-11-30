import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { getRangesData } from "@/app/data/products";

const rangesData = getRangesData();
export default function HoverOurRange({ Show, SetShow }) {
  const [nameAction, setNameAction] = useState(rangesData[0].name);

  const renderRangeItems = () => {
    return rangesData.map((range) => (
      <li
        key={range.name}
        className="hover:text-[#777] cursor-pointer relative text-[20px] whitespace-nowrap"
      >
        <Link href={`/products/${range.name.toLowerCase()}`}>
          <span
            style={{
              color: nameAction === range.name ? "#777" : "black",
            }}
            onMouseEnter={() => setNameAction(range.name)}
            className="hover:text-[#777]"
          >
            {range.name}
          </span>
        </Link>
        <ul
          className="p-10 flex-col gap-5 absolute top-full min-w-[700px] text-[#777]"
          style={{
            display: nameAction === range.name ? "flex" : "none",
            left:
              range.name === "Acti-White"
                ? "-120px"
                : range.name === "Acti-Solaire"
                ? "-260px"
                : range.name === "Acti-Repair"
                ? "-390px"
                : range.name === "Tricho-Act"
                ? "-530px"
                : "0px",
          }}
        >
          {range.products.map((product, index) => (
            <Link
              key={index}
              href={`/componts/oneproduct/${range.name.toLowerCase()}/${(
                index + 1
              ).toString()}`}
            >
              <li>{product}</li>
            </Link>
          ))}
          <div className="p-10 absolute lg:w-[400px] xl:w-[700px] h-[400px] top-0 lg:-right-[250px] xl:-right-[600px]">
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
      {Show.ShowOurRange && (
        <div
          onMouseLeave={() => SetShow({ ...Show, ShowOurRange: false })}
          className="absolute top-full left-0 w-full h-120 bg-white pb-10 flex z-[9999]"
        >
          <div className="pb-10">
            <ul className="p-10 flex flex-col gap-5">
              <div className="flex gap-10 ">{renderRangeItems()}</div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
