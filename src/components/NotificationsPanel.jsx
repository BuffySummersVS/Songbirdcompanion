import { useEscapeKey } from "../hooks/useEscapeKey";
import Modal, { ModalHeader } from "./Modal";
import ComingSoon from "./ComingSoon";
import { getAvatarSrc } from "../data/avatars";
import { SOCIAL_FEATURES_ENABLED } from "../data/featureFlags";

export default function NotificationsPanel({ onClose, requests, onAccept, onDecline }) {
  useEscapeKey(onClose);

  return (
    <Modal onClose={onClose}>
      <ModalHeader title="Notifications" onClose={onClose} />

      {!SOCIAL_FEATURES_ENABLED ? (
        <ComingSoon
          title="Friend Requests — Coming Soon"
          description="Friend requests will show up here once SongBird has real account sync across devices."
        />
      ) : requests.length === 0 ? (
        <div className="notif-empty">
          <p>No new notifications.</p>
          <p>When someone sends you a friend request it will appear here.</p>
        </div>
      ) : (
        <div className="notif-list">
          {requests.map(req => (
            <div key={req.fromId} className="notif-item">
              <img
                src={getAvatarSrc(req.fromAvatar)}
                alt={req.fromUsername}
                className="notif-avatar"
              />
              <div className="notif-text">
                <strong>{req.fromUsername}</strong> wants to be your friend
              </div>
              <div className="notif-actions">
                <button
                  type="button"
                  className="notif-accept-btn"
                  onClick={() => onAccept(req.fromId)}
                >
                  Accept
                </button>
                <button
                  type="button"
                  className="notif-decline-btn"
                  onClick={() => onDecline(req.fromId)}
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}
