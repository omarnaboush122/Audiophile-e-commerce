

const Header = ({ title }) => {
  return (
    <section className='bg-blackBean'>
      <div className='w-[90vw] max-w-6xl mx-auto py-8 text-center md:py-24'>
        <h1 className='text-white text-3xl font-bold uppercase tracking-widest'>{title}</h1>
      </div>
    </section>
  );
}

export default Header;
