import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./FeaturedProducts.css";

const featuredProducts = [
  {
    number: "01",
    name: "Calcium Nitrate",
    category: "Calcium + Magnesium",
    description:
      "A highly soluble fertilizer providing nitrogen, calcium and magnesium for crop nutrition.",
    image: "/a1.jpg",
    featured: true,
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
          <div className="featured-products-heading-copy">
            <span className="featured-products-kicker">Product range</span>
            <h2 id="featured-products-title">
              Featured agricultural solutions.
            </h2>
          </div>
          <Link className="featured-products-catalog-link" to="/products">
            <span>View all products</span>
            <b aria-hidden="true">↗</b>
          </Link>
        </ScrollReveal>

        <div className="featured-products-layout">
          <ScrollReveal className="featured-product-main" distance="up">
            <Link to="/products" className="featured-product-image-link" aria-label="View Calcium Nitrate details">
              <div className="featured-product-image">
                <img
                  src={featuredProducts[0].image}
                  alt="Calcium Nitrate fertilizer product"
                  loading="lazy"
                />
                <span className="featured-product-image-index">01</span>
              </div>
            </Link>

            <div className="featured-product-main-copy">
              <div>
                <span className="featured-product-number">01</span>
                <span className="featured-product-category">
                  {featuredProducts[0].category}
                </span>
              </div>
              <h3>{featuredProducts[0].name}</h3>
              <p>{featuredProducts[0].description}</p>
              <Link className="featured-product-detail" to="/products">
                <span>View product details</span>
                <b aria-hidden="true">↗</b>
              </Link>
            </div>
          </ScrollReveal>

          <div className="featured-products-supporting">
            {featuredProducts.slice(1).map((product, index) => (
              <ScrollReveal
                key={product.name}
                className="featured-product-supporting"
                distance="right"
                delay={(index + 1) * 90}
              >
                <Link
                  to="/products"
                  className="featured-product-supporting-image-link"
                  aria-label={`View ${product.name} details`}
                >
                  <div className="featured-product-supporting-image">
                    <img src={product.image} alt={`${product.name} fertilizer product`} loading="lazy" />
                    <span>{product.number}</span>
                  </div>
                </Link>

                <div className="featured-product-supporting-copy">
                  <span className="featured-product-category">{product.category}</span>
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
