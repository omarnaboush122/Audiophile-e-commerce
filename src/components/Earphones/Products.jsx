import Product from '../Headphones/Product';

const Products = () => {
  return (
    <section className="my-32">
      <div className="w-[90vw] max-w-6xl mx-auto">
        <div>
          <Product flexDirection="row" img="/assets/product-yx1-earphones/mobile/image-product.jpg" newProduct={true} title="YX1 WIRELESS EARPHONES" desc="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature." link="/product/1" />
        </div>
      </div>
    </section>
  );
}

export default Products;
