import Header from "../../components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutPreview from "./components/AboutPreview/AboutPreview";
import Solutions from "./components/Solutions/Solutions";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import "./home-products-preview.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <Solutions />
        <section className="home-products-preview" id="products" aria-labelledby="home-products-title">
          <div className="header-container">
            <div className="home-products-preview-heading">
              <div>
                <span className="home-products-preview-kicker">Our range</span>
                <h2 id="home-products-title">Products made for the field.</h2>
              </div>
              <p>
                Explore selected products from our agricultural range. Open the
                catalogue to view complete technical details and product information.
              </p>
            </div>

            <ProductsPreview />
          </div>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

function ProductsPreview() {
  const featuredProducts = [
    { name: "Calcium Nitrate", type: "Calcium + Magnesium", image: "/a1.jpg" },
    { name: "00:50:62", type: "Water-soluble fertilizer", image: "/a2.jpg" },
    { name: "Calibor", type: "Micronutrient solution", image: "/a3.jpg" },
  ];

  return (
    <div className="home-products-preview-grid">
      {featuredProducts.map((product, index) => (
        <article className={`home-product-card home-product-card-${index + 1}`} key={product.name}>
          <div className="home-product-card-image">
            <img src={product.image} alt={`${product.name} product`} loading="lazy" />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="home-product-card-content">
            <span>{product.type}</span>
            <h3>{product.name}</h3>
            <a href="/products" className="home-product-card-link">
              View product details <b aria-hidden="true">↗</b>
            </a>
          </div>
        </article>
      ))}

      <a className="home-products-catalog-link" href="/products">
        <span>View complete catalogue</span>
        <b aria-hidden="true">↗</b>
      </a>
    </div>
  );
}

export default Home;
