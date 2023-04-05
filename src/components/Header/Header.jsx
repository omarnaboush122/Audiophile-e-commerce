import Hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/shared/desktop/logo.svg";
import Cart from "./Cart";
import CartIcon from "../../assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prevCart) => !prevCart);
  };

  return (
    <header className="bg-blackBean py-8 px-6 border-b border-solid border-[rgb(255,255,255,0.2)]">
      <div className="relative container mx-auto flex justify-between items-center">
        <div className="lg:hidden">
          {isSidebarOpen ? (
            <AiOutlineClose
              color="white"
              size={25}
              className="cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            />
          ) : (
            <img
              src={Hamburger}
              alt="hamburger"
              className="cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            />
          )}
        </div>

        <Link to="/">
          <img src={Logo} alt="logo" className="md:mr-96 lg:mr-0" />
        </Link>

        <Navbar />

        <div>
          <img
            src={CartIcon}
            alt="cart-icon"
            className="cursor-pointer"
            onClick={toggleCart}
          />
        </div>
        {isCartOpen && <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />}
      </div>
      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} />}
    </header>
  );
};

export default Header;
