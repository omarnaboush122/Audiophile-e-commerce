import Categories from "../components/Home/Categories";
import Info from "../components/Home/Info";
import SpeakersAndEarphones from "../components/Home/SpeakersAndEarphones";
import Intro from "../components/Home/Intro";

const Home = () => {
  return (
    <main>
      <Intro />
      <Categories />
      <SpeakersAndEarphones />
      <Info />
    </main>
  );
};

export default Home;
