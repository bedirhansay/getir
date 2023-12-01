import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { getCart } from "utils/api/api";
import { cartReducers } from "contextProvider/reducers/CartReducer";

export type ContextProps = {
  cart: any[];
  totalPrice: number;
  addProductToCart: (product: any) => void;
  deleteAllCart: () => void;
  decreaseQuantity: (product) => void;
};

export const StoreContext = createContext<ContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducers, []);

  const addProductToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const deleteAllCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    const getCartData = async () => {
      try {
        const data = await getCart();
        if (data) {
          dispatch({ type: "SET_CART", payload: data });
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    getCartData();
  }, []);

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.product.fiyat * item.quantity,
      0
    );
  }, [cart]);

  const values = useMemo(() => {
    return {
      cart: cart,
      totalPrice,
      addProductToCart,
      deleteAllCart,
      decreaseQuantity,
    };
  }, [cart, totalPrice]);

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};
