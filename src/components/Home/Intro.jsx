import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="home-intro">
      <div className="w-[90vw] max-w-6xl mx-auto flex flex-col justify-center items-center h-full text-white text-center border-t border-solid border-[rgb(255,255,255,0.2)] lg:text-left lg:items-start">
        <h3 className="text-sm tracking-[10px] uppercase opacity-50">
          new product
        </h3>
        <h1 className="text-4xl font-bold max-w-xs tracking-widest uppercase mt-4 mb-6 md:text-6xl md:tracking-[2px] md:max-w-md">
          XX99 Mark II HeadphoneS
        </h1>
        <p className="text-base font-medium opacity-75 mb-7 max-w-xs md:max-w-sm md:mb-10">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/product/4" className="bg-burntSienna text-white py-4 px-8 text-sm font-bold tracking-widest uppercase cursor-pointer hover:bg-peach transition-colors duration-300">
          see product
        </Link>
      </div>
    </section>
  );
};

export default Intro;
