import './Footer.css'
import ScrollReveal from '../ScrollReveal'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-orbit footer-orbit-one" />
      <div className="footer-orbit footer-orbit-two" />

      <div className="header-container footer-container">
        <ScrollReveal className="footer-cta" distance="up">
          <div>
            <span className="footer-eyebrow"><i /> Agriculture, with purpose</span>
            <h2>Let&apos;s grow<br /><em>what matters.</em></h2>
          </div>
          <a className="footer-cta-button" href="mailto:agripexpestiside1995@gmail.com">
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
              {footerLinks.map((link) => (
                <a href={link.href} key={link.label}>{link.label}</a>
              ))}
            </nav>
          </ScrollReveal>

          <ScrollReveal className="footer-column footer-contact" delay={260} distance="right">
            <span className="footer-column-title">Connect</span>
            <a href="tel:+917770047272">+91 7770047272</a>
            <a href="mailto:agripexpestiside1995@gmail.com">agripexpestiside1995@gmail.com</a>
            <div className="footer-socials" aria-label="Social media links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </ScrollReveal>
        </div>

        <div className="footer-wordmark" aria-hidden="true">AGRIPEX</div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Agripex Pesticide Fertilizer &amp; Chemical Pvt. Ltd.</span>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
          <span className="footer-made">Growing with India <b>•</b></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
