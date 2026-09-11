import "./AboutPrinciples.css";
import ScrollReveal from "../../../../components/ScrollReveal";

const principles = [
  {
    number: "01",
    title: "Quality first",
    text: "We believe agricultural products should be selected with purpose. Our focus is on dependable inputs that support the practical requirements of crop production.",
    points: ["Product-focused thinking", "Consistent standards", "Responsible agricultural use"],
  },
  {
    number: "02",
    title: "Built on reliability",
    text: "Agriculture depends on relationships as much as products. We aim to build dependable connections with the people who grow, supply, and support the farming community.",
    points: ["Farmer relationships", "Retailer & distributor support", "Long-term trust"],
  },
  {
    number: "03",
    title: "Close to the field",
    text: "Every agricultural requirement is different. We keep real crop conditions and day-to-day farming needs at the center of how we think about our solutions.",
    points: ["Practical requirements", "Crop-focused approach", "Ground-level understanding"],
  },
];

function AboutPrinciples() {
  return (
    <section className="about-principles" aria-labelledby="principles-title">
      <div className="container">
        <div className="about-principles-intro">
          <ScrollReveal className="about-section-label about-section-label-light" distance={30}>
            <span>02</span>
            <p>What guides us</p>
          </ScrollReveal>

          <ScrollReveal className="about-principles-heading" distance={35} delay={80}>
            <div className="about-principles-heading-top">
              <span className="about-eyebrow about-eyebrow-light">
                <i /> Our principles
              </span>
              <span className="about-principles-index">AGRIPEX / 03</span>
            </div>
            <h2 id="principles-title">
              Three ideas that shape <em>how we work.</em>
            </h2>
            <p className="about-principles-summary">
              Our approach is simple: focus on quality, earn reliability, and stay
              connected to the realities of agriculture.
            </p>
          </ScrollReveal>
        </div>

        <div className="about-principles-list">
          {principles.map((principle, index) => (
            <ScrollReveal
              className="about-principle"
              distance={30}
              delay={index * 100}
              key={principle.number}
            >
              <div className="about-principle-number">{principle.number}</div>

              <div className="about-principle-content">
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
                <ul>
                  {principle.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="about-principle-mark" aria-hidden="true">↗</div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="about-principles-footer" distance={25} delay={280}>
          <span>THE RESULT</span>
          <strong>A more considered approach to agricultural partnerships.</strong>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default AboutPrinciples;
