import { Link } from "react-router-dom";
import Speaker from "../../assets/home/desktop/image-speaker-zx9.png";

const SpeakersAndEarphones = () => {
  return (
    <section className="my-32">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          <article className="bg-burntSienna text-white w-full py-14 px-6 flex flex-col gap-8 rounded-lg md:gap-16">
            <img src={Speaker} alt="speaker-zx9" className="max-w-[10rem] mx-auto" />
            <div className="flex flex-col justify-center items-center gap-6 max-w-sm mx-auto">
              <h3 className=" text-4xl font-bold uppercase max-w-[260px] tracking-widest md:text-6xl">zx9 speaker</h3>
              <p className="text-base font-medium opacity-75">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Link className="bg-black py-4 px-8 text-sm font-bold tracking-widest cursor-pointer">See Product</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SpeakersAndEarphones;
