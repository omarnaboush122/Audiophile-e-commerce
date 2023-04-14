import Product from '../Headphones/Product';

const AllProducts = () => {
  return (
    <section className="my-32">
      <div className="w-[90vw] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-32">
          <Product flexDirection="row" img="/assets/product-zx9-speaker/mobile/image-product.jpg" newProduct={true} title="ZX9 SPEAKER" desc="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups." link="/product/6" />
          <Product flexDirection="row-reverse" img="/assets/product-zx7-speaker/mobile/image-product.jpg" newProduct={false} title="ZX7 SPEAKER" desc="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use." link="/product/5" />
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
