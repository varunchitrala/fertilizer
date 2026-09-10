import { useRef, useState } from "react";
import ScrollReveal from "../../../../components/ScrollReveal";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./ProductCatalog.css";

const products = [
  {
    name: "Calcium Nitrate",
    description: "A calcium and nitrogen fertilizer for supporting healthy crop development and balanced nutrition.",
    image: "/a1.jpg",
    details: {
      overview: "Calcium Nitrate fortified with Magnesium is a highly soluble liquid fertilizer providing nitrogen, calcium, and magnesium. It supports healthy vegetative growth, strong cell structure, and improved fruit quality, enhanced by efficient nutrient availability to the plant.",
      features: [
        { number: "01", title: "EA² Technology", text: "Enhanced nutrient uptake and increased efficacy, with improved nutrient translocation and faster results." },
        { number: "02", title: "S² Technology", text: "Concentration beyond what is normally achievable in liquid formulations, with improved nutrient translocation and faster results." },
        { number: "03", title: "High Quality Raw Materials", text: "Designed around quality raw materials to support maximum efficacy and safety." },
        { number: "04", title: "Liquid Form", text: "Easy to measure and convenient to use." },
        { number: "05", title: "Highly Concentrated", text: "Reduced doses and increased efficacy resulting in lower application costs." },
        { number: "06", title: "Enhanced Mix Profile", text: "Facilitates combined application for reduced application cost." },
        { number: "07", title: "Stability", text: "Certified manufacturing processes and testing support a long shelf life." },
      ],
      application: ["Fertigation", "Drip irrigation", "Foliar Spray"],
      dosage: ["Foliar Spray: 3 ml to 5 ml / Litre water", "Drip Irrigation: 3000 - 5000 ml / per acre"],
      crops: ["Grapes", "Pomegranate", "Banana", "Cotton", "Tomato", "Onion", "Sugarcane", "Ginger", "Turmeric", "Watermelon"],
      form: "Liquid fertilizer · 1 litre",
      specifications: [
        { label: "Base", value: "Liquid Gel" },
        { label: "Total Nitrogen", value: "15.50% Wt/Wt · 20.50% Wt/Vol" },
        { label: "Total Calcium (Ca)", value: "19.00% Wt/Wt · 25.10% Wt/Vol" },
        { label: "Total Magnesium (Mg)", value: "02.00% Wt/Wt · 2.60% Wt/Vol" },
        { label: "Trace Elements (EDTA)", value: "Yes" },
        { label: "pH", value: "5.5-6.5" },
        { label: "Specific Gravity", value: "1.32-1.35 @18°" },
      ],
      storage: "Store in cool place, away from direct sunlight & heat.",
      caution: "Keep out of reach of children. Shake well before use. For agriculture use only.",
      manufacturer: "AGRIPEX PESTICIDE FERTILIZER AND CHEMICAL PRIVATE LIMITED",
    },
  },
  { name: "00:50:62", description: "A high-phosphorus and potassium formulation designed for crop nutrition across key growth stages.", image: "/products/00-50-62.jpg" },
  { name: "Calibor", description: "A calcium and boron based nutrition product intended to support crop quality and development.", image: "/products/calibor.jpg" },
  { name: "28:28:00", description: "A balanced nitrogen and phosphorus fertilizer formulation for crop nutrition.", image: "/products/28-28-00.jpg" },
  { name: "25:25:25", description: "A balanced NPK formulation designed to provide essential nutrients for crop growth.", image: "/products/25-25-25.jpg" },
  { name: "14:18:00", description: "A nitrogen and phosphorus fertilizer formulation for supporting crop nutrition.", image: "/products/14-18-00.jpg" },
  { name: "03:50:50", description: "A phosphorus and potassium rich formulation for crop nutrition and development.", image: "/products/03-50-50.jpg" },
  { name: "00:52:34", description: "A phosphorus and potassium fertilizer formulation for targeted crop nutrition.", image: "/products/00-52-34.jpg" },
  { name: "00:09:46", description: "A potassium-focused fertilizer formulation for crop nutrition needs.", image: "/products/00-09-46.jpg" },
  { name: "13:00:45", description: "A potassium-rich fertilizer formulation with nitrogen for crop nutrition.", image: "/products/13-00-45.jpg" },
  { name: "22:22:11", description: "A balanced nutrient formulation providing nitrogen, phosphorus and potassium.", image: "/products/22-22-11.jpg" },
  { name: "24:24:00", description: "A nitrogen and phosphorus fertilizer formulation for balanced crop nutrition.", image: "/products/24-24-00.jpg" },
  { name: "00:42:47", description: "A phosphorus and potassium formulation for supporting flowering and crop development.", image: "/products/00-42-47.jpg" },
  { name: "00:50:50", description: "A phosphorus and potassium fertilizer formulation for crop nutrition.", image: "/products/00-50-50.jpg" },
  { name: "Nutrigen Potassium", description: "A potassium-focused agricultural nutrition product for crop requirements.", image: "/products/nutrigen-potassium.jpg" },
  { name: "Urea", description: "A nitrogen fertilizer used to support vegetative growth and crop nutrient requirements.", image: "/products/urea.jpg" },
  { name: "19:19:19", description: "A balanced NPK formulation for supplying essential nutrients during crop growth.", image: "/products/19-19-19.jpg" },
  { name: "00:32:34", description: "A phosphorus and potassium fertilizer formulation for crop nutrition.", image: "/products/00-32-34.jpg" },
  { name: "10:26:26", description: "A nitrogen, phosphorus and potassium formulation for balanced crop nutrition.", image: "/products/10-26-26.jpg" },
  { name: "DAP", description: "A nitrogen and phosphorus fertilizer used as a common source of crop nutrients.", image: "/products/dap.jpg" },
  { name: "Bundha Special", description: "An agricultural specialty product developed for crop nutrition and field support.", image: "/products/bundha-special.jpg" },
  { name: "O-Carb", description: "A specialty agricultural input supporting crop nutrition and field performance.", image: "/products/o-carb.jpg" },
  { name: "Vadi Special", description: "A specialty agricultural product for crop nutrition and productive farming.", image: "/products/vadi-special.jpg" },
  { name: "Nimatocide+", description: "An agricultural product for crop protection and nematode-management needs.", image: "/products/nimatocide-plus.jpg" },
  { name: "Ven Special", description: "A specialty agricultural input developed to support crop protection and farming needs.", image: "/products/ven-special.jpg" },
];

