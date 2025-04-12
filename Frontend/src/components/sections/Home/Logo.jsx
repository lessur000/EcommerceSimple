import { motion as Motion } from "framer-motion";

import {
  SiAdidas,
  SiFila,
  SiNike,
  SiPuma,
  SiUnderarmour,
} from "react-icons/si";
import { FadeIn } from "../../../utils/motion";
//import icons

const Logo = () => {
  return (
    <section className="bg-black z-10">
      <Motion.div
        variants={FadeIn("down")}
        initial="hidden"
        animate="open"
        className="py-7 container mx-auto flex flex-wrap items-center justify-center md:justify-between gap-5"
      >
        <SiPuma size={100} className="fill-white" />
        <SiNike size={100} className="fill-white" />
        <SiFila size={100} className="fill-white" />
        <SiAdidas size={100} className="fill-white" />
        <SiUnderarmour size={100} className="fill-white" />
      </Motion.div>
    </section>
  );
};

export default Logo;
