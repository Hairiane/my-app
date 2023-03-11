export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  types: string;
  sizes: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
  SearchValue: string;
}
