import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import "./Products.css";

const products = [
  {
    name: "Calcium Nitrate",
    description:
      "A calcium and nitrogen fertilizer for supporting healthy crop development and balanced nutrition.",
  },
  {
    name: "00:50:62",
    description:
      "A high-phosphorus and potassium formulation designed for crop nutrition across key growth stages.",
  },
  {
    name: "Calibor",
    description:
      "A calcium and boron based nutrition product intended to support crop quality and development.",
  },
  {
    name: "28:28:00",
    description:
      "A balanced nitrogen and phosphorus fertilizer formulation for crop nutrition.",
  },
  {
    name: "25:25:25",
    description:
      "A balanced NPK formulation designed to provide essential nutrients for crop growth.",
  },
  {
    name: "14:18:00",
    description:
      "A nitrogen and phosphorus fertilizer formulation for supporting crop nutrition.",
  },
  {
    name: "03:50:50",
    description:
      "A phosphorus and potassium rich formulation for crop nutrition and development.",
  },
  {
    name: "00:52:34",
    description:
      "A phosphorus and potassium fertilizer formulation for targeted crop nutrition.",
  },
  {
    name: "00:09:46",
    description:
      "A potassium-focused fertilizer formulation for crop nutrition needs.",
  },
  {
    name: "13:00:45",
    description:
      "A potassium-rich fertilizer formulation with nitrogen for crop nutrition.",
  },
  {
    name: "22:22:11",
    description:
      "A balanced nutrient formulation providing nitrogen, phosphorus and potassium.",
  },
  {
    name: "24:24:00",
    description:
      "A nitrogen and phosphorus fertilizer formulation for balanced crop nutrition.",
  },
  {
    name: "00:42:47",
    description:
      "A phosphorus and potassium formulation for supporting flowering and crop development.",
  },
  {
    name: "00:50:50",
    description:
      "A phosphorus and potassium fertilizer formulation for crop nutrition.",
  },
  {
    name: "Nutrigen Potassium",
    description:
      "A potassium-focused agricultural nutrition product for crop requirements.",
  },
  {
    name: "Urea",
    description:
      "A nitrogen fertilizer used to support vegetative growth and crop nutrient requirements.",
  },
  {
    name: "19:19:19",
    description:
      "A balanced NPK formulation for supplying essential nutrients during crop growth.",
  },
  {
    name: "00:32:34",
    description:
      "A phosphorus and potassium fertilizer formulation for crop nutrition.",
  },
  {
    name: "10:26:26",
    description:
      "A nitrogen, phosphorus and potassium formulation for balanced crop nutrition.",
  },
  {
    name: "DAP",
    description:
      "A nitrogen and phosphorus fertilizer used as a common source of crop nutrients.",
  },
  {
    name: "Bundha Special",
    description:
      "An agricultural specialty product developed for crop nutrition and field support.",
  },
  {
    name: "O-Carb",
    description:
      "A specialty agricultural input supporting crop nutrition and field performance.",
  },
  {
    name: "Vadi Special",
    description:
      "A specialty agricultural product for crop nutrition and productive farming.",
  },
  {
    name: "Nimatocide+",
    description:
      "An agricultural product for crop protection and nematode-management needs.",
  },
  {
    name: "Ven Special",
    description:
      "A specialty agricultural input developed to support crop protection and farming needs.",
  },
];

function ProductPlaceholder({ index }) {
  return (
    <div className="product-card-image product-card-image-placeholder" aria-hidden="true">
      <span className="product-placeholder-brand">AGRIPEX</span>
      <span className="product-placeholder-index">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="product-placeholder-ring" />
    </div>
  );
}

function Products() {
  return (
    <>
      <Header />

      <main className="products-page">
        <section className="products-hero">
          <div className="products-hero-glow" />
          <div className="container products-hero-inner">
            <ScrollReveal distance={35}>
              <span className="products-eyebrow">Agripex / Products</span>
              <h1>
                Solutions built for <em>better crops.</em>
              </h1>
              <p>
                Explore our range of fertilizers, crop nutrition products, and
                agricultural solutions created around practical farming needs.
              </p>
            </ScrollReveal>
          </div>
        </section>

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
                  <ProductPlaceholder index={index} />

                  <div className="product-card-content">
                    <span className="product-card-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2>Agripex - {product.name}</h2>
                      <p>{product.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Products;
