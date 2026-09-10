import "./AboutPrinciples.css";
import ScrollReveal from "../../../../components/ScrollReveal";

const principles = [
  {
    number: "01",
    title: "Quality",
    text: "Premium-grade agricultural inputs selected with effectiveness and safety in mind.",
  },
  {
    number: "02",
    title: "Reliability",
    text: "Consistent support for farmers, retailers, and distributors across their agricultural needs.",
  },
  {
    number: "03",
    title: "Farmer focus",
    text: "Practical guidance that keeps real crop conditions and farming outcomes at the center.",
  },
];

function AboutPrinciples() {
  return (
    <section className="about-principles">
      <div className="container">
        <ScrollReveal className="about-section-heading" distance={35}>
          <span className="about-eyebrow about-eyebrow-dark"><i /> Our principles</span>
          <h2>Quality is the starting point. <em>Trust is the outcome.</em></h2>
        </ScrollReveal>

        <div className="about-principles-grid">
          {principles.map((principle, index) => (
            <ScrollReveal
              className="about-principle"
              distance={30}
              delay={index * 100}
              key={principle.number}
            >
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPrinciples;
