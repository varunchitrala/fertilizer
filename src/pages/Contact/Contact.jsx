import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactChannels from "./components/ContactChannels/ContactChannels";
import ContactClosing from "./components/ContactClosing/ContactClosing";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHero from "./components/ContactHero/ContactHero";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <ContactHero />
        <ContactForm />
        <ContactChannels />
        <ContactClosing />
      </main>
      <Footer />
    </>
  );
}

export default Contact;
