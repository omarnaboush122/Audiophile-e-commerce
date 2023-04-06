import { Link } from "react-router-dom";
import IconArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

const Category = ({ image, title, link }) => {
  return (
    <li className="relative text-center pt-16">
      <img
        src={image}
        alt={title}
        className="w-36 absolute top-10 left-[50%] -translate-x-[50%]"
      />
      <div className="bg-brightGray w-full flex flex-col justify-center items-center gap-4 pt-20 pb-6 rounded-lg">
        <h3 className="text-base font-bold uppercase tracking-wider">
          {title}
        </h3>
        <Link
          to={link}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide opacity-50 hover:text-burntSienna transition-colors duration-300"
        >
          <span>shop</span>
          <img src={IconArrowRight} alt="icon-arrow-right" />
        </Link>
      </div>
    </li>
  );
};

export default Category;
