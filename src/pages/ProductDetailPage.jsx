import { useParams } from "react-router-dom";
import data from "../data.json";
import ProductDescription from "../components/ProductDetail/ProductDescription";
import GoBack from "../components/ProductDetail/GoBack";
import ProductFeatures from "../components/ProductDetail/ProductFeatures";
import ProductImages from "../components/ProductDetail/ProductImages";
import OtherProducts from "../components/ProductDetail/OtherProducts";
import Categories from "../components/Home/Categories";
import Info from "../components/Home/Info";

const ProductDetailPage = () => {

  let { id } = useParams();

  const { id: ID, name, new: newProduct, description, price, features, includes, gallery, others, categoryImage } = data[id - 1];

  return (
    <main>
      <GoBack />
      <ProductDescription img={categoryImage.mobile} name={name} newProduct={newProduct} description={description} price={price} id={ID} />
      <ProductFeatures features={features} includes={includes} />
      <ProductImages gallery={gallery} />
      <OtherProducts others={others} />
      <Categories />
      <Info />
    </main>
  );
}

export default ProductDetailPage;
