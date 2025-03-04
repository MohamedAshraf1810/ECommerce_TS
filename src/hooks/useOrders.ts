import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import { actGetOrders, resetOrderLoadState } from "@store/orders/ordersSlice";
import { TProduct } from "@types";

const useOrders = () => {
  const dispatch = useAppDispatch();
  const { loading, error, orderList } = useAppSelector((state) => state.orders);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([]);

  const closeModalHandler = () => {
    setShowModal(false);
    setSelectedProduct([]);
  };

  const viewOrderDetails = (id: number) => {
    const productDetails = orderList.find((order) => order.id === id);

    const checkedProductDetails = productDetails?.items ?? [];

    setShowModal(true);
    setSelectedProduct((prev) => [...prev, ...checkedProductDetails]);
  };

  useEffect(() => {
    const promise = dispatch(actGetOrders());

    return () => {
      promise.abort();
      dispatch(resetOrderLoadState());
    };
  }, [dispatch]);
  return {
    loading,
    error,
    orderList,
    showModal,
    selectedProduct,
    closeModalHandler,
    viewOrderDetails,
  };
};

export default useOrders;
