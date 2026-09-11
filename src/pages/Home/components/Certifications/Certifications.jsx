import ScrollReveal from "../../../../components/ScrollReveal";
import "./Certifications.css";

const certifications = [
  { number: "01", title: "Certification", label: "Quality standard" },
  { number: "02", title: "Certification", label: "Quality standard" },
  { number: "03", title: "Certification", label: "Quality standard" },
  { number: "04", title: "Certification", label: "Quality standard" },
];

function Certifications() {
  return (
    <section className="certifications" aria-labelledby="certifications-title">
      <div className="header-container certifications-container">
        <ScrollReveal className="certifications-heading" distance="up">
          <div>
            <div className="certifications-kicker">
              <span aria-hidden="true" />
              <span>Certifications &amp; standards</span>
            </div>
            <h2 id="certifications-title">
              Quality you can
              <br />
              <em>verify.</em>
            </h2>
          </div>
          <p>
            Standards and certifications that support our commitment to quality
            and responsible agricultural solutions.
          </p>
        </ScrollReveal>

        <div className="certifications-carousel" aria-label="Certifications carousel">
          <div className="certifications-track">
            {[...certifications, ...certifications].map((certification, index) => (
              <article className="certification-item" key={`${certification.number}-${index}`}>
                <div className="certification-paper">
                  <span className="certification-paper-number">{certification.number}</span>
                  <span className="certification-seal" aria-hidden="true">CERT</span>
                  <strong>{certification.title}</strong>
                  <small>{certification.label}</small>
                </div>
                <div className="certification-meta">
                  <span>{certification.number}</span>
                  <strong>{certification.title}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <ScrollReveal className="certifications-note" delay={280} distance="up">
          <span>Official certification documents will be displayed here.</span>
          <span className="certifications-note-line" aria-hidden="true" />
          <span>Verified information only</span>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Certifications;
