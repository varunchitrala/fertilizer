import LanguageSwitcher from './LanguageSwitcher'

function BrandHeader({ language, setLanguage }) {
  return (
    <div className="brand-header">
      <div className="header-container brand-header-inner">
        <a href="#" className="brand-logo" aria-label="Agriculture home">
          <span className="brand-symbol" aria-hidden="true"><img src="/public/agri logo.png" alt="Agriculture logo" /></span>
          <span className="brand-logo-text">AGRIFERT</span>
        </a>

        <div className="brand-copy">
          <h1>Krushi Fertilizers & Agro Industries</h1>
          <p>कृषी फर्टिलायझर्स अँड अॅग्रो इंडस्ट्रीज</p>
          <span>Quality inputs for a stronger, greener tomorrow</span>
        </div>

        <div className="brand-actions">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <div className="partner-mark" aria-label="Partner logo placeholder">
            <span>AG</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandHeader
