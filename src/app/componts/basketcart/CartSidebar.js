"use client";
import React from "react";
import { useCart } from "./CartContext";
import { toast } from "sonner";
import Image from "next/image";

const CartSidebar = () => {
  const { state, dispatch } = useCart();
  const { isCartOpen, items } = state;

  // لحساب إجمالي السلة
  const cartTotalInCents = items.reduce(
    (totalCents, item) => {
      // نحول سعر المنتج إلى سنتات ونضربه في الكمية
      const priceInCents = Math.round(item.price * 100);
      return totalCents + priceInCents * item.quantity;
    },
    0 // القيمة الأولية هي صفر سنت
  );

  // الناتج النهائي للعرض
  const cartTotal = cartTotalInCents / 100;

  // الكلاسات للتحكم في ظهور السايدبار (انزلاق من اليمين)
  // `translate-x-0` لإظهاره، و `translate-x-full` لإخفائه
  const sidebarClasses = isCartOpen ? "translate-x-0" : "translate-x-full";

  // الكلاس للـ Backdrop (الخلفية المعتمة)
  const backdropClasses = isCartOpen
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  function updateQuantity(id, newQty) {
    if (newQty < 1) return;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id,
        quantity: newQty,
      },
    });
  }

  return (
    <>
      <div
        className={`fixed inset-0  bg-black/40  transition-opacity duration-300 ${backdropClasses}`}
        onClick={() => dispatch({ type: "CLOSE_CART" })}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[600px] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${sidebarClasses}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl text-[#222]">
            Basket{" "}
            <span className="inline-block  w-8 h-8 relative ">
              <Image
                className="mt-[5px]"
                src={"/icons8-basket-48.png"}
                fill
                alt="Basket"
                sizes="20vw"
              />
            </span>
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => dispatch({ type: "TOGGLE_CART" })}
          >
            {/* أيقونة الإغلاق (X) */}
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* محتوى السلة */}
        <div className="p-5 m-auto overflow-y-auto h-[calc(100%-120px)] max-w-full">
          {items.length === 0 ? (
            <p className="text-center  text-[#777] text-2xl mt-10">Empty</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap sm:flex-nowrap items-center justify-between border-b py-3 max-w-full w-[99%]"
              >
                <div className="flex justify-center items-center">
                  <div className="flex items-center space-x-3 relative object-cover h-20 w-20">
                    <Image src={item.img} fill alt="UNPhoto" />
                  </div>
                  <span className="text-[14px] whitespace-pre-wrap">
                    {item.name.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-end justify-end w-full space-x-3">
                  <span className="text-gray-600 sm:text-[14px]">
                    {/* (${item.price} x {item.quantity}) */}$
                    {item.quantity > 1
                      ? item.price * item.quantity
                      : item.price}
                  </span>
                  {/* add More */}
                  <div className="flex items-center ">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                    >
                      –
                    </button>

                    <span className="px-3">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* زرار الإزالة */}
                  <button
                    className="text-red-500 hover:text-red-700 sm:text-sm text-[12px]  cursor-pointer"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: { id: item.id },
                      })
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* أسفل السلة (الإجمالي وزرار الدفع) */}
        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <div className="flex justify-between font-bold text-xl mb-3">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-[#333] text-white font-bold text-xl p-3 rounded-lg hover:bg-[#777] cursor-pointer transition duration-200 "
            disabled={items.length === 0}
            onClick={() => toast("Succefull ")}
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
