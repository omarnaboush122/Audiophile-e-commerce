import Categories from "../components/Home/Categories";
import SpeakersAndEarphones from "../components/Home/SpeakersAndEarphones";
import Intro from "../components/Home/intro";

const Home = () => {
  return (
    <main>
      <Intro />
      <Categories />
      <SpeakersAndEarphones />
    </main>
  );
};

export default Home;
