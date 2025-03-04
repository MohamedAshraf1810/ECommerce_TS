import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { TProduct } from "@types";
import { Product } from "@components/eCommerce";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
  const { error, loading, records } = useWishlist();
  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading status={loading} error={error} type="product">
        <>
          <GridList<TProduct>
            emptyMessage="Your wishlist is empty"
            records={records}
            renderItem={(record) => <Product {...record} />}
          />
        </>
      </Loading>
    </>
  );
};

export default Wishlist;
