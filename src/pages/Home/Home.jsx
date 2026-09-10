import Header from "../../components/Header/Header";
import Hero from "./components/Hero/Hero";
import Solutions from "./components/Solutions/Solutions";
import Gallery from "../Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default Home;
