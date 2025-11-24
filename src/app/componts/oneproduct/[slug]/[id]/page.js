"use client";
import { ImageZoom } from "../imgmotion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect, useCallback } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Products from "@/app/data/products";
import React from "react";
import Link from "next/link";

export default function OneProduct({ params }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const calculateDuration = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      return width >= 1200 ? 900 : width >= 768 ? 600 : 350;
    }
    return 500;
  };

  const [duration, setDuration] = useState(calculateDuration);
  const updateDuration = useCallback(() => {
    setDuration(calculateDuration());
  }, []);
  const [openSections, setOpenSections] = useState({
    description: false,
    ingredients: false,
    howToUse: false,
  });

  useEffect(() => {
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, [updateDuration]);
  const { slug, id } = React.use(params);
  const productIdNumber = Number(id);
  const groupItems = Products[slug];
  console.log(slug, id);

  if (!groupItems) {
    console.log("group");
    return (
      <div className="flex items-center justify-center min-h-screen text-center bg-gray-50">
        <h1 className="text-3xl text-red-500 p-20 rounded-lg shadow-lg">
          ⚠️ لم يتم العثور على المجموعة المطلوبة
        </h1>
      </div>
    );
  }

  const product = groupItems.items.find((element) => {
    return element.id === productIdNumber;
  });

  if (!product) {
    console.log("product");

    return (
      <div className="flex items-center justify-center min-h-screen text-center bg-gray-50">
        <h1 className="text-3xl text-red-500 p-20 rounded-lg shadow-lg">
          ⚠️ لم يتم العثور على المجموعة المطلوبة
        </h1>
      </div>
    );
  }
  //   other Products in like kind
  const otherItems = groupItems.items.filter(
    (item) => item.id !== productIdNumber
  );
  // The Photos Change
  const handleCarouselChange = (previousSlide, { currentSlide, onMove }) => {
    setActiveIndex(currentSlide);
  };
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      // استخدام خاصية goToSlide للانتقال إلى الشريحة المطلوبة
      carouselRef.current.goToSlide(index);
    }
  };
  // Complete Your Rotine

  const SMOOTH_EASING = "cubic-bezier(0.25, 0.1, 0.25, 1)";
  // Complete Your Rotine
  const toggleAccordion = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const productData = {
    description: {
      title: "Description",
      content:
        "This Sun protection has been tested to be **water and sweat resistant** and **Photostable** to guarantee reliable sun protection. Its Ultra Fluid quickly absorbed Formula with **dry touch invisible finish** Leaves the skin soft and supple after use. It is **non-comedogenic** and tested on Acne and blemishes Prone skin.",
    },
    ingredients: {
      title: "Ingredients",
      content: (
        <ul className="list-disc p-5 space-y-1 text-sm text-gray-700">
          <li>Aqua</li>
          <li>Diethylamino Hydroxybenzoyl Hexyl Benzoate</li>
          <li>Ethylhexyl Salicylate</li>
          <li>Ethylhexyl Triazone</li>
          <li>Glyceryl Stearate SE</li>
          <li>Tapioca Starch Polymethylsilsesquioxane</li>
          <li>C15-12 Alkyl Benzoate</li>
          <li>Zinc Oxide</li>
          <li>Ceteareth-25</li>
          <li>Vp/Hexadecane Copolymer</li>
          <li>Glycerin</li>
          <li>Dimethicone</li>
          <li>Polyhydroxybutyrate</li>
          <li>Cetearyl Alcohol</li>
          <li>Styrene/Acrylates Copolymer</li>
          <li>Phenoxyethanol</li>
          <li>Titanium Dioxide</li>
          <li>Tocopheryl Acetate</li>
          <li>Butylene Glycol</li>
          <li>Acrylates/C30-10 Alkyl Acrylate Cross polymer</li>
          <li>Xanthan Gum</li>
          <li>Disodium EDTA</li>
          <li>Hydrated Silica</li>
          <li>Ethylhexylglycerin</li>
          <li>Ammonium Polyacrylate</li>
        </ul>
      ),
    },
    howToUse: {
      title: "How to Use",
      content: (
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          <li>
            Apply evenly a considerable amount of the product over the entire
            face and sun exposed areas **15-20 minutes before sun exposure**.
          </li>
          <li>
            Renew the application frequently in case of prolonged exposure or
            after swimming, sweating or using a towel.
          </li>
          <li>Sun abuse is dangerous for your health.</li>
          <li>Do not apply to irritated skin.</li>
        </ol>
      ),
    },
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  // Complete Routine
  const responsiveRoutine = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 3 },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 3, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
  };
  const newArrivalItemSizes =
    "(max-width: 1024px) 50vw, (max-width: 1400px) 25vw, 20vw";
  //   Function To Show Details
  const renderAccordionSection = (sectionKey) => {
    const { title, content } = productData[sectionKey];
    const isOpen = openSections[sectionKey];
    const arrowDirection = isOpen ? "rotate-180" : "rotate-0";

    return (
      <div
        key={sectionKey}
        className="w-full border-b border-gray-200 last:border-b-0"
      >
        <div
          className="flex lg:cursor-default justify-between lg:justify-center items-center p-4 cursor-pointer bg-white hover:bg-gray-50 transition-colors"
          onClick={() => toggleAccordion(sectionKey)}
        >
          <h3 className="text-base font-bold text-gray-800">{title}</h3>

          <svg
            className={`w-3 h-3 text-gray-600 transition-transform duration-300 ${arrowDirection}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>

        <div
          className={`transition-all duration-500 p-4 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[1000px] opacity-100  pt-0" : "max-h-20 opacity-20"
          }`}
        >
          {typeof content === "string" ? (
            <p className="text-gray-700">{content}</p>
          ) : (
            content
          )}
        </div>
      </div>
    );
  };
  //   groupItems
  // product
  // otherItems
  return (
    <>
      <div className="pt-15 w-full h-full flex-col  flex sm:px-20  gap-5 md:flex-row md:px-20 xl:px-60 mx-auto">
        <div className="sm:w-[300px] sm:mb-60  w-[290px] sm:h-[300px] md:w-[300px] md:h-[200px] mx-auto">
          {/* Courasel Products */}
          <div className="h-[420px] w-[300px] mt-10">
            <Carousel
              arrows={product.imgHover ? true : false}
              responsive={responsive}
              ref={carouselRef}
              afterChange={handleCarouselChange}
            >
              <ImageZoom src={product.img} alt="Img" />
              {product.imgHover ? (
                <ImageZoom src={product.imgHover} alt="ImgHover" />
              ) : (
                <></>
              )}
            </Carousel>
          </div>
          {/* Some Photo */}
          <div className="Photos w-[280px] flex h-[120px] mt-5 ">
            {product.imgHover ? (
              <>
                <div
                  className="relative w-1/2 mr-3"
                  onClick={() => handleThumbnailClick(0)}
                >
                  <div
                    className={`absolute inset-0 z-10 transition-all duration-300  ${
                      activeIndex === 0
                        ? "bg-black/10" // التحديد النشط
                        : "border-2 border-transparent hover:border-gray-400/50" // التحديد غير النشط
                    }`}
                  ></div>
                  <Image
                    src={product.img}
                    alt="Un"
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="relative w-1/2"
                  onClick={() => handleThumbnailClick(1)}
                >
                  <div
                    className={`absolute inset-0 z-10 transition-all duration-300  ${
                      activeIndex === 1
                        ? "bg-black/10" // التحديد النشط
                        : "border-2 border-transparent hover:border-gray-400/50" // التحديد غير النشط
                    }`}
                  ></div>
                  <Image
                    src={product.imgHover}
                    alt="Un"
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* Details to Buy */}
        <div className="bg-white max-h-500px w-[95%] md:my-20  mx-auto shadow-sm  border-2 border-[#e9e4e475] p-10">
          <span className="text-[#777]">Home /</span>{" "}
          <span className="text-[#222]">{groupItems.title}</span>
          <p className="text-[#666] text-[25px] mt-3">{product.name}</p>
          <p className="text-[#777] text-[17px] my-3">{product.prag}</p>
          <span className="block">{product.size}</span>
          <Button
            className={
              "bg-black text-white w-25 my-5 h-10 font-bold block cursor-pointer"
            }
            variant="outline"
            size="icon"
          >
            Buy Online!
          </Button>
          <span className="text-[#777] text-[20px]">279.00EGP</span>
        </div>
      </div>
      {/* information about it */}
      <div className="here w-[95%] lg:max-w-[1100px] mx-auto mt-20">
        <div className="rounded-lg border border-gray-300 shadow-sm my-10 lg:flex">
          {renderAccordionSection("description")}
          {renderAccordionSection("ingredients")}
          {renderAccordionSection("howToUse")}
        </div>
      </div>
      {/* Coomplete Your Routine */}
      <div className=" w-full lg:max-w-[1500px] lg:w-5xl mx-auto  lg:px-30 ">
        <h1 className="text-center  text-2xl lg:text-4xl p-2 text-[#777]">
          Complete Your Routine
        </h1>
        <div className="mb-10  text-center">
          <Carousel
            // showDots={true}
            swipeable={true}
            draggable={true}
            minimumTouchDrag={5}
            transitionDuration={duration}
            customTransition={`transform ${duration}ms ${SMOOTH_EASING}`}
            responsive={responsiveRoutine}
          >
            {otherItems.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/componts/oneproduct/${slug.toLowerCase()}/${item.id.toString()}`}
                >
                  <div className="group w-full overflow-hidden transition-all duration-300 md:mt-20  m-4 flex flex-col cursor-pointer relative">
                    <div className="relative w-full sm:h-70 h-100 overflow-hidden">
                      <Image
                        sizes={newArrivalItemSizes}
                        src={item.img}
                        fill
                        alt={"NAN"}
                        className="object-contain lg:object-cover transition-all duration-500 "
                      />
                    </div>
                    <HiOutlineSearch className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/50 p-3 text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white" />

                    <div className="px-4  flex flex-col items-center">
                      <h1 className="text-[17px]  text-gray-800  pb-1 transition-colors duration-300 group-hover:text-blue-600">
                        {groupItems.title}
                      </h1>
                      <p className="text-[17px] lg:text-[14px] text-gray-500 pb-2">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
