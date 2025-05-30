import Header from "../components/layout/Header";
import Footers from "../components/sections/Home/Footers";
import Offers from "../components/sections/Home/Offers";
import useCartStore from "../components/store/useCartStore";
import useProductStore from "../components/store/useProductStore";
import { Link } from "react-router-dom";
import ProductSkeleton from "../components/layout/ProductSkeleton"; // Make sure this import exists

const NewArrivals = () => {
  const { products, isLoading } = useProductStore();
  const addToCart = useCartStore((state) => state.addToCart);

  // Filter new arrivals products
  const Arrivals = products.filter((product) => product.NewArrivals);

  return (
    <>
      <Header />
      <main className="container mx-auto mt-20">
        <h1 className="text-center font-bold text-3xl">New Arrivals</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : Arrivals.length > 0 ? (
            Arrivals.map((product) => (
              <div key={product.id}>
                <div className="bg-[#F0EEED] rounded-3xl relative group overflow-hidden">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover"
                  />
                  {/* Hover Buttons */}
                  <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center bg-gray-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to={`/product/${product.name}`}>
                      <button className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg">
                        View Details
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        addToCart(product, product.id);
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h5 className="text-3xl font-serif mt-4">{product.name}</h5>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xl font-bold text-black">
                    ₱{product.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => {
                      addToCart(product, product.id);
                    }}
                    className="rounded-xl bg-black text-white py-2 px-4 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No new arrivals found.
            </div>
          )}
        </div>
      </main>
      <Offers />
      <Footers />
    </>
  );
};

export default NewArrivals;
