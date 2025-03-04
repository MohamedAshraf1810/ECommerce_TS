import useProducts from "@hooks/useProducts";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { TProduct } from "@types";

const Products = () => {
  const { error, loading, productsFullInfo, productPrefix } = useProducts();
  return (
    <>
      <Heading title={`${productPrefix?.toUpperCase()} products`} />
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no products"
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;
