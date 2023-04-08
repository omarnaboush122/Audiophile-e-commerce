import { Link } from "react-router-dom";

const SpeakerZx7 = () => {
  return (
    <article className="speakerzx7 bg-brightGray text-black w-full py-28 px-6 rounded-lg md:px-16 lg:px-24">
      <div className="flex flex-col justify-start items-start gap-8">
        <h3 className=" text-3xl font-bold uppercase tracking-widest">zx7 speaker</h3>
        <Link to="/product/5" className="py-4 px-8 text-sm font-bold tracking-widest uppercase cursor-pointer border border-solid border-black hover:bg-black hover:text-white transition-colors duration-300">See Product</Link>
      </div>
    </article>
  );
}

export default SpeakerZx7;
