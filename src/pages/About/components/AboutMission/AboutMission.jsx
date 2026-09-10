import "./AboutMission.css";
import ScrollReveal from "../../../../components/ScrollReveal";

const cards = [
  {
    label: "Our mission",
    title: "Reliable inputs. Better productivity.",
    text: "To provide reliable and affordable agricultural solutions that support higher productivity and sustainable growth.",
  },
  {
    label: "Our vision",
    title: "A trusted name in agriculture.",
    text: "To be a leading agricultural input provider known for quality, trust, and innovation.",
    accent: true,
  },
];

function AboutMission() {
  return (
    <section className="about-mission">
      <div className="container about-mission-grid">
        {cards.map((card, index) => (
          <ScrollReveal
            className={`about-mission-card${card.accent ? " about-mission-card-accent" : ""}`}
            distance={35}
            delay={index * 120}
            key={card.label}
          >
            <span>{card.label}</span>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default AboutMission;
