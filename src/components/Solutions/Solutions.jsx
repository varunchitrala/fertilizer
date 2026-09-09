import { useEffect, useRef, useState } from 'react'
import './Solutions.css'

const solutions = [
  {
    number: '01',
    title: 'Healthy Soil',
    text: 'Supporting better nutrient management and stronger soil foundations for productive fields.',
    image: '/coursel-main.jpg',
    tag: 'Foundation',
  },
  {
    number: '02',
    title: 'Stronger Crops',
    text: 'Agricultural inputs designed to support healthy crop growth throughout the growing cycle.',
    image: '/coursel-2.jpg',
    tag: 'Growth',
  },
  {
    number: '03',
    title: 'Crop Protection',
    text: 'Practical solutions that help farmers protect crops and maintain field performance.',
    image: '/coursel-3.jpg',
    tag: 'Protection',
  },
  {
    number: '04',
    title: 'Better Yields',
    text: 'Reliable solutions focused on helping farmers improve productivity and consistency.',
    image: '/main.jpg',
    tag: 'Outcome',
  },
]

function Solutions() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`solutions ${isVisible ? 'is-visible' : ''}`}
      id="solutions"
      ref={sectionRef}
    >
      <div className="header-container solutions-container">
        <div className="solutions-intro">
          <div className="solutions-kicker"><span /> What We Do</div>
          <div className="solutions-heading-wrap">
            <h2>From <em>soil</em><br />to <strong>success.</strong></h2>
            <p>Agriculture is more than growing a crop. It is about understanding the field, solving real challenges and giving every crop the right support to grow.</p>
          </div>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <article
              className="solution-card"
              key={solution.number}
              style={{ '--card-delay': `${index * 90}ms` }}
            >
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
