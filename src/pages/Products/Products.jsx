import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import ProductsHero from "./components/ProductsHero/ProductsHero";
import "./Products.css";
function Products() {
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
