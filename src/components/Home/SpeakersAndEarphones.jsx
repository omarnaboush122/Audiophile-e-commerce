import SpeakerZx7 from "./SpeakerZx7";
import SpeakerZx9 from "./SpeakerZx9";


const SpeakersAndEarphones = () => {
  return (
    <section className="my-32">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex flex-col justify-center items-center gap-6 text-center md:gap-9 lg:gap-12">
          <SpeakerZx9 />
          <SpeakerZx7/>
        </div>
      </div>
    </section>
  );
}

export default SpeakersAndEarphones;
