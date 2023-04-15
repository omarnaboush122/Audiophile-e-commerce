import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductImages = ({ gallery }) => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className='my-32'>
      <div className='w-[90vw] max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8'>
          <div className='flex flex-col gap-5'>
            <img src={gallery.first.desktop} alt="product-image" className='w-full rounded-lg' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" />
            <img src={gallery.second.desktop} alt="product-image" className='w-full rounded-lg' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" />
          </div>
          <div>
            <img src={gallery.third.desktop} alt="product-image" className='w-full h-full object-cover rounded-lg' data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductImages;
