import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import DressStyles from "../components/sections/Home/DressStyles.jsx";
import Footers from "../components/sections/Home/Footers.jsx";
import Hero from "../components/sections/Home/Hero";
import Logo from "../components/sections/Home/Logo";
import Newarrival from "../components/sections/Home/Newarrival";
import Offers from "../components/sections/Home/Offers.jsx";
import Topselling from "../components/sections/Home/Topselling";
import styles from "../styles/twStyles";
import SplashScreen from "../components/ui/SplashScreen";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasShownSplash = sessionStorage.getItem("hasShownSplash");

    if (!hasShownSplash) {
      // Show splash for 3 seconds
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("hasShownSplash", "true");
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

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
        <div className="border-b-2 border-gray-500/20 mx-auto max-w-[1800px]" />
        <Topselling />
      </div>
      <DressStyles />
      <div className="relative">
        <Offers />
        <div className="w-full">
          <Footers />
        </div>
      </div>
    </main>
  );
};

export default Home;
