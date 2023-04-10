import { useContext } from "react";
import { Context } from "../../Context";

const Cart = ({ isCartOpen, setIsCartOpen }) => {

  const { products, setProducts } = useContext(Context);

  const removeAllProducts = () => {
    setProducts([]);
  }

  return (
    <div
      className={`bg-white text-black rounded-lg py-8 px-7 w-full max-w-sm absolute right-0 top-28 transform ${isCartOpen ? 'translate-y-0 shadow' : 'translate-y-full'
        } z-20 transition-transform duration-300`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center text-lg font-bold tracking-wide uppercase">
          <h3 className="mr-2">Cart</h3>
          <span>({products.length})</span>
        </div>
        <button className="font-medium opacity-50 underline hover:text-burntSienna transition-colors duration-300" onClick={removeAllProducts}>
          Remove all
        </button>
      </div>
      <div>
        <h2 className="h-40 text-2xl font-medium uppercase flex flex-col justify-center items-center">
          Your cart is empty
        </h2>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-medium opacity-50 uppercase">Total</h4>
        <span className="text-lg font-bold uppercase">$0.00</span>
      </div>
      <button
        onClick={() => setIsCartOpen(false)}
        className="w-full bg-burntSienna py-4 text-white text-sm font-bold uppercase tracking-wider rounded"
      >
        fill it
      </button>
    </div>
  );
};

export default Cart;
