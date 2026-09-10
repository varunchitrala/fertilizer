import ScrollReveal from "../../../../components/ScrollReveal";
import "./ProductsHero.css";

function ProductsHero() {
  return (
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
  );
}

export default ProductsHero;
