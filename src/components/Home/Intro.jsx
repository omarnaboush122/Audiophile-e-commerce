import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="home-intro">
      <div className="container mx-auto flex flex-col justify-center items-center h-full text-white text-center px-6 border-t border-solid border-[rgb(255,255,255,0.2)]">
        <div className="max-w-sm">
          <h3 className="text-sm tracking-[10px] uppercase opacity-50">
            new product
          </h3>
          <h1 className="text-4xl font-bold tracking-widest uppercase mt-4 mb-6">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="text-base font-medium opacity-75 mb-7">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link className="bg-burntSienna text-white py-4 px-8 text-sm font-bold tracking-widest uppercase cursor-pointer">
            see product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
