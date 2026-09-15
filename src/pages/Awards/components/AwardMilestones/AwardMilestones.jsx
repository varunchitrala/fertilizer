import ScrollReveal from "../../../../components/ScrollReveal";

function AwardMilestones({ milestones }) {
  return (
    <section className="awards-milestones-section" aria-label="Key Milestones">
      <div className="awards-container">
        <div className="awards-milestones-grid">
          {milestones.map((milestone, index) => (
            <ScrollReveal
              key={milestone.label}
              distance="up"
              delay={index * 70}
            >
              <div className="milestone-card">
                <div className="milestone-number">{milestone.value}</div>
                <span className="milestone-label">{milestone.label}</span>
                <span className="milestone-note">{milestone.note}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardMilestones;
