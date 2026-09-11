import Header from "../../components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutPreview from "./components/AboutPreview/AboutPreview";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
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
        <WhyChoose />
        <FeaturedProducts />
        <Certifications />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default Home;
