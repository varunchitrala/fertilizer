import ScrollReveal from "../../../../components/ScrollReveal";

function AwardsHero() {
  return (
    <section className="awards-hero" aria-labelledby="awards-page-heading">
      <div className="awards-container">
        <ScrollReveal distance="up">
          <div className="awards-hero-topline">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span className="awards-section-index">04</span>
              <span>AGRIPEX / RECOGNITION &amp; HONORS</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="awards-hero-main">
          <ScrollReveal distance="left" delay={80}>
            <div className="awards-hero-title">
              <p className="awards-overline">Celebrating Agricultural Trust</p>
              <h1 id="awards-page-heading">
                Decades of dedication,
                <br />
                <em>recognized.</em>
              </h1>
              <p className="awards-hero-intro">
                From state farmer associations to national scientific councils,
                Agripex has earned accolades for formulation purity, crop
                nutrition breakthroughs, and unwavering field-level farmer
                stewardship across India.
              </p>
              <div className="awards-hero-actions">
                <a href="#awards-catalogue" className="awards-primary-btn">
                  <span>Browse Award Gallery</span>
                  <span aria-hidden="true">↓</span>
                </a>
                <a href="#standards-section" className="awards-secondary-btn">
                  <span>Quality Standards &amp; ISO</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal distance="right" delay={140}>
            <div className="awards-hero-visual">
              <div className="awards-hero-frame">
                <img
                  src="/award-trophy.jpg"
                  alt="Agripex Agricultural Excellence Award Trophy"
                />
                <div className="awards-hero-badge">
                  <span>Premier Accolade</span>
                  <strong>National Agro Excellence 2024</strong>
                </div>
                <div className="awards-hero-caption">
                  <span>Formula Purity · Farmer Trust</span>
                  <span>1995 — 2026</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default AwardsHero;
