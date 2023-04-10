import React from 'react';

const ProductImages = ({ gallery }) => {
  return (
    <section className='my-32'>
      <div className='w-[90vw] max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8'>
          <div className='flex flex-col gap-5'>
            <img src={gallery.first.desktop} alt="product-image" className='w-full rounded-lg' />
            <img src={gallery.second.desktop} alt="product-image" className='w-full rounded-lg' />
          </div>
          <div>
            <img src={gallery.third.desktop} alt="product-image" className='w-full h-full object-cover rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductImages;
