import { useEffect, useState } from "react";
import "./Testimonials.css";
import ScrollReveal from "../../../../components/ScrollReveal";

const stories = [
  {
    image: "/farmer-1.jpg",
    quote:
      "The best agricultural support is simple, timely and practical. Farmers need solutions that make sense in the field, not just on paper.",
    tag: "FIELD EXPERIENCE",
    place: "Maharashtra",
  },
  {
    image: "/agriculture.jpg",
    quote:
      "A healthy crop is built throughout the season. Good inputs matter, but consistency and the right decision at each stage matter just as much.",
    tag: "CROP JOURNEY",
    place: "Western India",
  },
  {
    image: "/woman.jpg",
    quote:
      "When agricultural products are backed by dependable service, every season starts with a little more confidence.",
    tag: "FARMER FIRST",
    place: "India",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % stories.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  const selectStory = (index) => setActive(index);

  return (
    <section className="testimonials" id="testimonials">
      <div className="header-container testimonials-container">
        <ScrollReveal className="testimonials-intro" distance="left">
          <span className="testimonials-eyebrow">
            <i /> Voices from the field
          </span>
          <h2>
            Built around <em>real farming.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal className="story-stage" delay={150} distance="up" >
          <div className="story-image-wrap">
            {stories.map((story, index) => (
              <div
                className={`story-image ${index === active ? "is-active" : ""}`}
                key={story.image}
                aria-hidden={index !== active}
              >
                <img src={story.image} alt="Agricultural field" />
              </div>
            ))}
            <div className="story-image-overlay" />
            <div className="story-image-label">AGRIPEx / FIELD NOTES</div>
          </div>

          <div className="story-copy">
            <span className="story-label">{stories[active].tag}</span>
            <blockquote key={active}>“{stories[active].quote}”</blockquote>
            <div className="story-meta">
              <span className="story-meta-line" />
              <span>Representative field perspective</span>
              <span className="story-place">{stories[active].place}</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="story-controls" delay={250} distance="right">
          <div className="story-progress">
            {stories.map((story, index) => (
              <button
                type="button"
                className={`story-dot ${index === active ? "is-active" : ""}`}
                key={story.tag}
                onClick={() => selectStory(index)}
                aria-label={`Show field story ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
              >
                <span />
              </button>
            ))}
          </div>
          <div className="story-counter">
            0{active + 1} <span>/ 03</span>
          </div>
          <div className="story-hint">Auto rotating</div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Testimonials;
