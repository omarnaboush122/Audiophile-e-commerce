import Headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import Speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`absolute top-24 left-0 right-0 bg-white rounded-br-lg rounded-bl-lg z-50 ${
        isSidebarOpen ? "translate-x-0 shadow" : "-translate-x-[100vw]"
      } transition-transform duration-500 lg:hidden`}
    >
      <ul className="grid grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-2 md:grid-cols-3">
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
        <li className="relative text-center pt-16">
          <img
            src={Speaker}
            alt="speaker"
            className="w-36 absolute top-0 left-[50%] -translate-x-[50%]"
          />
          <div className="bg-brightGray w-full flex flex-col justify-center items-center gap-4 pt-20 pb-6 rounded-lg">
            <h3 className="text-base font-bold uppercase tracking-wider">
              speakers
            </h3>
            <Link to="/speakers" className="flex items-center gap-2">
              <span className="text-sm font-bold uppercase tracking-wide opacity-50 hover:text-burntSienna transition-colors duration-300">
                shop
              </span>
              <img src={Arrow} alt="right-arrow" />
            </Link>
          </div>
        </li>
        <li className="relative text-center pt-16">
          <img
            src={Earphone}
            alt="earphone"
            className="w-36 absolute top-0 left-[50%] -translate-x-[50%]"
          />
          <div className="bg-brightGray w-full flex flex-col justify-center items-center gap-4 pt-20 pb-6 rounded-lg">
            <h3 className="text-base font-bold uppercase tracking-wider">
              earphones
            </h3>
            <Link to="/earphones" className="flex items-center gap-2">
              <span className="text-sm font-bold uppercase tracking-wide opacity-50 hover:text-burntSienna transition-colors duration-300">
                shop
              </span>
              <img src={Arrow} alt="right-arrow" />
            </Link>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
