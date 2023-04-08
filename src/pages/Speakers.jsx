import Header from "../components/Headphones/Header";
import Categories from "../components/Home/Categories";
import Info from "../components/Home/Info";
import AllProducts from "../components/Speakers/AllProducts";


const Speakers = () => {
  return (
    <main>
      <Header title="speakers" />
      <AllProducts />
      <Categories />
      <Info />
    </main>
  );
}

export default Speakers;
