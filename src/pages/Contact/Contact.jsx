import ContactChannels from "./components/ContactChannels/ContactChannels";
import ContactClosing from "./components/ContactClosing/ContactClosing";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHero from "./components/ContactHero/ContactHero";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <ContactHero />
      <ContactForm />
      <ContactChannels />
      <ContactClosing />
    </main>
  );
}

export default Contact;
