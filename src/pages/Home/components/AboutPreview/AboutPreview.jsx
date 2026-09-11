import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./AboutPreview.css";

function AboutPreview() {
  return (
    <section className="about-preview" aria-labelledby="about-preview-title">
      <div className="header-container about-preview-container">
        <ScrollReveal className="about-preview-label" distance="up">
          <span className="about-preview-index">01</span>
          <span className="about-preview-line" />
          <span>About AGRIPEX</span>
        </ScrollReveal>

        <div className="about-preview-grid">
          <ScrollReveal className="about-preview-heading" distance="up">
            <span className="about-preview-kicker">Who we are</span>
            <h2 id="about-preview-title">
              Growing with
              <br />
              <em>purpose.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="about-preview-content" delay={120} distance="up">
            <p className="about-preview-lead">
              AGRIPEX develops agricultural solutions with a practical focus on
              crop nutrition, field performance and the evolving needs of farmers.
            </p>
            <p className="about-preview-text">
              Our approach brings together product knowledge, responsible
              practices and a clear understanding of agriculture to support better
              decisions from the field to the harvest.
            </p>

            <div className="about-preview-meta" aria-label="About AGRIPEX highlights">
              <div>
                <strong>01</strong>
                <span>Field focused</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Practical solutions</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Built for growth</span>
              </div>
            </div>

            <Link className="about-preview-link" to="/about">
              <span>Discover our story</span>
              <b aria-hidden="true">↗</b>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
