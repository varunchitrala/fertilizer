import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ScrollReveal";
import "./Contact.css";

const contactChannels = [
  {
    number: "01",
    label: "CALL",
    title: "+91 77700 47272",
    text: "Speak with our team about products, application guidance or business enquiries.",
    href: "tel:+917770047272",
  },
  {
    number: "02",
    label: "EMAIL",
    title: "agripexpestiside1995@gmail.com",
    text: "Send us your enquiry and our team can follow up with the right information.",
    href: "mailto:agripexpestiside1995@gmail.com",
  },
  {
    number: "03",
    label: "WEB",
    title: "Explore AGRIPEX",
    text: "Review our product range and discover the agricultural solutions we offer.",
    href: "/products",
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.8, 1), 1);
      document.documentElement.style.setProperty("--contact-scroll", progress.toFixed(3));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-noise" />
        <div className="contact-hero-grid" />
        <div className="contact-hero-orbit contact-hero-orbit-one" />
        <div className="contact-hero-orbit contact-hero-orbit-two" />
        <div className="header-container contact-hero-inner">
          <ScrollReveal className="contact-hero-copy" distance="up">
            <div className="contact-breadcrumb"><span>05</span><i /> Contact / Start a conversation</div>
            <h1>
              Let&apos;s grow
              <br />
              <em>something better.</em>
            </h1>
            <p>
              Tell us what you need, where you&apos;re working and what you&apos;re trying to achieve. Our team will help you find the right next step.
            </p>
            <div className="contact-scroll-cue"><span /> Scroll to connect</div>
          </ScrollReveal>

          <ScrollReveal className="contact-hero-side" delay={180} distance="right">
            <div className="contact-hero-coordinate">20° 00&apos; N<br />73° 47&apos; E</div>
            <div className="contact-hero-side-copy">Built close to the realities of Indian agriculture.</div>
            <div className="contact-hero-ring"><span>AGRIPEX</span><b>↘</b></div>
          </ScrollReveal>
        </div>
      </section>

      <section className="contact-intro-section">
        <div className="header-container contact-intro-grid">
          <ScrollReveal className="contact-section-marker" distance="left">
            <span>01</span>
            <i />
            <small>Connect</small>
          </ScrollReveal>
          <ScrollReveal className="contact-intro-copy" delay={120} distance="up">
            <span className="contact-kicker">The right conversation starts here</span>
            <h2>Practical support.<br /><em>Human connection.</em></h2>
            <p>Whether you are looking for product information, technical guidance, distribution opportunities or a business conversation, reach the team directly.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="header-container contact-form-layout">
          <ScrollReveal className="contact-form-heading" distance="left">
            <span className="contact-kicker">02 / Send an enquiry</span>
            <h2>Tell us<br /><em>what&apos;s next.</em></h2>
            <p>Share the essentials. We&apos;ll take it from there.</p>
            <div className="contact-form-meta"><span>Response</span><strong>Direct team follow-up</strong></div>
          </ScrollReveal>

          <ScrollReveal className="contact-form-card" delay={180} distance="right">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success-mark">✓</span>
                <span className="contact-kicker">Enquiry received</span>
                <h3>Thank you.<br /><em>We have your message.</em></h3>
                <p>Your enquiry has been captured on this interface. Connect with the team directly by phone or email for a live response.</p>
                <div className="contact-success-links">
                  <a href="tel:+917770047272">Call the team ↗</a>
                  <a href="mailto:agripexpestiside1995@gmail.com">Email us ↗</a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form-topline"><span>CONTACT FORM</span><span>ENQ / 01</span></div>
                <div className="contact-field-row">
                  <label className={activeField === 1 ? "is-active" : ""}>
                    <span>01 / Name</span>
                    <input name="name" required placeholder="Your full name" onFocus={() => setActiveField(1)} onBlur={() => setActiveField(0)} />
                  </label>
                  <label className={activeField === 2 ? "is-active" : ""}>
                    <span>02 / Company</span>
                    <input name="company" placeholder="Company / Farm / Organisation" onFocus={() => setActiveField(2)} onBlur={() => setActiveField(0)} />
                  </label>
                </div>
                <div className="contact-field-row">
                  <label className={activeField === 3 ? "is-active" : ""}>
                    <span>03 / Phone</span>
                    <input name="phone" type="tel" required placeholder="+91" onFocus={() => setActiveField(3)} onBlur={() => setActiveField(0)} />
                  </label>
                  <label className={activeField === 4 ? "is-active" : ""}>
                    <span>04 / Email</span>
                    <input name="email" type="email" required placeholder="you@example.com" onFocus={() => setActiveField(4)} onBlur={() => setActiveField(0)} />
                  </label>
                </div>
                <label className={activeField === 5 ? "is-active" : ""}>
                  <span>05 / I&apos;m interested in</span>
                  <select name="topic" defaultValue="" onFocus={() => setActiveField(5)} onBlur={() => setActiveField(0)} required>
                    <option value="" disabled>Select an enquiry type</option>
                    <option>Product information</option>
                    <option>Technical / application guidance</option>
                    <option>Distribution / dealership</option>
                    <option>Business enquiry</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className={activeField === 6 ? "is-active" : ""}>
                  <span>06 / Message</span>
                  <textarea name="message" required placeholder="Tell us a little about what you need..." rows="5" onFocus={() => setActiveField(6)} onBlur={() => setActiveField(0)} />
                </label>
                <div className="contact-form-footer">
                  <span>By submitting, you are starting a direct enquiry with AGRIPEX.</span>
                  <button type="submit">Send enquiry <b>↗</b></button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      <section className="contact-channels-section">
        <div className="header-container">
          <ScrollReveal className="contact-channel-heading" distance="up">
            <span className="contact-kicker">03 / Direct lines</span>
            <h2>Or reach us<br /><em>directly.</em></h2>
          </ScrollReveal>
          <div className="contact-channel-grid">
            {contactChannels.map((channel, index) => (
              <ScrollReveal key={channel.number} delay={index * 90} distance={index === 1 ? "up" : index === 0 ? "left" : "right"}>
                <a className="contact-channel" href={channel.href}>
                  <div className="contact-channel-top"><span>{channel.number}</span><i>↗</i></div>
                  <span className="contact-channel-label">{channel.label}</span>
                  <h3>{channel.title}</h3>
                  <p>{channel.text}</p>
                  <span className="contact-channel-line" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-closing">
        <div className="contact-closing-line contact-closing-line-one" />
        <div className="contact-closing-line contact-closing-line-two" />
        <div className="header-container contact-closing-inner">
          <ScrollReveal distance="up">
            <span className="contact-kicker">04 / Keep the field moving</span>
            <h2>Good agriculture<br /><em>starts with a good conversation.</em></h2>
            <Link to="/products" className="contact-closing-link">Explore products <b>↗</b></Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default Contact;
