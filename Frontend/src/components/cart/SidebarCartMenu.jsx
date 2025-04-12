import { FaXmark } from "../ui/Icons";
import useToggleStore from "../store/useToggleStore";
import { motion as Motion } from "framer-motion";
import { sidebarCarts } from "../../utils/motion";
import useCartStore from "../store/useCartStore";
import CartProducts from "./CartProducts";

const SidebarCartMenu = () => {
  const { isCartOpen, toggleCart } = useToggleStore();
  const { cart, subTotal, deliveryFee, total, discount, itemAmount } = useCartStore();

  return (
    <>
      {isCartOpen && ( // Fixed conditional rendering here
        <Motion.div
          variants={sidebarCarts("right")}
          initial="hidden"
          animate={isCartOpen ? "open" : "hidden"}
          className="fixed top-0 right-0 z-30 bg-white w-full sm:w-[500px] h-full shadow-lg p-5 overflow-x-auto"
        >
          {/* Cart Content */}
          <div className="flex justify-end">
            <FaXmark
              size={30}
              className="text-black cursor-pointer"
              onClick={toggleCart} // Close cart when clicked
            />
          </div>
          <h3 className="text-xl font-semibold mb-4">Your Cart {itemAmount}</h3>
          {/* Add cart items here */}

          <div className="flex flex-col gap-y-2 h-[520px] lg:h-[700px] overflow-y-auto overflow-x-hidden ">
            {cart.map((product) => (
              <CartProducts product={product} key={product.id} />
            ))}
          </div>
          {/* Order Summary */}
          <div className="border border-gray-500/50 rounded-xl mt-20 p-10">
            <div className="space-y-5">
              <h1 className="font-bold text-3xl">Order Summary</h1>
              <div className="flex items-center justify-between">
                <h6 className="text-[#000000]/60 text-xl font-semibold">
                  Subtotal
                </h6>
                <span className="font-bold">{subTotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <h6 className="font-semibold text-xl text-[#000000]/60">
                  Discount 20%
                </h6>
                <span className="font-bold">{discount.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <h6 className="font-semibold text-xl text-[#000000]/60">
                  Delivery Fee
                </h6>
                <span className="font-bold">{deliveryFee}</span>
              </div>
              <div className="border-t-2 border-gray-500/50" />
              <div className="flex items-center justify-between">
                <h6 className="font-semibold text-xl text-[#000000]/60">
                  Total:
                </h6>
                <span className="font-bold">{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </Motion.div>
      )}
    </>
  );
};

export default SidebarCartMenu;
