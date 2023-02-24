import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  count: 0,
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

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count--;
        console.log(action.payload);
      }
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    removeAllItems: (state, action) => {
      state.items = [];
      state.totalPrice = 0;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  },
});

export const { addItem, minusItem, removeItems, removeAllItems } =
  CardSlice.actions;

export default CardSlice.reducer;
