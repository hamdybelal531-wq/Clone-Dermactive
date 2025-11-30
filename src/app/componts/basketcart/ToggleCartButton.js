"use client";
import React from "react";
import { useCart } from "./CartContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const ToggleCartButton = () => {
  const { state, dispatch } = useCart();
  const cartItemCount = Number(state.items.length);

  const [isShaking, setIsShaking] = useState(false);
  const prevCountRef = useRef(0);
  useEffect(() => {
    const prev = prevCountRef.current;

    if (cartItemCount > prev) {
      setIsShaking(true);

      const timer = setTimeout(() => {
        setIsShaking(false);
      }, 1200);

      return () => clearTimeout(timer);
    }

    prevCountRef.current = cartItemCount;
  }, [cartItemCount]);
  return (
    <button
      className={`fixed bottom-5 cursor-pointer left-5  text-white  rounded-full ${
        isShaking ? "animate-shake-loop" : ""
      }   transition duration-200 z-40`}
      onClick={() => dispatch({ type: "TOGGLE_CART" })}
    >
      <div className="relative sm:h-15 sm:w-15 h-12 w-12">
        <Image
          src="/icons8-basket-48.png"
          alt="Basket"
          fill
          className="object-contain"
          sizes="10vw"
        />
      </div>
      {/* ({cartItemCount}) */}
      <AnimatePresence>
        {cartItemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg"
          >
            {cartItemCount}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ToggleCartButton;
