import Image from "next/image";
import { useState } from "react";

// بيانات المجموعات (Ranges Data)
//
const rangesData = [
  {
    name: "Oily & Acne - prone skin",
    products: [
      "ACTI-CLEAR Gentle Cleansing Gel",
      "ACTI-CLEAR Hydra-Mattifying Gel",
      "ACTI-CLEAR Correcting Serum",
      "ACTI-CLEAR Global AC Cream",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-Clear.jpg",
  },
  {
    name: "Un-Even & Pigmented Skin",
    products: [
      "ACTI-WHITE Foaming Gel",
      "ACTI-WHITE Brightening Correcting Serum",
      "ACTI-WHITE Depigmenting Cream",
      "ACTI-WHITE Eye Contour",
      "ACTI-WHITE 2in1 Body Milk",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-2.jpg",
  },
  {
    name: "Sun Exposure",
    products: [
      "ACTI-SOLAIRE SPF 50+ Ultra Fluid",
      "ACTI-SOLAIRE SPF 50+ Ultra Fluid Light Tinted",
      "ACTI-SOLAIRE SPF 50+ MELTING CREAM",
      "ACTI-SOLAIRE SPF 50+ MELTING CREAM Light Tinted",
      "ACTI-SOLAIRE SPF 50+ LAIT SPRAY",
      "ACTI-SOLAIRE SPF50+ KIDS",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/05/New-Project-40.jpg",
  },
  {
    name: "Irritated & Damaged Skin",
    products: [
      "ACTI-REPAIR CICA Cream",
      "ACTI-REPAIR Soothing Cleansing Gel",
      "ACTI-REPAIR Hydro Gel",
      "ACTI-REPAIR Emollient Extreme",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-8.jpg",
  },
  {
    name: "Hair Loss",
    products: [
      "TRICHO-ACT Anti-Hair loss Shampoo",
      "TRICHO-ACT Anti-Dandruff Shampoo DS",
      "TRICHO-ACT Hair Repairing Mask",
      "TRICHO-ACT Anti-Hair Loss Lotion Concentrate",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-6.jpg",
  },
];

export default function HoverSkincon({ Show, SetShow }) {
  const [nameSkin, setNameSkin] = useState(rangesData[0].name);

  const renderRangeItems = () => {
    return rangesData.map((range) => (
      <li
        key={range.name}
        className="hover:text-[#777] cursor-pointer relative text-[20px] whitespace-nowrap"
      >
        <span
          style={{
            color: nameSkin === range.name ? "#777" : "",
          }}
          onMouseEnter={() => setNameSkin(range.name)}
          className="hover:text-[#777]"
        >
          {range.name}
        </span>
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
          {range.products.map((product) => (
            <li key={product}>{product}</li>
          ))}
          {/*  الصورة */}
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
          className="absolute top-18 left-0 w-full h-140 bg-white pb-10 flex"
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
