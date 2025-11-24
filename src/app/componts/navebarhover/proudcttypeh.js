import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// بيانات المجموعات (Ranges Data)
//
const rangesData = [
  {
    name: "Cleansers",
    products: [
      {
        name: "ACTI-CLEAR Gentle Cleansing Gel",
        collectionKey: "acti-clear",
        id: 1,
      },
      { name: "ACTI-WHITE Foaming Gel", collectionKey: "acti-white", id: 1 },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-9.jpg",
  },
  {
    name: "Face Care",
    products: [
      {
        name: "ACTI-CLEAR Hydra-Mattifying Gel",
        collectionKey: "acti-clear",
        id: 2,
      },
      {
        name: "ACTI-WHITE Depigmenting Cream",
        collectionKey: "acti-white",
        id: 3,
      },
      { name: "ACTI-WHITE Eye Contour", collectionKey: "acti-white", id: 4 },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-3.jpg",
  },
  {
    name: "Sun Protection",
    products: [
      {
        name: "ACTI-SOLAIRE SPF 50+ Ultra Fluid",
        collectionKey: "acti-solaire",
        id: 4,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ Ultra Fluid Light Tinted",
        collectionKey: "acti-solaire",
        id: 5,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ MELTING CREAM",
        collectionKey: "acti-solaire",
        id: 3,
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ MELTING CREAM Light Tinted",
        collectionKey: "acti-solaire",
        id: 1,
      }, // تم الربط بالـ ID 1
      {
        name: "ACTI-SOLAIRE SPF 50+ LAIT SPRAY",
        collectionKey: "acti-solaire",
        id: 2,
      },
      {
        name: "ACTI-SOLAIRE SPF50+ KIDS",
        collectionKey: "acti-solaire",
        id: 6,
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/05/864x600-Acti-Solaire.jpg",
  },
  {
    name: "Serums",
    products: [
      {
        name: " ACTI-CLEAR Correcting Serum",
        collectionKey: "acti-clear",
        id: 3,
      },
      {
        name: "ACTI-WHITE Brightening Correcting Serum",
        collectionKey: "acti-white",
        id: 2,
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-4.jpg",
  },
  {
    name: "Eye Care",
    products: [
      { name: " ACTI-WHITE Eye Contour", collectionKey: "acti-white", id: 4 },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/02/864x600-7.jpg",
  },
  {
    name: "Shampoo & Masks",
    products: [
      {
        name: "TRICHO-ACT Anti-Hair loss Shampoo",
        collectionKey: "tricho-act",
        id: 1,
      },
      {
        name: "TRICHO-ACT Anti-Dandruff Shampoo DS",
        collectionKey: "tricho-act",
        id: 2,
      },
      {
        name: "TRICHO-ACT Hair Repairing Mask",
        collectionKey: "tricho-act",
        id: 3,
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-5.jpg",
  },
];

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
        {/* القائمة الفرعية والصورة */}
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
            // استخدام Link هنا لربط المنتج بصفحته
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
          {/* الصورة */}
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
          className="absolute top-20 left-0 w-full h-140 bg-white pb-10 flex"
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
