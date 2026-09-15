import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";

function AwardsCta() {
  return (
    <section className="awards-cta-section" aria-label="Partner CTA">
      <div className="awards-container">
        <ScrollReveal distance="up">
          <div className="awards-cta-box">
            <div className="awards-cta-content">
              <h2>
                Partner with an <em>award-winning</em> manufacturer.
              </h2>
              <p>
                Experience high-yield fertilizer formulations and customized
                crop nutrition solutions backed by nearly 3 decades of verified
                excellence.
              </p>
            </div>
            <div className="awards-cta-buttons">
              <Link to="/contact" className="awards-cta-btn-gold">
                Connect With Our Team ↗
              </Link>
              <Link to="/products" className="awards-cta-btn-outline">
                Explore Our Formulations
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default AwardsCta;
