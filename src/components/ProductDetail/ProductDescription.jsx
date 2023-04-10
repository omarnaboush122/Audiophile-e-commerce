import { useState } from "react";


const ProductDescription = ({ img, name, newProduct, description, price }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  }

  return (
    <section className="mb-16">
      <div className="w-[90vw] max-w-6xl mx-auto flex flex-col justify-center items-center gap-8 md:flex-row md:gap-16 lg:gap-32">
        <img src={img} alt={name} className="w-full h-full rounded-lg" />
        <article className="flex flex-col gap-6 text-black md:gap-8">
          {newProduct && <h3 className="text-sm text-burntSienna uppercase tracking-[10px]">new product</h3>}
          <h2 className="text-3xl font-bold tracking-wider md:text-4xl">{name}</h2>
          <p className=" font-medium opacity-50">{description}</p>
          <span className="text-lg font-bold uppercase tracking-widest">${price.toFixed(2)}</span>
          <div className="flex gap-4">
            <div className="bg-brightGray text-black flex items-center gap-10 p-4">
              <span className="block opacity-25 font-bold text-center cursor-pointer hover:text-burntSienna transition-colors duration-300" onClick={decrement}>-</span>
              <span className="text-sm font-bold text-center uppercase">{count}</span>
              <span className="block opacity-25 font-bold text-center cursor-pointer hover:text-burntSienna transition-colors duration-300" onClick={increment}>+</span>
            </div>
            <button className=" bg-burntSienna text-white uppercase py-4 px-8 tracking-wider hover:bg-peach transition-colors duration-300">add to cart</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProductDescription;