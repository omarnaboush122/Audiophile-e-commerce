import { Link } from "react-router-dom";
import XX99MarkTwo from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"


const NewProduct = () => {
  return (
    <section className="my-16">
      <div className="w-[90vw] max-w-5xl mx-auto flex flex-col justify-center items-center gap-8 text-center lg:flex-row lg:gap-28 lg:text-left">
        <div>
          <img src={XX99MarkTwo} alt="earphone-xx99 Mark Two" className="w-full max-w-2xl" />
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          <h3 className="text-sm text-burntSienna uppercase tracking-[10px]">new product</h3>
          <h2 className="text-black text-3xl font-bold tracking-wider uppercase max-w-xs mx-auto lg:m-0 lg:text-4xl">XX99 Mark II Headphones</h2>
          <p className="text-black font-medium opacity-50 max-w-xl mx-auto lg:m-0">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <Link className="w-fit mx-auto bg-burntSienna text-white text-sm font-bold tracking-wider py-4 px-8 uppercase hover:bg-peach transition-colors duration-300 lg:m-0">see product</Link>
        </div>
      </div>
    </section>
  );
}

export default NewProduct;
