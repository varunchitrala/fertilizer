import ScrollReveal from '../../ScrollReveal'

function AboutMission() {
  return (
    <section className="about-mission">
      <div className="header-container about-mission-grid">
        <ScrollReveal className="about-mission-card" distance="up"><span>Our mission</span><h2>Reliable solutions.<br /><em>Sustainable growth.</em></h2><p>Our mission is to provide reliable and affordable agricultural solutions that help farmers achieve higher productivity and sustainable growth.</p></ScrollReveal>
        <ScrollReveal className="about-mission-card about-mission-card-accent" delay={160} distance="up"><span>Our vision</span><h2>Agriculture built on<br /><em>quality and trust.</em></h2><p>Our vision is to become a leading agricultural input provider known for quality, trust, and innovation.</p></ScrollReveal>
      </div>
    </section>
  )
}

export default AboutMission
