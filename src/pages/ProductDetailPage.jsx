import { useParams } from "react-router-dom";
import data from "../data.json";
import ProductDescription from "../components/ProductDetail/ProductDescription";
import GoBack from "../components/ProductDetail/GoBack";

const ProductDetailPage = () => {

  let { id } = useParams();

  const { mobile } = data[id - 1].categoryImage;
  const { name, new: newProduct, description, price } = data[id - 1];
  return (
    <main>
      <GoBack />
      <ProductDescription img={mobile} name={name} newProduct={newProduct} description={description} price={price} />
    </main>
  );
}

export default ProductDetailPage;
