import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo.svg";
import CartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Cart from "./Cart";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../../Context";

const Header = () => {
  const { products } = useContext(Context);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <header className="bg-blackBean">
      <div className="relative w-[90vw] max-w-6xl mx-auto py-8 flex justify-between items-center">
        <div className="lg:hidden">
          {isSidebarOpen ? (
            <AiOutlineClose
              color="white"
              size={25}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          ) : (
            <img
              src={Hamburger}
              alt="hamburger"
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          )}
        </div>

        <Link to="/">
          <img src={Logo} alt="logo" className="md:mr-96 lg:mr-0" />
        </Link>

        <Navbar />

        <div className="relative">
          <img
            src={CartIcon}
            alt="cart-icon"
            className="cursor-pointer"
            onClick={toggleCart}
          />
          <span className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-burntSienna text-white text-xs flex justify-center items-center">{products.length}</span>
        </div>
        {isCartOpen && (
          <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        )}
      </div>
      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} />}
    </header>
  );
};

export default Header;
