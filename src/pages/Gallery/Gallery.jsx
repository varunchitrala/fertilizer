import { useEffect, useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import "./Gallery.css";

const galleryItems = [
  {
    image: "/farmer-1.jpg",
    label: "Field Stories",
    title: "Growing with purpose",
  },
  {
    image: "/coursel-2.jpg",
    label: "Crop Care",
    title: "Precision in every application",
  },
  {
    image: "/coursel-main.jpg",
    label: "Agriculture",
    title: "From soil to harvest",
  },
  {
    image: "/coursel-3.jpg",
    label: "Innovation",
    title: "Better inputs. Better outcomes.",
  },
  {
    image: "/farmer-2.jpg",
    label: "Field Work",
    title: "Supporting modern farming",
  },
  {
    image: "/coursel-4.jpg",
    label: "Our Impact",
    title: "Built for the field",
  },
];

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <div className="container">
        <ScrollReveal>
          <div className="gallery-heading">
            <div className="gallery-heading-left">
              <span className="gallery-index">03</span>
              <div>
                <span className="gallery-eyebrow">Field stories</span>
                <h2 id="gallery-title">Life in the field.</h2>
              </div>
            </div>
            <p className="gallery-intro">
              A visual look at agriculture, innovation and the people behind
              better crop outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <ScrollReveal
              key={item.image}
              distance={45}
              delay={(index % 3) * 80}
            >
              <button
                className={`gallery-item gallery-item-${index + 1}`}
                type="button"
                onClick={() => setActiveImage({ ...item, index })}
              >
                <span className="gallery-image-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="gallery-overlay" />
                </span>
                <span className="gallery-meta">
                  <span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    {item.label}
                  </span>
                  <span className="gallery-arrow">↗</span>
                </span>
                <span className="gallery-title">{item.title}</span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.title} image viewer`}
        >
          <button
            className="gallery-lightbox-backdrop"
            type="button"
            aria-label="Close gallery"
            onClick={() => setActiveImage(null)}
          />
          <div className="gallery-lightbox-panel">
            <button
              className="gallery-lightbox-close"
              type="button"
              aria-label="Close gallery"
              onClick={() => setActiveImage(null)}
            >
              ×
            </button>
            <img src={activeImage.image} alt={activeImage.title} />
            <div className="gallery-lightbox-caption">
              <span>
                {String(activeImage.index + 1).padStart(2, "0")} /{" "}
                {galleryItems.length}
              </span>
              <div>
                <small>{activeImage.label}</small>
                <strong>{activeImage.title}</strong>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Gallery;
