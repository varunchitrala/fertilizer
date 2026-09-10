import ScrollReveal from "../../../../components/ScrollReveal";

function AboutStory() {
  return (
    <section className="about-story" id="about-story">
      <div className="header-container about-story-grid">
        <ScrollReveal className="about-section-label" distance="left">
          <span>01</span>
          <p>Our story</p>
        </ScrollReveal>
        <ScrollReveal className="about-story-copy" delay={120} distance="up">
          <span className="about-kicker">
            Agripex Pesticide Fertilizer &amp; Chemical Private Limited
          </span>
          <h2>
            A trusted partner for the <em>modern field.</em>
          </h2>
          <p>
            AGRIPEX PESTICIDE FERTILIZER AND CHEMICAL PRIVATE LIMITED is a
            trusted name in the agriculture sector, committed to providing
            high-quality pesticides, fertilizers, and agricultural chemicals.
          </p>
          <p>
            We support farmers with reliable products that enhance crop health,
            productivity, and yield, while contributing to sustainable and
            profitable farming practices across India.
          </p>
        </ScrollReveal>
        <ScrollReveal
          className="about-story-image"
          delay={180}
          distance="right"
        >
          <img src="/coursel-main.jpg" alt="Crop field" loading="lazy" />
          <span>AGRIPEX / FIELD FOCUS</span>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default AboutStory;
