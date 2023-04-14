import Product from './Product';

const AllProducts = () => {
  return (
    <section className="my-32">
      <div className="w-[90vw] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-32">
          <Product flexDirection="row" img="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg" newProduct={true} title="XX99 Mark II Headphones" desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." link="/product/4" />
          <Product flexDirection="row-reverse" img="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg" newProduct={false} title="XX99 Mark I Headphones" desc="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go." link="/product/3" />
          <Product flexDirection="row" img="/assets/product-xx59-headphones/mobile/image-product.jpg" newProduct={false} title="XX59 Headphones" desc="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move." link="/product/2" />
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
