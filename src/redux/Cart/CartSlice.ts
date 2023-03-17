import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { CartItemType, CartSliceState } from "./types";

const initialState: CartSliceState = getCartFromLS();

const CountPrice = (state: CartSliceState) => {
  state.totalPrice = state.items.reduce((sum: number, obj: CartItemType) => {
    return obj.price * obj.count + sum;
  }, 0);
};

export const CardSlice = createSlice({
  name: "Card",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      CountPrice(state);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
      CountPrice(state);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      CountPrice(state);
    },
    removeAllItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    SetSearchValue: (state, action) => {
      state.SearchValue = action.payload;
    },
  },
});

export const {
  addItem,
  minusItem,
  removeItems,
  removeAllItems,
  SetSearchValue,
} = CardSlice.actions;

export default CardSlice.reducer;
