import { useRef, useState } from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useAutoFocus } from "../../hooks/useAutoFocus";
import { formatDate } from "../../data/calendarHelpers";
import { CUSTOM_PALETTE } from "./constants";

export default function CustomEventForm({ initial, defaults, onSave, onClose }) {
  const isEditing = !!initial?.id;

  const [title,       setTitle] = useState(initial?.title       ?? "");
  const [startDate,   setStart] = useState(initial?.startDate   ?? defaults?.startDate ?? "");
  const [endDate,     setEnd]   = useState(initial?.endDate === "Unknown" ? "" : (initial?.endDate ?? defaults?.endDate ?? ""));
  const [description, setDesc]  = useState(initial?.description ?? "");
  const [color,       setColor] = useState(initial?.color       ?? CUSTOM_PALETTE[0]);
  const [error,       setError] = useState("");
  const [confirming,  setConfirming] = useState(false); // step 2: confirmation screen

  useEscapeKey(() => { if (confirming) setConfirming(false); else onClose(); });
  const panelRef = useFocusTrap();
  const titleInputRef = useRef(null);
  useAutoFocus(titleInputRef, !confirming);

  function handleReview(e) {
    e.preventDefault();
    if (!title.trim()) { setError("Title is required."); return; }
    if (!startDate)    { setError("Start date is required."); return; }
    if (endDate && endDate < startDate) { setError("End date must be on or after start date."); return; }
    setError("");
    setConfirming(true);
  }

  function handleConfirm() {
    onSave({ title: title.trim(), startDate, endDate: endDate || startDate, description: description.trim(), color });
  }

  const resolvedEnd = endDate || startDate;

  return (
    <div className="ev-popup-overlay" onClick={confirming ? undefined : onClose}>
      <div ref={panelRef} className="ev-custom-form" role="dialog" aria-modal="true" tabIndex={-1} onClick={e => e.stopPropagation()}>

        {/* ── Step 1: form ── */}
        {!confirming && <>
          <div className="ev-custom-form-header">
            <h3 className="ev-custom-form-title">{isEditing ? "Edit Event" : "Add Personal Event"}</h3>
            <button type="button" className="ev-popup-close" onClick={onClose} aria-label="Close">✕</button>
          </div>

          <form style={{ display:"contents" }} onSubmit={handleReview}>
            {/* scrollable fields */}
            <div className="ev-custom-form-body">
              <label className="ev-field-label">
                Title <span className="ev-field-required">*</span>
                <input
                  ref={titleInputRef}
                  className="ev-field-input"
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Event name"
                  maxLength={80}
                />
              </label>

              <div className="ev-field-row">
                <label className="ev-field-label">
                  Start date <span className="ev-field-required">*</span>
                  <input className="ev-field-input" type="date" value={startDate} onChange={e => setStart(e.target.value)} />
                </label>
                <label className="ev-field-label">
                  End date
                  <input className="ev-field-input" type="date" value={endDate} min={startDate} onChange={e => setEnd(e.target.value)} />
                </label>
              </div>

              <label className="ev-field-label">
                Description
                <textarea
                  className="ev-field-input ev-field-textarea"
                  value={description}
                  onChange={e => setDesc(e.target.value)}
                  placeholder="Optional notes…"
                  rows={3}
                  maxLength={300}
                />
              </label>

              <div className="ev-field-label">
                Colour
                <div className="ev-colour-swatches">
                  {CUSTOM_PALETTE.map(c => (
                    <button
                      key={c}
                      type="button"
                      className={`ev-colour-swatch${color === c ? " selected" : ""}`}
                      style={{ background: c }}
                      onClick={() => setColor(c)}
                      aria-label={c}
                    />
                  ))}
                </div>
              </div>

              <div className="ev-notif-hint">
                You'll receive a browser reminder the day before and the day of this event.
              </div>

              {error && <p className="ev-field-error">{error}</p>}
            </div>

            {/* pinned action bar */}
            <div className="ev-custom-form-actions">
              <button type="button" className="ev-form-btn ev-form-btn--cancel" onClick={onClose}>Cancel</button>
              <button type="submit" className="ev-form-btn ev-form-btn--save">
                {isEditing ? "Review Changes" : "Review Event"}
              </button>
            </div>
          </form>
        </>}

        {/* ── Step 2: confirmation ── */}
        {confirming && <>
          <div className="ev-custom-form-header">
            <h3 className="ev-custom-form-title">{isEditing ? "Confirm Changes" : "Confirm Event"}</h3>
            <button type="button" className="ev-popup-close" onClick={() => setConfirming(false)} aria-label="Back">✕</button>
          </div>

          {/* scrollable confirmation content */}
          <div className="ev-confirm-body">
            <p className="ev-confirm-prompt">{isEditing ? "Save these changes to your event?" : "Add this event to your calendar?"}</p>

            <div className="ev-confirm-card" style={{ borderLeftColor: color }}>
              <div className="ev-confirm-swatch" style={{ background: color }} />
              <div className="ev-confirm-details">
                <span className="ev-confirm-title">{title}</span>
                <span className="ev-confirm-range">
                  {formatDate(startDate)}
                  {resolvedEnd !== startDate && <> → {formatDate(resolvedEnd)}</>}
                </span>
                {description && <span className="ev-confirm-desc">{description}</span>}
              </div>
            </div>

            <div className="ev-notif-hint">
              A reminder will fire the day before and the day this event starts.
            </div>
          </div>

          {/* pinned action bar */}
          <div className="ev-custom-form-actions">
            <button type="button" className="ev-form-btn ev-form-btn--cancel" onClick={() => setConfirming(false)}>
              ← Go Back
            </button>
            <button type="button" className="ev-form-btn ev-form-btn--save" onClick={handleConfirm}>
              {isEditing ? "Save Changes" : "Confirm & Add"}
            </button>
          </div>
        </>}

      </div>
    </div>
  );
}
