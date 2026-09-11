import Header from "../../components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutPreview from "./components/AboutPreview/AboutPreview";
import Solutions from "./components/Solutions/Solutions";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Certifications from "./components/Certifications/Certifications";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <Solutions />
        <WhyChoose />
        <Certifications />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default Home;
