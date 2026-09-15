import { Link } from "react-router-dom";
import "./Footer.css";
import ScrollReveal from "../ScrollReveal";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Awards", href: "/awards" },
  { label: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-orbit footer-orbit-one" />
      <div className="footer-orbit footer-orbit-two" />

      <div className="header-container footer-container">
        <ScrollReveal className="footer-cta" distance="up">
          <div>
            <span className="footer-eyebrow">
              <i /> Agriculture, with purpose
            </span>
            <h2>
              Let&apos;s grow
              <br />
              <em>what matters.</em>
            </h2>
          </div>
          <a
            className="footer-cta-button"
            href="mailto:agripexpestiside1995@gmail.com"
          >
            <span>Start a conversation</span>
            <strong>↗</strong>
          </a>
        </ScrollReveal>

        <div className="footer-main">
          <ScrollReveal className="footer-brand" delay={100} distance="left">
            <div className="footer-logo-box">
              <img src="/main.jpg" alt="Agripex logo" />
            </div>
            <p>Agripex Pesticide Fertilizer &amp; Chemical Pvt. Ltd.</p>
            <span>Supporting Indian agriculture since 1995.</span>
          </ScrollReveal>

          <ScrollReveal className="footer-column" delay={180} distance="up">
            <span className="footer-column-title">Explore</span>
            <nav aria-label="Footer navigation">
              {footerLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link to={link.href} key={link.label}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </ScrollReveal>

          <ScrollReveal
            className="footer-column footer-contact"
            delay={240}
            distance="up"
          >
            <span className="footer-column-title">Contact Us</span>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <a href="tel:+917770047272" className="footer-contact-link">
                  +91 7770047272
                </a>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <a href="mailto:agripexpestiside1995@gmail.com" className="footer-contact-link">
                  agripexpestiside1995@gmail.com
                </a>
              </div>

              <div className="footer-contact-item footer-address-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=S+No.+29%2F3%2C+NP+Jain+Mandir%2C+Vilholi+shivar%2C+Vilholi%2C+Nashik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link footer-address-link"
                >
                  S No. 29/3, NP Jain Mandir,<br />Vilholi shivar, Vilholi, Nashik
                </a>
              </div>
            </div>

            <div className="footer-socials" aria-label="Social media links">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ◎
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="YouTube">
                ▶
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="footer-column footer-map-column"
            delay={320}
            distance="right"
          >
            <span className="footer-column-title">Location</span>
            <div className="footer-map-card">
              <iframe
                title="Agripex Location - S No. 29/3, NP Jain Mandir, Vilholi shivar, Vilholi, Nashik"
                src="https://maps.google.com/maps?q=S+No.+29%2F3%2C+NP+Jain+Mandir%2C+Vilholi+shivar%2C+Vilholi%2C+Nashik&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="footer-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=S+No.+29%2F3%2C+NP+Jain+Mandir%2C+Vilholi+shivar%2C+Vilholi%2C+Nashik"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-action-bar"
              >
                <span>Open in Google Maps</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          AGRIPEX
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Agripex Pesticide Fertilizer &amp;
            Chemical Pvt. Ltd.
          </span>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
          <span className="footer-made">
            Growing with India <b>•</b>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
