import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ScrollReveal";
import "./Gallery.css";

const galleryItems = [
  { image: "/farmer-1.jpg", category: "Field Stories", title: "Growing with purpose", featured: true },
  { image: "/coursel-2.jpg", category: "Crop Care", title: "Precision in every application" },
  { image: "/coursel-main.jpg", category: "Agriculture", title: "From soil to harvest" },
  { image: "/coursel-3.jpg", category: "Innovation", title: "Better inputs. Better outcomes." },
  { image: "/farmer-2.jpg", category: "Field Work", title: "Supporting modern farming" },
  { image: "/coursel-4.jpg", category: "Our Impact", title: "Built for the field" },
];

const filters = ["All", "Field Stories", "Crop Care", "Agriculture", "Innovation", "Field Work", "Our Impact"];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const visibleItems = useMemo(
    () => (activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)),
    [activeFilter],
  );

  useEffect(() => {
    if (!activeImage) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      setActiveImage((current) => {
        if (!current || !visibleItems.length) return current;
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const currentIndex = visibleItems.findIndex((item) => item.image === current.image);
        const nextIndex = (currentIndex + direction + visibleItems.length) % visibleItems.length;
        return { ...visibleItems[nextIndex], index: nextIndex };
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, visibleItems]);

  return (
    <section className="gallery-page-section" aria-labelledby="gallery-page-title">
      <div className="gallery-page-container">
        <ScrollReveal>
          <header className="gallery-page-hero">
            <div className="gallery-page-hero-topline">
              <span className="gallery-page-section-index">03</span>
              <span>AGRIPEX / GALLERY</span>
            </div>

            <div className="gallery-page-hero-main">
              <div className="gallery-page-hero-title">
                <p className="gallery-page-overline">FIELD · FARMING · AGRICULTURE</p>
                <h1 id="gallery-page-title">
                  Stories from
                  <br />
                  <em>the field.</em>
                </h1>
                <p className="gallery-page-hero-intro">
                  A visual record of the people, crops and agricultural work that shape the Agripex journey.
                </p>
              </div>

              <div className="gallery-page-hero-feature">
                <div className="gallery-page-hero-feature-image">
                  <img src="/farmer-1.jpg" alt="Farmer working in an agricultural field" />
                  <span className="gallery-page-hero-feature-label">FIELD STORY / 01</span>
                </div>
                <div className="gallery-page-hero-feature-meta">
                  <span>Agripex visual archive</span>
                  <span>Explore below ↓</span>
                </div>
              </div>
            </div>
          </header>
        </ScrollReveal>

        <ScrollReveal distance={24} delay={70}>
          <div className="gallery-page-toolbar" aria-label="Gallery filters">
            <span className="gallery-page-toolbar-label">Browse the archive</span>
            <div className="gallery-filter-list">
              {filters.map((filter) => (
                <button key={filter} type="button" className={activeFilter === filter ? "is-active" : ""} onClick={() => setActiveFilter(filter)}>
                  {filter}
                </button>
              ))}
            </div>
            <span className="gallery-page-count">{String(visibleItems.length).padStart(2, "0")} images</span>
          </div>
        </ScrollReveal>

        <div className={`gallery-page-grid ${visibleItems.length === 1 ? "single-item" : ""}`}>
          {visibleItems.map((item, index) => (
            <ScrollReveal key={item.image} distance={30} delay={(index % 3) * 45}>
              <button type="button" className={`gallery-page-card ${item.featured ? "is-featured" : ""}`} onClick={() => setActiveImage({ ...item, index })}>
                <span className="gallery-page-card-image">
                  <img src={item.image} alt={item.title} loading={index > 1 ? "lazy" : "eager"} />
                  <span className="gallery-page-card-wash" />
                  <span className="gallery-page-card-corner" aria-hidden="true">↗</span>
                  <span className="gallery-page-card-meta"><small>{String(index + 1).padStart(2, "0")}</small><span>{item.category}</span></span>
                </span>
                <span className="gallery-page-card-caption"><small>{item.category}</small><strong>{item.title}</strong><span>View image <b>↗</b></span></span>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal distance={30}>
          <section className="gallery-page-cta" aria-label="Explore products">
            <div><span>From the field to the formulation</span><h2>See what powers<br /><em>better crop outcomes.</em></h2></div>
            <Link to="/products" className="gallery-page-cta-link"><span>Explore products</span><b>↗</b></Link>
          </section>
        </ScrollReveal>
      </div>

      {activeImage ? (
        <div className="gallery-page-lightbox" role="dialog" aria-modal="true" aria-label={`${activeImage.title} image viewer`}>
          <button className="gallery-page-lightbox-backdrop" type="button" aria-label="Close image viewer" onClick={() => setActiveImage(null)} />
          <div className="gallery-page-lightbox-panel">
            <button className="gallery-page-lightbox-close" type="button" aria-label="Close image viewer" onClick={() => setActiveImage(null)}><span /><span /></button>
            <div className="gallery-page-lightbox-topline"><span>AGRIPEx / Visual Archive</span><span>{String(activeImage.index + 1).padStart(2, "0")} / {visibleItems.length.toString().padStart(2, "0")}</span></div>
            <img src={activeImage.image} alt={activeImage.title} />
            <div className="gallery-page-lightbox-caption"><div><small>{activeImage.category}</small><h2>{activeImage.title}</h2></div><div className="gallery-lightbox-hint">Use ← → to browse</div></div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Gallery;
