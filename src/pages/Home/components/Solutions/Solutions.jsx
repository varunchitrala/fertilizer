import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./Solutions.css";

const offerings = [
  {
    number: "01",
    title: "Water-Soluble Fertilizers",
    text: "A focused range of soluble NPK and nutrient formulations for efficient crop nutrition.",
    examples: "00:50:62 · 28:28:00 · 25:25:25",
  },
  {
    number: "02",
    title: "Specialty Fertilizers",
    text: "Specialized formulations designed around specific nutritional requirements in the crop cycle.",
    examples: "Calcium Nitrate · Nutrigen Potassium · Bundha Special",
  },
  {
    number: "03",
    title: "Micronutrients",
    text: "Targeted nutrient products that complement crop nutrition where specific micronutrients are required.",
    examples: "Calibor · 19:19:19 · 10:26:26",
  },
  {
    number: "04",
    title: "Crop Solutions",
    text: "A broader agricultural range supporting practical crop and field requirements beyond core nutrition.",
    examples: "DAP · Urea · Nimatocide+ · Ven Special",
  },
];

function Solutions() {
  return (
    <section className="solutions" id="solutions" aria-labelledby="solutions-title">
      <div className="header-container solutions-container">
        <ScrollReveal className="solutions-intro" distance="up">
          <div className="solutions-kicker">
            <span /> Our Range
          </div>

          <div className="solutions-heading-wrap">
            <div>
              <span className="solutions-eyebrow">Agricultural solutions</span>
              <h2 id="solutions-title">
                Products for the
                <br />
                <em>needs of the field.</em>
              </h2>
            </div>

            <p>
              From crop nutrition to specialized agricultural inputs, AGRIPEX
              brings together a practical product range for different crop and
              field requirements.
            </p>
          </div>
        </ScrollReveal>

        <div className="solutions-list">
          {offerings.map((offering, index) => (
            <ScrollReveal key={offering.number} delay={index * 70} distance="up">
              <article className="solution-row">
                <div className="solution-row-number">{offering.number}</div>

                <div className="solution-row-main">
                  <h3>{offering.title}</h3>
                  <p>{offering.text}</p>
                </div>

                <div className="solution-row-examples">
                  <span>Selected products</span>
                  <p>{offering.examples}</p>
                </div>

                <Link className="solution-row-action" to="/products" aria-label={`Explore ${offering.title}`}>
                  <span>Explore range</span>
                  <b aria-hidden="true">↗</b>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="solutions-footer" delay={280} distance="up">
          <p>
            Looking for a specific product or application?
          </p>
          <Link className="solutions-catalog-cta" to="/products">
            <span>View product catalogue</span>
            <b aria-hidden="true">↗</b>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Solutions;
