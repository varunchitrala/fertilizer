import { useEffect, useCallback } from "react";

function clearGoogleTranslateCookies() {
  const hostParts = window.location.hostname.split(".");
  const domains = ["", window.location.hostname];
  for (let i = 0; i < hostParts.length; i++) {
    domains.push("." + hostParts.slice(i).join("."));
  }
  for (const domain of domains) {
    const domainPart = domain ? `; domain=${domain}` : "";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainPart}`;
  }
}

function triggerGoogleTranslate(langCode) {
  const maxAttempts = 20;
  let attempts = 0;

  const tryTrigger = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
      return;
    }
    attempts++;
    if (attempts < maxAttempts) {
      setTimeout(tryTrigger, 200);
    }
  };

  tryTrigger();
}

function LanguageSwitcher({ language, setLanguage }) {
  const handleMarathi = useCallback(() => {
    setLanguage("mr");
    triggerGoogleTranslate("mr");
  }, [setLanguage]);

  const handleEnglish = useCallback(() => {
    setLanguage("en");
    clearGoogleTranslateCookies();
    // Reload to fully restore original English content
    window.location.reload();
  }, [setLanguage]);

  // On mount, if we're already set to Marathi (e.g. after navigation), re-trigger
  useEffect(() => {
    document.documentElement.classList.toggle(
      "language-marathi",
      language === "mr",
    );

    if (language === "mr") {
      triggerGoogleTranslate("mr");
    }

    return () => {
      document.documentElement.classList.remove("language-marathi");
    };
  }, [language]);

  return (
    <div className="language-switcher" aria-label="Language selector">
      <button
        type="button"
        className={language === "en" ? "active" : ""}
        onClick={handleEnglish}
        aria-pressed={language === "en"}
      >
        English
      </button>
      <button
        type="button"
        className={language === "mr" ? "active" : ""}
        onClick={handleMarathi}
        aria-pressed={language === "mr"}
      >
        मराठी
      </button>
    </div>
  );
}

export default LanguageSwitcher;
