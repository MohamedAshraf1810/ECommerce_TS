import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TorderItem, isString } from "@types";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetOrders from "./act/actGetOrders";

interface IOrderSlice {
  orderList: TorderItem[];
  loading: TLoading;
  error: string | null;
}

const initialState: IOrderSlice = {
  orderList: [],
  loading: "idle",
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetOrderLoadState: (state) => {
      state.loading = "idle";
      state.error = null;
    },
  },
  // Place user Orders
  extraReducers: (builder) => {
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // Get user Orders
    builder.addCase(actGetOrders.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetOrders.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.orderList = action.payload;
    });
    builder.addCase(actGetOrders.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actPlaceOrder, actGetOrders };
export const { resetOrderLoadState } = orderSlice.actions;
export default orderSlice.reducer;
