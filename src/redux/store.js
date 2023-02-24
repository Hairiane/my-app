import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CartFilter";
import filterSlice from "./filter";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: CardSlice,
  },
});
