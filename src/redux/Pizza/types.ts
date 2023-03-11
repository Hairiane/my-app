export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
  category: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type SearchPizzaParams = {
  sortBy: string;
  activeIndex: number;
  wordActive: string;
  SearchValue: string;
  selectedPage: string;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
