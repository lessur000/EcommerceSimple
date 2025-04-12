import styles from "../../../styles/twStyles";
import { motion as Motion } from "framer-motion";
import { FadeIn } from "../../../utils/motion";
import Jordan from "/Jordan.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={`${styles.paddings} container mx-auto `}>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-10">
        {/* left col */}
        <Motion.div
          variants={FadeIn("left")}
          initial="hidden"
          animate="open"
          className={`space-y-5`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase max-w-[600px]">
            Find Shoes that matches your style
          </h1>
          <p className="text-black/50 max-w-[500px] text-xl">
            Browse through our diverse range of meticulously crafted, designed
            to bring out your individuality to your sense of style.
          </p>
          <Link to={'/onsale'}>
          <button className="bg-black py-[16px] px-[54px] rounded-3xl text-white cursor-pointer">
            Shop Now
          </button></Link>
          <Motion.div
            variants={FadeIn("down")}
            initial="hidden"
            animate="open"
            className={`${styles.flexCenter} flex-wrap gap-5 md:justify-start pt-10`}
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                200+
              </h1>
              <p className="text-xs md:text-2xl">International Brands</p>
            </div>
            <div className="border border-r-1 border-gray-500" />
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                2,000+
              </h1>
              <p className="text-xs md:text-2xl">International Brands</p>
            </div>
            <div className="border border-r-1 border-gray-500" />
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                30,00+
              </h1>
              <p className="text-xs md:text-2xl">International Brands</p>
            </div>
          </Motion.div>
        </Motion.div>

        {/* right col */}
        <Motion.div variants={FadeIn("right")} initial="hidden" animate="open">
          <img src={Jordan} className="-rotate-20 drop-shadow-2xl" />
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
