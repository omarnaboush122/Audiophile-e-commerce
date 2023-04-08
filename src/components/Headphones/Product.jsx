import { Link } from "react-router-dom";


const Product = ({ flexDirection, img, title, newProduct, desc, link }) => {
  return (
    <article>
      <div className={`flex flex-col justify-center items-center gap-8 text-center lg:flex-${flexDirection} lg:gap-28 lg:text-left`}>
        <div>
          <img src={img} alt={title} className="w-full max-w-2xl rounded-lg" />
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          {newProduct && <h3 className="text-sm text-burntSienna uppercase tracking-[10px]">new product</h3>}
          <h2 className="text-black text-3xl font-bold tracking-wider uppercase max-w-xs mx-auto lg:m-0 lg:text-4xl">{title}</h2>
          <p className="text-black font-medium opacity-50 max-w-xl mx-auto lg:m-0">{desc}</p>
          <Link to={link} className="w-fit mx-auto bg-burntSienna text-white text-sm font-bold tracking-wider py-4 px-8 uppercase hover:bg-peach transition-colors duration-300 lg:m-0">see product</Link>
        </div>
      </div>
    </article>
  );
}

export default Product;
