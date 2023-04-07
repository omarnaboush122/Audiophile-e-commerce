import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo.svg";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blackBean text-white">
      <div className='w-[90vw] max-w-5xl mx-auto text-center pb-10'>
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="logo" className="py-12 border-t-4 border-solid border-burntSienna" />
          <ul className="flex flex-col gap-4">
            <li className="text-sm font-bold tracking-widest uppercase hover:text-burntSienna transition-colors duration-300">
              <Link to="/">home</Link>
            </li>
            <li className="text-sm font-bold tracking-widest uppercase hover:text-burntSienna transition-colors duration-300">
              <Link to="/headphones">headphones</Link>
            </li>
            <li className="text-sm font-bold tracking-widest uppercase hover:text-burntSienna transition-colors duration-300">
              <Link to="/speakers">speakers</Link>
            </li>
            <li className="text-sm font-bold tracking-widest uppercase hover:text-burntSienna transition-colors duration-300">
              <Link to="/earphones">earphones</Link>
            </li>
          </ul>
        </div>
        <div className="my-12">
          <p className="font-medium opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="mb-12">
          <p className="font-bold opacity-50">Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FaFacebook size={30} className="cursor-pointer hover:text-burntSienna transition-colors duration-300" />
          <FaTwitter size={30} className="cursor-pointer hover:text-burntSienna transition-colors duration-300" />
          <FaInstagram size={30} className="cursor-pointer hover:text-burntSienna transition-colors duration-300" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
