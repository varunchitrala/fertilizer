import { useState } from "react";
import ScrollReveal from "../../../../components/ScrollReveal";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="header-container contact-form-layout">
        <ScrollReveal className="contact-form-heading" distance="left">
          <div className="contact-section-marker">
            <span>02</span>
            <i />
            <small>Connect</small>
          </div>
          <span className="contact-kicker">Send an enquiry</span>
          <h2>
            Tell us
            <br />
            <em>what&apos;s next.</em>
          </h2>
          <p>
            Whether you need product information, technical guidance,
            distribution support or a business conversation, share the
            essentials and we&apos;ll take it from there.
          </p>
          <div className="contact-form-meta">
            <span>Response</span>
            <strong>Direct team follow-up</strong>
          </div>
          <div className="contact-trust-list">
            <span>
              <i>✓</i> Product guidance
            </span>
            <span>
              <i>✓</i> Application support
            </span>
            <span>
              <i>✓</i> Business enquiries
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className="contact-form-card"
          delay={180}
          distance="right"
        >
          {submitted ? (
            <div className="contact-success">
              <span className="contact-success-mark">✓</span>
              <span className="contact-kicker">Enquiry received</span>
              <h3>
                Thank you.
                <br />
                <em>We have your message.</em>
              </h3>
              <p>
                Your enquiry has been captured on this interface. Connect with
                the team directly by phone or email for a live response.
              </p>
              <div className="contact-success-links">
                <a href="tel:+917770047272">Call the team ↗</a>
                <a href="mailto:agripexpestiside1995@gmail.com">Email us ↗</a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-form-topline">
                <span>CONTACT FORM</span>
                <span>ENQ / 01</span>
              </div>
              <div className="contact-field-row">
                <Field
                  number="01"
                  name="Name"
                  inputProps={{
                    name: "name",
                    required: true,
                    placeholder: "Your full name",
                  }}
                  activeField={activeField}
                  setActiveField={setActiveField}
                  fieldNumber={1}
                />
                <Field
                  number="02"
                  name="Company"
                  inputProps={{
                    name: "company",
                    placeholder: "Company / Farm / Organisation",
                  }}
                  activeField={activeField}
                  setActiveField={setActiveField}
                  fieldNumber={2}
                />
              </div>
              <div className="contact-field-row">
                <Field
                  number="03"
                  name="Phone"
                  inputProps={{
                    name: "phone",
                    type: "tel",
                    required: true,
                    placeholder: "+91",
                  }}
                  activeField={activeField}
                  setActiveField={setActiveField}
                  fieldNumber={3}
                />
                <Field
                  number="04"
                  name="Email"
                  inputProps={{
                    name: "email",
                    type: "email",
                    required: true,
                    placeholder: "you@example.com",
                  }}
                  activeField={activeField}
                  setActiveField={setActiveField}
                  fieldNumber={4}
                />
              </div>
              <Field
                number="05"
                name="I'm interested in"
                activeField={activeField}
                setActiveField={setActiveField}
                fieldNumber={5}
                control="select"
              />
              <Field
                number="06"
                name="Message"
                activeField={activeField}
                setActiveField={setActiveField}
                fieldNumber={6}
                control="textarea"
              />
              <div className="contact-form-footer">
                <span>
                  Your details are used only to respond to this enquiry.
                </span>
                <button type="submit">
                  Send enquiry <b>↗</b>
                </button>
              </div>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

function Field({
  number,
  name,
  inputProps,
  activeField,
  setActiveField,
  fieldNumber,
  control = "input",
}) {
  const isActive = activeField === fieldNumber;
  const handleFocus = () => setActiveField(fieldNumber);
  const handleBlur = () => setActiveField(0);

  return (
    <label className={isActive ? "is-active" : ""}>
      <span>
        {number} / {name}
      </span>
      {control === "select" ? (
        <select
          name="topic"
          defaultValue=""
          required
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="" disabled>
            Select an enquiry type
          </option>
          <option>Product information</option>
          <option>Technical / application guidance</option>
          <option>Distribution / dealership</option>
          <option>Business enquiry</option>
          <option>Other</option>
        </select>
      ) : control === "textarea" ? (
        <textarea
          name="message"
          required
          placeholder="Tell us a little about what you need..."
          rows="4"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input {...inputProps} onFocus={handleFocus} onBlur={handleBlur} />
      )}
    </label>
  );
}

export default ContactForm;
