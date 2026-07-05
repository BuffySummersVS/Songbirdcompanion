import { useEffect, useRef } from "react";
import { useEscapeKey } from "../hooks/useEscapeKey";

export default function UserMenu({ currentUser, avatarSrc, open, setOpen, onMyProfile, onFriendsList, onContactUs, onLogout }) {
  const menuRef = useRef(null);

  useEscapeKey(() => setOpen(false), open);

  useEffect(() => {
    if (!open) return;
    function onMouse(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onMouse);
    return () => document.removeEventListener('mousedown', onMouse);
  }, [open, setOpen]);

  return (
    <div className="user-menu-wrap" ref={menuRef}>
      <button
        type="button"
        className={`user-widget${open ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
        title={`Signed in as ${currentUser.username}`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <img src={avatarSrc} alt="Your avatar" className="user-widget-avatar" />
        <span className="user-widget-name">{currentUser.username}</span>
        <span className="user-menu-caret" aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="user-menu-dropdown">
          <button type="button" className="user-menu-item" onClick={onMyProfile}>
            <span className="user-menu-icon">👤</span>
            My Profile
          </button>
          <button type="button" className="user-menu-item" onClick={onFriendsList}>
            <span className="user-menu-icon">👥</span>
            Friends List
          </button>
          <button type="button" className="user-menu-item" onClick={onContactUs}>
            <span className="user-menu-icon">✉️</span>
            Contact SongBird
          </button>
          <div className="user-menu-divider" />
          <button type="button" className="user-menu-item user-menu-item--danger" onClick={onLogout}>
            <span className="user-menu-icon">🚪</span>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
