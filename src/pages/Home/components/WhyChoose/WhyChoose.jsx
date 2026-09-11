import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./WhyChoose.css";

const reasons = [
  {
    number: "01",
    title: "Agriculture-focused approach",
    text: "Our website and product range are built around practical agricultural requirements and the realities of crop nutrition.",
  },
  {
    number: "02",
    title: "Practical product range",
    text: "A focused range of fertilizers and agricultural inputs gives growers options for different crop and application requirements.",
  },
  {
    number: "03",
    title: "Field-oriented thinking",
    text: "We keep the focus on useful solutions that can translate product information into clearer decisions in the field.",
  },
  {
    number: "04",
    title: "Support when it matters",
    text: "From product information to enquiries, we make it easier for customers to find the right information and connect with our team.",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose" aria-labelledby="why-choose-title">
      <div className="header-container why-choose-container">
        <ScrollReveal className="why-choose-intro" distance="up">
          <div className="why-choose-kicker">
            <span /> Why AGRIPEX
          </div>
          <div className="why-choose-heading-wrap">
            <div>
              <span className="why-choose-eyebrow">A practical approach to agriculture</span>
              <h2 id="why-choose-title">
                Built around
                <br />
                <em>the field.</em>
              </h2>
            </div>
            <p>
              Choosing an agricultural partner is about more than a product list.
              It is about relevance, clarity and a practical understanding of what
              growers need.
            </p>
          </div>
        </ScrollReveal>

        <div className="why-choose-layout">
          <ScrollReveal className="why-choose-visual" distance="left">
            <img src="/coursel-3.jpg" alt="Agricultural crop field" loading="lazy" />
            <div className="why-choose-visual-caption">
              <span>AGRIPEX</span>
              <strong>Focused on better agricultural decisions.</strong>
            </div>
          </ScrollReveal>

          <div className="why-choose-list">
            {reasons.map((reason, index) => (
              <ScrollReveal key={reason.number} delay={index * 80} distance="right">
                <article className="why-choose-item">
                  <span className="why-choose-number">{reason.number}</span>
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}

            <ScrollReveal className="why-choose-action" delay={320} distance="up">
              <Link to="/about" className="why-choose-link">
                <span>Learn more about AGRIPEX</span>
                <b aria-hidden="true">↗</b>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
