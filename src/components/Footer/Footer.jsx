import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <footer className="bg-blackBean text-white" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div className='w-[90vw] max-w-6xl mx-auto text-center pb-12 md:text-left'>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start lg:flex-row lg:justify-between lg:items-center">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" className="py-12 border-t-4 border-solid border-burntSienna md:pt-14" />
          <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
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
        <div className="my-12 md:mt-8 md:mb-20">
          <p className="font-medium opacity-50 max-w-xl mx-auto md:m-0">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="w-full flex flex-col gap-12 md:flex-row md:justify-between md:items-center">
          <div>
            <p className="font-bold opacity-50">Copyright {year} . All Rights Reserved</p>
          </div>
          <div className="flex justify-center items-center gap-4 lg:-translate-y-24">
            <FaFacebook size={30} className="cursor-pointer hover:text-burntSienna transition-colors duration-300" />
            <FaTwitter size={30} className="cursor-pointer hover:text-burntSienna transition-colors duration-300" />
            <FaInstagram size={30} className="cursor-pointer hover:text-burntSienna transition-colors duration-300" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
