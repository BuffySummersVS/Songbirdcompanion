export default function ComingSoon({ title, description }) {
  return (
    <div className="coming-soon">
      <span className="coming-soon-icon" aria-hidden="true">🔒</span>
      <h4 className="coming-soon-title">{title}</h4>
      <p className="coming-soon-desc">{description}</p>
    </div>
  );
}
