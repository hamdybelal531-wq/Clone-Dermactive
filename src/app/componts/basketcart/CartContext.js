"use client";
import { createContext, useReducer, useContext, useEffect } from "react";

// 1. تعريف الحالة الأولية (Initial State)
const initialState = {
  items:
    typeof window !== "undefined" && localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : [], // مصفوفة المنتجات في السلة
  isCartOpen: false, // حالة لإظهار/إخفاء السلة
};

// 2. دالة الـ Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // منطق إضافة المنتج (تجنب التكرار أو زيادة الكمية)
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex > -1) {
        // المنتج موجود: زيادة الكمية
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity || 1;
        return { ...state, items: newItems };
      }
      // المنتج جديد: إضافته
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ],
      };

    case "REMOVE_ITEM":
      // منطق إزالة منتج بالكامل من السلة
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case "UPDATE_QUANTITY":
      // منطق تحديث كمية منتج معين
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0), // إزالة المنتج إذا أصبحت الكمية صفر أو أقل
      };

    case "TOGGLE_CART":
      // تبديل حالة فتح/إغلاق السلة
      return { ...state, isCartOpen: !state.isCartOpen };

    case "CLOSE_CART":
      // إغلاق السلة
      return { ...state, isCartOpen: false };

    case "CLEAR_CART":
      // مسح السلة بالكامل
      return { ...state, items: [] };

    default:
      return state;
  }
}

// 3. إنشاء الـ Context
const CartContext = createContext();

// 4. مكون الـ Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// 5. Custom Hook للاستخدام السهل
export const useCart = () => {
  return useContext(CartContext);
};
