import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", mr: "मुख्यपृष्ठ", href: "/" },
  { label: "About", mr: "आमच्याबद्दल", href: "/about" },
  { label: "Products", mr: "उत्पादने", href: "/products" },
  { label: "Gallery", mr: "गॅलरी", href: "#" },
  { label: "Awards", mr: "पुरस्कार", href: "#" },
  { label: "Contact", mr: "संपर्क", href: "#contact" },
];

function Navbar({ mobileOpen, setMobileOpen }) {
  const location = useLocation();
  const getLabel = (item) => (location.pathname === "/products" && item.label === "Products" ? "Products" : item.label);

  return (
    <div className="navigation-bar">
      <div className="header-container navigation-inner">
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            item.href.startsWith("/") ? (
              <Link
                className={`nav-link${location.pathname === item.href ? " active" : ""}`}
                to={item.href}
                key={item.label}
                onClick={() => setMobileOpen(false)}
              >
                {getLabel(item)}
              </Link>
            ) : (
              <a className="nav-link" href={item.href} key={item.label} onClick={() => setMobileOpen(false)}>
                {item.label === "Contact" ? "Contact" : getLabel(item)}
              </a>
            )
          ))}
        </nav>

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
          <nav className="mobile-navigation" aria-label="Mobile navigation">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  to={item.href}
                  key={item.label}
                  onClick={() => setMobileOpen(false)}
                >
                  {getLabel(item)}
                </Link>
              ) : (
                <a href={item.href} key={item.label} onClick={() => setMobileOpen(false)}>
                  {getLabel(item)}
                </a>
              )
            )}
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
