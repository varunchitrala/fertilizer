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
  const handleNavigateToProducts = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <section className="featured-products" aria-labelledby="featured-products-title">
      <div className="header-container featured-products-container">
        <ScrollReveal className="featured-products-heading" distance="up">
          <div>
            <span className="featured-products-kicker">Our products</span>
            <h2 id="featured-products-title">
              Explore our
            
              <em> product range.</em>
            </h2>
          </div>
          <div className="featured-products-heading-side">
            
            <Link
              className="featured-products-catalog-link"
              to="/products"
              onClick={handleNavigateToProducts}
            >
              
            
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
                onClick={handleNavigateToProducts}
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
                <Link
                  className="featured-product-card-cta"
                  to="/products"
                  onClick={handleNavigateToProducts}
                >
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
