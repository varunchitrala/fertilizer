import LanguageSwitcher from './LanguageSwitcher'

function BrandHeader({ language, setLanguage }) {
  return (
    <div className="brand-header">
      <div className="header-container brand-header-inner">
        <a href="#" className="brand-logo" aria-label="Agripex home">
          <span className="brand-symbol">
            <img src="/agri-logo.png" alt="Agripex logo" />
          </span>
        </a>

        <div className="brand-copy">
          <h1>Agripex Pesticide Fertilizer &amp; Chemical Pvt. Ltd.</h1>
          <p>अ‍ॅग्रीपेक्स पेस्टिसाइड फर्टिलायझर अँड केमिकल प्रा. लि.</p>
          <span>Quality agricultural solutions for better growth and a greener tomorrow</span>
        </div>

        <div className="brand-actions">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </div>
  )
}

export default BrandHeader
