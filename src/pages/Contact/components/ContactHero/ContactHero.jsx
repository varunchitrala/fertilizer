import ScrollReveal from "../../../../components/ScrollReveal";

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-noise" />
      <div className="contact-hero-grid" />
      <div className="contact-hero-orbit contact-hero-orbit-one" />
      <div className="contact-hero-orbit contact-hero-orbit-two" />
      <div className="header-container contact-hero-inner">
        <ScrollReveal className="contact-hero-copy" distance="up">
          <div className="contact-breadcrumb">
            <span>01</span>
            <i /> Contact / Start a conversation
          </div>
          <h1>
            Let&apos;s grow
            <br />
            <em>something better.</em>
          </h1>
          <p>
            Tell us what you need, where you&apos;re working and what
            you&apos;re trying to achieve. Our team will help you find the right
            next step.
          </p>
          <a className="contact-hero-action" href="#contact-form">
            <span>Start an enquiry</span>
            <b>↓</b>
          </a>
        </ScrollReveal>
        <ScrollReveal
          className="contact-hero-side"
          delay={180}
          distance="right"
        >
          <div className="contact-hero-coordinate">
            20° 00&apos; N<br />
            73° 47&apos; E
          </div>
          <div className="contact-hero-side-copy">
            Built close to the realities of Indian agriculture.
          </div>
          <div className="contact-hero-ring">
            <span>AGRIPEX</span>
            <b>↘</b>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ContactHero;
