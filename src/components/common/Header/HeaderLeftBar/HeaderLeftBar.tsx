import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import { useAppSelector } from "@store/hooks";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import WishlistIcon from "@assets/SVG/Wishlist.svg?react";
import CartIcon from "@assets/SVG/cart.svg?react";
import styles from "./styles.module.scss";

const { headerLeftBar } = styles;

const HeaderLeftBar = () => {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  return (
    <div className={headerLeftBar}>
      <HeaderCounter
        svgIcon={<WishlistIcon title="Wishlist" />}
        to="/wishlist"
        totalQuantity={wishlistTotalQuantity}
        title="WishList"
      />
      <HeaderCounter
        svgIcon={<CartIcon title="Cart" />}
        to="/cart"
        totalQuantity={cartTotalQuantity}
        title="Cart"
      />
    </div>
  );
};

export default HeaderLeftBar;
