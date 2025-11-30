"use client";
import { createContext, useReducer, useContext, useEffect } from "react";

const initialState = {
  items:
    typeof window !== "undefined" && localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : [],
  isCartOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity || 1;
        return { ...state, items: newItems };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };

    case "CLOSE_CART":
      return { ...state, isCartOpen: false };

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

const CartContext = createContext();

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

export const useCart = () => {
  return useContext(CartContext);
};
