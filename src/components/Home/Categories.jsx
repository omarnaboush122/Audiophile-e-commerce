import Category from "../Header/Category";
import { categoryData } from "../Header/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Categories = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const categoriesElements = categoryData.map((category) => (
    <Category key={category.id} {...category} />
  ));
  return (
    <section className="mt-10 mb-32 md:my-24" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div className="w-[90vw] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:gap-8">
          {categoriesElements}
        </div>
      </div>
    </section>
  );
}

export default Categories;
