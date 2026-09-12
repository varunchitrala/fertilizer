import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./ProductCatalog.css";

const products = [
  { name: "Calcium Nitrate", description: "Calcium and nitrogen fertilizer for crop development and balanced nutrition.", image: "/a1.jpg", slug: "calcium-nitrate" },
  { name: "00:50:62", description: "High-phosphorus and potassium formulation for crop nutrition.", image: "/a2.jpg", slug: "00-50-62" },
  { name: "Calibor", description: "Calcium and boron based nutrition product for crop quality and development.", image: "/a3.jpg", slug: "calibor" },
  { name: "28:28:00", description: "Balanced nitrogen and phosphorus fertilizer formulation.", image: "/a4.jpg", slug: "28-28-00" },
  { name: "25:25:25", description: "Balanced NPK fertilizer formulation for crop nutrition.", image: "/products/25-25-25.jpg", slug: "25-25-25" },
  { name: "14:18:00", description: "Nitrogen and phosphorus fertilizer formulation for crop nutrition.", image: "/14.18.jpg", slug: "14-18-00" },
  { name: "03:50:50", description: "Phosphorus and potassium rich formulation for crop nutrition.", image: "/products/03-50-50.jpg", slug: "03-50-50" },
  { name: "00:52:34", description: "Phosphorus and potassium fertilizer formulation.", image: "/products/00-52-34.jpg", slug: "00-52-34" },
  { name: "00:09:46", description: "Potassium-focused fertilizer formulation for crop nutrition.", image: "/products/00-09-46.jpg", slug: "00-09-46" },
  { name: "13:00:45", description: "Potassium-rich fertilizer formulation with nitrogen.", image: "/products/13-00-45.jpg", slug: "13-00-45" },
  { name: "22:22:11", description: "Balanced nutrient formulation providing nitrogen, phosphorus and potassium.", image: "/products/22-22-11.jpg", slug: "22-22-11" },
  { name: "24:24:00", description: "Nitrogen and phosphorus fertilizer formulation.", image: "/products/24-24-00.jpg", slug: "24-24-00" },
  { name: "00:42:47", description: "Phosphorus and potassium formulation for crop development.", image: "/products/00-42-47.jpg", slug: "00-42-47" },
  { name: "00:50:50", description: "Phosphorus and potassium fertilizer formulation.", image: "/products/00-50-50.jpg", slug: "00-50-50" },
  { name: "Nutrigen Potassium", description: "Potassium-focused agricultural nutrition product.", image: "/products/nutrigen-potassium.jpg", slug: "nutrigen-potassium" },
  { name: "Urea", description: "Nitrogen fertilizer for vegetative growth and crop nutrient requirements.", image: "/products/urea.jpg", slug: "urea" },
  { name: "19:19:19", description: "Balanced NPK formulation for essential crop nutrients.", image: "/products/19-19-19.jpg", slug: "19-19-19" },
  { name: "00:32:34", description: "Phosphorus and potassium fertilizer formulation.", image: "/products/00-32-34.jpg", slug: "00-32-34" },
  { name: "10:26:26", description: "Nitrogen, phosphorus and potassium formulation.", image: "/products/10-26-26.jpg", slug: "10-26-26" },
  { name: "DAP", description: "Nitrogen and phosphorus fertilizer for crop nutrients.", image: "/products/dap.jpg", slug: "dap" },
  { name: "Bundha Special", description: "Agricultural specialty product for crop nutrition and field support.", image: "/products/bundha-special.jpg", slug: "bundha-special" },
  { name: "O-Carb", description: "Specialty agricultural input supporting crop nutrition.", image: "/products/o-carb.jpg", slug: "o-carb" },
  { name: "Vadi Special", description: "Specialty agricultural product for crop nutrition.", image: "/products/vadi-special.jpg", slug: "vadi-special" },
  { name: "Nimatocide+", description: "Agricultural product for nematode-management needs.", image: "/products/nimatocide-plus.jpg", slug: "nimatocide-plus" },
  { name: "Ven Special", description: "Specialty agricultural input for crop protection and farming needs.", image: "/products/ven-special.jpg", slug: "ven-special" },
];

function ProductCard({ product, index }) {
  return (
    <ScrollReveal distance={20} delay={(index % 3) * 45}>
      <article className="product-card">
        <Link className="product-card-image-link" to={`/products/${product.slug}`} aria-label={`View ${product.name} details`}>
          <div className="product-card-image">
            <img src={product.image} alt={product.name} loading="lazy" />
            <span className="product-card-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="product-card-image-arrow" aria-hidden="true">↗</span>
          </div>
        </Link>
        <div className="product-card-body">
          <span className="product-card-label">AGRIPEX · PRODUCT {String(index + 1).padStart(2, "0")}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <Link className="product-card-cta" to={`/products/${product.slug}`}>
            <span>More details</span><b>→</b>
          </Link>
        </div>
      </article>
    </ScrollReveal>
  );
}

function ProductCatalog() {
  return (
    <section className="products-catalog" id="products-catalog">
      <div className="container">
        <header className="products-catalog-header">
          <div className="products-catalog-heading">
            <div className="products-catalog-label"><span>01</span><span>Product catalogue</span></div>
            <h2>Our products.<br /><em>Our range.</em></h2>
            <p>Explore the complete Agripex product range. Select a product to view its complete information on a dedicated product page.</p>
          </div>
          <div className="products-catalog-index"><strong>25</strong><span>Products<br />in range</span></div>
        </header>
        <div className="products-catalog-toolbar"><span>AGRIPEX / PRODUCT RANGE</span><span>25 PRODUCTS <b>·</b> PRODUCT DETAILS</span></div>
        <div className="products-grid">
          {products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
        </div>
      </div>
    </section>
  );
}

export default ProductCatalog;
