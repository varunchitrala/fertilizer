import { useEffect } from "react";
import "./ProductDetails.css";

function DetailGroup({ title, children }) {
  return (
    <section className="product-detail-group">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function ProductDetails({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="product-details-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="product-details-modal" role="dialog" aria-modal="true" aria-labelledby="product-detail-title">
        <button className="product-details-close" type="button" onClick={onClose} aria-label="Close product details">
          <span />
          <span />
        </button>

        <div className="product-details-visual">
          <div className="product-details-image-wrap">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details-index">PRODUCT / {String(product.index + 1).padStart(2, "0")}</div>
        </div>

        <div className="product-details-content">
          <div className="product-details-eyebrow">
            <span>AGRIPEX</span>
            <i />
            <span>Agricultural solution</span>
          </div>

          <h2 id="product-detail-title">{product.name}</h2>
          <p className="product-details-intro">{product.description}</p>

          {product.overview && (
            <DetailGroup title="Product overview">
              <p>{product.overview}</p>
            </DetailGroup>
          )}

          {product.features?.length > 0 && (
            <DetailGroup title="Key features">
              <ol className="product-detail-list numbered">
                {product.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ol>
            </DetailGroup>
          )}

          {(product.application || product.dosage || product.crops) && (
            <DetailGroup title="Application guide">
              <div className="product-detail-grid">
                {product.application && <div><span>Method</span><p>{product.application}</p></div>}
                {product.dosage && <div><span>Dosage</span><p>{product.dosage}</p></div>}
                {product.crops && <div className="full"><span>Recommended crops</span><p>{product.crops}</p></div>}
              </div>
            </DetailGroup>
          )}

          {product.specifications?.length > 0 && (
            <DetailGroup title="Specifications">
              <div className="product-spec-table">
                {product.specifications.map(([label, value]) => (
                  <div className="product-spec-row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </DetailGroup>
          )}

          {(product.storage || product.caution || product.manufacturer) && (
            <DetailGroup title="Additional information">
              <div className="product-additional-grid">
                {product.storage && <div><span>Storage conditions</span><p>{product.storage}</p></div>}
                {product.caution && <div><span>Caution</span><p>{product.caution}</p></div>}
                {product.manufacturer && <div className="full"><span>Manufactured by</span><p>{product.manufacturer}</p></div>}
              </div>
            </DetailGroup>
          )}

          <div className="product-details-footer">
            <span>For agriculture use only</span>
            <span className="product-details-footer-line" />
            <span>Product information</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
