import { useState } from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { formatDate } from "../../data/calendarHelpers";

export default function EventPopup({ event, getColor, onClose, onEdit, onDelete }) {
  useEscapeKey(onClose);
  const panelRef = useFocusTrap();

  const [confirmDelete, setConfirmDelete] = useState(false);
  const catColor = getColor(event);
  const s = event._status;

  return (
    <div className="ev-popup-overlay" onClick={onClose}>
      <div ref={panelRef} className="ev-popup" role="dialog" aria-modal="true" tabIndex={-1} onClick={e => e.stopPropagation()}>
        <div className="ev-popup-topbar" style={{ background: catColor }} />
        <div className="ev-popup-inner">
          <div className="ev-popup-head">
            <div className="ev-popup-pills">
              <span className="ev-cat-pill" style={{ color: catColor, borderColor: `${catColor}66` }}>
                {event.isCustom ? "Personal" : event.category}
              </span>
              <span className={`ev-status-pill ev-status-pill--${s.toLowerCase()}`}>{s}</span>
            </div>
            <button type="button" className="ev-popup-close" onClick={onClose} aria-label="Close">✕</button>
          </div>

          <h3 className="ev-popup-title">{event.title}</h3>

          <div className="ev-popup-dates">
            <div className="ev-popup-date-block">
              <span className="ev-popup-date-label">Starts</span>
              <span className="ev-popup-date-val">{formatDate(event.startDate)}</span>
            </div>
            <span className="ev-popup-arrow">→</span>
            <div className="ev-popup-date-block">
              <span className="ev-popup-date-label">Ends</span>
              <span className="ev-popup-date-val">{event.endDate === "Unknown" ? "TBA" : formatDate(event.endDate)}</span>
            </div>
          </div>

          {event.description && <p className="ev-popup-desc">{event.description}</p>}

          {!event.isCustom && event.sourceUrl && (
            <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="ev-popup-source">
              View Source ↗
            </a>
          )}

          {event.isCustom && (
            <div className="ev-popup-custom-actions">
              <button type="button" className="ev-popup-edit-btn" onClick={() => onEdit(event)}>Edit</button>
              {confirmDelete ? (
                <div className="ev-popup-delete-confirm">
                  <span>Delete this event?</span>
                  <button type="button" className="ev-popup-delete-btn--yes" onClick={() => onDelete(event.id)}>Yes, delete</button>
                  <button type="button" className="ev-popup-delete-btn--no"  onClick={() => setConfirmDelete(false)}>Cancel</button>
                </div>
              ) : (
                <button type="button" className="ev-popup-delete-btn" onClick={() => setConfirmDelete(true)}>Delete</button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
