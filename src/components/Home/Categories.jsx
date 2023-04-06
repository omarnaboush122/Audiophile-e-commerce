import Category from "../Header/Category";
import { categoryData } from "../Header/Sidebar";


const Categories = () => {
  const categoriesElements = categoryData.map((category) => (
    <Category key={category.id} {...category} />
  ));
  return (
    <section className="mt-10 mb-32 md:my-24">
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:gap-8">
          {categoriesElements}
        </div>
      </div>
    </section>
  );
}

export default Categories;
