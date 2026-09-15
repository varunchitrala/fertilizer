import ScrollReveal from "../../../../components/ScrollReveal";

function AwardsGrid({ awards, onInspect, onReset }) {
  return (
    <section className="awards-grid-section" aria-label="Awards Showcase">
      <div className="awards-container">
        {awards.length === 0 ? (
          <div className="awards-empty">
            <h3>No awards match your criteria</h3>
            <p>Try selecting another category or clear your search query.</p>
            <button
              type="button"
              className="awards-primary-btn"
              onClick={onReset}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="awards-grid">
            {awards.map((award, index) => (
              <ScrollReveal
                key={award.id}
                distance="up"
                delay={(index % 3) * 60}
              >
                <article className="award-card">
                  <div className="award-card-header">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="award-card-img"
                    />
                    <div className="award-card-header-overlay" />
                    <span className="award-year-tag">{award.year}</span>
                    <span className="award-badge-pill">{award.badge}</span>
                    <span className="award-category-strip">
                      {award.category}
                    </span>
                  </div>
                  <div className="award-card-body">
                    <h3 className="award-card-title">{award.title}</h3>
                    <div className="award-card-authority">
                      {award.conferredBy}
                    </div>
                    <p className="award-card-summary">{award.summary}</p>
                    <ul className="award-card-highlights">
                      {award.highlights.slice(0, 2).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="award-card-footer">
                      <button
                        type="button"
                        className="award-btn-inspect"
                        onClick={() => onInspect(award)}
                      >
                        <span>View certification &amp; Certificate</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AwardsGrid;
