const Cart = ({isCartOpen}) => {
  return (
    <div className={`bg-white text-black absolute top-32 right-0 w-full max-w-sm rounded-lg z-20 ${isCartOpen && "shadow"}`}>
      <div className="flex flex-col py-8 px-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-lg font-bold tracking-wide uppercase">
            <h3 className="mr-2">Cart</h3>
            <span>(3)</span>
          </div>
          <button className="font-medium opacity-50 underline hover:text-burntSienna transition-colors duration-300">
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
        <button className="w-full bg-burntSienna py-4 text-white text-sm font-bold uppercase tracking-wider rounded">
          fill it
        </button>
      </div>
    </div>
  );
};

export default Cart;
