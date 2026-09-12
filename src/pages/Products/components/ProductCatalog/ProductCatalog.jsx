import { useState } from "react";
import ScrollReveal from "../../../../components/ScrollReveal";
import ProductDetails from "./ProductDetails";
import "./ProductCatalog.css";

const products = [
  {
    name: "Calcium Nitrate",
    description:
      "Calcium and nitrogen fertilizer for crop development and balanced nutrition.",
    image: "/a1.jpg",
    details: {
      overview:
        "Calcium Nitrate fortified with Magnesium is a highly soluble liquid fertilizer providing nitrogen, calcium, and magnesium. It supports healthy vegetative growth, strong cell structure, and improved fruit quality, enhanced by efficient nutrient availability to the plant.",
      features: [
        {
          number: "01",
          title: "EA² Technology",
          text: "Enhanced nutrient uptake and increased efficacy, with improved nutrient translocation and faster results.",
        },
        {
          number: "02",
          title: "S² Technology",
          text: "Concentration beyond what is normally achievable in liquid formulations, with improved nutrient translocation and faster results.",
        },
        {
          number: "03",
          title: "High Quality Raw Materials",
          text: "Designed around quality raw materials to support maximum efficacy and safety.",
        },
        {
          number: "04",
          title: "Liquid Form",
          text: "Easy to measure and convenient to use.",
        },
        {
          number: "05",
          title: "Highly Concentrated",
          text: "Reduced doses and increased efficacy resulting in lower application costs.",
        },
        {
          number: "06",
          title: "Enhanced Mix Profile",
          text: "Facilitates combined application for reduced application cost.",
        },
        {
          number: "07",
          title: "Stability",
          text: "Certified manufacturing processes and testing support a long shelf life.",
        },
      ],
      application: ["Fertigation", "Drip irrigation", "Foliar Spray"],
      dosage: [
        "Foliar Spray: 3 ml to 5 ml / Litre water",
        "Drip Irrigation: 3000 - 5000 ml / per acre",
      ],
      crops: [
        "Grapes",
        "Pomegranate",
        "Banana",
        "Cotton",
        "Tomato",
        "Onion",
        "Sugarcane",
        "Ginger",
        "Turmeric",
        "Watermelon",
      ],
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
      caution:
        "Keep out of reach of children. Shake well before use. For agriculture use only.",
      manufacturer: "AGRIPEX PESTICIDE FERTILIZER AND CHEMICAL PRIVATE LIMITED",
    },
  },
  {
    name: "00:50:62",
    description:
      "High-phosphorus and potassium formulation for crop nutrition.",
    image: "/a2.jpg",
  },
  {
    name: "Calibor",
    description:
      "Calcium and boron based nutrition product for crop quality and development.",
    image: "/a3.jpg",
  },
  {
    name: "28:28:00",
    description: "Balanced nitrogen and phosphorus fertilizer formulation.",
    image: "/a4.jpg",
  },
  {
    name: "25:25:25",
    description: "Balanced NPK fertilizer formulation for crop nutrition.",
    image: "/products/25-25-25.jpg",
  },
  {
    name: "14:18:00",
    description:
      "Nitrogen and phosphorus fertilizer formulation for crop nutrition.",
    image: "/14.18.jpg",
  },
  {
    name: "03:50:50",
    description:
      "Phosphorus and potassium rich formulation for crop nutrition.",
    image: "/products/03-50-50.jpg",
  },
  {
    name: "00:52:34",
    description: "Phosphorus and potassium fertilizer formulation.",
    image: "/products/00-52-34.jpg",
  },
  {
    name: "00:09:46",
    description: "Potassium-focused fertilizer formulation for crop nutrition.",
    image: "/products/00-09-46.jpg",
  },
  {
    name: "13:00:45",
    description: "Potassium-rich fertilizer formulation with nitrogen.",
    image: "/products/13-00-45.jpg",
  },
  {
    name: "22:22:11",
    description:
      "Balanced nutrient formulation providing nitrogen, phosphorus and potassium.",
    image: "/products/22-22-11.jpg",
  },
  {
    name: "24:24:00",
    description: "Nitrogen and phosphorus fertilizer formulation.",
    image: "/products/24-24-00.jpg",
  },
  {
    name: "00:42:47",
    description: "Phosphorus and potassium formulation for crop development.",
    image: "/products/00-42-47.jpg",
  },
  {
    name: "00:50:50",
    description: "Phosphorus and potassium fertilizer formulation.",
    image: "/products/00-50-50.jpg",
  },
  {
    name: "Nutrigen Potassium",
    description: "Potassium-focused agricultural nutrition product.",
    image: "/products/nutrigen-potassium.jpg",
  },
  {
    name: "Urea",
    description:
      "Nitrogen fertilizer for vegetative growth and crop nutrient requirements.",
    image: "/products/urea.jpg",
  },
  {
    name: "19:19:19",
    description: "Balanced NPK formulation for essential crop nutrients.",
    image: "/products/19-19-19.jpg",
  },
  {
    name: "00:32:34",
    description: "Phosphorus and potassium fertilizer formulation.",
    image: "/products/00-32-34.jpg",
  },
  {
    name: "10:26:26",
    description: "Nitrogen, phosphorus and potassium formulation.",
    image: "/products/10-26-26.jpg",
  },
  {
    name: "DAP",
    description: "Nitrogen and phosphorus fertilizer for crop nutrients.",
    image: "/products/dap.jpg",
  },
  {
    name: "Bundha Special",
    description:
      "Agricultural specialty product for crop nutrition and field support.",
    image: "/products/bundha-special.jpg",
  },
  {
    name: "O-Carb",
    description: "Specialty agricultural input supporting crop nutrition.",
    image: "/products/o-carb.jpg",
  },
  {
    name: "Vadi Special",
    description: "Specialty agricultural product for crop nutrition.",
    image: "/products/vadi-special.jpg",
  },
  {
    name: "Nimatocide+",
    description: "Agricultural product for nematode-management needs.",
    image: "/products/nimatocide-plus.jpg",
  },
  {
    name: "Ven Special",
    description:
      "Specialty agricultural input for crop protection and farming needs.",
    image: "/products/ven-special.jpg",
  },
];

