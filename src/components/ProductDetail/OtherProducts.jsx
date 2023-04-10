import { Link } from "react-router-dom";

const OtherProducts = ({ others }) => {

  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
    };

  const otherProductsElements = others.map((item, i) => (
    <article key={i} className="flex flex-col gap-8">
      <img src={item.image.desktop} alt={item.name} className="w-full h-full" />
      <h4 className="text-2xl font-bold uppercase tracking-widest text-center">{item.name}</h4>
      <Link onClick={scrollToTop} to={item.link} className=" bg-burntSienna text-white text-sm font-bold w-fit mx-auto px-8 py-4 flex justify-center items-center uppercase tracking-wider transition-colors duration-300 hover:bg-peach">see product</Link>
    </article>
  ))
  return (
    <section className="my-32">
      <div className="w-[90vw] max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold uppercase mb-10 text-center tracking-wider">you may also like</h3>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-3">
          {otherProductsElements}
        </div>
      </div>
    </section>
  );
}

export default OtherProducts;
