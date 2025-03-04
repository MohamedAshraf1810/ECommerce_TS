import {
  actGetCategories,
  categoriesRecordsCleanUp,
} from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const useCategories = () => {
  const dispatch = useAppDispatch();

  const { error, loading, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const promise = dispatch(actGetCategories());

    return () => {
      promise.abort();
      dispatch(categoriesRecordsCleanUp());
    };
  }, [dispatch]);

  return { error, loading, records };
};

export default useCategories;
