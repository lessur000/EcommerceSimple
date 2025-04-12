import styles from "../../../styles/twStyles";

const Offers = () => {
  return (
    <section className={`${styles.paddings} z-10 relative`}>
      <div className="bg-black rounded-3xl mx-auto">
        <div className="p-5 md:p-20 flex flex-col lg:flex-row lg:justify-between ">
          <h1 className="text-white font-bold text-3xl md:text-6xl uppercase max-w-[800px]">
            stay up to date about our latest offers
          </h1>
          <div className="flex flex-col gap-3 md:gap-5 mt-3 lg:mt-0 w-full lg:max-w-[400px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white py-3 rounded-2xl "
            />
            <button className="text-black bg-white py-5 px-3 rounded-2xl font-bold cursor-pointer">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
