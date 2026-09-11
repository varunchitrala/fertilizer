import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./Solutions.css";

const offerings = [
  {
    number: "01",
    title: "Water-Soluble Fertilizers",
    text: "Soluble nutrient formulations for efficient crop nutrition and field application.",
    image: "/coursel-main.jpg",
  },
  {
    number: "02",
    title: "Specialty Fertilizers",
    text: "Specialized formulations developed for particular nutritional requirements during the crop cycle.",
    image: "/coursel-2.jpg",
  },
  {
    number: "03",
    title: "Micronutrients",
    text: "Targeted nutrient support for crops where specific micronutrient requirements matter.",
    image: "/coursel-3.jpg",
  },
  {
    number: "04",
    title: "Crop Solutions",
    text: "A broader range of agricultural inputs for practical crop and field requirements.",
    image: "/coursel-4.jpg",
  },
];

function Solutions() {
  return (
    <section className="solutions" id="solutions" aria-labelledby="solutions-title">
      <div className="header-container solutions-container">
        <ScrollReveal className="solutions-intro" distance="up">
          <div className="solutions-kicker">
            <span /> What We Offer
          </div>

          <div className="solutions-heading-wrap">
            <div>
              <span className="solutions-eyebrow">Agricultural solutions</span>
              <h2 id="solutions-title">
                The right support
                <br />
                <em>for every field.</em>
              </h2>
            </div>
            <p>
              Explore a focused range of agricultural inputs designed around crop
              nutrition, field requirements and practical farm applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="solutions-grid">
          {offerings.map((offering, index) => (
            <ScrollReveal key={offering.number} delay={index * 80} distance="up">
              <article className="solution-card">
                <div className="solution-image">
                  <img src={offering.image} alt={offering.title} loading="lazy" />
                  <div className="solution-image-overlay" />
                  <span className="solution-number">{offering.number}</span>
                </div>

                <div className="solution-content">
                  <h3>{offering.title}</h3>
                  <p>{offering.text}</p>
                  <Link className="solution-cta" to="/products" aria-label={`View ${offering.title} products`}>
                    <span>See Products</span>
                    <b aria-hidden="true">↗</b>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="solutions-footer" delay={300} distance="up">
          <div>
            <span>25 products across our agricultural range</span>
            <p>Find the formulation suited to your crop and application.</p>
          </div>
          <Link className="solutions-catalog-cta" to="/products">
            <span>View All Products</span>
            <b aria-hidden="true">↗</b>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Solutions;
