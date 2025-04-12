import Slider from "react-slick";
import useProductStore from "../../store/useProductStore";
import useCartStore from "../../store/useCartStore";
import { Link } from "react-router-dom";

const Topselling = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { products } = useProductStore();

  // Filter only top selling products
  const Topsellings = products.filter((product) => product.topselling);

  const settings = {
    dots: false,
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
    <div className="space-y-10">
      <h1 className="text-center font-bold text-7xl">Top Selling</h1>
      <Slider {...settings}>
        {Topsellings.map((product) => {
          return (
            <div key={product.id} className="space-y-4 md:px-3">
              <div className="bg-[#F0EEED] rounded-3xl relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover "
                />
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
              <div className="flex items-center justify-between">
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
          );
        })}
      </Slider>
      <Link to={"/onsale"}>
        <div className="bg-black w-fit px-20 py-4 rounded-3xl mx-auto mt-30 cursor-pointer">
          <button className="text-white">View All</button>
        </div>
      </Link>
    </div>
  );
};

export default Topselling;
