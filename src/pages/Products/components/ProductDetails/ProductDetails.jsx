import { useEffect } from "react";
import "./ProductDetails.css";

function ProductDetails({ product, onClose }) {
  useEffect(() => {
    if (!product) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const details = product.details || {};
  const specifications = details.specifications || [];

  return (
    <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-detail-title">
      <button className="product-modal-backdrop" type="button" aria-label="Close product details" onClick={onClose} />

      <div className="product-detail-panel">
        <button className="product-modal-close" type="button" aria-label="Close product details" onClick={onClose}>
          <span />
          <span />
        </button>

        <div className="product-detail-scroll">
          <header className="product-detail-header">
            <div className="product-detail-index">PRODUCT / {String(product.index + 1).padStart(2, "0")}</div>
            <div className="product-detail-heading">
              <div>
                <span className="product-detail-kicker">AGRIPEx · Technical product profile</span>
                <h2 id="product-detail-title">{product.name}</h2>
              </div>
              <p>{product.description}</p>
            </div>
          </header>

          <div className="product-detail-body">
            <section className="product-detail-visual">
              <div className="product-detail-image-wrap">
                <img src={product.image} alt={`${product.name} product label`} />
                <span className="product-detail-image-caption">Product reference image</span>
              </div>
              <div className="product-detail-visual-meta">
                <span>AGRIPEx</span>
                <span>{details.form || "Agricultural input"}</span>
              </div>
            </section>

            <section className="product-detail-content">
              <div className="product-detail-section">
                <div className="product-detail-section-title">Overview</div>
                <p>{details.overview || product.description}</p>
              </div>

              {details.features?.length ? (
                <div className="product-detail-section">
                  <div className="product-detail-section-title">Key features</div>
                  <div className="product-feature-grid">
                    {details.features.map((feature) => (
                      <div className="product-feature" key={feature.title}>
                        <span className="product-feature-number">{feature.number}</span>
                        <div>
                          <h3>{feature.title}</h3>
                          <p>{feature.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="product-detail-split">
                {details.application?.length ? (
                  <div className="product-detail-section">
                    <div className="product-detail-section-title">Method of application</div>
                    <div className="product-detail-points">
                      {details.application.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {details.dosage?.length ? (
                  <div className="product-detail-section">
                    <div className="product-detail-section-title">Dosage</div>
                    <div className="product-detail-points">
                      {details.dosage.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              {details.crops?.length ? (
                <div className="product-detail-section">
                  <div className="product-detail-section-title">Recommended crops</div>
                  <div className="product-tag-list">
                    {details.crops.map((crop) => <span key={crop}>{crop}</span>)}
                  </div>
                </div>
              ) : null}

              {specifications.length ? (
                <div className="product-detail-section">
                  <div className="product-detail-section-title">Specifications</div>
                  <div className="product-spec-table">
                    {specifications.map((spec) => (
                      <div className="product-spec-row" key={spec.label}>
                        <span>{spec.label}</span>
                        <strong>{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {details.storage || details.caution ? (
                <div className="product-detail-note-grid">
                  {details.storage ? (
                    <div className="product-detail-note">
                      <span>Storage</span>
                      <p>{details.storage}</p>
                    </div>
                  ) : null}
                  {details.caution ? (
                    <div className="product-detail-note product-detail-note-alert">
                      <span>Caution</span>
                      <p>{details.caution}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {details.manufacturer ? (
                <div className="product-detail-manufacturer">
                  <span>Manufactured by</span>
                  <strong>{details.manufacturer}</strong>
                </div>
              ) : null}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
