import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  cleanWishlistProductsFullInfo,
} from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";

const useWishlist = () => {
  const dispatch = useAppDispatch();

  const { error, loading, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );

  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const promise = dispatch(actGetWishlist("productsFullInfo"));
    return () => {
      promise.abort();
      dispatch(cleanWishlistProductsFullInfo());
    };
  }, [dispatch]);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: true,
    isAuthenticated: true,
  }));

  return { error, loading, records };
};

export default useWishlist;
