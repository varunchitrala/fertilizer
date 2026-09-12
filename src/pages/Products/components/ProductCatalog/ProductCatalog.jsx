import { useState } from "react";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./ProductCatalog.css";

const products = [
  {
    name: "Calcium Nitrate",
    description: "Calcium and nitrogen fertilizer for crop development and balanced nutrition.",
    image: "/a1.jpg",
    details: {
      overview:
        "Calcium Nitrate fortified with Magnesium is a highly soluble liquid fertilizer providing nitrogen, calcium, and magnesium. It supports healthy vegetative growth, strong cell structure, and improved fruit quality, enhanced by efficient nutrient availability to the plant.",
      features: [
        ["EA² Technology", "Enhanced nutrient uptake and increased efficacy, with improved nutrient translocation and faster results."],
        ["S² Technology", "Concentration beyond what is normally achievable in liquid formulations, with improved nutrient translocation and faster results."],
        ["High Quality Raw Materials", "Designed around quality raw materials to support maximum efficacy and safety."],
        ["Liquid Form", "Easy to measure and convenient to use."],
        ["Highly Concentrated", "Reduced doses and increased efficacy resulting in lower application costs."],
        ["Enhanced Mix Profile", "Facilitates combined application for reduced application cost."],
        ["Stability", "Certified manufacturing processes and testing support a long shelf life."],
      ],
      application: ["Fertigation", "Drip irrigation", "Foliar Spray"],
      dosage: ["Foliar Spray: 3 ml to 5 ml / Litre water", "Drip Irrigation: 3000 - 5000 ml / per acre"],
      crops: ["Grapes", "Pomegranate", "Banana", "Cotton", "Tomato", "Onion", "Sugarcane", "Ginger", "Turmeric", "Watermelon"],
      specifications: [
        ["Base", "Liquid Gel"],
        ["Total Nitrogen", "15.50% Wt/Wt · 20.50% Wt/Vol"],
        ["Total Calcium (Ca)", "19.00% Wt/Wt · 25.10% Wt/Vol"],
        ["Total Magnesium (Mg)", "02.00% Wt/Wt · 2.60% Wt/Vol"],
        ["Trace Elements (EDTA)", "Yes"],
        ["pH", "5.5-6.5"],
        ["Specific Gravity", "1.32-1.35 @18°"],
      ],
      storage: "Store in cool place, away from direct sunlight & heat.",
      caution: "Keep out of reach of children. Shake well before use. For agriculture use only.",
      manufacturer: "AGRIPEX PESTICIDE FERTILIZER AND CHEMICAL PRIVATE LIMITED",
    },
  },
  { name: "00:50:62", description: "High-phosphorus and potassium formulation for crop nutrition.", image: "/a2.jpg" },
  { name: "Calibor", description: "Calcium and boron based nutrition product for crop quality and development.", image: "/a3.jpg" },
  { name: "28:28:00", description: "Balanced nitrogen and phosphorus fertilizer formulation.", image: "/a4.jpg" },
  { name: "25:25:25", description: "Balanced NPK fertilizer formulation for crop nutrition.", image: "/products/25-25-25.jpg" },
  { name: "14:18:00", description: "Nitrogen and phosphorus fertilizer formulation for crop nutrition.", image: "/14.18.jpg" },
  { name: "03:50:50", description: "Phosphorus and potassium rich formulation for crop nutrition.", image: "/products/03-50-50.jpg" },
  { name: "00:52:34", description: "Phosphorus and potassium fertilizer formulation.", image: "/products/00-52-34.jpg" },
  { name: "00:09:46", description: "Potassium-focused fertilizer formulation for crop nutrition.", image: "/products/00-09-46.jpg" },
  { name: "13:00:45", description: "Potassium-rich fertilizer formulation with nitrogen.", image: "/products/13-00-45.jpg" },
  { name: "22:22:11", description: "Balanced nutrient formulation providing nitrogen, phosphorus and potassium.", image: "/products/22-22-11.jpg" },
  { name: "24:24:00", description: "Nitrogen and phosphorus fertilizer formulation.", image: "/products/24-24-00.jpg" },
  { name: "00:42:47", description: "Phosphorus and potassium formulation for crop development.", image: "/products/00-42-47.jpg" },
  { name: "00:50:50", description: "Phosphorus and potassium fertilizer formulation.", image: "/products/00-50-50.jpg" },
  { name: "Nutrigen Potassium", description: "Potassium-focused agricultural nutrition product.", image: "/products/nutrigen-potassium.jpg" },
  { name: "Urea", description: "Nitrogen fertilizer for vegetative growth and crop nutrient requirements.", image: "/products/urea.jpg" },
  { name: "19:19:19", description: "Balanced NPK formulation for essential crop nutrients.", image: "/products/19-19-19.jpg" },
  { name: "00:32:34", description: "Phosphorus and potassium fertilizer formulation.", image: "/products/00-32-34.jpg" },
  { name: "10:26:26", description: "Nitrogen, phosphorus and potassium formulation.", image: "/products/10-26-26.jpg" },
  { name: "DAP", description: "Nitrogen and phosphorus fertilizer for crop nutrients.", image: "/products/dap.jpg" },
  { name: "Bundha Special", description: "Agricultural specialty product for crop nutrition and field support.", image: "/products/bundha-special.jpg" },
  { name: "O-Carb", description: "Specialty agricultural input supporting crop nutrition.", image: "/products/o-carb.jpg" },
  { name: "Vadi Special", description: "Specialty agricultural product for crop nutrition.", image: "/products/vadi-special.jpg" },
  { name: "Nimatocide+", description: "Agricultural product for nematode-management needs.", image: "/products/nimatocide-plus.jpg" },
  { name: "Ven Special", description: "Specialty agricultural input for crop protection and farming needs.", image: "/products/ven-special.jpg" },
];

