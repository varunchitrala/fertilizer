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
    rate: "₹ 1,250 / 25kg",
    use: "Leaf & root boost",
  },
  {
    number: "02",
    name: "00:50:62",
    category: "Water-soluble fertilizer",
    description:
      "A phosphorus and potassium formulation from the agricultural range.",
    image: "/a2.jpg",
    rate: "₹ 1,820 / 25kg",
    use: "Fruit setting",
  },
  {
    number: "03",
    name: "Calibor",
    category: "Micronutrient",
    description:
      "A calcium and boron based nutrition product for agricultural use.",
    image: "/a3.jpg",
    rate: "₹ 980 / 25kg",
    use: "Flowering support",
  },
  {
    number: "04",
    name: "Potassium Sulphate",
    category: "Potassium + Sulphur",
    description:
      "Supports strong crop quality and better stress tolerance with balanced potassium nutrition.",
    image: "/a1.jpg",
    rate: "₹ 1,480 / 25kg",
    use: "Quality build-up",
  },
  {
    number: "05",
    name: "Mono Ammonium Phosphate",
    category: "Phosphorus + Nitrogen",
    description:
      "A high-efficiency source of phosphorus for early root development and stronger establishment.",
    image: "/a2.jpg",
    rate: "₹ 1,360 / 25kg",
    use: "Root development",
  },
  {
    number: "06",
    name: "Zinc Sulphate",
    category: "Micronutrient",
    description:
      "Helps correct micronutrient deficiencies and supports healthy crop growth in nutrient-poor soils.",
    image: "/a3.jpg",
    rate: "₹ 910 / 25kg",
    use: "Deficiency correction",
  },
];

function FeaturedProducts() {
  const handleNavigateToProducts = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const marqueeProducts = [...products, ...products];

  return (
    <section
      className="featured-products"
      aria-labelledby="featured-products-title"
    >
      <div className="header-container featured-products-container">
        <ScrollReveal className="featured-products-heading" distance="up">
          <div>
            <span className="featured-products-kicker">Our products</span>
            <h2 id="featured-products-title">
              Explore our <em>product range.</em>
            </h2>
          </div>
          <div className="featured-products-heading-side">
            <Link
              className="featured-products-catalog-link"
              to="/products"
              onClick={handleNavigateToProducts}
            ></Link>
          </div>
        </ScrollReveal>

        <div
          className="featured-products-marquee"
          aria-label="Featured products carousel"
        >
          <div className="featured-products-track">
            {marqueeProducts.map((product, index) => (
              <article
                key={`${product.name}-${index}`}
                className="featured-product-card"
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

                  <div className="featured-product-card-info">
                    <div>
                      <span>Rate</span>
                      <strong>{product.rate}</strong>
                    </div>
                    <div>
                      <span>Use</span>
                      <strong>{product.use}</strong>
                    </div>
                  </div>

                  <Link
                    className="featured-product-card-cta"
                    to="/products"
                    onClick={handleNavigateToProducts}
                  >
                    <span>View product</span>
                    <b aria-hidden="true">↗</b>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
