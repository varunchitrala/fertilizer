import ScrollReveal from "../../../../components/ScrollReveal";
import "./ProductCatalog.css";

const products = [
  {
    name: "Calcium Nitrate",
    description: "A calcium and nitrogen fertilizer for supporting healthy crop development and balanced nutrition.",
    image: "/products/calcium-nitrate.jpg",
  },
  {
    name: "00:50:62",
    description: "A high-phosphorus and potassium formulation designed for crop nutrition across key growth stages.",
    image: "/products/00-50-62.jpg",
  },
  {
    name: "Calibor",
    description: "A calcium and boron based nutrition product intended to support crop quality and development.",
    image: "/products/calibor.jpg",
  },
  {
    name: "28:28:00",
    description: "A balanced nitrogen and phosphorus fertilizer formulation for crop nutrition.",
    image: "/products/28-28-00.jpg",
  },
  {
    name: "25:25:25",
    description: "A balanced NPK formulation designed to provide essential nutrients for crop growth.",
    image: "/products/25-25-25.jpg",
  },
  {
    name: "14:18:00",
    description: "A nitrogen and phosphorus fertilizer formulation for supporting crop nutrition.",
    image: "/products/14-18-00.jpg",
  },
  {
    name: "03:50:50",
    description: "A phosphorus and potassium rich formulation for crop nutrition and development.",
    image: "/products/03-50-50.jpg",
  },
  {
    name: "00:52:34",
    description: "A phosphorus and potassium fertilizer formulation for targeted crop nutrition.",
    image: "/products/00-52-34.jpg",
  },
  {
    name: "00:09:46",
    description: "A potassium-focused fertilizer formulation for crop nutrition needs.",
    image: "/products/00-09-46.jpg",
  },
  {
    name: "13:00:45",
    description: "A potassium-rich fertilizer formulation with nitrogen for crop nutrition.",
    image: "/products/13-00-45.jpg",
  },
  {
    name: "22:22:11",
    description: "A balanced nutrient formulation providing nitrogen, phosphorus and potassium.",
    image: "/products/22-22-11.jpg",
  },
  {
    name: "24:24:00",
    description: "A nitrogen and phosphorus fertilizer formulation for balanced crop nutrition.",
    image: "/products/24-24-00.jpg",
  },
  {
    name: "00:42:47",
    description: "A phosphorus and potassium formulation for supporting flowering and crop development.",
    image: "/products/00-42-47.jpg",
  },
  {
    name: "00:50:50",
    description: "A phosphorus and potassium fertilizer formulation for crop nutrition.",
    image: "/products/00-50-50.jpg",
  },
  {
    name: "Nutrigen Potassium",
    description: "A potassium-focused agricultural nutrition product for crop requirements.",
    image: "/products/nutrigen-potassium.jpg",
  },
  {
    name: "Urea",
    description: "A nitrogen fertilizer used to support vegetative growth and crop nutrient requirements.",
    image: "/products/urea.jpg",
  },
  {
    name: "19:19:19",
    description: "A balanced NPK formulation for supplying essential nutrients during crop growth.",
    image: "/products/19-19-19.jpg",
  },
  {
    name: "00:32:34",
    description: "A phosphorus and potassium fertilizer formulation for crop nutrition.",
    image: "/products/00-32-34.jpg",
  },
  {
    name: "10:26:26",
    description: "A nitrogen, phosphorus and potassium formulation for balanced crop nutrition.",
    image: "/products/10-26-26.jpg",
  },
  {
    name: "DAP",
    description: "A nitrogen and phosphorus fertilizer used as a common source of crop nutrients.",
    image: "/products/dap.jpg",
  },
  {
    name: "Bundha Special",
    description: "An agricultural specialty product developed for crop nutrition and field support.",
    image: "/products/bundha-special.jpg",
  },
  {
    name: "O-Carb",
    description: "A specialty agricultural input supporting crop nutrition and field performance.",
    image: "/products/o-carb.jpg",
  },
  {
    name: "Vadi Special",
    description: "A specialty agricultural product for crop nutrition and productive farming.",
    image: "/products/vadi-special.jpg",
  },
  {
    name: "Nimatocide+",
    description: "An agricultural product for crop protection and nematode-management needs.",
    image: "/products/nimatocide-plus.jpg",
  },
  {
    name: "Ven Special",
    description: "A specialty agricultural input developed to support crop protection and farming needs.",
    image: "/products/ven-special.jpg",
  },
];

function ProductCardImage({ product, index }) {
  return (
    <div className="product-card-image">
      <img src={product.image} alt={product.name} loading="lazy" />
      <span className="product-card-badge">{String(index + 1).padStart(2, "0")}</span>
    </div>
  );
}

function ProductCatalog() {
  return (
    <section className="products-catalog" id="products-catalog">
      <div className="container">
        <div className="products-heading">
          <div>
            <span className="products-section-number">01</span>
            <span className="products-section-label">Our range</span>
          </div>
          <p>{products.length} products</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ScrollReveal
              className="product-card"
              distance={35}
              delay={(index % 3) * 80}
              key={product.name}
            >
              <ProductCardImage product={product} index={index} />

              <div className="product-card-content">
                <span className="product-card-category">AGRIPEX / PRODUCT</span>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCatalog;
