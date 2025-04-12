
import Slider from "react-slick";
import useProductStore from "../../store/useProductStore";

const YouLike = () => {
  const { products } = useProductStore()
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
    <section>
      <div>
        <h1 className="font-bold text-4xl text-center pt-10">
          You might also like
        </h1>
        <Slider {...settings}>
          {products.slice(1,9).map((product) => {
            return (
              <div key={product.id} className="px-3 mt-10">
                <div className="bg-[#F0EEED] rounded-3xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover "
                  />
                </div>
                <h5 className="text-3xl font-serif">{product.name}</h5>
                <p className="text-xl font-semibold text-black">
                  ₱{product.price.toLocaleString()}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default YouLike;
