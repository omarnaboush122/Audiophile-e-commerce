import Hero from "../../assets/shared/desktop/image-best-gear.jpg"

const Info = () => {
  return (
    <section className='my-32 md:my-24 lg:my-48'>
      <div className="container mx-auto px-6 flex flex-col gap-10 md:px-0 md:gap-16 lg:flex-row-reverse lg:items-center lg:gap-32">
        <article>
          <img src={Hero} alt="hero" className="w-full h-[300px] rounded-lg object-cover flex-1 lg:h-[540px]" />
        </article>
        <article className="flex flex-col gap-8 text-center text-black max-w-xl mx-auto flex-1 lg:mx-0 lg:text-left">
          <h3 className="text-2xl font-bold tracking-wider uppercase sm:text-3xl md:text-4xl">Bringing you the <span className="text-burntSienna">best</span> audio gear</h3>
          <p className="font-medium opacity-50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </article>
      </div>
    </section>
  );
}

export default Info;