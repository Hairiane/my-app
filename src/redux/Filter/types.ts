export type Sort = {
  name: string;
};

export interface FilterSliceState {
  activeIndex: number;
  isLoading: boolean;
  selectedPage: number;
  wordActive: string;
  value: number;
}
