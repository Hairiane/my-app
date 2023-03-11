import { createSlice } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  value: 0,
  isLoading: true,
  activeIndex: 0,
  wordActive: "rating",
  selectedPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
      state.selectedPage = 1;
    },
    setWordActive: (state, action) => {
      state.wordActive = action.payload;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  },
});

export const { setIsLoading, setActiveIndex, setWordActive, setSelectedPage } =
  filterSlice.actions;

export default filterSlice.reducer;
