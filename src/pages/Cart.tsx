import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading, LottieHandler } from "@components/feedback";
import useCart from "@hooks/useCart";

const Cart = () => {
  const {
    products,
    loading,
    error,
    userAccessToken,
    placeOrderLoadStatus,
    removeItemHandler,
    changeQuantityHandler,
  } = useCart();

  return (
    <>
      <Heading title="Shopping Cart" />
      <Loading status={loading} error={error} type="cart">
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice
              products={products}
              userAccessToken={userAccessToken}
            />
          </>
        ) : placeOrderLoadStatus === "succeeded" ? (
          <LottieHandler
            type="success"
            message="Order Placed successfully"
            LoopStatus={false}
          />
        ) : (
          <LottieHandler type="empty" message="Your cart is empty" />
        )}
      </Loading>
    </>
  );
};

export default Cart;
