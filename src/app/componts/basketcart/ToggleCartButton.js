"use client";
import React from "react";
import { useCart } from "./CartContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ToggleCartButton = () => {
  const { state, dispatch } = useCart();
  const cartItemCount = Number(state.items.length);

  return (
    <button
      className="fixed bottom-5 cursor-pointer left-5  text-white  rounded-full animate-shake-loop  transition duration-200 z-40"
      onClick={() => dispatch({ type: "TOGGLE_CART" })}
    >
      <div className="relative h-15 w-15">
        <Image
          src="/icons8-basket-48.png"
          alt="Basket"
          fill
          className="object-contain"
          sizes="20vw"
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
