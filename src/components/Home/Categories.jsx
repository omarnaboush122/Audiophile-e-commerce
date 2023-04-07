import Category from "../Header/Category";
import { categoryData } from "../Header/Sidebar";


const Categories = () => {
  const categoriesElements = categoryData.map((category) => (
    <Category key={category.id} {...category} />
  ));
  return (
    <section className="mt-10 mb-32 md:my-24">
      <div className="w-[90vw] max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:gap-8">
          {categoriesElements}
        </div>
      </div>
    </section>
  );
}

export default Categories;
