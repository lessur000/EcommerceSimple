import { motion as Motion } from "framer-motion";
import useToggleStore from "../store/useToggleStore";
import { sidebarNav } from "../../utils/motion";
import { FaXmark } from "../ui/Icons";
import { Link } from "react-router-dom";

const SidebarNavMenu = () => {
  const { isNavOpen, toggleNav } = useToggleStore();
  return (
    <>
      {isNavOpen && (
        <Motion.div
          initial="hidden"
          animate={isNavOpen ? "open" : "hidden"}
          variants={sidebarNav("left")}
          className="fixed top-0 left-0 z-20 bg-white w-2/3 h-full p-5 shadow-lg"
        >
          <div className="flex justify-end">
            <FaXmark
              size={30}
              className="text-black cursor-pointer"
              onClick={toggleNav}
            />
          </div>
          <nav className="flex flex-col mt-10 gap-3 font-semibold">
            <Link to={''}>Shop</Link>
            <Link to={'/onsale'}>On Sale</Link>
            <Link to={'/newarrivals'}>New Arrivals</Link>
          </nav>
        </Motion.div>
      )}
    </>
  );
};

export default SidebarNavMenu;
