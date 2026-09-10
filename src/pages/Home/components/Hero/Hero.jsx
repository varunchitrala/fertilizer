import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  {
    image: "/coursel-main.jpg",
    eyebrow: "Agripex • Since 1995",
    title: "Growing Better.",
    highlight: "Growing Together.",
    description:
      "Reliable agricultural solutions that help farmers protect crops, improve productivity and build a healthier tomorrow.",
  },
  {
    image: "/coursel-2.jpg",
    eyebrow: "Science Meets Agriculture",
    title: "Better Inputs.",
    highlight: "Better Yields.",
    description:
      "Quality fertilizers and crop protection solutions designed to support stronger crops from soil preparation to harvest.",
  },
  {
    image: "/coursel-3.jpg",
    eyebrow: "For Every Field",
    title: "Strengthening",
    highlight: "Indian Agriculture.",
    description:
      "Practical agricultural solutions built around the needs of farmers, their fields and a changing agricultural landscape.",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = (index, slideDirection = "next") => {
    setDirection(slideDirection);
    setActiveSlide(index);
  };

  const nextSlide = () => {
    goToSlide((activeSlide + 1) % slides.length, "next");
  };

  const previousSlide = () => {
    goToSlide((activeSlide - 1 + slides.length) % slides.length, "previous");
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setDirection("next");
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") previousSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const currentSlide = slides[activeSlide];

  return (
    <section
      className="hero"
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Agripex featured agricultural solutions"
    >
      <div className="hero-stage">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero-slide ${index === activeSlide ? "is-active" : ""}`}
            aria-hidden={index !== activeSlide}
          >
            <img src={slide.image} alt="" />
          </div>
        ))}
      </div>

      <div className="hero-vignette" />
      <div className="hero-grid" />

      <div className="header-container hero-content">
        <div
          className={`hero-copy hero-copy-${direction}`}
          key={`${activeSlide}-${direction}`}
        >
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            {currentSlide.eyebrow}
          </div>

          <h2>
            {currentSlide.title}
            <span>{currentSlide.highlight}</span>
          </h2>

          <p>{currentSlide.description}</p>

          <div className="hero-actions">
            <a href="#products" className="hero-button hero-button-primary">
              Explore Products
              <span className="hero-button-arrow">↗</span>
            </a>
            <a href="#about" className="hero-button hero-button-secondary">
              Discover Agripex
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <div
            className="hero-progress"
            aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}
          >
            <span className="hero-progress-current">0{activeSlide + 1}</span>
            <div className="hero-progress-track">
              <span key={activeSlide} className="hero-progress-bar" />
            </div>
            <span className="hero-progress-total">0{slides.length}</span>
          </div>

          <a
            className="hero-scroll-cue"
            href="#solutions"
            aria-label="Scroll to solutions"
          >
            <span className="hero-scroll-line" />
            <span>Scroll to explore</span>
          </a>

          <div className="hero-controls" aria-label="Hero carousel controls">
            <button
              type="button"
              className="hero-control"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              <span>←</span>
            </button>
            <button
              type="button"
              className="hero-control"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="hero-dots" aria-label="Hero slide navigation">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={`hero-dot ${index === activeSlide ? "is-active" : ""}`}
            onClick={() =>
              goToSlide(index, index > activeSlide ? "next" : "previous")
            }
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
          >
            <span />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
