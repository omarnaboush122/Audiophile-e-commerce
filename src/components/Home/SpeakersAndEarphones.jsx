import EarphonesYx1 from "./EarphonesYx1";
import SpeakerZx7 from "./SpeakerZx7";
import SpeakerZx9 from "./SpeakerZx9";


const SpeakersAndEarphones = () => {
  return (
    <section className="my-32">
      <div className="w-[90vw] max-w-5xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-6 text-center md:gap-9 lg:gap-12">
          <SpeakerZx9 />
          <SpeakerZx7 />
          <EarphonesYx1 />
        </div>
      </div>
    </section>
  );
}

export default SpeakersAndEarphones;
