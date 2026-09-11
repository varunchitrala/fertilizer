import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./FeaturedProducts.css";

const featuredProduct = {
  number: "01",
  name: "Calcium Nitrate",
  category: "Calcium + Magnesium",
  description:
    "A highly soluble fertilizer providing nitrogen, calcium and magnesium for crop nutrition.",
  image: "/a1.jpg",
};

const supportingProducts = [
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
    <section
      className="featured-products"
      aria-labelledby="featured-products-title"
    >
      <div className="header-container featured-products-container">
        <ScrollReveal className="featured-products-heading" distance="up">
          <div className="featured-products-heading-copy">
            <span className="featured-products-kicker">
              <i /> AGRIPEX product shelf
            </span>
            <h2 id="featured-products-title">
              Inputs built for
              <br />
              <em>the next crop.</em>
            </h2>
          </div>
          <div className="featured-products-intro-wrap">
            <p className="featured-products-intro">
              A focused selection of soluble fertilizers and micronutrients for
              practical crop nutrition.
            </p>
            <span className="featured-products-heading-index">
              01 <b>/</b> 03 products
            </span>
          </div>
        </ScrollReveal>

        <div className="featured-products-shelf">
          <ScrollReveal className="featured-products-primary" distance="left">
            <div className="featured-products-primary-topline">
              <span>01 / Lead formulation</span>
              <span className="featured-products-primary-badge">
                Featured range
              </span>
            </div>
            <div className="featured-products-primary-image-wrap">
              <img
                src={featuredProduct.image}
                alt="Calcium Nitrate fertilizer product"
                loading="lazy"
              />
              <span className="featured-products-primary-index">
                {featuredProduct.number}
              </span>
            </div>
            <div className="featured-products-primary-copy">
              <div>
                <span className="featured-product-category">
                  {featuredProduct.category}
                </span>
                <h3>{featuredProduct.name}</h3>
              </div>
              <div className="featured-products-primary-detail">
                <p>{featuredProduct.description}</p>
                <Link
                  className="featured-product-detail featured-product-primary-cta"
                  to="/products"
                >
                  <span>Explore product</span>
                  <b aria-hidden="true">↗</b>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="featured-products-supporting">
            <ScrollReveal
              className="featured-products-supporting-heading"
              distance="right"
            >
              <div>
                <span>02—03 / Supporting range</span>
                <strong>More crop solutions</strong>
              </div>
              <Link className="featured-products-catalog-link" to="/products">
                <span>Full catalogue</span>
                <b aria-hidden="true">↗</b>
              </Link>
            </ScrollReveal>

            {supportingProducts.map((product, index) => (
              <ScrollReveal
                key={product.name}
                className="featured-product-supporting"
                distance="right"
                delay={(index + 1) * 90}
              >
                <div className="featured-product-supporting-image-wrap">
                  <img
                    src={product.image}
                    alt={`${product.name} fertilizer product`}
                    loading="lazy"
                  />
                  <span>{product.number}</span>
                </div>
                <div className="featured-product-supporting-copy">
                  <span className="featured-product-category">
                    {product.category}
                  </span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link className="featured-product-detail" to="/products">
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
