import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./Cart/CartSlice";
import filterSlice from "./Filter/filterSlice";
import PizzaSlice from "./Pizza/PizzaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: CardSlice,
    pizza: PizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
