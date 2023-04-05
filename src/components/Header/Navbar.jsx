import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-9 text-white">
        <li className="text-sm font-bold uppercase tracking-wider hover:text-burntSienna transition-colors duration-300">
          <Link to="/">home</Link>
        </li>
        <li className="text-sm font-bold uppercase tracking-wider hover:text-burntSienna transition-colors duration-300">
          <Link to="/headphones">headphones</Link>
        </li>
        <li className="text-sm font-bold uppercase tracking-wider hover:text-burntSienna transition-colors duration-300">
          <Link to="/speakers">speakers</Link>
        </li>
        <li className="text-sm font-bold uppercase tracking-wider hover:text-burntSienna transition-colors duration-300">
          <Link to="/earphones">earphones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
