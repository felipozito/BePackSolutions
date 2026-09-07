import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Hero from "../Components/Header";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import information from "../Utils/information";

const Home = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Banner
        title={information.vision.title}
        paragraph={information.vision.paragraph}
      />
      <Services />
      <Banner
        title={information.mision.title}
        paragraph={information.mision.paragraph}
      />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
