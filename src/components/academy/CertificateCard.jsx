import { calculateLevel, getLevelTitle } from '../../academy/engine.js';

const TIER_COLORS = {
  bronze: '#cd7f32',
  silver: '#c0c0c0',
  gold:   '#ffd700',
};

export default function CertificateCard({ cert, issuedData, progress }) {
  const color = TIER_COLORS[cert.tier] || 'var(--grey)';
  const level = calculateLevel(progress.xp || 0);
  const levelTitle = getLevelTitle(level);
  const issuedDate = issuedData?.issuedAt
    ? new Date(issuedData.issuedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : null;

  if (!issuedData) {
    return (
      <div className="aca-cert-card locked">
        <div className="aca-cert-seal locked-seal">🏅</div>
        <div className="aca-cert-info">
          <p className="aca-cert-tier" style={{ color: 'var(--grey)' }}>{cert.tier} certificate</p>
          <p className="aca-cert-title">{cert.name}</p>
          <p className="aca-cert-sub">Complete all {cert.categoryId} paths to earn this.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aca-cert-card earned">
      <div className="aca-cert-seal" style={{ borderColor: color, color }}>🏅</div>
      <div className="aca-cert-info">
        <p className="aca-cert-tier" style={{ color }}>{cert.tier.toUpperCase()} CERTIFICATE</p>
        <p className="aca-cert-title">{cert.name}</p>
        <p className="aca-cert-subtitle">{cert.subtitle}</p>
        <p className="aca-cert-issued-text">{cert.issuedText}</p>
        <div className="aca-cert-meta">
          {issuedDate && <span>Completed: {issuedDate}</span>}
          <span>Academy Level {level} — {levelTitle}</span>
        </div>
      </div>
    </div>
  );
}
