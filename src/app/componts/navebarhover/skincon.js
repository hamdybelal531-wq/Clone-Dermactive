import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// بيانات المجموعات (Ranges Data)
//
const rangesData = [
  {
    name: "Oily & Acne - prone skin",
    products: [
      {
        name: "ACTI-CLEAR Gentle Cleansing Gel",
        collectionKey: "acti-clear",
        id: 1, // صحيح
      },
      {
        name: "ACTI-CLEAR Hydra-Mattifying Gel",
        collectionKey: "acti-clear",
        id: 2, // صحيح
      },
      {
        name: "ACTI-CLEAR Correcting Serum",
        collectionKey: "acti-clear",
        id: 3, // صحيح
      },
      {
        name: "ACTI-CLEAR Global AC Cream",
        collectionKey: "acti-clear",
        id: 4, // صحيح
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-Acti-Clear.jpg",
  },
  {
    name: "Un-Even & Pigmented Skin",
    products: [
      { name: "ACTI-WHITE Foaming Gel", collectionKey: "acti-white", id: 1 }, // صحيح
      {
        name: "ACTI-WHITE Brightening Correcting Serum",
        collectionKey: "acti-white",
        id: 2, // صحيح
      },
      {
        name: "ACTI-WHITE Depigmenting Cream",
        collectionKey: "acti-white",
        id: 3, // صحيح
      },
      { name: "ACTI-WHITE Eye Contour", collectionKey: "acti-white", id: 4 }, // صحيح
      // ⚠️ ملاحظة: منتج "ACTI-WHITE 2in1 Body Milk" غير موجود في كائن Products الأصلي.
      // تم تركه مع ID 5 كما افترضت سابقًا لضمان عدم حدوث خطأ في الكود.
      { name: "ACTI-WHITE 2in1 Body Milk", collectionKey: "acti-white", id: 5 },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-2.jpg",
  },
  {
    name: "Sun Exposure",
    products: [
      {
        name: "ACTI-SOLAIRE SPF 50+ Ultra Fluid",
        collectionKey: "acti-solaire",
        id: 4, // صحيح
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ Ultra Fluid Light Tinted",
        collectionKey: "acti-solaire",
        id: 5, // صحيح
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ MELTING CREAM",
        collectionKey: "acti-solaire",
        id: 3, // صحيح
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ MELTING CREAM Light Tinted",
        collectionKey: "acti-solaire",
        id: 1, // صحيح (يطابق SPF 50 MELTING CREAM Light Tinted)
      },
      {
        name: "ACTI-SOLAIRE SPF 50+ LAIT SPRAY",
        collectionKey: "acti-solaire",
        id: 2, // صحيح
      },
      {
        name: "ACTI-SOLAIRE SPF50+ KIDS",
        collectionKey: "acti-solaire",
        id: 6, // صحيح
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/05/New-Project-40.jpg",
  },
  {
    name: "Irritated & Damaged Skin",
    products: [
      // ⚠️ تم تعديل الـ IDs هنا لتطابق كائن Products: Soothing Cleansing Gel هو ID 1، و CICA Cream هو ID 2.
      {
        name: "ACTI-REPAIR CICA Cream",
        collectionKey: "acti-repair",
        id: 2,
      },
      {
        name: "ACTI-REPAIR Soothing Cleansing Gel",
        collectionKey: "acti-repair",
        id: 1,
      },
      { name: "ACTI-REPAIR Hydro Gel", collectionKey: "acti-repair", id: 4 }, // تم تصحيح: كان 3، أصبح 4
      {
        name: "ACTI-REPAIR Emollient Extreme",
        collectionKey: "acti-repair",
        id: 3, // تم تصحيح: كان 4، أصبح 3
      },
    ],
    imageSrc:
      "https://derm-active.com/wp-content/uploads/2023/01/864x600-8.jpg",
  },
  {
    name: "Hair Loss",
    products: [
      {
        name: "TRICHO-ACT Anti-Hair loss Shampoo",
        collectionKey: "tricho-act",
        id: 1, // صحيح
      },
      {
        name: "TRICHO-ACT Anti-Dandruff Shampoo DS",
        collectionKey: "tricho-act",
        id: 2, // صحيح
      },
      {
        name: "TRICHO-ACT Hair Repairing Mask",
        collectionKey: "tricho-act",
        id: 3, // صحيح
      },
      {
        name: "TRICHO-ACT Anti-Hair Loss Lotion Concentrate",
        collectionKey: "tricho-act",
        id: 4, // صحيح
      },
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
            color: nameSkin === range.name ? "#777" : "black",
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
