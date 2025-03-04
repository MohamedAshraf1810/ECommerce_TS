import { TProduct } from "./product.types";

export type TorderItem = {
  id: number;
  items: TProduct[];
  subTotal: number;
};
