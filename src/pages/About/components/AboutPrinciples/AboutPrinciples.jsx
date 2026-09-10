import ScrollReveal from "../../../../components/ScrollReveal";

function AboutPrinciples() {
  return (
    <section className="about-principles">
      <div className="header-container">
        <ScrollReveal className="about-section-heading" distance="up">
          <span className="about-eyebrow about-eyebrow-dark">
            <i /> What guides us
          </span>
          <h2>
            Quality is the starting point.
            <br />
            <em>Trust is the outcome.</em>
          </h2>
        </ScrollReveal>
        <div className="about-principles-grid">
          <ScrollReveal className="about-principle" delay={80} distance="up">
            <span>01</span>
            <h3>Quality</h3>
            <p>
              Premium-grade agricultural inputs focused on effectiveness, safety
              and dependable crop performance.
            </p>
          </ScrollReveal>
          <ScrollReveal className="about-principle" delay={180} distance="up">
            <span>02</span>
            <h3>Reliability</h3>
            <p>
              Consistent products and practical support designed around the
              needs of farmers and agriculture partners.
            </p>
          </ScrollReveal>
          <ScrollReveal className="about-principle" delay={280} distance="up">
            <span>03</span>
            <h3>Farmer focus</h3>
            <p>
              Understanding crop needs and helping farmers make better decisions
              about crop care and nutrition.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default AboutPrinciples;
