import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchBanners, fetchCategories } from "../store/homeSlice";
import Banners from "../components/Banners";
import Categories from "../components/Categories";
import Products from "../components/Products";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchBanners());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to Our Store</h1>
      <Banners />
      <Categories />
      <Products />
    </div>
  );
};

export default HomePage;
