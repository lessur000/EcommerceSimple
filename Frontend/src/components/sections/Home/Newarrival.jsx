// Import React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Links } from "react-router-dom";
import useProductStore from "../../store/useProductStore";
import useCartStore from "../../store/useCartStore";
import ProductSkeleton from "../../layout/ProductSkeleton";

const Newarrival = () => {
  //get the addtocart function from the useCart.js
  const addToCart = useCartStore((state) => state.addToCart);
  const { products, isLoading } = useProductStore();

  // Filter only new arrival products
  const newArrivals = products.filter((product) => product.NewArrivals);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280, // Large screens (max 3 slides)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Medium screens (max 2 slides)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens (max 1 slide)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`space-y-10`}>
      <h2 className="text-center font-bold text-7xl">New Arrival</h2>
      {isLoading ? (
        <Slider {...settings} aria-hidden="true">
          {[...Array(4)].map((_, index) => (
            <div className="px-3" key={index}>
              <ProductSkeleton />
            </div>
          ))}
        </Slider>
      ) : (
        <Slider {...settings}>
          {newArrivals.map((product) => (
            <div key={product.id} className="space-y-4 md:px-3">
              <div className="bg-[#F0EEED] rounded-3xl relative group overflow-hidden">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
                {/* Button Container */}
                <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center bg-gray-500/50 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to={`/product/${product.name}`}>
                    <button className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg">
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      addToCart(product, product.id);
                      alert(`${product.name} add to cart`);
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <h5 className="text-3xl  font-serif">{product.name}</h5>
              <div className="flex justify-between">
                <p className="text-xl font-bold text-black">
                  ₱{product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => {
                    addToCart(product, product.id);
                    alert(`${product.name} added to cart`);
                  }}
                  className="rounded-xl bg-black text-white py-2 px-4 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      )}
      <Link to={"newarrivals"}>
        <div className="bg-black w-fit px-20 py-4 rounded-3xl mx-auto mt-30 cursor-pointer">
          <button className="text-white">View All</button>
        </div>
      </Link>
    </div>
  );
};

export default Newarrival;
