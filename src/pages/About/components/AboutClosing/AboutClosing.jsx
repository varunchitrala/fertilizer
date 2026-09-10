import "./AboutClosing.css";
import ScrollReveal from "../../../../components/ScrollReveal";

function AboutClosing() {
  return (
    <section className="about-closing">
      <div className="container">
        <ScrollReveal distance={40}>
          <span className="about-eyebrow">
            <i /> Keep growing
          </span>
          <h2>
            Better inputs. <em>Better farming.</em>
          </h2>
          <a href="mailto:agripexpestiside1995@gmail.com">
            Talk to Agripex <span>↗</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default AboutClosing;
