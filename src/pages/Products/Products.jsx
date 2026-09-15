import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import ProductsHero from "./components/ProductsHero/ProductsHero";
import "./Products.css";

function Products() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <Header />
      <main className="products-page">
        <ProductsHero />
        <ProductCatalog />
      </main>
      <Footer />
    </>
  );
}

export default Products;
