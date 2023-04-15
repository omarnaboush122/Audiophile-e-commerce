import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SpeakerZx9 = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <article className="bg-burntSienna text-white w-full py-14 px-6 flex flex-col gap-8 rounded-lg overflow-hidden md:gap-16 lg:flex-row lg:justify-center lg:gap-32" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <img src="/assets/home/desktop/image-speaker-zx9.png" alt="speaker-zx9" className="max-w-[10rem] mx-auto md:max-w-[12rem] lg:max-w-[410px] lg:m-0" />
      <div className="flex flex-col justify-center items-center gap-6 max-w-sm mx-auto lg:items-start lg:m-0 lg:text-left">
        <h3 className=" text-4xl font-bold uppercase max-w-[260px] mx-auto tracking-widest md:text-6xl lg:m-0">zx9 speaker</h3>
        <p className="text-base font-medium opacity-75">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to="/product/6" className="bg-black py-4 px-8 text-sm font-bold tracking-widest uppercase cursor-pointer hover:bg-[#4c4c4c] transition-colors duration-300">See Product</Link>
      </div>
    </article>
  );
}

export default SpeakerZx9;
