import Image from "next/image";
import { useState } from "react";

// بيانات المجموعات (Ranges Data)
const rangesData = [
  {
    name: "Acti Clear",
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
    name: "Acti White",
    products: [
      "ACTI-WHITE Foaming Gel",
      "ACTI-WHITE Brightening Correcting Serum",
      "ACTI-WHITE Depigmenting Cream",
      "ACTI-WHITE Eye Contour",
      "ACTI-WHITE 2in1 Body Milk",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-White.jpg",
  },
  {
    name: "Acti Solair",
    products: [
      "ACTI-SOLAIRE SPF 50+ Ultra Fluid",
      "ACTI-SOLAIRE SPF 50+ Ultra Fluid Light Tinted",
      "ACTI-SOLAIRE SPF 50+ MELTING CREAM",
      "ACTI-SOLAIRE SPF 50+ MELTING CREAM Light Tinted",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/05/864x600-Acti-Solaire-1.jpg",
  },
  {
    name: "Acti Repair",
    products: [
      "ACTI-REPAIR CICA Cream",
      "ACTI-REPAIR Soothing Cleansing Gel",
      "ACTI-REPAIR Hydro Gel",
      "ACTI-REPAIR Emollient Extreme",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-Repair.jpg",
  },
  {
    name: "Tricho Act",
    products: [
      "TRICHO-ACT Anti-Hair loss Shampoo",
      "TRICHO-ACT Anti-Dandruff Shampoo DS",
      "TRICHO-ACT Hair Repairing Mask",
      "TRICHO-ACT Anti-Hair Loss Lotion Concentrate",
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/02/Ranges-4.2-1.jpg",
  },
];

export default function HoverOurRange({ Show, SetShow }) {
  const [nameAction, setNameAction] = useState(rangesData[0].name);

  const renderRangeItems = () => {
    return rangesData.map((range) => (
      <li
        key={range.name}
        className="hover:text-[#777] cursor-pointer relative text-[20px] whitespace-nowrap"
      >
        <span
          style={{
            color: nameAction === range.name ? "#777" : "",
          }}
          onMouseEnter={() => setNameAction(range.name)}
          className="hover:text-[#777]"
        >
          {range.name}
        </span>
        {/* القائمة الفرعية والصورة */}
        <ul
          className="p-10 flex-col gap-5 absolute top-full min-w-[700px] text-[#777]"
          style={{
            display: nameAction === range.name ? "flex" : "none",
            left:
              range.name === "Acti White"
                ? "-120px"
                : range.name === "Acti Solair"
                ? "-260px"
                : range.name === "Acti Repair"
                ? "-390px"
                : range.name === "Tricho Act"
                ? "-530px"
                : "0px",
          }}
        >
          {range.products.map((product) => (
            <li key={product}>{product}</li>
          ))}
          {/*  الصورة */}
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
          className="absolute top-20 left-0 w-full h-120 bg-white pb-10 flex z-[9999]"
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
