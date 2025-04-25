import { useParams } from "react-router-dom";
import Header from "../layout/Header";
import styles from "../../styles/twStyles";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import YouLike from "../sections/Home/YouLike";
import Offers from "../sections/Home/Offers";
import Footers from "../sections/Home/Footers";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore"; // ✅ Import cart store
import { useEffect } from "react";

const ProductDetails = () => {
  const { name } = useParams();
  const { products, fetchProducts } = useProductStore();
  //import cart store
  const { cart, increaseAmount, decreaseAmount, addToCart } = useCartStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  const product = products.find((item) => item.name === name);
  const cartItem = cart.find((item) => item.id === product?.id); // ✅ Find product in cart
  const amount = cartItem?.amount || 0;

  if (!product) {
    return (
      <section className="text-black h-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }

  return (
    <>
      <section>
        <Header />
        <div className={`${styles.paddings} container mx-auto space-y-20`}>
          <div className={`${styles.flexColRow} gap-5`}>
            <div className="bg-[#F0EEED] rounded-3xl">
              <img src={product.image} alt={product.name} />
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

              {/* Quantity controls */}
              <div className="flex items-center gap-3">
                <div className="rounded-3xl bg-gray-500/20 py-2 w-[150px]">
                  <div className="flex justify-between items-center px-3">
                    <IoMdRemove
                      size={20}
                      className="cursor-pointer"
                      onClick={() => decreaseAmount(product.id)}
                    />
                    <span>{amount}</span>
                    <IoMdAdd
                      size={20}
                      className="cursor-pointer"
                      onClick={() => increaseAmount(product.id, product)}

                    />
                  </div>
                </div>
                <button
                  className="bg-black text-white rounded-3xl py-3 w-full cursor-pointer"
                  onClick={() => addToCart(product, product.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <YouLike />
        </div>
      </section>
      <Offers />
      <Footers />
    </>
  );
};

export default ProductDetails;
