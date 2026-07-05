import { formatDate } from "../../data/calendarHelpers";

export default function EventCard({ event, onOpen, getColor }) {
  const catColor = getColor(event);
  const s = event._status;
  return (
    <article
      className="ev-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(event)}
      onKeyDown={e => e.key === "Enter" && onOpen(event)}
    >
      <div className="ev-card-accent" style={{ background: catColor }} />
      <div className="ev-card-body">
        <div className="ev-card-head">
          <span className="ev-cat-pill" style={{ color: catColor, borderColor: `${catColor}66` }}>
            {event.isCustom ? "Personal" : event.category}
          </span>
          <span className={`ev-status-pill ev-status-pill--${s.toLowerCase()}`}>{s}</span>
        </div>
        <h3 className="ev-card-title">{event.title}</h3>
        <p className="ev-card-range">
          <span>{formatDate(event.startDate)}</span>
          <span className="ev-range-arrow">→</span>
          <span>{event.endDate === "Unknown" ? "End date TBA" : formatDate(event.endDate)}</span>
        </p>
        {event.description && <p className="ev-card-desc">{event.description}</p>}
        {!event.isCustom && event.sourceUrl && (
          <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="ev-source-link" onClick={e => e.stopPropagation()}>
            Source ↗
          </a>
        )}
      </div>
    </article>
  );
}
