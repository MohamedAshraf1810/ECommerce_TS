import { GridList, Heading } from "@components/common";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import useCategories from "@hooks/useCategories";
import { TCategory } from "@types";

const Categories = () => {
  const { error, loading, records } = useCategories();
  console.log(records);

  return (
    <>
      <Heading title="Categories" />
      <Loading status={loading} error={error} type="category">
        <GridList<TCategory>
          emptyMessage="There are no categories"
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
};

export default Categories;
