import AllProducts from "../components/Headphones/AllProducts";
import Header from "../components/Headphones/Header";
import Categories from "../components/Home/Categories";
import Info from "../components/Home/Info";


const Headphones = () => {
  return (
    <main>
      <Header />
      <AllProducts />
      <Categories />
      <Info />
    </main>
  );
}

export default Headphones;
