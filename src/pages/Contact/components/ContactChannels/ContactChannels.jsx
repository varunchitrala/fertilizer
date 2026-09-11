import ScrollReveal from "../../../../components/ScrollReveal";

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
    label: "PRODUCTS",
    title: "Explore AGRIPEX",
    text: "Review our product range and discover the agricultural solutions we offer.",
    href: "/products",
  },
];

function ContactChannels() {
  return (
    <section className="contact-channels-section">
      <div className="header-container">
        <ScrollReveal className="contact-channel-heading" distance="up">
          <div>
            <span className="contact-kicker">03 / Direct lines</span>
            <h2>
              Or reach us
              <br />
              <em>directly.</em>
            </h2>
          </div>
          <p>
            Prefer a direct conversation? Choose the channel that works best for
            you.
          </p>
        </ScrollReveal>
        <div className="contact-channel-grid">
          {contactChannels.map((channel, index) => (
            <ScrollReveal
              key={channel.number}
              delay={index * 90}
              distance={index === 1 ? "up" : index === 0 ? "left" : "right"}
            >
              <a className="contact-channel" href={channel.href}>
                <div className="contact-channel-top">
                  <span>{channel.number}</span>
                  <i>↗</i>
                </div>
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
  );
}

export default ContactChannels;
