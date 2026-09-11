import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./WhyChoose.css";

const reasons = [
  { number: "01", title: "Agriculture first", text: "An approach shaped around practical agricultural requirements and crop nutrition." },
  { number: "02", title: "Practical product range", text: "A focused range of fertilizers and agricultural inputs for different requirements." },
  { number: "03", title: "Field-oriented thinking", text: "Clear product information presented with practical application in mind." },
  { number: "04", title: "Direct support", text: "A clear route to product information and to discussing your specific requirement." },
];

function WhyChoose() {
  return (
    <section className="why-choose" aria-labelledby="why-choose-title">
      <div className="header-container why-choose-container">
        <ScrollReveal className="why-choose-intro" distance="up">
          <div className="why-choose-kicker"><span aria-hidden="true" /><span className="why-choose-kicker-text">Why AGRIPEX</span></div>
          <div className="why-choose-heading-wrap">
            <div>
              <span className="why-choose-eyebrow">A practical approach to agriculture</span>
              <h2 id="why-choose-title">A better understanding<br /><em>of agriculture.</em></h2>
            </div>
            <p>We keep the focus on relevance, clear product information and the practical needs behind an agricultural requirement.</p>
          </div>
        </ScrollReveal>

        <div className="why-choose-layout">
          <ScrollReveal className="why-choose-visual" distance="left">
            <img src="/coursel-3.jpg" alt="Agricultural field" loading="lazy" />
            <div className="why-choose-visual-caption"><span>AGRIPEX</span><strong>Focused on practical agricultural requirements.</strong></div>
          </ScrollReveal>

          <div className="why-choose-list">
            {reasons.map((reason, index) => (
              <ScrollReveal key={reason.number} delay={index * 60} distance="right">
                <article className="why-choose-item"><span className="why-choose-number">{reason.number}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div></article>
              </ScrollReveal>
            ))}

            <ScrollReveal className="why-choose-proof" delay={240} distance="up">
              <div><strong>25+</strong><span>products in our agricultural range</span></div>
              <Link to="/products" className="why-choose-primary-cta"><span>Explore products</span><b aria-hidden="true">→</b></Link>
            </ScrollReveal>

            <ScrollReveal className="why-choose-action" delay={300} distance="up">
              <Link to="/about" className="why-choose-secondary-cta"><span>Learn why AGRIPEX</span><b aria-hidden="true">→</b></Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
