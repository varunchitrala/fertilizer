function TopBar() {
  return (
    <div className="top-bar">
      <div className="header-container top-bar-inner">
        <div className="top-contact">
          <a href="tel:+910000000000">+91 00000 00000</a>
          <a href="mailto:info@agriculture.com">info@agriculture.com</a>
        </div>
        <div className="top-social" aria-label="Social media links">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="YouTube">▶</a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
