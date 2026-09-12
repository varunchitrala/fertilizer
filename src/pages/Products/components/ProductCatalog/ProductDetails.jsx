import { useEffect, useRef } from "react";
import "./ProductDetails.css";

function DetailGroup({ number, title, children }) {
  return (
    <section className="product-detail-group">
      <div className="product-detail-group-heading">
        <span>{number}</span>
        <h3>{title}</h3>
      </div>
      <div className="product-detail-group-content">{children}</div>
    </section>
  );
}

function ProductDetails({ product, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!product) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  const details = product.details || {};
  const features = details.features || [];
  const specifications = details.specifications || [];
  const application = details.application || [];
  const dosage = details.dosage || [];
  const crops = details.crops || [];

  return (
    <div className="product-details-overlay" role="presentation">
      <button className="product-details-backdrop" type="button" aria-label="Close product details" onClick={onClose} />

      <div className="product-details-modal" role="dialog" aria-modal="true" aria-labelledby="product-detail-title">
        <button ref={closeButtonRef} className="product-details-close" type="button" onClick={onClose} aria-label="Close product details">
          <span />
          <span />
        </button>

        <div className="product-details-topline">
          <span>AGRIPEX / PRODUCT {String(product.index + 1).padStart(2, "0")}</span>
          <span>Product information</span>
        </div>

        <div className="product-details-scroll">
          <div className="product-details-visual">
            <div className="product-details-image-wrap">
              <img src={product.image} alt={`${product.name} product`} />
              <span>AGRIPEX</span>
            </div>
            {details.form && <div className="product-details-form">{details.form}</div>}
          </div>

          <div className="product-details-content">
            <div className="product-details-eyebrow">Agricultural product range</div>
            <h2 id="product-detail-title">{product.name}</h2>
            <p className="product-details-intro">{product.description}</p>

            {details.overview && (
              <DetailGroup number="01" title="Product overview">
                <p className="product-detail-copy">{details.overview}</p>
              </DetailGroup>
            )}

            {features.length > 0 && (
              <DetailGroup number={details.overview ? "02" : "01"} title="Key features">
                <div className="product-feature-list">
                  {features.map((feature) => (
                    <div className="product-feature" key={feature.title || feature.number}>
                      <span>{feature.number}</span>
                      <div><h4>{feature.title}</h4><p>{feature.text}</p></div>
                    </div>
                  ))}
                </div>
              </DetailGroup>
            )}

            {(application.length > 0 || dosage.length > 0 || crops.length > 0) && (
              <DetailGroup number="03" title="Application guide">
                <div className="product-guide-grid">
                  {application.length > 0 && (
                    <div className="product-guide-block"><span>Method of application</span><div>{application.map((item) => <b key={item}>{item}</b>)}</div></div>
                  )}
                  {dosage.length > 0 && (
                    <div className="product-guide-block"><span>Dosage</span><ul>{dosage.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  )}
                  {crops.length > 0 && (
                    <div className="product-guide-block product-guide-full"><span>Recommended crops</span><div className="product-crops">{crops.map((crop) => <b key={crop}>{crop}</b>)}</div></div>
                  )}
                </div>
              </DetailGroup>
            )}

            {specifications.length > 0 && (
              <DetailGroup number="04" title="Specifications">
                <div className="product-spec-table">
                  {specifications.map((spec) => (
                    <div className="product-spec-row" key={spec.label}>
                      <span>{spec.label}</span><strong>{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </DetailGroup>
            )}

            {(details.storage || details.caution || details.manufacturer) && (
              <DetailGroup number="05" title="Additional information">
                <div className="product-additional-grid">
                  {details.storage && <div><span>Storage</span><p>{details.storage}</p></div>}
                  {details.caution && <div><span>Caution</span><p>{details.caution}</p></div>}
                  {details.manufacturer && <div className="product-additional-full"><span>Manufactured by</span><p>{details.manufacturer}</p></div>}
                </div>
              </DetailGroup>
            )}
          </div>
        </div>

        <footer className="product-details-footer">
          <span>AGRIPEX</span><span>For agriculture use only</span>
        </footer>
      </div>
    </div>
  );
}

export default ProductDetails;
