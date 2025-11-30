"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState(null);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => setActiveIndex(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    onSelect();

    return () => carouselApi.off("select", onSelect);
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 4000); // 4 ثواني

    return () => clearInterval(interval);
  }, [carouselApi]);

  const slider = [
    "https://derm-active.com/wp-content/uploads/2023/07/1980x963-2.1.webp",
    "https://derm-active.com/wp-content/uploads/2024/09/1980x963-Anti-Glow.jpg",
    "https://derm-active.com/wp-content/uploads/2023/06/1980x963-1.1.jpg",
  ];

  return (
    <>
      {/* Carousel */}
      <div className="w-full lg:h-screen relative mt-15">
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slider.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full border-2 border-[#999] ${
                activeIndex === i ? "bg-black" : "bg-transparent"
              } cursor-pointer`}
              onClick={() => carouselApi?.scrollTo(i)}
            />
          ))}
        </div>

        <Carousel className="w-full" setApi={setCarouselApi}>
          <CarouselContent>
            {slider.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full max-w-full  sm:h-[60vh] lg:h-screen h-[40vh]">
                  <Image
                    sizes="100vw"
                    src={img}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-contain md:object-cover"
                    priority
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer" />
        </Carousel>
      </div>
    </>
  );
}
