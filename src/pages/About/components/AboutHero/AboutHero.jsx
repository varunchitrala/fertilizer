import "./AboutHero.css";
import ScrollReveal from "../../../../components/ScrollReveal";

function AboutHero() {
  return (
    <section className="about-hero about-hero-modern">
      <div className="about-hero-modern-bg" />
      <div className="container about-hero-modern-grid">
        <ScrollReveal className="about-hero-modern-copy" distance={40}>
          <div className="about-hero-modern-label">
            <span className="about-hero-modern-line" />
            <span>Agripex / About</span>
            <span className="about-hero-modern-number">01</span>
          </div>
          <h1>Built for <em>better</em> agriculture.</h1>
          <p>
            Reliable agricultural inputs, practical guidance, and a commitment
            to helping farmers grow with confidence.
          </p>
          <a className="about-hero-modern-link" href="#about-story">
            Discover our story <i>↘</i>
          </a>
        </ScrollReveal>

        <ScrollReveal className="about-hero-modern-visual" distance={50} delay={120}>
          <div className="about-hero-modern-image-wrap">
            <img src="/farmer-1.jpg" alt="Farmer working in an agricultural field" />
            <div className="about-hero-modern-image-tag">
              <span>FIELD / 2026</span>
              <span>AGRIPEX</span>
            </div>
          </div>
          <div className="about-hero-modern-orbit">
            <span>QUALITY · TRUST · GROWTH · QUALITY · TRUST · GROWTH</span>
          </div>
        </ScrollReveal>
      </div>

      <div className="about-hero-modern-footer container">
        <span>Built around the needs of agriculture</span>
        <span>Nashik, Maharashtra</span>
        <span>2026</span>
      </div>
    </section>
  );
}

export default AboutHero;
