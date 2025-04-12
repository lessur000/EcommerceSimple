import useCartStore from "../store/useCartStore";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartProducts = ({ product }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useCartStore();
  //destructure product
  const { id, image, name, price, amount } = product;

  return (
    <div className="flex items-center gap-4 mb-4 p-4 border-b border-gray-300 rounded-3xl shadow-xl">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 md:w-30 md:h-50 object-cover rounded"
      />

      <div className="flex-1">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">₱{price.toLocaleString()}</p>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => decreaseAmount(id)} className="p-1 cursor-pointer">
            <FaMinus size={12} />
          </button>
          <span>{amount}</span>
          <button onClick={() => increaseAmount(id)} className="p-1 cursor-pointer">
            <FaPlus size={12} />
          </button>
        </div>
      </div>

      <button onClick={() => removeFromCart(id)} className="text-red-500 cursor-pointer">
        <FaTrash />
      </button>
    </div>
  );
};

export default CartProducts;
