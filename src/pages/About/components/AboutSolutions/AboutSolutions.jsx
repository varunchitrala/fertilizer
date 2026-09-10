import "./AboutSolutions.css";
import ScrollReveal from "../../../../components/ScrollReveal";

const solutions = [
  "Agricultural product supply",
  "Crop protection solutions",
  "Soil & crop nutrition guidance",
];

function AboutSolutions() {
  return (
    <section className="about-solutions">
      <div className="container about-solutions-grid">
        <ScrollReveal className="about-solutions-image" distance={45}>
          <img src="/farmer-2.jpg" alt="Farmer working with crops" />
        </ScrollReveal>

        <ScrollReveal className="about-solutions-copy" distance={35} delay={120}>
          <span className="about-kicker">What we provide</span>
          <h2>From crop protection to <em>soil nutrition.</em></h2>
          <p>
            We bring together agricultural inputs and practical support to help
            customers make confident choices throughout the crop cycle.
          </p>
          <div className="about-solution-list">
            {solutions.map((solution, index) => (
              <div key={solution}>
                <span>0{index + 1}</span>
                <strong>{solution}</strong>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default AboutSolutions;
