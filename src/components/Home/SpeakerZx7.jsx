import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SpeakerZx7 = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <article className="speakerzx7 bg-brightGray text-black w-full py-28 px-6 rounded-lg md:px-16 lg:px-24" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div className="flex flex-col justify-start items-start gap-8">
        <h3 className=" text-3xl font-bold uppercase tracking-widest">zx7 speaker</h3>
        <Link to="/product/5" className="py-4 px-8 text-sm font-bold tracking-widest uppercase cursor-pointer border border-solid border-black hover:bg-black hover:text-white transition-colors duration-300">See Product</Link>
      </div>
    </article>
  );
}

export default SpeakerZx7;
