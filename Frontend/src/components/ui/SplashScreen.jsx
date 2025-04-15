import { useEffect, useState } from "react";
import Logo from "/Logo.png";

const SplashScreen = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(() => {
        onFinish();
      }, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);
  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-5xl font-bold text-red-600 animate-pulse">
        <img src={Logo} className="fill-white"/>
      </h1>
    </div>
  );
};

export default SplashScreen;
