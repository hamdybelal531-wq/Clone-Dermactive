"use client";
"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function ImageZoom({ src, alt = "", className, zoom = 2 }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const origin = useTransform([mouseX, mouseY], ([x, y]) => `${x}px ${y}px`);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(Math.max(0, Math.min(x, rect.width)));
    mouseY.set(Math.max(0, Math.min(y, rect.height)));
  };

  const handleMouseLeave = () => {
    mouseX.set(ref.current ? ref.current.clientWidth / 2 : 0);
    mouseY.set(ref.current ? ref.current.clientHeight / 2 : 0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden cursor-zoom-in rounded-lg w-full h-full ",
        className
      )}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover p-5"
        style={{
          transformOrigin: origin,
        }}
        animate={{ scale: 1 }}
        whileHover={{
          scale: zoom,
          transition: { duration: 0.28, ease: "easeOut" },
        }}
      />
    </div>
  );
}