function ProductCard({ product, index, onOpen }) {
  return (
    <ScrollReveal distance={22} delay={(index % 3) * 45}>
      <article className="product-card">
        <button
          className="product-card-open"
          type="button"
          onClick={() => onOpen(product, index)}
          aria-label={`View ${product.name} details`}
        >
          <div className="product-card-image">
            <img src={product.image} alt={product.name} loading="lazy" />
            <span className="product-card-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="product-card-view">
              View product <b>↗</b>
            </span>
          </div>
          <div className="product-card-body">
            <span className="product-card-label">
              AGRIPEX · PRODUCT {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        </button>
      </article>
    </ScrollReveal>
  );
}

function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const openProduct = (product, index) =>
    setSelectedProduct({ ...product, index });

  return (
    <section className="products-catalog" id="products-catalog">
      <div className="container">
        <header className="products-catalog-header">
          <div className="products-catalog-heading">
            <div className="products-catalog-label">
              <span>01</span>
              <span>Product catalogue</span>
            </div>
            <h2>
              Products made for the <em>field.</em>
            </h2>
            <p>
              Explore the complete Agripex range. Select a product to view its
              available product information.
            </p>
          </div>
          <div className="products-catalog-index">
            <strong>25</strong>
            <span>
              Products
              <br />
              in range
            </span>
          </div>
        </header>

        <div className="products-catalog-bar">
          <span>AGRIPEX PRODUCT RANGE</span>
          <span>
            Select a product to view details <b>↓</b>
          </span>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`}
              product={product}
              index={index}
              onOpen={openProduct}
            />
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
