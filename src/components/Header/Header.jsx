import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo.svg";
import CartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Cart from "./Cart";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <header className="bg-blackBean py-8 px-6 border-b border-solid border-[rgb(255,255,255,0.2)]">
      <div className="relative container mx-auto flex justify-between items-center">
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

        <div>
          <img
            src={CartIcon}
            alt="cart-icon"
            className="cursor-pointer"
            onClick={toggleCart}
          />
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
