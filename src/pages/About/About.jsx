import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import AboutHero from "./components/AboutHero/AboutHero";
import AboutStory from "./components/AboutStory/AboutStory";
import AboutPrinciples from "./components/AboutPrinciples/AboutPrinciples";
import AboutSolutions from "./components/AboutSolutions/AboutSolutions";
import AboutMission from "./components/AboutMission/AboutMission";

function About() {
  return (
    <>
      <Header />
      <div className="about-page">
        <main>
          <AboutHero />
          <AboutStory />
          <AboutPrinciples />
          <AboutSolutions />
          <AboutMission />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default About;
