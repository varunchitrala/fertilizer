import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="header-container hero-content">
        <div className="hero-copy">
          <span className="hero-eyebrow">Trusted Agricultural Solutions</span>
          <h2>Growing Better.<br />Growing Together.</h2>
          <p>
            Quality pesticides, fertilizers and agricultural solutions designed
            to support healthier crops and a better future for farmers.
          </p>
          <div className="hero-actions">
            <a href="#products" className="hero-button hero-button-primary">
              Explore Products
            </a>
            <a href="#about" className="hero-button hero-button-secondary">
              Discover Agripex
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
