import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { parseDate, formatDate } from "../../data/calendarHelpers";

export default function StatusPopup({ status, events, getColor, onClose, onOpenEvent }) {
  useEscapeKey(onClose);
  const panelRef = useFocusTrap();

  const list = events
    .filter(e => e._status === status)
    .sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));

  return (
    <div className="ev-popup-overlay" onClick={onClose}>
      <div ref={panelRef} className="ev-status-popup" role="dialog" aria-modal="true" tabIndex={-1} onClick={e => e.stopPropagation()}>
        <div className="ev-status-popup-header">
          <div className="ev-status-popup-heading">
            <span className={`ev-status-pill ev-status-pill--${status.toLowerCase()}`}>{status}</span>
            <h3 className="ev-status-popup-title">{list.length} {status} Event{list.length !== 1 ? "s" : ""}</h3>
          </div>
          <button type="button" className="ev-popup-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="ev-status-popup-list">
          {list.map(event => {
            const catColor = getColor(event);
            return (
              <button key={event.id} type="button" className="ev-status-popup-item" onClick={() => onOpenEvent(event)}>
                <div className="ev-status-popup-accent" style={{ background: catColor }} />
                <div className="ev-status-popup-info">
                  <span className="ev-cat-pill" style={{ color: catColor, borderColor: `${catColor}66`, alignSelf: "flex-start", marginBottom: "4px" }}>
                    {event.isCustom ? "Personal" : event.category}
                  </span>
                  <span className="ev-status-popup-name">{event.title}</span>
                  <span className="ev-status-popup-range">
                    {formatDate(event.startDate)} → {event.endDate === "Unknown" ? "TBA" : formatDate(event.endDate)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
