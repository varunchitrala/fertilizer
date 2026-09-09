import './Solutions.css'

const solutions = [
  { number: '01', title: 'Healthy Soil', text: 'Supporting better nutrient management and stronger soil foundations for productive fields.', icon: '✦' },
  { number: '02', title: 'Stronger Crops', text: 'Agricultural inputs designed to support healthy crop growth throughout the growing cycle.', icon: '↗' },
  { number: '03', title: 'Crop Protection', text: 'Practical solutions that help farmers protect crops and maintain field performance.', icon: '⌁' },
  { number: '04', title: 'Better Yields', text: 'Reliable solutions focused on helping farmers improve productivity and consistency.', icon: '◒' },
]

function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="header-container solutions-container">
        <div className="solutions-intro">
          <div className="solutions-kicker"><span /> What We Do</div>
          <div className="solutions-heading-wrap">
            <h2>From <em>soil</em><br />to <strong>success.</strong></h2>
            <p>Agriculture is more than growing a crop. It is about understanding the field, solving real challenges and giving every crop the right support to grow.</p>
          </div>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.number}>
              <div className="solution-card-top">
                <span className="solution-number">{solution.number}</span>
                <span className="solution-icon" aria-hidden="true">{solution.icon}</span>
              </div>
              <div className="solution-card-content">
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </div>
              <div className="solution-card-line" />
            </article>
          ))}
        </div>

        <div className="solutions-footer">
          <span>Built around the needs of agriculture</span>
          <a href="#products">Explore our solutions <span>↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default Solutions
