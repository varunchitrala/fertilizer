import { useState } from 'react'
import './Nav.css'

const navItems = [
  { label: 'Home', mr: 'मुख्यपृष्ठ', href: '#' },
  { label: 'About', mr: 'आमच्याबद्दल', href: '#' },
  { label: 'Gallery', mr: 'गॅलरी', href: '#' },
  { label: 'Awards', mr: 'पुरस्कार', href: '#' },
  { label: 'Contact', mr: 'संपर्क', href: '#' },
]

const productItems = [
  { label: 'Fertilizers', mr: 'खते', href: '#' },
  { label: 'Bio Fertilizers', mr: 'जैविक खते', href: '#' },
  { label: 'Plant Nutrition', mr: 'वनस्पती पोषण', href: '#' },
]

function Nav() {
  const [language, setLanguage] = useState('en')
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const getLabel = (item) => (language === 'mr' ? item.mr : item.label)

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="#" aria-label="Agriculture home" onClick={closeMobileMenu}>
          <span className="logo-mark" aria-hidden="true">A</span>
          <span>Agriculture</span>
        </a>

        <div className="nav-links">
          {navItems.slice(0, 2).map((item) => (
            <a className="nav-link" href={item.href} key={item.label}>
              {getLabel(item)}
            </a>
          ))}

          <div
            className={`products-wrapper ${productsOpen ? 'open' : ''}`}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className={`products-trigger ${productsOpen ? 'active' : ''}`}
              type="button"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((current) => !current)}
            >
              {language === 'mr' ? 'उत्पादने' : 'Products'}
              <span className="chevron" aria-hidden="true">⌄</span>
            </button>

            {productsOpen && (
              <div className="products-menu">
                {productItems.map((item) => (
                  <a href={item.href} key={item.label} onClick={() => setProductsOpen(false)}>
                    {getLabel(item)}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => (
            <a className="nav-link" href={item.href} key={item.label}>
              {getLabel(item)}
            </a>
          ))}
        </div>

        <div className="language-switcher" aria-label="Language selector">
          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
          <button
            type="button"
            className={language === 'mr' ? 'active' : ''}
            onClick={() => setLanguage('mr')}
            aria-pressed={language === 'mr'}
          >
            मराठी
          </button>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? '×' : '☰'}
        </button>

        {mobileOpen && (
          <div className="mobile-menu">
            {navItems.slice(0, 2).map((item) => (
              <a href={item.href} key={item.label} onClick={closeMobileMenu}>
                {getLabel(item)}
              </a>
            ))}

            <button type="button" onClick={() => setProductsOpen((current) => !current)}>
              {language === 'mr' ? 'उत्पादने' : 'Products'} {productsOpen ? '⌃' : '⌄'}
            </button>

            {productsOpen && (
              <div className="mobile-products">
                {productItems.map((item) => (
                  <a href={item.href} key={item.label} onClick={closeMobileMenu}>
                    {getLabel(item)}
                  </a>
                ))}
              </div>
            )}

            {navItems.slice(2).map((item) => (
              <a href={item.href} key={item.label} onClick={closeMobileMenu}>
                {getLabel(item)}
              </a>
            ))}

            <div className="mobile-language" aria-label="Mobile language selector">
              <button
                type="button"
                className={language === 'en' ? 'active' : ''}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={language === 'mr' ? 'active' : ''}
                onClick={() => setLanguage('mr')}
              >
                मराठी
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Nav
