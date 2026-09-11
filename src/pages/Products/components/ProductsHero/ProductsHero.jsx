import ScrollReveal from "../../../../components/ScrollReveal";
import "./ProductsHero.css";

function ProductsHero() {
  return (
    <section className="products-hero" aria-labelledby="products-hero-title">
      <div className="products-hero-field" aria-hidden="true" />

      <div className="container products-hero-inner">
        <ScrollReveal className="products-hero-copy" distance={35}>
          <span className="products-eyebrow">Agripex / Product range</span>
          <h1 id="products-hero-title">
            Agricultural inputs for <em>practical crop needs.</em>
          </h1>
          <p>
            Explore the Agripex product range across fertilizers, crop nutrition,
            and agricultural inputs — presented clearly so you can find the
            product relevant to your crop and requirement.
          </p>
          <div className="products-hero-meta" aria-label="Product range summary">
            <div>
              <strong>25+</strong>
              <span>Products in range</span>
            </div>
            <div>
              <strong>N · P · K</strong>
              <span>Core crop nutrients</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="products-hero-visual" distance={45} delay={120}>
          <div className="products-hero-image-wrap">
            <img
              src="/pest.jpg"
              alt="Agricultural field and crop cultivation"
            />
            <div className="products-hero-image-caption">
              <span>AGRIPEX</span>
              <span>Agricultural solutions</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ProductsHero;