function ProductRow({ product, index, onOpen }) {
  const rowRef = useRef(null);

  const handleMove = (event) => {
    if (!rowRef.current || window.matchMedia("(max-width: 820px)").matches) return;
    const rect = rowRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rowRef.current.style.setProperty("--mx", `${x * 5}deg`);
    rowRef.current.style.setProperty("--my", `${y * -5}deg`);
  };

  const resetMove = () => {
    if (rowRef.current) {
      rowRef.current.style.setProperty("--mx", "0deg");
      rowRef.current.style.setProperty("--my", "0deg");
    }
  };

  return (
    <ScrollReveal distance={45} delay={(index % 2) * 70}>
      <article
        ref={rowRef}
        className={`product-row ${index % 2 ? "product-row-reverse" : ""}`}
        onMouseMove={handleMove}
        onMouseLeave={resetMove}
      >
        <div className="product-row-number">{String(index + 1).padStart(2, "0")}</div>

        <div className="product-row-image">
          <div className="product-image-frame">
            <img src={product.image} alt={product.name} loading="lazy" />
            <span>AGRIPEx</span>
          </div>
        </div>

        <div className="product-row-info">
          <span className="product-row-category">Product / {String(index + 1).padStart(2, "0")}</span>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="product-row-line" />
          <button
            className="product-row-hint"
            type="button"
            aria-label={`View details for ${product.name}`}
            onClick={() => onOpen(product, index)}
          >
            <span>View product details</span>
            <b aria-hidden="true">↗</b>
          </button>
        </div>
      </article>
    </ScrollReveal>
  );
}

function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProduct = (product, index) => {
    setSelectedProduct({ ...product, index });
  };

  return (
    <section className="products-catalog" id="products-catalog">
      <div className="container">
        <div className="products-heading">
          <div>
            <span className="products-section-number">01</span>
            <span className="products-section-label">Product catalogue</span>
          </div>
          <p>{products.length} solutions</p>
        </div>

        <div className="products-list">
          {products.map((product, index) => (
            <ProductRow key={product.name} product={product} index={index} onOpen={openProduct} />
          ))}
        </div>
      </div>

      <ProductDetails
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

export default ProductCatalog;
