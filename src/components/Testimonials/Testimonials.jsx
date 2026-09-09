import './Testimonials.css'

const testimonials = [
  {
    number: '01',
    quote: 'Sample farmer feedback will appear here — replace this copy with a verified customer story before the website goes live.',
    name: 'Verified farmer story',
    location: 'Maharashtra',
  },
  {
    number: '02',
    quote: 'Sample farmer feedback will appear here — use this space to highlight a specific product experience, field result or service strength.',
    name: 'Verified farmer story',
    location: 'Maharashtra',
  },
  {
    number: '03',
    quote: 'Sample farmer feedback will appear here — keep the final testimonial authentic, specific and connected to a real customer experience.',
    name: 'Verified farmer story',
    location: 'Maharashtra',
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="header-container testimonials-container">
        <div className="testimonials-heading">
          <div className="testimonials-kicker">
            <span /> Voices from the field
          </div>

          <div className="testimonials-title-row">
            <h2>Built for the field.<br /><em>Valued by farmers.</em></h2>
            <p>
              Real experiences should sit at the heart of the story. This section is ready for verified farmer testimonials and field stories.
            </p>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.number}>
              <div className="testimonial-card-top">
                <span className="testimonial-number">{testimonial.number}</span>
                <span className="testimonial-mark">“</span>
              </div>

              <blockquote>{testimonial.quote}</blockquote>

              <div className="testimonial-person">
                <div className="testimonial-avatar" aria-hidden="true">AG</div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials-footer">
          <span>Customer stories • Field experience • Trust</span>
          <a href="#contact">Share your experience <span>↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
