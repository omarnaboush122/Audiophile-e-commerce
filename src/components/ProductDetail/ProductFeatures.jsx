import React from 'react';

const ProductFeatures = ({ features }) => {

  const featuresArray = features.split("\n\n");

  return (
    <section className='my-32'>
      <div className=' w-[90vw] max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold tracking-widest mb-8'>Features</h1>
        {
          featuresArray.map((feature,i) => (
            <p key={i} className='font-medium opacity-50 mb-4'>{feature}</p>
          ))
        }
      </div>
    </section>
  );
}

export default ProductFeatures;
