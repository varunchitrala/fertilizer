function AwardCertificateModal({ award, onClose }) {
  if (!award) return null;

  return (
    <div
      className="citation-modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-award-title"
    >
      <div className="citation-modal-container">
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close certificate preview"
        >
          ✕
        </button>
        <div className="certificate-paper">
          <div className="certificate-header-top">
            <span className="certificate-seal-badge">
              ★ OFFICIAL RECORD OF CONFERRAL
            </span>
            <span>
              {award.year} · {award.venue}
            </span>
          </div>
          <h3 className="certificate-title" id="modal-award-title">
            {award.title}
          </h3>
          <div className="certificate-conferred">
            Conferred by {award.conferredBy}
          </div>
          <div className="certificate-recipient">
            <span>Presented in Honor of</span>
            <strong>
              Agripex Pesticide Fertilizer &amp; Chemical Pvt. Ltd.
            </strong>
          </div>
          <div className="certificate-citation-block">
            <h4>Official Citation Statement</h4>
            <p>&ldquo;{award.citation}&rdquo;</p>
          </div>
          <div className="certificate-highlights-block">
            <h4>Key Recognized Accomplishments</h4>
            <ul>
              {award.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="certificate-footer-meta">
            <span className="certificate-verified">✔ {award.verifiedBy}</span>
            <span className="certificate-date">Conferred at {award.venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardCertificateModal;
