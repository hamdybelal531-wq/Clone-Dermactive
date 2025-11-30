import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { rangesDataSkin } from "@/app/data/products";

// بيانات المجموعات (Ranges Data)
//

export default function HoverSkincon({ Show, SetShow }) {
  const [nameSkin, setNameSkin] = useState(rangesDataSkin[0].name);

  const renderRangeItems = () => {
    return rangesDataSkin.map((range) => (
      <li
        key={range.name}
        className="hover:text-[#777] cursor-pointer relative text-[20px] whitespace-nowrap"
      >
        <Link href={`/products/${range.products[0].collectionKey}`}>
          <span
            style={{
              color: nameSkin === range.name ? "#777" : "black",
            }}
            onMouseEnter={() => setNameSkin(range.name)}
            className="hover:text-[#777]"
          >
            {range.name}
          </span>
        </Link>
        {/* القائمة الفرعية والصورة */}
        <ul
          className="p-10 flex-col gap-5 absolute top-full min-w-[700px] text-[#777]"
          style={{
            display: nameSkin === range.name ? "flex" : "none",
            left:
              range.name === "Un-Even & Pigmented Skin"
                ? "-260px"
                : range.name === "Sun Exposure"
                ? "-520px"
                : range.name === "Irritated & Damaged Skin"
                ? "-660px"
                : range.name === "Hair Loss"
                ? "-900px"
                : "0px",
          }}
        >
          {range.products.map((product, index) => (
            // تم تطبيق Link هنا لربط المنتج بصفحته باستخدام collectionKey و id
            <Link
              key={index}
              href={`/componts/oneproduct/${
                product.collectionKey
              }/${product.id.toString()}`}
            >
              <li key={product.name} className="hover:text-black">
                {product.name}
              </li>
            </Link>
          ))}
          {/*  الصورة */}
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
      {Show.ShowSkin && (
        <div
          onMouseLeave={() => SetShow({ ...Show, ShowSkin: false })}
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
