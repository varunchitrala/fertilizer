import './Solutions.css'
import '../../../../components/ScrollReveal'

const solutions = [
  { number: '01', title: 'Healthy Soil', text: 'Supporting better nutrient management and stronger soil foundations for productive fields.', image: '/coursel-2.jpg', tag: 'Foundation' },
  { number: '02', title: 'Stronger Crops', text: 'Agricultural inputs designed to support healthy crop growth throughout the growing cycle.', image: '/coursel-main.jpg', tag: 'Growth' },
  { number: '03', title: 'Crop Protection', text: 'Practical solutions that help farmers protect crops and maintain field performance.', image: '/coursel-3.jpg', tag: 'Protection' },
  { number: '04', title: 'Better Yields', text: 'Reliable solutions focused on helping farmers improve productivity and consistency.', image: '/coursel-4.jpg', tag: 'Outcome' },
]

function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="header-container solutions-container">
        <ScrollReveal className="solutions-intro" distance="up">
          <div className="solutions-kicker"><span /> What We Do</div>
          <div className="solutions-heading-wrap">
            <h2>From <em>soil</em><br />to <strong>success.</strong></h2>
            <p>Agriculture is more than growing a crop. It is about understanding the field, solving real challenges and giving every crop the right support to grow.</p>
          </div>
        </ScrollReveal>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.number} delay={index * 100} distance={index % 2 === 0 ? 'up' : 'down'}>
              <article className="solution-card">
                <div className="solution-card-image">
                  <img src={solution.image} alt="" loading="lazy" />
                  <div className="solution-card-overlay" />
                  <span className="solution-tag">{solution.tag}</span>
                  <span className="solution-number">{solution.number}</span>
                </div>
                <div className="solution-card-content">
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                  <span className="solution-card-link" aria-hidden="true">Explore <span>↗</span></span>
                </div>
                <div className="solution-card-line" />
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="solutions-footer" delay={350} distance="up">
          <span>Built around the needs of agriculture</span>
          <a href="#products">Explore our solutions <span>↗</span></a>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Solutions
