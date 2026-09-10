import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Gallery from "./Gallery";

function GalleryPage() {
  return (
    <>
      <Header />
      <main className="gallery-page">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default GalleryPage;