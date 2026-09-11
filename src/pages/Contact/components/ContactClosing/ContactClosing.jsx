import { Link } from "react-router-dom";
import ScrollReveal from "../../../../components/ScrollReveal";

function ContactClosing() {
  return (
    <section className="contact-closing">
      <div className="contact-closing-line contact-closing-line-one" />
      <div className="contact-closing-line contact-closing-line-two" />
      <div className="header-container contact-closing-inner">
        <ScrollReveal distance="up">
          <span className="contact-kicker">04 / Keep the field moving</span>
          <h2>
            Good agriculture
            <br />
            <em>starts with a good conversation.</em>
          </h2>
          <Link to="/products" className="contact-closing-link">
            Explore products <b>↗</b>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ContactClosing;
