import './About.css'
import ScrollReveal from '../../components/ScrollReveal'

function About() {
  return (
    <div className="about-page">
      <main>
        <section className="about-hero">
          <div className="about-hero-image">
            <img src="/farmer-1.jpg" alt="Agricultural field" />
          </div>
          <div className="about-hero-overlay" />
          <div className="header-container about-hero-content">
            <ScrollReveal distance="up">
              <span className="about-eyebrow"><i /> About Agripex</span>
              <h1>Growing with<br /><em>agriculture.</em></h1>
              <p>Reliable agricultural inputs for healthier crops, stronger productivity and more sustainable farming.</p>
            </ScrollReveal>
            <div className="about-hero-meta">
              <span>AGRIPEX / COMPANY PROFILE</span>
              <span>01 / 05</span>
            </div>
          </div>
        </section>

        <section className="about-story">
          <div className="header-container about-story-grid">
            <ScrollReveal className="about-section-label" distance="left">
              <span>01</span>
              <p>Our story</p>
            </ScrollReveal>

            <ScrollReveal className="about-story-copy" delay={120} distance="up">
              <span className="about-kicker">Agripex Pesticide Fertilizer &amp; Chemical Private Limited</span>
              <h2>A trusted partner for the <em>modern field.</em></h2>
              <p>
                AGRIPEX PESTICIDE FERTILIZER AND CHEMICAL PRIVATE LIMITED is a trusted name in the agriculture sector, committed to providing high-quality pesticides, fertilizers, and agricultural chemicals.
              </p>
              <p>
                We support farmers with reliable products that enhance crop health, productivity, and yield, while contributing to sustainable and profitable farming practices across India.
              </p>
            </ScrollReveal>

            <ScrollReveal className="about-story-image" delay={180} distance="right">
              <img src="/coursel-main.jpg" alt="Crop field" loading="lazy" />
              <span>AGRIPEX / FIELD FOCUS</span>
            </ScrollReveal>
          </div>
        </section>

        <section className="about-principles">
          <div className="header-container">
            <ScrollReveal className="about-section-heading" distance="up">
              <span className="about-eyebrow about-eyebrow-dark"><i /> What guides us</span>
              <h2>Quality is the starting point.<br /><em>Trust is the outcome.</em></h2>
            </ScrollReveal>

            <div className="about-principles-grid">
              <ScrollReveal className="about-principle" delay={80} distance="up">
                <span>01</span>
                <h3>Quality</h3>
                <p>Premium-grade agricultural inputs focused on effectiveness, safety and dependable crop performance.</p>
              </ScrollReveal>
              <ScrollReveal className="about-principle" delay={180} distance="up">
                <span>02</span>
                <h3>Reliability</h3>
                <p>Consistent products and practical support designed around the needs of farmers and agriculture partners.</p>
              </ScrollReveal>
              <ScrollReveal className="about-principle" delay={280} distance="up">
                <span>03</span>
                <h3>Farmer focus</h3>
                <p>Understanding crop needs and helping farmers make better decisions about crop care and nutrition.</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="about-solutions">
          <div className="header-container about-solutions-grid">
            <ScrollReveal className="about-solutions-image" distance="left">
              <img src="/farmer-2.jpg" alt="Farmer working in an agricultural field" loading="lazy" />
            </ScrollReveal>
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

        <section className="about-mission">
          <div className="header-container about-mission-grid">
            <ScrollReveal className="about-mission-card" distance="up">
              <span>Our mission</span>
              <h2>Reliable solutions.<br /><em>Sustainable growth.</em></h2>
              <p>Our mission is to provide reliable and affordable agricultural solutions that help farmers achieve higher productivity and sustainable growth.</p>
            </ScrollReveal>
            <ScrollReveal className="about-mission-card about-mission-card-accent" delay={160} distance="up">
              <span>Our vision</span>
              <h2>Agriculture built on<br /><em>quality and trust.</em></h2>
              <p>Our vision is to become a leading agricultural input provider known for quality, trust, and innovation.</p>
            </ScrollReveal>
          </div>
        </section>

        <section className="about-closing">
          <div className="header-container">
            <ScrollReveal distance="up">
              <span className="about-eyebrow about-eyebrow-dark"><i /> Looking ahead</span>
              <h2>Better inputs.<br /><em>Better farming.</em></h2>
              <a href="mailto:agripexpestiside1995@gmail.com">Start a conversation <span>↗</span></a>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
