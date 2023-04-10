

const ProductFeatures = ({ features, includes }) => {

  const featuresArray = features.split("\n\n");

  const featuresElements = featuresArray.map((feature, i) => (
    <p key={i} className='font-medium opacity-50 mb-4'>{feature}</p>
  ))

  const boxElements = includes.map((item, i) => (
    <div key={i} className="flex items-center gap-4">
      <span className=" text-burntSienna font-bold">{item.quantity}x</span>
      <p className="font-medium opacity-50">{item.item}</p>
    </div>
  ))

  return (
    <section className='my-32'>
      <div className='w-[90vw] max-w-6xl mx-auto'>
        <div className="w-full flex flex-col gap-28 lg:flex-row">
          <article className="flex flex-col gap-8 max-w-2xl">
            <h1 className='text-3xl font-bold tracking-widest'>Features</h1>
            {featuresElements}
          </article>
          <article className="flex flex-col gap-8">
            <h1 className=' text-2xl font-bold uppercase tracking-wider'>in the box</h1>
            <div className="flex flex-col gap-4">
              {boxElements}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProductFeatures;
