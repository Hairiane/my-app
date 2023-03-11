import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import identity from "lodash/identity";
import pickBy from "lodash/pickBy";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { activeIndex, wordActive, SearchValue, selectedPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Pizza[]>(
      `https://63e0cd60dd7041cafb39738c.mockapi.io/items?`,
      {
        params: pickBy(
          {
            category: activeIndex,
            page: selectedPage,
            limit: 4,
            SearchValue,
            sortBy: wordActive,
          },
          identity
        ),
      }
    );
    return data;
  }
);
