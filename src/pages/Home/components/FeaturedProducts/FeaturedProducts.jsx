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
    description: "A phosphorus and potassium formulation from the agricultural range.",
    image: "/a2.jpg",
  },
  {
    number: "03",
    name: "Calibor",
    category: "Micronutrient",
    description: "A calcium and boron based nutrition product for agricultural use.",
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
              A selection from the AGRIPEX range, with product information available
              across the full catalogue.
            </p>
            <Link className="featured-products-catalog-link" to="/products">
              <span>View all products</span>
              <b aria-hidden="true">↗</b>
            </Link>
          </div>
        </ScrollReveal>

        <div className="featured-products-showcase">
          <ScrollReveal className="featured-product-feature" distance="up">
            <div className="featured-product-feature-image">
              <img
                src={products[0].image}
                alt="Calcium Nitrate fertilizer product"
                loading="lazy"
              />
              <div className="featured-product-feature-label">
                <span>01</span>
                <strong>Featured product</strong>
              </div>
            </div>

            <div className="featured-product-feature-info">
              <div>
                <span className="featured-product-category">{products[0].category}</span>
                <h3>{products[0].name}</h3>
              </div>
              <div className="featured-product-feature-copy">
                <p>{products[0].description}</p>
                <Link className="featured-product-primary-cta" to="/products">
                  <span>Explore product</span>
                  <b aria-hidden="true">↗</b>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="featured-products-list">
            <div className="featured-products-list-heading">
              <span>02 — 03</span>
              <span>More from the range</span>
            </div>

            {products.slice(1).map((product, index) => (
              <ScrollReveal
                key={product.name}
                className="featured-product-row"
                distance="right"
                delay={index * 90}
              >
                <div className="featured-product-row-number">{product.number}</div>
                <div className="featured-product-row-image">
                  <img
                    src={product.image}
                    alt={`${product.name} fertilizer product`}
                    loading="lazy"
                  />
                </div>
                <div className="featured-product-row-content">
                  <span className="featured-product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link className="featured-product-secondary-cta" to="/products">
                    <span>View product</span>
                    <b aria-hidden="true">↗</b>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
