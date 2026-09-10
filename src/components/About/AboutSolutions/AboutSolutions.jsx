import ScrollReveal from '../../ScrollReveal'

function AboutSolutions() {
  return (
    <section className="about-solutions">
      <div className="header-container about-solutions-grid">
        <ScrollReveal className="about-solutions-image" distance="left"><img src="/farmer-2.jpg" alt="Farmer working in an agricultural field" loading="lazy" /></ScrollReveal>
        <ScrollReveal className="about-solutions-copy" delay={140} distance="right">
          <span className="about-kicker">Science-driven solutions for better farming</span>
          <h2>From crop protection<br />to <em>soil nutrition.</em></h2>
          <p>Agripex provides agricultural product supply, crop protection solutions, and soil and crop nutrition guidance to meet the evolving needs of farmers.</p>
          <div className="about-solution-list">
            <div><span>01</span><strong>Agricultural product supply</strong></div>
            <div><span>02</span><strong>Crop protection solutions</strong></div>
            <div><span>03</span><strong>Soil &amp; crop nutrition guidance</strong></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default AboutSolutions
