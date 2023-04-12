import { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const { products, setProducts } = useContext(Context);

  const removeAllProducts = () => {
    setProducts([]);
  }

  const formatPrice = (price) => {
    return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  const productsElements = products.map(product => (
    <div key={product.id} className="flex justify-between items-center">
      <img src={product.img} alt={product.name} className="w-16 h-16 rounded-lg" />
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-sm font-bold uppercase tracking-wider">{product.name}</h3>
        <p className="text-sm font-bold opacity-50">{formatPrice(product.price)}</p>
      </div>
      <p className="text-sm font-bold opacity-50">{product.count}x</p>
    </div>
  ));

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.count
  }, 0)

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
        {
          products.length > 0 ? <div className="flex flex-col gap-4 mb-8">{productsElements}</div> : <h2 className="h-40 text-2xl font-medium uppercase flex flex-col justify-center items-center">
            Your cart is empty
          </h2>
        }
      </div>
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-medium opacity-50 uppercase">Total</h4>
        <span className="text-lg font-bold uppercase">{formatPrice(totalPrice)}</span>
      </div>
      {
        products.length > 0 ? <Link to="/checkout"
          className="block w-full bg-burntSienna py-4 text-white text-center text-sm font-bold uppercase tracking-wider rounded"
          onClick={() => setIsCartOpen(false)}
        >
          checkout
        </Link> : <button
          onClick={() => setIsCartOpen(false)}
          className="w-full bg-burntSienna py-4 text-white text-sm font-bold uppercase tracking-wider rounded"
        >
          fill it
        </button>
      }
    </div>
  );
};

export default Cart;
