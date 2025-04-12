import { motion as Motion } from "framer-motion";
import useToggleStore from "../store/useToggleStore";
import { sidebarNav } from "../../utils/motion";
import { FaXmark } from "../ui/Icons";

const SidebarNavMenu = () => {
  const { isNavOpen, toggleNav } = useToggleStore();
  return (
    <>
      {isNavOpen && (
        <Motion.div
          initial="hidden"
          animate={isNavOpen ? "open" : "hidden"}
          variants={sidebarNav("left")}
          className="fixed top-0 left-0 z-20 bg-white w-1/2 h-full p-5 shadow-lg"
        >
          <div className="flex justify-end">
            <FaXmark
              size={30}
              className="text-black cursor-pointer"
              onClick={toggleNav}
            />
          </div>
        </Motion.div>
      )}
    </>
  );
};

export default SidebarNavMenu;