function ProductRow({ product, index, isOpen, onToggle }) {
  const details = product.details;

  return (
    <article className={`product-row ${isOpen ? "is-open" : ""}`}>
      <button
        className="product-row-trigger"
        type="button"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span className="product-row-number">{String(index + 1).padStart(2, "0")}</span>
        <div className="product-row-image">
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
        <div className="product-row-copy">
          <span className="product-row-label">AGRIPEX · PRODUCT {String(index + 1).padStart(2, "0")}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <span className="product-row-action">
          {isOpen ? "Close details" : "More details"}
          <b>{isOpen ? "−" : "↗"}</b>
        </span>
      </button>

      {isOpen && (
        <div className="product-row-details">
          <div className="product-row-details-inner">
            <div className="product-detail-overview">
              <span className="product-detail-label">Product information</span>
              <h4>Complete product <em>details.</em></h4>
              <p>{details?.overview || "Detailed product information will be added here once the verified product data is available."}</p>
            </div>

            {details ? (
              <div className="product-detail-content">
                {details.features && (
                  <section>
                    <span className="product-detail-label">Features</span>
                    <div className="product-feature-list">
                      {details.features.map(([title, text], featureIndex) => (
                        <div className="product-feature" key={title}>
                          <span>0{featureIndex + 1}</span>
                          <div><strong>{title}</strong><p>{text}</p></div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <section className="product-detail-columns">
                  <div>
                    <span className="product-detail-label">Application</span>
                    <div className="product-tags">{details.application?.map((item) => <b key={item}>{item}</b>)}</div>
                  </div>
                  <div>
                    <span className="product-detail-label">Crops</span>
                    <div className="product-tags">{details.crops?.map((item) => <b key={item}>{item}</b>)}</div>
                  </div>
                  <div>
                    <span className="product-detail-label">Dosage</span>
                    <ul>{details.dosage?.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div>
                    <span className="product-detail-label">Specifications</span>
                    <div className="product-specs">{details.specifications?.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
                  </div>
                </section>

                <section className="product-detail-meta">
                  <div><span>Storage</span><p>{details.storage}</p></div>
                  <div><span>Caution</span><p>{details.caution}</p></div>
                  <div><span>Manufacturer</span><p>{details.manufacturer}</p></div>
                </section>
              </div>
            ) : (
              <div className="product-detail-placeholder">
                <span>Details pending</span>
                <p>Only verified information is displayed. Complete technical specifications, application guidance and usage information can be added when the official product data is available.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

function ProductCatalog() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleProduct = (index) => setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="products-catalog" id="products-catalog">
      <div className="container">
        <header className="products-catalog-header">
          <div>
            <div className="products-catalog-label"><span>01</span><span>Product catalogue</span></div>
            <h2>Our products.<br /><em>Our range.</em></h2>
            <p>Explore the complete Agripex product range. Select a product to expand its detailed information.</p>
          </div>
          <div className="products-catalog-index"><strong>25</strong><span>Products<br />in range</span></div>
        </header>

        <div className="products-catalog-toolbar">
          <span>AGRIPEX / PRODUCT RANGE</span>
          <span>25 PRODUCTS <b>·</b> SELECT TO EXPAND</span>
        </div>

        <div className="products-list">
          {products.map((product, index) => (
            <ScrollReveal key={`${product.name}-${index}`} distance={18} delay={(index % 2) * 40}>
              <ProductRow product={product} index={index} isOpen={openIndex === index} onToggle={toggleProduct} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCatalog;
