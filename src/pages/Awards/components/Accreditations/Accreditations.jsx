import ScrollReveal from "../../../../components/ScrollReveal";

function Accreditations({ items }) {
  return (
    <section
      className="awards-accreditations-section"
      id="standards-section"
      aria-labelledby="accreditations-heading"
    >
      <div className="awards-container">
        <ScrollReveal distance="up">
          <div className="accreditations-header">
            <p className="awards-overline">Total Quality Management</p>
            <h2 id="accreditations-heading">
              Certified standards you can
              <br />
              <em>rely upon.</em>
            </h2>
            <p>
              Beyond public honors, our manufacturing facility operates under
              stringent statutory accreditations and laboratory rigor to
              guarantee 100% active ingredient fidelity in every batch.
            </p>
          </div>
        </ScrollReveal>
        <div className="accreditations-grid">
          {items.map((item, index) => (
            <ScrollReveal key={item.code} distance="up" delay={index * 60}>
              <div className="accreditation-card">
                <div className="accreditation-seal" aria-hidden="true">
                  CERT
                </div>
                <div className="accreditation-code">{item.code}</div>
                <div className="accreditation-title">{item.title}</div>
                <p className="accreditation-desc">{item.description}</p>
                <div className="accreditation-issuer">{item.issuer}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accreditations;
