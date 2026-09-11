import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./ProductsHero.css";

function ProductsHero() {
  const visualRef = useRef(null);
  const frameRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;

      if (frameRef.current) {
        frameRef.current.style.setProperty("--parallax-x", `${current.current.x}px`);
        frameRef.current.style.setProperty("--parallax-y", `${current.current.y}px`);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handlePointerMove = (event) => {
    if (!visualRef.current || window.matchMedia("(max-width: 900px)").matches) return;

    const rect = visualRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    target.current = {
      x: x * 12,
      y: y * 10,
    };
  };

  const resetPointer = () => {
    target.current = { x: 0, y: 0 };
  };

  return (
    <section className="products-hero" aria-labelledby="products-hero-title">
      <div className="products-hero-backdrop" aria-hidden="true" />
      <div className="products-hero-rule" aria-hidden="true" />

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
          <div
            ref={visualRef}
            className={`products-hero-image-wrap ${isActive ? "is-active" : ""}`}
            onPointerMove={handlePointerMove}
            onPointerEnter={() => setIsActive(true)}
            onPointerLeave={() => {
              setIsActive(false);
              resetPointer();
            }}
          >
            <div ref={frameRef} className="products-hero-image-frame">
              <img
                src="/pest.jpg"
                alt="Agricultural field and crop cultivation"
              />
            </div>

            <div className="products-hero-image-overlay" aria-hidden="true" />

            <div className="products-hero-location">
              <span className="location-dot" />
              <span>Agricultural solutions</span>
            </div>

            <div className="products-hero-index" aria-hidden="true">01</div>

            <div className="products-hero-image-caption">
              <span>AGRIPEX</span>
              <span>PRODUCT RANGE</span>
            </div>

            <div className="products-hero-corner" aria-hidden="true" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ProductsHero;
