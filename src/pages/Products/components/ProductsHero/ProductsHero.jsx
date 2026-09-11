import ScrollReveal from "../../../../components/ScrollReveal";
import "./ProductsHero.css";

function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="products-hero-glow" />
      <div className="products-hero-grid" />

      <div className="container products-hero-inner">
        <ScrollReveal distance={35}>
          <div className="products-hero-copy">
            <span className="products-eyebrow">Agripex / Products</span>
            <h1>
              Solutions built for <em>better crops.</em>
            </h1>
            <p>
              Explore our range of fertilizers, crop nutrition products, and
              agricultural solutions created around practical farming needs.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="products-hero-visual" distance={25} delay={120}>
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-leaf hero-leaf-one" />
          <div className="hero-leaf hero-leaf-two" />

          <div className="hero-product-card">
            <div className="hero-card-top">
              <span>AGRIPEX</span>
              <span className="hero-card-dot" />
            </div>
            <div className="hero-formula">N · P · K</div>
            <div className="hero-card-title">Crop Nutrition</div>
            <div className="hero-card-line" />
            <div className="hero-card-stats">
              <div><strong>25+</strong><span>Solutions</span></div>
              <div><strong>3</strong><span>Key nutrients</span></div>
              <div><strong>360°</strong><span>Crop care</span></div>
            </div>
          </div>

          <div className="hero-float-tag hero-tag-one">Balanced Nutrition</div>
          <div className="hero-float-tag hero-tag-two">Precision · Growth</div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ProductsHero;
