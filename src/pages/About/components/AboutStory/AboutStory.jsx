import ScrollReveal from "../../../../components/ScrollReveal";
import "./AboutStory.css";

function AboutStory() {
  return (
    <section className="about-story" id="about-story">
      <div className="container about-story-grid">
        <div className="about-section-label">
          <span>01</span>
          <p>Our story</p>
        </div>

        <ScrollReveal className="about-story-main" distance={35}>
          <span className="about-kicker">Built around agriculture</span>
          <h2>
            Agriculture is our focus. <em>Dependability is our promise.</em>
          </h2>
          <p className="about-story-lead">
            Agripex Pesticide Fertilizer &amp; Chemical Pvt. Ltd. works within the
            agricultural sector, bringing together pesticides, fertilizers, and
            agricultural chemicals to serve practical farming needs.
          </p>
          <p>
            Our work is grounded in the needs of the field — supporting farmers,
            retailers, and distributors with agricultural products and solutions
            designed for everyday crop and cultivation requirements.
          </p>
        </ScrollReveal>

        <ScrollReveal className="about-story-visual" distance={45} delay={120}>
          <div className="about-story-image">
            <img src="/ff.jpg" alt="Agricultural field" />
            <span>AGRIPEX / AGRICULTURAL FOCUS</span>
          </div>
          <div className="about-story-detail">
            <span>OUR APPROACH</span>
            <strong>Practical agricultural solutions, built around real field needs.</strong>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default AboutStory;
