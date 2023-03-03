import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaSliceState, Status } from "./types";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { activeIndex, wordActive, SearchValue, selectedPage } = params;
    const { data } = await axios.get(
      `https://63e0cd60dd7041cafb39738c.mockapi.io/items?${
        !activeIndex ? "" : `category=${activeIndex}&`
      }${`page=${selectedPage}`}&limit=4&${`search = ${SearchValue}`}&${
        wordActive === "популярности"
          ? "sortBy=rating"
          : wordActive === "цене"
          ? "sortBy=price"
          : "sortBy=name"
      }&order=desc `
    );
    return data;
  }
);

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};
const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectPizzaData = (state: any) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
