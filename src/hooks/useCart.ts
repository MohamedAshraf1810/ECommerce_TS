import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  CartItemRemove,
  cleanCartProductsFullInfo,
} from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { resetOrderLoadState } from "@store/orders/ordersSlice";
import { useCallback, useEffect } from "react";

const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  const placeOrderLoadStatus = useAppSelector((state) => state.orders.loading);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(CartItemRemove(id));
    },
    [dispatch]
  );

  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());
    return () => {
      promise.abort();
      dispatch(cleanCartProductsFullInfo());
      dispatch(resetOrderLoadState());
    };
  }, [dispatch]);

  return {
    products,
    loading,
    error,
    userAccessToken,
    placeOrderLoadStatus,
    removeItemHandler,
    changeQuantityHandler,
  };
};

export default useCart;
