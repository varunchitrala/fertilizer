const navItems = [
  { label: "Home", mr: "मुख्यपृष्ठ", href: "/" },
  { label: "About", mr: "आमच्याबद्दल", href: "/about" },
  { label: "Gallery", mr: "गॅलरी", href: "#" },
  { label: "Awards", mr: "पुरस्कार", href: "#" },
  { label: "Contact", mr: "संपर्क", href: "#contact" },
];

const productItems = [
  { label: "Fertilizers", mr: "खते", href: "#" },
  { label: "Bio Fertilizers", mr: "जैविक खते", href: "#" },
  { label: "Plant Nutrition", mr: "वनस्पती पोषण", href: "#" },
];

function Navbar({
  language,
  productsOpen,
  setProductsOpen,
  mobileOpen,
  setMobileOpen,
}) {
  const getLabel = (item) => (language === "mr" ? item.mr : item.label);

  return (
    <div className="navigation-bar">
      <div className="header-container navigation-inner">
        <div className="nav-links">
          {navItems.slice(0, 2).map((item) => (
            <a className="nav-link" href={item.href} key={item.label}>
              {getLabel(item)}
            </a>
          ))}

          <div className={`products-wrapper ${productsOpen ? "open" : ""}`}>
            <button
              className="products-trigger"
              type="button"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((current) => !current)}
            >
              {language === "mr" ? "उत्पादने" : "Products"}
              <span aria-hidden="true">⌄</span>
            </button>

            {productsOpen && (
              <div className="products-menu">
                {productItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.label}
                    onClick={() => setProductsOpen(false)}
                  >
                    <span>{getLabel(item)}</span>
                    <span aria-hidden="true">›</span>
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

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        {mobileOpen && (
          <div className="mobile-navigation">
            {navItems.slice(0, 2).map((item) => (
              <a
                href={item.href}
                key={item.label}
                onClick={() => setMobileOpen(false)}
              >
                {getLabel(item)}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setProductsOpen((current) => !current)}
            >
              {language === "mr" ? "उत्पादने" : "Products"}
              <span aria-hidden="true">{productsOpen ? "⌃" : "⌄"}</span>
            </button>

            {productsOpen && (
              <div className="mobile-products">
                {productItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.label}
                    onClick={() => setMobileOpen(false)}
                  >
                    {getLabel(item)}
                  </a>
                ))}
              </div>
            )}

            {navItems.slice(2).map((item) => (
              <a
                href={item.href}
                key={item.label}
                onClick={() => setMobileOpen(false)}
              >
                {getLabel(item)}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
