import Products from "../components/Earphones/Products";
import Header from "../components/Headphones/Header";
import Categories from "../components/Home/Categories";
import Info from "../components/Home/Info";


const Earphones = () => {
  return (
    <main>
      <Header title="earphones" />
      <Products />
      <Categories />
      <Info />
    </main>
  );
}

export default Earphones;
