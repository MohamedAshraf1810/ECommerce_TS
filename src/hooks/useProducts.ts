import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  cleanUpProductsRecords,
} from "@store/products/ProductsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useProducts = () => {
  const params = useParams();
  const productPrefix = params.prefix;
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector((state) => state.Products);

  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: wishlistItemsId.includes(el.id),
    isAuthenticated: userAccessToken ? true : false,
  }));

  useEffect(() => {
    const promise = dispatch(
      actGetProductsByCatPrefix(params.prefix as string)
    );
    return () => {
      dispatch(cleanUpProductsRecords());
      promise.abort();
    };
  }, [dispatch, params]);
  return {
    error,
    loading,
    productsFullInfo,
    productPrefix,
  };
};

export default useProducts;
