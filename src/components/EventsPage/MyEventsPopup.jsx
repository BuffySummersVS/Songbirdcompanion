import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { parseDate, formatDate } from "../../data/calendarHelpers";

export default function MyEventsPopup({ events, getColor, onClose, onOpenEvent, onAdd }) {
  useEscapeKey(onClose);
  const panelRef = useFocusTrap();

  const list = events
    .filter(e => e._status === "Active" || e._status === "Upcoming")
    .sort((a, b) => parseDate(a.startDate) - parseDate(b.startDate));

  return (
    <div className="ev-popup-overlay" onClick={onClose}>
      <div ref={panelRef} className="ev-status-popup" role="dialog" aria-modal="true" tabIndex={-1} onClick={e => e.stopPropagation()}>
        <div className="ev-status-popup-header">
          <div className="ev-status-popup-heading">
            <span className="ev-cat-pill" style={{ color: "#ec4899", borderColor: "rgba(236,72,153,.4)" }}>Personal</span>
            <h3 className="ev-status-popup-title">My Events</h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button type="button" className="ev-myevents-add-btn" onClick={onAdd}>+ Add Event</button>
            <button type="button" className="ev-popup-close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        <div className="ev-status-popup-list">
          {list.length === 0 ? (
            <div className="ev-myevents-empty">
              <p>No active or upcoming personal events.</p>
              <button type="button" className="ev-form-btn ev-form-btn--save" onClick={onAdd}>+ Add your first event</button>
            </div>
          ) : list.map(event => {
            const catColor = getColor(event);
            const statusLabel = event._status;
            return (
              <button key={event.id} type="button" className="ev-status-popup-item" onClick={() => onOpenEvent(event)}>
                <div className="ev-status-popup-accent" style={{ background: catColor }} />
                <div className="ev-status-popup-info">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                    <span className={`ev-status-pill ev-status-pill--${statusLabel.toLowerCase()}`}>{statusLabel}</span>
                  </div>
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
