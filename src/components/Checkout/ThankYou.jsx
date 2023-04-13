import { useContext } from "react";
import CheckMark from "../../assets/checkout/icon-order-confirmation.svg";
import { Context } from "../../Context";
import { Link } from "react-router-dom";

const ThankYou = ({ grandTotal }) => {
  const { products, setProducts, formatPrice } = useContext(Context);
  return (
    <div className="bg-white p-8 rounded-lg w-[90vw] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow z-50 max-w-lg">
      <div className="relative w-16 h-16 bg-burntSienna rounded-full mb-6">
        <img src={CheckMark} alt="" />
      </div>
      <h3 className="text-2xl font-bold tracking-wider uppercase">thank you for your order</h3>
      <p className="font-medium opacity-50 mt-4 mb-6">You will receive an email confirmation shortly.</p>
      <div className="mb-6">
        <div className="bg-brightGray w-full p-6">
          <div className="flex pb-3 border-b border-solid border-b-[rgb(0,0,0,0.2)]">
            <img src={products[0].img} alt={products[0].name} className="w-16 h-16 rounded-lg mr-4" />
            <div className="flex flex-col gap-2 mr-auto">
              <h3 className="text-sm font-bold uppercase tracking-wider">{products[0].name}</h3>
              <p className="text-sm font-bold opacity-50">{formatPrice(products[0].price)}</p>
            </div>
            <p className="text-sm font-bold opacity-50">{products[0].count}x</p>
          </div>
          <p className="text-sm font-bold opacity-50 text-center pt-3">and {products.length - 1} other item(s) </p>
        </div>
        <div className="bg-black text-white p-6 rounded-b-lg">
          <h3 className="font-medium uppercase opacity-50 mb-2">grand total</h3>
          <p className="text-lg font-bold">{formatPrice(grandTotal)}</p>
        </div>
      </div>
      <Link to="/" onClick={() => setProducts([])} className="bg-burntSienna text-white text-sm font-bold py-4 px-8 uppercase flex justify-center items-center hover:bg-peach transition-colors duration-300">back to home</Link>
    </div>
  );
}

export default ThankYou;
