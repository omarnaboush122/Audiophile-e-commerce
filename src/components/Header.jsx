import Hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import Headphone from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

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
      <aside className="absolute left-0 right-0 rounded-br-lg rounded-bl-lg z-50">
        <ul className="grid grid-cols-1 gap-4 px-6 py-8">
          <li className="relative text-center pt-16">
            <img
              src={Headphone}
              alt="headphone"
              className="w-36 absolute top-0 left-[50%] -translate-x-[50%]"
            />
            <div className="bg-brightGray w-full flex flex-col justify-center items-center gap-4 pt-20 pb-6 rounded-lg">
              <h3 className="text-base font-bold uppercase tracking-wider">
                headphones
              </h3>
              <Link to="/headphones" className="flex items-center gap-2">
                <span className="text-sm font-bold uppercase tracking-wide opacity-50 hover:text-burntSienna transition-colors duration-300">
                  shop
                </span>
                <img src={Arrow} alt="right-arrow" />
              </Link>
            </div>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;
