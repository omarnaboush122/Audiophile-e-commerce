import CategoryThumbnailEarphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import CategoryThumbnailSpeakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import CategoryThumbnailHeadphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Category from "./Category";

const categoryData = [
  {
    id: 1,
    title: "headphones",
    image: CategoryThumbnailHeadphones,
    link: "/headphones",
  },
  {
    id: 2,
    title: "speakers",
    image: CategoryThumbnailSpeakers,
    link: "/speakers",
  },
  {
    id: 3,
    title: "earphones",
    image: CategoryThumbnailEarphones,
    link: "/earphones",
  },
];

const categoriesElements = categoryData.map((category) => (
  <Category key={category.id} {...category} />
));

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`absolute top-24 left-0 right-0 bg-white rounded-br-lg rounded-bl-lg z-50 transition-transform duration-500 lg:hidden ${
        isSidebarOpen ? "translate-x-0 shadow" : "-translate-x-[100vw]"
      }`}
    >
      <ul className="grid grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-2 md:grid-cols-3">
        {categoriesElements}
      </ul>
    </aside>
  );
};

export default Sidebar;
