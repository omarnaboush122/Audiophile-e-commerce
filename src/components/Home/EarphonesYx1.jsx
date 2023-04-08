import Earphone from "../../assets/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

const EarphonesYx1 = () => {
  return (
    <article className="relative w-full grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-3 lg:gap-8">
      <div>
        <img src={Earphone} alt="earphones-yx1" className="rounded-lg w-full" />
      </div>
      <div className="flex flex-col items-start justify-center gap-8 bg-brightGray text-black px-6 py-10 rounded-lg md:p-10 lg:px-24">
        <h3 className="text-2xl font-bold uppercase tracking-widest md:text-3xl">yx1 earphones</h3>
        <Link to="/product/1" className="text-sm font-bold py-4 px-8 uppercase tracking-wider border border-solid border-black hover:bg-black hover:text-white transition-colors duration-300">see product</Link>
      </div>
    </article>
  );
}

export default EarphonesYx1;
