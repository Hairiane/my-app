import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isLoading: true,
  activeIndex: 0,
  wordActive: "популярности",
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
    },
    setWordActive: (state, action) => {
      state.wordActive = action.payload;
    },
  },
});

export const { setIsLoading, setActiveIndex, setWordActive } =
  filterSlice.actions;

export default filterSlice.reducer;
