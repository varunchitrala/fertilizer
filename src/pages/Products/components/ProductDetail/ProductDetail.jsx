import { Link, useParams } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./ProductDetail.css";

const products = {
  "calcium-nitrate": {
    name: "Calcium Nitrate", image: "/a1.jpg", description: "Calcium and nitrogen fertilizer for crop development and balanced nutrition.",
    overview: "Calcium Nitrate fortified with Magnesium is a highly soluble liquid fertilizer providing nitrogen, calcium, and magnesium. It supports healthy vegetative growth, strong cell structure, and improved fruit quality, enhanced by efficient nutrient availability to the plant.",
    features: [["EA² Technology", "Enhanced nutrient uptake and increased efficacy, with improved nutrient translocation and faster results."],["S² Technology", "Concentration beyond what is normally achievable in liquid formulations, with improved nutrient translocation and faster results."],["High Quality Raw Materials", "Designed around quality raw materials to support maximum efficacy and safety."],["Liquid Form", "Easy to measure and convenient to use."],["Highly Concentrated", "Reduced doses and increased efficacy resulting in lower application costs."],["Enhanced Mix Profile", "Facilitates combined application for reduced application cost."],["Stability", "Certified manufacturing processes and testing support a long shelf life."]],
    application:["Fertigation","Drip irrigation","Foliar Spray"], dosage:["Foliar Spray: 3 ml to 5 ml / Litre water","Drip Irrigation: 3000 - 5000 ml / per acre"], crops:["Grapes","Pomegranate","Banana","Cotton","Tomato","Onion","Sugarcane","Ginger","Turmeric","Watermelon"],
    specifications:[["Base","Liquid Gel"],["Total Nitrogen","15.50% Wt/Wt · 20.50% Wt/Vol"],["Total Calcium (Ca)","19.00% Wt/Wt · 25.10% Wt/Vol"],["Total Magnesium (Mg)","02.00% Wt/Wt · 2.60% Wt/Vol"],["Trace Elements (EDTA)","Yes"],["pH","5.5-6.5"],["Specific Gravity","1.32-1.35 @18°"]], storage:"Store in cool place, away from direct sunlight & heat.", caution:"Keep out of reach of children. Shake well before use. For agriculture use only.", manufacturer:"AGRIPEX PESTICIDE FERTILIZER AND CHEMICAL PRIVATE LIMITED"
  }
};

function ProductDetail(){
 const {productId}=useParams(); const product=products[productId];
 if(!product) return <><Header/><main className="product-detail-page product-not-found"><div className="container"><span>PRODUCT NOT FOUND</span><h1>This product page is not available yet.</h1><Link to="/products">← Back to products</Link></div></main><Footer/></>;
 return <><Header/><main className="product-detail-page"><div className="container">
  <Link className="product-back" to="/products">← Back to products</Link>
  <div className="product-detail-hero"><ScrollReveal className="product-detail-visual" distance={30}><div className="product-detail-image"><img src={product.image} alt={product.name}/><span>AGRIPEX / PRODUCT</span></div></ScrollReveal><ScrollReveal className="product-detail-intro" distance={35} delay={100}><span className="product-detail-eyebrow">Agricultural product range</span><h1>{product.name}</h1><p>{product.description}</p><div className="product-detail-meta-line"><span>AGRIPEX</span><span>PRODUCT INFORMATION</span></div></ScrollReveal></div>
  <section className="product-detail-section product-overview"><span className="product-detail-label">01 / Product overview</span><h2>Designed around <em>practical crop needs.</em></h2><p>{product.overview}</p></section>
  <section className="product-detail-section"><span className="product-detail-label">02 / Key features</span><div className="product-feature-list">{product.features.map(([title,text],i)=><div className="product-feature" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
  <section className="product-detail-section"><span className="product-detail-label">03 / Application guide</span><div className="product-guide-grid"><div><h3>Application</h3><div className="product-tags">{product.application.map(x=><b key={x}>{x}</b>)}</div></div><div><h3>Recommended crops</h3><div className="product-tags">{product.crops.map(x=><b key={x}>{x}</b>)}</div></div><div><h3>Dosage</h3><ul>{product.dosage.map(x=><li key={x}>{x}</li>)}</ul></div></div></section>
  <section className="product-detail-section"><span className="product-detail-label">04 / Specifications</span><div className="product-specs">{product.specifications.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></section>
  <section className="product-detail-section"><span className="product-detail-label">05 / Additional information</span><div className="product-info-grid"><div><span>Storage</span><p>{product.storage}</p></div><div><span>Caution</span><p>{product.caution}</p></div><div><span>Manufacturer</span><p>{product.manufacturer}</p></div></div></section>
  <div className="product-detail-enquiry"><div><span>Need product information?</span><h2>Talk to the Agripex team.</h2></div><Link to="/contact">Enquire about this product <b>→</b></Link></div>
 </div></main><Footer/></>;
}
export default ProductDetail;
