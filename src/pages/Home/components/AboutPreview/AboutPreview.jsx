import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./AboutPreview.css";

function AboutPreview() {
  return (
    <section className="about-preview" aria-labelledby="about-preview-title">
      <div className="header-container about-preview-container">
        <ScrollReveal className="about-preview-topline" distance="up">
          <span className="about-preview-index">01</span>
          <span className="about-preview-rule" />
          <span>Company introduction</span>
        </ScrollReveal>

        <div className="about-preview-grid">
          <ScrollReveal className="about-preview-visual" distance="up">
            <div className="about-preview-image-wrap">
              <img src="/coursel-main.jpg" alt="Agricultural field and crop growth" loading="lazy" />
              <div className="about-preview-image-caption">
                <span>Focused on agriculture</span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="about-preview-content" delay={120} distance="up">
            <span className="about-preview-kicker">Who we are</span>
            <h2 id="about-preview-title">
              Solutions with a
              <br />
              <em>purpose.</em>
            </h2>

            <p className="about-preview-lead">
              AGRIPEX is focused on agricultural products and solutions designed
              around the practical needs of modern farming.
            </p>

            <p className="about-preview-text">
              From crop nutrition to field-focused solutions, our approach starts
              with understanding the application and ends with helping customers
              make a confident product choice.
            </p>

            <div className="about-preview-points">
              <div><span>01</span><strong>Understand the field</strong></div>
              <div><span>02</span><strong>Offer practical solutions</strong></div>
              <div><span>03</span><strong>Build lasting trust</strong></div>
            </div>

            <Link className="about-preview-primary-cta" to="/about">
              <span>Discover AGRIPEX</span>
              <b aria-hidden="true">↗</b>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
