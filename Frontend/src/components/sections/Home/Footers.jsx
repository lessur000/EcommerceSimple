import styles from "../../../styles/twStyles";
import Logo from "/Logo.png";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "../../ui/Social";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FadeIn } from "../../../utils/motion";

const Footers = () => {
  return (
    <footer className="bg-[#F0F0F0] ">
      <div className={`${styles.paddings} container mx-auto`}>
        <Motion.div
          variants={FadeIn("down")}
          initial="hidden"
          animate="open"
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            {/* left row */}
            <img src={Logo} className="h-auto w-[250px] -ml-10" />
            <p className="max-w-[350px]">
              We have shoes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-2 mt-10">
              <FaFacebook size={30} />
              <FaGithub size={30} />
              <FaInstagram size={30} />
              <FaTwitter size={30} />
            </div>
          </div>
          {/* right row */}
          <div className="flex flex-wrap items-center md:justify-center gap-10 lg:gap-40 mt-10">
            <div className="flex flex-col p gap-2">
              <h1 className="font-semibold text-2xl uppercase">Company</h1>
              <Link>About</Link>
              <Link>Features</Link>
              <Link>Works</Link>
              <Link>Career</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-2xl uppercase">Help</h1>
              <Link>Customer Support</Link>
              <Link>Delivery Details</Link>
              <Link>Terms & Conditions</Link>
              <Link>Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-2xl uppercase">Faq</h1>
              <Link>Account</Link>
              <Link>Manage Deliveries</Link>
              <Link>Orders</Link>
              <Link>Payments</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-2xl uppercase">Resources</h1>
              <Link>Free eBooks</Link>
              <Link>Development Tutorial</Link>
              <Link>How to -Blog</Link>
              <Link>Youtube Playlist</Link>
            </div>
          </div>
        </Motion.div>
        <div className="border-b-1 border-gray-500/50 w-full border mt-20" />
        <p className="text-center font-semibold text-xl mt-5">
          Shoes © 2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footers;
