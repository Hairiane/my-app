import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filter";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});
