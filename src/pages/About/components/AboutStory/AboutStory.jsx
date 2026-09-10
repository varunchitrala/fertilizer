import "./AboutStory.css";
import ScrollReveal from "../../../../components/ScrollReveal";

function AboutStory() {
  return (
    <section className="about-story" id="about-story">
      <div className="container about-story-grid">
        <div className="about-section-label">
          <span>01</span>
          <p>Our story</p>
        </div>

        <ScrollReveal className="about-story-copy" distance={35}>
          <span className="about-kicker">Experience shaped by the field</span>
          <h2>
            A trusted partner for the <em>modern field.</em>
          </h2>
          <p>
            Agripex Pesticide Fertilizer &amp; Chemical Pvt. Ltd. serves the
            agriculture sector with pesticides, fertilizers, and agricultural
            chemicals designed around real farming needs.
          </p>
          <p>
            From crop protection to soil and crop nutrition, our focus is on
            reliable products, practical guidance, and long-term trust with
            farmers, retailers, and distributors.
          </p>
        </ScrollReveal>

        <ScrollReveal className="about-story-image" distance={45} delay={120}>
          <img src="/coursel-main.jpg" alt="Agricultural field" />
          <span>AGRICULTURE / FIELD PARTNERSHIP</span>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default AboutStory;
