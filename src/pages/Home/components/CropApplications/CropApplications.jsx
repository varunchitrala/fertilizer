import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";
import "./CropApplications.css";

const crops = [
  { name: "Grapes", image: "/coursel-main.jpg", label: "Crop nutrition" },
  { name: "Pomegranate", image: "/coursel-2.jpg", label: "Crop nutrition" },
  { name: "Banana", image: "/coursel-3.jpg", label: "Crop nutrition" },
  { name: "Cotton", image: "/coursel-4.jpg", label: "Crop nutrition" },
];

function CropApplications() {
  return (
    <section className="crop-applications" aria-labelledby="crop-applications-title">
      <div className="header-container crop-applications-container">
        <ScrollReveal className="crop-applications-intro" distance="up">
          <div className="crop-applications-kicker">
            <span /> Agricultural applications
          </div>
          <div className="crop-applications-heading-wrap">
            <div>
              <span className="crop-applications-eyebrow">From crop to requirement</span>
              <h2 id="crop-applications-title">
                Solutions that start
                <br />
                <em>with the crop.</em>
              </h2>
            </div>
            <p>
              Explore the crops represented across our product information and
              discover the agricultural context behind our range.
            </p>
          </div>
        </ScrollReveal>

        <div className="crop-applications-layout">
          <ScrollReveal className="crop-applications-feature" distance="left">
            <img src="/coursel-main.jpg" alt="Grape crop in an agricultural field" loading="lazy" />
            <div className="crop-applications-feature-overlay" />
            <div className="crop-applications-feature-copy">
              <span>01 / Crop focus</span>
              <h3>Understand the application before choosing the product.</h3>
            </div>
          </ScrollReveal>

          <div className="crop-applications-crops">
            {crops.map((crop, index) => (
              <ScrollReveal key={crop.name} delay={index * 70} distance="right">
                <Link to="/products" className="crop-application-item">
                  <div className="crop-application-image">
                    <img src={crop.image} alt={`${crop.name} crop`} loading="lazy" />
                  </div>
                  <div className="crop-application-copy">
                    <span>{String(index + 1).padStart(2, "0")} · {crop.label}</span>
                    <h3>{crop.name}</h3>
                  </div>
                  <b aria-hidden="true">↗</b>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="crop-applications-footer" delay={280} distance="up">
          <p>Need help finding the right product for your crop?</p>
          <Link to="/contact" className="crop-applications-cta">
            <span>Discuss Your Requirement</span>
            <b aria-hidden="true">↗</b>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default CropApplications;
