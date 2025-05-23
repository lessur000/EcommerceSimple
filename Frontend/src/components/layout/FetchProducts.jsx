import { useEffect } from "react";
import useProductStore from "../store/useProductStore";

const FetchProducts = () => {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts(); // This must run
  }, [fetchProducts]);

  return null;
};

export default FetchProducts;
