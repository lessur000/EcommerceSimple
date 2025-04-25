import { useEffect } from "react";
import usePagination from "../../hooks/usePagination";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import ProductSkeleton from "../layout/ProductSkeleton";

const ProductGrid = () => {
  // Get pagination and product data from the store
  const { currentProducts, currentPage, totalPages, setCurrentPage } =
    usePagination();
  // Get the fetchProducts function and the products and the searchQuery from the store
  const { fetchProducts, products, setSearchQuery, isLoading } =
    useProductStore();
  //Get the addtoCart function from the CartStore
  const addToCart = useCartStore((state) => state.addToCart);

  // Fetch products on page load
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  return (
    <div className="flex flex-col w-full">
      <div className="hidden md:block">
        <div className="flex justify-end ">
          <input
            type="text"
            className="2xl:w-[500px] w-full rounded-full bg-gray-200 pl-12 py-3 pr-4 focus:outline-none md:max-w-[400px]"
            placeholder="Search for products..."
            onChange={(e) => setSearchQuery(e.target.value)} //update searchQuery state
          />
        </div>
      </div>
      {/* Main content */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow animate-pulse"
            >
              <div className="bg-[#e0e0e0] rounded-xl h-[400px] w-full"></div>
              <div className="mt-4 h-6 bg-[#e0e0e0] rounded w-3/4"></div>
              <div className="mt-5 flex items-center justify-between">
                <div className="h-5 bg-[#e0e0e0] rounded w-1/3"></div>
                <div className="h-10 bg-[#e0e0e0] rounded-xl w-24"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-xl shadow">
                <div className="bg-[#F0EEED] rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-[400px]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-2 font-semibold text-2xl">{product.name}</h3>
                <div className="flex items-center justify-between mt-5">
                  <p className="text-lg font-bold">
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
              No products found.
            </div>
          )}
        </div>
      )}

      {/* render pagination only  */}
      {currentProducts.length > 0 && totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>

          <div className="hidden sm:flex">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 mx-1 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
