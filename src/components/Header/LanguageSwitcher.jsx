function LanguageSwitcher({ language, setLanguage }) {
  return (
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
  )
}

export default LanguageSwitcher
