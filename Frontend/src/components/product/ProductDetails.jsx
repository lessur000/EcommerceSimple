import { useParams } from "react-router-dom";
import Header from "../layout/Header";

import styles from "../../styles/twStyles";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import YouLike from "../sections/Home/YouLike";
import Offers from "../sections/Home/Offers";
import Footers from "../sections/Home/Footers";
import useProductStore from "../store/useProductStore";
import { useEffect } from "react";

const ProductDetails = () => {
  //get the products name from the url using params hooks
  const { name } = useParams();
  const { products, fetchProducts } = useProductStore();

  // Fetch products when the component mounts if not already available
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  const product = products.find((item) => {
    return item.name == name;
  });

  //if product is not found, display a loading message
  if (!product) {
    return (
      <section className="text-black h-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }
  return (
    <>
      {/* Sections */}
      <section>
        <Header />
        <div className={`${styles.paddings} container mx-auto space-y-20`}>
          <div className={`${styles.flexColRow} gap-5`}>
            {/* left row */}
            <div className="bg-[#F0EEED] rounded-3xl">
              <img src={product.image} />
            </div>
            <div className="lg:ml-32 space-y-5">
              <h1 className="text-4xl lg:text-6xl pt-5 font-bold">
                {product.name}
              </h1>
              <span className="text-xl font-serif">
                ₱ {product.price.toLocaleString()}
              </span>
              <p className="text-sm md:max-w-[500px] text-[#000000] pt-5">
                {product.description}
              </p>
              {/* right row */}
              <div className="flex items-center gap-3">
                <div className="rounded-3xl bg-gray-500/20 py-2 w-[150px]">
                  <div className="flex justify-between items-center px-3">
                    <IoMdRemove size={20} className="cursor-pointer" />
                    <span>0</span>
                    <IoMdAdd size={20} className="cursor-pointer" />
                  </div>
                </div>
                <button className="bg-black text-white rounded-3xl py-3 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <YouLike />
        </div>
      </section>
      {/* Footers */}
      <Offers />
      <Footers />
    </>
  );
};

export default ProductDetails;
