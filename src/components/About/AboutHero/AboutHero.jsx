import ScrollReveal from '../../ScrollReveal'

function AboutHero() {
  return (
    <section className="about-hero about-hero-modern" aria-labelledby="about-hero-title">
      <div className="about-hero-modern-bg" aria-hidden="true" />
      <div className="header-container about-hero-modern-grid">
        <div className="about-hero-modern-copy">
          <ScrollReveal distance="up">
            <div className="about-hero-modern-label">
              <span className="about-hero-modern-line" />
              <span>About Agripex</span>
              <span className="about-hero-modern-number">01</span>
            </div>

            <h1 id="about-hero-title">
              Built for
              <br />
              <em>better agriculture.</em>
            </h1>

            <p>
              Reliable agricultural inputs and practical solutions designed around healthier crops, stronger productivity and sustainable farming.
            </p>

            <a className="about-hero-modern-link" href="#about-story">
              <span>Discover our story</span>
              <i aria-hidden="true">↘</i>
            </a>
          </ScrollReveal>
        </div>

        <ScrollReveal className="about-hero-modern-visual" delay={140} distance="right">
          <div className="about-hero-modern-image-wrap">
            <img src="/farmer-1.jpg" alt="Farmer working in an agricultural field" />
            <div className="about-hero-modern-image-tag">
              <span>AGRIPEX</span>
              <span>FIELD / INDIA</span>
            </div>
          </div>
          <div className="about-hero-modern-orbit" aria-hidden="true">
            <span>AGRICULTURE • QUALITY • TRUST • INNOVATION • </span>
          </div>
        </ScrollReveal>
      </div>

      <div className="about-hero-modern-footer header-container">
        <span>AGRIPEX PESTICIDE FERTILIZER &amp; CHEMICAL PVT. LTD.</span>
        <span>COMPANY PROFILE</span>
        <span>2026</span>
      </div>
    </section>
  )
}

export default AboutHero
