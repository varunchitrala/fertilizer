import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import {
  awardsData,
  awardCategories,
  awardMilestones,
  accreditationsData,
} from "./data/awardsData";
import "./Awards.css";

function Awards() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAward, setSelectedAward] = useState(null);

  // Filter awards based on active category & search query
  const filteredAwards = useMemo(() => {
    return awardsData.filter((award) => {
      const matchesCategory =
        activeCategory === "All" || award.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        award.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        award.conferredBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
        award.year.includes(searchQuery) ||
        award.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Handle modal escape key and body scroll lock
  useEffect(() => {
    if (!selectedAward) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedAward(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAward]);

  const spotlightAward = awardsData[0]; // 2024 National Agricultural Excellence Award

  return (
    <>
      <Header />
      <main className="awards-page" id="awards-top">
        {/* ================= HERO SECTION ================= */}
        <section className="awards-hero" aria-labelledby="awards-page-heading">
          <div className="awards-container">
            <ScrollReveal distance="up">
              <div className="awards-hero-topline">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span className="awards-section-index">04</span>
                  <span>AGRIPEX / RECOGNITION & HONORS</span>
                </div>
                
              </div>
            </ScrollReveal>

            <div className="awards-hero-main">
              <ScrollReveal distance="left" delay={80}>
                <div className="awards-hero-title">
                  <p className="awards-overline">
                    Celebrating Agricultural Trust
                  </p>
                  <h1 id="awards-page-heading">
                    Decades of dedication,
                    <br />
                    <em>recognized.</em>
                  </h1>
                  <p className="awards-hero-intro">
                    From state farmer associations to national scientific
                    councils, Agripex has earned accolades for formulation
                    purity, crop nutrition breakthroughs, and unwavering
                    field-level farmer stewardship across India.
                  </p>
                  <div className="awards-hero-actions">
                    <a href="#awards-catalogue" className="awards-primary-btn">
                      <span>Browse Award Gallery</span>
                      <span aria-hidden="true">↓</span>
                    </a>
                    <a
                      href="#standards-section"
                      className="awards-secondary-btn"
                    >
                      <span>Quality Standards & ISO</span>
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

        {/* ================= MILESTONE NUMBERS ================= */}
        <section
          className="awards-milestones-section"
          aria-label="Key Milestones"
        >
          <div className="awards-container">
            <div className="awards-milestones-grid">
              {awardMilestones.map((milestone, idx) => (
                <ScrollReveal
                  key={milestone.label}
                  distance="up"
                  delay={idx * 70}
                >
                  <div className="milestone-card">
                    <div className="milestone-number">{milestone.value}</div>
                    <span className="milestone-label">{milestone.label}</span>
                    <span className="milestone-note">{milestone.note}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SPOTLIGHT BANNER ================= */}
        {spotlightAward && (
          <section
            className="awards-spotlight-section"
            aria-label="Spotlight Award"
          >
            <div className="awards-container">
              <ScrollReveal distance="up">
                <div className="awards-spotlight-box">
                  <div className="spotlight-content">
                    <span className="spotlight-pill">Flagship Achievement</span>
                    <h2 className="spotlight-title">{spotlightAward.title}</h2>
                    <span className="spotlight-agency">
                      Conferred by {spotlightAward.conferredBy}
                    </span>
                    <p className="spotlight-quote">
                      &ldquo;{spotlightAward.citation}&rdquo;
                    </p>
                    <div className="spotlight-meta-row">
                      <div className="spotlight-badge-item">
                        <span>Year:</span> {spotlightAward.year}
                      </div>
                      <div className="spotlight-badge-item">
                        <span>Venue:</span> {spotlightAward.venue}
                      </div>
                      <div className="spotlight-badge-item">
                        <span>Status:</span> Gold Trophy & Citation
                      </div>
                    </div>
                    <button
                      type="button"
                      className="spotlight-cta-btn"
                      onClick={() => setSelectedAward(spotlightAward)}
                    >
                      <span>Inspect Official Citation</span>
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                  <div className="spotlight-media">
                    <img
                      src={spotlightAward.image}
                      alt={spotlightAward.title}
                    />
                    <div className="spotlight-media-shade" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* ================= TOOLBAR & FILTERS ================= */}
        <section
          className="awards-toolbar-section"
          id="awards-catalogue"
          aria-label="Award Filters and Search"
        >
          <div className="awards-container">
            <div className="awards-toolbar">
              <div className="awards-filter-pills" role="tablist">
                {awardCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === category}
                    className={`filter-pill ${
                      activeCategory === category ? "is-active" : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="awards-search-wrapper">
                <input
                  type="text"
                  placeholder="Search awards, year, topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="awards-search-input"
                  aria-label="Search awards by title or keyword"
                />
                <span className="awards-count-label">
                  {filteredAwards.length}{" "}
                  {filteredAwards.length === 1 ? "Award" : "Awards"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= AWARDS GRID ================= */}
        <section className="awards-grid-section" aria-label="Awards Showcase">
          <div className="awards-container">
            {filteredAwards.length === 0 ? (
              <div className="awards-empty">
                <h3>No awards match your criteria</h3>
                <p>
                  Try selecting another category or clear your search query.
                </p>
                <button
                  type="button"
                  className="awards-primary-btn"
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="awards-grid">
                {filteredAwards.map((award, index) => (
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
                          {award.highlights.slice(0, 2).map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>

                        <div className="award-card-footer">
                          <button
                            type="button"
                            className="award-btn-inspect"
                            onClick={() => setSelectedAward(award)}
                          >
                            <span>View Citation &amp; Certificate</span>
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

        {/* ================= ACCREDITATIONS & STANDARDS ================= */}
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
                  Beyond public honors, our manufacturing facility operates
                  under stringent statutory accreditations and laboratory rigor
                  to guarantee 100% active ingredient fidelity in every batch.
                </p>
              </div>
            </ScrollReveal>

            <div className="accreditations-grid">
              {accreditationsData.map((item, idx) => (
                <ScrollReveal key={item.code} distance="up" delay={idx * 60}>
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

        {/* ================= CALL TO ACTION ================= */}
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
                    crop nutrition solutions backed by nearly 3 decades of
                    verified excellence.
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

        {/* ================= CITATION & CERTIFICATE MODAL ================= */}
        {selectedAward && (
          <div
            className="citation-modal-backdrop"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedAward(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-award-title"
          >
            <div className="citation-modal-container">
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedAward(null)}
                aria-label="Close certificate preview"
              >
                ✕
              </button>

              <div className="certificate-paper">
                <div className="certificate-header-top">
                  <span className="certificate-seal-badge">
                    ★ OFFICIAL RECORD OF CONFERRAL
                  </span>
                  <span>
                    {selectedAward.year} · {selectedAward.venue}
                  </span>
                </div>

                <h3 className="certificate-title" id="modal-award-title">
                  {selectedAward.title}
                </h3>
                <div className="certificate-conferred">
                  Conferred by {selectedAward.conferredBy}
                </div>

                <div className="certificate-recipient">
                  <span>Presented in Honor of</span>
                  <strong>
                    Agripex Pesticide Fertilizer &amp; Chemical Pvt. Ltd.
                  </strong>
                </div>

                <div className="certificate-citation-block">
                  <h4>Official Citation Statement</h4>
                  <p>&ldquo;{selectedAward.citation}&rdquo;</p>
                </div>

                <div className="certificate-highlights-block">
                  <h4>Key Recognized Accomplishments</h4>
                  <ul>
                    {selectedAward.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="certificate-footer-meta">
                  <span className="certificate-verified">
                    ✔ {selectedAward.verifiedBy}
                  </span>
                  <span className="certificate-date">
                    Conferred at {selectedAward.venue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Awards;
