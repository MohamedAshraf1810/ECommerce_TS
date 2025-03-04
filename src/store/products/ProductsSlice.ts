import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { isString, TLoading, TProduct } from "@types";

interface IproductsState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IproductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProductsRecords: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpProductsRecords } = ProductsSlice.actions;
export { actGetProductsByCatPrefix };
export default ProductsSlice.reducer;
