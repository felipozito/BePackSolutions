import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Hero from "../Components/Header";
import information from "../Utils/information";

const Home = () => {
  return (
    <div className="bg-background">
      <Hero />
      <Banner
        title={information.vision.title}
        paragraph={information.vision.paragraph}
        colors="main"
      />
      <Banner
        title={information.mision.title}
        paragraph={information.mision.paragraph}
        colors="secondary"
      />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
