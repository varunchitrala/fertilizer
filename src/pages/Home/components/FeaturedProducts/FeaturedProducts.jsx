import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./FeaturedProducts.css";

const products = [
  {
    number: "01",
    name: "Calcium Nitrate",
    category: "Calcium + Magnesium",
    description:
      "A highly soluble fertilizer providing nitrogen, calcium and magnesium for crop nutrition.",
    image: "/a1.jpg",
  },
  {
    number: "02",
    name: "00:50:62",
    category: "Water-soluble fertilizer",
    description:
      "A phosphorus and potassium formulation from the agricultural range.",
    image: "/a2.jpg",
  },
  {
    number: "03",
    name: "Calibor",
    category: "Micronutrient",
    description:
      "A calcium and boron based nutrition product for agricultural use.",
    image: "/a3.jpg",
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products" aria-labelledby="featured-products-title">
      <div className="header-container featured-products-container">
        <ScrollReveal className="featured-products-heading" distance="up">
          <div>
            <span className="featured-products-kicker">Our products</span>
            <h2 id="featured-products-title">
              Explore our
              <br />
              <em>product range.</em>
            </h2>
          </div>
          <div className="featured-products-heading-side">
            <p>
              Discover a selection from the AGRIPEX range, presented with clear
              product information and a direct path to the full catalogue.
            </p>
            <Link className="featured-products-catalog-link" to="/products">
              <span>View all products</span>
              <b aria-hidden="true">↗</b>
            </Link>
          </div>
        </ScrollReveal>

        <div className="featured-products-grid">
          {products.map((product, index) => (
            <ScrollReveal
              key={product.name}
              className="featured-product-card"
              distance="up"
              delay={index * 90}
            >
              <Link
                to="/products"
                className="featured-product-image-link"
                aria-label={`View ${product.name} details`}
              >
                <div className="featured-product-image">
                  <img
                    src={product.image}
                    alt={`${product.name} fertilizer product`}
                    loading="lazy"
                  />
                  <span>{product.number}</span>
                </div>
              </Link>

              <div className="featured-product-card-body">
                <div className="featured-product-card-meta">
                  <span>{product.number}</span>
                  <span>{product.category}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link className="featured-product-card-cta" to="/products">
                  <span>View product</span>
                  <b aria-hidden="true">↗</b>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
