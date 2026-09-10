import './About.css'
import AboutHero from '../../components/About/AboutHero/AboutHero'
import AboutStory from '../../components/About/AboutStory/AboutStory'
import AboutPrinciples from '../../components/About/AboutPrinciples/AboutPrinciples'
import AboutSolutions from '../../components/About/AboutSolutions/AboutSolutions'
import AboutMission from '../../components/About/AboutMission/AboutMission'
import AboutClosing from '../../components/About/AboutClosing/AboutClosing'

function About() {
  return (
    <div className="about-page">
      <main>
        <AboutHero />
        <AboutStory />
        <AboutPrinciples />
        <AboutSolutions />
        <AboutMission />
        <AboutClosing />
      </main>
    </div>
  )
}

export default About
