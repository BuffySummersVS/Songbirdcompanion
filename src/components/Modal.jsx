import { useFocusTrap } from "../hooks/useFocusTrap";

export default function Modal({ onClose, panelClassName = "notif-panel", overlayClassName = "auth-modal-overlay", children }) {
  const panelRef = useFocusTrap();
  return (
    <div className={overlayClassName} onClick={onClose}>
      <div
        ref={panelRef}
        className={panelClassName}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export function ModalHeader({ title, onClose }) {
  return (
    <div className="auth-modal-header">
      <span className="auth-modal-title">{title}</span>
      <button type="button" className="auth-modal-close" onClick={onClose} aria-label="Close">✕</button>
    </div>
  );
}
