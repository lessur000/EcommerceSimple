import styles from "../../../styles/twStyles";
import { FadeIn } from "../../../utils/motion";
import { Nike, Adidas, Fila, Puma } from "../../ui/images";
import { motion as Motion } from "framer-motion";

const DressStyles = () => {
  return (
    <section className={`${styles.paddings}`}>
      <Motion.div
        variants={FadeIn("down")}
        initial="hidden"
        animate="open"
        className=" bg-[#F0F0F0]  rounded-4xl w-fit mx-auto md:p-15"
      >
        <h1 className="text-center text-5xl font-bold uppercase">
          browse by dress style
        </h1>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
            {/* Nike */}
            <div className="col-span-1 md:col-span-1">
              <div className="relative bg-white rounded-lg overflow-hidden shadow">
                <img
                  src={Nike}
                  className="w-full h-[200px] md:h-[250px] object-cover"
                  alt="Nike"
                />
                <p className="absolute top-2 left-2 text-white text-3xl font-semibold">
                  Nike
                </p>
              </div>
            </div>

            {/* adidas */}
            <div className="col-span-1 md:col-span-2">
              <div className="relative bg-white rounded-lg overflow-hidden shadow">
                <img
                  src={Adidas}
                  className="w-full h-[200px] md:h-[250px] object-cover object-bottom"
                  alt="Adidas"
                />
                <p className="absolute top-2 left-2 text-white text-3xl font-semibold">
                  Adidas
                </p>
              </div>
            </div>

            {/* Puma */}
            <div className="col-span-1 md:col-span-2">
              <div className="relative bg-white rounded-lg overflow-hidden shadow">
                <img
                  src={Puma}
                  className="w-full h-[200px] md:h-[250px] object-cover object-bottom"
                  alt="Puma"
                />
                <p className="absolute top-2 left-2 text-white text-3xl font-semibold">
                  Puma
                </p>
              </div>
            </div>

            {/* Fila */}
            <div className="col-span-1 md:col-span-1">
              <div className="relative bg-white rounded-lg overflow-hidden shadow">
                <img
                  src={Fila}
                  className="w-full h-[200px] md:h-[250px] object-cover object-bottom"
                  alt="Fila"
                />
                <p className="absolute top-2 left-2 text-white text-3xl font-semibold">
                  Fila
                </p>
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default DressStyles;
