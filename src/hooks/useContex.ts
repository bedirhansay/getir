import {
  ContextProps,
  StoreContext,
} from "contextProvider/Provider/ContextProvider";
import { useContext } from "react";
import { getCart } from "utils/api/api";

export const useContexData = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error(
      "useContexData hook must be used within a StoreContextProvider"
    );
  }

  const fetchCartData = async () => {
    const data = await getCart();
    let total = 0;

    Object.keys(data).forEach(
      (item) => (total += data[item].product.fiyat * data[item].quantity)
    );

    context.setTotalPrice(total);
  };

  if (context.totalPrice === 0) {
    fetchCartData();
  }

  return context as ContextProps;
};
