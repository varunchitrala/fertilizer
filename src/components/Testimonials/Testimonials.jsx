import './Testimonials.css'

const testimonials = [
  {
    quote: 'Good agriculture starts with understanding the field. The right support at the right stage can make every season more productive.',
    name: 'A Farmer’s Perspective',
    role: 'Field experience',
    location: 'Maharashtra',
  },
  {
    quote: 'From soil preparation to crop protection, dependable agricultural inputs give farmers confidence throughout the growing cycle.',
    name: 'Growing With Confidence',
    role: 'Agricultural journey',
    location: 'Western India',
  },
  {
    quote: 'Healthy crops are built step by step. Better inputs, practical guidance and consistent care create stronger possibilities in every field.',
    name: 'The Field Story',
    role: 'Farmer-focused approach',
    location: 'India',
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="header-container testimonials-container">
        <div className="testimonials-heading">
          <div className="testimonials-kicker">
            <span /> The farmer perspective
          </div>

          <div className="testimonials-title-row">
            <div>
              <span className="testimonials-index">04 — FIELD STORIES</span>
              <h2>Every field has<br /><em>a story.</em></h2>
            </div>
            <p>
              Agriculture is personal. These stories represent the conversations, challenges and aspirations that shape better agricultural solutions.
            </p>
          </div>
        </div>

        <div className="testimonials-feature">
          <div className="testimonials-feature-quote">“</div>
          <blockquote>
            <span>Better agriculture is not about one big change.</span> It is about making the right decision at every stage — from the soil beneath us to the harvest ahead.
          </blockquote>
          <div className="testimonials-feature-meta">
            <span className="testimonials-meta-line" />
            <span>Inspired by the people who work the land</span>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article className={`testimonial-card testimonial-card-${index + 1}`} key={testimonial.name}>
              <div className="testimonial-card-top">
                <span>0{index + 1}</span>
                <span className="testimonial-arrow">↗</span>
              </div>

              <div className="testimonial-card-body">
                <p>“{testimonial.quote}”</p>
              </div>

              <div className="testimonial-person">
                <div className="testimonial-avatar" aria-hidden="true">
                  <span>{index === 0 ? 'FP' : index === 1 ? 'AG' : 'FS'}</span>
                </div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
                <span className="testimonial-location">{testimonial.location}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials-footer">
          <span>AGRIPEx / FIELD STORIES</span>
          <a href="#contact">Talk to our team <span>↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
