import Header from "../components/layout/Header";

import DressStyles from "../components/sections/Home/DressStyles.jsx";
import Footers from "../components/sections/Home/Footers.jsx";
import Hero from "../components/sections/Home/Hero";
import Logo from "../components/sections/Home/Logo";
import Newarrival from "../components/sections/Home/Newarrival";
import Offers from "../components/sections/Home/Offers.jsx";
import Topselling from "../components/sections/Home/Topselling";
import styles from "../styles/twStyles";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="relative z-0">
        <div className="z-10 gradient" />
        <Hero />
        <Logo />
      </div>
      <div className={`${styles.paddings} space-y-20 md:space-y-50`}>
        <Newarrival />
        <div className="border-b-2 border-gray-500/20 mx-auto max-w-[1800px] " />
        <Topselling />
      </div>
      <DressStyles />
      <div className="relative">
        <Offers />
        <div className="w-full ">
          <Footers />
        </div>
      </div>
    </main>
  );
};

export default Home;
