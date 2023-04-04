import Hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Aside from "./Aside";

const Header = () => {
  return (
    <header className="bg-blackBean relative">
      <div className="container mx-auto py-8 px-6 flex justify-between items-center border-b border-solid border-[rgb(255,255,255,0.1)]">
        <div className="lg:hidden">
          <img src={Hamburger} alt="hamburger" className="cursor-pointer" />
        </div>

        <Link to="/">
          <img src={Logo} alt="logo" className="md:mr-96 lg:mr-0" />
        </Link>

        <Navbar />

        <div>
          <img src={Cart} alt="cart" className="cursor-pointer" />
        </div>
      </div>

      <Aside />
    </header>
  );
};

export default Header;