import ScrollReveal from "../../../../components/ScrollReveal";

function AwardSpotlight({ award, onInspect }) {
  if (!award) return null;

  return (
    <section className="awards-spotlight-section" aria-label="Spotlight Award">
      <div className="awards-container">
        <ScrollReveal distance="up">
          <div className="awards-spotlight-box">
            <div className="spotlight-content">
              <span className="spotlight-pill">Flagship Achievement</span>
              <h2 className="spotlight-title">{award.title}</h2>
              <span className="spotlight-agency">
                Conferred by {award.conferredBy}
              </span>
              <p className="spotlight-quote">&ldquo;{award.citation}&rdquo;</p>
              <div className="spotlight-meta-row">
                <div className="spotlight-badge-item">
                  <span>Year:</span> {award.year}
                </div>
                <div className="spotlight-badge-item">
                  <span>Venue:</span> {award.venue}
                </div>
                <div className="spotlight-badge-item">
                  <span>Status:</span> {award.badge}
                </div>
              </div>
              <button
                type="button"
                className="spotlight-cta-btn"
                onClick={() => onInspect(award)}
              >
                <span>Inspect Official certification</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
            <div className="spotlight-media">
              <img src={award.image} alt={award.title} />
              <div className="spotlight-media-shade" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default AwardSpotlight;
