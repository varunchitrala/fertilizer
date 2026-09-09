import { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const stories = [
  {
    image: '/coursel-3.jpg',
    quote: 'The best agricultural support is simple, timely and practical. Farmers need solutions that make sense in the field, not just on paper.',
    tag: 'FIELD EXPERIENCE',
    place: 'Maharashtra',
  },
  {
    image: '/coursel-2.jpg',
    quote: 'A healthy crop is built throughout the season. Good inputs matter, but consistency and the right decision at each stage matter just as much.',
    tag: 'CROP JOURNEY',
    place: 'Western India',
  },
  {
    image: '/main.jpg',
    quote: 'When agricultural products are backed by dependable service, every season starts with a little more confidence.',
    tag: 'FARMER FIRST',
    place: 'India',
  },
]

function Testimonials() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (isPaused) return undefined

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % stories.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [isPaused])

  const selectStory = (index) => setActive(index)

  return (
    <section
      className="testimonials"
      id="testimonials"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="header-container testimonials-container">
        <div className="testimonials-intro">
          <div>
            <span className="testimonials-eyebrow"><i /> Voices from the field</span>
            <span className="testimonials-number">04 / 05</span>
          </div>
          <h2>Built around<br /><em>real farming.</em></h2>
          <p>
            Every season brings different soil, weather and crop challenges. Our approach starts by understanding what happens in the field.
          </p>
        </div>

        <div className="story-stage">
          <div className="story-image-wrap">
            {stories.map((story, index) => (
              <div
                className={`story-image ${index === active ? 'is-active' : ''}`}
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
            <blockquote key={active}>
              “{stories[active].quote}”
            </blockquote>
            <div className="story-meta">
              <span className="story-meta-line" />
              <span>Representative field perspective</span>
              <span className="story-place">{stories[active].place}</span>
            </div>
          </div>
        </div>

        <div className="story-controls" aria-label="Field story navigation">
          <div className="story-progress">
            {stories.map((story, index) => (
              <button
                type="button"
                className={`story-dot ${index === active ? 'is-active' : ''}`}
                key={story.tag}
                onClick={() => selectStory(index)}
                aria-label={`Show field story ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
              >
                <span />
              </button>
            ))}
          </div>
          <div className="story-counter">0{active + 1} <span>/ 03</span></div>
          <div className="story-hint">Hover to pause</div>
        </div>

        <div className="testimonials-note">
          <span>ABOUT THESE STORIES</span>
          <p>Representative perspectives are used here until verified customer testimonials are available.</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
