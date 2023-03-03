export type Sort = {
  name: string;
};

export interface FilterSliceState {
  activeIndex: number;
  isLoading: boolean;
  selectedPage: number;
  sort: Sort;
  wordActive: string;
  value: number;
}
