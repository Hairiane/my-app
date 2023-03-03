import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./Cart/CartSlice";
import filterSlice from "./Filter/filterSlice";
import PizzaSlice from "./Pizza/PizzaSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: CardSlice,
    pizza: PizzaSlice,
  },
});
