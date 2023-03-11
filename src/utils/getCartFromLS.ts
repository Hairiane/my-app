import { CartItem } from "../redux/Cart/types";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  const SearchValue = "";

  return {
    items: items as CartItem[],
    totalPrice,
    SearchValue,
  };
};
