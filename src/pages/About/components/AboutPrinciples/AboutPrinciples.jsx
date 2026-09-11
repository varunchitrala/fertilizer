import "./AboutPrinciples.css";
import ScrollReveal from "../../../../components/ScrollReveal";

const principles = [
  {
    number: "01",
    title: "Quality",
    text: "A clear focus on dependable agricultural products and quality across the solutions we provide.",
  },
  {
    number: "02",
    title: "Reliability",
    text: "Building dependable relationships with farmers, retailers, and distributors through consistent service.",
  },
  {
    number: "03",
    title: "Farmer focus",
    text: "Keeping practical farming requirements and real crop conditions at the center of our approach.",
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
            <span className="about-eyebrow about-eyebrow-light">
              <i /> Our principles
            </span>
            <h2 id="principles-title">
              The way we work matters as much as <em>what we provide.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className="about-principles-grid">
          {principles.map((principle, index) => (
            <ScrollReveal
              className="about-principle"
              distance={30}
              delay={index * 100}
              key={principle.number}
            >
              <div className="about-principle-top">
                <span>{principle.number}</span>
                <span className="about-principle-line" aria-hidden="true" />
              </div>
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
